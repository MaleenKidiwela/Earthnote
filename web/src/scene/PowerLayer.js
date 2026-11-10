import * as THREE from "three";

// Power outages for the storm's hour: a dot at each outage on the ground, sized by the customers out (log scale).
// Planned work is left out. Recorded hourly from the utilities' outage maps; see power.py.

export const OUTAGE_COLOR = "#ffb020";
const VERT = `
  attribute float elev, size; uniform float uExag, uFlat, uDpr;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.03 + 0.05 * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); gl_PointSize = size * uDpr;
  }`;
// a round dot with a dark rim
const FRAG = `uniform vec3 uColor; void main() {
    float r = length(gl_PointCoord - 0.5); if (r > 0.5) discard;
    gl_FragColor = vec4(mix(uColor, vec3(0.07), smoothstep(0.36, 0.44, r)), 0.92 * smoothstep(0.5, 0.45, r)); }`;

// Pure: a dot's diameter in CSS px for n customers out.
export const dotSize = n => Math.min(30, 5 + 5 * Math.log10(Math.max(1, n)));

export class PowerLayer {
  constructor(scene, P, U, elevAt) {
    Object.assign(this, { scene, P, U, elevAt });
    this.mat = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthTest: false,
      uniforms: { uExag: U.exag, uFlat: U.flat, uDpr: { value: Math.min(devicePixelRatio || 1, 2) },
        uColor: { value: new THREE.Color(OUTAGE_COLOR) } },
    });
    this.points = new THREE.Points(new THREE.BufferGeometry(), this.mat);
    this.points.frustumCulled = false; this.points.renderOrder = 13;
    scene.add(this.points);
    this.rows = [];
  }

  // a frame from power/k###.json, or null
  set(frame) {
    // the biggest last, so they draw on top
    this.rows = (frame?.out ?? []).slice().sort((a, b) => a[3] - b[3]);
    const pos = [], elev = [], size = [];
    for (const [, lat, lon, n] of this.rows) {
      pos.push(this.P.toX(lon), 0, this.P.toZ(lat)); elev.push(this.elevAt(lon, lat) ?? 0);
      size.push(dotSize(n));
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute("elev", new THREE.Float32BufferAttribute(elev, 1));
    g.setAttribute("size", new THREE.Float32BufferAttribute(size, 1));
    this.points.geometry.dispose(); this.points.geometry = g;
  }

  // the outage under screen point (px, py), topmost first: its row, or null
  pick(px, py, camera, width, height) {
    const e = this.points.geometry.attributes.elev?.array, pos = this.points.geometry.attributes.position?.array;
    if (!e) return null;
    const k = 0.001 * this.U.exag.value * (1 - this.U.flat.value), v = new THREE.Vector3();
    for (let i = this.rows.length - 1; i >= 0; i--) {
      v.set(pos[i * 3], e[i] * k + 0.03 + 0.05 * this.U.flat.value, pos[i * 3 + 2]).project(camera);
      if (v.z >= 1) continue;
      const d = Math.hypot((v.x + 1) * width / 2 - px, (1 - v.y) * height / 2 - py);
      if (d <= Math.max(5, dotSize(this.rows[i][3]) / 2 + 2)) return this.rows[i];
    }
    return null;
  }

  setVisible(on) { this.points.visible = on; }
  dispose() { this.scene.remove(this.points); this.points.geometry.dispose(); this.mat.dispose(); }
}
