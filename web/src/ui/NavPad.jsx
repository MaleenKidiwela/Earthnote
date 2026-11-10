import "./ui.css";

// On-screen navigation, so no gesture has to be discovered: rotate, tilt, zoom and north up.
const BTNS = [
  ["⟲", "Rotate left", { dAz: -20 }], ["⟳", "Rotate right", { dAz: 20 }],
  ["▲", "Tilt toward the horizon", { dPol: 10 }], ["▼", "Tilt toward overhead", { dPol: -10 }],
  ["+", "Zoom in", { zoom: 0.6 }], ["−", "Zoom out", { zoom: 1.6 }], ["N", "North up", { northUp: true }],
];

export default function NavPad({ scene }) {
  return (
    <nav className="panel navpad" aria-label="Navigation">
      {BTNS.map(([g, label, opts]) => (
        <button key={label} title={label} aria-label={label} onClick={() => scene.orbit(opts)}>{g}</button>
      ))}
    </nav>
  );
}
