import * as THREE from "three";

// NOAA's flood outlines for the storm's hour, draped on the terrain, with a dot at each so they can be found from far
// out (an outline is tens of metres wide). Recorded hourly from when recording began; see rivers.py.

const COLOR = "#ff4f7b";
const VERT = `
  attribute float elev; uniform float uExag, uFlat;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.012 + 0.04 * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`;
const FRAG = `uniform vec3 uColor; uniform float uOpacity; void main() { gl_FragColor = vec4(uColor, uOpacity); }`;
const DOT_VERT = `
  attribute float elev; uniform float uExag, uFlat;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.03 + 0.05 * uFlat;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); gl_PointSize = 7.0;
  }`;
// a round dot with a dark rim
const DOT_FRAG = `uniform vec3 uColor; void main() {
    float r = length(gl_PointCoord - 0.5); if (r > 0.5) discard;
    gl_FragColor = vec4(mix(uColor, vec3(0.07), smoothstep(0.32, 0.4, r)), smoothstep(0.5, 0.44, r)); }`;

// Pure: ESRI rings (outer rings clockwise in lon/lat, holes counter-clockwise) to [outer, holes] shapes.
export function shapesOf(rings) {
  const shapes = [];
  for (const r of rings) {
    const pts = r.map(([x, y]) => new THREE.Vector2(x, y));
    if (THREE.ShapeUtils.isClockWise(pts) || !shapes.length) shapes.push([pts, []]);
    else shapes[shapes.length - 1][1].push(pts);
  }
  return shapes;
}

export class FloodLayer {
  constructor(scene, P, U, elevAt) {
    Object.assign(this, { scene, P, U, elevAt });
    const uniforms = { uExag: U.exag, uFlat: U.flat, uColor: { value: new THREE.Color(COLOR) }, uOpacity: { value: 0.8 } };
    this.mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms, transparent: true, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -40, side: THREE.DoubleSide });
    this.dotMat = new THREE.ShaderMaterial({ vertexShader: DOT_VERT, fragmentShader: DOT_FRAG, uniforms, transparent: true, depthTest: false });
    this.mesh = new THREE.Mesh(new THREE.BufferGeometry(), this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = 7;
    this.dots = new THREE.Points(new THREE.BufferGeometry(), this.dotMat); this.dots.frustumCulled = false; this.dots.renderOrder = 12;
    scene.add(this.mesh, this.dots);
    this.visible = true;
  }

  // a snapshot from rivers/inundation/k###.json, or null
  set(snap) {
    const P = this.P, pos = [], elev = [], index = [], dpos = [], delev = [];
    for (const [, , rings] of snap?.polys ?? []) {
      for (const [outer, holes] of shapesOf(rings)) {
        if (outer.length < 3) continue;
        const all = [outer, ...holes].flat(), base = pos.length / 3;
        for (const v of all) { pos.push(P.toX(v.x), 0, P.toZ(v.y)); elev.push(this.elevAt(v.x, v.y) ?? 0); }
        for (const t of THREE.ShapeUtils.triangulateShape(outer, holes)) index.push(base + t[0], base + t[1], base + t[2]);
      }
      const r0 = rings[0] ?? [];
      if (r0.length) {
        const cx = r0.reduce((s, p) => s + p[0], 0) / r0.length, cy = r0.reduce((s, p) => s + p[1], 0) / r0.length;
        dpos.push(P.toX(cx), 0, P.toZ(cy)); delev.push(this.elevAt(cx, cy) ?? 0);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute("elev", new THREE.Float32BufferAttribute(elev, 1));
    g.setIndex(index);
    const d = new THREE.BufferGeometry();
    d.setAttribute("position", new THREE.Float32BufferAttribute(dpos, 3)); d.setAttribute("elev", new THREE.Float32BufferAttribute(delev, 1));
    this.mesh.geometry.dispose(); this.dots.geometry.dispose();
    this.mesh.geometry = g; this.dots.geometry = d;
  }

  setVisible(on) { this.visible = on; this.mesh.visible = this.dots.visible = on; }
  dispose() { this.scene.remove(this.mesh, this.dots); this.mesh.geometry.dispose(); this.dots.geometry.dispose(); this.mat.dispose(); this.dotMat.dispose(); }
}
