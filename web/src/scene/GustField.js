import * as THREE from "three";

// Wind gusts painted on the land by the terrain shader (see terrainMaterial.js): one frame's gust grid as a texture,
// R the gust (m/s / 64) times G the coverage, so the linear filter never blends a gust into a no-data texel.
// Colour steps, after the NWS wind-advisory and high-wind thresholds: [mph], below the first the ground is clear.
export const GUST_MPH = [25, 35, 45, 58, 70, 85];
export const GUST_COLORS = ["#f2d64b", "#f5a031", "#ea5a2b", "#d2245a", "#9b1f9e", "#4b1fa8"];
const MS_PER_MPH = 0.44704;

export class GustField {
  constructor(U, P, grid) {
    this.U = U;
    U.gustRect.value.set(P.toX(grid.west), P.toZ(grid.north), P.toX(grid.east), P.toZ(grid.south));
    U.gustStops.value = GUST_MPH.map(m => m * MS_PER_MPH);
    U.gustColors.value = GUST_COLORS.map(c => new THREE.Color(c));
    this.grid = grid; this.visible = false; this.has = false;
  }

  // frame: {data: RGBA bytes of the greyscale gust PNG (m/s, 255 = none)}, or null
  set(frame) {
    this.has = !!frame;
    if (frame) {
      const n = this.grid.cols * this.grid.rows, d = new Uint8Array(n * 2);
      for (let i = 0; i < n; i++) {
        const v = frame.data[i * 4];
        if (v !== 255) { d[i * 2] = Math.min(255, Math.round(v * 4)); d[i * 2 + 1] = 255; }
      }
      const t = new THREE.DataTexture(d, this.grid.cols, this.grid.rows, THREE.RGFormat);
      t.magFilter = t.minFilter = THREE.LinearFilter; t.needsUpdate = true;
      this.U.gust.value?.dispose();
      this.U.gust.value = t;
    }
    this._sync();
  }
  setVisible(on) { this.visible = on; this._sync(); }
  _sync() { this.U.gustOn.value = this.visible && this.has ? 1 : 0; }
  dispose() { this.U.gust.value?.dispose(); this.U.gust.value = null; this.U.gustOn.value = 0; }
}
