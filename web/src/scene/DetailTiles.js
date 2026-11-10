import * as THREE from "three";
import { makeGrid, terrainGeometry } from "./grid.js";

const SKIRT_M = 150;
// A tile draws at full resolution (about 250 m) up close and half (about 500 m) farther out: [step, farthest km].
// Beyond FAR the 1 km overview is within a pixel or two of the tiles, and costs a fraction of the triangles.
const LEVELS = [[1, 120], [2, 260]];
const FAR = 260;            // tiles beyond this (camera to tile box, km) are not drawn; the overview covers them
const MAX_ORBIT = 450;      // no tiles at all while the camera orbits this far out
const MAX_SHOWN = 16, CACHE = 40, INFLIGHT = 6;

// Pure: camera-to-box distance in km (box = [x0, x1, z0, z1] at heights [lo, hi]).
export function boxDistance(cam, box, lo = 0, hi = 0) {
  const dx = Math.max(box[0] - cam[0], 0, cam[0] - box[1]), dz = Math.max(box[2] - cam[2], 0, cam[2] - box[3]);
  const dy = Math.max(lo - cam[1], 0, cam[1] - hi);
  return Math.hypot(dx, dy, dz);
}

// Pure: which tiles to draw, nearest first, at which level. tiles: [{key, box, lo, hi}]
export function selectTiles(tiles, cam, orbit, { far = FAR, maxOrbit = MAX_ORBIT, max = MAX_SHOWN } = {}) {
  if (orbit > maxOrbit) return [];
  return tiles.map(t => ({ t, d: boxDistance(cam, t.box, t.lo, t.hi) }))
    .filter(x => x.d < far)
    .sort((a, b) => a.d - b.d)
    .slice(0, max)
    .map(({ t, d }) => ({ key: t.key, level: LEVELS.findIndex(([, f]) => d <= f) }));
}

export class DetailTiles {
  constructor(scene, U, bundle, P, makeMaterial) {
    Object.assign(this, { scene, U, bundle, P });
    const det = bundle.manifest.terrain.detail;
    // each tile gets its own material, carrying its own water mask; shared uniforms stay shared
    this.makeMaterial = extra => {
      const m = makeMaterial(extra);
      m.polygonOffset = true; m.polygonOffsetFactor = -1; m.polygonOffsetUnits = -1;
      return m;
    };
    this.water = bundle.manifest.water.tiles;
    this.tiles = det.tiles.map(m => {
      const [tx, ty] = m.key.split("_").map(Number);
      const lonW = m.west + m.cellsize / 2, latN = m.south + (m.nrows - 0.5) * m.cellsize;
      const box = [P.toX(lonW), P.toX(lonW + (m.ncols - 1) * m.cellsize), P.toZ(latN), P.toZ(latN - (m.nrows - 1) * m.cellsize)];
      return { key: m.key, tx, ty, meta: m, box, lo: m.min, hi: m.max, state: "idle", meshes: [null, null], used: 0 };
    });
    this.byKey = new Map(this.tiles.map(t => [t.key, t]));
    this.nx = Math.max(...this.tiles.map(t => t.tx)) + 1; this.ny = Math.max(...this.tiles.map(t => t.ty)) + 1;
    // coverage mask: one texel per tile, 255 where the tile is drawn, so the overview sinks beneath it
    this.maskData = new Uint8Array(this.nx * this.ny);
    this.mask = new THREE.DataTexture(this.maskData, this.nx, this.ny, THREE.RedFormat);
    this.mask.magFilter = this.mask.minFilter = THREE.NearestFilter; this.mask.needsUpdate = true;
    const r = bundle.manifest.region, td = det.tile_deg;
    this.maskRect = new THREE.Vector4(P.toX(r.west), P.toZ(r.north), P.toX(r.west + this.nx * td), P.toZ(r.north - this.ny * td));
    // a quarter of an overview cell, in mask uv
    const oc = bundle.manifest.terrain.overview.cellsize;
    this.maskEps = new THREE.Vector2((0.25 * oc) / (this.nx * td), (0.25 * oc) / (this.ny * td));
    this.inflight = 0; this.frameNo = 0; this.shown = new Set(); this.failures = 0;
    this.onChange = null;   // called when the drawn set changes (draped lines follow the surface they lie on)
  }

  // heights in metres at lon/lat from a loaded, shown tile; null otherwise
  sample(lon, lat) {
    const r = this.bundle.manifest.region, td = this.bundle.manifest.terrain.detail.tile_deg;
    const t = this.byKey.get(`${Math.floor((lon - r.west) / td)}_${Math.floor((r.north - lat) / td)}`);
    return t && this.shown.has(t.key) ? t.grid.sample(lon, lat) : null;
  }
  isShown(lon, lat) { return this.sample(lon, lat) !== null; }

  // the tile's heights and its water mask (one texel per mask node, corner-registered on the tile's edges)
  _load(t) {
    t.state = "loading"; this.inflight++;
    const heights = fetch(`${this.bundle.base}terrain/tiles/${t.key}.bin`)
      .then(res => { if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.arrayBuffer(); });
    const water = new THREE.TextureLoader().loadAsync(`${this.bundle.base}${this.water.dir}/${t.key}.png`);
    Promise.all([heights, water])
      .then(([buf, tex]) => {
        if (buf.byteLength !== t.meta.ncols * t.meta.nrows * 2) throw new Error("tile size mismatch");
        t.grid = makeGrid(t.meta, buf, this.P);
        tex.flipY = false; tex.colorSpace = THREE.NoColorSpace; tex.anisotropy = 4; tex.needsUpdate = true;
        const r = this.bundle.manifest.region, pd = this.water.per_deg, half = 0.5 / pd;
        const lonW = r.west + t.tx, latN = r.north - t.ty;
        const rect = new THREE.Vector4(this.P.toX(lonW - half), this.P.toZ(latN + half),
          this.P.toX(lonW + (tex.image.width - 1) / pd + half), this.P.toZ(latN - (tex.image.height - 1) / pd - half));
        t.waterTex = tex; t.material = this.makeMaterial({ tileWater: tex, tileWaterRect: rect });
        t.state = "ready";
      })
      .catch(() => { t.state = "failed"; this.failures++; })
      .finally(() => { this.inflight--; });
  }

  _mesh(t, level) {
    if (!t.meshes[level]) {
      const mesh = new THREE.Mesh(terrainGeometry(THREE, t.grid, this.P, LEVELS[level][0], SKIRT_M), t.material);
      mesh.visible = false; mesh.renderOrder = 1;
      this.scene.add(mesh); t.meshes[level] = mesh;
    }
    return t.meshes[level];
  }

  update(camera, orbit) {
    this.frameNo++;
    const e = this.U.exag.value * 0.001 * (1 - this.U.flat.value), cam = camera.position.toArray();
    const want = selectTiles(this.tiles.map(t => ({ ...t, lo: t.lo * e, hi: t.hi * e })), cam, orbit);
    for (const w of want) {
      const t = this.byKey.get(w.key); t.used = this.frameNo;
      if (t.state === "idle" && this.inflight < INFLIGHT) this._load(t);
    }
    // draw the wanted tiles that are ready; build at most one new mesh a frame, so zooming never stalls
    let built = 0;
    const next = new Set();
    for (const w of want) {
      const t = this.byKey.get(w.key);
      if (t.state !== "ready") continue;
      let level = w.level;
      if (!t.meshes[level]) {
        if (built++ > 0) level = t.meshes.findIndex(Boolean);   // keep a level already built, or wait
        if (level < 0) continue;
      }
      const shownMesh = this._mesh(t, level);
      for (const m of t.meshes) if (m) m.visible = m === shownMesh;
      next.add(t.key);
    }
    for (const t of this.tiles) if (!next.has(t.key)) for (const m of t.meshes) if (m) m.visible = false;
    const changed = next.size !== this.shown.size || [...next].some(k => !this.shown.has(k));
    if (changed) {
      this.shown = next;
      this.maskData.fill(0);
      for (const k of next) { const t = this.byKey.get(k); this.maskData[t.ty * this.nx + t.tx] = 255; }
      this.mask.needsUpdate = true;
      this.onChange?.();
    }
    this._evict();
    return next.size;
  }

  // keep at most CACHE loaded tiles: drop the least recently wanted ones that are not drawn
  _evict() {
    const loaded = this.tiles.filter(t => t.state === "ready");
    if (loaded.length <= CACHE) return;
    for (const t of loaded.filter(t => !this.shown.has(t.key)).sort((a, b) => a.used - b.used).slice(0, loaded.length - CACHE)) {
      for (const m of t.meshes) if (m) { this.scene.remove(m); m.geometry.dispose(); }
      t.material?.dispose(); t.waterTex?.dispose();
      t.meshes = [null, null]; t.grid = null; t.material = t.waterTex = null; t.state = "idle";
    }
  }

  dispose() {
    for (const t of this.tiles) {
      for (const m of t.meshes) if (m) { this.scene.remove(m); m.geometry.dispose(); }
      t.material?.dispose(); t.waterTex?.dispose();
    }
    this.mask.dispose();
  }
}
