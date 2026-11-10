import { ReservoirMarkers, levelAt } from "./ReservoirMarkers.js";

// Groundwater at the USGS real-time and BC observation wells, following the storm's hour: how far the water table
// has risen or fallen since the storm began. BC's wells post about a day late.

const fmt = c => `${c > 0.005 ? "+" : c < -0.005 ? "−" : "±"}${Math.abs(c).toFixed(2)} ft`;

export class WellMarkers extends ReservoirMarkers {
  static file = "ground/wells.json"; static kind = "well";
  // (it.id is the marker's index by now) "Observation well 442, 4660 Black Road Kelowna" -> "well 442"
  prepare(it) { return { ...it, key: "level", short: it.src === "BC" ? it.name.replace(/^Observation (well \d+).*$/, "$1") : it.name }; }
  step() { return 0.1; }
  valueText(it, l) { return fmt(l.change); }
  tipBody(it, l) {
    const d = levelAt(it, this.k, "depth");
    return (l ? `<div class="mono">water table ${fmt(l.change)} since the storm began${l.latest ? " · latest reading" : ""}</div>` : "<div>no reading yet</div>") +
      (d ? `<div class="mono">${d.elev.toFixed(2)} ft below the ground</div>` : "") +
      `<div class="sub">${it.src === "BC" ? "BC Provincial Groundwater Observation Well Network · posted about a day late" : "USGS real-time well"} · provisional</div>`;
  }
  caption(it, hi, lo) { return `level ${hi.toFixed(2)} / ${lo.toFixed(2)} ft · whole window`; }
}
