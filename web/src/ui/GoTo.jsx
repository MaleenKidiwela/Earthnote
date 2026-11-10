import { VIEWS } from "../scene/places.js";
import "./ui.css";

export default function GoTo({ active, onPlace }) {
  return (
    <nav className="panel goto" aria-label="Go to">
      <div className="eyebrow">Go to</div>
      <div className="row">{VIEWS.map(([key, label]) => (
        <button key={key} aria-pressed={active === key} onClick={() => onPlace(key)}>{label}</button>
      ))}</div>
    </nav>
  );
}
