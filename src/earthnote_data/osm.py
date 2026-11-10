"""OpenStreetMap roads and place names from the Geofabrik extracts in data/raw/osm/.

Roads: highway=motorway, trunk and primary (no link ramps), clipped to the region. Places: place=city and town nodes
with a name. Each extract is read in its own process; ways and nodes are keyed by their OSM id, so the overlap
between neighbouring extracts collapses.
"""
from __future__ import annotations

import concurrent.futures as cf
import json
from pathlib import Path

import osmium

from . import region as R
from .paths import CACHE, OSM_DIR

ROAD_CLASSES = ("motorway", "trunk", "primary")
PLACE_KINDS = ("city", "town")
PAD = 0.05   # degrees kept beyond the region, so lines run off the map's edge instead of stopping short


def _inside(lon: float, lat: float) -> bool:
    return R.WEST - PAD <= lon <= R.EAST + PAD and R.SOUTH - PAD <= lat <= R.NORTH + PAD


def _population(tags) -> int:
    raw = (tags.get("population") or "").replace(",", "").replace(" ", "")
    return int(raw) if raw.isdigit() else 0


def extract(pbf: Path) -> dict:
    roads, places = {}, {}
    fp = (osmium.FileProcessor(str(pbf))
          .with_locations()
          .with_filter(osmium.filter.KeyFilter("highway", "place")))
    for obj in fp:
        if obj.is_node():
            kind = obj.tags.get("place")
            if kind in PLACE_KINDS and "name" in obj.tags and obj.location.valid():
                lon, lat = obj.location.lon, obj.location.lat
                if _inside(lon, lat):
                    places[obj.id] = {"name": obj.tags["name"], "kind": kind, "lon": round(lon, 5), "lat": round(lat, 5),
                                      "pop": _population(obj.tags)}
        elif obj.is_way():
            cls = obj.tags.get("highway")
            if cls not in ROAD_CLASSES:
                continue
            run, runs = [], []
            for n in obj.nodes:   # split where the way leaves the region
                if n.location.valid() and _inside(n.location.lon, n.location.lat):
                    run.append((round(n.location.lon, 5), round(n.location.lat, 5)))
                elif run:
                    runs.append(run); run = []
            if run:
                runs.append(run)
            runs = [r for r in runs if len(r) > 1]
            if runs:
                roads[obj.id] = {"cls": cls, "ref": obj.tags.get("ref", ""), "name": obj.tags.get("name", ""), "runs": runs}
    return {"roads": roads, "places": places}


def _one(pbf: Path) -> Path:
    out = CACHE / "osm" / f"{pbf.name.split('-latest')[0]}.json"
    if out.exists() and out.stat().st_mtime > pbf.stat().st_mtime:
        return out
    out.parent.mkdir(parents=True, exist_ok=True)
    data = extract(pbf)
    tmp = out.with_suffix(".part")
    tmp.write_text(json.dumps({"roads": {str(k): v for k, v in data["roads"].items()},
                               "places": {str(k): v for k, v in data["places"].items()}}))
    tmp.replace(out)
    return out


def load_all(log=print) -> dict:
    """Roads and places from every extract, merged by OSM id."""
    pbfs = sorted(OSM_DIR.glob("*-latest.osm.pbf"))
    if not pbfs:
        raise FileNotFoundError(f"No OSM extracts in {OSM_DIR}; download them from download.geofabrik.de")
    roads, places = {}, {}
    with cf.ProcessPoolExecutor(len(pbfs)) as pool:
        for pbf, path in zip(pbfs, pool.map(_one, pbfs)):
            d = json.loads(path.read_text())
            roads.update(d["roads"]); places.update(d["places"])
            log(f"  {pbf.name}: {len(d['roads'])} roads, {len(d['places'])} places")
    return {"roads": roads, "places": places}


if __name__ == "__main__":
    d = load_all()
    print(len(d["roads"]), "roads,", len(d["places"]), "places")
