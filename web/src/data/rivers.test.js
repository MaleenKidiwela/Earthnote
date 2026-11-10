import { describe, expect, it } from "vitest";
import { category, flowOf, parseReaches, riverSource } from "./rivers.js";

describe("reaches", () => {
  it("reads the binary layout rivers.py writes", () => {
    // 3 reaches, 2 paths of 2 and 3 vertices
    const n = 3, m = 2, v = 5, parts = [
      new Float32Array(n * 6).map((_, i) => i), new Uint16Array([2, 0, 1, 0]), new Uint8Array([4, 5, 6, 0]),
      new Uint32Array([0, 2, 5]), new Uint32Array([0, 2]), new Float32Array(v * 2).map((_, i) => -120 + i),
    ];
    const bytes = new Uint8Array(parts.reduce((s, p) => s + p.byteLength, 0));
    let o = 0; for (const p of parts) { bytes.set(new Uint8Array(p.buffer), o); o += p.byteLength; }
    const r = parseReaches({ count: n, paths: m, vertices: v, names: ["a", "b", "c"] }, bytes.buffer);
    expect(r.thr[7]).toBe(7); expect(Array.from(r.name)).toEqual([2, 0, 1]); expect(Array.from(r.order)).toEqual([4, 5, 6]);
    expect(Array.from(r.offsets)).toEqual([0, 2, 5]); expect(r.owner[1]).toBe(2); expect(r.coords[9]).toBe(-111);
  });
  it("decodes flows and grades them against the thresholds, skipping missing ones", () => {
    expect(flowOf(0)).toBe(0); expect(flowOf(255)).toBeNaN();
    expect(flowOf(40)).toBeCloseTo(0.45); expect(flowOf(160)).toBeCloseTo(499.95);
    const thr = new Float32Array([10, 20, 30, 40, 50, 60, 0, 20, 30, 0, 0, 0]);
    expect(category(5, thr, 0)).toBe(0); expect(category(10, thr, 0)).toBe(1); expect(category(45, thr, 0)).toBe(4);
    expect(category(25, thr, 1)).toBe(2); expect(category(1e6, thr, 1)).toBe(3);
  });
});

describe("river sources", () => {
  const doc = { rivers: { obs: [0, 1, 2] }, t0: Date.UTC(2026, 10, 7, 8), updated: "2026-11-07T14:30:00Z" };   // hours 0-5 have ended
  it("the analysis hour itself where there is one", () => {
    expect(riverSource(doc, 1)).toEqual({ type: "obs", k: 1 });
  });
  it("a past hour without its analysis yet keeps the latest analysis, briefly; hours ahead have none", () => {
    expect(riverSource(doc, 4)).toEqual({ type: "obs", k: 2 });
    expect(riverSource(doc, 6)).toBeNull();                                               // not yet ended
    expect(riverSource({ ...doc, updated: "2026-11-07T20:00:00Z" }, 6)).toBeNull();        // analysis too old
    expect(riverSource(doc, 150)).toBeNull();
  });
  it("what if: the newest forecast only after the latest analysis, short range before medium", () => {
    const d = { ...doc, rivers: { obs: [0, 1, 2], whatif: { short: { init: "2026110713", first: 0, count: 18 }, medium: { init: "2026110712", first: 0, count: 200 } } } };
    expect(riverSource(d, 2)).toEqual({ type: "obs", k: 2 });                               // the record wins
    expect(riverSource(d, 6)).toEqual({ type: "whatif", kind: "short", init: "2026110713", i: 6 });
    expect(riverSource(d, 30)).toEqual({ type: "whatif", kind: "medium", init: "2026110712", i: 30 });
    expect(riverSource(d, 30, false)).toBeNull();
    // the next update brings hours 3-7: they replace the what-if
    expect(riverSource({ ...d, rivers: { ...d.rivers, obs: [0, 1, 2, 3, 4, 5, 6, 7] } }, 6)).toEqual({ type: "obs", k: 6 });
  });
});

describe("wall heights", async () => {
  const { wallUnits } = await import("../scene/RiverLayer.js");
  it("grow by doubling from the flow before the storm, and shrink below it", () => {
    expect(wallUnits(10, 10)).toBeCloseTo(0.2);
    expect(wallUnits(20, 10)).toBeCloseTo(0.65);
    expect(wallUnits(40, 10)).toBeCloseTo(1.1);
    expect(wallUnits(5, 10)).toBeCloseTo(0.1);
    expect(wallUnits(0.4, 0.01)).toBeCloseTo(0.65);   // a trickle is measured against 0.2 m3/s
    expect(wallUnits(1e9, 1)).toBe(4);
  });
});

describe("reservoirs", async () => {
  const { esc, levelAt, shortName } = await import("../overlay/ReservoirMarkers.js");
  it("escapes feed text bound for the tooltip's HTML", () => {
    expect(esc(`<img src=x onerror="a('b')">&`)).toBe("&lt;img src=x onerror=&quot;a(&#39;b&#39;)&quot;&gt;&amp;");
  });
  it("shortens USGS site names", () => {
    expect(shortName("HOWARD A HANSON RESERVOIR NEAR PALMER, WA")).toBe("Howard A Hanson Reservoir");
    expect(shortName("LAKE CHELAN AT CHELAN, WA")).toBe("Lake Chelan");
    expect(shortName("LENORE LK NEAR SOAP LK, WA")).toBe("Lenore Lake");
    expect(shortName("Bonneville Dam and Lake On Columbia River")).toBe("Bonneville Dam and Lake");
    expect(shortName("Prineville Reservoir near Prineville 13S")).toBe("Prineville Reservoir");
    expect(shortName("Waneta Dam (Pend Oreille River BC)")).toBe("Waneta Dam");
  });
  it("gives the level at an hour, or the latest before it, and the change since the first reading", () => {
    const s = { elev: [null, 100, 101.5, null, null], storage: null };
    expect(levelAt(s, 0)).toBeNull();
    expect(levelAt(s, 2)).toMatchObject({ elev: 101.5, change: 1.5, latest: false });
    expect(levelAt(s, 4)).toMatchObject({ elev: 101.5, at: 2, latest: true });
  });
});

describe("gauges", async () => {
  const { categoryOf, impactFor, stageAt } = await import("../overlay/GaugeMarkers.js");
  const site = { cats: { action: 50.7, minor: 54, moderate: 56, major: 58 }, impacts: [[51, "banks"], [54, "farms"]],
    obs: [45, 46, null, 47, null, null, null], fc: [null, null, null, null, 52, 55, null] };
  it("grades a stage against the flood categories", () => {
    expect(categoryOf(site, 50)).toBeNull(); expect(categoryOf(site, 50.7)).toBe("action"); expect(categoryOf(site, 57)).toBe("moderate");
  });
  it("measured where measured, a gap stays a gap, the forecast only after the record", () => {
    expect(stageAt(site, 1)).toEqual({ stage: 46, type: "obs" });
    expect(stageAt(site, 2)).toBeNull();
    expect(stageAt(site, 4)).toEqual({ stage: 52, type: "fc" });
    expect(stageAt(site, 4, false)).toEqual({ stage: 47, type: "obs", latest: true });
    expect(stageAt(site, 6, false)).toBeNull();
  });
  it("finds the impact reached and the next one", () => {
    expect(impactFor(site, 52)).toEqual({ now: { stage: 51, text: "banks" }, next: { stage: 54, text: "farms" } });
    expect(impactFor(site, 40).now).toBeNull();
  });
});

describe("flood outlines", async () => {
  const { floodHour } = await import("../ui/StormPanel.jsx");
  const { shapesOf } = await import("../scene/FloodLayer.js");
  it("shows the hour's outlines, or the newest within 2 hours before it", () => {
    const doc = { rivers: { inundation: { 55: { n: 17 }, 57: { n: 20 } } } };
    expect(floodHour(doc, 55)).toBe(55); expect(floodHour(doc, 56)).toBe(55); expect(floodHour(doc, 59)).toBe(57);
    expect(floodHour(doc, 60)).toBeNull(); expect(floodHour(doc, 40)).toBeNull();
  });
  it("groups holes with the outer ring before them", () => {
    const outer = [[0, 0], [0, 1], [1, 1], [1, 0]], hole = [[0.2, 0.2], [0.8, 0.2], [0.8, 0.8], [0.2, 0.8]];
    const s = shapesOf([outer, hole, outer]);
    expect(s.length).toBe(2); expect(s[0][1].length).toBe(1); expect(s[1][1].length).toBe(0);
  });
});

describe("tides", async () => {
  const { floodOf, tideAt } = await import("../overlay/TideMarkers.js");
  const site = { obs: [8, 9, null, null], pred: [7.5, 8.2, 9, 10], flood: { minor: 9.5, moderate: 10 } };
  it("observed with its surge where measured, the predicted tide after the record", () => {
    expect(tideAt(site, 1)).toMatchObject({ level: 9, type: "obs" }); expect(tideAt(site, 1).surge).toBeCloseTo(0.8);
    expect(tideAt(site, 3)).toEqual({ level: 10, pred: 10, surge: null, type: "pred" });
  });
  it("grades the level against the coastal flood levels", () => {
    expect(floodOf(site, 9)).toBeNull(); expect(floodOf(site, 9.6)).toBe("minor"); expect(floodOf(site, 10.2)).toBe("moderate");
  });
});

describe("sea hours", async () => {
  const { seaHour } = await import("../ui/StormPanel.jsx");
  const doc = { sea: { obs: [0, 1, 2], fc: { run: "2026110915", frames: [2, 3, 4] } } };
  it("the nowcast where posted, the newest run's forecast after it, if asked", () => {
    expect(seaHour(doc, 2)).toEqual({ type: "obs" });
    expect(seaHour(doc, 3)).toEqual({ type: "fc", run: "2026110915" });
    expect(seaHour(doc, 3, false)).toBeNull();
    expect(seaHour(doc, 9)).toBeNull();
  });
});

describe("snow stations", async () => {
  const { snowKey, soilKey } = await import("../overlay/SnowMarkers.js");

  it("follow snow water, else snow depth", () => {
    expect(snowKey({ swe: [0, 0.1], sm2: [20, 22] }).key).toBe("swe");
    expect(snowKey({ swe: [null, null], depth: [0, 3] }).key).toBe("depth");
    expect(snowKey({ sm2: [20, 22] })).toBeNull();
  });

  it("follow the shallowest soil sensor that reads, passing over a stuck one", () => {
    expect(soilKey({ sm2: [20, 22], sm8: [30, 31] }).key).toBe("sm2");
    expect(soilKey({ sm2: [0, 0, null], sm8: [15.9, 16.4] }).key).toBe("sm8");
    expect(soilKey({ sm2: [0, 0], swe: [1, 2] })).toBeNull();
  });

  it("keep a well's level series through hour changes", async () => {
    const { WellMarkers } = await import("../overlay/WellMarkers.js");
    const node = { classList: { toggle() {} }, querySelector: () => ({}) };
    const m = Object.assign(Object.create(WellMarkers.prototype), { items: [{ level: [1, 1.5], key: "level", node, short: "well 1" }] });
    m.setHour(1); m.setHour(0);
    expect(m.items[0].level).toEqual([1, 1.5]); expect(m.items[0].now).toMatchObject({ elev: 1, change: 0 });
  });

  it("read any series by key", async () => {
    const { levelAt } = await import("../overlay/ReservoirMarkers.js");
    expect(levelAt({ sm8: [null, 30, 34] }, 2, "sm8")).toMatchObject({ elev: 34, change: 4, key: "sm8" });
  });
});
