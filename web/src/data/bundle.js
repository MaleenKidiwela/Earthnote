import { projection } from "../scene/geo.js";
import { makeGrid } from "../scene/grid.js";

export const BUNDLE_BASE = `${import.meta.env.BASE_URL}pnw/`;
export const BUILD_COMMAND = "PYTHONPATH=src .venv/bin/python -m earthnote_data.build_bundle --terrain";

export class BundleMissingError extends Error {}

async function binary(url, bytes, fetchImpl) {
  const res = await fetchImpl(url);
  // Vite's SPA fallback answers a missing file with 200 text/html, so check the type and the size too
  if (res.status === 404 || res.headers?.get("content-type")?.includes("html")) throw new BundleMissingError(`The map data is missing: ${url}. Build it with:`);
  if (!res.ok) throw new Error(`Could not load ${url} (HTTP ${res.status})`);
  const buf = await res.arrayBuffer();
  if (bytes != null && buf.byteLength !== bytes) throw new BundleMissingError(`The map data is incomplete: ${url} has ${buf.byteLength} bytes, expected ${bytes}. Rebuild it with:`);
  return buf;
}

// The manifest, the outer and overview grids, and the line layers; detail tiles load later, as the camera needs them.
export async function loadBundle(base = BUNDLE_BASE, fetchImpl = fetch) {
  const res = await fetchImpl(`${base}manifest.json`);
  if (!res.ok || res.headers?.get("content-type")?.includes("html")) throw new BundleMissingError("The map data has not been built yet. Build it with:");
  const manifest = await res.json();
  const P = projection(manifest.projection), t = manifest.terrain;
  const grid = (name, m) => binary(`${base}terrain/${name}.bin`, m.ncols * m.nrows * 2, fetchImpl).then(b => makeGrid(m, b, P));
  const lines = {};
  const lineJobs = Object.entries({ ...manifest.roads, ...manifest.borders }).map(async ([name, l]) => {
    lines[name] = new Float32Array(await binary(`${base}${l.file}`, l.segments * 24, fetchImpl));
  });
  const [outer, overview, places] = await Promise.all([
    grid("outer", t.outer), grid("overview", t.overview),
    fetchImpl(`${base}${manifest.places.file}`).then(r => r.json()),
    ...lineJobs,
  ]);
  return { base, manifest, P, outer, overview, lines, places, waterUrl: `${base}${manifest.water.overview.file}` };
}
