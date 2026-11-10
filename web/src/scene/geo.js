// Local equirectangular projection from the bundle's manifest. 1 unit = 1 km; x east, z south (north is -z).
export function projection({ lon0, lat0, kx, kz }) {
  return {
    lon0, lat0, kx, kz,
    toX: lon => (lon - lon0) * kx,
    toZ: lat => -(lat - lat0) * kz,
    fromX: x => x / kx + lon0,
    fromZ: z => -z / kz + lat0,
  };
}
