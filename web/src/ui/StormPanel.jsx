import { useEffect, useMemo, useRef, useState } from "react";
import { FrameCache, RainSeries, frameTime, frameUrl, gridOf, initTime, pacific, runLabel, sourceAt, utc } from "../data/event.js";
import { riverSource } from "../data/rivers.js";
import { FILLS, RAIN_COLORS, TEMP_COLORS } from "../scene/AtmosphereLayer.js";
import { RIVER_COLORS, RIVER_LABELS } from "../scene/RiverLayer.js";
import { CATS, CAT_COLORS } from "../overlay/GaugeMarkers.js";
import { GUST_COLORS, GUST_MPH } from "../scene/GustField.js";
import { OUTAGE_COLOR } from "../scene/PowerLayer.js";
import { PASS_COLOR, ROAD_COLORS, ROAD_LABELS } from "../scene/RoadLayer.js";
import { SEWER_COLORS } from "../scene/SewerLayer.js";
import { isTypingTarget } from "../scene/cameraMath.js";
import "./ui.css";

const FILL_OPTS = [["rate", "Rain / h"], ["accum", "Accumulated"], ["temp", "Temperature"], ["off", "Off"]];

function Seg({ options, value, onChange, label }) {
  return (
    <div className="seg" role="group" aria-label={label}>
      {options.map(([v, t]) => <button key={v} aria-pressed={value === v} onClick={() => onChange(v)}>{t}</button>)}
    </div>
  );
}

export function sourceText(doc, src, k) {
  if (!src) return "no data for this hour";
  if (src.type === "obs") return doc.obs.rain[k] === "pass1" ? "observed · MRMS (provisional)" : "observed · MRMS, gauge-corrected";
  const lead = Math.round((frameTime(doc, k) - Date.UTC(+src.init.slice(0, 4), +src.init.slice(4, 6) - 1, +src.init.slice(6, 8), +src.init.slice(8, 10))) / 3600e3);
  return `forecast · ${doc.models[src.model].label} ${runLabel(src.init)} +${lead} h`;
}

export function riverText(doc, src, k) {
  if (!src) return frameTime(doc, k) > Date.parse(doc.updated) ? "not recorded yet" : "no river data for this hour";
  if (src.type === "whatif") {
    const lead = Math.round((frameTime(doc, k) - initTime(src.init)) / 3600e3);
    return `what if · NWM ${src.kind === "short" ? "short-range (HRRR rain)" : "medium-range (GFS rain)"} ${runLabel(src.init)} +${lead} h`;
  }
  return src.k === k ? "recorded · NWM analysis" : `recorded · NWM analysis from ${k - src.k} h earlier (newest posted)`;
}

// the reaches at or above each flood threshold this hour
function RiverCounts({ info }) {
  const shown = (info?.counts ?? []).map((n, c) => [c, n]).filter(([c, n]) => c > 0 && n > 0);
  return (
    <span className="rv-counts">
      {shown.length ? shown.map(([c, n]) => <span key={c} title={RIVER_LABELS[c]}><i style={{ background: RIVER_COLORS[c] }} />{n} {RIVER_LABELS[c].replace(" flood", "")}</span>)
        : info?.counts ? <span>all below high water</span> : null}
    </span>
  );
}

function Legend({ fill }) {
  if (fill === "off") return null;
  const f = FILLS[fill], colors = fill === "temp" ? TEMP_COLORS : RAIN_COLORS;
  return (
    <div className="st-legend">
      <div className="st-ramp" style={{ background: `linear-gradient(90deg, ${colors.join(", ")})` }} />
      <div className="st-ticks mono">{f.stops.filter((_, i) => i % 2 === 0 || i === 9).map(s => <span key={s}>{s}</span>)}<span className="u">{f.unit}</span></div>
    </div>
  );
}

// The storm panel: one hour at a time through the event window, observed and forecast.
// Pure: the recorded flood-outline hour shown for hour k: its own, or the newest within 2 hours before it (NOAA posts
// an hour or two late); none before recording began or for hours ahead.
export function floodHour(doc, k) {
  const rec = doc.rivers?.inundation ?? {};
  for (let j = k; j >= Math.max(0, k - 2); j--) if (rec[j]) return j;
  return null;
}

// Pure: the recorded hour shown for hour k from a feed recorded each hour (outages, roads): its own, or the newest
// within 2 hours before it (a missed update); none for hours not recorded yet.
const recordedHour = (frames = {}, k) => {
  for (let j = k; j >= Math.max(0, k - 2); j--) if (frames[j] !== undefined) return j;
  return null;
};
export const powerHour = (doc, k) => recordedHour(doc.power?.frames, k);
export const roadHour = (doc, k) => recordedHour(doc.roads?.frames, k);
export const sewerHour = (doc, k) => recordedHour(doc.sewers?.frames, k);

// Pure: the sea-model frame for hour k: its nowcast, or (after the newest nowcast, which NOAA posts 2-7 hours late,
// and if whatIf) the newest run's forecast; null for neither.
export function seaHour(doc, k, whatIf = true) {
  if (doc.sea?.obs.includes(k)) return { type: "obs" };
  if (whatIf && k > Math.max(-1, ...(doc.sea?.obs ?? [])) && doc.sea?.fc?.frames.includes(k)) return { type: "fc", run: doc.sea.fc.run };
  return null;
}

// Pure: the hour's gust frame (m/s bytes): the strongest gust on land and how much land is at each step (share of
// land cells at or above it).
export function gustSummary(data, n) {
  let max = 0, land = 0;
  const over = GUST_MPH.map(() => 0);
  for (let i = 0; i < n; i++) {
    const v = data[i * 4];
    if (v === 255) continue;
    land++; if (v > max) max = v;
    const mph = v / 0.44704;
    GUST_MPH.forEach((m, j) => { if (mph >= m) over[j]++; });
  }
  return { mph: Math.round(max / 0.44704), share: over.map(c => (land ? c / land : 0)) };
}

export default function StormPanel({ doc, layer, rivers, reservoirs, ground, gauges, floods, sea, gusts, power, roads, sewers }) {
  // decoded frames survive a refreshed event.json unless the window (and so the frame numbering) changed
  const cache = useMemo(() => new FrameCache(), [doc.version]);
  const series = useMemo(() => new RainSeries(doc, cache), [doc, cache]);
  const [k, setK] = useState(Math.max(0, doc.lastObs));
  useEffect(() => { setK(x => Math.min(x, doc.hours - 1)); }, [doc.hours]);
  const [sel, setSel] = useState({ mode: "blend", model: "hrrr" });
  const [fill, setFill] = useState("rate"), [wind, setWind] = useState(false), [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false), [opacity, setOpacity] = useState(0.85), [alt, setAlt] = useState(6);
  const [status, setStatus] = useState(""), [busy, setBusy] = useState(false);
  const token = useRef(0);
  const [currentsOn, setCurrentsOn] = useState(true), [tidesOn, setTidesOn] = useState(false);
  const [seaInfo, setSeaInfo] = useState(null), [surge, setSurge] = useState(null);
  const seaCache = useMemo(() => new FrameCache(48), [doc.version]);
  const [floodOn, setFloodOn] = useState(true), [floodInfo, setFloodInfo] = useState(null);
  const floodCache = useRef(new Map());
  const [snowOn, setSnowOn] = useState(false), [soilOn, setSoilOn] = useState(false), [wellsOn, setWellsOn] = useState(false);
  const [resOn, setResOn] = useState(true), [gaugesOn, setGaugesOn] = useState(true), [gaugeCounts, setGaugeCounts] = useState(null);
  const [gustOn, setGustOn] = useState(false), [gustInfo, setGustInfo] = useState(null);
  const [powerOn, setPowerOn] = useState(true), [powerInfo, setPowerInfo] = useState(null);
  const powerCache = useRef(new Map());
  const [roadsOn, setRoadsOn] = useState(true), [roadInfo, setRoadInfo] = useState(null);
  const roadCache = useRef(new Map());
  const [sewersOn, setSewersOn] = useState(true), [sewerInfo, setSewerInfo] = useState(null);
  const sewerCache = useRef(new Map());
  const [riversOn, setRiversOn] = useState(true), [whatIf, setWhatIf] = useState(true), [riverInfo, setRiverInfo] = useState(null);
  useEffect(() => { window.__storm = { setK, setFill, setSel, setWind, setOpen }; return () => { delete window.__storm; }; }, []);   // console / test hook

  useEffect(() => { layer.setFill(fill); }, [layer, fill]);
  useEffect(() => { layer.setWind(wind); }, [layer, wind]);
  useEffect(() => { layer.setOpacity(opacity); }, [layer, opacity]);
  useEffect(() => { layer.setAltitude(alt); }, [layer, alt]);
  useEffect(() => { rivers?.layer.setVisible(riversOn); }, [rivers, riversOn]);
  // reservoir levels: reloaded with each refreshed event (the cron rewrites them hourly), shown at the slider's hour
  useEffect(() => { reservoirs?.load(doc).catch(() => {}); }, [reservoirs, doc]);
  useEffect(() => { reservoirs?.setHour(k); }, [reservoirs, k]);
  useEffect(() => { reservoirs?.setVisible(resOn); }, [reservoirs, resOn]);
  // snow, soil and groundwater stations: reloaded with each refreshed event, like the reservoirs
  useEffect(() => { for (const m of [ground?.snow, ground?.soil, ground?.wells]) m?.load(doc).catch(() => {}); }, [ground, doc]);
  useEffect(() => { for (const m of [ground?.snow, ground?.soil, ground?.wells]) m?.setHour(k); }, [ground, k]);
  useEffect(() => { ground?.snow.setVisible(snowOn); }, [ground, snowOn]);
  useEffect(() => { ground?.soil.setVisible(soilOn); }, [ground, soilOn]);
  useEffect(() => { ground?.wells.setVisible(wellsOn); }, [ground, wellsOn]);
  // NWS river gauges: measured stage against flood stages; the official forecast ahead when "what if" is on
  useEffect(() => { gauges?.load(doc).then(() => setGaugeCounts({ ...gauges.counts })).catch(() => {}); }, [gauges, doc]);
  useEffect(() => { if (gauges) { gauges.setHour(k, whatIf); setGaugeCounts({ ...gauges.counts }); } }, [gauges, k, whatIf]);
  useEffect(() => { gauges?.setVisible(gaugesOn); }, [gauges, gaugesOn]);
  // the sea: SSCOFS nowcast for the hour, and the NOAA tide gauges
  useEffect(() => { sea?.layer.setCurrents(currentsOn); }, [sea, currentsOn]);
  useEffect(() => { sea?.tides.setVisible(tidesOn); }, [sea, tidesOn]);
  useEffect(() => { sea?.tides.load(doc).then(() => setSurge(sea.tides.maxSurge)).catch(() => {}); }, [sea, doc]);
  useEffect(() => { if (sea) { sea.tides.setHour(k); setSurge(sea.tides.maxSurge); } }, [sea, k]);
  useEffect(() => {
    if (!sea) return;
    let stale = false;
    const src = seaHour(doc, k, whatIf);
    if (!src) { sea.layer.set(null); setSeaInfo({ j: null }); return; }
    const name = `k${String(k).padStart(3, "0")}.png?v=${doc.version}`;
    seaCache.get(src.type === "obs" ? `${doc.base}sea/obs/${name}` : `${doc.base}sea/fc/${name}&r=${src.run}`)
      .then(f => { if (!stale) { sea.layer.set(f); setSeaInfo({ j: k, ...src }); } })
      .catch(() => { if (!stale) { sea.layer.set(null); setSeaInfo({ j: null }); } });
    return () => { stale = true; };
  }, [sea, doc, k, whatIf, seaCache]);
  // wind gusts on land: the HRRR analysis where recorded, else the chosen forecast (same source rules as the wind)
  useEffect(() => { gusts?.setVisible(gustOn); }, [gusts, gustOn]);
  useEffect(() => {
    if (!gusts || !gustOn) return;
    let stale = false;
    const src = sourceAt(doc, k, sel, "gust");
    if (!src) { gusts.set(null); setGustInfo({ src: null }); return; }
    cache.get(frameUrl(doc, src, k, "gust"))
      .then(f => { if (!stale) { gusts.set(f); setGustInfo({ src, ...gustSummary(f.data, f.width * f.height) }); } })
      .catch(() => { if (!stale) { gusts.set(null); setGustInfo({ src: null }); } });
    return () => { stale = true; };
  }, [gusts, gustOn, doc, k, sel, cache]);
  // power outages as recorded for the hour (the hours before recording began rebuilt, partially, from start times)
  useEffect(() => { power?.setVisible(powerOn); }, [power, powerOn]);
  useEffect(() => {
    if (!power) return;
    let stale = false;
    const j = powerHour(doc, k);
    if (j === null) { power.set(null); setPowerInfo({ j: null }); return; }
    // the file is rewritten as the record grows (an outage's first-seen time, a rebuilt hour), so it carries `updated`
    const url = `${doc.base}power/k${String(j).padStart(3, "0")}.json?v=${doc.version}&u=${doc.updated}`;
    let p = powerCache.current.get(url);
    if (!p) { p = fetch(url).then(r => r.json()); powerCache.current.set(url, p); }
    p.then(fr => { if (!stale) { power.set(fr); power.at = Math.min(frameTime(doc, k), Date.parse(fr.time)); setPowerInfo({ j, ...fr }); } })
      .catch(() => { powerCache.current.delete(url); if (!stale) { power.set(null); setPowerInfo({ j: null }); } });
    return () => { stale = true; };
  }, [power, doc, k]);
  // roads, passes and ferries as recorded for the hour (from Nov 10; no rebuild before that)
  useEffect(() => { roads?.setVisible(roadsOn); }, [roads, roadsOn]);
  useEffect(() => {
    if (!roads) return;
    let stale = false;
    const j = roadHour(doc, k);
    if (j === null) { roads.set(null); setRoadInfo({ j: null }); return; }
    const url = `${doc.base}roads/k${String(j).padStart(3, "0")}.json?v=${doc.version}&u=${doc.updated}`;
    let p = roadCache.current.get(url);
    if (!p) { p = fetch(url).then(r => r.json()); roadCache.current.set(url, p); }
    p.then(fr => { if (!stale) { roads.set(fr); setRoadInfo({ j, ...fr }); } })
      .catch(() => { roadCache.current.delete(url); if (!stale) { roads.set(null); setRoadInfo({ j: null }); } });
    return () => { stale = true; };
  }, [roads, doc, k]);
  // sewer overflows as recorded for the hour (before recording, Metro Vancouver's rebuilt from its incident times)
  useEffect(() => { sewers?.setVisible(sewersOn); }, [sewers, sewersOn]);
  useEffect(() => {
    if (!sewers) return;
    let stale = false;
    const j = sewerHour(doc, k);
    if (j === null) { sewers.set(null); setSewerInfo({ j: null }); return; }
    const url = `${doc.base}sewers/k${String(j).padStart(3, "0")}.json?v=${doc.version}&u=${doc.updated}`;
    let p = sewerCache.current.get(url);
    if (!p) { p = fetch(url).then(r => r.json()); sewerCache.current.set(url, p); }
    p.then(fr => { if (!stale) { sewers.set(fr); sewers.at = Math.min(frameTime(doc, k), Date.parse(fr.time)); setSewerInfo({ j, ...fr }); } })
      .catch(() => { sewerCache.current.delete(url); if (!stale) { sewers.set(null); setSewerInfo({ j: null }); } });
    return () => { stale = true; };
  }, [sewers, doc, k]);
  // NOAA's flood outlines as recorded for the hour
  useEffect(() => { floods?.setVisible(floodOn); }, [floods, floodOn]);
  useEffect(() => {
    if (!floods) return;
    let stale = false;
    const j = floodHour(doc, k);
    if (j === null) { floods.set(null); setFloodInfo({ j: null }); return; }
    const url = `${doc.base}rivers/inundation/k${String(j).padStart(3, "0")}.json?v=${doc.version}`;
    let p = floodCache.current.get(url);
    if (!p) { p = fetch(url).then(r => r.json()); floodCache.current.set(url, p); }
    p.then(snap => { if (!stale) { floods.set(snap); setFloodInfo({ j, ...doc.rivers.inundation[j] }); } })
      .catch(() => { floodCache.current.delete(url); if (!stale) { floods.set(null); setFloodInfo({ j: null }); } });
    return () => { stale = true; };
  }, [floods, doc, k]);

  // the hour's river flows, from the same source as the storm fields (analysis, newest run, or the chosen run)
  useEffect(() => {
    if (!rivers) return;
    let stale = false;
    const src = riverSource(doc, k, whatIf);
    (src ? rivers.flows.get(src) : Promise.resolve(null)).then(bytes => {
      if (stale) return;
      rivers.layer.setFlows(bytes);
      rivers.layer.whatIf.value = src?.type === "whatif" ? 1 : 0;
      rivers.layer.label = `${riverText(doc, src, k)} · ${pacific(frameTime(doc, k))}`;
      setRiverInfo({ src, counts: bytes ? rivers.layer.counts : null });
    }).catch(e => { console.warn("river flows:", e); if (!stale) { rivers.layer.setFlows(null); setRiverInfo({ src: null }); } });
    return () => { stale = true; };
  }, [doc, k, rivers, whatIf]);

  // load the hour's fields; a newer request supersedes an older one still in flight
  useEffect(() => {
    const my = ++token.current;
    setBusy(true);
    (async () => {
      const rainSrc = sourceAt(doc, k, sel, "rain");
      let rain = null;
      if (fill === "rate") rain = (await series.hourly(k, sel))?.mm ?? null;
      else if (fill === "accum") rain = (await series.accumulated(k, sel))?.mm ?? null;
      const metSrc = sourceAt(doc, k, sel, "met");
      let met = null;
      if (metSrc && (wind || fill === "temp")) {
        const f = await cache.get(frameUrl(doc, metSrc, k, "met"));
        met = { data: f.data, grid: gridOf(doc, metSrc, "met") };
      }
      if (my !== token.current) return;
      if (fill === "rate" || fill === "accum") layer.setRain(rain);
      layer.setMet(met);
      setStatus(sourceText(doc, fill === "temp" ? metSrc : rainSrc, k));
      setBusy(false);
      // warm the next hours so playback does not wait
      for (let j = k + 1; j <= Math.min(doc.hours - 1, k + 3); j++) {
        const s = sourceAt(doc, j, sel, "rain"); if (s && fill !== "temp") cache.get(frameUrl(doc, s, j, "rain")).catch(() => {});
      }
    })().catch(e => { if (my === token.current) { setStatus(`could not load this hour (${e.message})`); setBusy(false); } });
  }, [doc, k, sel, fill, wind, layer, series, cache]);

  useEffect(() => {
    if (!playing) return;
    if (busy) return;   // advance only once the current hour is drawn
    const id = setTimeout(() => setK(x => (x >= doc.hours - 1 ? (setPlaying(false), x) : x + 1)), 450);
    return () => clearTimeout(id);
  }, [playing, busy, k, doc.hours]);

  // , and . step an hour; space plays and pauses
  const keys = useRef(null);
  keys.current = e => {
    if (e.metaKey || e.ctrlKey || e.altKey || isTypingTarget(e.target)) return;
    if (e.key === ",") setK(x => Math.max(0, x - 1));
    if (e.key === ".") setK(x => Math.min(doc.hours - 1, x + 1));
    if (e.key === " ") { e.preventDefault(); setPlaying(p => !p); }
  };
  useEffect(() => { const h = e => keys.current(e); addEventListener("keydown", h); return () => removeEventListener("keydown", h); }, []);

  const runs = doc.runList[sel.model] ?? [];
  const t = frameTime(doc, k), obsPct = ((doc.lastObs + 1) / doc.hours) * 100;
  const days = Array.from({ length: Math.ceil(doc.hours / 24) }, (_, d) => d);
  return (
    <section className={`panel storm${open ? " open" : ""}`} aria-label="Storm layer">
      <div className="st-bar">
        <button className="st-play" aria-label={playing ? "Pause" : "Play"} title="Play / pause (space)" onClick={() => setPlaying(p => !p)}>{playing ? "❚❚" : "▶"}</button>
        <div className="st-when">
          <b>{pacific(t)}</b>
          <span className="mono">{utc(t)} · hour {k + 1}/{doc.hours}</span>
        </div>
        <span className={`st-src${status.startsWith("observed") ? " obs" : status.startsWith("forecast") ? " fc" : ""}`}>{busy ? "loading…" : status}</span>
        <button className="st-more" aria-expanded={open} aria-label="Storm layer options" onClick={() => setOpen(o => !o)}>{open ? "▾" : "▸"}</button>
      </div>
      <div className="st-slider">
        <input type="range" min="0" max={doc.hours - 1} value={k} aria-label="Hour" onChange={e => { setPlaying(false); setK(+e.target.value); }}
          style={{ background: `linear-gradient(90deg, #4c9be8 0%, #4c9be8 ${obsPct}%, #3a3a37 ${obsPct}%, #3a3a37 100%)` }} />
        <div className="st-days mono">{days.map(d => <span key={d}>{new Intl.DateTimeFormat("en-US", { timeZone: doc.tz, weekday: "short", day: "numeric" }).format(doc.t0 + d * 86400e3 + 3600e3)}</span>)}</div>
        {power && powerOn && powerInfo && (
          <div className="st-rivers"><span className="mono">Power ·</span>
            <span className="rv-counts">{powerInfo.j === null
              ? <span>{frameTime(doc, k) > Date.parse(doc.updated) ? "not recorded yet" : "not recorded for this hour"}</span>
              : <>
                  <span><i style={{ background: OUTAGE_COLOR }} />{Object.values(powerInfo.totals).reduce((a, b) => a + b, 0).toLocaleString("en-US")} customers out</span>
                  {Object.entries(powerInfo.totals).filter(([, n]) => n > 0).sort((a, b) => b[1] - a[1]).map(([u, n]) =>
                    <span key={u}>{doc.power.utilities[u]} {n.toLocaleString("en-US")}</span>)}
                  {powerInfo.partial && <span title="Rebuilt from the outages still open when recording began (Nov 9, 3:50 PM PST), placed back to their start times; outages restored before then are missing">partial: rebuilt from outages still open when recording began</span>}
                  {powerInfo.failed?.length > 0 && <span>no data from {powerInfo.failed.join(", ")}</span>}
                </>}</span>
          </div>
        )}
        {roads && roadsOn && roadInfo && (
          <div className="st-rivers"><span className="mono">Roads ·</span>
            <span className="rv-counts">{roadInfo.j === null
              ? <span>{frameTime(doc, k) > Date.parse(doc.updated) ? "not recorded yet" : "not recorded for this hour (recording began Nov 9, 7:20 PM PST)"}</span>
              : <>
                  {Object.keys(ROAD_COLORS).filter(c => roadInfo.counts[c] > 0).map(c =>
                    <span key={c}><i style={{ background: ROAD_COLORS[c] }} />{roadInfo.counts[c]} {ROAD_LABELS[c]}</span>)}
                  {roadInfo.passes.some(p => p.closed && !p.earlier) && <span>passes closed: {roadInfo.passes.filter(p => p.closed && !p.earlier).map(p => p.name).join(", ")}</span>}
                  {roadInfo.ferries.length > 0 && <span title={roadInfo.ferries.map(f => f.title).join("\n")}>{roadInfo.ferries.length} ferry alert{roadInfo.ferries.length === 1 ? "" : "s"}</span>}
                  {roadInfo.partial && <span title="Rebuilt from the reports still open when recording began (Nov 9, 7:20 PM PST), each placed back to its own time; ones already over by then are missing">partial: rebuilt from reports still open when recording began</span>}
                  {roadInfo.failed?.length > 0 && <span>no data from {roadInfo.failed.join(", ")}</span>}
                </>}</span>
          </div>
        )}
        {sewers && sewersOn && sewerInfo && (
          <div className="st-rivers"><span className="mono">Sewer overflows ·</span>
            <span className="rv-counts">{sewerInfo.j === null
              ? <span>{frameTime(doc, k) > Date.parse(doc.updated) ? "not recorded yet" : "not recorded for this hour"}</span>
              : <>
                  <span><i style={{ background: SEWER_COLORS.overflowing, borderRadius: "50%" }} />{sewerInfo.counts.overflowing} outfall{sewerInfo.counts.overflowing === 1 ? "" : "s"} overflowing</span>
                  {sewerInfo.partial && <span title="Before recording began (Nov 9, 7:20 PM PST) only Metro Vancouver's outfalls are shown, from its overflow start and end times; King County's map gives no times">partial: Metro Vancouver only before Nov 9, 7:20 PM</span>}
                  {sewerInfo.failed?.length > 0 && <span>no data from {sewerInfo.failed.join(", ")}</span>}
                </>}</span>
          </div>
        )}
        {gusts && gustOn && gustInfo && (
          <div className="st-rivers"><span className="mono">Gusts · {gustInfo.src ? (gustInfo.src.type === "obs" ? "HRRR analysis" : sourceText(doc, gustInfo.src, k).replace("forecast · ", "forecast ")) : "not available for this hour"}</span>
            {gustInfo.src && <span className="rv-counts"><span>peak {gustInfo.mph} mph on land</span>
              {GUST_MPH.map((m, j) => [m, j]).filter(([, j]) => gustInfo.share[j] >= 0.001).slice(-2).map(([m, j]) =>
                <span key={m}><i style={{ background: GUST_COLORS[j] }} />{(gustInfo.share[j] * 100).toFixed(gustInfo.share[j] < 0.1 ? 1 : 0)}% of land ≥ {m}</span>)}</span>}
          </div>
        )}
        {sea && (currentsOn || tidesOn) && (
          <div className="st-rivers"><span className="mono">Sea ·</span>
            <span className="rv-counts">
              {currentsOn && <span>{seaInfo?.j === null ? (frameTime(doc, k) > Date.parse(doc.updated) ? "not modelled yet" : "no model hour") : seaInfo?.type === "fc" ? `what if · SSCOFS forecast ${runLabel(seaInfo.run)}` : "SSCOFS nowcast"}</span>}
              {tidesOn && surge && <span>max surge {surge.surge >= 0 ? "+" : "−"}{Math.abs(surge.surge).toFixed(1)} ft · {surge.name}</span>}
            </span>
          </div>
        )}
        {floods && floodOn && floodInfo && (
          <div className="st-rivers"><span className="mono">Flood outlines ·</span>
            <span className="rv-counts">{floodInfo.j === null
              ? <span>{Object.keys(doc.rivers?.inundation ?? {}).length ? "not recorded for this hour" : "recording starts with the next update"}</span>
              : <span><i style={{ background: "#ff4f7b" }} />{floodInfo.n} reaches · {floodInfo.km2} km²{floodInfo.j !== k ? ` (as of ${k - floodInfo.j} h earlier)` : ""}</span>}</span>
          </div>
        )}
        {gauges && gaugesOn && gaugeCounts && (
          <div className="st-rivers"><span className="mono">Gauges ·</span>
            <span className="rv-counts">{CATS.some(c => gaugeCounts[c]) ? CATS.filter(c => gaugeCounts[c]).map(c => <span key={c}><i style={{ background: CAT_COLORS[c] }} />{gaugeCounts[c]} {c}</span>) : <span>none at action or flood stage</span>}</span>
          </div>
        )}
        {rivers && riversOn && (
          <div className="st-rivers"><span className="mono">Rivers · {riverText(doc, riverInfo?.src, k)}</span><RiverCounts info={riverInfo} /></div>
        )}
      </div>
      {open && (
        <div className="st-body">
          <div className="ctl-row"><span className="eyebrow">Fill</span><Seg label="Fill" options={FILL_OPTS} value={fill} onChange={setFill} /></div>
          <div className="ctl-row"><span className="eyebrow">Source</span>
            <Seg label="Source" options={[["blend", "Observed + forecast"], ["run", "One forecast run"]]} value={sel.mode}
              onChange={m => setSel(s => (m === "run" ? { ...s, mode: m, init: s.init ?? runs[runs.length - 1]?.init } : { mode: m, model: s.model }))} />
          </div>
          <div className="ctl-row"><span className="eyebrow">Model</span>
            <Seg label="Model" options={Object.entries(doc.models).map(([m, v]) => [m, v.label])} value={sel.model}
              onChange={m => setSel(s => ({ ...s, model: m, init: s.mode === "run" ? doc.runList[m].at(-1)?.init : undefined }))} />
          </div>
          {sel.mode === "run" && (
            <label className="ctl-row"><span className="eyebrow">Run</span>
              <select className="st-select" value={sel.init} onChange={e => setSel(s => ({ ...s, init: e.target.value }))}>
                {runs.map(r => <option key={r.init} value={r.init}>{runLabel(r.init)}{r.complete ? "" : " (partial)"}</option>)}
              </select>
            </label>
          )}
          <button className="tog" role="switch" aria-checked={wind} onClick={() => setWind(w => !w)}>
            <span className="sw" /><span className="t">Wind<small>10 m wind as drifting trails</small></span>
          </button>
          {power && (
            <button className="tog" role="switch" aria-checked={powerOn} onClick={() => setPowerOn(v => !v)}>
              <span className="sw" /><span className="t">Power outages<small>BC Hydro, PSE, Seattle City Light, PGE and Pacific Power outage maps, recorded each hour from Nov 9; dot size: customers out; hover for cause and duration</small></span>
            </button>
          )}
          {roads && (
            <>
              <button className="tog" role="switch" aria-checked={roadsOn} onClick={() => setRoadsOn(v => !v)}>
                <span className="sw" /><span className="t">Roads<small>WSDOT and DriveBC highway alerts and WSDOT mountain passes, recorded each hour from Nov 9, each report shown from its own time; only reports since the storm began (Nov 7), not planned roadwork; hover for details</small></span>
              </button>
              {roadsOn && (
                <div className="rv-legend">
                  {Object.keys(ROAD_COLORS).map(c => <span key={c}><i style={{ background: ROAD_COLORS[c], transform: "rotate(45deg)" }} />{ROAD_LABELS[c]}</span>)}
                  <span><i style={{ background: PASS_COLOR }} />pass open</span>
                  <span><i style={{ background: ROAD_COLORS.closure }} />pass closed</span>
                </div>
              )}
            </>
          )}
          {sewers && (
            <button className="tog" role="switch" aria-checked={sewersOn} onClick={() => setSewersOn(v => !v)}>
              <span className="sw" /><span className="t">Sewer overflows<small>combined sewer outfalls in Seattle and King County (King County's map) and Metro Vancouver, recorded each hour from Nov 9 (Metro Vancouver from its overflow times); a dot at each outfall overflowing during the hour</small></span>
            </button>
          )}
          {gusts && (
            <>
              <button className="tog" role="switch" aria-checked={gustOn} onClick={() => setGustOn(g => !g)}>
                <span className="sw" /><span className="t">Wind gusts<small>surface gusts on land, from 25 mph (HRRR analysis for past hours, then the forecast)</small></span>
              </button>
              {gustOn && (
                <div className="rv-legend">
                  {GUST_MPH.map((m, j) => <span key={m}><i style={{ background: GUST_COLORS[j] }} />≥ {m} mph</span>)}
                </div>
              )}
            </>
          )}
          {sea && (
            <>
              <button className="tog" role="switch" aria-checked={currentsOn} onClick={() => setCurrentsOn(v => !v)}>
                <span className="sw" /><span className="t">Currents<small>surface currents from the same model, as drifting trails</small></span>
              </button>
              <button className="tog" role="switch" aria-checked={tidesOn} onClick={() => setTidesOn(v => !v)}>
                <span className="sw" /><span className="t">Tide gauges<small>NOAA observed water level vs predicted tide: the storm surge</small></span>
              </button>
            </>
          )}
          {floods && (
            <button className="tog" role="switch" aria-checked={floodOn} onClick={() => setFloodOn(f => !f)}>
              <span className="sw" /><span className="t">Flood outlines<small>NOAA's experimental flooded areas from the NWM analysis, recorded each hour from Nov 9 on; reaches already high before the storm left out</small></span>
            </button>
          )}
          {gauges && (
            <button className="tog" role="switch" aria-checked={gaugesOn} onClick={() => setGaugesOn(g => !g)}>
              <span className="sw" /><span className="t">River gauges<small>NWS gauges: measured stage against flood stages, with the NWS impact statement on hover</small></span>
            </button>
          )}
          {reservoirs && (
            <button className="tog" role="switch" aria-checked={resOn} onClick={() => setResOn(r => !r)}>
              <span className="sw" /><span className="t">Reservoir levels<small>USGS lake and reservoir gauges: change since the storm began; hover for the record</small></span>
            </button>
          )}
          {ground && (
            <>
              <button className="tog" role="switch" aria-checked={snowOn} onClick={() => setSnowOn(v => !v)}>
                <span className="sw" /><span className="t">Snow<small>SNOTEL and BC snow pillows: change in snow water (or snow depth) since the storm began; hover for depth, temperature and precipitation</small></span>
              </button>
              <button className="tog" role="switch" aria-checked={soilOn} onClick={() => setSoilOn(v => !v)}>
                <span className="sw" /><span className="t">Soil moisture<small>SNOTEL soil sensors in the mountains: change in soil water (% by volume) since the storm began at the shallowest working sensor; hover for 2, 8 and 20 in</small></span>
              </button>
              <button className="tog" role="switch" aria-checked={wellsOn} onClick={() => setWellsOn(v => !v)}>
                <span className="sw" /><span className="t">Groundwater<small>USGS real-time and BC observation wells: how far the water table has risen since the storm began (BC posts about a day late)</small></span>
              </button>
            </>
          )}
          {rivers && (
            <>
              <button className="tog" role="switch" aria-checked={riversOn} onClick={() => setRiversOn(r => !r)}>
                <span className="sw" /><span className="t">Rivers<small>What the rivers did, hour by hour (NOAA National Water Model analysis: observed rain, nudged to the USGS gauges; flow, not stage). Height: rise since Sat 12 AM; colour: flood thresholds reached</small></span>
              </button>
              {riversOn && (
                <button className="tog" role="switch" aria-checked={whatIf} onClick={() => setWhatIf(w => !w)}>
                  <span className="sw" /><span className="t">Rivers: what if<small>for hours not recorded yet, the newest NWM forecast (striped); each hour is replaced by the record as it comes in</small></span>
                </button>
              )}
              {riversOn && (
                <div className="rv-legend">
                  {RIVER_LABELS.map((l, c) => <span key={c}><i style={{ background: RIVER_COLORS[c] }} />{c === 0 ? l : `≥ ${l}`}</span>)}
                </div>
              )}
            </>
          )}
          <label className="ctl-row slider">Opacity <span className="mono">{Math.round(opacity * 100)}%</span>
            <input type="range" min="0.2" max="1" step="0.05" value={opacity} onChange={e => setOpacity(+e.target.value)} />
          </label>
          <label className="ctl-row slider">Layer height <span className="mono">{alt} km</span>
            <input type="range" min="1" max="12" step="0.5" value={alt} onChange={e => setAlt(+e.target.value)} />
          </label>
          <Legend fill={fill} />
          <div className="st-note">
            {fill === "accum" ? (sel.mode === "run" ? "Accumulated from the run's first hour in the window." : `Accumulated since ${pacific(doc.t0)}: observed hours, then the newest forecast.`) :
              "Observed where measured (MRMS rain, HRRR analysis wind and temperature), newest forecast after."}
            {" "}Updated {doc.updated.replace("T", " ").replace("Z", " UTC")}.
          </div>
        </div>
      )}
    </section>
  );
}
