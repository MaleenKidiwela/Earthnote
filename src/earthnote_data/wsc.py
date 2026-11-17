"""British Columbia's river gauges: the Water Survey of Canada's real-time hydrometric stations (the NWS gauges stop at
the border). Water level (m, on the station's own datum) and, where rated, discharge (m3/s), every 5 minutes.

The gauges have no flood stages, so each is measured against its own record: the annual peaks of its years on
record (HYDAT, through the last approved year): a typical year's peak (the median, about the 2-year flood), the
1-in-10-year peak (where there are 10 years or more) and the highest on record. Rivers are rated by flow; lakes and
reservoirs by level.

The real-time readings stay online 30 days, so each update records the province's hourly file (its last 2-3 days)
into a record per station, data/archive/wsc/<station>.json.gz, which goes to the lab's S3 bucket with the other
recordings; `python -m earthnote_data.wsc --backfill` fills it once from the 30-day file. The series are read from
that record: rivers/bc_gauges.json under the event's folder.
"""
from __future__ import annotations

import concurrent.futures as cf
import csv
import gzip
import io
import json
import statistics
import time
import urllib.request
from datetime import datetime, timezone

from . import region as R
from .paths import CACHE
from .rivers import _hourly

API = "https://api.weather.gc.ca/collections"
DATAMART = "https://dd.weather.gc.ca/today/hydrometric/csv/BC/{0}/BC_{0}_hydrometric.csv"   # hourly: ~2.5 days; daily: 30
ARCHIVE = CACHE.parent / "archive" / "wsc"
CREDITS = "BC river gauges: Water Survey of Canada real-time hydrometric data (provisional) and HYDAT annual peaks, via MSC GeoMet and the MSC Datamart"
SMALL = {"Near", "At", "Above", "Below", "Of", "The", "And", "In", "To", "From", "Into"}


def _get(url: str, timeout: int = 300) -> bytes:
    with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "earthnote"}), timeout=timeout) as r:
        return r.read()


def _name(s: str) -> str:
    words = s.title().split()
    return " ".join(w.lower() if i and w in SMALL else w for i, w in enumerate(words))


def stations(log=print) -> list[dict]:
    """The active real-time stations in the region (cached a day)."""
    path = CACHE / "rivers" / "wsc_stations.json"
    if path.exists() and time.time() - path.stat().st_mtime < 86400:
        return json.loads(path.read_text())
    d = json.loads(_get(f"{API}/hydrometric-stations/items?f=json&bbox={R.WEST},{R.SOUTH},{R.EAST},{R.NORTH}&STATUS_EN=Active&limit=5000"))
    out = [{"id": f["properties"]["STATION_NUMBER"], "name": _name(f["properties"]["STATION_NAME"]),
            "lat": round(f["geometry"]["coordinates"][1], 5), "lon": round(f["geometry"]["coordinates"][0], 5)}
           for f in d["features"] if f["properties"].get("REAL_TIME") == 1 and f.get("geometry")]
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(out))
    log(f"  WSC: {len(out)} real-time stations")
    return out


def _thresholds(vals: list[tuple[float, str]]) -> dict | None:
    """From annual peaks (value, date): the median, the 1-in-10-year peak (Weibull plotting positions, 10 years or
    more) and the record."""
    if len(vals) < 5:
        return None
    vs = sorted((v for v, _ in vals), reverse=True)
    n, out = len(vs), {"n": len(vs), "p2": round(statistics.median(vs), 3)}
    if n >= 10:   # rank r has return period (n + 1) / r: the 10-year peak sits at rank (n + 1) / 10
        r = (n + 1) / 10
        lo = int(r)
        out["p10"] = round(vs[lo - 1] + (r - lo) * (vs[min(lo, n - 1)] - vs[lo - 1]), 3)
    top = max(vals)
    out["rec"] = [round(top[0], 3), top[1][:10]]
    return out


def peaks(ids: list[str], log=print) -> dict:
    """Each station's thresholds for discharge ("q") and water level ("h") from its annual maxima (cached a week)."""
    path = CACHE / "rivers" / "wsc_peaks.json"
    have = json.loads(path.read_text()) if path.exists() and time.time() - path.stat().st_mtime < 7 * 86400 else {}
    def one(sid):
        d = json.loads(_get(f"{API}/hydrometric-annual-peaks/items?f=json&STATION_NUMBER={sid}&limit=1000"))
        by = {"Discharge": [], "Water Level": []}
        for f in d["features"]:
            p = f["properties"]
            if p.get("PEAK_CODE_EN") == "Maximum" and p.get("PEAK") is not None and p.get("DATA_TYPE_EN") in by:
                by[p["DATA_TYPE_EN"]].append((p["PEAK"], p.get("DATE") or ""))
        return sid, {"q": _thresholds(by["Discharge"]), "h": _thresholds(by["Water Level"])}
    todo = [s for s in ids if s not in have]
    if todo:
        with cf.ThreadPoolExecutor(8) as io_:
            have.update(io_.map(one, todo))
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(have))
    return have


def _rows(text: str, ids: set[str]):
    """(station, UTC time, level, discharge) from a Datamart CSV."""
    rd = csv.reader(io.StringIO(text))
    next(rd, None)
    num = lambda x: float(x) if x and float(x) < 9999 else None   # 99999: no reading
    for r in rd:
        if len(r) > 6 and r[0] in ids:
            yield r[0], datetime.fromisoformat(r[1]).astimezone(timezone.utc).strftime("%Y-%m-%dT%H:%MZ"), num(r[2]), num(r[6])


def _merge(rows, log=print) -> int:
    """Merge readings into each station's record (by time; a revised reading replaces the old)."""
    new: dict[str, dict] = {}
    for sid, t, h, q in rows:
        new.setdefault(sid, {})[t] = [h, q]
    ARCHIVE.mkdir(parents=True, exist_ok=True)
    for sid, vals in new.items():
        path = ARCHIVE / f"{sid}.json.gz"
        rec = json.loads(gzip.decompress(path.read_bytes())) if path.exists() else {"id": sid, "units": ["m", "m3/s"], "obs": {}}
        rec["obs"].update(vals)
        rec["obs"] = dict(sorted(rec["obs"].items()))
        tmp = path.with_suffix(".tmp")
        tmp.write_bytes(gzip.compress(json.dumps(rec, separators=(",", ":")).encode()))
        tmp.replace(path)
    return len(new)


def record(now: datetime, log=print, which: str = "hourly") -> None:
    """Merge the province's latest file into the station records (`which`: hourly, or daily for the 30-day file)."""
    ids = {s["id"] for s in stations(log)}
    n = _merge(_rows(_get(DATAMART.format(which), timeout=900).decode("utf-8-sig"), ids), log)
    log(f"wsc: recorded {n} BC gauges" + (" (30 days)" if which == "daily" else ""))


def gauges(start: datetime, hours: int, now: datetime, log=print) -> list[dict]:
    """Each station's level and discharge at the end of every hour of the window, from the record, with its
    thresholds. Only stations with readings in the window."""
    sts = {s["id"]: s for s in stations(log)}
    pk = peaks(list(sts), log)
    out = []
    for sid, s in sts.items():
        path = ARCHIVE / f"{sid}.json.gz"
        if not path.exists():
            continue
        obs = json.loads(gzip.decompress(path.read_bytes()))["obs"]
        series = [(datetime.strptime(t, "%Y-%m-%dT%H:%MZ").replace(tzinfo=timezone.utc), v) for t, v in obs.items()]
        h = _hourly([(t, v[0]) for t, v in series if v[0] is not None], start, hours, now, 2 * 3600) if any(v[0] is not None for _, v in series) else []
        q = _hourly([(t, v[1]) for t, v in series if v[1] is not None], start, hours, now, 2 * 3600) if any(v[1] is not None for _, v in series) else []
        has = lambda xs: any(x is not None for x in xs)
        if not (has(h) or has(q)):
            continue
        site = {**s, "src": "WSC"}
        if has(q):
            site["q"] = q
        if has(h):
            site["h"] = h
        site["peaks"] = {k: v for k, v in (pk.get(sid) or {}).items() if v}
        # rated by flow; by level only on lakes and reservoirs (a river's level can be on another datum than its peaks)
        lake = any(w in s["name"] for w in ("Lake", "Reservoir"))
        site["rate"] = "q" if "q" in site and "q" in site["peaks"] else "h" if lake and "h" in site and "h" in site["peaks"] else None
        out.append(site)
    return out


if __name__ == "__main__":
    import argparse
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--backfill", action="store_true", help="record the 30-day file (once)")
    a = ap.parse_args()
    record(datetime.now(timezone.utc), which="daily" if a.backfill else "hourly")
