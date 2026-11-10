import { WindParticles } from "./AtmosphereLayer.js";

// The sea from NOAA's Salish Sea model (SSCOFS) for the storm's hour: the surface currents as drifting trails, just
// above sea level so land hides them. Frames: RGBA, R and G current east and north (m/s = (byte - 128) / 25),
// B sea level (m = byte / 25 - 3; not drawn), A water.

export class SeaLayer {
  constructor(scene, P, grid, U) {
    Object.assign(this, { scene, P, grid, U });
    this.currents = new WindParticles(scene, P, grid, {
      n: 9000, trail: 16, color: "#ffffff", scale: 12, full: 0.6, floor: 0.45, onData: true,
      decode: (d, i) => (d[i + 3] === 0 ? null : [(d[i] - 128) / 25, (d[i + 1] - 128) / 25]),
    });
    this.currents.setVisible(true);
  }

  // frame: {data, width, height} RGBA bytes, or null
  set(frame) { this.currents.setField(frame ? { data: frame.data, grid: this.grid } : null); }
  setCurrents(on) { this.currents.setVisible(on); }

  // target: the orbit target (scene km); currents are born within about a view's width of it
  update(dt, dist, target) {
    const flat = this.U.flat.value, y = 0.004 + 0.045 * flat;
    if (target) {
      const lat = this.P.fromZ(target.z), r = Math.max(0.05, (dist * 0.9) / 111);
      this.currents.setFocus({ lon: this.P.fromX(target.x), lat, dlon: r / Math.cos((lat * Math.PI) / 180), dlat: r });
    }
    this.currents.update(dt, dist, y + 0.006 + 0.01 * flat);
  }
  dispose() { this.currents.dispose(); }
}
