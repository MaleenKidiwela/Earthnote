"""Snow, soil and groundwater: what the storm put into (or took out of) the ground, at stations, hour by hour.

    NRCS SNOTEL         ~250 mountain stations in WA, OR and ID: snow water equivalent, snow depth, air temperature,
                        accumulated precipitation, and soil moisture at 2, 8 and 20 inches where measured; hourly
    BC snow pillows     the province's automated snow weather stations: snow water equivalent and depth; hourly
    USGS wells          real-time groundwater levels in WA, OR and ID (depth below land surface or elevation)
    BC observation      the provincial groundwater observation wells: depth to water, hourly
    wells

All of these keep their records, so unlike the outage, road and sewer maps nothing is archived: each update samples
the window again (the latest value at or before the end of each hour, within the hour), as for the reservoirs.
Written under the event's folder: ground/snow.json and ground/wells.json.
"""
from __future__ import annotations

import concurrent.futures as cf
import csv
import io
import json
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone

from . import region as R
from .rivers import USGS_IV, _get, _hourly

UA = {"User-Agent": "Mozilla/5.0 (earthnote storm recorder)"}
CREDITS = ("Snow, soil and groundwater: USDA NRCS SNOTEL (snow water equivalent, depth, temperature, precipitation, soil "
           "moisture), BC River Forecast Centre automated snow weather stations, USGS real-time groundwater levels and the "
           "BC Provincial Groundwater Observation Well Network; provisional data")
AWDB = "https://wcc.sc.egov.usda.gov/awdbRestApi/services/v1"
SNOTEL_STATES = ("WA", "OR", "ID")
SNOTEL_ELEMENTS = {"WTEQ": "swe", "SNWD": "depth", "TOBS": "temp", "PREC": "prec", "SMS:-2:1": "sm2", "SMS:-8:1": "sm8", "SMS:-20:1": "sm20"}
BC_SNOW = "https://www.env.gov.bc.ca/wsd/data_searches/snow/asws/data/{}.csv"
BC_WFS = ("https://openmaps.gov.bc.ca/geo/pub/wfs?service=WFS&version=2.0.0&request=GetFeature&outputFormat=json"
          "&srsName=EPSG:4326&typeName={}&CQL_FILTER={}")
BC_WELL = "https://www.env.gov.bc.ca/wsd/data_searches/obswell/map/data/OW{}-data.csv"
WELL_DEPTH = ("72019",)            # depth to water below land surface, ft
WELL_ELEV = ("62611", "62610")     # groundwater level above NAVD88 / NGVD29, ft
M_FT, MM_IN, CM_IN = 3.28084, 1 / 25.4, 1 / 2.54
PST = timezone(timedelta(hours=-8))   # the BC well files' clock (they lag about a day)


def _in_region(lat, lon) -> bool:
    return lat is not None and lon is not None and R.WEST <= lon <= R.EAST and R.SOUTH <= lat <= R.NORTH


def _json(url: str, timeout: int = 120):
    data = _get(url, timeout=timeout)
    return json.loads(data) if data else None


def _text(url: str, headers: dict | None = None, timeout: int = 120) -> str | None:
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={**UA, **(headers or {})}), timeout=timeout) as r:
            return r.read().decode("utf-8-sig", "replace")
    except Exception:
        return None


def _round(xs: list, nd: int) -> list:
    return [None if v is None else round(v, nd) for v in xs]


# --- snow and soil -------------------------------------------------------------------------------------------------

def snotel(start: datetime, hours: int, now: datetime, log=print) -> list[dict]:
    """Every SNOTEL station in the region with its hourly record through the window."""
    triplets = ",".join(f"*:{s}:SNTL" for s in SNOTEL_STATES)
    meta = _json(f"{AWDB}/stations?stationTriplets={triplets}&returnStationElements=false") or []
    stations = {m["stationTriplet"]: m for m in meta if _in_region(m.get("latitude"), m.get("longitude"))
                and m.get("endDate", "2100") >= now.strftime("%Y-%m-%d")}
    # station times are local standard time; ask a day either side and cut to the window afterwards
    begin, end = (start - timedelta(days=1)).strftime("%Y-%m-%d %H:%M"), (now + timedelta(days=1)).strftime("%Y-%m-%d %H:%M")

    def batch(ts: list[str]):
        q = urllib.parse.urlencode({"stationTriplets": ",".join(ts), "elements": ",".join(SNOTEL_ELEMENTS), "duration": "HOURLY",
                                    "beginDate": begin, "endDate": end})
        return _json(f"{AWDB}/data?{q}", timeout=300) or []

    keys, out = sorted(stations), []
    with cf.ThreadPoolExecutor(8) as ex:
        for res in ex.map(batch, [keys[i:i + 25] for i in range(0, len(keys), 25)]):
            for s in res:
                m = stations[s["stationTriplet"]]
                tz = timezone(timedelta(hours=m.get("dataTimeZone") or -8))
                site = {"id": s["stationTriplet"], "name": m["name"], "src": "SNOTEL", "lat": round(m["latitude"], 5),
                        "lon": round(m["longitude"], 5), "ft": m.get("elevation")}
                for e in s.get("data") or []:
                    el = e["stationElement"]
                    code = el["elementCode"] + (f":{int(el['heightDepth'])}:1" if el.get("heightDepth") is not None else "")
                    key = SNOTEL_ELEMENTS.get(code)
                    series = sorted((datetime.strptime(v["date"], "%Y-%m-%d %H:%M").replace(tzinfo=tz), float(v["value"]))
                                    for v in e.get("values") or [] if v.get("value") is not None)
                    if key and series:
                        site[key] = _round(_hourly(series, start, hours, now), 1)
                if any(any(v is not None for v in site.get(k, [])) for k in SNOTEL_ELEMENTS.values()):
                    out.append(site)
    return out


def bc_snow(start: datetime, hours: int, now: datetime) -> list[dict]:
    """Every active BC automated snow weather station in the region: snow water equivalent and depth (inches)."""
    feats = (_json(BC_WFS.format("WHSE_WATER_MANAGEMENT.SSL_SNOW_ASWS_STNS_SP", "STATUS%3D%27Active%27")) or {}).get("features", [])
    meta = {f["properties"]["LOCATION_ID"]: f["properties"] for f in feats
            if _in_region(f["properties"].get("LATITUDE"), f["properties"].get("LONGITUDE"))}
    sites: dict[str, dict] = {}
    for code, key, scale in (("SW", "swe", MM_IN), ("SD", "depth", CM_IN), ("TA", "temp", None)):
        text = _text(BC_SNOW.format(code))
        if not text:
            continue
        rows = list(csv.reader(io.StringIO(text)))
        for j, col in enumerate(rows[0][1:], 1):
            sid = col.split(" ")[0]
            if sid not in meta:
                continue
            series = []
            for r in rows[1:]:
                if j < len(r) and r[j] not in ("", "NA"):
                    try:
                        v = float(r[j])
                    except ValueError:
                        continue
                    series.append((datetime.strptime(r[0], "%Y-%m-%d %H:%M").replace(tzinfo=timezone.utc), v * scale if scale else v * 9 / 5 + 32))
            if series:
                m = meta[sid]
                site = sites.setdefault(sid, {"id": sid, "name": m["LOCATION_NAME"], "src": "BC snow pillow", "lat": round(m["LATITUDE"], 5),
                                              "lon": round(m["LONGITUDE"], 5), "ft": round(m["ELEVATION"] * M_FT) if m.get("ELEVATION") else None})
                site[key] = _round(_hourly(series, start, hours, now), 1)
    return list(sites.values())


# --- groundwater ---------------------------------------------------------------------------------------------------

def usgs_wells(start: datetime, hours: int, now: datetime) -> list[dict]:
    """Every USGS real-time well in the region: water level as feet above its first reading's datum ("level", up is
    a rising water table) and, where measured, depth below land surface."""
    sites: dict[str, dict] = {}
    for state in ("wa", "or", "id"):
        q = urllib.parse.urlencode({"format": "json", "stateCd": state, "parameterCd": ",".join(WELL_DEPTH + WELL_ELEV),
                                    "siteStatus": "active", "startDT": start.strftime("%Y-%m-%dT%H:%MZ"), "endDT": now.strftime("%Y-%m-%dT%H:%MZ")})
        for ts in (_json(f"{USGS_IV}?{q}") or {}).get("value", {}).get("timeSeries", []):
            info, code = ts["sourceInfo"], ts["variable"]["variableCode"][0]["value"]
            geo = info["geoLocation"]["geogLocation"]
            if not _in_region(geo["latitude"], geo["longitude"]):
                continue
            vals = sorted((datetime.fromisoformat(v["dateTime"]).astimezone(timezone.utc), float(v["value"]))
                          for v in ts["values"][0]["value"] if float(v["value"]) > -999)
            if not vals:
                continue
            s = sites.setdefault(info["siteCode"][0]["value"], {"id": info["siteCode"][0]["value"], "name": info["siteName"].strip(),
                                                                "src": "USGS", "lat": round(geo["latitude"], 5), "lon": round(geo["longitude"], 5)})
            if code in WELL_DEPTH and "depth" not in s:
                s["depth"] = _round(_hourly(vals, start, hours, now, max_age=3 * 3600), 2)
            elif code in WELL_ELEV and "elev" not in s:
                s["elev"] = _round(_hourly(vals, start, hours, now, max_age=3 * 3600), 2)
    out = []
    for s in sites.values():
        # the level: the elevation where there is one, else minus the depth (so that up is up)
        lvl = s.get("elev") or [None if v is None else -v for v in s.get("depth", [])]
        if any(v is not None for v in lvl):
            out.append({**s, "level": lvl})
    return out


def bc_wells(start: datetime, hours: int, now: datetime) -> list[dict]:
    """Every active BC observation well in the region: depth to water (ft below ground) and level (minus the depth).
    Only the tail of each well's record is read (the files hold decades); readings are hourly with gaps."""
    feats = (_json(BC_WFS.format("WHSE_WATER_MANAGEMENT.GW_WATER_WELLS_WRBC_SVW", "OBSERVATION_WELL_STATUS%3D%27Active%27")) or {}).get("features", [])
    wells = [f["properties"] | {"lon": f["geometry"]["coordinates"][0], "lat": f["geometry"]["coordinates"][1]}
             for f in feats if f.get("geometry")]
    wells = [w for w in wells if _in_region(w["lat"], w["lon"]) and w.get("OBSERVATION_WELL_NUMBER")]
    need = int((now - start).total_seconds() / 3600) + 48

    def one(w):
        num = str(w["OBSERVATION_WELL_NUMBER"]).zfill(3)
        text = _text(BC_WELL.format(num), {"Range": f"bytes=-{need * 60}"}, timeout=60)
        if not text:
            return None
        series = []
        for line in text.splitlines()[1:]:   # the first line may be cut
            p = line.replace('"', "").split(",")
            try:
                series.append((datetime.strptime(p[0], "%Y-%m-%d %H:%M").replace(tzinfo=PST), float(p[1]) * M_FT))
            except (ValueError, IndexError):
                continue
        depth = _round(_hourly(sorted(series), start, hours, now, max_age=3 * 3600), 2)
        if not any(v is not None for v in depth):
            return None
        where = " ".join(x for x in (w.get("STREET_ADDRESS"), w.get("CITY")) if x and x.strip())
        return {"id": f"OW{num}", "name": f"Observation well {num}" + (f", {where.strip().title()}" if where.strip() else ""), "src": "BC",
                "lat": round(w["lat"], 5), "lon": round(w["lon"], 5), "depth": depth, "level": [None if v is None else -v for v in depth]}

    with cf.ThreadPoolExecutor(16) as ex:
        return [w for w in ex.map(one, wells) if w]


def update(out_dir, start: datetime, hours: int, now: datetime, log=print) -> None:
    """Write ground/snow.json and ground/wells.json for the window."""
    out_dir.mkdir(parents=True, exist_ok=True)
    stamp = now.strftime("%Y-%m-%dT%H:%M:%SZ")
    snow = snotel(start, hours, now, log) + bc_snow(start, hours, now)
    (out_dir / "snow.json").write_text(json.dumps({"updated": stamp, "sites": snow}, separators=(",", ":")))
    wells = usgs_wells(start, hours, now) + bc_wells(start, hours, now)
    (out_dir / "wells.json").write_text(json.dumps({"updated": stamp, "sites": wells}, separators=(",", ":")))
    soil = sum(1 for s in snow if "sm2" in s)
    log(f"ground: {len(snow)} snow stations ({soil} with soil moisture), {len(wells)} groundwater wells")
