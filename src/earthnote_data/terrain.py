"""GMRT topography and bathymetry: fetch 1-degree chunks, resample them onto the region's detail lattice, and write the
outer grid, the overview and the detail tiles as little-endian Int16 files (metres, row 0 at the north edge).

Grids are described the way the web app reads them (RCA atlas convention): `west`/`south` are the outer edges of the
cells and samples sit at cell centres, `cellsize` apart. The detail lattice is corner-registered on the region edges,
so its tiles share their edge nodes and meet without cracks.
"""
from __future__ import annotations

import concurrent.futures as cf
import json
import math
import urllib.parse
import urllib.request
from dataclasses import dataclass
from pathlib import Path

import numpy as np

from . import region as R
from .paths import CACHE, GMRT_CACHE

GMRT_URL = "https://www.gmrt.org/services/GridServer"
LATTICE = CACHE / "lattice.npy"
CREDIT = "GMRT, Ryan et al. (2009), CC BY 4.0"
MARGIN = 0.02   # degrees fetched beyond each chunk, so resampling never reads past a chunk's edge


@dataclass
class Grid:
    """A GMRT grid: values[row, col], row 0 at the north edge, cell-centred samples."""
    west: float
    south: float
    cellsize: float
    values: np.ndarray

    @property
    def north(self) -> float:
        return self.south + self.values.shape[0] * self.cellsize

    def sample(self, lon: np.ndarray, lat: np.ndarray) -> np.ndarray:
        """Bilinear sample at lon/lat arrays (clamped at the edges)."""
        nrows, ncols = self.values.shape
        fc = np.clip((lon - self.west) / self.cellsize - 0.5, 0, ncols - 1)
        fr = np.clip((self.north - lat) / self.cellsize - 0.5, 0, nrows - 1)
        c0 = np.minimum(np.floor(fc).astype(int), ncols - 2)
        r0 = np.minimum(np.floor(fr).astype(int), nrows - 2)
        tc, tr = fc - c0, fr - r0
        v = self.values
        top = v[r0, c0] * (1 - tc) + v[r0, c0 + 1] * tc
        bot = v[r0 + 1, c0] * (1 - tc) + v[r0 + 1, c0 + 1] * tc
        return top * (1 - tr) + bot * tr


def parse_esri_ascii(text: str) -> Grid:
    lines = text.split("\n", 6)
    head = {k.lower(): float(v) for k, v in (ln.split() for ln in lines[:6])}
    vals = np.array(lines[6].split(), dtype=np.float32)
    nrows, ncols = int(head["nrows"]), int(head["ncols"])
    if vals.size != nrows * ncols:
        raise ValueError(f"GMRT grid has {vals.size} values; expected {nrows} x {ncols}")
    vals = vals.reshape(nrows, ncols)
    vals[vals == head["nodata_value"]] = np.nan
    if np.isnan(vals).any():   # GMRT is global, so gaps are rare; fill them with the grid's mean
        vals[np.isnan(vals)] = np.nanmean(vals)
    return Grid(head["xllcorner"], head["yllcorner"], head["cellsize"], vals)


def fetch(bounds: dict, mres: int, dest: Path, urlopen=urllib.request.urlopen) -> Path:
    """Fetch one GMRT grid once; later runs read the cached file."""
    if dest.exists() and dest.stat().st_size > 0:
        return dest
    q = urllib.parse.urlencode({**{k: f"{bounds[k]:.4f}" for k in ("north", "south", "east", "west")},
                                "layer": "topo", "format": "esriascii", "mresolution": mres})
    dest.parent.mkdir(parents=True, exist_ok=True)
    with urlopen(f"{GMRT_URL}?{q}", timeout=600) as resp:
        data = resp.read()
    if not data.startswith(b"ncols"):
        raise RuntimeError(f"GMRT returned no grid for {bounds}: {data[:200]!r}")
    tmp = dest.with_suffix(".part")
    tmp.write_bytes(data)
    tmp.replace(dest)
    return dest


def chunk_bounds() -> list[tuple[int, int, dict]]:
    """1-degree chunks covering the region, with a small margin; (ix, iy, bounds), iy counted from the north."""
    nx, ny = math.ceil(R.EAST - R.WEST), math.ceil(R.NORTH - R.SOUTH)
    out = []
    for iy in range(ny):
        for ix in range(nx):
            w = R.WEST + ix
            n = R.NORTH - iy
            out.append((ix, iy, {"west": w - MARGIN, "east": min(w + 1, R.EAST) + MARGIN,
                                 "north": n + MARGIN, "south": max(n - 1, R.SOUTH) - MARGIN}))
    return out


def build_lattice(workers: int = 8, log=print) -> np.ndarray:
    """The detail lattice (rows from the north) in metres, resampled from GMRT's ~240 m grid."""
    ncols, nrows = R.lattice_shape()
    lat_nodes = R.NORTH - np.arange(nrows) / R.PER_DEG
    lon_nodes = R.WEST + np.arange(ncols) / R.PER_DEG
    out = np.full((nrows, ncols), np.nan, dtype=np.float32)
    chunks = chunk_bounds()

    def one(item):
        ix, iy, b = item
        path = fetch(b, 250, GMRT_CACHE / f"d250_{ix:02d}_{iy:02d}.asc")
        return ix, iy, b, parse_esri_ascii(path.read_text())

    done = 0
    with cf.ThreadPoolExecutor(workers) as pool:
        for ix, iy, b, g in pool.map(one, chunks):
            c = np.nonzero((lon_nodes >= b["west"] + MARGIN - 1e-9) & (lon_nodes <= b["east"] - MARGIN + 1e-9))[0]
            r = np.nonzero((lat_nodes <= b["north"] - MARGIN + 1e-9) & (lat_nodes >= b["south"] + MARGIN - 1e-9))[0]
            lon, lat = np.meshgrid(lon_nodes[c], lat_nodes[r])
            out[r[0]:r[-1] + 1, c[0]:c[-1] + 1] = g.sample(lon, lat)
            done += 1
            if done % 20 == 0 or done == len(chunks):
                log(f"  terrain chunks {done}/{len(chunks)}")
    if np.isnan(out).any():
        raise RuntimeError(f"{int(np.isnan(out).sum())} lattice nodes have no GMRT value")
    return out


def lattice_sampler(lat: np.ndarray):
    """Bilinear elevation (m) at lon/lat arrays on the detail lattice, clamped at the region's edges."""
    nrows, ncols = lat.shape

    def sample(lon, lat_deg):
        fc = np.clip((np.asarray(lon) - R.WEST) * R.PER_DEG, 0, ncols - 1.000001)
        fr = np.clip((R.NORTH - np.asarray(lat_deg)) * R.PER_DEG, 0, nrows - 1.000001)
        c0, r0 = fc.astype(int), fr.astype(int)
        tc, tr = fc - c0, fr - r0
        top = lat[r0, c0] * (1 - tc) + lat[r0, c0 + 1] * tc
        bot = lat[r0 + 1, c0] * (1 - tc) + lat[r0 + 1, c0 + 1] * tc
        return top * (1 - tr) + bot * tr
    return sample


def to_int16(a: np.ndarray) -> np.ndarray:
    return np.clip(np.round(a), -32000, 32000).astype("<i2")


def grid_meta(west_node: float, north_node: float, step_deg: float, ncols: int, nrows: int, a: np.ndarray) -> dict:
    """Meta for a node grid whose north-west node is (west_node, north_node)."""
    return {"ncols": ncols, "nrows": nrows, "cellsize": step_deg,
            "west": west_node - step_deg / 2, "south": north_node - (nrows - 0.5) * step_deg,
            "min": int(a.min()), "max": int(a.max())}


def write_terrain(out: Path, workers: int = 8, log=print) -> dict:
    """Writes terrain/{outer,overview}.bin and terrain/tiles/*.bin under `out`; returns the manifest section."""
    tdir = out / "terrain"
    (tdir / "tiles").mkdir(parents=True, exist_ok=True)

    log("outer grid (GMRT ~2 km)")
    og = parse_esri_ascii(fetch(R.OUTER, R.OUTER_MRES, GMRT_CACHE / "outer_2000.asc").read_text())
    ov = to_int16(og.values)
    ov.tofile(tdir / "outer.bin")
    outer = {"ncols": ov.shape[1], "nrows": ov.shape[0], "cellsize": og.cellsize, "west": og.west, "south": og.south,
             "min": int(ov.min()), "max": int(ov.max())}

    log("detail lattice (GMRT ~240 m)")
    lat = build_lattice(workers, log)
    LATTICE.parent.mkdir(parents=True, exist_ok=True)
    np.save(LATTICE, lat)   # the other layers drape on it
    step = 1 / R.PER_DEG

    s = R.OVERVIEW_STEP
    o = to_int16(lat[::s, ::s])
    o.tofile(tdir / "overview.bin")
    overview = grid_meta(R.WEST, R.NORTH, step * s, o.shape[1], o.shape[0], o)

    tiles = []
    n = R.TILE_DEG * R.PER_DEG
    nrows, ncols = lat.shape
    for r0 in range(0, nrows - 1, n):
        for c0 in range(0, ncols - 1, n):
            r1, c1 = min(r0 + n, nrows - 1), min(c0 + n, ncols - 1)
            t = to_int16(lat[r0:r1 + 1, c0:c1 + 1])   # one shared row and column with the next tile
            key = f"{c0 // n}_{r0 // n}"
            t.tofile(tdir / "tiles" / f"{key}.bin")
            tiles.append({"key": key, **grid_meta(R.WEST + c0 * step, R.NORTH - r0 * step, step, t.shape[1], t.shape[0], t)})
    log(f"  {len(tiles)} detail tiles, {n} cells each way")
    return {"credit": CREDIT, "outer": outer, "overview": overview,
            "detail": {"cellsize": step, "tile_deg": R.TILE_DEG, "tiles": tiles}}


if __name__ == "__main__":
    import sys
    from .paths import BUNDLE
    sec = write_terrain(BUNDLE, workers=int(sys.argv[1]) if len(sys.argv) > 1 else 8)
    print(json.dumps({k: v for k, v in sec.items() if k != "detail"}, indent=1))
