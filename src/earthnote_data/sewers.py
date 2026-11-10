"""Sewer overflows: combined (stormwater plus sewage) and sanitary overflows to Puget Sound, Lake Washington, the
Duwamish and Burrard Inlet, recorded each hour.

    King County         its own and Seattle Public Utilities' CSO outfalls (~125): overflowing now or not (its
                        "overflowed in the last 48 hours" has no time, so it is not used); every 10 minutes, no times
    Metro Vancouver     its CSO outfalls (16) and any sanitary overflow: the latest incident's start and end

The status maps show only the present (King County's has no times at all), so each hourly update saves the raw
responses (archive, cluster-only) and a normalised snapshot. Metro Vancouver gives each outfall's latest start and
end, so the hours before recording are rebuilt from those (partial: earlier incidents at the same outfall are missing).
The real-time data is unreviewed; the utilities' reports to Ecology are the confirmed record.

Written under the event's folder, sewers/k###.json: the newest snapshot taken during hour k (see event.py).
"""
from __future__ import annotations

import csv
import gzip
import io
import json
import urllib.request
from datetime import datetime, timedelta, timezone

from .paths import ROOT

ARCHIVE = ROOT / "data" / "archive" / "sewers"
UA = {"User-Agent": "Mozilla/5.0 (earthnote storm recorder)"}
CREDITS = "Sewer overflows: King County Wastewater Treatment Division (King County and Seattle outfalls) and Metro Vancouver real-time overflow maps, recorded hourly; unreviewed real-time data"
_MV = "https://gis.metrovancouver.org/arcgis/rest/services/MV2U/MVMapX/MapServer/{}/query?where=1%3D1&outFields=*&outSR=4326&f=json"
SOURCES = {
    "kc": "https://your.kingcounty.gov/dnrp/library/wastewater/cso/img/CSO_metadata.CSV",
    "mv_cso": _MV.format(194),
    "mv_sso": _MV.format(177),
}
STATES = ("overflowing", "none", "nodata")
_KC = {"CurrentlyOverflowing": "overflowing", "OverflowLast48hrs": "none", "NoRecentOverflow": "none", "NoData": "nodata"}


def _fetch(url: str):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        body = r.read().decode("utf-8-sig")
    return body if url.lower().endswith(".csv") else json.loads(body)


def _mv_state(start, end) -> str:
    return "overflowing" if start and not end else "none"


def normalise(raw: dict, now: datetime) -> list[dict]:
    """Every outfall: {s, id, name, lat, lon, state, start, end} (times in epoch ms, Metro Vancouver only)."""
    out = []
    for r in csv.DictReader(io.StringIO(raw.get("kc") or "")):
        if r["Name"].startswith("Dummy"):   # the legend's sample points
            continue
        name = r["Name"].replace("King County CSO: ", "") + ("" if r["Name"].startswith("King County") else f" (outfall {r['DSN']})")
        out.append({"s": "kc", "id": r["CSO_TagName"], "name": name, "owner": "King County" if r["Name"].startswith("King County") else "Seattle",
                    "lat": float(r["Y_COORD"]), "lon": float(r["X_COORD"]), "state": _KC.get(r["Status"], "nodata"),
                    "start": None, "end": None})
    for key, kind in (("mv_cso", "combined"), ("mv_sso", "sanitary")):
        for f in (raw.get(key) or {}).get("features") or []:
            a, g = f["attributes"], f.get("geometry") or {}
            start, end = a.get("IncidentStartDate") or a.get("AlarmStart"), a.get("IncidentEndDate") or a.get("AlarmEnd")
            out.append({"s": "mv", "id": f"{kind}:{a.get('FacilityID') or a.get('AlarmID') or a['OBJECTID']}",
                        "name": (a.get("Name") or "sanitary overflow").strip() + ("" if kind == "combined" else " (sanitary)"),
                        "owner": "Metro Vancouver", "lat": g.get("y"), "lon": g.get("x"), "state": _mv_state(start, end),
                        "start": start, "end": end})
    return [o for o in out if o["lat"] is not None and o["lon"] is not None]


def record(now: datetime, log=print) -> list[dict]:
    """Fetch every source now, archive the raw responses, and return the normalised snapshot."""
    import concurrent.futures as cf
    raw, failed = {}, []
    with cf.ThreadPoolExecutor(len(SOURCES)) as ex:
        futs = {k: ex.submit(_fetch, u) for k, u in SOURCES.items()}
        for k, f in futs.items():
            try:
                raw[k] = f.result()
            except Exception as e:
                failed.append(f"{k} ({e.__class__.__name__})")
    ARCHIVE.mkdir(parents=True, exist_ok=True)
    with gzip.open(ARCHIVE / f"{now.strftime('%Y%m%d%H%M')}.json.gz", "wt") as f:
        json.dump({"time": now.isoformat(), "raw": raw, "failed": failed}, f)
    sites = normalise(raw, now)
    n = {s: sum(o["state"] == s for o in sites) for s in STATES}
    log(f"sewers: {n['overflowing']} outfalls overflowing of {len(sites)}"
        + (f"; failed: {', '.join(failed)}" if failed else ""))
    return sites


def archived() -> list[tuple[datetime, dict]]:
    """Every archived snapshot, oldest first, normalised again (so a fix to `normalise` reaches the whole record)."""
    out = []
    for p in sorted(ARCHIVE.glob("*.json.gz")):
        with gzip.open(p, "rt") as f:
            d = json.load(f)
        t = datetime.fromisoformat(d["time"])
        out.append((t, {"time": t.strftime("%Y-%m-%dT%H:%M:%SZ"), "sites": normalise(d["raw"], t), "failed": d.get("failed", [])}))
    return out


def frames(start: datetime, hours: int) -> dict[int, dict]:
    """Each hour of the window as a compact frame: every outfall as [source, lat, lon, name, owner, state, since ms,
    start ms, end ms] and counts by state, where an outfall is overflowing during the hour or not.

    King County's state is its newest snapshot in the hour; `since` is when the outfall was first recorded
    overflowing in its current spell (it gives no times). Metro Vancouver gives each incident's start and end, so an
    outfall is overflowing in any hour its incident overlaps, even between snapshots, from every incident seen in the
    record; one that began before the window is left out. Hours before recording began have Metro Vancouver only
    ("partial")."""
    since, spells, mv, by_k = {}, {}, {}, {}
    w0 = int(start.timestamp() * 1000)
    for t, snap in archived():
        ms = int(t.timestamp() * 1000)
        for o in snap["sites"]:
            key = (o["s"], o["id"])
            if o["s"] == "mv":
                mv[key] = o
                if o["start"] and o["start"] >= w0:
                    sp = spells.setdefault(key, {})
                    sp[o["start"]] = o["end"] or sp.get(o["start"])
                continue
            if o["state"] == "overflowing":
                since.setdefault(key, ms)
            else:
                since.pop(key, None)
            o["since"] = since.get(key)
        k = int((t - start).total_seconds() // 3600)
        if 0 <= k < hours:
            by_k[k] = snap
    if not by_k:
        return {}
    first, out = min(by_k), {}
    for k in range(max(by_k) + 1):
        a, b = int((start + timedelta(hours=k)).timestamp() * 1000), int((start + timedelta(hours=k + 1)).timestamp() * 1000)
        snap = by_k.get(k) or (by_k[max(j for j in by_k if j < k)] if k > first else None)
        rows = [] if snap is None else [
            [o["s"], round(o["lat"], 5), round(o["lon"], 5), o["name"], o["owner"], o["state"], o.get("since"), None, None]
            for o in snap["sites"] if o["s"] == "kc"]
        for o in mv.values():   # overflowing in hour k if an incident overlaps it
            on = [(s0, e) for s0, e in spells.get((o["s"], o["id"]), {}).items() if s0 < b and (not e or e > a)]
            s0, e = max(on) if on else (None, None)
            if on or snap is not None:
                rows.append([o["s"], round(o["lat"], 5), round(o["lon"], 5), o["name"], o["owner"],
                             "overflowing" if on else "none", s0, s0, e if e and e <= b else None])
        out[k] = {"time": (snap or {}).get("time") or datetime.fromtimestamp(b / 1000, timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
                  "failed": (snap or {}).get("failed", []), "counts": {s: sum(r[5] == s for r in rows) for s in STATES},
                  "out": rows, **({"partial": True} if k < first else {})}
    return out
