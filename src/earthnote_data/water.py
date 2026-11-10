"""Where the water is, from OpenStreetMap, as raster masks for the terrain shader (255 = water).

Elevation alone cannot say where the shore is: at 250 m a lake bottom bleeds into its islands (Mercer Island in Lake
Washington came out under water) and a coastal flat can dip below zero. So:

- sea: OSM's coastline ways are drawn as a barrier, and everything connected to the open ocean (seeded where GMRT is
  deep offshore) without crossing a coastline is sea — Puget Sound and the BC inlets included;
- lakes, reservoirs and river areas: OSM water areas (natural=water, waterway=riverbank, landuse=reservoir), with
  their islands cut out as holes.

Written: water.png (overview, 1/256 degree) and terrain/water/<tile>.png (each detail tile, 1/1024 degree, about
110 x 75 m), all on the region's corner-registered lattice of nodes.
"""
from __future__ import annotations

import concurrent.futures as cf
import pickle
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

from . import region as R
from .paths import CACHE, OSM_DIR

FINE = 1024            # nodes per degree for the detail masks
COARSE = 256           # for the overview mask
TAGS = (("natural", "water"), ("waterway", "riverbank"), ("landuse", "reservoir"))
PAD = 0.05


def real_water(tags) -> bool:
    """Open, standing water: not intermittent or seasonal (dry most of the year), not covered or underground
    (reservoir tanks, culverts), not a wastewater or treatment basin."""
    g = lambda k: (tags.get(k) or "").lower()
    if g("intermittent") == "yes" or g("seasonal") == "yes" or g("covered") == "yes" or g("tunnel") in ("yes", "culvert"):
        return False
    if g("location") in ("underground", "underwater") or g("layer").startswith("-"):
        return False
    return g("water") not in ("wastewater", "sewage", "basin") and g("reservoir_type") not in ("water_storage", "sewage")


def _inside_box(xs, ys) -> bool:
    return max(xs) >= R.WEST - PAD and min(xs) <= R.EAST + PAD and max(ys) >= R.SOUTH - PAD and min(ys) <= R.NORTH + PAD


def extract(pbf: Path) -> dict:
    """Coastline ways and water areas (outer and inner rings as float32 lon/lat arrays) inside the region."""
    import osmium
    coast, areas = [], []
    fp = (osmium.FileProcessor(str(pbf))
          .with_areas(osmium.filter.TagFilter(*TAGS))
          .with_filter(osmium.filter.TagFilter(*TAGS, ("natural", "coastline"))))
    for o in fp:
        if o.is_area():
            if not real_water(o.tags):
                continue
            for outer in o.outer_rings():
                ring = np.array([(n.lon, n.lat) for n in outer], np.float32)
                if len(ring) < 3 or not _inside_box(ring[:, 0], ring[:, 1]):
                    continue
                holes = [np.array([(n.lon, n.lat) for n in inner], np.float32) for inner in o.inner_rings(outer)]
                areas.append((ring, [h for h in holes if len(h) >= 3]))
        elif o.is_way() and o.tags.get("natural") == "coastline":
            pts = np.array([(n.lon, n.lat) for n in o.nodes if n.location.valid()], np.float32)
            if len(pts) > 1 and _inside_box(pts[:, 0], pts[:, 1]):
                coast.append(pts)
    return {"coast": coast, "areas": areas}


def _cached(pbf: Path) -> Path:
    # a pickle is fine here: it is this pipeline's own cache in data/cache, written just below, never downloaded
    out = CACHE / "water" / f"{pbf.name.split('-latest')[0]}.pkl"
    if not (out.exists() and out.stat().st_mtime > pbf.stat().st_mtime):
        out.parent.mkdir(parents=True, exist_ok=True)
        tmp = out.with_suffix(".part")
        tmp.write_bytes(pickle.dumps(extract(pbf), protocol=5))
        tmp.replace(out)
    return out


def load_all(log=print) -> dict:
    pbfs = sorted(OSM_DIR.glob("*-latest.osm.pbf"))
    coast, areas = [], []
    with cf.ProcessPoolExecutor(len(pbfs)) as pool:
        for pbf, path in zip(pbfs, pool.map(_cached, pbfs)):
            d = pickle.loads(path.read_bytes())
            coast += d["coast"]; areas += d["areas"]
            log(f"  {pbf.name}: {len(d['coast'])} coastline ways, {len(d['areas'])} water areas")
    return {"coast": coast, "areas": areas}


def rasterize(data: dict, per_deg: int, deep_sea, log=print) -> np.ndarray:
    """Water mask (bool, rows from the north) on the corner-registered node lattice at `per_deg` nodes per degree.
    deep_sea(lon, lat) -> bool marks seed nodes that are certainly open ocean."""
    w = round((R.EAST - R.WEST) * per_deg) + 1
    h = round((R.NORTH - R.SOUTH) * per_deg) + 1
    px = lambda a: [((x - R.WEST) * per_deg, (R.NORTH - y) * per_deg) for x, y in a]

    barrier = Image.new("1", (w, h), 0)
    d = ImageDraw.Draw(barrier)
    for way in data["coast"]:
        d.line(px(way), fill=1, width=2)   # 2 px, so a diagonal step cannot leak the fill
    land_side = ~np.asarray(barrier, bool)
    labels, n = ndimage.label(land_side)
    lon = R.WEST + np.arange(w) / per_deg
    lat = R.NORTH - np.arange(h) / per_deg
    # seeds: a sparse grid of nodes that are deep water in GMRT
    step = max(1, per_deg // 16)
    rr, cc = np.meshgrid(np.arange(0, h, step), np.arange(0, w, step), indexing="ij")
    seed = deep_sea(lon[cc], lat[rr])
    sea_labels = np.unique(labels[rr[seed], cc[seed]])
    sea_labels = sea_labels[sea_labels > 0]
    sea = np.isin(labels, sea_labels)
    sea |= ndimage.binary_dilation(sea, iterations=1) & ~land_side   # the coastline pixels between sea nodes
    log(f"  {per_deg}/deg: {n} regions, {len(sea_labels)} of them sea ({sea.mean():.1%} of the region)")

    inland = Image.new("1", (w, h), 0)
    d = ImageDraw.Draw(inland)
    for ring, holes in sorted(data["areas"], key=lambda a: -len(a[0])):   # big lakes first; islands then cut
        d.polygon(px(ring), fill=1)
        for hole in holes:
            d.polygon(px(hole), fill=0)
    return sea | np.asarray(inland, bool)


def write(out: Path, deep_sea, log=print) -> dict:
    data = load_all(log)
    fine = rasterize(data, FINE, deep_sea, log)
    (out / "terrain" / "water").mkdir(parents=True, exist_ok=True)
    n = R.TILE_DEG * FINE
    tiles = 0
    for r0 in range(0, fine.shape[0] - 1, n):
        for c0 in range(0, fine.shape[1] - 1, n):
            t = fine[r0:r0 + n + 1, c0:c0 + n + 1]
            Image.fromarray((t * 255).astype(np.uint8), "L").save(out / "terrain" / "water" / f"{c0 // n}_{r0 // n}.png", optimize=True)
            tiles += 1
    # the overview mask: the fraction of water around each coarse node (soft edges), from the fine mask
    k = FINE // COARSE
    frac = ndimage.uniform_filter(fine.astype(np.float32), size=k)[::k, ::k]
    Image.fromarray(np.round(frac * 255).astype(np.uint8), "L").save(out / "water.png", optimize=True)
    log(f"  water: {tiles} tile masks at 1/{FINE} deg, overview {frac.shape[1]} x {frac.shape[0]} at 1/{COARSE} deg")
    return {"overview": {"file": "water.png", "per_deg": COARSE, "width": frac.shape[1], "height": frac.shape[0]},
            "tiles": {"dir": "terrain/water", "per_deg": FINE}}
