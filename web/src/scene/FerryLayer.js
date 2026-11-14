import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import * as THREE from "three";
import { place } from "../overlay/PlaceLabels.js";
import { esc } from "../overlay/ReservoirMarkers.js";
import "../overlay/overlay.css";

// Ferries for the storm's hour: every WSF and BC Ferries route as a faint track on the water; a route with a
// disruption in effect is drawn in its status's colour, with a ship on it labelled with what happened and why. The
// newest notice on a route sets its status (a cancellation, then "resuming"). Hover a ship for the notices.
// Recorded hourly (WSF alerts, BC Ferries notices; before Nov 14 BC Ferries from news reports); see ferries.py.

export const FERRY_COLORS = { cancelled: "#ff4d4f", "out of service": "#ff4d4f", "at risk": "#ffa53a", delayed: "#f6d04d", resuming: "#5fd38d" };
export const FERRY_LABELS = { cancelled: "sailings cancelled", "out of service": "out of service", "at risk": "at risk of cancellation", delayed: "delayed", resuming: "resuming" };
export const CAUSE_LABELS = { weather: "wind and seas", tide: "tide", mechanical: "mechanical", crew: "crew", emergency: "emergency" };
const SOURCE = { wsf: "Washington State Ferries alert", bcf: "BC Ferries service notice", news: "News report" };
const BASE = "#14304a";   // dark on the light water, like a chart's ferry lines
const PT = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
const SHIP = `<svg viewBox="0 0 20 14" aria-hidden="true"><path d="M2 8h16l-2.6 4.2H4.8z"/><path d="M5 8V5.2h8.6L15 8z" opacity=".8"/><path d="M8 5.2V3h2.6v2.2z" opacity=".7"/></svg>`;
const WIND = `<svg viewBox="0 0 16 12" aria-hidden="true"><path d="M1 4h9a2.2 2.2 0 1 0-2.2-2.2M1 7.5h12a2 2 0 1 1-2 2M1 11h6"/></svg>`;

// Pure: the point halfway along a line of [lon, lat] (by length in degrees, near enough for a ferry crossing).
export function midpoint(line) {
  const d = [0];
  for (let i = 1; i < line.length; i++) d.push(d[i - 1] + Math.hypot((line[i][0] - line[i - 1][0]) * Math.cos(line[i][1] * Math.PI / 180), line[i][1] - line[i - 1][1]));
  const half = d[d.length - 1] / 2, i = Math.max(1, d.findIndex(x => x >= half));
  const f = (half - d[i - 1]) / ((d[i] - d[i - 1]) || 1);
  return [line[i - 1][0] + f * (line[i][0] - line[i - 1][0]), line[i - 1][1] + f * (line[i][1] - line[i - 1][1])];
}

// Pure: each route's state for the hour: {status, cause, items} from its newest notice; notices with no drawn route
// are returned under "".
export function routeStates(frame) {
  const by = new Map();
  for (const it of frame?.items ?? []) {
    for (const r of it.routes.length ? it.routes : [""]) {
      const s = by.get(r) ?? { items: [] };
      s.items.push(it);
      if (!s.newest || it.posted > s.newest.posted) s.newest = it;
      by.set(r, s);
    }
  }
  for (const s of by.values()) {
    s.status = s.newest.status;
    s.cause = s.newest.cause ?? s.items.find(i => i.cause)?.cause ?? null;
    s.items.sort((a, b) => b.posted - a.posted);
  }
  return by;
}

class Tracks {
  constructor(scene, color, width, opacity, order) {
    this.mat = new LineMaterial({ color, linewidth: width, opacity, transparent: true, depthTest: false, vertexColors: color === null });
    this.geometry = new LineSegmentsGeometry();
    this.obj = new LineSegments2(this.geometry, this.mat);
    this.obj.frustumCulled = false; this.obj.renderOrder = order; this.obj.visible = false; this.n = 0;
    scene.add(this.obj);
  }
  set(segs, colors) {
    this.n = segs.length;
    if (!segs.length) return;
    this.geometry.dispose(); this.geometry = new LineSegmentsGeometry(); this.obj.geometry = this.geometry;
    this.geometry.setPositions(segs);
    if (colors) this.geometry.setColors(colors);
  }
  dispose(scene) { scene.remove(this.obj); this.geometry.dispose(); this.mat.dispose(); }
}

export class FerryLayer {
  constructor(scene3, root, s) {
    Object.assign(this, { scene3, s, P: s.P });
    this.base = new Tracks(scene3, BASE, 1.6, 0.7, 9);
    this.casing = new Tracks(scene3, "#101012", 5.5, 0.6, 10);
    this.hot = new Tracks(scene3, null, 3, 0.95, 11);
    this.el = document.createElement("div"); this.el.className = "place-layer res-layer"; root.appendChild(this.el);
    this.tip = document.createElement("div"); this.tip.className = "res-tip ferry-tip"; this.el.appendChild(this.tip);
    this.routes = new Map(); this.items = []; this.visible = true; this._n = 0; this.states = new Map();
  }

  async load(doc) {
    const res = await fetch(`${doc.base}ferries/routes.json?v=${doc.version}&u=${encodeURIComponent(doc.updated)}`);
    if (!res.ok) return;
    const P = this.P;
    for (const r of await res.json()) {
      const longest = r.lines.reduce((a, b) => (b.length > a.length ? b : a), r.lines[0]);
      const segs = [];
      for (const line of r.lines) for (let i = 1; i < line.length; i++) segs.push(P.toX(line[i - 1][0]), 0, P.toZ(line[i - 1][1]), P.toX(line[i][0]), 0, P.toZ(line[i][1]));
      const [lon, lat] = midpoint(longest);
      this.routes.set(r.id, { ...r, segs, x: P.toX(lon), z: P.toZ(lat) });
    }
    this.base.set([...this.routes.values()].flatMap(r => r.segs));
    this.set(this.frame ?? null);
  }

  // a frame from ferries/k###.json, or null
  set(frame) {
    this.frame = frame;
    this.states = routeStates(frame);
    const segs = [], colors = [], c = new THREE.Color();
    for (const it of this.items) it.node.remove();
    this.items = [];
    for (const [id, st] of this.states) {
      const r = this.routes.get(id);
      if (!r) continue;
      c.set(FERRY_COLORS[st.status]);
      segs.push(...r.segs);
      for (let i = 0; i < r.segs.length / 3; i++) colors.push(c.r, c.g, c.b);
      const node = document.createElement("div");
      node.className = "ferry"; node.dataset.status = st.status;
      node.classList.toggle("weather", st.cause === "weather");
      node.innerHTML = `${SHIP}<span class="n">${esc(r.name)}</span><span class="v">${esc(st.status)}${st.cause === "weather" ? WIND : st.cause ? ` · ${esc(CAUSE_LABELS[st.cause])}` : ""}</span>`;
      const it = { id: this.items.length, r, st, node, on: false, w: 40 + (r.name.length + st.status.length + 4) * 6 };
      node.addEventListener("pointerenter", () => { this.hover = it; this._tip(); });
      node.addEventListener("pointerleave", () => { if (this.hover === it) { this.hover = null; this.tip.style.opacity = 0; } });
      node.addEventListener("click", () => { const u = st.items.find(x => x.url)?.url; if (u) window.open(u, "_blank", "noopener"); });
      this.el.appendChild(node);
      this.items.push(it);
    }
    this.casing.set(segs); this.hot.set(segs, colors);
    this.setVisible(this.visible);
    if (this.hover) { this.hover = this.items.find(i => i.r.id === this.hover.r.id) ?? null; if (!this.hover) this.tip.style.opacity = 0; }
  }

  update() {
    if (!this.visible) return;
    const s = this.s, y = 0.02 + 0.05 * s.U.flat.value;
    for (const t of [this.base, this.casing, this.hot]) { t.obj.position.y = y; t.mat.resolution.set(innerWidth, innerHeight); }
    if (this._n++ % 2) return;
    const W = innerWidth, H = innerHeight, cand = [];
    for (const it of this.items) {
      const [x, sy, z] = s.project(it.r.x, y, it.r.z);
      it.cand = z < 1 && x > -40 && x < W + 40 && sy > -20 && sy < H + 20;
      if (!it.cand) continue;
      it.sx = x; it.sy = sy;
      cand.push({ id: it.id, x, y: sy, w: it.w, h: 20, priority: (it.st.cause === "weather" ? 20 : 0) + (5 - Object.keys(FERRY_COLORS).indexOf(it.st.status)) });
    }
    const shown = place(cand);
    for (const it of this.items) {
      const on = it.cand && shown.has(it.id);
      if (on) it.node.style.transform = `translate(${Math.round(it.sx)}px, ${Math.round(it.sy)}px)`;
      if (on !== it.on) { it.node.style.opacity = on ? 1 : 0; it.node.style.pointerEvents = on ? "auto" : "none"; it.on = on; }
    }
    if (this.hover) this._tip();
  }

  // the hovered route: its notices for the hour, newest first, each with its source
  _tip() {
    const it = this.hover;
    if (!it) return;
    const notice = n => `<div class="fn"><div class="st"><i style="background:${FERRY_COLORS[n.status]}"></i>${esc(FERRY_LABELS[n.status])}${n.cause ? ` · ${esc(CAUSE_LABELS[n.cause])}` : ""}</div>` +
      `<div class="t">${esc(n.title)}</div>${n.text && n.text !== n.title ? `<div class="x">${esc(n.text.length > 280 ? n.text.slice(0, 277) + "…" : n.text)}</div>` : ""}` +
      `<div class="sub">${esc(n.src === "news" ? `News report · ${n.outlet}` : `${SOURCE[n.src]} · posted ${PT.format(n.posted)}`)}</div></div>`;
    this.tip.innerHTML = `<b>${esc(it.r.name)}</b><div class="sub">${it.r.op === "wsf" ? "Washington State Ferries" : "BC Ferries"}</div>` +
      it.st.items.slice(0, 4).map(notice).join("") + (it.st.items.some(n => n.url) ? `<div class="sub">click the ship for the source</div>` : "");
    this.tip.style.transform = `translate(${Math.round(Math.min(it.sx + 12, innerWidth - 310))}px, ${Math.round(Math.min(it.sy + 14, innerHeight - 260))}px)`;
    this.tip.style.opacity = 1;
  }

  setVisible(on) {
    this.visible = on; this.el.style.display = on ? "" : "none";
    for (const t of [this.base, this.casing, this.hot]) t.obj.visible = on && t.n > 0;
  }
  dispose() { for (const t of [this.base, this.casing, this.hot]) t.dispose(this.scene3); this.el.remove(); }
}
