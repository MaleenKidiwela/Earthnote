import { describe, expect, it } from "vitest";
import { frameUrl, metAt, rainFromBytes, resample, runLabel, sourceAt, utc } from "./event.js";
import { sourceText } from "../ui/StormPanel.jsx";

const doc = {
  t0: Date.UTC(2026, 10, 8, 8), hours: 192,
  obs: { rain: { 0: "pass2", 1: "pass1" } },
  obsRain: new Set([0, 1]), obsMet: new Set([0]),
  models: { hrrr: { label: "HRRR" } },
  runList: { hrrr: [
    { init: "2026110800", frames: new Set([0, 1, 2, 3]) },
    { init: "2026110806", frames: new Set([2, 3, 4]) },
  ] },
};

describe("sources", () => {
  it("blend: observed where measured, else the newest run that reaches the hour", () => {
    expect(sourceAt(doc, 1, { mode: "blend", model: "hrrr" })).toEqual({ type: "obs" });
    expect(sourceAt(doc, 1, { mode: "blend", model: "hrrr" }, "met")).toEqual({ type: "fc", model: "hrrr", init: "2026110800" });
    expect(sourceAt(doc, 3, { mode: "blend", model: "hrrr" })).toEqual({ type: "fc", model: "hrrr", init: "2026110806" });
    expect(sourceAt(doc, 9, { mode: "blend", model: "hrrr" })).toBeNull();
  });
  it("gusts: the analysis where recorded, else the forecast", () => {
    const d = { ...doc, obsGust: new Set([0]) };
    expect(sourceAt(d, 0, { mode: "blend", model: "hrrr" }, "gust")).toEqual({ type: "obs" });
    expect(sourceAt(d, 1, { mode: "blend", model: "hrrr" }, "gust")).toEqual({ type: "fc", model: "hrrr", init: "2026110800" });
    expect(sourceAt({ ...doc, obsGust: undefined }, 0, { mode: "blend", model: "hrrr" }, "gust")?.type).toBe("fc");
  });
  it("run: only that run's hours", () => {
    expect(sourceAt(doc, 1, { mode: "run", model: "hrrr", init: "2026110806" })).toBeNull();
    expect(sourceAt(doc, 4, { mode: "run", model: "hrrr", init: "2026110806" })?.init).toBe("2026110806");
  });
  it("labels the source", () => {
    expect(sourceText(doc, { type: "obs" }, 1)).toMatch(/provisional/);
    expect(sourceText(doc, { type: "fc", model: "hrrr", init: "2026110806" }, 4)).toBe("forecast · HRRR Nov 8 06z +7 h");
  });
});

describe("frames", () => {
  it("decodes rain bytes, 255 as no data", () => {
    const mm = rainFromBytes(new Uint8Array([25, 25, 25, 255, 255, 255, 255, 255, 0, 0, 0, 255]), 3);
    expect(mm[0]).toBe(1); expect(mm[1]).toBeNaN(); expect(mm[2]).toBe(0);
  });
  it("decodes wind and temperature", () => {
    expect(metAt(new Uint8Array([168, 88, 160, 255]), 0)).toEqual({ u: 10, v: -10, t: 10 });
    expect(metAt(new Uint8Array([168, 88, 160, 0]), 0)).toBeNull();
  });
  it("resamples between grids on the same box, skipping no-data neighbours", () => {
    const coarse = { west: 0, north: 2, cell: 1, cols: 2, rows: 2 };
    const fine = { west: 0, north: 2, cell: 0.5, cols: 4, rows: 4 };
    const out = resample(new Float32Array([0, 4, 8, NaN]), coarse, fine);
    expect(out[0]).toBe(0);                    // corner: nearest cell
    expect(out[1]).toBeCloseTo(1);             // a quarter of the way to 4
    expect(out[10]).toBeCloseTo((0.1875 * 4 + 0.1875 * 8) / 0.4375);   // the NaN neighbour's weight is dropped
    expect(out[15]).toBeNaN();                                       // wholly inside the no-data cell
  });
  it("puts the window's version (and an observed hour's pass) in frame URLs", () => {
    const d = { ...doc, base: "/e/", version: "2026110708-216" };
    expect(frameUrl(d, { type: "obs" }, 1, "rain")).toBe("/e/obs/rain/k001.png?v=2026110708-216&p=pass1");
    expect(frameUrl(d, { type: "obs" }, 1, "met")).toBe("/e/obs/met/k001.png?v=2026110708-216");
    expect(frameUrl(d, { type: "fc", model: "hrrr", init: "2026110806" }, 4, "rain")).toBe("/e/fc/hrrr/2026110806/rain/k004.png?v=2026110708-216");
  });
  it("formats times", () => {
    expect(utc(Date.UTC(2026, 10, 9, 6))).toBe("Nov 9 06:00 UTC");
    expect(runLabel("2026110912")).toBe("Nov 9 12z");
  });
});

describe("power outages", async () => {
  const { powerHour } = await import("../ui/StormPanel.jsx");
  it("shows the hour's snapshot, or one up to 2 hours older, never a future one", () => {
    const d = { power: { frames: { 5: 10, 9: 3 } } };
    expect(powerHour(d, 5)).toBe(5); expect(powerHour(d, 7)).toBe(5); expect(powerHour(d, 8)).toBeNull();
    expect(powerHour(d, 4)).toBeNull(); expect(powerHour({}, 3)).toBeNull();
  });
});

describe("roads", async () => {
  const { roadHour } = await import("../ui/StormPanel.jsx");
  it("follows the same rule as the outages, on its own frames", () => {
    const d = { power: { frames: { 5: 10 } }, roads: { frames: { 67: { closure: 8 } } } };
    expect(roadHour(d, 67)).toBe(67); expect(roadHour(d, 69)).toBe(67); expect(roadHour(d, 5)).toBeNull();
    expect(roadHour({}, 67)).toBeNull();
  });
});

describe("sewer overflows", async () => {
  const { sewerHour } = await import("../ui/StormPanel.jsx");
  it("uses its own recorded frames", () => {
    expect(sewerHour({ sewers: { frames: { 3: 1 } } }, 4)).toBe(3); expect(sewerHour({ roads: { frames: { 3: {} } } }, 3)).toBeNull();
  });
});
