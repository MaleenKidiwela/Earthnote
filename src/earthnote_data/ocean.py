"""The sea layer: tides, currents and storm surge in the Salish Sea and on the outer coast, hourly through the event.

- Sea level and surface currents: NOAA's Salish Sea and Columbia River Operational Forecast System (SSCOFS, FVCOM on
  an unstructured mesh of ~240k nodes), its hourly nowcast — the model run on observed winds, rivers and tides. Each
  hour's file is 210 MB but uncompressed, so only the sea level and the top layer of currents are read, by HTTP range
  requests (~20 MB), and put on a regular grid (nearest mesh node or element).
- Tide gauges: NOAA CO-OPS water levels (6-minute, observed), the predicted tide, and the stations' flood levels;
  observed minus predicted is the storm surge.

Written under the event's folder, sea/:
    obs/k###.png   RGBA: R, G = surface current east, north (m/s = (byte - 128) / 25); B = sea level
                   (m = byte / 25 - 3); A = 255 on water
    tides.json     per gauge: observed and predicted water level (ft above MLLW) at the end of each hour, flood levels
"""
from __future__ import annotations

import io
import json
import urllib.parse
import urllib.request
from datetime import datetime, timedelta

import numpy as np

from . import weather as W
from .paths import CACHE

OFS = "https://noaa-nos-ofs-pds.s3.amazonaws.com/sscofs/netcdf"
SEA = W.LatLonGrid(-125.6, -122.0, 46.0, 50.6, 0.01)
MASK_DEG = 0.015          # a grid cell further than this from any mesh element is land (or off the mesh)
CYCLES = (3, 9, 15, 21)   # SSCOFS runs; the run at HH has nowcast hours n000-n006 for HH-6 to HH
CREDITS = {
    "sscofs": "Sea level and currents: NOAA NOS Salish Sea and Columbia River Operational Forecast System (SSCOFS) nowcast",
    "coops": "Tide gauges: NOAA CO-OPS observed water levels, tide predictions and flood levels (MLLW)",
}


class RangeFile(io.RawIOBase):
    """A remote file for h5py, read through HTTP range requests in 1 MB blocks (cached)."""
    BLOCK = 1 << 20

    def __init__(self, url: str):
        self.url, self.pos, self.blocks = url, 0, {}
        with urllib.request.urlopen(urllib.request.Request(url, method="HEAD"), timeout=60) as r:
            self.size = int(r.headers["Content-Length"])

    def readable(self): return True
    def seekable(self): return True
    def tell(self): return self.pos

    def seek(self, off, whence=0):
        self.pos = off if whence == 0 else self.pos + off if whence == 1 else self.size + off
        return self.pos

    def _block(self, i):
        if i not in self.blocks:
            a, b = i * self.BLOCK, min(self.size, (i + 1) * self.BLOCK) - 1
            req = urllib.request.Request(self.url, headers={"Range": f"bytes={a}-{b}"})
            for t in range(4):
                try:
                    with urllib.request.urlopen(req, timeout=120) as r:
                        self.blocks[i] = r.read()
                    break
                except (urllib.error.URLError, TimeoutError, ConnectionError):
                    if t == 3:
                        raise
        return self.blocks[i]

    def readinto(self, buf):
        n, done, p = min(len(buf), self.size - self.pos), 0, self.pos
        while done < n:
            i = p // self.BLOCK
            blk = self._block(i)
            o = p - i * self.BLOCK
            take = min(n - done, len(blk) - o)
            buf[done:done + take] = blk[o:o + take]
            done += take; p += take
        self.pos = p
        return n


def nowcast_url(valid: datetime) -> str:
    """The nowcast file valid at `valid` (an hour): from the first run at or after it."""
    day = valid.replace(minute=0, second=0, microsecond=0)
    for d in (0, 1):
        for c in CYCLES:
            run = (day.replace(hour=0) + timedelta(days=d, hours=c))
            if run >= valid and run - valid <= timedelta(hours=6):
                n = 6 - int((run - valid).total_seconds() // 3600)
                return f"{OFS}/{run:%Y/%m/%d}/sscofs.t{run:%H}z.{run:%Y%m%d}.fields.n{n:03d}.nc"
    raise ValueError(valid)


def exists(url: str) -> bool:
    try:
        with urllib.request.urlopen(urllib.request.Request(url, method="HEAD"), timeout=30):
            return True
    except urllib.error.HTTPError:
        return False


def _mapping(f) -> dict:
    """Nearest mesh node (sea level) and element (currents) for each grid cell, and which cells are on the mesh
    (cached; the mesh never changes)."""
    from scipy.spatial import cKDTree
    path = CACHE / "sea" / "sscofs_map.npz"
    nn, ne = f["lon"].shape[0], f["lonc"].shape[0]
    if path.exists():
        m = dict(np.load(path))
        if int(m["nn"]) == nn and int(m["ne"]) == ne:
            return m
    gx, gy = SEA.centres()
    k = np.cos(np.radians(48.0))
    pts = np.c_[gx.ravel() * k, gy.ravel()]
    wrap = lambda a: np.where(a > 180, a - 360, a)
    dn, node = cKDTree(np.c_[wrap(f["lon"][:]) * k, f["lat"][:]]).query(pts)
    de, elem = cKDTree(np.c_[wrap(f["lonc"][:]) * k, f["latc"][:]]).query(pts)
    m = {"node": node.astype(np.int32), "elem": elem.astype(np.int32), "on": (de < MASK_DEG).astype(bool), "nn": nn, "ne": ne}
    path.parent.mkdir(parents=True, exist_ok=True)
    np.savez_compressed(path, **m)
    return m


def forecast_url(run: datetime, valid: datetime) -> str:
    f = int((valid - run).total_seconds() // 3600)
    return f"{OFS}/{run:%Y/%m/%d}/sscofs.t{run:%H}z.{run:%Y%m%d}.fields.f{f:03d}.nc"


def latest_run(now: datetime) -> datetime | None:
    """The newest SSCOFS run whose forecast has started posting."""
    t = now.replace(minute=0, second=0, microsecond=0)
    for _ in range(36):
        if t.hour in CYCLES and exists(forecast_url(t, t + timedelta(hours=1))):
            return t
        t -= timedelta(hours=1)
    return None


def sea_frame(valid: datetime, url: str | None = None) -> np.ndarray | None:
    """Sea level and surface currents at `valid` (the nowcast, or the file at `url`), encoded RGBA on SEA (rows from
    the north)."""
    import h5py
    url = url or nowcast_url(valid)
    if not exists(url):
        return None
    with h5py.File(RangeFile(url), "r") as f:
        m = _mapping(f)
        zeta, u, v = f["zeta"][0], f["u"][0, 0], f["v"][0, 0]
        wet_e, wet_n = f["wet_cells"][0], f["wet_nodes"][0]
    z, uu, vv = zeta[m["node"]], u[m["elem"]], v[m["elem"]]
    ok = m["on"] & (wet_e[m["elem"]] > 0) & (wet_n[m["node"]] > 0) & np.isfinite(z) & np.isfinite(uu) & np.isfinite(vv)
    rows, cols = SEA.shape
    rgba = np.zeros((rows * cols, 4), np.uint8)
    rgba[:, 0] = np.clip(np.round(128 + uu * 25), 0, 255)
    rgba[:, 1] = np.clip(np.round(128 + vv * 25), 0, 255)
    rgba[:, 2] = np.clip(np.round((z + 3) * 25), 0, 254)
    rgba[:, 3] = np.where(ok, 255, 0)
    rgba[~ok, :3] = 0
    return rgba.reshape(rows, cols, 4)


# ---------------------------------------------------------------- tide gauges

COOPS = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter"
MDAPI = "https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations"


def _json(url: str):
    from .rivers import _get
    data = _get(url)
    return json.loads(data) if data else None


def tide_stations(region) -> list[dict]:
    """NOAA water-level stations in the region, with flood levels in feet above MLLW where NOAA has them (cached)."""
    path = CACHE / "sea" / "coops_stations.json"
    if path.exists():
        return json.loads(path.read_text())
    d = _json(f"{MDAPI}.json?type=waterlevels")
    out = []
    for s in d["stations"]:
        if not (region.WEST <= s["lng"] <= region.EAST and region.SOUTH <= s["lat"] <= region.NORTH) or s.get("state") == "CA":
            continue
        fl = _json(f"{MDAPI}/{s['id']}/floodlevels.json") or {}
        dat = _json(f"{MDAPI}/{s['id']}/datums.json?units=english") or {}
        mllw = next((x["value"] for x in dat.get("datums") or [] if x.get("name") == "MLLW"), None)
        flood = {}
        if mllw is not None:   # flood levels are on the station datum, like the datums list
            # one consistent set: the NWS's (used in its warnings) where it is complete, else NOAA's own
            src = "nws" if all(fl.get(f"nws_{c}") is not None for c in ("minor", "moderate")) else "nos"
            for c in ("minor", "moderate", "major"):
                v = fl.get(f"{src}_{c}")
                if v is not None:
                    flood[c] = round(v - mllw, 2)
            flood["source"] = src.upper()
        out.append({"id": s["id"], "name": s["name"], "lat": s["lat"], "lon": s["lng"], "flood": flood})
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(out))
    return out


def _series(station: str, product: str, start: datetime, end: datetime, **extra) -> list:
    q = {"product": product, "station": station, "begin_date": start.strftime("%Y%m%d %H:%M"), "end_date": end.strftime("%Y%m%d %H:%M"),
         "datum": "MLLW", "units": "english", "time_zone": "gmt", "format": "json", "application": "earthnote", **extra}
    d = _json(f"{COOPS}?{urllib.parse.urlencode(q)}") or {}
    rows = d.get("data") or d.get("predictions") or []
    out = []
    for r in rows:
        try:
            out.append((datetime.strptime(r["t"], "%Y-%m-%d %H:%M").replace(tzinfo=W.UTC), float(r["v"])))
        except (ValueError, TypeError):
            pass
    return out


def tides(region, start: datetime, hours: int, now: datetime) -> list[dict]:
    """Each gauge's observed and predicted water level (ft above MLLW) at the end of every hour of the window (the
    prediction for every hour, the observation for hours that have passed)."""
    import concurrent.futures as cf
    from .rivers import _hourly
    end = start + timedelta(hours=hours)

    def one(s):
        obs = _series(s["id"], "water_level", start - timedelta(hours=1), min(now, end))
        pred = _series(s["id"], "predictions", start, end, interval="h")
        if not pred:
            return None
        far = end + timedelta(days=1)   # every hour of the prediction, past and future
        return {**s, "obs": _hourly(obs, start, hours, now, 3600) if obs else [None] * hours,
                "pred": _hourly(pred, start, hours, far, 3600)}
    with cf.ThreadPoolExecutor(8) as io_:
        return [r for r in io_.map(one, tide_stations(region)) if r]
