// The rivers layer's data: the reaches (geometry, names, flood thresholds) and hourly flows from the National Water
// Model: its analysis (what the rivers did) and, for hours not analysed yet, a "what if" from its newest forecasts.
// See src/earthnote_data/rivers.py for the files.

export const THRESHOLD_NAMES = ["high water", "2-year flood", "5-year flood", "10-year flood", "25-year flood", "50-year flood"];

// Pure: views into reaches.bin, laid out as rivers.py writes it.
export function parseReaches(meta, buf) {
  const n = meta.count, m = meta.paths;
  let o = 0;
  const take = (Type, count, bytes) => { const a = new Type(buf, o, count); o += bytes; return a; };
  const thr = take(Float32Array, n * 6, n * 24);
  const name = take(Uint16Array, n, (n + (n % 2)) * 2);
  const order = take(Uint8Array, n, Math.ceil(n / 4) * 4);
  const offsets = take(Uint32Array, m + 1, (m + 1) * 4);
  const owner = take(Uint32Array, m, m * 4);
  const coords = take(Float32Array, meta.vertices * 2, meta.vertices * 8);
  return { ...meta, thr, name, order, offsets, owner, coords };
}

export async function loadReaches(doc, fetchImpl = fetch) {
  const base = `${doc.base}rivers/`, v = `?v=${doc.version}`;
  const [meta, buf] = await Promise.all([
    fetchImpl(`${base}reaches.json${v}`).then(r => r.json()),
    fetchImpl(`${base}reaches.bin${v}`).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.arrayBuffer(); }),
  ]);
  return parseReaches(meta, buf);
}

// Pure: flow byte to m3/s (NaN for no data).
export const flowOf = b => (b === 255 ? NaN : 0.05 * (10 ** (b / 40) - 1));

// Pure: how many of a reach's flood thresholds the flow reaches (0 none, 1 high water ... 6 the 50-year flow).
// A threshold of 0 is missing and never reached.
export function category(q, thr, i) {
  let c = 0;
  for (let j = 0; j < 6; j++) { const t = thr[i * 6 + j]; if (t > 0 && q >= t) c = j + 1; }
  return c;
}

export const STALE_HOURS = 2;

// What hour k shows. The analysis hour itself; or — since the analysis posts an hour or two after the radar rain — for
// an hour that has passed without one yet, the latest (up to STALE_HOURS old). Only after the latest analysis, and
// only if `whatIf`, the newest forecast covering the hour: short range (HRRR rain) first, then medium range (GFS).
// So the record is never overwritten by a forecast, and each new analysis hour replaces a what-if hour.
export function riverSource(doc, k, whatIf = true) {
  const rv = doc.rivers;
  if (!rv) return null;
  if (rv.obs.includes(k)) return { type: "obs", k };
  const last = Math.max(-1, ...rv.obs), past = doc.updated && doc.t0 + (k + 1) * 3600e3 <= Date.parse(doc.updated);
  if (k < last) return null;   // a gap in the record stays a gap
  if (past && last >= 0 && k - last <= STALE_HOURS) return { type: "obs", k: last };
  if (!whatIf) return null;
  for (const kind of ["short", "medium"]) {
    const r = rv.whatif?.[kind];
    if (r && k >= r.first && k < r.first + r.count) return { type: "whatif", kind, init: r.init, i: k - r.first };
  }
  return null;
}

// Flow bytes for an analysis hour or a what-if run (all its hours in one file), fetched once.
export class RiverFlows {
  constructor(doc, n, fetchImpl = (...a) => fetch(...a)) { Object.assign(this, { doc, n, fetchImpl }); this.map = new Map(); }
  _get(url) {
    let p = this.map.get(url);
    if (!p) {
      p = this.fetchImpl(url).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.arrayBuffer(); })
        .catch(e => { this.map.delete(url); throw e; });
      this.map.set(url, p);
      if (this.map.size > 80) this.map.delete(this.map.keys().next().value);
    }
    return p;
  }
  async get(src) {
    const base = `${this.doc.base}rivers/`, v = `?v=${this.doc.version}`;
    if (src.type === "obs") return new Uint8Array(await this._get(`${base}obs/k${String(src.k).padStart(3, "0")}.bin${v}`));
    return new Uint8Array(await this._get(`${base}whatif/${src.kind}_${src.init}.bin${v}`), src.i * this.n, this.n);
  }
}
