import { describe, expect, it } from "vitest";
import { projection } from "./geo.js";
import { fillIndex, indexGrid, selectDrape, tileBounds, tileOf } from "./VectorDrape.js";

const P = projection({ lon0: -122.55, lat0: 46.25, kx: 77.0, kz: 111.13 });

describe("web mercator tiles", () => {
  it("round-trips a point through its tile", () => {
    const [x, y] = tileOf(14, -122.33, 47.61), b = tileBounds(14, x, y);
    expect(b.west).toBeLessThanOrEqual(-122.33); expect(b.east).toBeGreaterThan(-122.33);
    expect(b.south).toBeLessThanOrEqual(47.61); expect(b.north).toBeGreaterThan(47.61);
  });
});

describe("street tile selection", () => {
  const region = { west: -122.6, east: -122.0, south: 47.4, north: 47.8 };
  const cam = [P.toX(-122.33), 5, P.toZ(47.61)];
  it("wants fine tiles under a close camera and none far out", () => {
    const near = selectDrape(region, cam, P, () => false, { reach: 20 });
    expect(near.show).toEqual([]);
    expect(near.want.some(k => k.startsWith("14/"))).toBe(true);
    expect(selectDrape(region, [cam[0], 2000, cam[2]], P, () => false).want).toEqual([]);
  });
  it("shows a ready parent until all four children are ready, then the children", () => {
    const want = selectDrape(region, cam, P, () => false, { reach: 20 }).want;
    const leaf = want.find(k => k.startsWith("14/"));
    const [, x, y] = leaf.split("/").map(Number), parent = `13/${x >> 1}/${y >> 1}`;
    const kids = [0, 1].flatMap(dy => [0, 1].map(dx => `14/${(x >> 1) * 2 + dx}/${(y >> 1) * 2 + dy}`));
    const some = new Set([parent, kids[0]]);
    expect(selectDrape(region, cam, P, k => some.has(k), { reach: 20 }).show).toContain(parent);
    const all = new Set([parent, ...kids]);
    const s = selectDrape(region, cam, P, k => all.has(k), { reach: 20 }).show;
    expect(s).not.toContain(parent);
    expect(s).toEqual(expect.arrayContaining(kids));
  });
});

describe("street index", () => {
  const region = { west: -122.6, east: -122.0, south: 47.4, north: 47.8 };
  it("is aligned so zoom-11 tiles cover whole texels, and covers the region", () => {
    const g = indexGrid(region), [xa, ya] = tileOf(14, region.west, region.north), [xb, yb] = tileOf(14, region.east, region.south);
    expect(g.x0 % 8).toBe(0); expect(g.y0 % 8).toBe(0);
    expect(g.x0).toBeLessThanOrEqual(xa); expect(g.y0).toBeLessThanOrEqual(ya);
    expect(g.x0 + g.width - 1).toBe(xb); expect(g.y0 + g.height - 1).toBe(yb);
  });
  it("marks each tile's texels with its layer and zoom difference", () => {
    const g = indexGrid(region), data = new Uint8Array(g.width * g.height * 4);
    const x11 = g.x0 / 8 + 1, y11 = g.y0 / 8 + 1;                     // a zoom-11 tile: 8 x 8 texels
    const [x14, y14] = [g.x0 + 2, g.y0 + 3];                           // a zoom-14 tile: one texel
    fillIndex(data, g, [[`11/${x11}/${y11}`, 5], [`14/${x14}/${y14}`, 7]]);
    const at = (c, r) => Array.from(data.subarray((r * g.width + c) * 4, (r * g.width + c) * 4 + 4));
    expect(at(8, 8)).toEqual([5, 3, 0, 255]); expect(at(15, 15)).toEqual([5, 3, 0, 255]);
    expect(at(16, 8)).toEqual([0, 0, 0, 0]);
    expect(at(2, 3)).toEqual([7, 0, 0, 255]); expect(at(3, 3)).toEqual([0, 0, 0, 0]);
  });
});
