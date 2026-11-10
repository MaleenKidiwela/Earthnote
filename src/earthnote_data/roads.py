"""Roads and ferries: highway alerts, mountain passes and ferry alerts, recorded each hour.

Like the power outage maps, these feeds list only what is in effect now, so each hourly update saves the raw
responses (archive, cluster-only) and a normalised snapshot. An event gone by the next snapshot ended within that hour.

    WSDOT highway alerts    Washington state highways: closures, slides, flooding, crashes, roadwork; start, end
    WSDOT mountain passes   the 16 passes: road and weather condition, restrictions each way, temperature
    WSDOT traffic flow      ~1,500 freeway sensors: wide open .. stop and go (archived only, for now)
    WSDOT travel times      ~170 commuter routes: current vs average minutes (archived only, for now)
    WSF ferry alerts        Washington State Ferries: cancelled and delayed sailings, by route
    DriveBC (Open511)       BC highways: closures, hazards, washouts, roadwork; road state, start

The WSDOT key (free, https://wsdot.wa.gov/traffic/api/) is read from ~/.config/earthnote/wsdot.env as
WSDOT_ACCESS_CODE; without it only DriveBC is recorded. Oregon (TripCheck) needs a key of its own and is not here.

Written under the event's folder, roads/k###.json: the newest snapshot taken during hour k (see event.py).
"""
from __future__ import annotations

import gzip
import html
import json
import os
import re
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path

from .paths import ROOT

ARCHIVE = ROOT / "data" / "archive" / "roads"
KEYFILE = Path.home() / ".config" / "earthnote" / "wsdot.env"
UA = {"User-Agent": "Mozilla/5.0 (earthnote storm recorder)"}
CREDITS = "Roads and ferries: WSDOT Traveler Information (highway alerts, mountain passes), Washington State Ferries alerts and DriveBC (Open511), recorded hourly"
_WSDOT = "https://wsdot.wa.gov/Traffic/api"
SOURCES = {
    "alerts": f"{_WSDOT}/HighwayAlerts/HighwayAlertsREST.svc/GetAlertsAsJson?AccessCode={{key}}",
    "passes": f"{_WSDOT}/MountainPassConditions/MountainPassConditionsREST.svc/GetMountainPassConditionsAsJson?AccessCode={{key}}",
    "flow": f"{_WSDOT}/TrafficFlow/TrafficFlowREST.svc/GetTrafficFlowsAsJson?AccessCode={{key}}",
    "times": f"{_WSDOT}/TravelTimes/TravelTimesREST.svc/GetTravelTimesAsJson?AccessCode={{key}}",
    "wsf": "https://www.wsdot.wa.gov/ferries/api/schedule/rest/alerts?apiaccesscode={key}",
    "drivebc": "https://api.open511.gov.bc.ca/events?format=json&status=ACTIVE&limit=500",   # 500 at most; paged
}
# event kinds, worst first: closed, storm damage (flooding, slides, trees), crashes, slippery or snowy surface, planned
# work; "earlier" is set per frame for an alert of the first four kinds already in place before the storm began
KINDS = ("closure", "hazard", "incident", "surface", "planned", "other", "earlier")
_HAZARD = re.compile(r"\b(flood\w*|high water|water over|(land|rock|mud)?slides?|mud|rock ?fall|debris|fallen trees?|trees? down|downed|"
                     r"wash ?outs?|washed out|sinkhole|storm|wind\w*|avalanche(?! gate)|power lines?)\b", re.I)
_SURFACE = re.compile(r"\b(slippery|slushy|compact snow|snow|ice|icy|frost|fog|black ice|traction)\b", re.I)
_CLOSED = re.compile(r"\b(road|highway|hwy|bridge|both directions|all lanes|ramp|pass)\b[^.]{0,60}\bclosed\b|\bclosed\b[^.]{0,30}\b(both directions|to all traffic)\b", re.I)


def wsdot_key() -> str | None:
    key = os.environ.get("WSDOT_ACCESS_CODE")
    if not key and KEYFILE.exists():
        for line in KEYFILE.read_text().splitlines():
            if line.startswith("WSDOT_ACCESS_CODE="):
                key = line.split("=", 1)[1].strip()
    return key or None


def _fetch(url: str):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=90) as r:
        return json.loads(r.read())


def _drivebc(url: str) -> list:
    out = []
    while True:
        page = _fetch(f"{url}&offset={len(out)}")["events"]
        out += page
        if len(page) < 500:
            return out


def _ms(s) -> int | None:
    """A WSDOT '/Date(1794313800000-0800)/' or an ISO time as epoch ms."""
    if not s:
        return None
    m = re.match(r"/Date\((-?\d+)", str(s))
    if m:
        return int(m.group(1))
    try:
        return int(datetime.fromisoformat(str(s).replace("Z", "+00:00")).timestamp() * 1000)
    except ValueError:
        return None


def _utc(s: str) -> int | None:
    """An Open511 schedule time ('2026-10-27T22:24', UTC) as epoch ms."""
    return _ms(s if not s or s.endswith("Z") or "+" in s else s + "+00:00")


def _text(s) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", s or ""))).strip()


def _kind(category: str, text: str, closed: bool, planned: bool) -> str:
    """Planned work stays planned (even a closure) unless it mentions storm damage."""
    if planned and not _HAZARD.search(text):
        return "planned"
    if closed:
        return "closure"
    if _HAZARD.search(category) or _HAZARD.search(text):
        return "hazard"
    if planned:
        return "planned"
    if re.search(r"collision|crash|incident|fire|disabled|blocking", category + " " + text, re.I):
        return "incident"
    if _SURFACE.search(text):
        return "surface"
    return "other"


def normalise(raw: dict) -> dict:
    """{events: [{s, id, lat, lon, lat2, lon2, kind, sev 0..3, road, title, start, end, planned}], passes: [...],
    ferries: [...]}; times in epoch ms."""
    ev = []
    for a in raw.get("alerts") or []:
        p, q = a.get("StartRoadwayLocation") or {}, a.get("EndRoadwayLocation") or {}
        cat, text = a.get("EventCategory") or "", _text(a.get("HeadlineDescription"))
        planned = bool(re.match(r"construction|maintenance|road ?work|rest area|special event", cat, re.I))
        closed = cat.lower() == "closure" or bool(_CLOSED.search(text))
        ev.append({"s": "wsdot", "id": str(a["AlertID"]), "lat": p.get("Latitude"), "lon": p.get("Longitude"),
                   "lat2": q.get("Latitude"), "lon2": q.get("Longitude"),
                   "kind": _kind(cat, text, closed, planned),
                   "sev": {"Highest": 3, "High": 2, "Medium": 1}.get(a.get("Priority"), 0),
                   "road": (f"SR {p['RoadName']}" if (p.get("RoadName") or "").isdigit() else p.get("RoadName")) or "",
                   "title": f"{cat}: {text}" if cat else text, "start": _ms(a.get("StartTime")), "end": _ms(a.get("EndTime")),
                   "planned": planned})
    for e in raw.get("drivebc") or []:
        g = e.get("geography") or {}
        c = g.get("coordinates") or []
        pts = [c] if g.get("type") == "Point" else c if g.get("type") == "LineString" else [x for line in c for x in line]
        if not pts:
            continue
        roads = e.get("roads") or []
        closed = any(r.get("state") == "CLOSED" for r in roads)
        planned = e.get("event_type") in ("CONSTRUCTION", "SPECIAL_EVENT") or bool({"PLANNED_EVENT", "ROAD_MAINTENANCE", "ROAD_CONSTRUCTION"} & set(e.get("event_subtypes") or []))
        text = _text(e.get("description")).split(" Last update:")[0]
        interval = ((e.get("schedule") or {}).get("intervals") or [""])[0].split("/")
        ev.append({"s": "drivebc", "id": e["id"], "lat": pts[0][1], "lon": pts[0][0], "lat2": pts[-1][1], "lon2": pts[-1][0],
                   "kind": _kind(" ".join(e.get("event_subtypes") or []), text, closed, planned),
                   "sev": 2 if e.get("severity") == "MAJOR" else 3 if "ALMOST_IMPASSABLE" in (e.get("event_subtypes") or []) else 0,
                   "road": roads[0].get("name", "") if roads else "", "title": text,
                   "start": _utc(interval[0]) or _ms(e.get("created")), "end": _utc(interval[1]) if len(interval) > 1 else None,
                   "planned": planned})
    passes = []
    for p in raw.get("passes") or []:
        r = [x.get("RestrictionText") or "" for x in (p.get("RestrictionOne") or {}, p.get("RestrictionTwo") or {})]
        passes.append({"id": p["MountainPassId"], "name": p.get("MountainPassName", "").replace("  ", " "), "lat": p.get("Latitude"),
                       "lon": p.get("Longitude"), "ft": p.get("ElevationInFeet"), "road": _text(p.get("RoadCondition")),
                       "weather": _text(p.get("WeatherCondition")), "f": p.get("TemperatureInFahrenheit"), "restrict": r,
                       "closed": any(re.search(r"\bclosed\b", x, re.I) for x in r), "updated": _ms(p.get("DateUpdated"))})
    ferries = [{"id": f["BulletinID"], "title": _text(f.get("AlertFullTitle")), "text": _text(f.get("RouteAlertText"))[:240],
                "routes": f.get("AffectedRouteIDs") or [], "published": _ms(f.get("PublishDate"))} for f in raw.get("wsf") or []]
    return {"events": [e for e in ev if e["lat"] is not None and e["lon"] is not None], "passes": passes, "ferries": ferries}


def record(now: datetime, log=print) -> dict:
    """Fetch every source now, archive the raw responses, and return the normalised snapshot."""
    import concurrent.futures as cf
    key, raw, failed = wsdot_key(), {}, []
    urls = {k: u.format(key=key) for k, u in SOURCES.items() if key or "{key}" not in u}
    with cf.ThreadPoolExecutor(len(urls)) as io:
        futs = {k: io.submit(_drivebc if k == "drivebc" else _fetch, u) for k, u in urls.items()}
        for k, f in futs.items():
            try:
                raw[k] = f.result()
            except Exception as e:
                failed.append(f"{k} ({e.__class__.__name__})")
    ARCHIVE.mkdir(parents=True, exist_ok=True)
    with gzip.open(ARCHIVE / f"{now.strftime('%Y%m%d%H%M')}.json.gz", "wt") as f:
        json.dump({"time": now.isoformat(), "raw": raw, "failed": failed}, f)
    snap = {"time": now.strftime("%Y-%m-%dT%H:%M:%SZ"), **normalise(raw), "failed": failed}
    n = {k: sum(e["kind"] == k for e in snap["events"]) for k in KINDS}
    log(f"roads: {n['closure']} closures, {n['hazard']} storm hazards, {n['incident']} incidents, {n['surface']} slippery, {n['planned']} planned; "
        f"{sum(p['closed'] for p in snap['passes'])} of {len(snap['passes'])} passes closed; {len(snap['ferries'])} ferry alerts"
        + ("" if key else "; no WSDOT key") + (f"; failed: {', '.join(failed)}" if failed else ""))
    return snap


def archived() -> list[tuple[datetime, dict]]:
    """Every archived snapshot, oldest first, normalised again (so a fix to `normalise` reaches the whole record)."""
    out = []
    for p in sorted(ARCHIVE.glob("*.json.gz")):
        with gzip.open(p, "rt") as f:
            d = json.load(f)
        t = datetime.fromisoformat(d["time"])
        out.append((t, {"time": t.strftime("%Y-%m-%dT%H:%M:%SZ"), **normalise(d["raw"]), "failed": d.get("failed", [])}))
    return out


def frames(start: datetime, hours: int, box) -> dict[int, dict]:
    """Each hour of the window as a compact frame: events within `box` (west, east, south, north) as [source, lat, lon,
    lat2, lon2, kind, severity, road, title, start ms, first seen ms, end ms], counts by kind, the passes and the ferry
    alerts, from the newest snapshot in the hour. Each report is shown from its own time: an event from its start, a
    pass from its report (or since it closed), a ferry alert from its publication. One from before the window (a
    closure since spring, a pass report from October) is in place before the storm, so not its doing: an event is kind
    "earlier", a pass is marked `earlier`, a ferry alert is left out.

    Hours before recording began are rebuilt from the first snapshot: each report there placed back to its own time
    ("partial": the ones over by then are missing)."""
    seen, shut, by_k = {}, {}, {}
    for t, snap in archived():
        ms = int(t.timestamp() * 1000)
        for e in snap["events"]:
            seen.setdefault((e["s"], e["id"]), ms)
        for p in snap["passes"]:   # a closed pass's report time is bumped by weather updates, so keep the first one
            shut[p["id"]] = (shut.get(p["id"]) or p["updated"] or ms) if p["closed"] else None
            p["closed_since"] = shut[p["id"]]
            p["since"] = p["closed_since"] if p["closed"] else (p["updated"] or ms)
        k = int((t - start).total_seconds() // 3600)
        if 0 <= k < hours:
            by_k[k] = snap
    if not by_k:
        return {}
    w, e_, s, n = box
    t0 = int(start.timestamp() * 1000)
    kind = lambda e: "earlier" if e["kind"] not in ("planned", "other") and e["start"] and e["start"] < t0 else e["kind"]
    first, out = min(by_k), {}
    for k in range(max(by_k) + 1):
        a, b = t0 + k * 3600_000, t0 + (k + 1) * 3600_000
        snap, partial = by_k.get(k), k < first
        if snap is None and not partial:
            continue
        snap = snap or by_k[first]
        rows = [[e["s"], round(e["lat"], 5), round(e["lon"], 5),
                 None if e["lat2"] is None else round(e["lat2"], 5), None if e["lon2"] is None else round(e["lon2"], 5),
                 kind(e), e["sev"], e["road"], e["title"][:200], e["start"], seen[(e["s"], e["id"])], e["end"]]
                for e in snap["events"] if w <= e["lon"] <= e_ and s <= e["lat"] <= n
                and (e["start"] or seen[(e["s"], e["id"])]) < b and not (partial and (not e["start"] or (e["end"] and e["end"] <= a)))]
        out[k] = {"time": snap["time"] if not partial else datetime.fromtimestamp(b / 1000, timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
                  "failed": [] if partial else snap["failed"], "counts": {x: sum(r[5] == x for r in rows) for x in KINDS}, "out": rows,
                  "passes": [{**p, "earlier": p["since"] < t0} for p in snap["passes"] if p["since"] < b],
                  "ferries": [f for f in snap["ferries"] if f["published"] and t0 <= f["published"] < b],
                  **({"partial": True} if partial else {})}
    return out
