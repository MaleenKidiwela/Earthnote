import { MarkerPoints, SHAPE } from "./MarkerPoints.js";

// Sewer overflows for the storm's hour: a dot at each outfall overflowing during it; the rest are not drawn.
// Recorded hourly from King County and Metro Vancouver; see sewers.py.

export const SEWER_COLORS = { overflowing: "#b65cff" };
export const SEWER_LABELS = { overflowing: "overflowing" };

export class SewerLayer extends MarkerPoints {
  // a frame from sewers/k###.json, or null; items carry {row}
  set(frame) {
    const rows = (frame?.out ?? []).filter(r => SEWER_COLORS[r[5]]);
    this.setItems(rows.map(row => ({ row, lat: row[1], lon: row[2], size: 13, shape: SHAPE.circle, color: SEWER_COLORS[row[5]] })));
  }
}
