// The storm layer's data: event.json, which source covers each hour, and the PNG frames decoded to numbers.
// Frame k is the hour ending at start + (k + 1) h. See src/earthnote_data/event.py for how the frames are made.

export const EVENTS_BASE = import.meta.env.VITE_EVENTS_BASE || `${import.meta.env.BASE_URL}events/`;   // R2 when built for the site

export async function loadEvent(key, base = EVENTS_BASE, fetchImpl = fetch) {
  const res = await fetchImpl(`${base}${key}/event.json`, { cache: "no-cache" });
  if (!res.ok || res.headers?.get("content-type")?.includes("html")) return null;
  const doc = await res.json();
  doc.base = `${base}${key}/`;
  doc.t0 = Date.parse(doc.start);
  doc.runList = Object.fromEntries(Object.entries(doc.runs).map(([m, runs]) => [m, Object.entries(runs)
    .map(([init, r]) => ({ model: m, init, time: initTime(init), frames: new Set(r.frames), complete: r.complete }))
    .sort((a, b) => a.time - b.time)]));
  doc.obsRain = new Set(Object.keys(doc.obs.rain).map(Number));
  doc.obsMet = new Set(doc.obs.met);
  doc.obsGust = new Set(doc.obs.gust ?? []);
  doc.lastObs = Math.max(-1, ...doc.obsRain);
  return doc;
}

export const initTime = s => Date.UTC(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8), +s.slice(8, 10));
export const frameTime = (doc, k) => doc.t0 + (k + 1) * 3600e3;   // end of the hour

// Which source covers hour k. sel: {mode: "blend", model} uses the observation where there is one, else the newest
// run of `model` that reaches hour k; {mode: "run", model, init} uses that run only. kind: "rain", "met" or "gust".
export function sourceAt(doc, k, sel, kind = "rain") {
  const obs = { rain: doc.obsRain, met: doc.obsMet, gust: doc.obsGust }[kind];
  if (sel.mode === "blend" && obs?.has(k)) return { type: "obs" };
  const runs = doc.runList[sel.model] ?? [];
  if (sel.mode === "run") {
    const r = runs.find(x => x.init === sel.init);
    return r?.frames.has(k) ? { type: "fc", model: sel.model, init: r.init } : null;
  }
  for (let i = runs.length - 1; i >= 0; i--) if (runs[i].frames.has(k)) return { type: "fc", model: sel.model, init: runs[i].init };
  return null;
}

// The window's version is in every URL (frame k means a different hour in another window), and an observed hour
// also carries its pass, since Pass 2 replaces Pass 1 under the same name.
export function frameUrl(doc, src, k, kind) {
  const name = `${kind}/k${String(k).padStart(3, "0")}.png?v=${doc.version ?? doc.start}`;
  if (src.type === "obs") return `${doc.base}obs/${name}${kind === "rain" ? `&p=${doc.obs.rain[k] ?? ""}` : ""}`;
  return `${doc.base}fc/${src.model}/${src.init}/${name}`;
}

export function gridOf(doc, src, kind) {
  if (kind === "gust") return doc.grids.gust;   // every source on the one grid
  const key = src.type === "obs" ? (kind === "rain" ? doc.obs.rainGrid : doc.obs.metGrid) : doc.models[src.model][kind === "rain" ? "rainGrid" : "metGrid"];
  return doc.grids[key];
}

// Rain frames: q = round(25 * sqrt(mm)), 255 = no data.
export function rainFromBytes(rgba, n) {
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) { const q = rgba[i * 4]; out[i] = q === 255 ? NaN : (q / 25) ** 2; }
  return out;
}

// Pure: bilinear resample of a cell-centred field between two grids on the same box (NaN-aware: NaN neighbours are
// skipped, NaN if all four are).
export function resample(src, sg, dg) {
  if (sg.cols === dg.cols && sg.rows === dg.rows) return src;
  const out = new Float32Array(dg.cols * dg.rows);
  for (let r = 0; r < dg.rows; r++) {
    const lat = dg.north - (r + 0.5) * dg.cell, fr = Math.min(sg.rows - 1, Math.max(0, (sg.north - lat) / sg.cell - 0.5));
    const r0 = Math.min(Math.floor(fr), sg.rows - 2), tr = fr - r0;
    for (let c = 0; c < dg.cols; c++) {
      const lon = dg.west + (c + 0.5) * dg.cell, fc = Math.min(sg.cols - 1, Math.max(0, (lon - sg.west) / sg.cell - 0.5));
      const c0 = Math.min(Math.floor(fc), sg.cols - 2), tc = fc - c0;
      let sum = 0, wsum = 0;
      const add = (rr, cc, w) => { const v = src[rr * sg.cols + cc]; if (!Number.isNaN(v) && w > 0) { sum += v * w; wsum += w; } };
      add(r0, c0, (1 - tr) * (1 - tc)); add(r0, c0 + 1, (1 - tr) * tc); add(r0 + 1, c0, tr * (1 - tc)); add(r0 + 1, c0 + 1, tr * tc);
      out[r * dg.cols + c] = wsum > 0 ? sum / wsum : NaN;
    }
  }
  return out;
}

// Decode a PNG frame to RGBA bytes without colour management (the values are data, not colours).
export async function decodePng(url, fetchImpl = fetch) {
  const res = await fetchImpl(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const bmp = await createImageBitmap(await res.blob(), { colorSpaceConversion: "none", premultiplyAlpha: "none" });
  const c = typeof OffscreenCanvas !== "undefined" ? new OffscreenCanvas(bmp.width, bmp.height) : Object.assign(document.createElement("canvas"), { width: bmp.width, height: bmp.height });
  const ctx = c.getContext("2d", { willReadFrequently: true, colorSpace: "srgb" });
  ctx.drawImage(bmp, 0, 0);
  const { width, height } = bmp, data = ctx.getImageData(0, 0, width, height).data;
  bmp.close?.();   // (a closed bitmap reports 0 x 0)
  return { width, height, data };
}

// Frames by URL, decoded once; the oldest are dropped past `cap`.
export class FrameCache {
  constructor(cap = 600, decode = decodePng) { this.cap = cap; this.decode = decode; this.map = new Map(); }
  get(url) {
    let p = this.map.get(url);
    if (p) { this.map.delete(url); this.map.set(url, p); return p; }
    p = this.decode(url).catch(e => { this.map.delete(url); throw e; });
    this.map.set(url, p);
    while (this.map.size > this.cap) this.map.delete(this.map.keys().next().value);
    return p;
  }
}

// Hourly rain (mm) and accumulation since the window's start (or a run's first hour) on the fine rain grid.
export class RainSeries {
  constructor(doc, cache) { Object.assign(this, { doc, cache }); this.checkpoints = new Map(); }

  async hourly(k, sel) {
    const src = sourceAt(this.doc, k, sel, "rain");
    if (!src) return null;
    const g = gridOf(this.doc, src, "rain"), f = await this.cache.get(frameUrl(this.doc, src, k, "rain"));
    return { src, mm: resample(rainFromBytes(f.data, g.cols * g.rows), g, this.doc.grids.rain) };
  }

  // Sum of hours [first, k], where first is 0 in blend mode and the run's first hour in run mode. Checkpoints every
  // 12 hours make scrubbing cheap; they are keyed by the selection, since each selection is its own series.
  async accumulated(k, sel) {
    const g = this.doc.grids.rain, n = g.cols * g.rows, key = JSON.stringify(sel);
    let cps = this.checkpoints.get(key);
    if (!cps) { cps = new Map(); this.checkpoints.set(key, cps); }
    const first = sel.mode === "run" ? Math.min(...(this.doc.runList[sel.model].find(r => r.init === sel.init)?.frames ?? [0])) : 0;
    if (k < first) return null;
    let from = first, sum = new Float32Array(n), seen = new Uint8Array(n);
    for (let c = Math.floor(k / 12) * 12; c >= first; c -= 12) {
      const cp = cps.get(c);
      if (cp && c <= k) { sum = cp.sum.slice(); seen = cp.seen.slice(); from = c + 1; break; }
    }
    for (let j = from; j <= k; j++) {
      const h = await this.hourly(j, sel);
      if (h) for (let i = 0; i < n; i++) { const v = h.mm[i]; if (!Number.isNaN(v)) { sum[i] += v; seen[i] = 1; } }
      if (j % 12 === 0) cps.set(j, { sum: sum.slice(), seen: seen.slice() });
    }
    for (let i = 0; i < n; i++) if (!seen[i]) sum[i] = NaN;
    return { mm: sum, first };
  }
}

// Pure: wind (m/s) and temperature (°C) from met bytes; null where there is no data.
export const metAt = (data, i) => (data[i * 4 + 3] === 0 ? null :
  { u: (data[i * 4] - 128) / 4, v: (data[i * 4 + 1] - 128) / 4, t: data[i * 4 + 2] / 4 - 30 });

const parts = (fmt, ms) => Object.fromEntries(fmt.formatToParts(ms).map(p => [p.type, p.value]));
const PT = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", weekday: "short", month: "short", day: "numeric", hour: "numeric", hour12: true, timeZoneName: "short" });
const UT = new Intl.DateTimeFormat("en-US", { timeZone: "UTC", month: "short", day: "numeric", hour: "2-digit", hourCycle: "h23" });
// "Mon Nov 9 · 3 AM PST"
export const pacific = ms => { const p = parts(PT, ms); return `${p.weekday} ${p.month} ${p.day} · ${p.hour} ${p.dayPeriod} ${p.timeZoneName}`; };
// "Nov 9 11:00 UTC"
export const utc = ms => { const p = parts(UT, ms); return `${p.month} ${p.day} ${p.hour}:00 UTC`; };
// a model run's start: "Nov 9 06z"
export const runLabel = init => { const p = parts(UT, initTime(init)); return `${p.month} ${p.day} ${p.hour}z`; };
