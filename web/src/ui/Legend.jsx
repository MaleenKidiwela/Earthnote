import { LINE_STYLES } from "../scene/LineLayer.js";
import "./ui.css";

// The relief tints as CSS gradients (the shader's ramps, before hillshading).
const LAND = "linear-gradient(90deg, rgb(117,140,94) 0%, rgb(150,161,110) 9%, rgb(184,171,130) 27%, rgb(179,168,156) 52%, rgb(219,214,207) 79%, rgb(245,245,242) 100%)";
const SEA = "linear-gradient(90deg, rgb(20,38,61) 0%, rgb(36,69,99) 49%, rgb(61,105,138) 89%, rgb(102,148,173) 97%, rgb(143,181,194) 100%)";

function Line({ name, label }) {
  const [color, width, casing, casingWidth] = LINE_STYLES[name];
  return (
    <div className="row">
      <svg className="glyph" viewBox="0 0 18 12" aria-hidden="true">
        {casing && <line x1="1" y1="6" x2="17" y2="6" stroke={casing} strokeWidth={casingWidth} strokeLinecap="round" />}
        <line x1="1" y1="6" x2="17" y2="6" stroke={color} strokeWidth={width} strokeLinecap="round" />
      </svg>
      {label}
    </div>
  );
}

export default function Legend() {
  return (
    <div className="panel legend">
      <div>
        <div className="eyebrow">Elevation</div>
        <div className="ramp" style={{ background: LAND }} />
        <div className="ramp-labels mono"><span>0</span><span>1,700</span><span>3,300 m</span></div>
      </div>
      <div>
        <div className="eyebrow">Depth</div>
        <div className="ramp" style={{ background: SEA }} />
        <div className="ramp-labels mono"><span>3,500 m</span><span>1,800</span><span>0</span></div>
      </div>
      <div>
        <div className="eyebrow">Lines</div>
        <Line name="motorway" label="Motorway / interstate" />
        <Line name="trunk" label="Highway" />
        <Line name="primary" label="Main road" />
        <Line name="country" label="Country border" />
        <Line name="state" label="State / province" />
      </div>
    </div>
  );
}
