# Earthnote

A 3D map of the Pacific Northwest — Washington, Oregon, southern British Columbia and the offshore margin — built as
the base for monitoring storms across the region (first: the November 2026 atmospheric rivers, Nov 7–15). Shaded-relief
terrain with roads, borders, lakes and place names, in 3D or flat 2D, in the style of the Cascadia and Mount Rainier
atlases.

## Layout

| Path | What |
|---|---|
| `src/earthnote_data/` | Python pipeline: downloads GMRT, OpenStreetMap and Natural Earth, writes the map's data bundle |
| `web/` | The map (Vite + React + three.js) |
| `web/public/pnw/` | The data bundle (built, not committed; about 60 MB) |
| `data/` | Downloads and caches (not committed) |

## Terrain

Three levels, all from GMRT (land and multibeam bathymetry in one grid):

| Level | Spacing | Extent | Drawn |
|---|---|---|---|
| Outer | ~2 km | 36–56° N, 140–105° W | always, behind everything; room for offshore atmospheric fields |
| Overview | ~1 km | 41.5–51° N, 128.8–116.3° W | the region |
| Detail | ~250 m | the region, in 1° tiles | loaded near the camera |

## Build the data

```bash
python3.12 -m venv .venv && .venv/bin/pip install -r requirements.txt

# OpenStreetMap extracts (about 2.6 GB) into data/raw/osm/
mkdir -p data/raw/osm data/raw/naturalearth
for r in us/washington us/oregon us/idaho us/california/norcal canada/british-columbia; do
  curl -L -o "data/raw/osm/$(basename $r)-latest.osm.pbf" "https://download.geofabrik.de/north-america/$r-latest.osm.pbf"; done
# Natural Earth layers into data/raw/naturalearth/
for f in cultural/ne_10m_populated_places cultural/ne_10m_admin_1_states_provinces_lines \
         cultural/ne_10m_admin_0_boundary_lines_land physical/ne_10m_lakes physical/ne_10m_lakes_north_america \
         physical/ne_10m_geography_regions_elevation_points; do
  curl -L -o "data/raw/naturalearth/$(basename $f).zip" "https://naciscdn.org/naturalearth/10m/$f.zip"; done

PYTHONPATH=src .venv/bin/python -m earthnote_data.build_bundle --terrain   # GMRT downloads are cached in data/raw/gmrt
```

`--terrain` re-samples the terrain; without it only the roads, borders, lakes and places are rebuilt (about 15 s).

## Run the map

```bash
cd web && npm install && npm run dev        # http://127.0.0.1:5177
```

On a remote machine with no browser, forward the port from your laptop:

```bash
ssh -N -L 5177:127.0.0.1:5177 <user>@<host>   # then open http://localhost:5177
```

## Tests

```bash
PYTHONPATH=src .venv/bin/python -m pytest -q src/earthnote_data/tests
cd web && npm test
```
