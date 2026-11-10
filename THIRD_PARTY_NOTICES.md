# Third-party notices

## Mount Rainier atlas viewer

Parts of `web/src` are adapted from the 3D viewer of
[Denolle-Lab/mt-rainier-digital-model](https://github.com/Denolle-Lab/mt-rainier-digital-model) (`web/viewer/site`):
the camera helpers (`scene/cameraMath.js`), the HUD dock, nav pad and scale bar (`ui/HudDock.jsx`, `ui/NavPad.jsx`,
`ui/ScaleBar.jsx`), the label placement in `overlay/PlaceLabels.js`, and the panel styles in `ui/ui.css` and
`styles/tokens.css`. That viewer is distributed under the following license:

```
MIT License

Copyright (c) 2026 Derek Yao

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Data

The map data bundle (`web/public/pnw/`, built by `src/earthnote_data`) is made from:

- **GMRT** Global Multi-Resolution Topography, Ryan et al. (2009), CC BY 4.0 — terrain and bathymetry.
- **OpenStreetMap** © OpenStreetMap contributors, ODbL — roads, city and town names (Geofabrik extracts).
- **Natural Earth** (public domain) — borders, lakes, peaks.
