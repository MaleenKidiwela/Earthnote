"""Map layers drawn over the terrain: roads, borders, place names and the lake mask.

Lines are written as Float32 segment pairs in scene coordinates (x, z in km on the local projection; y in metres of
elevation, which the web app scales by the vertical exaggeration), ready for three.js LineSegmentsGeometry.
"""
from __future__ import annotations

import io
import json
import math
import zipfile
from pathlib import Path

import numpy as np
import shapefile
from PIL import Image, ImageDraw

from . import region as R
from .paths import NE_DIR

KX = 111.32 * math.cos(math.radians(R.LAT0))
KZ = 111.13
SIMPLIFY_KM = 0.04   # Douglas-Peucker tolerance before draping
DRAPE_KM = 0.3       # lines are re-sampled this often so they follow the terrain between their vertices
CREDITS = {
    "osm": "Roads and places © OpenStreetMap contributors, ODbL",
    "ne": "Borders, lakes and peaks: Natural Earth (public domain)",
}


def to_xz(lon, lat):
    return (np.asarray(lon) - R.LON0) * KX, -(np.asarray(lat) - R.LAT0) * KZ


def projection() -> dict:
    return {"lon0": R.LON0, "lat0": R.LAT0, "kx": KX, "kz": KZ}


def simplify(pts: np.ndarray, tol: float) -> np.ndarray:
    """Douglas-Peucker on an (n, 2) array (km), iterative."""
    if len(pts) < 3:
        return pts
    keep = np.zeros(len(pts), bool); keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        a, b = stack.pop()
        if b <= a + 1:
            continue
        seg = pts[b] - pts[a]; L = math.hypot(*seg)
        rel = pts[a + 1:b] - pts[a]
        d = np.abs(rel[:, 0] * seg[1] - rel[:, 1] * seg[0]) / L if L > 0 else np.hypot(rel[:, 0], rel[:, 1])
        i = int(np.argmax(d))
        if d[i] > tol:
            m = a + 1 + i; keep[m] = True
            stack += [(a, m), (m, b)]
    return pts[keep]


def densify(pts: np.ndarray, step: float) -> np.ndarray:
    out = [pts[:1]]
    for p, q in zip(pts[:-1], pts[1:]):
        n = max(1, math.ceil(math.hypot(*(q - p)) / step))
        t = (np.arange(1, n + 1) / n)[:, None]
        out.append(p + (q - p) * t)
    return np.concatenate(out)


def segments(runs_lonlat, elev) -> np.ndarray:
    """(lon, lat) polylines → Float32 segment pairs [x, y, z, x, y, z], simplified, densified and draped."""
    chunks = []
    for run in runs_lonlat:
        a = np.asarray(run, float)
        x, z = to_xz(a[:, 0], a[:, 1])
        p = densify(simplify(np.column_stack([x, z]), SIMPLIFY_KM), DRAPE_KM)
        lon, lat = p[:, 0] / KX + R.LON0, -p[:, 1] / KZ + R.LAT0
        y = elev(lon, lat)
        v = np.column_stack([p[:, 0], y, p[:, 1]]).astype(np.float32)
        chunks.append(np.concatenate([v[:-1], v[1:]], axis=1))
    return np.concatenate(chunks).astype("<f4") if chunks else np.zeros((0, 6), "<f4")


def write_lines(out: Path, name: str, segs: np.ndarray) -> dict:
    (out / "lines").mkdir(parents=True, exist_ok=True)
    segs.tofile(out / "lines" / f"{name}.bin")
    return {"file": f"lines/{name}.bin", "segments": int(len(segs))}


def roads(osm: dict, elev, out: Path, log=print) -> dict:
    by = {}
    for r in osm["roads"].values():
        by.setdefault(r["cls"], []).extend(r["runs"])
    sec = {}
    for cls, runs in by.items():
        sec[cls] = write_lines(out, f"road_{cls}", segments(runs, elev))
        log(f"  roads {cls}: {len(runs)} runs, {sec[cls]['segments']} segments")
    return sec


def _ne(name: str) -> shapefile.Reader:
    z = zipfile.ZipFile(NE_DIR / f"{name}.zip")
    files = {Path(n).suffix: io.BytesIO(z.read(n)) for n in z.namelist() if Path(n).suffix in (".shp", ".shx", ".dbf")}
    return shapefile.Reader(shp=files[".shp"], shx=files[".shx"], dbf=files[".dbf"], encoding="utf-8")


def _in_outer(lon, lat) -> bool:
    o = R.OUTER
    return o["west"] <= lon <= o["east"] and o["south"] <= lat <= o["north"]


def _parts(shape):
    idx = list(shape.parts) + [len(shape.points)]
    return [shape.points[a:b] for a, b in zip(idx[:-1], idx[1:])]


def _clip_runs(points):
    runs, run = [], []
    for lon, lat in points:
        if _in_outer(lon, lat):
            run.append((lon, lat))
        elif run:
            runs.append(run); run = []
    if run:
        runs.append(run)
    return [r for r in runs if len(r) > 1]


def borders(elev, out: Path, log=print) -> dict:
    country, state = [], []
    for sr in _ne("ne_10m_admin_0_boundary_lines_land").iterShapeRecords():
        if {sr.record["ADM0_LEFT"], sr.record["ADM0_RIGHT"]} == {"United States of America", "Canada"}:
            # the land border is drawn heavy; its water reaches (Juan de Fuca, Haro Strait) as fine as a state line
            dest = state if sr.record["TYPE"].startswith("Water") else country
            for part in _parts(sr.shape):
                dest += _clip_runs(part)
    for sr in _ne("ne_10m_admin_1_states_provinces_lines").iterShapeRecords():
        if sr.record["ADM0_NAME"] in ("United States of America", "Canada"):
            for part in _parts(sr.shape):
                state += _clip_runs(part)
    sec = {"country": write_lines(out, "border_country", segments(country, elev)),
           "state": write_lines(out, "border_state", segments(state, elev))}
    log(f"  borders: {sec['country']['segments']} country, {sec['state']['segments']} state/province segments")
    return sec


def lakes(out: Path, scale: int = 2, log=print) -> dict:
    """An 8-bit mask (255 = lake) on the region box at `scale` times the overview resolution."""
    cell = R.OVERVIEW_STEP / R.PER_DEG / scale
    west, north = R.WEST - cell / 2, R.NORTH + cell / 2
    w = round((R.EAST - R.WEST) / cell) + 1
    h = round((R.NORTH - R.SOUTH) / cell) + 1
    img = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(img)
    px = lambda pts: [((lon - west) / cell, (north - lat) / cell) for lon, lat in pts]
    n = 0
    for name in ("ne_10m_lakes", "ne_10m_lakes_north_america"):
        for shape in _ne(name).iterShapes():
            b = shape.bbox
            if b[2] < R.WEST or b[0] > R.EAST or b[3] < R.SOUTH or b[1] > R.NORTH:
                continue
            parts = _parts(shape)
            draw.polygon(px(parts[0]), fill=255)
            for hole in parts[1:]:   # islands
                draw.polygon(px(hole), fill=0)
            n += 1
    img.save(out / "lakes.png", optimize=True)
    log(f"  lakes: {n} polygons on a {w} x {h} mask")
    return {"file": "lakes.png", "width": w, "height": h, "west": west, "north": north,
            "east": west + w * cell, "south": north - h * cell}


def places(osm: dict, elev, out: Path, log=print) -> dict:
    items = []
    default_pop = {"city": 40000, "town": 4000}
    for p in osm["places"].values():
        if R.WEST <= p["lon"] <= R.EAST and R.SOUTH <= p["lat"] <= R.NORTH:
            items.append({"name": p["name"], "kind": p["kind"], "lon": p["lon"], "lat": p["lat"],
                          "pop": p["pop"] or default_pop[p["kind"]]})
    for sr in _ne("ne_10m_geography_regions_elevation_points").iterShapeRecords():
        lon, lat = sr.shape.points[0]
        if R.WEST <= lon <= R.EAST and R.SOUTH <= lat <= R.NORTH and sr.record["featurecla"] in ("mountain", "peak", "volcano"):
            items.append({"name": sr.record["name"], "kind": "peak", "lon": round(lon, 5), "lat": round(lat, 5),
                          "pop": 0, "height": int(sr.record["elevation"] or 0)})
    if items:
        y = elev(np.array([i["lon"] for i in items]), np.array([i["lat"] for i in items]))
        for i, e in zip(items, y):
            i["elev"] = int(round(float(e)))
    items.sort(key=lambda i: (-(i["pop"] or 0), i["name"]))
    (out / "places.json").write_text(json.dumps(items, ensure_ascii=False, separators=(",", ":")))
    kinds = {k: sum(1 for i in items if i["kind"] == k) for k in ("city", "town", "peak")}
    log(f"  places: {kinds}")
    return {"file": "places.json", "count": len(items), **kinds}
