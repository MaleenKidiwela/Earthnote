import * as THREE from "three";
import { category, flowOf } from "../data/rivers.js";

// Rivers as walls of water: a vertical ribbon along every reach, as tall as its flow has risen since the storm began
// (against the analysis at the window's first hour) and coloured by the flood thresholds it reaches. A reach already
// over its high-water flow before the storm, or whose high-water flow is under MIN_HIGH_WATER (dry creeks and
// irrigation canals, where the NWM thresholds mean little), is never flagged. In 2D the walls lie down into flat ribbons. The flow of each reach lives in a small texture (one
// texel per reach: flow byte, category, wall height), so an hour changes by rewriting it alone.

export const RIVER_COLORS = ["#4f9fe0", "#f2cf3d", "#f39431", "#e2483a", "#c42b7d", "#8a3fb0", "#4b237a"];
export const RIVER_LABELS = ["below high water", "high water", "2-year flood", "5-year flood", "10-year flood", "25-year flood", "50-year flood"];
const TEX_W = 256;
const W_OF_H = 0.25;      // 2D ribbon width over wall height
const UNIT_STEPS = 60;    // wall-height byte: 60 steps per unit
const MIN_BASE = 0.2;     // m3/s: rises are measured against at least this, so a trickle doubling is not a flood
const MIN_HIGH_WATER = 1; // m3/s: smaller high-water flows (a hundredth of a m3/s on some dry creeks) are not flagged

// Pure: a reach's flow as a share of its 2-year flood flow (NaN where it has none).
export function shareOf(q, thr, i) { const ref = thr[i * 6 + 1]; return ref > 0 ? q / ref : NaN; }

// Pure: wall height in units: 0.2 for a river at (or below) its pre-storm flow, then 0.45 per doubling — 2x is 0.65,
// 4x 1.1, 8x 1.55 — up to 4.
export function wallUnits(q, base) {
  const r = q / Math.max(base, MIN_BASE);
  return Math.min(4, 0.2 * Math.min(r, 1) + 0.45 * Math.log2(Math.max(r, 1)));
}

const VERT = `
  attribute float elev, reach, top; attribute vec2 side;
  uniform sampler2D uFlow; uniform float uExag, uFlat, uWallK;
  varying float vTop, vCat;
  void main() {
    vec4 f = texelFetch(uFlow, ivec2(int(mod(reach, ${TEX_W}.0)), int(reach / ${TEX_W}.0)), 0);
    float b = floor(f.r * 255.0 + 0.5);
    vCat = b > 254.5 ? -1.0 : floor(f.g * 255.0 + 0.5);
    vTop = top;
    float s = uWallK * f.b * 255.0 / ${UNIT_STEPS}.0;   // see wallUnits
    vec3 p = position;
    p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.01 + top * s * (1.0 - uFlat) + 0.05 * uFlat;
    p.xz += side * (top - 0.5) * s * ${W_OF_H} * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`;
const FRAG = `
  uniform vec3 uColors[7]; uniform float uOpacity, uFlat, uWhatIf;
  varying float vTop, vCat;
  void main() {
    if (vCat < -0.5) discard;
    // a what-if hour (a forecast, not the record): diagonal stripes, half see-through
    if (uWhatIf > 0.5 && mod(gl_FragCoord.x + gl_FragCoord.y, 9.0) < 4.0) discard;
    vec3 c = uColors[int(vCat + 0.5)];
    // a wall: solid at the water line, fading upward, with a bright crest; a ribbon: solid with lighter edges
    float crest = smoothstep(0.9, 1.0, vTop) * (1.0 - uFlat);
    float edge = uFlat * smoothstep(0.3, 0.5, abs(vTop - 0.5));
    c = mix(c, vec3(1.0), 0.35 * crest + 0.25 * edge);
    float a = mix(mix(0.92, 0.5, vTop), 0.9, uFlat) * (vCat > 0.5 ? 1.0 : 0.7);   // flooding reaches stand out
    gl_FragColor = vec4(c, a * uOpacity);
  }`;

export class RiverLayer {
  constructor(scene, P, reaches, U) {
    Object.assign(this, { scene, P, reaches, U });
    const n = reaches.count, rows = Math.ceil(n / TEX_W);
    this.flowData = new Uint8Array(TEX_W * rows * 4);
    for (let i = 0; i < n; i++) this.flowData[i * 4] = 255;
    this.flow = new THREE.DataTexture(this.flowData, TEX_W, rows);
    this.flow.magFilter = this.flow.minFilter = THREE.NearestFilter; this.flow.needsUpdate = true;
    this.bytes = new Uint8Array(n).fill(255);
    this.wallK = { value: 1 }; this.opacity = { value: 1 }; this.whatIf = { value: 0 };
    this.geometry = this._geometry();
    this.mesh = new THREE.Mesh(this.geometry, new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, side: THREE.DoubleSide,
      uniforms: {
        uFlow: { value: this.flow }, uExag: U.exag, uFlat: U.flat, uWallK: this.wallK, uOpacity: this.opacity, uWhatIf: this.whatIf,
        uColors: { value: RIVER_COLORS.map(c => new THREE.Color(c)) },
      },
    }));
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 6;
    scene.add(this.mesh);
  }

  // two vertices (water line and crest) at every point of every path; `side` is the horizontal normal there
  _geometry() {
    const { offsets, owner, coords, paths } = this.reaches, P = this.P, nv = coords.length / 2;
    const pos = new Float32Array(nv * 2 * 3), elev = new Float32Array(nv * 2), reach = new Float32Array(nv * 2);
    const top = new Float32Array(nv * 2), side = new Float32Array(nv * 2 * 2), index = [];
    this.xz = new Float32Array(nv * 2);
    for (let i = 0; i < nv; i++) { this.xz[i * 2] = P.toX(coords[i * 2]); this.xz[i * 2 + 1] = P.toZ(coords[i * 2 + 1]); }
    for (let p = 0; p < paths; p++) {
      const a = offsets[p], b = offsets[p + 1];
      for (let i = a; i < b; i++) {
        const i0 = Math.max(a, i - 1), i1 = Math.min(b - 1, i + 1);
        let dx = this.xz[i1 * 2] - this.xz[i0 * 2], dz = this.xz[i1 * 2 + 1] - this.xz[i0 * 2 + 1];
        const len = Math.hypot(dx, dz) || 1; dx /= len; dz /= len;
        for (let t = 0; t < 2; t++) {
          const v = i * 2 + t;
          pos[v * 3] = this.xz[i * 2]; pos[v * 3 + 2] = this.xz[i * 2 + 1];
          reach[v] = owner[p]; top[v] = t; side[v * 2] = -dz; side[v * 2 + 1] = dx;
        }
        if (i < b - 1) { const v = i * 2; index.push(v, v + 1, v + 2, v + 2, v + 1, v + 3); }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("elev", new THREE.BufferAttribute(elev, 1));
    g.setAttribute("reach", new THREE.BufferAttribute(reach, 1));
    g.setAttribute("top", new THREE.BufferAttribute(top, 1));
    g.setAttribute("side", new THREE.BufferAttribute(side, 2));
    g.setIndex(index);
    return g;
  }

  // the water line follows the terrain drawn below (call when the detail tiles change)
  drape(elevAt) {
    const { coords } = this.reaches, e = this.geometry.attributes.elev.array;
    for (let i = 0; i < coords.length / 2; i++) e[i * 2] = e[i * 2 + 1] = elevAt(coords[i * 2], coords[i * 2 + 1]) ?? 0;
    this.geometry.attributes.elev.needsUpdate = true;
  }

  // the flows before the storm (the window's first hour): what rises are measured against, and which reaches are
  // already over their high-water flow (their flags would mean nothing)
  setBaseline(bytes) {
    const { count: n, thr } = this.reaches;
    this.base = new Float32Array(n); this.unflagged = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      const q = flowOf(bytes[i]);
      this.base[i] = Number.isNaN(q) ? NaN : q;
      this.unflagged[i] = thr[i * 6] < MIN_HIGH_WATER || q >= thr[i * 6] ? 1 : 0;
    }
    if (this.raw) this.setFlows(this.raw);
  }

  // one hour's flow bytes (null: no data); counts reaches by category for the legend
  setFlows(bytes) {
    const { count: n, thr } = this.reaches, d = this.flowData;
    this.raw = bytes;
    this.bytes = bytes ?? new Uint8Array(n).fill(255);
    this.counts = new Array(7).fill(0);
    for (let i = 0; i < n; i++) {
      const b = this.bytes[i], q = flowOf(b), base = this.base?.[i];
      const c = b === 255 || this.unflagged?.[i] ? 0 : category(q, thr, i);
      d[i * 4] = base === undefined || Number.isNaN(base) ? 255 : b; d[i * 4 + 1] = c;
      d[i * 4 + 2] = d[i * 4] === 255 ? 0 : Math.round(wallUnits(q, base) * UNIT_STEPS);
      if (d[i * 4] !== 255) this.counts[c]++;
    }
    this.flow.needsUpdate = true;
  }

  // km per wall unit (a river at 4x its pre-storm flow stands ~1.1 units), growing with the view so walls keep their
  // size on screen
  update(dist) { this.wallK.value = THREE.MathUtils.clamp(dist * 0.02, 0.01, 50); }
  setVisible(on) { this.mesh.visible = on; }
  setOpacity(a) { this.opacity.value = a; }

  // the reach under a screen point (px from the canvas's top left), within `tol` px of its water line or crest
  pick(px, py, camera, width, height, tol = 8) {
    const { offsets, owner, paths } = this.reaches, e = this.geometry.attributes.elev.array;
    const U = this.U, k = 0.001 * U.exag.value * (1 - U.flat.value), v = new THREE.Vector3();
    const proj = (i, up) => {
      v.set(this.xz[i * 2], e[i * 2] * k + 0.01 + up, this.xz[i * 2 + 1]).project(camera);
      return v.z < 1 ? [(v.x + 1) * width / 2, (1 - v.y) * height / 2] : null;
    };
    let best = null, bestD = tol;
    const segDist = (a, b) => {
      if (!a || !b) return Infinity;
      const dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy;
      const t = L ? Math.max(0, Math.min(1, ((px - a[0]) * dx + (py - a[1]) * dy) / L)) : 0;
      return Math.hypot(px - a[0] - t * dx, py - a[1] - t * dy);
    };
    for (let p = 0; p < paths; p++) {
      const r = owner[p], b = this.bytes[r];
      if (b === 255 || this.flowData[r * 4] === 255) continue;
      const h = (1 - U.flat.value) * this.wallK.value * this.flowData[r * 4 + 2] / UNIT_STEPS;
      let a0 = proj(offsets[p], 0), a1 = proj(offsets[p], h);
      for (let i = offsets[p] + 1; i < offsets[p + 1]; i++) {
        const b0 = proj(i, 0), b1 = proj(i, h);
        const d = Math.min(segDist(a0, b0), segDist(a1, b1), segDist(a0, a1));
        if (d < bestD) { bestD = d; best = r; }
        a0 = b0; a1 = b1;
      }
    }
    if (best === null) return null;
    const q = flowOf(this.bytes[best]), thr = Array.from(this.reaches.thr.subarray(best * 6, best * 6 + 6));
    return { reach: best, share: shareOf(q, this.reaches.thr, best), rise: q / Math.max(this.base[best], MIN_BASE), base: this.base[best], unflagged: !!this.unflagged[best], name: this.reaches.names[this.reaches.name[best]] || "Unnamed stream", order: this.reaches.order[best], q, thr, cat: this.unflagged[best] ? 0 : category(q, this.reaches.thr, best) };
  }

  dispose() { this.scene.remove(this.mesh); this.geometry.dispose(); this.mesh.material.dispose(); this.flow.dispose(); }
}
