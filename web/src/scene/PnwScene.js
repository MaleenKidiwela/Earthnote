import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { approach, ease, isMoveKey, motionDuration, moveStep, orbitPose, rotateSpeedFor, viewPose } from "./cameraMath.js";
import { DetailTiles } from "./DetailTiles.js";
import { chunkWindows, terrainGeometry } from "./grid.js";
import { LineLayer } from "./LineLayer.js";
import { VIEW_BY_KEY } from "./places.js";
import { VectorDrape } from "./VectorDrape.js";
import { terrainMaterial } from "./terrainMaterial.js";

const STYLE = { relief: 0, mono: 1, contours: 2 };
const BG = "#121211";
// Grid steps by camera distance: [step, farthest orbit km]; 10% hysteresis so a switch does not flicker. Beyond
// these the full grids' cells are under a pixel at the view centre.
const OVERVIEW_LODS = [[1, 800], [2, Infinity]];
const OUTER_LODS = [[1, 1100], [2, Infinity]];
const CHUNK_NODES = 128;   // chunk size (nodes per side, at full resolution) for culling

export class PnwScene {
  static async create(canvas, bundle) {
    const water = await new THREE.TextureLoader().loadAsync(bundle.waterUrl);
    return new PnwScene(canvas, bundle, water);
  }

  constructor(canvas, bundle, waterTex) {
    this.bundle = bundle; this.P = bundle.P; this.held = new Set(); this.flight = null; this._view = "3d";
    const r = (this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true }));
    r.setPixelRatio(Math.min(devicePixelRatio, 1.5)); r.setSize(innerWidth, innerHeight);
    this.scene = new THREE.Scene(); this.scene.background = new THREE.Color(BG);
    this.camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, 0.5, 12000);

    const P = this.P, reg = bundle.manifest.region, half = 0.5 / bundle.manifest.water.overview.per_deg;
    waterTex.flipY = false; waterTex.colorSpace = THREE.NoColorSpace; waterTex.needsUpdate = true;
    this.U = {
      exag: { value: 1.5 }, flat: { value: 0 }, style: { value: 0 }, haze: { value: 0.45 }, bg: { value: new THREE.Color(BG) }, shadeK: { value: 1 },
      hazeRange: { value: new THREE.Vector2(1000, 4000) },
      proj: { value: new THREE.Vector4(P.lon0, P.lat0, P.kx, P.kz) },
      streetTex: { value: null }, streetIndex: { value: null }, streetGeo: { value: new THREE.Vector4() }, streetOn: { value: 0 },
      // wind gusts on land (GustField.js): the frame's texture, its rect in scene x/z, and the colour steps
      gust: { value: null }, gustRect: { value: new THREE.Vector4() }, gustOn: { value: 0 },
      gustStops: { value: new Array(6).fill(0) }, gustColors: { value: Array.from({ length: 6 }, () => new THREE.Color()) },
      // the overview water mask: one texel per node of a corner-registered lattice on the region's edges
      water: { value: waterTex }, waterOn: { value: 1 },
      waterRect: { value: new THREE.Vector4(P.toX(reg.west - half), P.toZ(reg.north + half), P.toX(reg.east + half), P.toZ(reg.south - half)) },
    };
    this.targets = { flat: 0, style: 0 };

    // Terrain: the outer ocean grid, the region overview over it, and detail tiles over that near the camera.
    this.regionBox = new THREE.Vector4(P.toX(reg.west), P.toX(reg.east), P.toZ(reg.north), P.toZ(reg.south));
    this.detail = new DetailTiles(this.scene, this.U, bundle, P, extra => terrainMaterial(this.U, extra));
    // The outer grid is discarded 1 km inside the region's edge, so it runs just under the overview there (which
    // wins by its polygon offset) and no hairline opens between them; it sinks only 10 km in, beyond its own cells.
    const inset = (b, k) => new THREE.Vector4(b.x + k, b.y - k, b.z + k, b.w - k);
    const ovMat = terrainMaterial(this.U, { mask: this.detail.mask, maskRect: this.detail.maskRect, maskEps: this.detail.maskEps });
    ovMat.polygonOffset = true; ovMat.polygonOffsetFactor = -1; ovMat.polygonOffsetUnits = -2;
    this.levels = [
      this._levels(bundle.outer, terrainMaterial(this.U, { hole: inset(this.regionBox, 1), sinkBox: inset(this.regionBox, 10) }), OUTER_LODS, 0),
      this._levels(bundle.overview, ovMat, OVERVIEW_LODS, 0),
    ];
    this.elevAt = (lon, lat) => this.detail.sample(lon, lat) ?? bundle.overview.sample(lon, lat) ?? bundle.outer.sample(lon, lat) ?? 0;

    // Line layers draped on the terrain; they re-drape when the detail tiles drawn beneath them change.
    this.lines = Object.fromEntries(Object.entries(bundle.lines).map(([name, segs]) => [name, new LineLayer(this.scene, name, segs, P)]));
    this._drape = () => {
      const shown = (lon, lat) => this.detail.isShown(lon, lat), ov = (lon, lat) => bundle.overview.sample(lon, lat);
      for (const l of Object.values(this.lines)) l.drape(shown, ov);
      this.rivers?.drape(this.elevAt);
    };
    this._drape();
    // street-level detail (OpenStreetMap vector tiles) painted onto the terrain as you zoom in
    this.streets = new VectorDrape(this.renderer, reg, this.U);
    this.detail.onChange = () => { this._drapeDue = performance.now() + 120; };   // settle a burst of tile changes first
    this._resolution();

    // Navigation, as in the Cascadia and Rainier atlases: drag moves; Ctrl/Cmd/Shift-drag or right-drag rotates.
    const c = (this.controls = new OrbitControls(this.camera, canvas));
    c.enableDamping = true; c.dampingFactor = 0.08; c.screenSpacePanning = false; c.zoomToCursor = true;
    c.maxPolarAngle = Math.PI * 0.47; c.minDistance = 4; c.maxDistance = 4500;
    c.mouseButtons = { LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.ROTATE };
    c.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_ROTATE };
    c.addEventListener("start", () => { this.flight = null; });
    this._onContext = e => e.preventDefault();
    canvas.addEventListener("contextmenu", this._onContext);
    this._onKeyDown = e => { if (!isMoveKey(e)) return; e.preventDefault(); this.held.add(e.key); this.flight = null; };
    this._onKeyUp = e => (e.key === "Meta" ? this.held.clear() : this.held.delete(e.key));
    this._onBlur = () => this.held.clear();
    this._onResize = () => {
      r.setSize(innerWidth, innerHeight); this.camera.aspect = innerWidth / innerHeight; this.camera.updateProjectionMatrix();
      this._resolution(); this.onResize?.();
    };
    addEventListener("keydown", this._onKeyDown); addEventListener("keyup", this._onKeyUp);
    addEventListener("blur", this._onBlur); addEventListener("resize", this._onResize);
    this._motion = typeof matchMedia === "function" ? matchMedia("(prefers-reduced-motion: reduce)") : null;

    this.jumpTo("home");
    this.clock = new THREE.Clock(); this._v = new THREE.Vector3();
    this.frame = { dist: 0, tiles: 0, flat: 0 };
    window.__earthnote = this;   // handy from the console while building
    this._raf = requestAnimationFrame(this._tick);
  }

  // One material per grid, shared by its distance levels; each level's mesh is built the first time it is needed.
  _levels(grid, material, lods, order) {
    return { grid, material, order, levels: lods.map(([step, far]) => ({ step, far, mesh: null })), current: -1 };
  }
  // A level is a group of chunk meshes, so the parts of a grid out of view are culled.
  _levelMesh(t, level) {
    if (!level.mesh) {
      const { ncols, nrows } = t.grid.meta;
      level.mesh = new THREE.Group();
      for (const win of chunkWindows(ncols, nrows, CHUNK_NODES * level.step, level.step)) {
        const m = new THREE.Mesh(terrainGeometry(THREE, t.grid, this.P, level.step, 0, win), t.material);
        m.renderOrder = t.order; level.mesh.add(m);
      }
      this.scene.add(level.mesh);
    }
    return level.mesh;
  }
  // The overview follows the orbit distance; the outer grid follows the distance to the nearest ground outside the
  // region, so it stays coarse while the camera is over the middle of the region.
  _updateLevels(dist) {
    const c = this.camera.position, b = this.regionBox;
    const toEdge = Math.min(c.x - b.x, b.y - c.x, c.z - b.z, b.w - c.z);
    const dOuter = Math.max(dist, toEdge > 0 ? Math.hypot(toEdge, c.y) : dist);
    for (const t of this.levels) {
      const d = t === this.levels[0] ? dOuter : dist;
      let i = t.current < 0 ? t.levels.findIndex(l => d <= l.far) : t.current;
      while (i < t.levels.length - 1 && d > t.levels[i].far * 1.1) i++;
      while (i > 0 && d < t.levels[i - 1].far * 0.9) i--;
      if (i === t.current) continue;
      const shown = this._levelMesh(t, t.levels[i]);
      for (const l of t.levels) if (l.mesh) l.mesh.visible = l.mesh === shown;
      t.current = i;
    }
  }

  _resolution() { for (const l of Object.values(this.lines ?? {})) l.setResolution(innerWidth, innerHeight); }

  get reducedMotion() { return !!this._motion?.matches; }
  get e() { return this.U.exag.value * 0.001 * (1 - this.U.flat.value); }
  project(x, y, z) { const v = this._v.set(x, y, z).project(this.camera); return [((v.x + 1) / 2) * innerWidth, ((1 - v.y) / 2) * innerHeight, v.z]; }

  _pose(view) { return viewPose(view, this.P, this.elevAt, this.e); }
  jumpTo(key) { const p = this._pose(VIEW_BY_KEY[key]); this.camera.position.set(...p.pos); this.controls.target.set(...p.target); }
  flyTo(key) { const p = this._pose(VIEW_BY_KEY[key]); this._fly(new THREE.Vector3(...p.pos), new THREE.Vector3(...p.target), 1800); }
  flyToPoint(lon, lat, dist = 60) {
    const target = new THREE.Vector3(this.P.toX(lon), this.elevAt(lon, lat) * this.e, this.P.toZ(lat));
    const dir = this.camera.position.clone().sub(this.controls.target).normalize();
    if (this._view === "2d") dir.set(0, 1, 0.001).normalize();
    this._fly(target.clone().add(dir.multiplyScalar(dist)), target, 1500);
  }
  orbit(opts) {
    const t = this.controls.target;
    const p = orbitPose(this.camera.position.toArray(), t.toArray(), opts, 0.001, this.controls.maxPolarAngle);
    this._fly(new THREE.Vector3(...p), t.clone(), 350);
  }
  _fly(pos, target, dur) {
    this.flight = { t0: performance.now(), dur: motionDuration(dur, this.reducedMotion), fromPos: this.camera.position.clone(), fromTarget: this.controls.target.clone(), pos, target };
  }

  setStyle(s) { this.targets.style = STYLE[s]; }
  setExag(v) {
    // keep the orbit target on the ground as the relief grows or shrinks
    const k = v / this.U.exag.value, dy = this.controls.target.y * (k - 1);
    this.U.exag.value = v;
    this.controls.target.y += dy; this.camera.position.y += dy;
  }
  // the rivers layer (it arrives with the event's data, after the scene)
  addRivers(layer) { this.rivers = layer; layer.drape(this.elevAt); }

  setLayer(name, on) { if (name === "streets") this.streets.setVisible(on); else this.lines[name]?.setVisible(on); }
  setView(v) {
    if (v === this._view) return;   // re-clicking the active view must not overwrite the saved tilt
    this._view = v;
    const to2d = v === "2d"; this.targets.flat = to2d ? 1 : 0;
    const sph = new THREE.Spherical().setFromVector3(this.camera.position.clone().sub(this.controls.target));
    if (to2d) this._savedPolar = sph.phi;
    sph.phi = to2d ? 0.001 : (this._savedPolar ?? 0.7);
    this.controls.minPolarAngle = 0; this.controls.maxPolarAngle = to2d ? 0.001 : Math.PI * 0.47;
    const t = this.controls.target.clone();
    const lon = this.P.fromX(t.x), lat = this.P.fromZ(t.z);
    t.y = to2d ? 0 : this.elevAt(lon, lat) * this.U.exag.value * 0.001;
    this._fly(t.clone().add(new THREE.Vector3().setFromSpherical(sph)), t, 900);
    this.onView?.(v);
  }

  _tick = () => {
    const now = performance.now(), dt = Math.min(this.clock.getDelta(), 0.05), f = this.flight;
    if (f) {
      const t = f.dur > 0 ? Math.min(1, (now - f.t0) / f.dur) : 1, k = ease(t);
      this.camera.position.lerpVectors(f.fromPos, f.pos, k); this.controls.target.lerpVectors(f.fromTarget, f.target, k);
      if (!f.target.equals(f.fromTarget)) this.camera.position.y += Math.sin(Math.PI * k) * f.fromPos.distanceTo(f.pos) * 0.12;
      if (t >= 1) this.flight = null;
    }
    if (this.held.size) {
      const d = moveStep(this.held, this.camera.position.toArray(), this.controls.target.toArray(), dt);
      this.camera.position.x += d[0]; this.camera.position.z += d[2];
      this.controls.target.x += d[0]; this.controls.target.z += d[2];
    }
    const reduced = this.reducedMotion;
    this.controls.enableDamping = !reduced;
    const dist = this.camera.position.distanceTo(this.controls.target);
    this.controls.rotateSpeed = rotateSpeedFor(dist);
    this.controls.update();
    for (const [key, speed] of [["flat", 5], ["style", 8]]) this.U[key].value = approach(this.U[key].value, this.targets[key], dt, speed, reduced);
    // the near plane follows the zoom, so close-ups and the whole region both keep depth precision
    this.camera.near = THREE.MathUtils.clamp(dist * 0.01, 0.05, 20); this.camera.updateProjectionMatrix();
    this.camera.updateMatrixWorld();
    this._updateLevels(dist);
    const tiles = this.detail.update(this.camera, dist);
    if (this._drapeDue && now > this._drapeDue) { this._drapeDue = 0; this._drape(); }
    const streets = this.streets.update(this.camera, dist, this.P);
    const e = this.e, flat = this.U.flat.value;
    for (const l of Object.values(this.lines)) { l.setScale(e, flat); l.updateDistance(dist, streets > 0); }
    this.rivers?.update(dist);
    // relief shading grows with distance: up close the terrain's own slopes are enough, from afar the 1-2 km grids
    // smooth the mountains, so their shading is steepened to keep the ranges legible
    this.U.shadeK.value = THREE.MathUtils.clamp(Math.sqrt(dist / 120), 1, 3.2);
    this.U.hazeRange.value.set(dist, dist * 4);
    this.frame = { dist, tiles, streets, streetsPending: this.streets.pending + this.streets.inflight, flat, exag: this.U.exag.value, e, failures: this.detail.failures };
    this.onFrame?.(this);
    this.renderer.render(this.scene, this.camera);
    this._raf = requestAnimationFrame(this._tick);
  };

  dispose() {
    cancelAnimationFrame(this._raf);
    removeEventListener("keydown", this._onKeyDown); removeEventListener("keyup", this._onKeyUp);
    removeEventListener("blur", this._onBlur); removeEventListener("resize", this._onResize);
    this.renderer.domElement.removeEventListener("contextmenu", this._onContext);
    for (const l of Object.values(this.lines)) l.dispose();
    for (const t of this.levels) { for (const l of t.levels) l.mesh?.traverse(o => o.geometry?.dispose()); t.material.dispose(); }
    this.rivers?.dispose(); this.streets.dispose(); this.detail.dispose(); this.controls.dispose(); this.renderer.dispose();
    if (window.__earthnote === this) delete window.__earthnote;
  }
}
