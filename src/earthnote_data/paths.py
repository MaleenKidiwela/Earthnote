from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
RAW = ROOT / "data" / "raw"
GMRT_CACHE = RAW / "gmrt"
OSM_DIR = RAW / "osm"
NE_DIR = RAW / "naturalearth"
CACHE = ROOT / "data" / "cache"
BUNDLE = ROOT / "web" / "public" / "pnw"
