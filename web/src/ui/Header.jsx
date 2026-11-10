import { useMemo, useState } from "react";
import "./ui.css";

// Pure: up to `n` places whose name starts with (then contains) the query, biggest first.
export function searchPlaces(places, q, n = 8) {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  const starts = [], has = [];
  for (const p of places) {
    const name = p.name.toLowerCase();
    if (name.startsWith(s)) starts.push(p); else if (name.includes(s)) has.push(p);
  }
  return [...starts, ...has].slice(0, n);
}

const KIND = { city: "City", town: "Town", peak: "Peak" };

export default function Header({ places, detail, onPick }) {
  const [q, setQ] = useState(""), [sel, setSel] = useState(0);
  const hits = useMemo(() => searchPlaces(places, q), [places, q]);
  const pick = p => { onPick(p); setQ(""); setSel(0); };
  return (
    <header className="panel header">
      <div className="title-row">
        <h1>Earthnote · Pacific Northwest</h1>
        <span className="detail-tag mono" title="Terrain detail at the view centre">{detail}</span>
      </div>
      <p>Washington, Oregon, southern British Columbia and the offshore margin.</p>
      <div className="search">
        <input type="search" placeholder="Find a city, town or peak" value={q} aria-label="Find a place"
          onChange={e => { setQ(e.target.value); setSel(0); }}
          onKeyDown={e => {
            if (e.key === "ArrowDown") { e.preventDefault(); setSel(i => Math.min(hits.length - 1, i + 1)); }
            if (e.key === "ArrowUp") { e.preventDefault(); setSel(i => Math.max(0, i - 1)); }
            if (e.key === "Enter" && hits[sel]) pick(hits[sel]);
            if (e.key === "Escape") setQ("");
          }} />
        {hits.length > 0 && (
          <ul role="listbox">
            {hits.map((p, i) => (
              <li key={`${p.name}-${p.lon}`} role="option" aria-selected={i === sel} onMouseDown={() => pick(p)}>
                <span>{p.name}</span><span className="sub">{KIND[p.kind]}{p.pop ? ` · ${p.pop.toLocaleString()}` : ""}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
