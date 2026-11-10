// Int16 elevation grids (metres, row 0 at the north edge). `west`/`south` are the outer cell edges and samples sit at
// cell centres, as the data bundle writes them.
export function makeGrid(meta, buffer, P) {
  const { ncols, nrows, west, south, cellsize } = meta;
  const heights = buffer instanceof Int16Array ? buffer : new Int16Array(buffer);
  const H = (r, c) => heights[Math.min(nrows - 1, Math.max(0, r)) * ncols + Math.min(ncols - 1, Math.max(0, c))];
  const north = south + nrows * cellsize, east = west + ncols * cellsize;
  // bilinear; null outside the grid's sample footprint
  const sample = (lon, lat) => {
    const fc = (lon - west) / cellsize - 0.5, fr = (north - lat) / cellsize - 0.5;
    if (fc < 0 || fr < 0 || fc > ncols - 1 || fr > nrows - 1) return null;
    const c0 = Math.min(Math.floor(fc), ncols - 2), r0 = Math.min(Math.floor(fr), nrows - 2), tc = fc - c0, tr = fr - r0;
    const top = H(r0, c0) * (1 - tc) + H(r0, c0 + 1) * tc, bot = H(r0 + 1, c0) * (1 - tc) + H(r0 + 1, c0 + 1) * tc;
    return top * (1 - tr) + bot * tr;
  };
  // node footprint in scene km: [x0, x1, z0, z1] (z0 is the north edge)
  const box = [P.toX(west + cellsize / 2), P.toX(east - cellsize / 2), P.toZ(north - cellsize / 2), P.toZ(south + cellsize / 2)];
  return { meta, heights, H, sample, box, north, east };
}

// Vertex arrays for every `step`-th sample of a grid: x/z positions (km), elevation (m), the elevation gradient
// (m per km, east and south) for shading, and optionally a skirt: a ring of edge vertices `skirt` metres lower, so
// a tile's edge never shows a crack against coarser terrain behind it.
// `win` = [c0, r0, c1, r1] limits the mesh to that node window (inclusive), for chunked grids.
export function terrainArrays(grid, P, step = 1, skirt = 0, win = null) {
  const { west, cellsize } = grid.meta, H = grid.H;
  const [c0, r0, c1, r1] = win ?? [0, 0, grid.meta.ncols - 1, grid.meta.nrows - 1];
  const n = Math.floor((c1 - c0) / step) + 1, m = Math.floor((r1 - r0) / step) + 1;
  const ring = skirt ? 2 * (n + m) - 4 : 0, count = n * m + ring;
  const position = new Float32Array(count * 3), elev = new Float32Array(count), grad = new Float32Array(count * 2), drop = new Float32Array(count);
  const latOf = r => grid.north - (r + 0.5) * cellsize;
  const { ncols, nrows } = grid.meta, kx = cellsize * P.kx, kz = cellsize * P.kz;
  let i = 0;
  for (let rr = 0; rr < m; rr++) {
    const r = r0 + rr * step, z = P.toZ(latOf(r));
    const ra = Math.max(0, r - step), rb = Math.min(nrows - 1, r + step);
    for (let cc = 0; cc < n; cc++, i++) {
      const c = c0 + cc * step;
      position[i * 3] = P.toX(west + (c + 0.5) * cellsize); position[i * 3 + 2] = z;
      elev[i] = H(r, c);
      // central differences, one-sided at the grid's edge (over the true baseline, so edges are not flattened)
      const ca = Math.max(0, c - step), cb = Math.min(ncols - 1, c + step);
      grad[i * 2] = (H(r, cb) - H(r, ca)) / ((cb - ca) * kx);
      grad[i * 2 + 1] = (H(rb, c) - H(ra, c)) / ((rb - ra) * kz);   // rows run south = +z
    }
  }
  const index = new Uint32Array(6 * ((n - 1) * (m - 1) + ring));
  let q = 0;
  for (let r = 0; r < m - 1; r++) for (let c = 0; c < n - 1; c++) {
    const a = r * n + c, b = a + 1, d = a + n, e = d + 1;
    index[q++] = a; index[q++] = d; index[q++] = b; index[q++] = b; index[q++] = d; index[q++] = e;
  }
  if (skirt) {
    const edge = [];
    for (let c = 0; c < n; c++) edge.push(c);
    for (let r = 1; r < m; r++) edge.push(r * n + n - 1);
    for (let c = n - 2; c >= 0; c--) edge.push((m - 1) * n + c);
    for (let r = m - 2; r >= 1; r--) edge.push(r * n);
    const base = n * m;
    edge.forEach((src, k) => {
      const j = base + k;
      position.set(position.subarray(src * 3, src * 3 + 3), j * 3);
      elev[j] = elev[src]; grad[j * 2] = grad[src * 2]; grad[j * 2 + 1] = grad[src * 2 + 1]; drop[j] = skirt;
    });
    for (let k = 0; k < edge.length; k++) {
      const a = edge[k], b = edge[(k + 1) % edge.length], a2 = base + k, b2 = base + ((k + 1) % edge.length);
      index[q++] = a; index[q++] = b; index[q++] = a2; index[q++] = b; index[q++] = b2; index[q++] = a2;
    }
  }
  return { position, elev, grad, drop, index, n, m };
}

// Node windows [c0, r0, c1, r1] that split a grid into roughly `size`-node chunks sharing their edge nodes; each
// window's extent is a multiple of `step`, so a coarse level's chunks meet without cracks.
export function chunkWindows(ncols, nrows, size, step = 1) {
  const span = Math.max(step, Math.round(size / step) * step), out = [];
  for (let r0 = 0; r0 < nrows - 1; r0 += span) {
    const r1 = Math.min(r0 + span, r0 + Math.floor((nrows - 1 - r0) / step) * step);
    for (let c0 = 0; c0 < ncols - 1; c0 += span) {
      const c1 = Math.min(c0 + span, c0 + Math.floor((ncols - 1 - c0) / step) * step);
      if (c1 > c0 && r1 > r0) out.push([c0, r0, c1, r1]);
    }
  }
  return out;
}

// Geometry for one window, with a bounding box tall enough for any exaggeration (heights are set in the shader),
// so three.js can frustum-cull it.
export function terrainGeometry(THREE, grid, P, step, skirt = 0, win = null) {
  const a = terrainArrays(grid, P, step, skirt, win);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(a.position, 3));
  g.setAttribute("elev", new THREE.BufferAttribute(a.elev, 1));
  g.setAttribute("grad", new THREE.BufferAttribute(a.grad, 2));
  g.setAttribute("drop", new THREE.BufferAttribute(a.drop, 1));
  g.setIndex(new THREE.BufferAttribute(a.index, 1));
  g.computeBoundingBox();
  g.boundingBox.min.y = -60; g.boundingBox.max.y = 50;   // km: 5.5 km deep or 4.4 km high at up to 10x
  g.boundingSphere = g.boundingBox.getBoundingSphere(new THREE.Sphere());
  return g;
}
