import "./ui.css";

const MOVES = [
  ["Move", "drag, or the arrow keys"],
  ["Rotate / tilt", "right-drag, or Shift- / Ctrl-drag"],
  ["Zoom", "scroll or pinch; the nav pad's + and −"],
  ["Layers", "M motorways · H highways · R main roads · B borders · N names · S streets"],
];

export default function HelpPanel({ manifest }) {
  const c = manifest.credits;
  return (
    <div className="panel helppanel">
      <div className="hc-set">{MOVES.map(([k, v]) => <div key={k} className="hc-row"><b>{k}</b><span>{v}</span></div>)}</div>
      <div className="hc-note">
        Terrain: about 250 m near the camera, 1 km for the region, 2 km offshore. Heights are exaggerated in 3D
        (see View); 2D shows the same shading flat.
      </div>
      <div className="attribution">
        {c.terrain}. {c.osm}. {c.ne}. Street detail: OpenFreeMap © OpenMapTiles, data © OpenStreetMap contributors.
        <div className="hc-dev mono">bundle built {manifest.built}</div>
      </div>
    </div>
  );
}
