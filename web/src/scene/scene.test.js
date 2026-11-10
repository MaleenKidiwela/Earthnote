import { describe, expect, it } from "vitest";
import { boxDistance, selectTiles } from "./DetailTiles.js";
import { projection } from "./geo.js";
import { chunkWindows, makeGrid, terrainArrays } from "./grid.js";
import { drapeHeights } from "./LineLayer.js";
import { orbitPose, viewPose } from "./cameraMath.js";

const P = projection({ lon0: -122, lat0: 46, kx: 77.3, kz: 111.13 });
// 3 x 3 grid of 0.1 degree cells: heights rise 10 m per column eastward, 100 m per row southward
const meta = { ncols: 3, nrows: 3, west: -122.15, south: 45.85, cellsize: 0.1 };
const grid = makeGrid(meta, new Int16Array([0, 10, 20, 100, 110, 120, 200, 210, 220]).buffer, P);

describe("projection", () => {
  it("round-trips lon/lat and puts north at -z", () => {
    expect(P.fromX(P.toX(-121.3))).toBeCloseTo(-121.3, 10);
    expect(P.fromZ(P.toZ(47.2))).toBeCloseTo(47.2, 10);
    expect(P.toZ(47)).toBeLessThan(P.toZ(46));
  });
});

describe("grids", () => {
  it("samples cell centres exactly and interpolates between them", () => {
    expect(grid.sample(-122.1, 46.1)).toBeCloseTo(0);        // north-west node
    expect(grid.sample(-122.0, 46.0)).toBeCloseTo(110);      // centre node
    expect(grid.sample(-122.05, 46.0)).toBeCloseTo(105);
    expect(grid.sample(-123, 46)).toBeNull();
  });

  it("uses one-sided differences at the edges, over the true baseline", () => {
    const a = terrainArrays(grid, P);
    const dx = 0.1 * P.kx;
    expect(a.grad[0]).toBeCloseTo(10 / dx, 6);               // edge column: one cell, not half the slope
    expect(a.grad[4 * 2]).toBeCloseTo(20 / (2 * dx), 6);     // centre: central difference
  });

  it("adds a skirt ring dropped below the edge", () => {
    const a = terrainArrays(grid, P, 1, 150);
    expect(a.position.length / 3).toBe(9 + 8);
    expect([...a.drop.slice(9)].every(d => d === 150)).toBe(true);
  });

  it("chunks share edge nodes and cover the grid", () => {
    const w = chunkWindows(11, 7, 4, 2);
    expect(w[0]).toEqual([0, 0, 4, 4]);
    expect(Math.max(...w.map(x => x[2]))).toBe(10);
    expect(Math.max(...w.map(x => x[3]))).toBe(6);
    for (const [c0, r0, c1, r1] of w) { expect((c1 - c0) % 2).toBe(0); expect((r1 - r0) % 2).toBe(0); }
  });
});

describe("detail tiles", () => {
  const tiles = [
    { key: "a", box: [0, 10, 0, 10], lo: 0, hi: 1 },
    { key: "b", box: [100, 110, 0, 10], lo: 0, hi: 1 },
    { key: "c", box: [400, 410, 0, 10], lo: 0, hi: 1 },
  ];
  it("measures camera-to-box distance", () => {
    expect(boxDistance([5, 0.5, 5], [0, 10, 0, 10], 0, 1)).toBe(0);
    expect(boxDistance([20, 0, 5], [0, 10, 0, 10])).toBe(10);
  });
  it("picks near tiles nearest first, full detail only up close, none from far out", () => {
    const s = selectTiles(tiles, [5, 30, 5], 40);
    expect(s.map(x => x.key)).toEqual(["a", "b"]);
    expect(s[0].level).toBe(0);
    expect(s[1].level).toBe(0);
    expect(selectTiles(tiles, [5, 30, 5], 2000)).toEqual([]);
  });
});

describe("draped lines", () => {
  it("lie on detail heights where tiles are drawn, else on the higher of detail and overview", () => {
    const segs = new Float32Array([P.toX(-122), 50, P.toZ(46), P.toX(-121), 50, P.toZ(46)]);
    const y = drapeHeights(segs, P, lon => lon < -121.5, () => 80);
    expect(y[0]).toBe(50 + 12);
    expect(y[1]).toBe(80 + 12);
  });
});

describe("camera", () => {
  it("frames a view from the south when heading north", () => {
    const p = viewPose({ ll: [-122, 46], dist: 100, polar: Math.PI / 4, az: 0 }, P, () => 0, 0.003);
    expect(p.pos[2]).toBeGreaterThan(p.target[2]);
    expect(Math.hypot(...p.pos.map((v, i) => v - p.target[i]))).toBeCloseTo(100);
  });
  it("north-up keeps distance and puts the camera due south of the target", () => {
    const pos = orbitPose([30, 40, 30], [0, 0, 0], { northUp: true });
    expect(pos[0]).toBeCloseTo(0);
    expect(Math.hypot(...pos)).toBeCloseTo(Math.hypot(30, 40, 30));
  });
});
