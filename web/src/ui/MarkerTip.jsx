import { useEffect, useRef, useState } from "react";
import { ROAD_LABELS } from "../scene/RoadLayer.js";
import { SEWER_LABELS } from "../scene/SewerLayer.js";
import "./ui.css";

const PT = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
const dur = ms => { const h = ms / 3600e3; return h < 1 ? `${Math.max(1, Math.round(h * 60))} min` : h < 48 ? `${Math.round(h)} h` : `${(h / 24).toFixed(1)} days`; };
const SOURCE = { wsdot: "WSDOT", drivebc: "DriveBC" };

// The marker under the pointer (a MarkerPoints layer), described by render(item).
export default function MarkerTip({ scene, layer, canvas, render }) {
  const [tip, setTip] = useState(null);
  const due = useRef(0);
  useEffect(() => {
    if (!canvas) return;
    let last = null;
    const pick = () => {
      due.current = 0;
      if (!last || !layer.points.visible) { setTip(null); return; }
      const r = canvas.getBoundingClientRect();
      const it = layer.pick(last.clientX - r.left, last.clientY - r.top, scene.camera, r.width, r.height);
      setTip(it ? { it, x: last.clientX, y: last.clientY } : null);
    };
    const move = e => { last = e.buttons ? null : e; if (!due.current) due.current = setTimeout(pick, 90); };
    const leave = () => { last = null; setTip(null); };
    canvas.addEventListener("pointermove", move); canvas.addEventListener("pointerleave", leave);
    return () => { canvas.removeEventListener("pointermove", move); canvas.removeEventListener("pointerleave", leave); clearTimeout(due.current); };
  }, [scene, layer, canvas]);
  if (!tip) return null;
  return <div className="river-tip" style={{ left: tip.x, top: tip.y }} role="tooltip">{render(tip.it, layer)}</div>;
}

// a road event (what, where, since when) or a mountain pass (its conditions)
export function roadTip({ pass, row }) {
  if (pass) return <>
    <b>{pass.name}{pass.closed ? " · closed" : ""}</b>
    <div className="src">WSDOT mountain pass · {pass.ft?.toLocaleString("en-US")} ft{pass.f != null ? ` · ${pass.f}°F` : ""}</div>
    {pass.road && <div className="mono">{pass.road}</div>}
    {pass.weather && <div className="mono">{pass.weather}</div>}
    {[...new Set(pass.restrict.filter(Boolean))].map(r => <div key={r} className="mono">{r}</div>)}
    {pass.closed && pass.closed_since && <div className="src">closed since {PT.format(pass.closed_since)}</div>}
    {pass.updated && <div className="src">reported {PT.format(pass.updated)}</div>}
  </>;
  const [src, , , , , kind, , road, title, start, seen] = row;
  return <>
    <b>{road ? `${road} · ` : ""}{ROAD_LABELS[kind]}</b>
    <div className="src">{SOURCE[src] ?? src}</div>
    <div className="mono">{title}</div>
    <div className="src">{start ? `since ${PT.format(start)}` : `first recorded ${PT.format(seen)}`}</div>
  </>;
}

// a sewer outfall overflowing: since when, and until when if it stopped within the hour
export function sewerTip({ row }, layer) {
  const [, , , name, owner, state, since, start, end] = row;
  return <>
    <b>{name}</b>
    <div className="src">{owner} sewer outfall · {SEWER_LABELS[state]}</div>
    {state === "overflowing" && since && <div className="mono">{start ? "since" : "recorded overflowing since"} {PT.format(since)}{layer.at > since && !end ? ` · ${dur(layer.at - since)} by this hour` : ""}</div>}
    {end && <div className="mono">stopped {PT.format(end)} after {dur(end - since)}</div>}
    <div className="src">real-time status, not yet reviewed by the utility</div>
  </>;
}
