import "./overlay.css";

// Pure: greedy placement, highest priority first; a label is dropped if its box overlaps one already placed.
export function place(items) {
  const boxes = [], shown = new Set();
  for (const it of [...items].sort((a, b) => b.priority - a.priority)) {
    const box = [it.x - 4, it.y - it.h / 2, it.x + it.w, it.y + it.h / 2];
    if (!boxes.some(b => !(box[2] < b[0] || box[0] > b[2] || box[3] < b[1] || box[1] > b[3]))) { shown.add(it.id); boxes.push(box); }
  }
  return shown;
}

// Pure: is a place worth labelling with the camera `dist` km out? Big cities always; towns and peaks as you close in.
export function wanted(p, dist) {
  if (p.kind === "peak") return dist < 900;
  if (p.pop >= 150000) return true;
  if (p.pop >= 40000) return dist < 1500;
  if (p.pop >= 8000) return dist < 600;
  return dist < 260;
}

export const priority = p => (p.kind === "peak" ? 6.5 : Math.log10(Math.max(p.pop, 10)));

export class PlaceLabels {
  constructor(root, places, scene) {
    Object.assign(this, { root, places, scene });
    this.el = document.createElement("div"); this.el.className = "place-layer"; root.appendChild(this.el);
    this.items = places.map((p, i) => ({ ...p, id: i, x: scene.P.toX(p.lon), z: scene.P.toZ(p.lat), node: null, on: false }));
    this.visible = true; this._n = 0;
  }

  _node(it) {
    if (!it.node) {
      const d = document.createElement("div");
      d.className = `place ${it.kind}${it.pop >= 150000 ? " major" : ""}`;
      const label = document.createElement("span");
      label.textContent = it.kind === "peak" && it.height ? `${it.name} ${it.height.toLocaleString()} m` : it.name;
      d.append(document.createElement("i"), label);
      this.el.appendChild(d); it.node = d;
      it.w = 14 + label.textContent.length * (it.kind === "city" ? 6.6 : 6.1); it.h = 16;
    }
    return it.node;
  }

  update() {
    if (!this.visible) return;
    if (this._n++ % 2) return;   // every other frame is plenty for labels
    const s = this.scene, dist = s.frame.dist, e = s.e, W = innerWidth, H = innerHeight, cand = [];
    for (const it of this.items) {
      if (!wanted(it, dist)) { it.cand = false; continue; }
      const [x, y, z] = s.project(it.x, (it.elev ?? 0) * e + 0.05, it.z);
      it.cand = z < 1 && x > -40 && x < W + 40 && y > -20 && y < H + 20;
      if (!it.cand) continue;
      this._node(it); it.sx = x; it.sy = y;
      cand.push({ id: it.id, x, y, w: it.w, h: it.h, priority: priority(it) });
    }
    const shown = place(cand);
    for (const it of this.items) {
      const on = it.cand && shown.has(it.id);
      if (on) it.node.style.transform = `translate(${Math.round(it.sx)}px, ${Math.round(it.sy)}px)`;
      if (on !== it.on && it.node) { it.node.style.opacity = on ? 1 : 0; it.on = on; }
    }
  }

  setVisible(on) { this.visible = on; this.el.style.display = on ? "" : "none"; }
  dispose() { this.el.remove(); }
}
