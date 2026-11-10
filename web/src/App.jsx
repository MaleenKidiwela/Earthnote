import { useEffect, useRef, useState } from "react";
import { BUILD_COMMAND, BundleMissingError, loadBundle } from "./data/bundle.js";
import { loadEvent } from "./data/event.js";
import { RiverFlows, loadReaches } from "./data/rivers.js";
import { AtmosphereLayer } from "./scene/AtmosphereLayer.js";
import { RiverLayer } from "./scene/RiverLayer.js";
import { FloodLayer } from "./scene/FloodLayer.js";
import { SeaLayer } from "./scene/SeaLayer.js";
import { GustField } from "./scene/GustField.js";
import { PowerLayer } from "./scene/PowerLayer.js";
import PowerTip from "./ui/PowerTip.jsx";
import { RoadLayer } from "./scene/RoadLayer.js";
import { SewerLayer } from "./scene/SewerLayer.js";
import MarkerTip, { roadTip, sewerTip } from "./ui/MarkerTip.jsx";
import { TideMarkers } from "./overlay/TideMarkers.js";
import RiverTip from "./ui/RiverTip.jsx";
import StormPanel from "./ui/StormPanel.jsx";
import { PlaceLabels } from "./overlay/PlaceLabels.js";
import { ReservoirMarkers } from "./overlay/ReservoirMarkers.js";
import { SnowMarkers, SoilMarkers } from "./overlay/SnowMarkers.js";
import { WellMarkers } from "./overlay/WellMarkers.js";
import { GaugeMarkers } from "./overlay/GaugeMarkers.js";
import { PnwScene } from "./scene/PnwScene.js";
import { LayersPanel, ViewPanel } from "./ui/Controls.jsx";
import GoTo from "./ui/GoTo.jsx";
import Header from "./ui/Header.jsx";
import HelpPanel from "./ui/HelpPanel.jsx";
import HudDock from "./ui/HudDock.jsx";
import Legend from "./ui/Legend.jsx";
import NavPad from "./ui/NavPad.jsx";
import ScaleBar from "./ui/ScaleBar.jsx";

function hasWebGL() {
  try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch { return false; }
}

export default function App() {
  const [bundle, setBundle] = useState(null), [error, setError] = useState(null);
  useEffect(() => { loadBundle().then(setBundle, setError); }, []);
  if (error) return <div className="app-message" role="alert"><div>{error.message}{error instanceof BundleMissingError && <code>{BUILD_COMMAND}</code>}</div></div>;
  if (!bundle) return <div className="app-message">Loading the map…</div>;
  if (!hasWebGL()) return <div className="app-message">This map needs WebGL, which this browser has turned off.</div>;
  return <MapView bundle={bundle} onError={setError} />;
}

const STORM = "nov2026_ar";

export const detailText = f => (f.streets > 0 ? "streets" : f.flat > 0.5 ? "2D" : f.tiles > 0 ? "250 m" : f.dist > 2200 ? "2 km" : "1 km");

function MapView({ bundle, onError }) {
  const canvasRef = useRef(null), overlayRef = useRef(null);
  const [scene, setScene] = useState(null), [labels, setLabels] = useState(null), [storm, setStorm] = useState(null);
  const [rivers, setRivers] = useState(null), [reservoirs, setReservoirs] = useState(null), [gauges, setGauges] = useState(null), [floods, setFloods] = useState(null), [sea, setSea] = useState(null), [ground, setGround] = useState(null);
  const [detail, setDetail] = useState("1 km"), [active, setActive] = useState("home"), [dock, setDock] = useState(() => new Set(["view"]));

  useEffect(() => {
    let sc, lb, atm, pw, rd, sw, res, snow, soil, wells, gau, fl, sea, tid, poll, cancelled = false, n = 0, last = performance.now();
    PnwScene.create(canvasRef.current, bundle).then(s => {
      if (cancelled) { s.dispose(); return; }
      sc = s; lb = new PlaceLabels(overlayRef.current, bundle.places, s);
      s.onFrame = () => {
        const now = performance.now(), dt = Math.min(0.1, (now - last) / 1000); last = now;
        lb.update(); res?.update(); snow?.update(); soil?.update(); wells?.update(); gau?.update(); tid?.update(); sea?.update(dt, s.frame.dist, s.controls.target); atm?.update(dt, s.frame.dist);
        if (n++ % 15 === 0) setDetail(detailText(s.frame));
      };
      setScene(s); setLabels(lb);
      loadEvent(STORM).then(doc => {   // optional: the storm layer, when its data is built
        if (!doc || cancelled) return;
        atm = new AtmosphereLayer(s.scene, bundle.P, doc, s.U);
        pw = doc.power ? new PowerLayer(s.scene, bundle.P, s.U, s.elevAt) : null;
        rd = doc.roads ? new RoadLayer(s.scene, bundle.P, s.U, s.elevAt) : null;
        sw = doc.sewers ? new SewerLayer(s.scene, bundle.P, s.U, s.elevAt) : null;
        setStorm({ doc, layer: atm, gusts: doc.grids.gust ? new GustField(s.U, bundle.P, doc.grids.gust) : null, power: pw, roads: rd, sewers: sw });
        res = new ReservoirMarkers(overlayRef.current, s);
        setReservoirs(res);
        if (doc.credits?.ground) {   // snow, soil and groundwater stations
          snow = new SnowMarkers(overlayRef.current, s); soil = new SoilMarkers(overlayRef.current, s); wells = new WellMarkers(overlayRef.current, s);
          snow.setVisible(false); soil.setVisible(false); wells.setVisible(false);   // off until switched on in the storm panel
          setGround({ snow, soil, wells });
        }
        gau = new GaugeMarkers(overlayRef.current, s);
        setGauges(gau);
        fl = new FloodLayer(s.scene, bundle.P, s.U, s.elevAt);
        setFloods(fl);
        if (doc.sea) {
          sea = new SeaLayer(s.scene, bundle.P, doc.sea.grid, s.U);
          tid = new TideMarkers(overlayRef.current, s);
          setSea({ layer: sea, tides: tid });
          window.__sea = sea;   // console / test hook
        }
        if (doc.rivers) loadReaches(doc).then(reaches => {   // the rivers ride on the same event data
          if (cancelled) return;
          const layer = new RiverLayer(s.scene, bundle.P, reaches, s.U);
          s.addRivers(layer);
          const flows = new RiverFlows(doc, reaches.count);
          flows.get({ type: "obs", k: Math.min(...doc.rivers.obs) }).then(b => layer.setBaseline(b)).catch(() => {});
          setRivers({ layer, reaches, flows });
        }).catch(() => {});
        // the cron publishes new hours and runs every hour; an open page picks them up
        poll = setInterval(() => loadEvent(STORM).then(next => {
          if (next && !cancelled) setStorm(cur => (cur && cur.doc.updated === next.updated ? cur : { ...cur, doc: next }));
        }).catch(() => {}), 10 * 60e3);
      }).catch(() => {});
    }, onError);
    return () => { cancelled = true; clearInterval(poll); lb?.dispose(); res?.dispose(); snow?.dispose(); soil?.dispose(); wells?.dispose(); gau?.dispose(); fl?.dispose(); pw?.dispose(); rd?.dispose(); sw?.dispose(); sea?.dispose(); tid?.dispose(); atm?.dispose(); sc?.dispose(); };
  }, [bundle, onError]);

  const toggleDock = key => setDock(o => { const n = new Set(o); if (!n.delete(key)) n.add(key); return n; });
  return (
    <>
      <canvas ref={canvasRef} className="map-scene" aria-label="3D map of the Pacific Northwest" />
      <div id="map-overlay" ref={overlayRef} />
      {scene && (
        <>
          <Header places={bundle.places} detail={detail} onPick={p => { setActive(null); scene.flyToPoint(p.lon, p.lat, p.kind === "peak" ? 45 : 70); }} />
          <HudDock open={dock} onToggle={toggleDock} items={[
            { key: "view", label: "View", icon: "view", node: <ViewPanel scene={scene} /> },
            { key: "layers", label: "Layers", icon: "layers", node: <LayersPanel scene={scene} labels={labels} /> },
            { key: "legend", label: "Legend", icon: "legend", node: <Legend /> },
            { key: "help", label: "Help", icon: "help", node: <HelpPanel manifest={bundle.manifest} /> },
          ]} />
          <GoTo active={active} onPlace={k => { setActive(k); scene.flyTo(k); }} />
          {storm && <StormPanel doc={storm.doc} layer={storm.layer} gusts={storm.gusts} power={storm.power} roads={storm.roads} sewers={storm.sewers} rivers={rivers} reservoirs={reservoirs} ground={ground} gauges={gauges} floods={floods} sea={sea} />}
          {storm?.roads && <MarkerTip scene={scene} layer={storm.roads} canvas={canvasRef.current} render={roadTip} />}
          {storm?.sewers && <MarkerTip scene={scene} layer={storm.sewers} canvas={canvasRef.current} render={sewerTip} />}
          {storm?.power && <PowerTip scene={scene} layer={storm.power} canvas={canvasRef.current} utilities={storm.doc.power?.utilities} />}
          {rivers && <RiverTip scene={scene} layer={rivers.layer} canvas={canvasRef.current} />}
          <NavPad scene={scene} />
          <ScaleBar scene={scene} />
        </>
      )}
    </>
  );
}
