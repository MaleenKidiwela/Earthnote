"""Power outages: the region's big utilities' public outage maps, recorded each hour.

The maps list only outages open now (each with its customers out and, mostly, its start and estimated restoration),
so they cannot be backfilled: each hourly update saves the raw responses (archive, cluster-only) and a normalised
snapshot. An outage that is gone by the next snapshot was restored within that hour.

    BC Hydro            all of BC: id, customers, start, cause, crew status, outline
    Puget Sound Energy  western WA: id, customers, start, cause, status, estimated restoration, outline
    Seattle City Light  Seattle: id, customers, start, cause, estimated restoration, outline
    Portland General    Portland and the northern Willamette Valley: id, customers (no start)
    Pacific Power       OR and WA: customers, cause, reported time, estimated restoration (no id)

Written under the event's folder, power/k###.json: the newest snapshot taken during hour k (see event.py).
"""
from __future__ import annotations

import gzip
import json
import urllib.request
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

from .paths import ROOT

ARCHIVE = ROOT / "data" / "archive" / "outages"
PT = ZoneInfo("America/Los_Angeles")
UA = {"User-Agent": "Mozilla/5.0 (earthnote storm recorder)"}
UTILITIES = {
    "bch": "BC Hydro", "pse": "Puget Sound Energy", "scl": "Seattle City Light", "pge": "Portland General Electric",
    "pac": "Pacific Power",
}
CREDITS = "Power outages: BC Hydro, Puget Sound Energy, Seattle City Light, Portland General Electric and Pacific Power outage maps, recorded hourly"
PGE_QUERY = {"operationName": "getAllOutageEvents", "variables": {}, "query": "query getAllOutageEvents {\n  getAllOutageEvents\n}\n"}
SOURCES = {
    "bch": ("https://www.bchydro.com/power-outages/app/outages-map-data.json", None),
    "pse": ("https://www.pse.com/api/sitecore/OutageMap/AnonymoussMapListView", None),
    "scl": ("https://utilisocial.io/datacapable/v2/p/scl/map/events", None),
    "pge": ("https://api.portlandgeneral.com/pge-graphql", PGE_QUERY),
    "pac_or": ("https://www.pacificpower.net/etc/pcorp/datafiles/outagemap/mapOR.json", None),
    "pac_wa": ("https://www.pacificpower.net/etc/pcorp/datafiles/outagemap/mapWA.json", None),
}


def _fetch(url: str, body: dict | None):
    req = urllib.request.Request(url, headers={**UA, **({"Content-Type": "application/json", "aws_graphql_server": "graphql_server",
                                                         "Referer": "https://portlandgeneral.com/"} if body else {})},
                                 data=json.dumps(body).encode() if body else None)
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read())


def _pt(s: str | None, now: datetime, fmt: str) -> int | None:
    """A local time without a year ('11/07 08:25 PM') as epoch ms: the latest such time not after a day from now."""
    if not s:
        return None
    try:
        t = datetime.strptime(f"{now.year} {s}", f"%Y {fmt}").replace(tzinfo=PT)
    except ValueError:
        return None
    if t > now + timedelta(days=1):
        t = t.replace(year=t.year - 1)
    return int(t.timestamp() * 1000)


def _f(x) -> float | None:
    try:
        return round(float(x), 5)
    except (TypeError, ValueError):
        return None


def normalise(raw: dict, now: datetime) -> list[dict]:
    """Every open outage: {u, id, lat, lon, n (customers), start (ms or None), etr (ms or None), cause, planned}."""
    out = []
    for o in raw.get("bch") or []:
        out.append({"u": "bch", "id": str(o["id"]), "lat": _f(o.get("latitude")), "lon": _f(o.get("longitude")),
                    "n": o.get("numCustomersOut") or 0, "start": o.get("dateOff"), "etr": o.get("crewEtr"),
                    "cause": o.get("cause") or "", "planned": False})
    for o in (raw.get("pse") or {}).get("PseMap") or []:
        dp = o.get("DataProvider") or {}
        poi, at = dp.get("PointOfInterest") or {}, {a.get("RefName"): a.get("Value") for a in dp.get("Attributes") or []}
        out.append({"u": "pse", "id": poi.get("Id") or at.get("OutageEventId"), "lat": _f(poi.get("Latitude")), "lon": _f(poi.get("Longitude")),
                    "n": int(_f(at.get("Customers impacted")) or 0), "start": _pt(at.get("StartDate"), now, "%m/%d %I:%M %p"),
                    "etr": _pt(at.get("Est. Restoration time"), now, "%m/%d %I:%M %p"), "cause": at.get("Cause") or "",
                    "planned": bool(poi.get("PlannedOutage"))})
    for o in raw.get("scl") or []:
        out.append({"u": "scl", "id": str(o["id"]), "lat": _f(o.get("latitude")), "lon": _f(o.get("longitude")),
                    "n": o.get("numPeople") or 0, "start": o.get("startTime"), "etr": o.get("etrTime"),
                    "cause": o.get("cause") or "", "planned": (o.get("title") or "").lower().startswith("planned")})
    for o in (((raw.get("pge") or {}).get("data") or {}).get("getAllOutageEvents") or {}).get("events") or []:
        out.append({"u": "pge", "id": str(o["eventId"]), "lat": _f(o.get("lat")), "lon": _f(o.get("long")),
                    "n": o.get("totalCustomersImpacted") or 0, "start": None, "etr": None, "cause": "", "planned": False})
    for key in ("pac_or", "pac_wa"):
        for o in (raw.get(key) or {}).get("outages") or []:
            # no id: an outage is its place and reported time
            out.append({"u": "pac", "id": f"{o.get('latitude')},{o.get('longitude')},{o.get('reported')}",
                        "lat": _f(o.get("latitude")), "lon": _f(o.get("longitude")), "n": o.get("custOut") or 0,
                        "start": _pt(o.get("reported"), now, "%I:%M %p on %m/%d"), "etr": None, "cause": o.get("cause") or "",
                        "planned": o.get("icon") == "planned"})
    return [o for o in out if o["lat"] is not None and o["lon"] is not None and o["id"]]


def record(now: datetime, log=print) -> dict:
    """Fetch every source now, archive the raw responses, and return the normalised snapshot."""
    import concurrent.futures as cf
    raw, failed = {}, []
    with cf.ThreadPoolExecutor(len(SOURCES)) as io:
        futs = {k: io.submit(_fetch, *v) for k, v in SOURCES.items()}
        for k, f in futs.items():
            try:
                raw[k] = f.result()
            except Exception as e:
                failed.append(f"{k} ({e.__class__.__name__})")
    ARCHIVE.mkdir(parents=True, exist_ok=True)
    stamp = now.strftime("%Y%m%d%H%M")
    with gzip.open(ARCHIVE / f"{stamp}.json.gz", "wt") as f:
        json.dump({"time": now.isoformat(), "raw": raw, "failed": failed}, f)
    snap = {"time": now.strftime("%Y-%m-%dT%H:%M:%SZ"), "out": normalise(raw, now), "failed": failed}
    n = sum(o["n"] for o in snap["out"] if not o["planned"])
    log(f"power: {len(snap['out'])} outages, {n} customers out" + (f"; failed: {', '.join(failed)}" if failed else ""))
    return snap


def archived() -> list[tuple[datetime, dict]]:
    """Every archived snapshot, oldest first, normalised again (so a fix to `normalise` reaches the whole record)."""
    out = []
    for p in sorted(ARCHIVE.glob("*.json.gz")):
        with gzip.open(p, "rt") as f:
            d = json.load(f)
        t = datetime.fromisoformat(d["time"])
        out.append((t, {"time": t.strftime("%Y-%m-%dT%H:%M:%SZ"), "out": normalise(d["raw"], t), "failed": d.get("failed", [])}))
    return out


def frames(start: datetime, hours: int, box) -> dict[int, dict]:
    """The newest snapshot in each hour of the window, as compact frames: outages within `box` (west, east, south,
    north) as [utility, lat, lon, customers, start ms, first seen ms, cause, etr ms], customer totals by utility, and
    each outage's first-seen time (the start for a utility that gives none). Planned work is left out: not the storm's.

    Hours before recording began are rebuilt from the first snapshot: the outages still open then whose start is
    known, back to that start ("partial": the ones already restored by then are missing)."""
    seen, by_k = {}, {}
    for t, snap in archived():
        ms = int(t.timestamp() * 1000)
        for o in snap["out"]:
            seen.setdefault((o["u"], o["id"]), ms)
        k = int((t - start).total_seconds() // 3600)
        if 0 <= k < hours:
            by_k[k] = (ms, snap)
    if not by_k:
        return {}
    first = min(by_k)
    for k in range(first):
        end = int((start + timedelta(hours=k + 1)).timestamp() * 1000)
        snap = by_k[first][1]
        by_k[k] = (end, {**snap, "partial": True, "out": [o for o in snap["out"] if o["start"] is not None and o["start"] < end]})
    w, e, s, n = box
    out = {}
    for k, (ms, snap) in sorted(by_k.items()):
        rows, totals = [], {u: 0 for u in UTILITIES}
        for o in snap["out"]:
            if o["planned"] or not (w <= o["lon"] <= e and s <= o["lat"] <= n):
                continue
            rows.append([o["u"], o["lat"], o["lon"], o["n"], o["start"], seen[(o["u"], o["id"])], o["cause"][:60], o["etr"]])
            totals[o["u"]] += o["n"]
        out[k] = {"time": snap["time"], "failed": snap["failed"], "totals": totals, "out": rows, **({"partial": True} if snap.get("partial") else {})}
    return out
