import * as THREE from "three";

// The storm layer: a flat sheet over the event's box, floating above the terrain in 3D (at `altitude` km, scaled
// with the vertical exaggeration) and just under the roads in 2D. It shows one fill — hourly rain, rain accumulated
// since a start hour, or 2 m temperature — and wind as drifting particle trails on top.

// Colour steps, after Windy's rain palette: [value, colour]. Below the first step the sheet is clear.
export const FILLS = {
  rate: { unit: "mm/h", stops: [0.1, 0.5, 1, 2, 4, 7, 12, 20, 35, 60] },
  accum: { unit: "mm", stops: [1, 5, 10, 20, 35, 50, 75, 100, 150, 250] },
  temp: { unit: "°C", stops: [-15, -8, -3, 0, 4, 8, 12, 16, 20, 26] },
};
export const RAIN_COLORS = ["#7fb5d9", "#4f93cf", "#2f6fc0", "#21a6a6", "#47b04a", "#c3d43a", "#f5c22e", "#f07c22", "#de3a3a", "#b0249e"];
export const TEMP_COLORS = ["#7b4fb0", "#4a5fc1", "#3f8fd2", "#4fb7d6", "#5fc39a", "#9ccf62", "#e4d65a", "#f2a64a", "#e8683a", "#b8312f"];
const MAX_MM = { rate: 100, accum: 600 };   // display texture range: q = 254 * sqrt(mm / max)

const VERT = `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const FRAG = `
  uniform sampler2D uRain, uMet; uniform float uMode, uMax, uOpacity, uHasRain, uHasMet;
  uniform float uStops[10]; uniform vec3 uColors[10];
  varying vec2 vUv;
  vec4 ramp(float v) {
    if (v < uStops[0]) return vec4(0.0);
    vec3 c = uColors[9];
    for (int i = 0; i < 9; i++) {
      if (v < uStops[i + 1]) { c = mix(uColors[i], uColors[i + 1], (v - uStops[i]) / (uStops[i + 1] - uStops[i])); break; }
    }
    return vec4(c, 1.0);
  }
  void main() {
    vec4 col = vec4(0.0);
    if (uMode < 1.5) {
      if (uHasRain < 0.5) discard;
      vec2 r = texture2D(uRain, vUv).rg;
      float mm = r.y > 0.01 ? pow(r.x / r.y * 255.0 / 254.0, 2.0) * uMax : 0.0;   // un-premultiply the coverage
      col = ramp(mm);
      col.a *= smoothstep(uStops[0], uStops[1], mm) * mix(0.55, 0.92, clamp(log(mm / uStops[0] + 1.0) / 4.0, 0.0, 1.0)) * r.y;
    } else {
      if (uHasMet < 0.5) discard;
      vec4 m = texture2D(uMet, vUv);
      col = vec4(ramp(m.b * 255.0 / 4.0 - 30.0).rgb, 0.78 * m.a);   // B = (°C + 30) * 4
    }
    col.a *= uOpacity;
    if (col.a < 0.01) discard;
    gl_FragColor = col;
  }`;

const hexes = list => list.map(h => new THREE.Color(h));

export class AtmosphereLayer {
  constructor(scene, P, doc, U) {
    Object.assign(this, { scene, P, doc, U });
    const g = doc.grids.rain;
    this.box = { west: g.west, east: g.east, south: g.south, north: g.north };
    const x0 = P.toX(g.west), x1 = P.toX(g.east), z0 = P.toZ(g.north), z1 = P.toZ(g.south);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute([x0, 0, z0, x1, 0, z0, x0, 0, z1, x1, 0, z1], 3));
    geo.setAttribute("uv", new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1, 1, 1], 2));
    geo.setIndex([0, 2, 1, 1, 2, 3]);
    this.rainData = new Uint8Array(g.cols * g.rows * 2);
    this.rainTex = new THREE.DataTexture(this.rainData, g.cols, g.rows, THREE.RGFormat);
    this.rainTex.magFilter = this.rainTex.minFilter = THREE.LinearFilter; this.rainTex.needsUpdate = true;
    this.metTex = new THREE.DataTexture(new Uint8Array(4), 1, 1, THREE.RGBAFormat); this.metTex.needsUpdate = true;
    this.uniforms = {
      uRain: { value: this.rainTex }, uMet: { value: this.metTex }, uMode: { value: 0 }, uMax: { value: MAX_MM.rate },
      uOpacity: { value: 0.85 }, uHasRain: { value: 0 }, uHasMet: { value: 0 },
      uStops: { value: FILLS.rate.stops.slice() }, uColors: { value: hexes(RAIN_COLORS) },
    };
    this.mesh = new THREE.Mesh(geo, new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, uniforms: this.uniforms, transparent: true, depthWrite: false, side: THREE.DoubleSide,
    }));
    this.mesh.renderOrder = 5; this.mesh.frustumCulled = false;
    scene.add(this.mesh);
    this.altitude = 6; this.fill = "rate"; this.met = null;
    this.wind = new WindParticles(scene, P, this.box);
  }

  // field: Float32Array of mm on the rain grid (NaN = no data), or null
  setRain(mm) {
    const d = this.rainData, max = MAX_MM[this.fill === "accum" ? "accum" : "rate"];
    if (!mm) { this.uniforms.uHasRain.value = 0; return; }
    for (let i = 0; i < mm.length; i++) {
      const v = mm[i];
      if (Number.isNaN(v)) { d[i * 2] = 0; d[i * 2 + 1] = 0; }
      else { d[i * 2] = Math.min(254, Math.round(254 * Math.sqrt(Math.max(0, v) / max))); d[i * 2 + 1] = 255; }
    }
    this.rainTex.needsUpdate = true; this.uniforms.uHasRain.value = 1; this.uniforms.uMax.value = max;
  }

  // met: {data: RGBA bytes, grid} from a met frame, or null
  setMet(met) {
    this.met = met;
    if (!met) { this.uniforms.uHasMet.value = 0; this.wind.setField(null); return; }
    const t = new THREE.DataTexture(met.data, met.grid.cols, met.grid.rows, THREE.RGBAFormat);
    t.magFilter = t.minFilter = THREE.LinearFilter; t.needsUpdate = true;
    this.metTex.dispose(); this.metTex = this.uniforms.uMet.value = t;
    this.uniforms.uHasMet.value = 1;
    this.wind.setField(met);
  }

  setFill(fill) {
    this.fill = fill;
    this.mesh.visible = fill !== "off";
    if (fill === "off") return;
    const f = FILLS[fill];
    this.uniforms.uMode.value = fill === "temp" ? 2 : fill === "accum" ? 1 : 0;
    this.uniforms.uStops.value = f.stops.slice();
    this.uniforms.uColors.value = hexes(fill === "temp" ? TEMP_COLORS : RAIN_COLORS);
  }
  setOpacity(a) { this.uniforms.uOpacity.value = a; }
  setAltitude(km) { this.altitude = km; }
  setWind(on) { this.wind.setVisible(on); }

  // per frame: the sheet's height follows the exaggeration and the 2D blend; wind trails advance with the zoom
  update(dt, dist) {
    const flat = this.U.flat.value, exag = this.U.exag.value;
    const y = this.altitude * exag * (1 - flat) + 0.04 * flat;
    this.mesh.position.y = y;
    this.wind.update(dt, dist, y + 0.03 + 0.05 * flat);
  }

  dispose() {
    this.scene.remove(this.mesh); this.mesh.geometry.dispose(); this.mesh.material.dispose();
    this.rainTex.dispose(); this.metTex.dispose(); this.wind.dispose();
  }
}

// Wind (or sea currents) as particle trails (after Windy): each particle drifts with the field and leaves a fading
// trail; it is reborn somewhere random when it ages out or leaves the data. Speed on screen follows the zoom.
// opts: n particles, trail (points per trail), color, scale (screen speed per m/s, relative to wind), full (m/s at
// full brightness), decode(data, i) -> [u, v] m/s or null for one texel of the field's RGBA bytes, and onData (spawn
// only where the field has data: for a sea, most of whose box is land).
const N = 3500, TRAIL = 8;
const decodeWind = (d, i) => (d[i + 3] === 0 ? null : [(d[i] - 128) / 4, (d[i + 1] - 128) / 4]);
const WVERT = `
  attribute float alpha; varying float vA;
  void main() { vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const WFRAG = `
  uniform vec3 uColor; uniform float uOpacity; varying float vA;
  void main() { if (vA < 0.01) discard; gl_FragColor = vec4(uColor, vA * uOpacity); }`;

export class WindParticles {
  constructor(scene, P, box, { n = N, trail = TRAIL, color = "#f4f6f8", scale = 1, full = 15, floor = 0.25, decode = decodeWind, onData = false } = {}) {
    Object.assign(this, { scene, P, box, scale, full, decode, onData, floor });
    this.n = n; const TRAIL = (this.T = trail);
    this.lon = new Float32Array(n); this.lat = new Float32Array(n); this.age = new Float32Array(n); this.life = new Float32Array(n);
    this.trail = new Float32Array(n * TRAIL * 2);   // lon, lat history, newest first
    this.speed = new Float32Array(n);
    this.pos = new Float32Array(n * (TRAIL - 1) * 2 * 3); this.alpha = new Float32Array(n * (TRAIL - 1) * 2);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute("alpha", new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.lines = new THREE.LineSegments(g, new THREE.ShaderMaterial({
      vertexShader: WVERT, fragmentShader: WFRAG, transparent: true, depthWrite: false,
      uniforms: { uColor: { value: new THREE.Color(color) }, uOpacity: { value: 0.85 } },
    }));
    this.lines.frustumCulled = false; this.lines.renderOrder = 6; this.lines.visible = false;
    scene.add(this.lines);
    this.field = null;
    for (let i = 0; i < n; i++) this._spawn(i, true);
  }

  setField(met) {
    this.field = met;
    if (this.onData && met) {   // the texels with data, to be born on
      const g = met.grid, cells = [];
      for (let i = 0; i < g.cols * g.rows; i++) if (this.decode(met.data, i * 4)) cells.push(i);
      this.cells = cells;
    }
  }
  setVisible(on) { this.lines.visible = on; }
  // where to bear particles: within dlon / dlat degrees of lon, lat (null: anywhere)
  setFocus(f) { this.focus = f; }

  _wind(lon, lat) {
    const m = this.field; if (!m) return null;
    const g = m.grid, c = Math.floor((lon - g.west) / g.cell), r = Math.floor((g.north - lat) / g.cell);
    if (c < 0 || r < 0 || c >= g.cols || r >= g.rows) return null;
    return this.decode(m.data, (r * g.cols + c) * 4);
  }

  _spawn(i, initial = false) {
    const b = this.box, TRAIL = this.T, g = this.field?.grid;
    if (this.cells?.length && g) {
      // born on a texel with data, near the view's centre if a focus is set (a few tries, else anywhere)
      const f = this.focus;
      for (let t = 0; t < 40; t++) {
        const c = this.cells[Math.floor(Math.random() * this.cells.length)];
        this.lon[i] = g.west + ((c % g.cols) + Math.random()) * g.cell; this.lat[i] = g.north - (Math.floor(c / g.cols) + Math.random()) * g.cell;
        if (!f || (Math.abs(this.lon[i] - f.lon) < f.dlon && Math.abs(this.lat[i] - f.lat) < f.dlat)) break;
      }
    } else { this.lon[i] = b.west + Math.random() * (b.east - b.west); this.lat[i] = b.south + Math.random() * (b.north - b.south); }
    this.life[i] = 60 + Math.random() * 90; this.age[i] = initial ? Math.random() * this.life[i] : 0;
    for (let t = 0; t < TRAIL; t++) { this.trail[(i * TRAIL + t) * 2] = this.lon[i]; this.trail[(i * TRAIL + t) * 2 + 1] = this.lat[i]; }
  }

  update(dt, dist, y) {
    if (!this.lines.visible || !this.field) { if (this.lines.visible) this.alpha.fill(0); return; }
    const kmPerS = (this.scale * Math.min(dist, 2500)) / 250;   // km travelled per second per m/s: a 10 m/s wind crosses the view in ~25 s
    const P = this.P, tr = this.trail, TRAIL = this.T;
    for (let i = 0; i < this.n; i++) {
      const w = this._wind(this.lon[i], this.lat[i]);
      this.age[i] += 1;
      if (!w || this.age[i] > this.life[i]) { this._spawn(i); continue; }
      const km = kmPerS * dt;
      this.lon[i] += (w[0] * km) / (111.32 * Math.cos((this.lat[i] * Math.PI) / 180));
      this.lat[i] += (w[1] * km) / 111.13;
      this.speed[i] = Math.hypot(w[0], w[1]);
      tr.copyWithin((i * TRAIL + 1) * 2, i * TRAIL * 2, (i * TRAIL + TRAIL - 1) * 2);
      tr[i * TRAIL * 2] = this.lon[i]; tr[i * TRAIL * 2 + 1] = this.lat[i];
    }
    let v = 0;
    for (let i = 0; i < this.n; i++) {
      const fade = Math.min(1, this.age[i] / 10, (this.life[i] - this.age[i]) / 10);
      const strength = Math.min(1, this.floor + this.speed[i] / this.full);
      for (let t = 0; t < TRAIL - 1; t++) {
        for (const s of [t, t + 1]) {
          const j = (i * TRAIL + s) * 2;
          this.pos[v * 3] = P.toX(tr[j]); this.pos[v * 3 + 1] = y; this.pos[v * 3 + 2] = P.toZ(tr[j + 1]);
          this.alpha[v] = fade * strength * (1 - s / TRAIL); v++;
        }
      }
    }
    this.lines.geometry.attributes.position.needsUpdate = true;
    this.lines.geometry.attributes.alpha.needsUpdate = true;
  }

  dispose() { this.scene.remove(this.lines); this.lines.geometry.dispose(); this.lines.material.dispose(); }
}
