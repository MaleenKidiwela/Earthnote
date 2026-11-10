import "./ui.css";

// 16 px line icons, drawn in currentColor so they follow the button's text colour.
const ICONS = {
  view: <><path d="M1.3 8S3.8 3.5 8 3.5 14.7 8 14.7 8 12.2 12.5 8 12.5 1.3 8 1.3 8z" /><circle cx="8" cy="8" r="2.1" /></>,
  layers: <><path d="M8 2 1.8 5.3 8 8.6l6.2-3.3z" /><path d="m1.8 8.2 6.2 3.3 6.2-3.3" /><path d="m1.8 11 6.2 3.3 6.2-3.3" /></>,
  legend: <><rect x="1.8" y="3" width="2.4" height="2.4" /><rect x="1.8" y="10.6" width="2.4" height="2.4" /><path d="M7 4.2h7.2M7 8h7.2M7 11.8h7.2M1.8 8h2.4" /></>,
  help: <><circle cx="8" cy="8" r="6.5" /><path d="M6.1 6.3a1.95 1.95 0 1 1 2.7 1.8c-.5.2-.8.6-.8 1.1v.7" /><circle cx="8" cy="11.6" r=".4" fill="currentColor" /></>,
};

// The top-right dock (after the Cascadia and Rainier atlases): one icon button per panel. A button toggles its
// panel; open panels stack under the dock in the buttons' order and stay mounted while closed, so they keep state.
export default function HudDock({ items, open, onToggle }) {
  const pop = key => `hud-pop-${key}`;
  return (
    <div className="hud-dock">
      <div className="dock-bar">
        {items.map(({ key, label, icon }) => (
          <button key={key} className="panel dock-btn" aria-label={label} title={label}
            aria-expanded={open.has(key)} aria-controls={pop(key)} onClick={() => onToggle(key)}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" aria-hidden="true">{ICONS[icon]}</svg>
          </button>
        ))}
      </div>
      <div className="dock-pops">
        {items.map(({ key, label, node }) => (
          <div key={key} id={pop(key)} className={`dock-pop${open.has(key) ? " open" : ""}`} role="group" aria-label={label}>{node}</div>
        ))}
      </div>
    </div>
  );
}
