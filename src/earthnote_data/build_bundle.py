"""Build the web map's data bundle in web/public/pnw/.

    PYTHONPATH=src .venv/bin/python -m earthnote_data.build_bundle            # reuse the cached terrain lattice
    PYTHONPATH=src .venv/bin/python -m earthnote_data.build_bundle --terrain  # re-sample GMRT (cached downloads)
"""
from __future__ import annotations

import argparse
import json
import time

import numpy as np

from . import layers, osm, region as R, terrain, water
from .paths import BUNDLE, GMRT_CACHE


def elevation(lattice: np.ndarray):
    """Elevation (m) at lon/lat arrays: the detail lattice inside the region, the outer grid around it."""
    inner = terrain.lattice_sampler(lattice)
    outer = terrain.parse_esri_ascii((GMRT_CACHE / "outer_2000.asc").read_text())

    def elev(lon, lat):
        lon, lat = np.asarray(lon, float), np.asarray(lat, float)
        inside = (lon >= R.WEST) & (lon <= R.EAST) & (lat >= R.SOUTH) & (lat <= R.NORTH)
        out = np.empty(lon.shape, np.float32)
        if inside.any():
            out[inside] = inner(lon[inside], lat[inside])
        if (~inside).any():
            out[~inside] = outer.sample(lon[~inside], lat[~inside])
        return out
    return elev


def main(argv=None) -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--terrain", action="store_true", help="rebuild the terrain grids and tiles")
    args = ap.parse_args(argv)
    t0 = time.time()
    BUNDLE.mkdir(parents=True, exist_ok=True)
    manifest_path = BUNDLE / "manifest.json"
    old = json.loads(manifest_path.read_text()) if manifest_path.exists() else {}

    if args.terrain or "terrain" not in old or not terrain.LATTICE.exists():
        print("terrain")
        terrain_sec = terrain.write_terrain(BUNDLE, workers=16)
    else:
        terrain_sec = old["terrain"]
    elev = elevation(np.load(terrain.LATTICE))

    print("OpenStreetMap")
    o = osm.load_all()
    print("layers")
    manifest = {
        "version": 1,
        "built": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "projection": layers.projection(),
        "region": {"west": R.WEST, "east": R.EAST, "south": R.SOUTH, "north": R.NORTH},
        "terrain": terrain_sec,
        "roads": layers.roads(o, elev, BUNDLE),
        "borders": layers.borders(elev, BUNDLE),
        "water": water.write(BUNDLE, lambda lon, lat: elev(lon, lat) < -200),
        "places": layers.places(o, elev, BUNDLE),
        "credits": {"terrain": terrain.CREDIT, **layers.CREDITS},
    }
    manifest_path.write_text(json.dumps(manifest, indent=1))
    print(f"wrote {manifest_path} in {time.time() - t0:.0f} s")


if __name__ == "__main__":
    main()
