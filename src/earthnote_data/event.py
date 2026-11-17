"""The storm layer: hourly rain, wind and temperature for one of the site's views, observed and forecast, as web frames.

    PYTHONPATH=src .venv/bin/python -m earthnote_data.event              # fetch what is new, rewrite event.json
    PYTHONPATH=src .venv/bin/python -m earthnote_data.event --publish    # ... then send the frames to the R2 bucket
    EARTHNOTE_EVENT=continuum ...                                        # the rolling view (default: nov2026_ar)

Views (EVENTS): the Fall 2026 atmospheric-river event (Nov 7-16, kept whole, frozen once its late data is in) and the
Continuum (the last 7 days and 3 days ahead, rolling; older hours are deleted). The hourly cron runs the Continuum
first, which takes the snapshot of the feeds that keep no history (outages, roads, sewers, ferries, flood outlines);
the event reads those recordings (--no-record). The recordings go to the lab's S3 bucket; the frames to R2.

Frame k is the hour ending at start + (k + 1) h. Observed: MRMS rain (Pass 2 replaces Pass 1 when it appears) and
HRRR analysis wind and temperature. Forecast: every 6-hourly HRRR (48 h, hourly) and ECMWF IFS run (3-hourly,
spread over the hours) from a day before the window, kept so each can be compared with what happened. River flows
(see rivers.py): the National Water Model's hourly analysis, and a "what if" from its newest forecasts for the hours
not analysed yet. Re-running is cheap: frames
already written are skipped, so cron can call this every hour.
"""
from __future__ import annotations

import argparse
import concurrent.futures as cf
import fcntl
import json
import os
import shutil
import subprocess
import time
from datetime import datetime, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

import numpy as np
from PIL import Image

from . import feeds as FD
from . import ferries as FY
from . import ground as GR
from . import ocean as OC
from . import power as PW
from . import region as REGION
from . import rivers as RV
from . import roads as RD
from . import sewers as SW
from . import weather as W
from . import wsc as WS
from .paths import BUNDLE, ROOT

RUN_EVERY = 6                                          # hours: 00, 06, 12, 18 UTC
PT = ZoneInfo("America/Los_Angeles")
# The site's views. A fixed event keeps every hour and every forecast run. A rolling view ("back"/"ahead") numbers its
# hours from a fixed start too (so a frame's name never changes), but keeps only the last `back` hours, the forecast
# to the first midnight (PT) at least `ahead` hours out, and the last day of forecast runs; older ones are deleted.
EVENTS = {
    "nov2026_ar": {"key": "nov2026_ar", "title": "Atmospheric River event · Fall 2026",
                   "start": datetime(2026, 11, 7, 8, tzinfo=W.UTC),     # Sat Nov 7 00:00 PST
                   "hours": 240,                                        # to Mon Nov 16 24:00 PST
                   "runs_from": datetime(2026, 11, 6, 0, tzinfo=W.UTC), # forecasts issued from a day before the window
                   "until": datetime(2026, 11, 18, 20, tzinfo=W.UTC)},  # late data in by then; frozen after
    "continuum": {"key": "continuum", "title": "Continuum",
                  "start": datetime(2026, 11, 1, 8, tzinfo=W.UTC), "back": 7 * 24, "ahead": 72},
}


def _window(ev: dict, now: datetime) -> dict:
    """The event with its `hours`, `first` kept hour and `runs_from` for now (fixed events: as given)."""
    ev = {"tz": "America/Los_Angeles", "first": 0, **ev}
    if "back" in ev:
        end = (now + timedelta(hours=ev["ahead"])).astimezone(PT).replace(hour=0, minute=0, second=0, microsecond=0) + timedelta(days=1)
        ev["hours"] = round((end - ev["start"]).total_seconds() / 3600)
        ev["first"] = max(0, int((now - ev["start"]).total_seconds() // 3600) - ev["back"])
        day = now - timedelta(hours=24)
        ev["runs_from"] = day.replace(hour=day.hour - day.hour % RUN_EVERY, minute=0, second=0, microsecond=0)
    return ev


EVENT = _window(EVENTS[os.environ.get("EARTHNOTE_EVENT", "nov2026_ar")], datetime.now(W.UTC))
FIRST = EVENT["first"]
WINDOW_START = EVENT["start"] + timedelta(hours=FIRST)   # the kept hours: [FIRST, hours), i.e. from here
HRRR_HOURS = 48
RAIN = W.LatLonGrid(-140.0, -112.0, 37.0, 54.0, 0.025)   # MRMS and HRRR rain, ~2.5 km
MET = W.LatLonGrid(-140.0, -112.0, 37.0, 54.0, 0.1)      # HRRR wind and temperature
COARSE = W.LatLonGrid(-140.0, -112.0, 37.0, 54.0, 0.25)  # ECMWF, at its native spacing
GUST = W.LatLonGrid(REGION.WEST, REGION.EAST, REGION.SOUTH, REGION.NORTH, 0.03)   # gusts on land, the map's region
OUT = BUNDLE.parent / "events" / EVENT["key"]
R2_KEYFILE = Path.home() / ".config" / "earthnote" / "r2.env"
S3_KEYFILE = Path.home() / ".config" / "earthnote" / "s3.env"   # the lab's bucket for the recordings


def frame_of(valid: datetime) -> int:
    return round((valid - EVENT["start"]).total_seconds() / 3600) - 1


def valid_of(k: int) -> datetime:
    return EVENT["start"] + timedelta(hours=k + 1)


def end() -> datetime:
    return valid_of(EVENT["hours"] - 1)


def save(path: Path, arr: np.ndarray) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(".tmp.png")
    Image.fromarray(arr, "L" if arr.ndim == 2 else "RGBA").save(tmp, optimize=False, compress_level=9)
    tmp.replace(path)


def load_state() -> dict:
    p = OUT / "event.json"
    st = json.loads(p.read_text()) if p.exists() else {"obs": {"rain": {}, "met": []}, "runs": {"hrrr": {}, "ecmwf": {}}}
    st["obs"].setdefault("gust", [])
    st["power"] = (st.get("power") or {}).get("frames", {})
    st["roads"] = (st.get("roads") or {}).get("frames", {})
    st["sewers"] = (st.get("sewers") or {}).get("frames", {})
    st["ferries"] = (st.get("ferries") or {}).get("frames", {})
    st.setdefault("sea", {"obs": []})
    st["sea"].setdefault("fc", {"run": None, "frames": []})
    if st.get("hours", EVENT["hours"]) != EVENT["hours"]:
        # the window was lengthened: runs cut off at the old end are fetched again for the new hours (frames already
        # written are kept)
        for runs in st["runs"].values():
            for r in runs.values():
                r["complete"] = r["gust"] = False
    rv = st.get("rivers", {})
    st["rivers"] = {"obs": rv.get("obs", []), "whatif": rv.get("whatif", {}), "inundation": rv.get("inundation", {})}
    return st


# ---------------------------------------------------------------- observed

def obs_rain(k: int) -> tuple[int, str] | None:
    got = W.mrms_hour(valid_of(k))
    if got is None:
        return None
    v, which = got
    save(OUT / "obs" / "rain" / f"k{k:03d}.png", W.encode_rain(W.mrms_to_grid(v, RAIN)))
    return k, which


def _hrrr_maps(sample: bytes) -> tuple[W.HrrrMap, W.HrrrMap]:
    return W.HrrrMap(RAIN, sample), W.HrrrMap(MET, sample)


def obs_met(k: int) -> int | None:
    f = W.hrrr_fields(valid_of(k), 0, rain=False)
    if f is None:
        return None
    _, met = _hrrr_maps(f["t"])
    u, v = _field_pair(f, met)
    save(OUT / "obs" / "met" / f"k{k:03d}.png", W.encode_met(u, v, met.apply(_values(f["t"]))))
    return k


def _values(msg: bytes) -> np.ndarray:
    h, v = W._decode(msg)
    W.eccodes.codes_release(h)
    return v


def _field_pair(f: dict, m: W.HrrrMap):
    return m.wind(_values(f["u"]), _values(f["v"]))


# ---------------------------------------------------------------- forecasts

def hrrr_run(init_s: str) -> tuple[str, list[int], bool] | None:
    """Every forecast hour of one HRRR run that falls in the window: (init, frames written, all of them?); None if
    the run's last hour is not posted yet."""
    init = datetime.strptime(init_s, "%Y%m%d%H").replace(tzinfo=W.UTC)
    if not W._idx(W.hrrr_url(init, HRRR_HOURS)):
        return None
    base = OUT / "fc" / "hrrr" / init_s
    hours = [(fh, frame_of(init + timedelta(hours=fh))) for fh in range(1, HRRR_HOURS + 1)]
    hours = [(fh, k) for fh, k in hours if 0 <= k < EVENT["hours"]]
    have = lambda k: (base / "rain" / f"k{k:03d}.png").exists() and (base / "met" / f"k{k:03d}.png").exists()
    done = [k for _, k in hours if have(k)]
    todo = [(fh, k) for fh, k in hours if not have(k)]
    if todo:
        rain_map, met_map = None, None
        with cf.ThreadPoolExecutor(8) as io:   # downloads in parallel, decoding here
            for (fh, k), f in zip(todo, io.map(lambda x: W.hrrr_fields(init, x[0]), todo)):
                if f is None:
                    continue
                if rain_map is None:
                    rain_map, met_map = _hrrr_maps(f["t"])
                save(base / "rain" / f"k{k:03d}.png", W.encode_rain(rain_map.apply(_values(f["rain"]))))
                u, v = _field_pair(f, met_map)
                save(base / "met" / f"k{k:03d}.png", W.encode_met(u, v, met_map.apply(_values(f["t"]))))
                done.append(k)
    return init_s, sorted(done), len(done) == len(hours)


def ecmwf_run(init_s: str) -> tuple[str, list[int], bool] | None:
    """ECMWF steps (3-hourly) as hourly frames: each step's rain spread evenly over its hours, wind and temperature
    interpolated linearly between steps. None until the run's steps reach the window's end or 144 h."""
    init = datetime.strptime(init_s, "%Y%m%d%H").replace(tzinfo=W.UTC)
    steps = [s for s in W.ecmwf_steps(init) if s <= 144]
    need = min(144 if init.hour in (0, 12) else 90, int((end() - init).total_seconds() // 3600))   # 06/18z runs stop at 90 h
    if not steps or steps[-1] < need:
        return None
    base = OUT / "fc" / "ecmwf" / init_s
    first_k, last_k = frame_of(init + timedelta(hours=1)), frame_of(init + timedelta(hours=steps[-1]))
    wanted = [k for k in range(max(0, first_k), min(EVENT["hours"] - 1, last_k) + 1)]
    if wanted and all((base / "rain" / f"k{k:03d}.png").exists() for k in wanted):
        return init_s, wanted, True
    prev = None
    done = []
    for s in steps:
        if init + timedelta(hours=s) <= EVENT["start"] - timedelta(hours=3):
            continue   # ends before the window (but keep the step just before it, for the first difference)
        f = W.ecmwf_fields(init, s)
        if f is None:
            return None
        g = lambda name: W.latlon_sample(f[name], f["lat0"], f["lon0"], f["dlat"], f["dlon"], COARSE)
        cur = {"s": s, "tp": g("tp"), "u": g("u"), "v": g("v"), "t": g("t")}
        if prev is not None and s - prev["s"] > 0:
            n = s - prev["s"]
            rate = np.clip(cur["tp"] - prev["tp"], 0, None) * 1000 / n   # m accumulated → mm per hour
            for i in range(1, n + 1):
                k = frame_of(init + timedelta(hours=prev["s"] + i))
                if 0 <= k < EVENT["hours"]:
                    w = i / n
                    mix = lambda a: prev[a] * (1 - w) + cur[a] * w
                    save(base / "rain" / f"k{k:03d}.png", W.encode_rain(rate))
                    save(base / "met" / f"k{k:03d}.png", W.encode_met(mix("u"), mix("v"), mix("t")))
                    done.append(k)
        prev = cur
    return init_s, sorted(done), True


# ---------------------------------------------------------------- wind gusts on land
# Every source on one grid: the HRRR analysis (observed), each HRRR run, and each ECMWF run (its 10 m gust at each
# 3-hourly step, the highest of the hour or of the 3 hours before it, held over those hours). Land only, with a few km of shore for the map to trim.

_gust_maps = {}


def _gust_map(sample: bytes) -> W.HrrrMap:
    if "map" not in _gust_maps:
        _gust_maps["map"] = W.HrrrMap(GUST, sample)
    return _gust_maps["map"]


def _gust_land() -> np.ndarray:
    """Cells on HRRR's land mask, grown by two cells (cached)."""
    path = W.CACHE / "gust_land.npy"
    if path.exists():
        return np.load(path)
    from scipy.ndimage import binary_dilation
    msg = W.hrrr_message(datetime(2026, 11, 9, 0, tzinfo=W.UTC), 0, "LAND:surface")
    keep = binary_dilation(_gust_map(msg).apply(_values(msg)) > 0.5, iterations=2)
    np.save(path, keep)
    return keep


def _hrrr_gust(init: datetime, fhour: int, path: Path) -> bool:
    msg = W.hrrr_message(init, fhour, "GUST:surface")
    if msg is None:
        return False
    save(path, W.encode_gust(_gust_map(msg).apply(_values(msg)), _gust_land()))
    return True


def obs_gust(k: int) -> int | None:
    return k if _hrrr_gust(valid_of(k), 0, OUT / "obs" / "gust" / f"k{k:03d}.png") else None


def run_gust(job: tuple[str, str, list[int]]) -> tuple[str, str, bool]:
    """Gust frames for the hours a forecast run covers: (model, init, all written?)."""
    model, init_s, frames = job
    init = datetime.strptime(init_s, "%Y%m%d%H").replace(tzinfo=W.UTC)
    base = OUT / "fc" / model / init_s / "gust"
    todo = [k for k in frames if not (base / f"k{k:03d}.png").exists()]
    lead = lambda k: round((valid_of(k) - init).total_seconds() / 3600)
    if model == "hrrr":
        with cf.ThreadPoolExecutor(8) as io:
            ok = list(io.map(lambda k: _hrrr_gust(init, lead(k), base / f"k{k:03d}.png"), todo))
        return model, init_s, all(ok)
    steps = [s for s in W.ecmwf_steps(init) if s <= 144]
    land, ok = _gust_land(), True
    for prev, s in zip([0] + steps, steps):
        ks = [k for k in todo if prev < lead(k) <= s]
        if not ks:
            continue
        # the highest gust in the last hour (posted to 90 h), then in the last 3 hours
        f = W.ecmwf_fields(init, s, {"10fg": "gust"}) or W.ecmwf_fields(init, s, {"10fg3": "gust"})
        if f is None:
            ok = False; continue
        q = W.encode_gust(W.latlon_sample(f["gust"], f["lat0"], f["lon0"], f["dlat"], f["dlon"], GUST), land)
        for k in ks:
            save(base / f"k{k:03d}.png", q)
    return model, init_s, ok


# ---------------------------------------------------------------- rivers

RIVERS = OUT / "rivers"
CACHE_IDS = RV.CACHE / "rivers" / "ids.npy"
_picker = None


def _rivers_picker() -> RV.Picker:
    global _picker   # one per worker process
    if _picker is None:
        _picker = RV.Picker(np.load(CACHE_IDS))
    return _picker


def river_reaches(log=print) -> None:
    """The reaches (one-off): reaches.bin and reaches.json, and the ids the flow pickers need."""
    if (RIVERS / "reaches.json").exists() and CACHE_IDS.exists():
        return
    reaches = RV.fetch_reaches(log)
    layout = RV.write_reaches(reaches, RIVERS)
    (RIVERS / "reaches.json").write_text(json.dumps(layout, separators=(",", ":")))
    np.save(CACHE_IDS, np.asarray([r["id"] for r in reaches], np.int64))
    log(f"rivers: {layout['count']} reaches, {layout['paths']} paths, {layout['vertices']} vertices")


def river_obs(k: int) -> int | None:
    data = RV._get(RV.analysis_url(valid_of(k)))
    if data is None:
        return None
    path = RIVERS / "obs" / f"k{k:03d}.bin"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(RV.encode_flow(_rivers_picker()(data)).tobytes())
    return k


def river_whatif(kind: str, now: datetime, have: dict | None, log=print) -> dict | None:
    """The newest run of one NWM forecast whose hours in the window are all posted, as whatif/<kind>_<init>.bin
    (replacing the previous run's file): {init, first, count}. Returns `have` when it is already the newest."""
    ahead, every, url = RV.FORECASTS[kind]
    t = now.replace(minute=0, second=0, microsecond=0)
    t -= timedelta(hours=t.hour % every)
    for _ in range(24 // every + 2):   # back through a day of runs, newest first
        hours = [(fh, frame_of(t + timedelta(hours=fh))) for fh in range(1, ahead + 1)]
        hours = [(fh, k) for fh, k in hours if 0 <= k < EVENT["hours"]]
        init_s = t.strftime("%Y%m%d%H")
        if hours and have and have.get("init") == init_s:
            return have
        if hours and RV.exists(url(t, hours[-1][0])):
            pick = _rivers_picker()
            with cf.ThreadPoolExecutor(12) as io:
                files = list(io.map(lambda h: RV._get(url(t, h[0])), hours))
            if all(f is not None for f in files):
                folder = RIVERS / "whatif"
                folder.mkdir(parents=True, exist_ok=True)
                for old in folder.glob(f"{kind}_*.bin"):
                    old.unlink()
                (folder / f"{kind}_{init_s}.bin").write_bytes(np.stack([RV.encode_flow(pick(f)) for f in files]).tobytes())
                log(f"rivers: what-if from the NWM {kind}-range run of {init_s}")
                return {"init": init_s, "first": hours[0][1], "count": len(hours)}
        t -= timedelta(hours=every)
    return have


# ---------------------------------------------------------------- sea

def sea_obs(k: int) -> int | None:
    rgba = OC.sea_frame(valid_of(k))
    if rgba is None:
        return None
    save(OUT / "sea" / "obs" / f"k{k:03d}.png", rgba)
    return k


def sea_fc(job: tuple[int, str]) -> int | None:
    k, run_s = job
    run = datetime.strptime(run_s, "%Y%m%d%H").replace(tzinfo=W.UTC)
    rgba = OC.sea_frame(valid_of(k), OC.forecast_url(run, valid_of(k)))
    if rgba is None:
        return None
    save(OUT / "sea" / "fc" / f"k{k:03d}.png", rgba)
    return k


SEA_AHEAD = 6   # hours past now that the sea what-if reaches


# ---------------------------------------------------------------- the update

def run_inits(now: datetime) -> list[str]:
    out, t = [], EVENT["runs_from"]
    while t < min(now, end()):
        out.append(t.strftime("%Y%m%d%H"))
        t += timedelta(hours=RUN_EVERY)
    return out


STATION_FILES = ("ground/snow.json", "ground/wells.json", "rivers/reservoirs.json", "sea/tides.json")
STATIONS = ROOT / "data" / "archive" / "stations"


def keep_station_series(folder: str, log=print) -> None:
    """Save the view's station series as the map shows them (snow, soil moisture, groundwater, reservoirs, tides) to
    the recordings, once per `folder` and file. The agencies keep these records, but revise provisional readings
    later, so this is the version the map showed."""
    import gzip
    saved = []
    for f in STATION_FILES:
        src, dest = OUT / f, STATIONS / folder / f"{Path(f).stem}.json.gz"
        if src.exists() and not dest.exists():
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(gzip.compress(src.read_bytes()))
            saved.append(Path(f).stem)
    if saved:
        log(f"station series as shown saved to stations/{folder}: {', '.join(saved)}")


def prune(st: dict, now: datetime, log=print) -> None:
    """A rolling view: delete the hours before FIRST and the forecast runs older than a day, from the frames and the
    state (the recordings and the public archives still hold them)."""
    gone = 0
    for d in ("obs/rain", "obs/met", "obs/gust", "rivers/obs", "rivers/inundation", "sea/obs", "power", "roads", "sewers", "ferries"):
        for p in (OUT / d).glob("k*.*"):
            if int(p.stem[1:]) < FIRST:
                p.unlink(); gone += 1
    keep = lambda k: int(k) >= FIRST
    st["obs"]["rain"] = {k: v for k, v in st["obs"]["rain"].items() if keep(k)}
    for key in ("met", "gust"):
        st["obs"][key] = [k for k in st["obs"][key] if keep(k)]
    st["rivers"]["obs"] = [k for k in st["rivers"]["obs"] if keep(k)]
    st["rivers"]["inundation"] = {k: v for k, v in st["rivers"]["inundation"].items() if keep(k)}
    st["sea"]["obs"] = [k for k in st["sea"]["obs"] if keep(k)]
    for key in ("power", "roads", "sewers", "ferries"):
        st[key] = {k: v for k, v in st.get(key, {}).items() if keep(k)}
    runs = set(run_inits(now))
    for m in ("hrrr", "ecmwf"):
        for init in [i for i in st["runs"][m] if i not in runs]:
            del st["runs"][m][init]
            shutil.rmtree(OUT / "fc" / m / init, ignore_errors=True); gone += 1
    log(f"rolling window: from frame {FIRST} ({WINDOW_START:%b %d %H}Z); {gone} old frames and runs removed")


def update(workers: int = 24, log=print, record: bool = True) -> dict:
    """Fetch what is new for the event and rewrite event.json. `record`: also take this hour's snapshot of the feeds
    that keep no history (one view records; the others read the recordings)."""
    now = datetime.now(W.UTC)
    st = load_state()
    OUT.mkdir(parents=True, exist_ok=True)
    pending_rain = [k for k in range(FIRST, EVENT["hours"]) if valid_of(k) <= now and st["obs"]["rain"].get(str(k)) != "pass2"]
    pending_met = [k for k in range(FIRST, EVENT["hours"]) if valid_of(k) <= now and k not in st["obs"]["met"]]
    pending_gust = [k for k in range(FIRST, EVENT["hours"]) if valid_of(k) <= now and k not in st["obs"]["gust"]]
    log(f"observed: {len(pending_rain)} rain hours and {len(pending_met)} wind/temperature hours to fetch")
    # one HRRR message first, so the grid maps are cached before the worker processes need them
    sample = W.hrrr_fields(datetime(2026, 11, 9, 0, tzinfo=W.UTC), 0, rain=False)
    _hrrr_maps(sample["t"])
    river_reaches(log)
    pending_sea = [k for k in range(FIRST, EVENT["hours"]) if valid_of(k) <= now and k not in st["sea"]["obs"]]
    pending_river = [k for k in range(FIRST, EVENT["hours"]) if valid_of(k) <= now and k not in st["rivers"]["obs"]]
    with cf.ProcessPoolExecutor(workers) as pool:
        for k in pool.map(river_obs, pending_river):
            if k is not None:
                st["rivers"]["obs"].append(k)
        log(f"rivers: {len(pending_river)} analysis hours to fetch")
        for k in pool.map(sea_obs, pending_sea):
            if k is not None:
                st["sea"]["obs"].append(k)
        log(f"sea: {len(pending_sea)} SSCOFS nowcast hours to fetch")
        # the what-if: the newest run's forecast for the hours after the newest nowcast, a few hours past now
        run = OC.latest_run(now)
        last = max(st["sea"]["obs"], default=-1)
        if run:
            run_s = run.strftime("%Y%m%d%H")
            want = [k for k in range(last + 1, min(EVENT["hours"], frame_of(now + timedelta(hours=SEA_AHEAD)) + 1))
                    if timedelta(0) < valid_of(k) - run <= timedelta(hours=72)]
            have = set(st["sea"]["fc"]["frames"]) if st["sea"]["fc"]["run"] == run_s else set()
            got = sorted(have & set(want)) + [k for k in pool.map(sea_fc, [(k, run_s) for k in want if k not in have]) if k is not None]
            for old in (OUT / "sea" / "fc").glob("k*.png"):
                if int(old.stem[1:]) not in got:
                    old.unlink()
            st["sea"]["fc"] = {"run": run_s, "frames": sorted(got)}
            log(f"sea: what-if from the {run_s} run for {len(got)} hours")
    try:   # tide gauges: observed, predicted, flood levels
        tg = OC.tides(REGION, WINDOW_START, EVENT["hours"] - FIRST, now)
        (OUT / "sea").mkdir(parents=True, exist_ok=True)
        (OUT / "sea" / "tides.json").write_text(json.dumps({"updated": now.strftime("%Y-%m-%dT%H:%M:%SZ"), "k0": FIRST, "sites": tg}, separators=(",", ":")))
        log(f"tides: {len(tg)} NOAA tide gauges")
    except Exception as e:
        log(f"tides: skipped ({e})")
    try:   # reservoir levels: rewritten whole each hour (USGS revises recent readings)
        res = RV.all_reservoirs(WINDOW_START, EVENT["hours"] - FIRST, now, log)
        (RIVERS / "reservoirs.json").write_text(json.dumps({"updated": now.strftime("%Y-%m-%dT%H:%M:%SZ"), "k0": FIRST, "sites": res}, separators=(",", ":")))
        log(f"reservoirs: {len(res)} lakes and reservoirs")
    except Exception as e:   # a USGS outage must not stop the rest of the update
        log(f"reservoirs: skipped ({e})")
    try:   # NWS river gauges: measured stage, and the official forecast for hours ahead
        gs = RV.gauges(WINDOW_START, EVENT["hours"] - FIRST, now, log, archive=record)
        (RIVERS / "gauges.json").write_text(json.dumps({"updated": now.strftime("%Y-%m-%dT%H:%M:%SZ"), "k0": FIRST, "sites": gs}, separators=(",", ":")))
        log(f"gauges: {len(gs)} NWS river gauges")
    except Exception as e:
        log(f"gauges: skipped ({e})")
    try:   # BC river gauges (Water Survey of Canada): online 30 days, so the recording view keeps a record of them
        if record:
            WS.record(now, log)
        bc = WS.gauges(WINDOW_START, EVENT["hours"] - FIRST, now, log)
        (RIVERS / "bc_gauges.json").write_text(json.dumps({"updated": now.strftime("%Y-%m-%dT%H:%M:%SZ"), "k0": FIRST, "sites": bc}, separators=(",", ":")))
        log(f"gauges: {len(bc)} BC river gauges")
    except Exception as e:
        log(f"gauges: BC skipped ({e})")
    try:   # snow, soil moisture and groundwater at stations: their records are kept, so the window is sampled again
        GR.update(OUT / "ground", WINDOW_START, EVENT["hours"] - FIRST, now, log, k0=FIRST)
    except Exception as e:
        log(f"ground: skipped ({e})")
    try:   # power outages: the utilities' maps hold only what is out now, so each hour's snapshot is recorded
        if record:
            PW.record(now, log)
        power = {}
        for k, fr in PW.frames(WINDOW_START, EVENT["hours"] - FIRST, (RAIN.west, RAIN.east, RAIN.south, RAIN.north)).items():
            k += FIRST
            path = OUT / "power" / f"k{k:03d}.json"
            text = json.dumps(fr, separators=(",", ":"))
            if not path.exists() or path.read_text() != text:   # unchanged hours stay as they are on the site
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(text)
            power[str(k)] = sum(fr["totals"].values())
        st["power"] = power
    except Exception as e:
        log(f"power: skipped ({e})")
    try:   # roads, passes and ferries: like the outage maps, the feeds hold only what is in effect now
        if record:
            RD.record(now, log)
        roads = {}
        for k, fr in RD.frames(WINDOW_START, EVENT["hours"] - FIRST, (RAIN.west, RAIN.east, RAIN.south, RAIN.north)).items():
            k += FIRST
            path = OUT / "roads" / f"k{k:03d}.json"
            text = json.dumps(fr, separators=(",", ":"))
            if not path.exists() or path.read_text() != text:
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(text)
            roads[str(k)] = fr["counts"]
        st["roads"] = roads
    except Exception as e:
        log(f"roads: skipped ({e})")
    try:   # sewer overflows: the status maps hold only the present (King County's without times)
        if record:
            SW.record(now, log)
        sewers = {}
        for k, fr in SW.frames(WINDOW_START, EVENT["hours"] - FIRST).items():
            k += FIRST
            path = OUT / "sewers" / f"k{k:03d}.json"
            text = json.dumps(fr, separators=(",", ":"))
            if not path.exists() or path.read_text() != text:
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(text)
            sewers[str(k)] = fr["counts"]["overflowing"]
        st["sewers"] = sewers
    except Exception as e:
        log(f"sewers: skipped ({e})")
    try:   # ferry disruptions: WSF alerts (recorded with the roads), BC Ferries notices, news reports before recording
        if record:
            FY.record(now, log)
        (OUT / "ferries").mkdir(parents=True, exist_ok=True)
        (OUT / "ferries" / "routes.json").write_text(json.dumps(FY.routes(), separators=(",", ":")))
        ferries = {}
        for k, fr in FY.frames(WINDOW_START, EVENT["hours"] - FIRST).items():
            k += FIRST
            path = OUT / "ferries" / f"k{k:03d}.json"
            text = json.dumps(fr, separators=(",", ":"))
            if not path.exists() or path.read_text() != text:
                path.write_text(text)
            ferries[str(k)] = fr["counts"]
        st["ferries"] = ferries
    except Exception as e:
        log(f"ferries: skipped ({e})")
    if record:
        try:   # more feeds that keep no history (more utilities, transit, ferries, school closures): recorded raw
            FD.record(now, log)
        except Exception as e:
            log(f"feeds: skipped ({e})")
    try:   # NOAA's flood outlines: the service holds only the current hour, so it is recorded (and archived) as it goes
        if record:
            RV.fetch_inundation()
        # "storm-driven" against the flows at the window's start (a rolling view: at the start of that day, so the
        # baseline changes once a day)
        base = EVENT["start"] if not FIRST else WINDOW_START.replace(hour=0)
        # every archived hour inside the window that has no frame yet (this one, or ones from before a window change)
        for k in range(FIRST, EVENT["hours"]):
            if str(k) in st["rivers"]["inundation"]:
                continue
            fs = RV.archived_inundation(valid_of(k))
            snap = fs and RV.inundation(base, fs, log)
            if snap:
                path = RIVERS / "inundation" / f"k{k:03d}.json"
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(json.dumps(snap, separators=(",", ":")))
                st["rivers"]["inundation"][str(k)] = {"n": len(snap["polys"]), "km2": snap["km2"]}
    except Exception as e:
        log(f"flood outlines: skipped ({e})")
    for kind in RV.FORECASTS:
        got = river_whatif(kind, now, st["rivers"]["whatif"].get(kind), log)
        if got:
            st["rivers"]["whatif"][kind] = got
    with cf.ProcessPoolExecutor(workers) as pool:
        for r in pool.map(obs_rain, pending_rain):
            if r:
                st["obs"]["rain"][str(r[0])] = r[1]
        for k in pool.map(obs_met, pending_met):
            if k is not None:
                st["obs"]["met"].append(k)
        for model, fn in (("hrrr", hrrr_run), ("ecmwf", ecmwf_run)):
            todo = [i for i in run_inits(now) if not st["runs"][model].get(i, {}).get("complete")]
            log(f"{model}: {len(todo)} runs to fetch")
            for res in pool.map(fn, todo):
                if res:
                    init_s, frames, complete = res
                    st["runs"][model][init_s] = {"frames": frames, "complete": complete}
        try:   # a missing gust field must not stop the rest of the update
            _gust_land()   # once, before the workers need it
            for k in pool.map(obs_gust, pending_gust):
                if k is not None:
                    st["obs"]["gust"].append(k)
            jobs = [(m, i, r["frames"]) for m in ("hrrr", "ecmwf") for i, r in st["runs"][m].items() if not r.get("gust")]
            for model, init_s, ok in pool.map(run_gust, jobs):
                st["runs"][model][init_s]["gust"] = ok and st["runs"][model][init_s]["complete"]
            log(f"gusts: {len(pending_gust)} observed hours and {len(jobs)} runs to fetch")
        except Exception as e:
            log(f"gusts: skipped ({e})")
    st["obs"]["met"] = sorted(set(st["obs"]["met"]))
    st["obs"]["gust"] = sorted(set(st["obs"]["gust"]))
    if "back" in EVENT:
        prune(st, now, log)
    if record:   # a day's copy (the recording view's)
        keep_station_series(now.strftime("%Y%m%d"), log)
    doc = {
        "key": EVENT["key"], "title": EVENT["title"], "start": EVENT["start"].isoformat(), "hours": EVENT["hours"], "first": FIRST,
        **({"rolling": {"back": EVENT["back"], "ahead": EVENT["ahead"]}} if "back" in EVENT else {}),
        # frame k's meaning depends on the window; the web app puts this in every frame URL, so a change of window
        # can never be served from frames cached under the old numbering
        "version": f"{EVENT['start']:%Y%m%d%H}-{EVENT['hours']}",
        "tz": EVENT["tz"], "updated": now.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "grids": {"rain": RAIN.meta(), "met": MET.meta(), "coarse": COARSE.meta(), "gust": GUST.meta()},
        "encoding": {"rain": "mm = (q / 25)^2; 255 = no data",
                     "met": "u, v = (R, G - 128) / 4 m/s; T = B / 4 - 30 degC; A = 0: no data",
                     "gust": "m/s = byte (greyscale); 255 = no data or off land"},
        "obs": {"rain": dict(sorted(st["obs"]["rain"].items(), key=lambda x: int(x[0]))), "met": st["obs"]["met"], "gust": st["obs"]["gust"],
                "rainGrid": "rain", "metGrid": "met"},
        "runs": {m: dict(sorted(st["runs"][m].items())) for m in ("hrrr", "ecmwf")},
        "models": {"hrrr": {"label": "HRRR", "rainGrid": "rain", "metGrid": "met", "hours": HRRR_HOURS},
                   "ecmwf": {"label": "ECMWF", "rainGrid": "coarse", "metGrid": "coarse", "hours": 144}},
        "rivers": {"obs": sorted(set(st["rivers"]["obs"])), "whatif": st["rivers"]["whatif"],
                   "inundation": dict(sorted(st["rivers"]["inundation"].items(), key=lambda x: int(x[0]))), "model": "NWM analysis", "encoding": "Q = 0.05 * (10^(q / 40) - 1) m3/s; 255 = no data"},
        "power": {"frames": st.get("power", {}), "utilities": PW.UTILITIES},
        "roads": {"frames": st.get("roads", {}), "kinds": RD.KINDS},
        "sewers": {"frames": st.get("sewers", {}), "states": SW.STATES},
        "ferries": {"frames": st.get("ferries", {}), "statuses": FY.STATUSES},
        "sea": {"obs": sorted(set(st["sea"]["obs"])), "fc": st["sea"]["fc"], "grid": OC.SEA.meta(),
                "encoding": "R, G: current east, north m/s = (byte - 128) / 25; B: sea level m = byte / 25 - 3; A = 0: land"},
        "credits": {**W.CREDITS, **OC.CREDITS, "nwm": RV.CREDITS, "fim": "Flood outlines: NOAA NWS experimental inundation extent from the NWM analysis (maps.water.noaa.gov), recorded hourly", "nws": "River gauges: NOAA National Weather Service (NWPS) observed stage, flood categories, impact statements and river forecasts (NWRFC)", "power": PW.CREDITS, "roads": RD.CREDITS, "sewers": SW.CREDITS, "ferries": FY.CREDITS, "ground": GR.CREDITS, "wsc": WS.CREDITS, "usgs": "Reservoir levels: USGS National Water Information System and USACE CWMS (operators' provisional data)"},
    }
    (OUT / "event.json").write_text(json.dumps(doc, separators=(",", ":")))
    log(f"observed rain through frame {max(map(int, doc['obs']['rain']), default=-1)}; "
        f"runs: {len(doc['runs']['hrrr'])} HRRR, {len(doc['runs']['ecmwf'])} ECMWF")
    return doc


def _r2_env() -> dict:
    """rclone's settings for the R2 bucket, from ~/.config/earthnote/r2.env (R2_ACCOUNT_ID, R2_ACCESS_KEY_ID,
    R2_SECRET_ACCESS_KEY, R2_BUCKET, R2_PUBLIC_URL)."""
    if not R2_KEYFILE.exists():
        raise SystemExit(f"No R2 keys at {R2_KEYFILE}")
    c = dict(line.split("=", 1) for line in R2_KEYFILE.read_text().splitlines() if "=" in line and not line.startswith("#"))
    c = {k.strip(): v.strip().strip("\"'") for k, v in c.items()}
    return {**os.environ, "RCLONE_CONFIG_R2_TYPE": "s3", "RCLONE_CONFIG_R2_PROVIDER": "Cloudflare",
            "RCLONE_CONFIG_R2_ACCESS_KEY_ID": c["R2_ACCESS_KEY_ID"], "RCLONE_CONFIG_R2_SECRET_ACCESS_KEY": c["R2_SECRET_ACCESS_KEY"],
            "RCLONE_CONFIG_R2_ENDPOINT": f"https://{c['R2_ACCOUNT_ID']}.r2.cloudflarestorage.com",
            "RCLONE_CONFIG_R2_NO_CHECK_BUCKET": "true", "R2_BUCKET": c["R2_BUCKET"]}


def _keys(path: Path) -> dict:
    if not path.exists():
        raise SystemExit(f"No keys at {path}")
    c = dict(line.split("=", 1) for line in path.read_text().splitlines() if "=" in line and not line.lstrip().startswith("#"))
    return {k.strip(): v.strip().strip("\"'") for k, v in c.items()}


def _s3_env() -> dict:
    """rclone's settings for the recordings bucket (AWS S3), from ~/.config/earthnote/s3.env (S3_BUCKET, S3_PREFIX,
    S3_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY). The key may write and read, not delete."""
    c = _keys(S3_KEYFILE)
    return {**os.environ, "RCLONE_CONFIG_S3_TYPE": "s3", "RCLONE_CONFIG_S3_PROVIDER": "AWS", "RCLONE_CONFIG_S3_REGION": c["S3_REGION"],
            "RCLONE_CONFIG_S3_ACCESS_KEY_ID": c["AWS_ACCESS_KEY_ID"], "RCLONE_CONFIG_S3_SECRET_ACCESS_KEY": c["AWS_SECRET_ACCESS_KEY"],
            "RCLONE_CONFIG_S3_NO_CHECK_BUCKET": "true", "S3_DEST": f"s3:{c['S3_BUCKET']}/{c.get('S3_PREFIX', '')}".rstrip("/")}


def _rclone(env: dict, *a) -> None:
    rclone = shutil.which("rclone") or str(Path.home() / ".local" / "bin" / "rclone")
    subprocess.run([rclone, *a, "-q", "--checksum", "--fast-list", "--transfers", "32", "--checkers", "32"], env=env, check=True)   # errors go to the log


def backup_archive(log=print) -> None:
    """Copy the recordings of the feeds that can't be fetched again (flood outlines, outages, roads, sewers, ferries,
    gauges) to the lab's S3 bucket: new and changed files only, never deleting there (the bucket keeps old versions)."""
    env = _s3_env()
    try:
        _rclone(env, "copy", f"{ROOT / 'data' / 'archive'}/", env["S3_DEST"])
        log("recordings copied to S3")
    except subprocess.CalledProcessError as e:
        log(f"recordings copy to S3 failed (rclone exit {e.returncode})")


def publish(log=print, backup: bool = True) -> None:
    """Mirror the event frames to the R2 bucket the site reads them from: only changed files are sent, frames first
    and event.json last (so a viewer never sees an hour whose frames are not there yet), then stale frames go."""
    env = _r2_env()
    rclone = shutil.which("rclone") or str(Path.home() / ".local" / "bin" / "rclone")
    dest = f"r2:{env['R2_BUCKET']}/events/{EVENT['key']}"
    run = lambda *a: subprocess.run([rclone, *a, "-q", "--checksum", "--fast-list", "--transfers", "32", "--checkers", "32"],
                                    env=env, check=True)   # errors go to the log
    run("sync", f"{OUT}/", dest, "--exclude", "/event.json")
    run("copyto", str(OUT / "event.json"), f"{dest}/event.json")
    stamp = json.loads((OUT / "event.json").read_text())["updated"]
    log(f"published storm data as of {stamp}")
    if backup:
        backup_archive(log)


def main(argv=None) -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--publish", action="store_true", help="send the frames to the R2 bucket the site reads them from afterwards")
    ap.add_argument("--workers", type=int, default=24)
    ap.add_argument("--no-record", action="store_true", help="read the feeds' recordings but take no new snapshot (another view records)")
    args = ap.parse_args(argv)
    if EVENT.get("until") and datetime.now(W.UTC) > EVENT["until"]:
        keep_station_series(f"{EVENT['key']}_final")   # once: the event's series as it was left
        print(f"{EVENT['key']} is finished (frozen since {EVENT['until']:%b %d %H}Z); nothing to do"); return
    lock = open(ROOT / "data" / f".event.{EVENT['key']}.lock", "w")
    try:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
    except BlockingIOError:
        print("another update is running; skipping"); return
    t0 = time.time()
    update(args.workers, record=not args.no_record)
    if args.publish:
        publish(backup=not args.no_record)
    print(f"done in {time.time() - t0:.0f} s")


if __name__ == "__main__":
    main()
