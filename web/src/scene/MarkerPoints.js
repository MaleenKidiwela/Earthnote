import * as THREE from "three";

// Markers on the ground, one per item, each with its own size, shape and colour: the base of the roads and sewer
// layers. Subclasses turn a frame into items {lat, lon, size (CSS px), shape, color, ...} and call setItems.

export const SHAPE = { diamond: 0, square: 1, circle: 2 };
const VERT = `
  attribute float elev, size, shape; attribute vec3 tint; uniform float uExag, uFlat, uDpr; varying vec3 vColor; varying float vShape;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat) + 0.03 + 0.05 * uFlat;
    vColor = tint; vShape = shape;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); gl_PointSize = size * uDpr;
  }`;
// the shape with a dark rim
const FRAG = `varying vec3 vColor; varying float vShape; void main() {
    vec2 q = abs(gl_PointCoord - 0.5);
    float r = vShape > 1.5 ? length(q) : vShape > 0.5 ? max(q.x, q.y) * 1.25 : q.x + q.y; if (r > 0.5) discard;
    gl_FragColor = vec4(mix(vColor, vec3(0.07), smoothstep(0.34, 0.42, r)), 0.95); }`;

export class MarkerPoints {
  constructor(scene, P, U, elevAt) {
    Object.assign(this, { scene, P, U, elevAt });
    this.mat = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthTest: false,
      uniforms: { uExag: U.exag, uFlat: U.flat, uDpr: { value: Math.min(devicePixelRatio || 1, 2) } },
    });
    this.points = new THREE.Points(new THREE.BufferGeometry(), this.mat);
    this.points.frustumCulled = false; this.points.renderOrder = 13;
    scene.add(this.points);
    this.items = [];
  }

  // items draw in order, so the last is on top
  setItems(items) {
    this.items = items;
    const pos = [], elev = [], size = [], shape = [], color = [], c = new THREE.Color();
    for (const it of items) {
      pos.push(this.P.toX(it.lon), 0, this.P.toZ(it.lat)); elev.push(this.elevAt(it.lon, it.lat) ?? 0);
      size.push(it.size); shape.push(it.shape); c.set(it.color); color.push(c.r, c.g, c.b);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute("elev", new THREE.Float32BufferAttribute(elev, 1));
    g.setAttribute("size", new THREE.Float32BufferAttribute(size, 1)); g.setAttribute("shape", new THREE.Float32BufferAttribute(shape, 1));
    g.setAttribute("tint", new THREE.Float32BufferAttribute(color, 3));
    this.points.geometry.dispose(); this.points.geometry = g;
  }

  // the item under screen point (px, py), topmost first, or null
  pick(px, py, camera, width, height) {
    const e = this.points.geometry.attributes.elev?.array, pos = this.points.geometry.attributes.position?.array;
    if (!e) return null;
    const k = 0.001 * this.U.exag.value * (1 - this.U.flat.value), v = new THREE.Vector3();
    for (let i = this.items.length - 1; i >= 0; i--) {
      v.set(pos[i * 3], e[i] * k + 0.03 + 0.05 * this.U.flat.value, pos[i * 3 + 2]).project(camera);
      if (v.z >= 1) continue;
      if (Math.hypot((v.x + 1) * width / 2 - px, (1 - v.y) * height / 2 - py) <= Math.max(5, this.items[i].size / 2 + 2)) return this.items[i];
    }
    return null;
  }

  setVisible(on) { this.points.visible = on; }
  dispose() { this.scene.remove(this.points); this.points.geometry.dispose(); this.mat.dispose(); }
}
