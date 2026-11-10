import { useEffect, useRef, useState } from "react";
import { isTypingTarget } from "../scene/cameraMath.js";
import "./ui.css";

function Seg({ label, options, value, onChange }) {
  return (
    <div className="ctl-row">
      <span className="eyebrow">{label}</span>
      <div className="seg" role="group" aria-label={label}>
        {options.map(([v, text]) => (
          <button key={v} aria-pressed={value === v} onClick={() => { if (v !== value) onChange(v); }}>{text}</button>
        ))}
      </div>
    </div>
  );
}

export function Toggle({ label, sub, k, on, onChange, swatch }) {
  return (
    <button className="tog" role="switch" aria-checked={on} aria-label={label} onClick={() => onChange(!on)}>
      <span className="sw" />
      <span className="t">{label}{sub && <small>{sub}</small>}</span>
      {swatch}
      {k && <kbd>{k}</kbd>}
    </button>
  );
}

// View: 3D / 2D, shading style and vertical exaggeration.
export function ViewPanel({ scene }) {
  const [view, setView] = useState("3d"), [style, setStyle] = useState("relief"), [exag, setExag] = useState(scene.U.exag.value);
  useEffect(() => { scene.onView = setView; return () => { scene.onView = null; }; }, [scene]);
  return (
    <div className="panel controls">
      <Seg label="View" options={[["3d", "3D"], ["2d", "2D"]]} value={view} onChange={v => { setView(v); scene.setView(v); }} />
      <Seg label="Style" options={[["relief", "Relief"], ["mono", "Mono"], ["contours", "Contours"]]} value={style} onChange={v => { setStyle(v); scene.setStyle(v); }} />
      <label className="ctl-row slider">Vertical exaggeration <span className="mono">{exag.toFixed(1)}×</span>
        <input type="range" min="1" max="10" step="0.5" value={exag} aria-label="Vertical exaggeration" disabled={view === "2d"}
          onChange={e => { const v = +e.target.value; setExag(v); scene.setExag(v); }} />
      </label>
      <div className="hint">Drag to move · right-drag or Shift-drag to rotate · scroll to zoom · arrow keys to glide</div>
    </div>
  );
}

const LAYERS = [
  ["motorway", "Motorways", "interstates and freeways", "M"],
  ["trunk", "Highways", "trunk roads", "H"],
  ["primary", "Main roads", "primary roads", "R"],
  ["borders", "Borders", "country, state and province", "B"],
  ["places", "Place names", "cities, towns and peaks", "N"],
  ["streets", "Street detail", "every road, building and shoreline as you zoom in", "S"],
];

// Map layers: road classes, borders and labels, each with a keyboard shortcut.
export function LayersPanel({ scene, labels }) {
  const [on, setOn] = useState(() => Object.fromEntries(LAYERS.map(([k]) => [k, true])));
  const apply = (k, v) => {
    setOn(o => ({ ...o, [k]: v }));
    if (k === "borders") { scene.setLayer("country", v); scene.setLayer("state", v); }
    else if (k === "places") labels?.setVisible(v);
    else scene.setLayer(k, v);
  };
  const onKey = useRef(null);
  onKey.current = e => {
    if (e.metaKey || e.ctrlKey || e.altKey || isTypingTarget(e.target)) return;
    const hit = LAYERS.find(([, , , key]) => key.toLowerCase() === e.key?.toLowerCase());
    if (hit) apply(hit[0], !on[hit[0]]);
  };
  useEffect(() => {
    const h = e => onKey.current?.(e);
    addEventListener("keydown", h);
    return () => removeEventListener("keydown", h);
  }, []);
  return (
    <div className="panel layers-panel">
      <div className="eyebrow">Base map</div>
      {LAYERS.map(([k, label, sub, key]) => <Toggle key={k} k={key} label={label} sub={sub} on={on[k]} onChange={v => apply(k, v)} />)}
    </div>
  );
}
