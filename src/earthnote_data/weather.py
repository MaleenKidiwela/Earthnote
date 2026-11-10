"""Weather sources for the storm layer: observed rain (NOAA MRMS), and forecast rain, 10 m wind and 2 m temperature
from HRRR and ECMWF IFS open data (all on AWS, read by HTTP byte ranges), resampled onto the event's lat/lon grids.

Every reader returns plain numpy arrays on a target grid (row 0 at the north edge, cell-centred), so the event
builder does not care where a field came from.
"""
from __future__ import annotations

import gzip
import json
import math
import random
import time
import urllib.error
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path

import eccodes
import numpy as np

from .paths import CACHE

MRMS = "https://noaa-mrms-pds.s3.amazonaws.com/CONUS"
HRRR = "https://noaa-hrrr-bdp-pds.s3.amazonaws.com"
# ECMWF's Google Cloud mirror; the AWS bucket (ecmwf-forecasts.s3.eu-central-1) answers bursts with SlowDown
ECMWF = "https://storage.googleapis.com/ecmwf-open-data"
CREDITS = {
    "mrms": "NOAA MRMS Multi-Sensor QPE (1 h, gauge-corrected Pass 2; Pass 1 while Pass 2 is pending)",
    "hrrr": "NOAA HRRR (3 km); its analysis hour stands in for observed wind, gusts and temperature",
    "ecmwf": "ECMWF IFS open data (0.25°), CC BY 4.0",
}


@dataclass(frozen=True)
class LatLonGrid:
    west: float
    east: float
    south: float
    north: float
    cell: float

    @property
    def shape(self) -> tuple[int, int]:   # rows, cols
        return round((self.north - self.south) / self.cell), round((self.east - self.west) / self.cell)

    def centres(self):
        rows, cols = self.shape
        lon = self.west + (np.arange(cols) + 0.5) * self.cell
        lat = self.north - (np.arange(rows) + 0.5) * self.cell
        return np.meshgrid(lon, lat)

    def meta(self) -> dict:
        rows, cols = self.shape
        return {"west": self.west, "east": self.east, "south": self.south, "north": self.north, "cell": self.cell,
                "cols": cols, "rows": rows}


def _get(url: str, rng: tuple[int, int] | None = None, timeout=300, tries=6) -> bytes | None:
    """GET (a byte range of) a URL; None when it does not exist. S3 throttles bursts with 503 SlowDown, so server
    errors and dropped connections are retried with exponential backoff."""
    req = urllib.request.Request(url, headers={"Range": f"bytes={rng[0]}-{rng[1]}"} if rng else {})
    for attempt in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (403, 404):
                return None
            if e.code < 500 or attempt == tries - 1:
                raise
        except (urllib.error.URLError, TimeoutError, ConnectionError):
            if attempt == tries - 1:
                raise
        time.sleep(min(60, 2 ** attempt + random.random()))


def _decode(msg: bytes):
    """(handle, values as rows x cols); the caller releases the handle. Lat/lon grids say Nj/Ni, Lambert ones Ny/Nx."""
    h = eccodes.codes_new_from_message(msg)
    try:
        lambert = not eccodes.codes_is_defined(h, "Nj")
        nj = eccodes.codes_get(h, "Ny" if lambert else "Nj")
        ni = eccodes.codes_get(h, "Nx" if lambert else "Ni")
        return h, eccodes.codes_get_values(h).reshape(nj, ni)
    except Exception:
        eccodes.codes_release(h)
        raise


# ---------------------------------------------------------------- MRMS: observed hourly rain (0.01 deg, mm)

def mrms_url(valid: datetime, product: str) -> str:
    return f"{MRMS}/{product}_00.00/{valid:%Y%m%d}/MRMS_{product}_00.00_{valid:%Y%m%d-%H%M%S}.grib2.gz"


def mrms_hour(valid: datetime) -> tuple[np.ndarray, str] | None:
    """The hour of rain ending at `valid`: (values on MRMS's grid, mm, NaN = no coverage; pass name), or None."""
    for product, name in (("MultiSensor_QPE_01H_Pass2", "pass2"), ("MultiSensor_QPE_01H_Pass1", "pass1")):
        raw = _get(mrms_url(valid, product))
        if raw:
            h, v = _decode(gzip.decompress(raw))
            eccodes.codes_release(h)
            v = v.astype(np.float32)
            v[v < 0] = np.nan
            return v, name
    return None


MRMS_NORTH, MRMS_WEST, MRMS_CELL = 54.995, -129.995, 0.01   # first grid point (cell centre), row 0 at the north


def mrms_to_grid(v: np.ndarray, g: LatLonGrid) -> np.ndarray:
    """Area mean of MRMS cells whose centres fall in each target cell (NaN where none have data)."""
    nj, ni = v.shape
    lat = MRMS_NORTH - np.arange(nj) * MRMS_CELL
    lon = MRMS_WEST + np.arange(ni) * MRMS_CELL
    rows, cols = g.shape
    ri = np.floor((g.north - lat) / g.cell).astype(int)
    ci = np.floor((lon - g.west) / g.cell).astype(int)
    rk, ck = (ri >= 0) & (ri < rows), (ci >= 0) & (ci < cols)
    sub = v[np.ix_(rk, ck)]
    R, C = np.meshgrid(ri[rk], ci[ck], indexing="ij")
    ok = ~np.isnan(sub)
    total = np.zeros(rows * cols); count = np.zeros(rows * cols)
    np.add.at(total, (R * cols + C)[ok], sub[ok])
    np.add.at(count, (R * cols + C)[ok], 1)
    out = np.full(rows * cols, np.nan, np.float32)
    has = count > 0
    out[has] = total[has] / count[has]
    return out.reshape(rows, cols)


# ---------------------------------------------------------------- HRRR: 3 km Lambert conformal, hourly

def _idx(url: str) -> list[tuple[int, str]]:
    raw = _get(url + ".idx")
    if not raw:
        return []
    out = []
    for line in raw.decode().strip().splitlines():
        parts = line.split(":")
        out.append((int(parts[1]), ":".join(parts[3:])))
    return out


def _ranges(idx, matchers):
    """Byte ranges for the idx records whose description contains each matcher (in order)."""
    out = []
    for m in matchers:
        for i, (start, desc) in enumerate(idx):
            if m in desc:
                end = idx[i + 1][0] - 1 if i + 1 < len(idx) else None
                out.append((start, end)); break
        else:
            return None
    return out


def hrrr_url(init: datetime, fhour: int) -> str:
    return f"{HRRR}/hrrr.{init:%Y%m%d}/conus/hrrr.t{init:%H}z.wrfsfcf{fhour:02d}.grib2"


class HrrrMap:
    """Nearest HRRR grid point for each cell of a target grid (cached), and the wind rotation to true north."""
    def __init__(self, g: LatLonGrid, sample_msg: bytes):
        key = CACHE / f"hrrr_map_{g.west}_{g.south}_{g.cell}.npz"
        lon, lat = g.centres()
        if key.exists():
            d = np.load(key); self.index, self.inside = d["index"], d["inside"]
        else:
            from scipy.spatial import cKDTree
            h = eccodes.codes_new_from_message(sample_msg)
            hl = eccodes.codes_get_array(h, "latitudes"); ho = eccodes.codes_get_array(h, "longitudes")
            eccodes.codes_release(h)
            xyz = lambda la, lo: np.column_stack([np.cos(np.radians(la)) * np.cos(np.radians(lo)),
                                                   np.cos(np.radians(la)) * np.sin(np.radians(lo)), np.sin(np.radians(la))])
            dist, index = cKDTree(xyz(hl, ho)).query(xyz(lat.ravel(), lon.ravel()))
            self.index = index.astype(np.int32)
            self.inside = (dist * 6371 < 3.0).reshape(lat.shape)   # beyond 3 km of any HRRR point: outside its domain
            key.parent.mkdir(parents=True, exist_ok=True)
            np.savez_compressed(key, index=self.index, inside=self.inside)
        a = math.sin(math.radians(38.5)) * np.radians(lon - (-97.5))   # grid-relative → earth-relative winds
        self.cos, self.sin = np.cos(a), np.sin(a)

    def apply(self, values: np.ndarray) -> np.ndarray:
        out = values.ravel()[self.index].reshape(self.inside.shape).astype(np.float32)
        out[~self.inside] = np.nan
        return out

    def wind(self, u, v):
        U, V = self.apply(u), self.apply(v)
        return self.cos * U + self.sin * V, -self.sin * U + self.cos * V


def hrrr_fields(init: datetime, fhour: int, rain: bool = True) -> dict | None:
    """Raw HRRR messages for one forecast hour: {'rain'?: 1 h APCP, 'u', 'v', 't'} as GRIB bytes; None if missing."""
    url = hrrr_url(init, fhour)
    idx = _idx(url)
    if not idx:
        return None
    want = {"u": "UGRD:10 m above ground", "v": "VGRD:10 m above ground", "t": "TMP:2 m above ground"}
    if rain and fhour > 0:
        want["rain"] = f"APCP:surface:{fhour - 1}-{fhour} hour acc"
    rngs = _ranges(idx, list(want.values()))
    if rngs is None:
        return None
    out = {}
    for k, (a, b) in zip(want, rngs):
        msg = _get(url, (a, b if b is not None else a + 50_000_000))
        if msg is None:
            return None
        out[k] = msg
    return out


def hrrr_message(init: datetime, fhour: int, field: str) -> bytes | None:
    """One raw HRRR message (an idx description such as 'GUST:surface'); None if missing."""
    url = hrrr_url(init, fhour)
    idx = _idx(url)
    rngs = _ranges(idx, [field]) if idx else None
    if not rngs:
        return None
    a, b = rngs[0]
    return _get(url, (a, b if b is not None else a + 50_000_000))


# ---------------------------------------------------------------- ECMWF IFS open data: 0.25 deg global

def ecmwf_url(init: datetime, step: int) -> str:
    return f"{ECMWF}/{init:%Y%m%d}/{init:%H}z/ifs/0p25/oper/{init:%Y%m%d%H}0000-{step}h-oper-fc"


def ecmwf_steps(init: datetime) -> list[int]:
    raw = _get(f"{ECMWF}?prefix={init:%Y%m%d}/{init:%H}z/ifs/0p25/oper/")
    if not raw:
        return []
    import re
    return sorted({int(s) for s in re.findall(r"-(\d+)h-oper-fc\.grib2<", raw.decode())})


def ecmwf_fields(init: datetime, step: int, names: dict | None = None) -> dict | None:
    """{'tp' (m, accumulated from init), 'u', 'v', 't' (K)} as 2-D global arrays, plus the grid's first lat/lon (or
    the params in `names`, {param: key})."""
    url = ecmwf_url(init, step)
    raw = _get(url + ".index")
    if not raw:
        return None
    recs = {}
    for line in raw.decode().strip().splitlines():
        r = json.loads(line)
        recs[r["param"]] = (r["_offset"], r["_offset"] + r["_length"] - 1)
    names = names or {"tp": "tp", "10u": "u", "10v": "v", "2t": "t"}
    if not all(p in recs for p in names):
        return None
    out = {}
    for p, k in names.items():
        msg = _get(url + ".grib2", recs[p])
        if msg is None:
            return None
        h, v = _decode(msg)
        if "lat0" not in out:
            out["lat0"] = eccodes.codes_get(h, "latitudeOfFirstGridPointInDegrees")
            out["lon0"] = eccodes.codes_get(h, "longitudeOfFirstGridPointInDegrees")
            out["dlat"] = eccodes.codes_get(h, "jDirectionIncrementInDegrees")
            out["dlon"] = eccodes.codes_get(h, "iDirectionIncrementInDegrees")
        eccodes.codes_release(h)
        out[k] = v.astype(np.float32)
    return out


def latlon_sample(field: np.ndarray, lat0: float, lon0: float, dlat: float, dlon: float, g: LatLonGrid) -> np.ndarray:
    """Bilinear sample of a global regular grid (row 0 at lat0, the north) at a target grid's cell centres."""
    lon, lat = g.centres()
    nj, ni = field.shape
    fc = ((lon - lon0) % 360) / dlon
    fr = (lat0 - lat) / dlat
    c0 = np.floor(fc).astype(int); r0 = np.clip(np.floor(fr).astype(int), 0, nj - 2)
    tc, tr = fc - c0, fr - r0
    c1 = (c0 + 1) % ni; c0 %= ni
    top = field[r0, c0] * (1 - tc) + field[r0, c1] * tc
    bot = field[r0 + 1, c0] * (1 - tc) + field[r0 + 1, c1] * tc
    return (top * (1 - tr) + bot * tr).astype(np.float32)


# ---------------------------------------------------------------- encodings for the web frames

def encode_rain(mm: np.ndarray) -> np.ndarray:
    """mm → uint8: q = round(25 * sqrt(mm)) (0.1 mm → 8, 1 mm → 25, 10 mm → 79, 100 mm → 250); 255 = no data."""
    q = np.round(25 * np.sqrt(np.clip(np.nan_to_num(mm, nan=0), 0, None)))
    q = np.clip(q, 0, 254).astype(np.uint8)
    q[np.isnan(mm)] = 255
    return q


def encode_met(u: np.ndarray, v: np.ndarray, t_k: np.ndarray) -> np.ndarray:
    """RGBA: R, G = u, v (m/s, 0.25 m/s steps around 128), B = 2 m temperature (°C, 0.25° steps from -30), A = 255
    where there is data."""
    ok = ~(np.isnan(u) | np.isnan(v) | np.isnan(t_k))
    rgba = np.zeros(u.shape + (4,), np.uint8)
    rgba[..., 0] = np.clip(np.round(np.nan_to_num(u) * 4 + 128), 0, 255)
    rgba[..., 1] = np.clip(np.round(np.nan_to_num(v) * 4 + 128), 0, 255)
    rgba[..., 2] = np.clip(np.round((np.nan_to_num(t_k) - 273.15 + 30) * 4), 0, 255)
    rgba[..., 3] = np.where(ok, 255, 0)
    return rgba


def encode_gust(ms: np.ndarray, keep: np.ndarray | None = None) -> np.ndarray:
    """Wind gust (m/s) → uint8 in 1 m/s steps; 255 = no data, or off land where `keep` is False."""
    q = np.clip(np.round(np.nan_to_num(ms, nan=0)), 0, 254).astype(np.uint8)
    q[np.isnan(ms)] = 255
    if keep is not None:
        q[~keep] = 255
    return q


def hours(start: datetime, n: int) -> list[datetime]:
    return [start + timedelta(hours=k + 1) for k in range(n)]   # frame k = the hour ending at start + (k + 1) h


UTC = timezone.utc
