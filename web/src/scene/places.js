// Named views for the Go to panel: [key, label, {ll: [lon, lat], dist km, polar rad, az rad}].
export const VIEWS = [
  ["home", "Pacific Northwest", { ll: [-122.6, 46.0], dist: 2400, polar: 0.42, az: 0 }],
  ["ocean", "Offshore approach", { ll: [-127.5, 45.4], dist: 2300, polar: 0.85, az: 0.75 }],
  ["puget", "Puget Sound", { ll: [-122.35, 47.55], dist: 210, polar: 0.75, az: 0 }],
  ["seattle", "Seattle streets", { ll: [-122.32, 47.605], dist: 16, polar: 0.8, az: 0.25 }],
  ["mercer", "Mercer Island", { ll: [-122.23, 47.57], dist: 9, polar: 0.7, az: 0 }],
  ["fraser", "Fraser Valley", { ll: [-122.3, 49.1], dist: 170, polar: 0.8, az: 0.15 }],
  ["skagit", "Skagit & Nooksack", { ll: [-122.05, 48.62], dist: 170, polar: 0.8, az: 0 }],
  ["olympics", "Olympic Peninsula", { ll: [-123.65, 47.75], dist: 230, polar: 0.8, az: 0.4 }],
  ["rainier", "Mount Rainier", { ll: [-121.76, 46.85], dist: 75, polar: 0.95, az: 0.3 }],
  ["portland", "Portland & the Gorge", { ll: [-122.2, 45.6], dist: 190, polar: 0.8, az: 0 }],
  ["willamette", "Willamette Valley", { ll: [-123.0, 44.75], dist: 330, polar: 0.7, az: 0 }],
  ["basin", "Columbia Basin", { ll: [-119.4, 46.8], dist: 480, polar: 0.65, az: 0 }],
];
export const VIEW_BY_KEY = Object.fromEntries(VIEWS.map(([k, , v]) => [k, v]));
