import { useEffect, useRef, useState } from "react";
import { THRESHOLD_NAMES } from "../data/rivers.js";
import { RIVER_COLORS, RIVER_LABELS } from "../scene/RiverLayer.js";
import "./ui.css";

const fmt = q => (q >= 100 ? Math.round(q).toLocaleString("en-US") : q >= 1 ? q.toFixed(1) : q.toFixed(2));
const CFS = 35.3147;

// The river under the pointer: its name, flow this hour and where that sits among its flood thresholds.
export default function RiverTip({ scene, layer, canvas }) {
  const [tip, setTip] = useState(null);
  const due = useRef(0);
  useEffect(() => {
    if (!canvas) return;
    let last = null;
    const pick = () => {
      due.current = 0;
      if (!last || !layer.mesh.visible) { setTip(null); return; }
      const r = canvas.getBoundingClientRect();
      const hit = layer.pick(last.clientX - r.left, last.clientY - r.top, scene.camera, r.width, r.height);
      setTip(hit ? { ...hit, x: last.clientX, y: last.clientY } : null);
    };
    const move = e => { last = e.buttons ? null : e; if (!due.current) due.current = setTimeout(pick, 90); };
    const leave = () => { last = null; setTip(null); };
    canvas.addEventListener("pointermove", move); canvas.addEventListener("pointerleave", leave);
    return () => { canvas.removeEventListener("pointermove", move); canvas.removeEventListener("pointerleave", leave); clearTimeout(due.current); };
  }, [scene, layer, canvas]);
  if (!tip) return null;
  return (
    <div className="river-tip" style={{ left: tip.x, top: tip.y }} role="tooltip">
      <b>{tip.name}</b>
      {layer.label && <div className="src">{layer.label}</div>}
      <div className="mono">{fmt(tip.q)} m³/s · {fmt(tip.q * CFS)} cfs</div>
      {Number.isFinite(tip.rise) && <div className="mono">{tip.rise >= 1 ? `${tip.rise.toFixed(1)}×` : `${Math.round(tip.rise * 100)}% of`} its flow before the storm ({fmt(tip.base)} m³/s)</div>}
      {Number.isFinite(tip.share) && <div className="mono">{Math.round(tip.share * 100)}% of its 2-year flood flow</div>}
      <div className="cat"><i style={{ background: RIVER_COLORS[tip.cat] }} />{tip.unflagged ? "flood thresholds not meaningful here (tiny, or already exceeded before the storm); not flagged" : tip.cat ? `at or above the ${RIVER_LABELS[tip.cat]}` : "below the high-water flow"}</div>
      <table className="mono"><tbody>
        {tip.thr.map((t, j) => t > 0 && <tr key={j} className={tip.cat > j ? "hit" : ""}><td>{THRESHOLD_NAMES[j]}</td><td>{fmt(t)} m³/s</td></tr>)}
      </tbody></table>
    </div>
  );
}
