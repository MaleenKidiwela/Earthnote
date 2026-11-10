import { place } from "./PlaceLabels.js";
import "./overlay.css";

// Real lake and reservoir levels (USGS, every 15 minutes, sampled at the end of each hour) as markers that follow the
// storm's hour: the change in water-surface elevation since the storm began. Hover one for its record so far.

// Pure: "HOWARD A HANSON RESERVOIR NEAR PALMER, WA" -> "Howard A Hanson Reservoir"; "Bonneville Dam and Lake On
// Columbia River" -> "Bonneville Dam and Lake"
export function shortName(s) {
  const base = s.split(",")[0].split(/\s+(?:near|nr|at|hw|pp|on)\s+/i)[0].replace(/\s+\(.*$/, "");
  return base.toLowerCase().replace(/\b[a-z]/g, c => c.toUpperCase()).replace(/\bLk\b/, "Lake").replace(/\b(And|Of)\b/g, w => w.toLowerCase());
}

// Pure: the level at hour k (or the latest before it, for hours not recorded yet) and its change since the first
// reading in the window, from the site's series `key`. null when nothing is recorded by then.
export function levelAt(site, k, key = "elev") {
  const e = site[key] ?? [], first = e.findIndex(v => v !== null);
  if (first < 0 || k < first) return null;
  let j = Math.min(k, e.length - 1);
  while (j >= 0 && e[j] === null) j--;
  if (j < first) return null;
  return { elev: e[j], change: e[j] - e[first], at: j, latest: j < k, storage: site.storage?.[j] ?? null, first, key };
}

// text from the USGS and CWMS feeds goes into the tooltip's HTML, so it is escaped
export const esc = v => String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const fmtChange = c => `${c > 0.005 ? "+" : c < -0.005 ? "−" : "±"}${Math.abs(c).toFixed(1)} ft`;

// Subclasses (snow stations, wells) set the static `file` and `kind` and override the methods marked "per layer".
export class ReservoirMarkers {
  static file = "rivers/reservoirs.json"; static kind = "";
  // each item keeps its reading for the hour as `now` (not a series name: wells' series is "level")
  constructor(root, scene) {
    Object.assign(this, { root, scene, file: this.constructor.file, kind: this.constructor.kind });
    this.el = document.createElement("div"); this.el.className = `place-layer res-layer ${this.kind}`; root.appendChild(this.el);
    this.tip = document.createElement("div"); this.tip.className = "res-tip"; this.el.appendChild(this.tip);
    this.items = []; this.k = 0; this.visible = true; this._n = 0;
  }

  async load(doc) {
    const res = await fetch(`${doc.base}${this.file}?u=${encodeURIComponent(doc.updated)}`);
    if (!res.ok) return;
    const { sites } = await res.json();
    for (const it of this.items) it.node.remove();
    const P = this.scene.P;
    this.items = sites.filter(s => this.keep(s)).map((s, i) => {
      const node = document.createElement("div"); node.className = `res ${this.kind}`;
      node.innerHTML = `<i></i><span class="n"></span><span class="v mono"></span>`;
      node.addEventListener("pointerenter", () => { this.hover = it; this._tip(); });
      node.addEventListener("pointerleave", () => { if (this.hover === it) { this.hover = null; this.tip.style.opacity = 0; } });
      this.el.appendChild(node);
      const it = this.prepare({ ...s, id: i, short: shortName(s.name), node, x: P.toX(s.lon), z: P.toZ(s.lat), on: false });
      node.querySelector(".n").textContent = it.short;
      return it;
    });
    this.setHour(this.k);
  }

  setHour(k) {
    this.k = k;
    for (const it of this.items) {
      const l = (it.now = levelAt(it, k, it.key ?? "elev")), step = this.step(it);
      it.node.classList.toggle("up", !!l && l.change > step);
      it.node.classList.toggle("down", !!l && l.change < -step);
      it.node.classList.toggle("latest", !!l?.latest);
      it.node.classList.toggle("stuck", !!it.stuck);
      it.node.querySelector(".v").textContent = it.stuck ? "no live data" : l ? this.valueText(it, l) : "—";
      it.w = 22 + (it.short.length + 8) * 6.1;
    }
    if (this.hover) this._tip();
  }

  update() {
    if (!this.visible || this._n++ % 2) return;
    const s = this.scene, dist = s.frame.dist, W = innerWidth, H = innerHeight, cand = [];
    for (const it of this.items) {
      it.cand = false;
      if (dist > 900 || !it.now) continue;
      const [x, y, z] = s.project(it.x, s.elevAt(it.lon, it.lat) * s.e + 0.05, it.z);
      if (!(z < 1 && x > -40 && x < W + 40 && y > -20 && y < H + 20)) continue;
      it.cand = true; it.sx = x; it.sy = y;
      cand.push({ id: it.id, x, y, w: it.w, h: 18, priority: (it.stuck ? 5 : 10) + Math.abs(it.now.change) / this.step(it) * 0.3 });
    }
    const shown = place(cand);
    for (const it of this.items) {
      const on = it.cand && shown.has(it.id);
      if (on) it.node.style.transform = `translate(${Math.round(it.sx)}px, ${Math.round(it.sy)}px)`;
      if (on !== it.on) { it.node.style.opacity = on ? 1 : 0; it.node.style.pointerEvents = on ? "auto" : "none"; it.on = on; }
    }
    if (this.hover) this._tip();
  }

  // per layer: whether a site is drawn; the item with its derived fields; the change that counts as up or down; the
  // marker's value
  keep() { return true; }
  prepare(it) { return it; }
  step() { return 0.3; }
  valueText(it, l) { return fmtChange(l.change); }

  // per layer: the tooltip's lines between the name and the sparkline, and the sparkline's caption
  tipBody(it, l) {
    const stuck = it.stuck ? `<div class="warn">This feed has reported exactly ${l?.elev.toFixed(2)} ft every hour of the window: a stuck or placeholder value, not a measurement.</div>` : "";
    return stuck + (it.stuck ? "" : (l
      ? `<div class="mono">${l.elev.toFixed(2)} ft (${esc(it.datum)}) · ${fmtChange(l.change)} since the storm began${l.latest ? " · latest reading" : ""}</div>` +
        (l.storage !== null ? `<div class="mono">storage ${Math.round(l.storage).toLocaleString("en-US")} acre-ft</div>` : "")
      : `<div>no reading yet</div>`));
  }
  caption(it, hi, lo) { return `${hi.toFixed(1)} / ${lo.toFixed(1)} ft · whole window · provisional`; }

  // the hovered site: its value now, and its record through the window as a sparkline
  _tip() {
    const it = this.hover, l = it?.now;
    if (!it) return;
    const series = it[it.key ?? "elev"];
    const vals = series.map((v, i) => [i, v]).filter(([, v]) => v !== null);
    const lo = Math.min(...vals.map(v => v[1])), hi = Math.max(...vals.map(v => v[1])), n = series.length;
    const X = i => (i / (n - 1)) * 220, Y = v => 44 - ((v - lo) / Math.max(hi - lo, 0.1)) * 40;
    const line = vals.map(([i, v], j) => `${j ? "L" : "M"}${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join("");
    this.tip.innerHTML = `<b>${esc(it.short)}</b><div class="sub">${esc(it.name)} · ${esc(it.source ?? it.src ?? "USGS")}</div>` + this.tipBody(it, l) +
      (vals.length ? `<svg width="220" height="48" aria-hidden="true"><path d="${line}" /><line x1="${X(this.k)}" x2="${X(this.k)}" y1="0" y2="48" /></svg>` +
        `<div class="sub mono">${this.caption(it, hi, lo)}</div>` : "");
    this.tip.style.transform = `translate(${Math.round(it.sx + 12)}px, ${Math.round(it.sy + 14)}px)`;
    this.tip.style.opacity = 1;
  }

  setVisible(on) { this.visible = on; this.el.style.display = on ? "" : "none"; }
  dispose() { this.el.remove(); }
}
