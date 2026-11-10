import { MarkerPoints, SHAPE } from "./MarkerPoints.js";

// Roads for the storm's hour: a diamond at each closure, storm hazard (flooding, slides, trees), crash and slippery
// stretch, and a square at each mountain pass (red when closed). Only what the storm brought is drawn: planned
// roadwork, alerts already in place before it (kind "earlier") and passes closed since before it are recorded but left off.
// Recorded hourly from WSDOT and DriveBC; see roads.py.

export const ROAD_COLORS = { closure: "#ff4d4f", hazard: "#ff8c42", incident: "#f2f2ee", surface: "#7cc7ff" };
export const PASS_COLOR = "#5fd38d";
export const ROAD_LABELS = { closure: "closed", hazard: "storm damage", incident: "crashes and incidents", surface: "slippery or snowy" };
const SHOWN = Object.keys(ROAD_COLORS), SIZE = { closure: 15, hazard: 13, incident: 10, surface: 9 };

export class RoadLayer extends MarkerPoints {
  // a frame from roads/k###.json, or null. Items carry {row} for an event, {pass} for a mountain pass
  set(frame) {
    const rank = r => SHOWN.length - SHOWN.indexOf(r[5]);
    const rows = (frame?.out ?? []).filter(r => SHOWN.includes(r[5])).sort((a, b) => rank(a) - rank(b));   // worst on top
    this.setItems([
      ...(frame?.passes ?? []).filter(p => p.lat != null && !p.earlier).map(pass => ({
        pass, lat: pass.lat, lon: pass.lon, size: 12, shape: SHAPE.square, color: pass.closed ? ROAD_COLORS.closure : PASS_COLOR })),
      ...rows.map(row => ({ row, lat: row[1], lon: row[2], size: SIZE[row[5]], shape: SHAPE.diamond, color: ROAD_COLORS[row[5]] })),
    ]);
  }
}
