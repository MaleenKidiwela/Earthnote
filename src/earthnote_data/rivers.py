"""The rivers layer: flow on every sizeable river and stream, hourly through the event window, as it happened.

Geometry and flood thresholds come from NOAA's National Water Model flowlines (stream order 4 and up: the reaches,
their names, the NWM high-water threshold and the 2-, 5-, 10-, 25- and 50-year flows). Flows are the NWM's hourly
analysis: the model driven by observed rain and nudged to the USGS gauges, a record of what the rivers did. Hours
not yet analysed get a "what if" from the newest NWM forecasts (short range: HRRR rain, 18 h; medium range: GFS rain,
10 days), each hour replaced by the analysis as it arrives. The NWM covers the United States only, so British
Columbia has no reaches.

Written under the event's folder, rivers/:
    reaches.bin     one-off: per-reach thresholds, names and polylines (layout in rivers.json)
    obs/k###.bin    the analysis for frame k: one byte per reach
    whatif/<kind>_<init>.bin   the newest short- or medium-range run's frames, one after another
Flow bytes: Q = 0.05 * (10^(q / 40) - 1) m3/s, 255 = no data.
"""
from __future__ import annotations

import concurrent.futures as cf
import html
import io
import json
import time
import urllib.parse
import urllib.request
from datetime import datetime, timedelta

import numpy as np

from . import region as R
from .paths import CACHE

FLOWLINES = "https://maps.water.noaa.gov/server/rest/services/reference/static_nwm_flowlines/FeatureServer/0/query"
NWM = "https://noaa-nwm-pds.s3.amazonaws.com"
MIN_ORDER = 4
CFS = 0.0283168                     # m3/s per cubic foot per second
# thresholds, in the order written: the NWM high-water flow, then the 2- to 50-year flows
THRESHOLDS = ("high_water_threshold", "rf_2_0_17c", "rf_5_0_17c", "rf_10_0_17c", "rf_25_0_17c", "rf_50_0_17c")
CREDITS = ("Rivers: NOAA National Water Model v3 (hourly analysis, flowlines and flood thresholds) via the NOAA "
           "Open Data Dissemination program")


def _get(url: str, tries: int = 5, timeout: int = 120) -> bytes | None:
    """GET with retries; None on 404."""
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "earthnote"}), timeout=timeout) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            if i == tries - 1:
                raise
        except (urllib.error.URLError, TimeoutError, ConnectionError):
            if i == tries - 1:
                raise
        time.sleep(2 ** i)
    return None


# ---------------------------------------------------------------- reaches

def _query(offset: int) -> dict:
    q = {
        "where": f"strm_order >= {MIN_ORDER}", "geometryType": "esriGeometryEnvelope", "inSR": 4326, "outSR": 4326,
        "geometry": f"{R.WEST},{R.SOUTH},{R.EAST},{R.NORTH}", "spatialRel": "esriSpatialRelIntersects",
        "outFields": ",".join(("feature_id", "name", "strm_order") + THRESHOLDS),
        "maxAllowableOffset": 0.0005, "geometryPrecision": 5, "orderByFields": "oid",
        "resultOffset": offset, "resultRecordCount": 2000, "f": "json",
    }
    return json.loads(_get(f"{FLOWLINES}?{urllib.parse.urlencode(q)}"))


def fetch_reaches(log=print) -> list[dict]:
    """The flowlines inside the region, cached in data/cache/rivers."""
    path = CACHE / "rivers" / "flowlines.json"
    if path.exists():
        return json.loads(path.read_text())
    out, offset = [], 0
    while True:
        d = _query(offset)
        feats = d.get("features", [])
        for f in feats:
            a, paths = f["attributes"], f["geometry"].get("paths", [])
            if not paths:
                continue
            out.append({"id": int(a["feature_id"]), "name": a["name"] or "", "order": int(a["strm_order"]),
                        "thr": [(a[t] or 0) * CFS for t in THRESHOLDS], "paths": paths})
        offset += len(feats)
        log(f"  flowlines: {offset}")
        if not feats or not d.get("exceededTransferLimit"):
            break
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(out))
    return out


def write_reaches(reaches: list[dict], out) -> dict:
    """reaches.bin: thresholds (float32, n x 6, m3/s), name index (uint16, n), order (uint8, n, padded to 4),
    path offsets into the vertices (uint32, paths + 1), the reach of each path (uint32, paths), and the vertices
    (float32 lon, lat pairs). Returns the layout for rivers.json."""
    names = sorted({r["name"] for r in reaches})
    name_ix = {n: i for i, n in enumerate(names)}
    paths, owner = [], []
    for i, r in enumerate(reaches):
        for p in r["paths"]:
            if len(p) >= 2:
                paths.append(np.asarray(p, np.float32)); owner.append(i)
    n, m = len(reaches), len(paths)
    offsets = np.zeros(m + 1, np.uint32)
    offsets[1:] = np.cumsum([len(p) for p in paths])
    order = np.zeros((n + 3) // 4 * 4, np.uint8)
    order[:n] = [r["order"] for r in reaches]
    parts = [np.asarray([r["thr"] for r in reaches], np.float32).ravel(),
             np.asarray([name_ix[r["name"]] for r in reaches] + [0] * (n % 2), np.uint16), order,
             offsets, np.asarray(owner, np.uint32), np.concatenate(paths).ravel()]
    out.mkdir(parents=True, exist_ok=True)
    (out / "reaches.bin").write_bytes(b"".join(p.tobytes() for p in parts))
    return {"count": n, "paths": m, "vertices": int(offsets[-1]), "names": names,
            "thresholds": ["high water", "2-year", "5-year", "10-year", "25-year", "50-year"]}


# ---------------------------------------------------------------- flows

def encode_flow(q: np.ndarray) -> np.ndarray:
    b = np.round(40 * np.log10(1 + np.clip(q, 0, None) / 0.05))
    return np.where(np.isfinite(q), np.clip(b, 0, 254), 255).astype(np.uint8)


def decode_flow(b: np.ndarray) -> np.ndarray:
    return np.where(b == 255, np.nan, 0.05 * (10 ** (b / 40.0) - 1))


class Picker:
    """The streamflow of our reaches out of a whole-CONUS channel file (its feature order never changes, so the
    lookup is worked out once)."""

    def __init__(self, ids: np.ndarray):
        self.ids, self.ix, self._fid = ids, None, None

    def __call__(self, data: bytes) -> np.ndarray:
        import h5py
        with h5py.File(io.BytesIO(data), "r") as f:
            fid = f["feature_id"][:]
            if self.ix is None or len(fid) != len(self._fid) or fid[0] != self._fid[0] or fid[-1] != self._fid[-1]:
                order = np.argsort(fid)
                pos = np.searchsorted(fid, self.ids, sorter=order)
                pos = np.clip(pos, 0, len(fid) - 1)
                ix = order[pos]
                self.ix = np.where(fid[ix] == self.ids, ix, -1)
                self._fid = fid
            raw = f["streamflow"][:]
        q = np.where(self.ix >= 0, raw[np.clip(self.ix, 0, None)], -999900).astype(np.float64)
        return np.where(q <= -999900, np.nan, q * 0.01)


def analysis_url(valid: datetime) -> str:
    return f"{NWM}/nwm.{valid:%Y%m%d}/analysis_assim/nwm.t{valid:%H}z.analysis_assim.channel_rt.tm00.conus.nc"


# the forecasts behind the "what if": kind -> (hours ahead, hours between runs, file URL for an init and lead hour)
FORECASTS = {
    "short": (18, 1, lambda i, fh: f"{NWM}/nwm.{i:%Y%m%d}/short_range/nwm.t{i:%H}z.short_range.channel_rt.f{fh:03d}.conus.nc"),
    "medium": (240, 6, lambda i, fh: f"{NWM}/nwm.{i:%Y%m%d}/medium_range_mem1/nwm.t{i:%H}z.medium_range.channel_rt_1.f{fh:03d}.conus.nc"),
}


def exists(url: str) -> bool:
    try:
        with urllib.request.urlopen(urllib.request.Request(url, method="HEAD"), timeout=30):
            return True
    except urllib.error.HTTPError:
        return False


# ---------------------------------------------------------------- reservoirs

USGS_IV = "https://waterservices.usgs.gov/nwis/iv/"
ELEVATION = ("62614", "62615", "00062")   # lake or reservoir water-surface elevation (NGVD29, NAVD88, local datum)
STORAGE = "00054"                         # acre-feet


def reservoirs(start: datetime, hours: int, now: datetime) -> list[dict]:
    """Every USGS lake and reservoir gauge in the region with its water-surface elevation (ft) and, where measured,
    storage (acre-ft) at the end of each hour of the window: the last 15-minute reading at or before it, within the
    hour (None where there is none, and for hours still ahead)."""
    params = ",".join(ELEVATION + (STORAGE,))
    sites: dict[str, dict] = {}
    for state in ("wa", "or", "id"):
        q = urllib.parse.urlencode({"format": "json", "stateCd": state, "parameterCd": params, "siteStatus": "active",
                                    "startDT": start.strftime("%Y-%m-%dT%H:%MZ"), "endDT": now.strftime("%Y-%m-%dT%H:%MZ")})
        data = _get(f"{USGS_IV}?{q}")
        for ts in json.loads(data)["value"]["timeSeries"] if data else []:
            info, code = ts["sourceInfo"], ts["variable"]["variableCode"][0]["value"]
            geo = info["geoLocation"]["geogLocation"]
            lat, lon = geo["latitude"], geo["longitude"]
            if not (R.WEST <= lon <= R.EAST and R.SOUTH <= lat <= R.NORTH):
                continue
            s = sites.setdefault(info["siteCode"][0]["value"], {"name": info["siteName"], "lat": lat, "lon": lon, "series": {}})
            vals = [(datetime.fromisoformat(v["dateTime"]).astimezone(start.tzinfo), float(v["value"]))
                    for v in ts["values"][0]["value"] if float(v["value"]) > -999]
            if vals:
                s["series"][code] = sorted(vals)
    out = []
    for sid, s in sorted(sites.items()):
        code = next((c for c in ELEVATION if c in s["series"]), None)
        if code is None:
            continue
        hourly = lambda series: _hourly(series, start, hours, now)
        out.append({"id": sid, "name": s["name"], "lat": round(s["lat"], 5), "lon": round(s["lon"], 5),
                    "datum": {"62614": "NGVD29", "62615": "NAVD88", "00062": "local"}[code],
                    "elev": hourly(s["series"][code]),
                    "storage": hourly(s["series"][STORAGE]) if STORAGE in s["series"] else None})
    return [r for r in out if any(v is not None for v in r["elev"])]


def _hourly(series: list, start: datetime, hours: int, now: datetime, max_age: float = 3600) -> list:
    """The last reading at or before the end of each hour, if it is at most `max_age` seconds old."""
    times = np.array([t.timestamp() for t, _ in series])
    vals = [v for _, v in series]
    out = []
    for k in range(hours):
        t = (start.timestamp() + (k + 1) * 3600)
        i = np.searchsorted(times, t, side="right") - 1
        out.append(round(vals[i], 2) if t <= now.timestamp() and i >= 0 and t - times[i] <= max_age else None)
    return out


# CWMS (the Corps' water-management database) carries reservoir levels for its own dams and for Reclamation, the
# public utilities (Seattle City Light's Skagit lakes, Tacoma Power, Chelan and Grant PUDs...) and BC Hydro's
# Columbia Treaty projects: one forebay-elevation series per project.
CWMS = "https://cwms-data.usace.army.mil/cwms-data/"
CWMS_OFFICE = "NWDP"
NOT_RESERVOIRS = {"CRLI", "MANI", "MMFW", "PHLO", "RZCW"}   # river gauges, below-dam gauges, a fish facility, a canal
# where a lake's level is read away from the lake: shown on the lake, named for it
SHOWN_AS = {"LWSC": ("Lake Washington (Ship Canal pool, read at the Ballard Locks)", 47.62, -122.26)}
M_FT = 3.28084


def _cwms(path: str, **q):
    url = CWMS + path + "?" + urllib.parse.urlencode(q)
    req = urllib.request.Request(url, headers={"Accept": "application/json;version=2", "User-Agent": "earthnote"})
    for i in range(4):
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            if i == 3:
                raise
        except (urllib.error.URLError, TimeoutError, ConnectionError):
            if i == 3:
                raise
        time.sleep(2 ** i)


def _series_rank(name: str) -> tuple:
    """Lower is better: hourly or finer over irregular over daily; instantaneous over averages; reviewed over raw.
    Several listed series are empty in the public database, so a project's series are tried in this order."""
    p = name.split(".")
    kind, interval, version = p[2], p[3], p[-1]
    return ({"1Hour": 0, "30Minutes": 0, "15Minutes": 0, "0": 1}.get(interval, 2), 0 if kind == "Inst" else 1,
            0 if version.endswith("-REV") else 1 if version == "Best" else 2)


def cwms_projects(log=print) -> list[dict]:
    """The current forebay-elevation series of every project in the region, with its name and place (cached)."""
    path = CACHE / "rivers" / "cwms_projects.json"
    if path.exists() and time.time() - path.stat().st_mtime < 7 * 86400:
        return json.loads(path.read_text())
    cat = _cwms("catalog/TIMESERIES", office=CWMS_OFFICE, like=r".*\.Elev-(Forebay|Lake|Pool)\..*", **{"page-size": 5000})
    recent = time.strftime("%Y-%m-%d", time.gmtime(time.time() - 3 * 86400))
    cands: dict[str, list] = {}
    for e in cat["entries"]:
        name = e["name"]
        if "FCST" in name or "-" in name.split(".")[0]:
            continue   # forecasts; powerhouse or sensor sub-locations
        if max((x.get("latest-time") or "" for x in e.get("extents", [])), default="") < recent:
            continue
        cands.setdefault(name.split(".")[0], []).append(name)
    def place(item):
        loc, names = item
        d = _cwms(f"locations/{loc}", office=CWMS_OFFICE)
        if not d or d.get("latitude") is None:
            return None
        return {"loc": loc, "series": sorted(names, key=_series_rank), "name": d.get("long-name") or d.get("public-name") or loc,
                "lat": d["latitude"], "lon": d["longitude"], "datum": d.get("vertical-datum") or "local"}
    with cf.ThreadPoolExecutor(16) as io:
        projects = [p for p in io.map(place, sorted(cands.items())) if p]
    projects = [p for p in projects if R.WEST <= p["lon"] <= R.EAST and R.SOUTH <= p["lat"] <= R.NORTH and p["loc"] not in NOT_RESERVOIRS]
    for p in projects:
        p["name"] = html.unescape(p["name"])
        if p["loc"] in SHOWN_AS:
            p["name"], p["lat"], p["lon"] = SHOWN_AS[p["loc"]]
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(projects))
    log(f"  CWMS: {len(projects)} projects with current forebay levels in the region")
    return projects


def cwms_reservoirs(start: datetime, hours: int, now: datetime, log=print) -> list[dict]:
    """Forebay elevation (ft) at the end of each hour of the window for every CWMS project in the region."""
    def one(p):
        for ts in p["series"]:   # the first series that has readings in the window
            daily = "1Day" in ts
            d = _cwms("timeseries", name=ts, office=CWMS_OFFICE, begin=(start - timedelta(days=1 if daily else 0, hours=2)).strftime("%Y-%m-%dT%H:%M:%SZ"),
                      end=now.strftime("%Y-%m-%dT%H:%M:%SZ"), unit="EN", **{"page-size": 20000})
            series = [(datetime.fromtimestamp(t / 1000, start.tzinfo), v) for t, v, *_ in (d or {}).get("values") or [] if v is not None]
            if not series:
                continue
            if (d.get("units") or "").lower() == "m":
                series = [(t, v * M_FT) for t, v in series]
            return {"id": f"cwms:{p['loc']}", "name": p["name"], "lat": round(p["lat"], 5), "lon": round(p["lon"], 5),
                    "datum": p["datum"], "source": f"USACE CWMS ({ts.split('.')[-1].split('-')[0]}{', daily' if daily else ''})",
                    "elev": _hourly(series, start, hours, now, 30 * 3600 if daily else 3 * 3600), "storage": None}
        return None
    with cf.ThreadPoolExecutor(16) as io:
        out = [r for r in io.map(one, cwms_projects(log)) if r and any(v is not None for v in r["elev"])]
    return out


# Reclamation's Hydromet (15-minute readings, Pacific time): the Yakima reservoirs, which CWMS publishes only daily.
HYDROMET = "https://www.usbr.gov/pn-bin/instant.pl"
USBR = {   # code: (name, lat, lon) at the dam
    "kee": ("Keechelus Lake", 47.3229, -121.3398), "kac": ("Kachess Lake", 47.2647, -121.2033),
    "cle": ("Cle Elum Lake", 47.2453, -121.0680), "bum": ("Bumping Lake", 46.8697, -121.2954),
    "rim": ("Rimrock Lake", 46.6556, -121.1288),
}


def usbr_reservoirs(start: datetime, hours: int, now: datetime) -> list[dict]:
    from zoneinfo import ZoneInfo
    pt = ZoneInfo("America/Los_Angeles")
    q = urllib.parse.urlencode({"list": ",".join(f"{c} fb,{c} af" for c in USBR), "format": "csv",
                                "start": (start - timedelta(hours=2)).astimezone(pt).strftime("%Y-%m-%d"),
                                "end": now.astimezone(pt).strftime("%Y-%m-%d")})
    rows = _get(f"{HYDROMET}?{q}").decode().strip().splitlines()
    head = [h.strip() for h in rows[0].split(",")]
    cols = {h: [] for h in head[1:]}
    for line in rows[1:]:
        parts = [p.strip() for p in line.split(",")]
        try:
            t = datetime.strptime(parts[0], "%Y-%m-%d %H:%M").replace(tzinfo=pt)
        except ValueError:
            continue
        for h, v in zip(head[1:], parts[1:]):
            try:
                cols[h].append((t, float(v)))
            except ValueError:
                pass
    out = []
    for c, (name, lat, lon) in USBR.items():
        fb, af = cols.get(f"{c}_fb") or [], cols.get(f"{c}_af") or []
        if fb:
            out.append({"id": f"usbr:{c}", "name": name, "lat": lat, "lon": lon, "datum": "Reclamation project datum",
                        "source": "USBR Hydromet", "elev": _hourly(fb, start, hours, now),
                        "storage": _hourly(af, start, hours, now) if af else None})
    return out


def all_reservoirs(start: datetime, hours: int, now: datetime, log=print) -> list[dict]:
    """USGS lake and reservoir gauges, Reclamation's Yakima reservoirs, and the CWMS projects that neither already
    covers within 3 km. One source down never drops the others."""
    got = []
    for label, fn in (("USGS", lambda: reservoirs(start, hours, now)), ("USBR", lambda: usbr_reservoirs(start, hours, now)),
                      ("CWMS", lambda: cwms_reservoirs(start, hours, now, log))):
        try:
            rs = fn()
        except Exception as e:
            log(f"  {label}: skipped ({e})")
            continue
        near = lambda a, b: abs(a["lat"] - b["lat"]) * 111 < 3 and abs(a["lon"] - b["lon"]) * 76 < 3
        for r in rs:
            r.setdefault("source", label)
            if not any(near(r, g) for g in got):
                got.append(r)
    for r in got:   # a gauge that has not changed by a hundredth of a foot in a day or more is stuck, not still
        e = [v for v in r["elev"] if v is not None]
        r["stuck"] = len(e) >= 24 and max(e) - min(e) < 0.005
    return got


# ---------------------------------------------------------------- NWS river gauges

NWPS = "https://api.water.noaa.gov/nwps/v1/gauges"
CATEGORIES = ("action", "minor", "moderate", "major")


def _nwps(path: str = "", **q):
    data = _get(f"{NWPS}{path}" + (f"?{urllib.parse.urlencode(q)}" if q else ""))
    return json.loads(data) if data else None


def gauge_details(log=print) -> list[dict]:
    """Every NWS river gauge in the region that has flood stages: name, place, the stages (ft), the written impact
    at each level, and the highest crests on record (cached a day)."""
    path = CACHE / "rivers" / "nwps_gauges.json"
    if path.exists() and time.time() - path.stat().st_mtime < 86400:
        return json.loads(path.read_text())
    lst = _nwps(**{"bbox.xmin": R.WEST, "bbox.ymin": R.SOUTH, "bbox.xmax": R.EAST, "bbox.ymax": R.NORTH, "srid": "EPSG_4326"})
    def one(g):
        d = _nwps(f"/{g['lid']}")
        if not d or (d.get("flood") or {}).get("stageUnits") != "ft":
            return None
        cats = {c: v["stage"] for c, v in (d["flood"].get("categories") or {}).items() if c in CATEGORIES and (v.get("stage") or -9999) > -999}
        if not cats:
            return None
        impacts = sorted([[i["stage"], i["statement"].strip()] for i in d["flood"].get("impacts") or [] if i.get("statement")], key=lambda x: x[0])
        crests = sorted((c for c in (d["flood"].get("crests") or {}).get("historic") or [] if (c.get("stage") or -9999) > -999),
                        key=lambda c: -c["stage"])[:3]
        return {"lid": d["lid"], "name": d["name"], "lat": round(d["latitude"], 5), "lon": round(d["longitude"], 5),
                "usgs": d.get("usgsId") or None, "cats": cats, "impacts": impacts,
                "crests": [[c["stage"], c["occurredTime"][:10]] for c in crests]}
    with cf.ThreadPoolExecutor(16) as io:
        out = [g for g in io.map(one, lst["gauges"]) if g]
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(out))
    log(f"  NWS gauges: {len(out)} of {len(lst['gauges'])} have flood stages")
    return out


GAUGE_ARCHIVE = CACHE.parent / "archive" / "gauges"   # data/archive: every gauge's record, kept on the cluster


def all_gauges() -> list[str]:
    """Every NWS gauge in the region, with flood stages or not (cached a day)."""
    path = CACHE / "rivers" / "nwps_all.json"
    if path.exists() and time.time() - path.stat().st_mtime < 86400:
        return json.loads(path.read_text())
    lst = _nwps(**{"bbox.xmin": R.WEST, "bbox.ymin": R.SOUTH, "bbox.xmax": R.EAST, "bbox.ymax": R.NORTH, "srid": "EPSG_4326"})
    lids = sorted(g["lid"] for g in lst["gauges"])
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(lids))
    return lids


def archive_gauge(lid: str, d: dict) -> None:
    """Merge a gauge's stageflow into data/archive/gauges/<lid>.json.gz: every observation ever seen (by valid time;
    a revised value replaces the old) and every forecast as issued (by issue time). The NWS keeps about 30 days of
    observations, so this is the only lasting record."""
    import gzip
    path = GAUGE_ARCHIVE / f"{lid}.json.gz"
    rec = json.loads(gzip.decompress(path.read_bytes())) if path.exists() else {"lid": lid, "obs": {}, "fc": {}}
    for kind in ("observed", "forecast"):
        part = d.get(kind) or {}
        rows = part.get("data") or []
        rec.setdefault("units", {})[kind] = [part.get("primaryUnits"), part.get("secondaryUnits")]
        vals = {r["validTime"]: [r["primary"], r["secondary"]] for r in rows}
        if kind == "observed":
            rec["obs"].update(vals)
        elif rows:
            rec["fc"].setdefault(rows[0].get("generatedTime") or "unknown", vals)
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(".tmp")
    tmp.write_bytes(gzip.compress(json.dumps(rec, separators=(",", ":")).encode()))
    tmp.replace(path)


def gauges(start: datetime, hours: int, now: datetime, log=print) -> list[dict]:
    """Each gauge's measured stage at the end of every hour of the window, and for hours still ahead the NWS river
    forecast (its 6-hourly points interpolated to the hour), with the time that forecast was issued. Every gauge in
    the region, with flood stages or not, is also archived (archive_gauge)."""
    details = {g["lid"]: g for g in gauge_details(log)}
    stageflow = {}
    def fetch(lid):
        d = _nwps(f"/{lid}/stageflow")
        if d:
            archive_gauge(lid, d)
            if lid in details:
                stageflow[lid] = d
    with cf.ThreadPoolExecutor(16) as io:
        list(io.map(fetch, all_gauges()))

    def one(g):
        d = stageflow.get(g["lid"])
        if not d:
            return None
        parse = lambda rows: [(datetime.fromisoformat(r["validTime"].replace("Z", "+00:00")), r["primary"]) for r in rows or [] if r["primary"] > -999]
        obs = sorted(parse((d.get("observed") or {}).get("data")))
        fc = sorted(parse((d.get("forecast") or {}).get("data")))
        if not obs:
            return None
        ob = _hourly(obs, start, hours, now, 2 * 3600)
        fcv, issued = [None] * hours, None
        if fc:
            issued = (d["forecast"]["data"][0].get("generatedTime") or "")[:16]
            ft = np.array([t.timestamp() for t, _ in fc]); fv = np.array([v for _, v in fc])
            for k in range(hours):
                t = start.timestamp() + (k + 1) * 3600
                if t > now.timestamp() and ft[0] <= t <= ft[-1]:
                    fcv[k] = round(float(np.interp(t, ft, fv)), 2)
        return {**g, "obs": ob, "fc": fcv, "fcIssued": issued}
    out = [r for r in map(one, details.values()) if r and any(v is not None for v in r["obs"])]
    return out


# ---------------------------------------------------------------- flood outlines

# NOAA's experimental inundation extent from the NWM analysis (terrain-based mapping where the analysis signals high
# water). The service holds the current hour only, so each update records it; hours that passed before recording
# began have no outlines.
MIN_HIGH_WATER = 1.0   # m3/s (35 cfs)
INUNDATION = "https://maps.water.noaa.gov/server/rest/services/nwm/ana_inundation_extent/MapServer/0/query"


def _esri_pages(url: str, q: dict) -> list:
    out, off = [], 0
    while True:
        d = json.loads(_get(f"{url}?{urllib.parse.urlencode({**q, 'resultOffset': off, 'f': 'json'})}"))
        fs = d.get("features", [])
        out += fs; off += len(fs)
        if not fs or not d.get("exceededTransferLimit"):
            return out


def high_water(ids: list[int]) -> dict[int, float]:
    """The NWM high-water flow (m3/s) of any reaches, from the flowline service (cached)."""
    path = CACHE / "rivers" / "high_water.json"
    known = {int(k): v for k, v in json.loads(path.read_text()).items()} if path.exists() else {}
    todo = [i for i in set(ids) if i not in known]
    for c in range(0, len(todo), 150):
        chunk = todo[c:c + 150]
        fs = _esri_pages(FLOWLINES, {"where": f"feature_id IN ({','.join(repr(str(i)) for i in chunk)})",
                                     "outFields": "feature_id,high_water_threshold", "returnGeometry": "false"})
        for f in fs:
            known[int(f["attributes"]["feature_id"])] = (f["attributes"]["high_water_threshold"] or 0) * CFS
        for i in chunk:
            known.setdefault(i, 0.0)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(known))
    return known


def baseline_flows(valid: datetime) -> tuple[np.ndarray, np.ndarray]:
    """Every NWM reach's analysed flow (m3/s) at `valid` (the storm's start): (sorted feature ids, flows); cached."""
    import h5py
    path = CACHE / "rivers" / f"baseline_{valid:%Y%m%d%H}.npz"
    if not path.exists():
        with h5py.File(io.BytesIO(_get(analysis_url(valid))), "r") as f:
            fid, q = f["feature_id"][:], f["streamflow"][:].astype(np.float64)
        order = np.argsort(fid)
        q = np.where(q <= -999900, np.nan, q * 0.01)
        np.savez_compressed(path, ids=fid[order], q=q[order])
    d = np.load(path)
    return d["ids"], d["q"]


def _ring_area_km2(ring) -> float:
    a = np.asarray(ring, float)
    if len(a) < 3:
        return 0.0
    kx = 111.32 * np.cos(np.radians(a[:, 1].mean()))
    x, y = a[:, 0] * kx, a[:, 1] * 110.57
    return 0.5 * float(np.dot(x, np.roll(y, -1)) - np.dot(y, np.roll(x, -1)))


ARCHIVE = CACHE.parent / "archive" / "inundation"   # data/archive: every hour's raw outlines, kept on the cluster


def fetch_inundation() -> list | None:
    """The current hour's raw outlines in the region (every one NOAA draws), also archived as
    data/archive/inundation/<YYYYmmddHH>.json.gz whatever the event window, so a later window or filter can be
    rebuilt from them."""
    import gzip
    fs = _esri_pages(INUNDATION, {"where": "1=1", "geometry": f"{R.WEST},{R.SOUTH},{R.EAST},{R.NORTH}",
                                   "geometryType": "esriGeometryEnvelope", "inSR": 4326, "outSR": 4326,
                                   "outFields": "feature_id,streamflow_cfs,reference_time", "returnGeometry": "true",
                                   "maxAllowableOffset": 0.0002, "geometryPrecision": 5, "resultRecordCount": 1000})
    if not fs:
        return None
    ref = datetime.fromisoformat(fs[0]["attributes"]["reference_time"])
    path = ARCHIVE / f"{ref:%Y%m%d%H}.json.gz"
    if not path.exists():
        path.parent.mkdir(parents=True, exist_ok=True)
        tmp = path.with_suffix(".tmp")
        tmp.write_bytes(gzip.compress(json.dumps(fs, separators=(",", ":")).encode()))
        tmp.replace(path)
    return fs


def archived_inundation(ref: datetime) -> list | None:
    import gzip
    path = ARCHIVE / f"{ref:%Y%m%d%H}.json.gz"
    return json.loads(gzip.decompress(path.read_bytes())) if path.exists() else None


def inundation(start: datetime, fs: list | None = None, log=print) -> dict | None:
    """One hour's flood outlines (the current hour's, or `fs` from the archive), storm-driven only (see below):
    {"ref": analysis time, "polys": [[feature id, flow m3/s, rings]], "dropped": n, "km2": area}."""
    fs = fs if fs is not None else fetch_inundation()
    if not fs:
        return None
    ref = fs[0]["attributes"]["reference_time"]
    ids = [int(f["attributes"]["feature_id"]) for f in fs]
    hw = high_water(ids)
    bid, bq = baseline_flows(start + timedelta(hours=1))
    pos = np.clip(np.searchsorted(bid, ids), 0, len(bid) - 1)
    q0 = np.where(bid[pos] == ids, bq[pos], np.nan)
    polys, dropped, km2 = [], 0, 0.0
    for f, i, base in zip(fs, ids, q0):
        q, h = (f["attributes"]["streamflow_cfs"] or 0) * CFS, hw.get(i, 0)
        # storm flooding: a reach with a real high-water flow (at least MIN_HIGH_WATER), below it before the storm
        # and at or over it now. Anything else is a standing artifact (dry creeks, canals, trickles whose threshold is
        # a hundredth of a m3/s, reaches without one) and is left out.
        if not (h >= MIN_HIGH_WATER and np.isfinite(base) and base < h <= q * 1.001):
            dropped += 1
            continue
        rings = f["geometry"].get("rings") or []
        km2 += abs(sum(_ring_area_km2(r) for r in rings))
        polys.append([i, round(q, 1), rings])
    log(f"  flood outlines {ref}: {len(polys)} storm-driven kept, {dropped} standing artifacts left out, {km2:.1f} km2")
    return {"ref": ref, "polys": polys, "dropped": dropped, "km2": round(km2, 2)}
