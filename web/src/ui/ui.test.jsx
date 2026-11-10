import { describe, expect, it } from "vitest";
import { place, priority, wanted } from "../overlay/PlaceLabels.js";
import { searchPlaces } from "./Header.jsx";
import { niceScale } from "./ScaleBar.jsx";

const places = [
  { name: "Seattle", kind: "city", pop: 750000 },
  { name: "Sedro-Woolley", kind: "town", pop: 12000 },
  { name: "West Seattle", kind: "town", pop: 0 },
  { name: "Mount Rainier", kind: "peak", pop: 0 },
];

describe("search", () => {
  it("lists names that start with the query before names that contain it", () => {
    expect(searchPlaces(places, "se").map(p => p.name)).toEqual(["Seattle", "Sedro-Woolley", "West Seattle"]);
    expect(searchPlaces(places, "  ")).toEqual([]);
  });
});

describe("labels", () => {
  it("keeps the higher-priority label where two overlap", () => {
    const shown = place([
      { id: 1, x: 100, y: 100, w: 60, h: 16, priority: 2 },
      { id: 2, x: 110, y: 104, w: 60, h: 16, priority: 5 },
      { id: 3, x: 400, y: 100, w: 60, h: 16, priority: 1 },
    ]);
    expect([...shown].sort()).toEqual([2, 3]);
  });
  it("shows big cities from far out, towns and peaks only closer in", () => {
    expect(wanted(places[0], 3000)).toBe(true);
    expect(wanted(places[1], 3000)).toBe(false);
    expect(wanted(places[1], 400)).toBe(true);
    expect(wanted(places[3], 500)).toBe(true);
    expect(priority(places[0])).toBeGreaterThan(priority(places[1]));
  });
});

describe("scale bar", () => {
  it("picks the round length nearest the target width", () => {
    expect(niceScale(1)).toEqual({ km: 100, px: 100 });
    expect(niceScale(0.1).km).toBe(10);
  });
});
