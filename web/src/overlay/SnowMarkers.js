import { ReservoirMarkers, esc, levelAt } from "./ReservoirMarkers.js";

// Snow and soil at the SNOTEL and BC snow-pillow stations, following the storm's hour, as two layers: the change in
// snow water equivalent (or snow depth) since the storm began, and the change in soil moisture at the shallowest
// working sensor. Hover one for everything the station measures.

const sign = (c, d) => `${c > 0.5 * 10 ** -d ? "+" : c < -0.5 * 10 ** -d ? "−" : "±"}${Math.abs(c).toFixed(d)}`;
const vals = (site, k) => (site[k] ?? []).filter(v => v !== null);
// Pure: which series a station's snow marker follows: snow water where there is any, else snow depth (null: neither);
// with its unit, decimals and the change that counts as up or down
export function snowKey(site) {
  if (vals(site, "swe").length) return { key: "swe", label: "SWE", unit: "in", d: 1, step: 0.2 };
  if (vals(site, "depth").length) return { key: "depth", label: "snow", unit: "in", d: 0, step: 1 };
  return null;
}
// Pure: the shallowest soil sensor that reads (one stuck at a single value, often 0, is broken or frozen), or null
export function soilKey(site) {
  for (const [key, label] of [["sm2", "soil 2 in"], ["sm8", "soil 8 in"], ["sm20", "soil 20 in"]]) {
    const v = vals(site, key);
    if (v.length && Math.max(...v) > Math.min(...v)) return { key, label, unit: "%", d: 1, step: 1 };
  }
  return null;
}

export class SnowMarkers extends ReservoirMarkers {
  static file = "ground/snow.json"; static kind = "snow";
  static pick = snowKey;
  keep(s) { return !!this.constructor.pick(s); }
  prepare(it) { return { ...it, ...this.constructor.pick(it), short: it.name }; }
  step(it) { return it.step; }
  valueText(it, l) { return `${it.label} ${sign(l.change, it.d)}${it.unit === "%" ? "%" : " in"}`; }
  tipBody(it) {
    const k = this.k, row = (key, label, unit, d) => {
      const l = levelAt(it, k, key);
      return l ? `<div class="mono">${label} ${l.elev.toFixed(d)}${unit} · ${sign(l.change, d)}${unit} since the storm began${l.latest ? " · latest" : ""}</div>` : "";
    };
    const t = levelAt(it, k, "temp");
    return `<div class="sub">${it.ft ? `${Math.round(it.ft).toLocaleString("en-US")} ft · ` : ""}provisional</div>` +
      row("swe", "snow water", " in", 1) + row("depth", "snow depth", " in", 0) + row("prec", "precipitation", " in", 1) +
      (t ? `<div class="mono">air ${t.elev.toFixed(0)}°F${t.latest ? " · latest" : ""}</div>` : "") +
      row("sm2", "soil 2 in", "%", 0) + row("sm8", "soil 8 in", "%", 0) + row("sm20", "soil 20 in", "%", 0);
  }
  caption(it, hi, lo) { return `${esc(it.key === "swe" ? "snow water" : it.label)}: ${hi.toFixed(it.d)} / ${lo.toFixed(it.d)} ${it.unit} · whole window`; }
}

// soil moisture (volumetric %) at the stations with a working soil sensor
export class SoilMarkers extends SnowMarkers {
  static kind = "soil";
  static pick = soilKey;
  valueText(it, l) { return `soil ${sign(l.change, it.d)}%`; }
}
