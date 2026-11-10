import { useEffect, useRef, useState } from "react";
import "./ui.css";

const PT = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", weekday: "short", hour: "numeric", minute: "2-digit" });
const dur = ms => { const h = ms / 3600e3; return h < 1 ? `${Math.max(1, Math.round(h * 60))} min` : h < 48 ? `${Math.round(h)} h` : `${(h / 24).toFixed(1)} days`; };

// The outage under the pointer: utility, customers out, cause, and how long it had been out at that hour.
export default function PowerTip({ scene, layer, canvas, utilities }) {
  const [tip, setTip] = useState(null);
  const due = useRef(0);
  useEffect(() => {
    if (!canvas) return;
    let last = null;
    const pick = () => {
      due.current = 0;
      if (!last || !layer.points.visible) { setTip(null); return; }
      const r = canvas.getBoundingClientRect();
      const row = layer.pick(last.clientX - r.left, last.clientY - r.top, scene.camera, r.width, r.height);
      setTip(row ? { row, x: last.clientX, y: last.clientY } : null);
    };
    const move = e => { last = e.buttons ? null : e; if (!due.current) due.current = setTimeout(pick, 90); };
    const leave = () => { last = null; setTip(null); };
    canvas.addEventListener("pointermove", move); canvas.addEventListener("pointerleave", leave);
    return () => { canvas.removeEventListener("pointermove", move); canvas.removeEventListener("pointerleave", leave); clearTimeout(due.current); };
  }, [scene, layer, canvas]);
  if (!tip) return null;
  const [u, , , n, start, seen, cause, etr] = tip.row, since = start ?? seen, at = layer.at;
  return (
    <div className="river-tip" style={{ left: tip.x, top: tip.y }} role="tooltip">
      <b>{n.toLocaleString("en-US")} customer{n === 1 ? "" : "s"} out</b>
      <div className="src">{utilities?.[u] ?? u}</div>
      {cause && <div className="mono">{cause}</div>}
      <div className="mono">{start ? "out since" : "first recorded"} {PT.format(since)}{at > since ? ` · ${dur(at - since)} by this hour` : ""}</div>
      {etr && <div className="mono">utility's estimate for restoration: {PT.format(etr)}</div>}
    </div>
  );
}
