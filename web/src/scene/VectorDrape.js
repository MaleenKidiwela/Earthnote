import * as THREE from "three";
import { VectorTile } from "@mapbox/vector-tile";
import Pbf from "pbf";

// Street-level detail as you zoom in: OpenStreetMap vector tiles (OpenFreeMap, OpenMapTiles schema) drawn onto a
// canvas — water, parks and land use, buildings, every road, rail — and painted by the terrain shader itself, under
// its hillshade, so the streets lie exactly on the ground and keep the relief. Each drawn tile is a layer of one
// texture array; an index texture with one texel per zoom-14 tile says which layer (and zoom) covers it. A quadtree
// picks each tile's zoom from its distance to the camera (zoom 11 from about 80 km in, zoom 14 under about 10 km);
// a parent stays until its four children are drawn, so nothing flickers.

export const TILE_URL = "https://tiles.openfreemap.org/planet/{v}/{z}/{x}/{y}.pbf";
const TILEJSON = "https://tiles.openfreemap.org/planet";
const MIN_Z = 11, MAX_Z = 14, ROOT_Z = 8;
const SPLIT = 0.35;              // split while a tile is wider than this fraction of its distance to the camera
const PX = 512;                  // canvas (and texture layer) size
const MAX_SHOWN = 80, LAYERS = 112, CACHE = 240, INFLIGHT = 8;
const DRAW_MS = 12;              // canvas drawing budget per frame
export const INDEX_Z = MAX_Z;    // the index texture's zoom: one texel per zoom-14 tile

// Pure: web-mercator tile bounds in degrees.
export function tileBounds(z, x, y) {
  const n = 2 ** z, lon = v => (v / n) * 360 - 180;
  const lat = v => (Math.atan(Math.sinh(Math.PI * (1 - (2 * v) / n))) * 180) / Math.PI;
  return { west: lon(x), east: lon(x + 1), north: lat(y), south: lat(y + 1) };
}
export function tileOf(z, lon, lat) {
  const n = 2 ** z, r = (lat * Math.PI) / 180;
  return [Math.floor(((lon + 180) / 360) * n), Math.floor(((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * n)];
}

// Pure: the leaf tiles to draw for a camera, given which tiles are ready. Returns {show, want} as "z/x/y" keys.
export function selectDrape(region, cam, P, ready, { split = SPLIT, minZ = MIN_Z, maxZ = MAX_Z, reach = Infinity } = {}) {
  const show = [], want = [];
  const dist = (z, x, y) => {
    const b = tileBounds(z, x, y), x0 = P.toX(b.west), x1 = P.toX(b.east), z0 = P.toZ(b.north), z1 = P.toZ(b.south);
    const dx = Math.max(x0 - cam[0], 0, cam[0] - x1), dz = Math.max(z0 - cam[2], 0, cam[2] - z1);
    return { d: Math.hypot(dx, dz, Math.max(0, cam[1])), size: x1 - x0 };
  };
  // A tile that is fine enough is a leaf: drawn if ready, else wanted. One that is too coarse descends — straight
  // away below minZ (too far out to draw at all), otherwise once its four children are ready, showing itself (if
  // ready) until then.
  const visit = (z, x, y) => {
    const key = `${z}/${x}/${y}`, { d, size } = dist(z, x, y);
    if (d > reach) return;   // beyond the street layer's reach the regional roads stand in
    if (!(z < maxZ && size > split * Math.max(d, 0.5))) {
      if (z >= minZ) { if (ready(key)) show.push([key, d]); else want.push([key, d]); }
      return;
    }
    const kids = [[2 * x, 2 * y], [2 * x + 1, 2 * y], [2 * x, 2 * y + 1], [2 * x + 1, 2 * y + 1]];
    const kidKeys = kids.map(([cx, cy]) => `${z + 1}/${cx}/${cy}`);
    // descend when the children can replace this tile, or when this tile has nothing to show meanwhile (siblings
    // do not overlap, so ready children show and the rest leave the bare terrain until they load)
    if (z < minZ || kidKeys.every(ready) || !ready(key)) { for (const [cx, cy] of kids) visit(z + 1, cx, cy); return; }
    want.push(...kidKeys.map(k => [k, d]));   // ready children stay wanted too, so the cache keeps them
    show.push([key, d]);
  };
  const [x0, y0] = tileOf(ROOT_Z, region.west, region.north), [x1, y1] = tileOf(ROOT_Z, region.east, region.south);
  for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) visit(ROOT_Z, x, y);
  show.sort((a, b) => a[1] - b[1]); want.sort((a, b) => a[1] - b[1]);   // nearest first: drawn and loaded
  return { show: show.slice(0, MAX_SHOWN).map(s => s[0]), want: want.map(w => w[0]) };
}

// Canvas style, by zoom. Widths in canvas pixels for a 512 px tile.
const ROADS = [
  // [classes, colour, width at z11, z12, z13, z14, casing]
  [["motorway"], "#f2d58a", [2.2, 3, 4.2, 6], "#2a2620"],
  [["trunk"], "#efdfae", [1.8, 2.6, 3.6, 5.2], "#2a2620"],
  [["primary"], "#f1ece0", [1.4, 2.1, 3, 4.6], "#3a362f"],
  [["secondary"], "#ece7da", [0.9, 1.5, 2.4, 3.8], "#3a362f"],
  [["tertiary"], "#e6e1d4", [0.6, 1.1, 1.9, 3.2], null],
  [["minor"], "#ddd8cb", [0, 0.6, 1.2, 2.2], null],
  [["service", "track"], "#cfcabc", [0, 0, 0.6, 1.2], null],
  [["path"], "#c9c3b4", [0, 0, 0, 0.7], null],
];
const WATER = "#6f99ad", WATERWAY = "#6f99ad";

function drawTile(tile, z, ctx) {
  const L = tile.layers, s = PX / 4096, zi = Math.min(3, Math.max(0, z - 11));
  const each = (layer, fn) => { const l = L[layer]; if (l) for (let i = 0; i < l.length; i++) fn(l.feature(i)); };
  const path = f => {
    const p = new Path2D();
    for (const ring of f.loadGeometry()) { ring.forEach((pt, i) => (i ? p.lineTo(pt.x * s, pt.y * s) : p.moveTo(pt.x * s, pt.y * s))); if (f.type === 3) p.closePath(); }
    return p;
  };
  ctx.clearRect(0, 0, PX, PX);
  // land use and cover: faint washes so the relief still shows
  each("landuse", f => {
    const c = { residential: "rgba(222,214,200,0.22)", commercial: "rgba(232,205,190,0.3)", retail: "rgba(232,205,190,0.3)",
      industrial: "rgba(214,206,214,0.3)", cemetery: "rgba(170,200,160,0.3)", hospital: "rgba(240,200,200,0.35)", school: "rgba(236,226,190,0.3)",
      railway: "rgba(210,205,200,0.25)" }[f.properties.class];
    if (c) { ctx.fillStyle = c; ctx.fill(path(f)); }
  });
  each("park", f => { ctx.fillStyle = "rgba(132,176,112,0.32)"; ctx.fill(path(f)); });
  each("landcover", f => {
    const c = { wood: "rgba(92,132,86,0.18)", grass: "rgba(150,186,120,0.18)", wetland: "rgba(120,170,170,0.25)", sand: "rgba(230,214,170,0.3)", ice: "rgba(245,248,250,0.6)" }[f.properties.class];
    if (c) { ctx.fillStyle = c; ctx.fill(path(f)); }
  });
  ctx.fillStyle = WATER; each("water", f => { if (f.properties.class !== "swimming_pool") ctx.fill(path(f)); });
  ctx.strokeStyle = WATERWAY; ctx.lineCap = "round"; ctx.lineJoin = "round";
  each("waterway", f => {
    const w = { river: [1.2, 1.8, 2.6, 3.6], canal: [0.8, 1.2, 1.8, 2.6], stream: [0, 0.5, 0.9, 1.4] }[f.properties.class]?.[zi];
    if (w) { ctx.lineWidth = w; ctx.stroke(path(f)); }
  });
  if (z >= 13) {
    ctx.fillStyle = z >= 14 ? "rgba(214,206,194,0.92)" : "rgba(214,206,194,0.75)";
    ctx.strokeStyle = "rgba(90,82,72,0.6)"; ctx.lineWidth = 0.5;
    each("building", f => { const p = path(f); ctx.fill(p); if (z >= 14) ctx.stroke(p); });
  }
  // roads: casings first, then fills, minor classes under major ones
  const roads = ROADS.map(() => []), rails = [];
  each("transportation", f => {
    if (f.type !== 2) return;
    const i = ROADS.findIndex(([cls]) => cls.includes(f.properties.class));
    if (i >= 0) roads[i].push(f);
    else if (f.properties.class === "rail" && z >= 12) rails.push(f);
  });
  for (let i = ROADS.length - 1; i >= 0; i--) {
    const [, , widths, casing] = ROADS[i], w = widths[zi];
    if (!w || !casing) continue;
    ctx.strokeStyle = casing; ctx.lineWidth = w + 1.6;
    for (const f of roads[i]) ctx.stroke(path(f));
  }
  for (let i = ROADS.length - 1; i >= 0; i--) {
    const [, color, widths] = ROADS[i], w = widths[zi];
    if (!w) continue;
    ctx.strokeStyle = color; ctx.lineWidth = w;
    for (const f of roads[i]) ctx.stroke(path(f));
  }
  ctx.setLineDash([3, 3]); ctx.strokeStyle = "#5a5650"; ctx.lineWidth = z >= 14 ? 1.6 : 1.1;
  for (const f of rails) ctx.stroke(path(f));
  ctx.setLineDash([]);
}


// Pure: the index texture's origin and size for a region: the zoom-14 tile at its north-west corner, aligned down to
// a multiple of 2^(INDEX_Z - MIN_Z) so every coarser tile covers whole texels.
export function indexGrid(region) {
  const a = 2 ** (INDEX_Z - MIN_Z), [xa, ya] = tileOf(INDEX_Z, region.west, region.north), [xb, yb] = tileOf(INDEX_Z, region.east, region.south);
  const x0 = Math.floor(xa / a) * a, y0 = Math.floor(ya / a) * a;
  return { x0, y0, width: xb - x0 + 1, height: yb - y0 + 1 };
}

// Pure: fill the index (RGBA bytes, row 0 north): for each [key, layer], the texels under that tile get
// (layer, zoom-14 minus the tile's zoom, 0, 255); everything else is zero.
export function fillIndex(data, grid, entries) {
  data.fill(0);
  for (const [key, layer] of entries) {
    const [z, x, y] = key.split("/").map(Number), d = INDEX_Z - z, s = 2 ** d;
    const c0 = Math.max(0, x * s - grid.x0), c1 = Math.min(grid.width, (x + 1) * s - grid.x0);
    const r0 = Math.max(0, y * s - grid.y0), r1 = Math.min(grid.height, (y + 1) * s - grid.y0);
    for (let r = r0; r < r1; r++) for (let c = c0; c < c1; c++) {
      const i = (r * grid.width + c) * 4;
      data[i] = layer; data[i + 1] = d; data[i + 3] = 255;
    }
  }
}

export class VectorDrape {
  // U gets the shader's uniforms: streetTex, streetIndex, streetGeo, streetOn (see terrainMaterial.js)
  constructor(renderer, region, U) {
    Object.assign(this, { renderer, region, U });
    this.tiles = new Map(); this.inflight = 0; this.frameNo = 0; this.visible = true; this.failures = 0;
    this.grid = indexGrid(region);
    this.indexData = new Uint8Array(this.grid.width * this.grid.height * 4);
    this.index = new THREE.DataTexture(this.indexData, this.grid.width, this.grid.height);
    this.index.magFilter = this.index.minFilter = THREE.NearestFilter; this.index.needsUpdate = true;
    // the layers are filled straight from the canvas (see _upload), so the array has no data of its own
    this.tex = new THREE.DataArrayTexture(null, PX, PX, LAYERS);
    this.tex.source.dataReady = false;
    this.tex.generateMipmaps = true; this.tex.minFilter = THREE.LinearMipmapLinearFilter; this.tex.magFilter = THREE.LinearFilter;
    this.tex.anisotropy = 8; this.tex.colorSpace = THREE.NoColorSpace; this.tex.needsUpdate = true;
    renderer.initTexture(this.tex);   // allocates the storage (and its mip levels) without uploading anything
    this.free = Array.from({ length: LAYERS }, (_, i) => LAYERS - 1 - i);
    this.canvas = typeof OffscreenCanvas !== "undefined" ? new OffscreenCanvas(PX, PX) : Object.assign(document.createElement("canvas"), { width: PX, height: PX });
    this.ctx = this.canvas.getContext("2d");
    const n = 2 ** INDEX_Z;
    U.streetTex.value = this.tex; U.streetIndex.value = this.index;
    // the index's west edge (degrees), its north edge as mercator ln(tan + sec), and its size in texels
    U.streetGeo.value.set((this.grid.x0 / n) * 360 - 180, Math.PI * (1 - (2 * this.grid.y0) / n), this.grid.width, this.grid.height);
    this._indexKey = "";
    this.version = fetch(TILEJSON).then(r => r.json()).then(j => j.tiles[0].split("/planet/")[1].split("/")[0]).catch(() => null);
  }

  _load(key) {
    const t = { state: "loading", used: this.frameNo, layer: -1 }; this.tiles.set(key, t); this.inflight++;
    const [z, x, y] = key.split("/").map(Number);
    this.version.then(v => {
      if (!v) throw new Error("no tile version");
      return fetch(TILE_URL.replace("{v}", v).replace("{z}", z).replace("{x}", x).replace("{y}", y));
    }).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.arrayBuffer(); })
      .then(buf => { t.buf = new Uint8Array(buf); t.state = "loaded"; })
      .catch(() => { t.state = "failed"; this.failures++; })
      .finally(() => { this.inflight--; });
  }

  // draw a loaded tile into a free layer, or into the least recently used one no longer shown or wanted
  _draw(key, t) {
    let layer = this.free.pop();
    if (layer === undefined) {
      let old = null;
      for (const [k, o] of this.tiles) if (o.layer >= 0 && o.used < this.frameNo && (!old || o.used < old[1].used)) old = [k, o];
      if (!old) return false;
      layer = old[1].layer; old[1].layer = -1;
    }
    const z = Number(key.split("/")[0]);
    drawTile(new VectorTile(new Pbf(t.buf)), z, this.ctx);
    this._upload(layer);
    t.layer = layer;
    return true;
  }

  // copy the canvas into one layer of the array, premultiplied (so filtering does not darken the edges of roads)
  _upload(layer) {
    const gl = this.renderer.getContext(), state = this.renderer.state;
    state.bindTexture(gl.TEXTURE_2D_ARRAY, this.renderer.properties.get(this.tex).__webglTexture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
    gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, 0, 0, 0, layer, PX, PX, 1, gl.RGBA, gl.UNSIGNED_BYTE, this.canvas);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    this._mipsDue = true;
  }

  // orbit: the camera's distance to its target (km); street detail reaches about twice that, 20 to 120 km
  update(camera, orbit, P) {
    this.frameNo++;
    const drawn = k => this.tiles.get(k)?.layer >= 0;
    const { show, want } = this.visible ? selectDrape(this.region, camera.position.toArray(), P, drawn, { reach: Math.min(120, Math.max(20, orbit * 2.2)) }) : { show: [], want: [] };
    for (const k of [...show, ...want]) {
      const t = this.tiles.get(k);
      if (t) t.used = this.frameNo;
      else if (this.inflight < INFLIGHT) this._load(k);
    }
    // draw what has arrived, nearest first, within the frame's budget
    const t0 = performance.now();
    for (const k of want) {
      const t = this.tiles.get(k);
      if (t?.state !== "loaded" || t.layer >= 0) continue;
      if (performance.now() - t0 > DRAW_MS || !this._draw(k, t)) break;
    }
    if (this._mipsDue) {
      const gl = this.renderer.getContext();
      this.renderer.state.bindTexture(gl.TEXTURE_2D_ARRAY, this.renderer.properties.get(this.tex).__webglTexture);
      gl.generateMipmap(gl.TEXTURE_2D_ARRAY);
      this._mipsDue = false;
    }
    const entries = show.map(k => [k, this.tiles.get(k).layer]);
    const key = entries.map(e => e.join(":")).sort().join(",");
    if (key !== this._indexKey) { this._indexKey = key; fillIndex(this.indexData, this.grid, entries); this.index.needsUpdate = true; }
    this.U.streetOn.value = show.length > 0 ? 1 : 0;
    // drop the least recently used beyond the cache size
    if (this.tiles.size > CACHE) {
      const on = new Set(show);
      const old = [...this.tiles].filter(([k, t]) => !on.has(k) && t.state !== "loading").sort((a, b) => a[1].used - b[1].used);
      for (const [k, t] of old.slice(0, this.tiles.size - CACHE)) {
        if (t.layer >= 0) this.free.push(t.layer);
        this.tiles.delete(k);
      }
    }
    this.pending = want.filter(k => !drawn(k)).length;
    return show.length;
  }

  setVisible(on) { this.visible = on; }
  dispose() { this.tex.dispose(); this.index.dispose(); this.tiles.clear(); }
}
