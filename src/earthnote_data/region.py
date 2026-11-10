"""The map region: Washington, Oregon, southern British Columbia and the offshore margin to the deformation front."""

# Degrees. The west edge frames the north end of Vancouver Island (Cape Scott, -128.4); off Washington and Oregon it
# keeps the shelf, slope and deformation front (about -125). The east edge takes in Oregon's Snake River border.
WEST, EAST, SOUTH, NORTH = -128.8, -116.3, 41.5, 51.0

# Outer grid: coarse ocean and surroundings, so atmospheric fields (an atmospheric river comes in from the southwest)
# have room offshore. GMRT's 2 km spacing; the region's grids draw over it.
OUTER = {"west": -140.0, "east": -105.0, "south": 36.0, "north": 56.0}
OUTER_MRES = 2000   # GMRT mresolution (m), which snaps to 0.017578125 deg

# Detail lattice: nodes every 1/PER_DEG degrees (about 250 m north-south, 170 m east-west at 47 N). A multiple of
# 8, so the overview's nodes (and every second of them, drawn from afar) fall on the detail tiles' edges.
PER_DEG = 448
# The overview takes every OVERVIEW_STEP-th node of the detail lattice (about 1 km).
OVERVIEW_STEP = 4
# Detail tiles span TILE_DEG degrees; tiles on the region's edge are cut short.
TILE_DEG = 1

# Local equirectangular projection centre for the 3D scene (the web app uses the same values).
LON0, LAT0 = (WEST + EAST) / 2, (SOUTH + NORTH) / 2


def lattice_shape() -> tuple[int, int]:
    """Node counts (cols, rows) of the detail lattice, corner-registered on the region's edges."""
    return round((EAST - WEST) * PER_DEG) + 1, round((NORTH - SOUTH) * PER_DEG) + 1
