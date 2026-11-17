"""More feeds that keep no history, recorded raw each hour (not drawn on the map yet; the recordings keep them).

    Power       Snohomish County PUD (its live incidents tile set), Avista (Kubra: totals, by county and ZIP code),
                Peninsula Light (summary, outages, outage outlines), EWEB (outage areas, customers restored)
    Roads       King County road alerts (county roads; and Duvall, Tukwila, Sammamish and SeaTac's); Oregon (TripCheck:
                incidents, travel events such as closures and restrictions, road-weather stations; its key in
                ~/.config/earthnote/odot.env as ODOT_KEY)
    Transit     service alerts (GTFS-realtime): King County Metro (with the Water Taxi), Sound Transit (Link,
                Sounder, ST Express), Community Transit, Kitsap Transit, TransLink (its key in ~/.config/earthnote/translink.env as TRANSLINK_KEY); Amtrak trains in the region (Cascades, Coast Starlight, Empire Builder: positions, delays)
    Ferries     the Black Ball Coho (Port Angeles-Victoria), Pierce County (Anderson Island) and Skagit County
                (Guemes Island) ferry pages
    Schools     FlashAlert closures and delays, Seattle and Portland regions

Each update saves every source's response (JSON as is, binary as base64, web pages without their scripts and styles)
to data/archive/feeds/<time>.json.gz, which goes to the lab's S3 bucket with the other recordings.
"""
from __future__ import annotations

import base64
import concurrent.futures as cf
import gzip
import json
import re
import urllib.error
import urllib.request
from datetime import datetime

from pathlib import Path

from .paths import ROOT

ARCHIVE = ROOT / "data" / "archive" / "feeds"
UA = {"User-Agent": "Mozilla/5.0 (earthnote storm recorder)"}
AMTRAK_ROUTES = {"Amtrak Cascades", "Coast Starlight", "Empire Builder"}
KUBRA = "https://kubra.io"
# name: (kind, where). kinds: json, bytes, page (HTML, scripts and styles removed), kubra ((instance, view), files),
# amtrak (the trains on AMTRAK_ROUTES), arcgis (every feature of the layers, in lon/lat)
EWEB = "https://services7.arcgis.com/6AM8yPAeyXiPc9eF/arcgis/rest/services"
KC_ROADS = "https://gismaps.kingcounty.gov/arcgis/rest/services/RoadAlerts"
TRIPCHECK = "https://api.odot.state.or.us/tripcheck"
KEYS = Path.home() / ".config" / "earthnote"
SOURCES = {
    "snopud": ("bytes", "https://outagestprodpub.blob.core.windows.net/pmtiles/incidents.pmtiles"),
    "avista": ("kubra", (("b9478e86-d9d9-45b2-9579-b2639f77f3fe", "00763684-dd19-4651-b33f-51aa17a491a6"),
                         ("public/summary-1/data.json", "public/thematic-1/thematic_areas.json", "public/thematic-2/thematic_areas.json",
                          "public/reports/568cbb41-b422-4348-aa0b-a28324a5d714_report.json"))),
    "penlight_summary": ("json", "https://outages.penlightop.org/data/outageSummary.json"),
    "penlight_outages": ("json", "https://outages.penlightop.org/data/outages.json"),
    "penlight_polygons": ("json", "https://outages.penlightop.org/data/outagePolygons.json"),
    "eweb": ("arcgis", (f"{EWEB}/PublicOutageMap_Public_View/FeatureServer/0", f"{EWEB}/CustomersRestored_Public_View/FeatureServer/0")),
    "kc_road_alerts": ("arcgis", (f"{KC_ROADS}/KingCo_Road_Alerts/MapServer/2",) + tuple(f"{KC_ROADS}/nonKCRoadAlerts/MapServer/{i}" for i in range(8))),
    "tripcheck": ("keyed", ("odot.env", "ODOT_KEY", "Ocp-Apim-Subscription-Key", [f"{TRIPCHECK}/{p}" for p in ("Incidents", "Tle/Events", "Rwis/Status")])),
    "kcm_alerts": ("bytes", "https://s3.amazonaws.com/kcm-alerts-realtime-prod/alerts.pb"),
    "st_alerts": ("bytes", "https://s3.amazonaws.com/st-service-alerts-prod/alerts.pb"),
    "ct_alerts": ("bytes", "https://s3.amazonaws.com/commtrans-realtime-prod/alerts.pb"),
    "kitsap_alerts": ("bytes", "https://kttracker.com/gtfsrt/alerts"),
    "translink_alerts": ("keyed_bytes", ("translink.env", "TRANSLINK_KEY", "apikey", "https://gtfsapi.translink.ca/v3/gtfsalerts")),
    "amtrak": ("amtrak", "https://api-v3.amtraker.com/v3/trains"),
    "coho": ("page", "https://www.cohoferry.com/"),
    "pierce_ferry": ("page", "https://www.piercecountywa.gov/1793/Ferry"),
    "guemes_ferry": ("page", "https://www.skagitcounty.net/Departments/PublicWorksGuemesFerry/main.htm"),
    "flashalert_seattle": ("page", "https://www.flashalert.net/regions/seattle/"),
    "flashalert_portland": ("page", "https://www.flashalert.net/regions/portland/"),
}


def _get(url: str, headers: dict | None = None) -> bytes:
    with urllib.request.urlopen(urllib.request.Request(url, headers={**UA, **(headers or {})}), timeout=60) as r:
        return r.read()


def _key(file: str, name: str) -> str | None:
    path = KEYS / file
    if not path.exists():
        return None
    return next((line.split("=", 1)[1].strip().strip("\"'") for line in path.read_text().splitlines() if line.startswith(f"{name}=")), None)


def strip_page(html: str) -> str:
    """A web page without its scripts, styles and comments (what it says, at a fraction of the size)."""
    return re.sub(r"<script\b.*?</script>|<style\b.*?</style>|<!--.*?-->|<svg\b.*?</svg>", "", html, flags=re.S | re.I)


def fetch(kind: str, where):
    if kind == "json":
        return json.loads(_get(where))
    if kind == "bytes":
        return {"b64": base64.b64encode(_get(where)).decode()}
    if kind == "page":
        return {"html": strip_page(_get(where).decode("utf-8", "replace"))}
    if kind == "amtrak":
        trains = json.loads(_get(where))
        return {num: [t for t in ts if t.get("routeName") in AMTRAK_ROUTES] for num, ts in trains.items()
                if any(t.get("routeName") in AMTRAK_ROUTES for t in ts)}
    if kind == "keyed":   # JSON behind a key sent as a header; skipped (an error) without the key file
        file, name, header, urls = where
        key = _key(file, name)
        if not key:
            raise FileNotFoundError(f"no {name} in {KEYS / file}")
        return {url: json.loads(_get(url, {header: key})) for url in urls}
    if kind == "keyed_bytes":   # binary behind a key sent in the query string
        file, name, param, url = where
        key = _key(file, name)
        if not key:
            raise FileNotFoundError(f"no {name} in {KEYS / file}")
        return {"b64": base64.b64encode(_get(f"{url}?{param}={key}")).decode()}
    if kind == "arcgis":
        q = "query?where=1%3D1&outFields=*&outSR=4326&f=json"
        return {url: json.loads(_get(f"{url}/{q}")) for url in where}
    if kind == "kubra":   # the current interval's files, from the storm center's current state
        (inst, view), files = where
        state = json.loads(_get(f"{KUBRA}/stormcenter/api/v1/stormcenters/{inst}/views/{view}/currentState?preview=false"))
        base = f"{KUBRA}/{state['data']['interval_generation_data']}"
        got, missing = {}, []
        for f in files:   # some intervals have no thematic (by county, by ZIP) files: those are listed as missing
            try:
                got[f] = json.loads(_get(f"{base}/{f}"))
            except urllib.error.HTTPError as e:
                if e.code != 404:
                    raise
                missing.append(f)
        return {"state": state, "files": got, "missing": missing}
    raise ValueError(kind)


def record(now: datetime, log=print) -> dict:
    raw, failed = {}, []
    with cf.ThreadPoolExecutor(8) as io:
        futs = {k: io.submit(fetch, *v) for k, v in SOURCES.items()}
        for k, f in futs.items():
            try:
                raw[k] = f.result()
            except Exception as e:
                failed.append(f"{k} ({e.__class__.__name__})")
    ARCHIVE.mkdir(parents=True, exist_ok=True)
    with gzip.open(ARCHIVE / f"{now.strftime('%Y%m%d%H%M')}.json.gz", "wt") as f:
        json.dump({"time": now.isoformat(), "raw": raw, "failed": failed}, f)
    log(f"feeds: {len(raw)} of {len(SOURCES)} recorded" + (f"; failed: {', '.join(failed)}" if failed else ""))
    return raw
