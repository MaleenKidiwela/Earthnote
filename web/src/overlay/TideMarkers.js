import { place } from "./PlaceLabels.js";
import { esc } from "./ReservoirMarkers.js";
import "./overlay.css";

// NOAA tide gauges on the storm's hour: the observed water level (ft above MLLW), the predicted tide, and the
// difference — the storm surge — graded against the station's coastal flood levels. Hours not observed yet show the
// predicted tide alone (astronomical, not a weather forecast).

const LEVELS = ["minor", "moderate", "major"];

// Pure: the level at hour k: observed (with surge) where measured, else the predicted tide for hours ahead.
export function tideAt(site, k) {
  const o = site.obs[k], p = site.pred[k];
  if (o !== null && o !== undefined) return { level: o, pred: p, surge: p === null || p === undefined ? null : o - p, type: "obs" };
  let last = -1;
  for (let j = site.obs.length - 1; j >= 0; j--) if (site.obs[j] !== null) { last = j; break; }
  if (k > last && p !== null && p !== undefined) return { level: p, pred: p, surge: null, type: "pred" };
  return null;
}

export const floodOf = (site, level) => { let c = null; for (const n of LEVELS) if (site.flood[n] !== undefined && level >= site.flood[n]) c = n; return c; };
const signed = v => `${v >= 0.05 ? "+" : v <= -0.05 ? "−" : "±"}${Math.abs(v).toFixed(1)}`;

export class TideMarkers {
  constructor(root, scene) {
    Object.assign(this, { root, scene });
    this.el = document.createElement("div"); this.el.className = "place-layer res-layer"; root.appendChild(this.el);
    this.tip = document.createElement("div"); this.tip.className = "res-tip gauge-tip"; this.el.appendChild(this.tip);
    this.items = []; this.k = 0; this.visible = true; this._n = 0; this.maxSurge = null;
  }

  async load(doc) {
    const res = await fetch(`${doc.base}sea/tides.json?u=${encodeURIComponent(doc.updated)}`);
    if (!res.ok) return;
    const { sites } = await res.json();
    for (const it of this.items) it.node.remove();
    const P = this.scene.P;
    this.items = sites.map((s, i) => {
      const node = document.createElement("div"); node.className = "gauge tide";
      node.innerHTML = `<i></i><span class="n"></span><span class="v mono"></span>`;
      const it = { ...s, id: i, node, x: P.toX(s.lon), z: P.toZ(s.lat), on: false };
      node.addEventListener("pointerenter", () => { this.hover = it; this._tip(); });
      node.addEventListener("pointerleave", () => { if (this.hover === it) { this.hover = null; this.tip.style.opacity = 0; } });
      node.querySelector(".n").textContent = s.name.split(",")[0];
      this.el.appendChild(node);
      return it;
    });
    this.setHour(this.k);
  }

  setHour(k) {
    this.k = k; this.maxSurge = null;
    for (const it of this.items) {
      const t = (it.value = tideAt(it, k)), c = (it.cat = t ? floodOf(it, t.level) : null);
      if (t?.surge !== null && t?.surge !== undefined && (!this.maxSurge || t.surge > this.maxSurge.surge)) this.maxSurge = { surge: t.surge, name: it.name };
      it.node.dataset.cat = c ?? "normal";
      it.node.classList.toggle("fc", t?.type === "pred");
      it.node.querySelector(".v").textContent = t ? `${t.level.toFixed(1)} ft${t.surge !== null ? ` · surge ${signed(t.surge)}` : ""}` : "—";
      it.w = 22 + (it.node.querySelector(".n").textContent.length + 20) * 6;
    }
    if (this.hover) this._tip();
  }

  update() {
    if (!this.visible || this._n++ % 2) return;
    const s = this.scene, dist = s.frame.dist, W = innerWidth, H = innerHeight, cand = [];
    for (const it of this.items) {
      it.cand = false;
      if (!it.value || dist > 1500) continue;
      const [x, y, z] = s.project(it.x, 0.05, it.z);
      if (!(z < 1 && x > -40 && x < W + 40 && y > -20 && y < H + 20)) continue;
      it.cand = true; it.sx = x; it.sy = y;
      cand.push({ id: it.id, x, y, w: it.w, h: 18, priority: 25 + (it.cat ? 10 * (LEVELS.indexOf(it.cat) + 1) : 0) + Math.abs(it.value.surge ?? 0) });
    }
    const shown = place(cand);
    for (const it of this.items) {
      const on = it.cand && shown.has(it.id);
      if (on) it.node.style.transform = `translate(${Math.round(it.sx)}px, ${Math.round(it.sy)}px)`;
      if (on !== it.on) { it.node.style.opacity = on ? 1 : 0; it.node.style.pointerEvents = on ? "auto" : "none"; it.on = on; }
    }
    if (this.hover) this._tip();
  }

  // the hovered gauge: level, predicted tide, surge, flood levels, and the window's record against the prediction
  _tip() {
    const it = this.hover;
    if (!it) return;
    const t = it.value, n = it.pred.length, all = [...it.obs, ...it.pred].filter(v => v !== null);
    const lo = Math.min(...all), hi = Math.max(...all, it.flood.minor ?? -Infinity);
    const X = i => (i / (n - 1)) * 220, Y = v => 50 - ((v - lo) / Math.max(hi - lo, 0.5)) * 46;
    const path = arr => arr.map((v, i) => (v === null ? null : [i, v])).filter(Boolean).map(([i, v], j) => `${j ? "L" : "M"}${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join("");
    const lines = LEVELS.filter(c => it.flood[c] !== undefined && it.flood[c] <= hi + 0.01)
      .map(c => `<line class="cat" stroke="${{ minor: "#f39431", moderate: "#e2483a", major: "#b03fd0" }[c]}" x1="0" x2="220" y1="${Y(it.flood[c]).toFixed(1)}" y2="${Y(it.flood[c]).toFixed(1)}" />`).join("");
    this.tip.innerHTML = `<b>${esc(it.name)}</b><div class="sub">NOAA tide gauge ${esc(it.id)} · ft above MLLW</div>` +
      (t ? `<div class="mono">${t.type === "obs" ? "observed" : "predicted tide"} ${t.level.toFixed(2)} ft` +
        (t.type === "obs" && t.pred !== null ? ` · predicted ${t.pred.toFixed(2)} · surge ${signed(t.surge)} ft` : "") + `</div>` : "<div>no reading for this hour</div>") +
      `<div class="cat-line">${it.cat ? `coastal flooding: ${it.cat}` : "below coastal flood levels"}</div>` +
      (LEVELS.some(c => it.flood[c] !== undefined) ? `<div class="sub mono">${LEVELS.filter(c => it.flood[c] !== undefined).map(c => `${c} ${it.flood[c]}`).join(" · ")} ft (${esc(it.flood.source ?? "")})</div>` : `<div class="sub">no flood levels set for this station</div>`) +
      `<svg width="220" height="54" aria-hidden="true">${lines}<path class="fc" d="${path(it.pred)}" /><path d="${path(it.obs)}" /><line x1="${X(this.k)}" x2="${X(this.k)}" y1="0" y2="54" /></svg>` +
      `<div class="sub">solid: observed · dashed: predicted tide</div>`;
    this.tip.style.transform = `translate(${Math.round(Math.min(it.sx + 12, innerWidth - 300))}px, ${Math.round(Math.min(it.sy + 14, innerHeight - 240))}px)`;
    this.tip.style.opacity = 1;
  }

  setVisible(on) { this.visible = on; this.el.style.display = on ? "" : "none"; }
  dispose() { this.el.remove(); }
}
