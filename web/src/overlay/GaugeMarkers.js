import { place } from "./PlaceLabels.js";
import { esc } from "./ReservoirMarkers.js";
import "./overlay.css";

// NWS river gauges on the storm's hour: the measured stage (or, for hours not measured yet and if asked, the official
// river forecast) against the gauge's flood categories, with the NWS's written impact for that level on hover.

export const CATS = ["action", "minor", "moderate", "major"];
export const CAT_LABELS = { action: "action stage", minor: "minor flood", moderate: "moderate flood", major: "major flood" };
export const CAT_COLORS = { normal: "#6fb4e8", action: "#f2cf3d", minor: "#f39431", moderate: "#e2483a", major: "#b03fd0" };

// Pure: the highest category a stage reaches, or null.
export function categoryOf(site, stage) {
  let c = null;
  for (const n of CATS) if (site.cats[n] !== undefined && stage >= site.cats[n]) c = n;
  return c;
}

// Pure: the stage shown at hour k. The measurement; for a gap inside the record, nothing; after the last measurement,
// the forecast (if whatIf) or, within 2 hours, the last measurement.
export function stageAt(site, k, whatIf = true) {
  if (site.obs[k] !== null && site.obs[k] !== undefined) return { stage: site.obs[k], type: "obs" };
  let last = -1;
  for (let j = site.obs.length - 1; j >= 0; j--) if (site.obs[j] !== null) { last = j; break; }
  if (k < last) return null;
  if (whatIf && site.fc[k] !== null && site.fc[k] !== undefined) return { stage: site.fc[k], type: "fc" };
  if (last >= 0 && k - last <= 2) return { stage: site.obs[last], type: "obs", latest: true };
  return null;
}

// Pure: the NWS impact statement for a stage: the highest one it reaches, or else the next one above it.
export function impactFor(site, stage) {
  let now = null, next = null;
  for (const [s, text] of site.impacts) { if (stage >= s) now = { stage: s, text }; else if (!next) next = { stage: s, text }; }
  return { now, next };
}

export class GaugeMarkers {
  constructor(root, scene) {
    Object.assign(this, { root, scene });
    this.el = document.createElement("div"); this.el.className = "place-layer res-layer"; root.appendChild(this.el);
    this.tip = document.createElement("div"); this.tip.className = "res-tip gauge-tip"; this.el.appendChild(this.tip);
    this.items = []; this.k = 0; this.whatIf = true; this.visible = true; this._n = 0; this.counts = {};
  }

  async load(doc) {
    const res = await fetch(`${doc.base}rivers/gauges.json?u=${encodeURIComponent(doc.updated)}`);
    if (!res.ok) return;
    const { sites } = await res.json();
    for (const it of this.items) it.node.remove();
    const P = this.scene.P;
    this.items = sites.map((s, i) => {
      const node = document.createElement("div"); node.className = "gauge";
      node.innerHTML = `<i></i><span class="n"></span><span class="v mono"></span>`;
      const it = { ...s, id: i, node, x: P.toX(s.lon), z: P.toZ(s.lat), on: false };
      node.addEventListener("pointerenter", () => { this.hover = it; this._tip(); });
      node.addEventListener("pointerleave", () => { if (this.hover === it) { this.hover = null; this.tip.style.opacity = 0; } });
      node.querySelector(".n").textContent = s.name.replace(/\s+River\b/, " R.").replace(/\s+near\s+/i, " nr ").replace(/\s+at\s+/i, " at ");
      this.el.appendChild(node);
      return it;
    });
    this.setHour(this.k, this.whatIf);
  }

  setHour(k, whatIf = this.whatIf) {
    this.k = k; this.whatIf = whatIf; this.counts = { action: 0, minor: 0, moderate: 0, major: 0 };
    for (const it of this.items) {
      const v = (it.value = stageAt(it, k, whatIf)), c = (it.cat = v ? categoryOf(it, v.stage) : null);
      if (c) this.counts[c]++;
      it.node.dataset.cat = c ?? "normal";
      it.node.classList.toggle("fc", v?.type === "fc");
      it.node.classList.toggle("none", !v);
      it.node.querySelector(".v").textContent = v ? `${v.stage.toFixed(1)} ft${c ? ` · ${c}` : ""}` : "—";
      it.w = 22 + (it.node.querySelector(".n").textContent.length + 14) * 6;
    }
    if (this.hover) this._tip();
  }

  update() {
    if (!this.visible || this._n++ % 2) return;
    const s = this.scene, dist = s.frame.dist, W = innerWidth, H = innerHeight, cand = [];
    for (const it of this.items) {
      it.cand = false;
      // flooding gauges show from far out, the rest as you close in
      if (!it.value || (!it.cat && dist > 260) || dist > 2600) continue;
      const [x, y, z] = s.project(it.x, s.elevAt(it.lon, it.lat) * s.e + 0.05, it.z);
      if (!(z < 1 && x > -40 && x < W + 40 && y > -20 && y < H + 20)) continue;
      it.cand = true; it.sx = x; it.sy = y;
      cand.push({ id: it.id, x, y, w: it.w, h: 18, priority: 20 + (it.cat ? 10 * (CATS.indexOf(it.cat) + 1) : 0) });
    }
    const shown = place(cand);
    for (const it of this.items) {
      const on = it.cand && shown.has(it.id);
      if (on) it.node.style.transform = `translate(${Math.round(it.sx)}px, ${Math.round(it.sy)}px)`;
      if (on !== it.on) { it.node.style.opacity = on ? 1 : 0; it.node.style.pointerEvents = on ? "auto" : "none"; it.on = on; }
    }
    if (this.hover) this._tip();
  }

  // the hovered gauge: stage, category, the NWS impact statement, and its hydrograph with the flood stages
  _tip() {
    const it = this.hover;
    if (!it) return;
    const v = it.value, n = it.obs.length;
    const all = [...it.obs, ...it.fc].filter(x => x !== null);
    const stages = Object.values(it.cats);
    const lo = Math.min(...all), hi = Math.max(...all, it.cats.minor ?? it.cats.action ?? -Infinity);
    const X = i => (i / (n - 1)) * 220, Y = s => 50 - ((s - lo) / Math.max(hi - lo, 0.5)) * 46;
    const path = arr => arr.map((s, i) => (s === null ? null : [i, s])).filter(Boolean).map(([i, s], j) => `${j ? "L" : "M"}${X(i).toFixed(1)},${Y(s).toFixed(1)}`).join("");
    const lines = CATS.filter(c => it.cats[c] !== undefined && it.cats[c] <= hi + 0.01)
      .map(c => `<line class="cat" stroke="${CAT_COLORS[c]}" x1="0" x2="220" y1="${Y(it.cats[c]).toFixed(1)}" y2="${Y(it.cats[c]).toFixed(1)}" />`).join("");
    const imp = v ? impactFor(it, v.stage) : null;
    const when = v?.type === "fc" ? `NWS forecast issued ${esc(it.fcIssued?.replace("T", " ") ?? "")} UTC` : v?.latest ? "latest measurement" : "measured";
    this.tip.innerHTML = `<b>${esc(it.name)}</b><div class="sub">NWS ${esc(it.lid)}${it.usgs ? ` · USGS ${esc(it.usgs)}` : ""}</div>` +
      (v ? `<div class="mono">${v.stage.toFixed(2)} ft · ${when}</div>` +
        `<div class="cat-line"><i style="background:${CAT_COLORS[it.cat ?? "normal"]}"></i>${it.cat ? CAT_LABELS[it.cat] : "below flood stages"}</div>` : "<div>no reading for this hour</div>") +
      `<div class="sub mono">${CATS.filter(c => it.cats[c] !== undefined).map(c => `${c} ${it.cats[c]}`).join(" · ")} ft</div>` +
      (imp?.now ? `<div class="impact"><b>At ${imp.now.stage} ft:</b> ${esc(imp.now.text)}</div>` : "") +
      (imp?.next ? `<div class="impact next"><b>At ${imp.next.stage} ft${v ? ` (${(imp.next.stage - v.stage).toFixed(1)} ft higher)` : ""}:</b> ${esc(imp.next.text)}</div>` : "") +
      `<svg width="220" height="54" aria-hidden="true">${lines}<path d="${path(it.obs)}" /><path class="fc" d="${path(it.fc)}" /><line x1="${X(this.k)}" x2="${X(this.k)}" y1="0" y2="54" /></svg>` +
      (it.crests?.length ? `<div class="sub mono">record ${it.crests[0][0]} ft (${esc(it.crests[0][1])})</div>` : "");
    this.tip.style.transform = `translate(${Math.round(Math.min(it.sx + 12, innerWidth - 300))}px, ${Math.round(Math.min(it.sy + 14, innerHeight - 260))}px)`;
    this.tip.style.opacity = 1;
  }

  setVisible(on) { this.visible = on; this.el.style.display = on ? "" : "none"; }
  dispose() { this.el.remove(); }
}
