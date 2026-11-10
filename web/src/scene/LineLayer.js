import * as THREE from "three";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";

// Line styles: [colour, width px, casing colour or null, casing width, opacity]. Roads read like a printed road map:
// motorways light with a dark casing, trunks and primaries progressively finer.
export const LINE_STYLES = {
  motorway: ["#f2d58a", 2.4, "#1a1814", 4.2, 1],
  trunk: ["#ece2c6", 1.6, "#1a1814", 3.0, 0.9],
  primary: ["#d8d2c3", 1.0, null, 0, 0.7],
  country: ["#f4f1ea", 1.6, "#121211", 3.4, 0.95],
  state: ["#f4f1ea", 1.0, null, 0, 0.55],
};
// Farthest camera orbit (km) at which a class is drawn, so the whole-region view is not a mesh of minor roads; and
// nearest, for road classes the street layer draws itself once it is showing (so roads are not drawn twice).
export const LINE_FAR = { motorway: Infinity, trunk: 1300, primary: 520, country: Infinity, state: Infinity };
export const LINE_NEAR = { motorway: 60, trunk: 60, primary: 60, country: 0, state: 0 };
const LIFT_M = 12;   // metres above the surface (scaled with the exaggeration), on top of the depth offset

// Pure: y (m) for each vertex. Where a detail tile is drawn the line lies on the tile's (the bundle's) heights;
// elsewhere on the higher of those and the overview mesh, which smooths valleys up.
export function drapeHeights(segs, P, detailShown, overviewAt) {
  const n = segs.length / 3, y = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const x = segs[i * 3], h = segs[i * 3 + 1], z = segs[i * 3 + 2];
    const lon = P.fromX(x), lat = P.fromZ(z);
    if (detailShown(lon, lat)) { y[i] = h + LIFT_M; continue; }
    const o = overviewAt(lon, lat);
    y[i] = (o === null ? h : Math.max(h, o)) + LIFT_M;
  }
  return y;
}

export class LineLayer {
  constructor(scene, name, segs, P) {
    Object.assign(this, { scene, name, segs, P });
    const [color, width, casing, casingWidth, opacity] = LINE_STYLES[name];
    const common = { transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -40 };
    this.mats = [new LineMaterial({ color, linewidth: width, opacity, ...common })];
    if (casing) this.mats.unshift(new LineMaterial({ color: casing, linewidth: casingWidth, opacity: 0.55 * opacity, ...common }));
    this.geometry = new LineSegmentsGeometry();
    this.objects = this.mats.map((m, i) => {
      const o = new LineSegments2(this.geometry, m);
      o.frustumCulled = false; o.renderOrder = 10 + i;
      scene.add(o); return o;
    });
    this.pos = new Float32Array(segs.length);
    this.visible = true;
  }

  // re-drape on the surface now drawn (call when the detail tiles change)
  drape(detailShown, overviewAt) {
    const y = drapeHeights(this.segs, this.P, detailShown, overviewAt), p = this.pos;
    for (let i = 0; i < y.length; i++) { p[i * 3] = this.segs[i * 3]; p[i * 3 + 1] = y[i]; p[i * 3 + 2] = this.segs[i * 3 + 2]; }
    this.geometry.setPositions(p);
  }

  // positions hold metres; the objects scale them by e (km per metre with the exaggeration, 0 in 2D)
  setScale(e, flat) {
    for (const o of this.objects) { o.scale.y = e; o.position.y = 0.02 + 0.05 * flat; }
  }
  // `on` is the user's switch; the class also hides beyond its LINE_FAR distance (updateDistance)
  setVisible(on) { this.visible = on; this._apply(); }
  updateDistance(dist, streets = false) {
    const k = this.near ? 1.05 : 0.95;   // a little hysteresis
    const near = dist < LINE_FAR[this.name] * k && !(streets && dist < LINE_NEAR[this.name] / k);
    if (near !== this.near) { this.near = near; this._apply(); }
  }
  _apply() { for (const o of this.objects) o.visible = this.visible && this.near !== false; }
  setResolution(w, h) { for (const m of this.mats) m.resolution.set(w, h); }

  dispose() {
    for (const o of this.objects) this.scene.remove(o);
    this.geometry.dispose(); for (const m of this.mats) m.dispose();
  }
}
