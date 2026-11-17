// Gera src/world.svg: mapa-mundo de pontos com o Porto em destaque.
// Dependências (só para gerar): npm i d3-geo world-atlas topojson-client
// Uso: NODE_PATH=<node_modules> node tools/make-world.cjs
const { geoNaturalEarth1, geoContains } = require('d3-geo');
const topo = require('topojson-client');
const world = require('world-atlas/land-110m.json');
const fs = require('fs'), path = require('path');

const W = 800, H = 420, STEP = 2.7;
const land = topo.feature(world, world.objects.land);
const proj = geoNaturalEarth1().fitExtent([[8, 8], [W - 8, H - 8]], { type: 'Sphere' });
const f1 = n => n.toFixed(1);

let dots = '';
for (let lat = 84; lat >= -58; lat -= STEP)
  for (let lon = -180; lon <= 180; lon += STEP) {
    if (!geoContains(land, [lon, lat])) continue;
    const [x, y] = proj([lon, lat]); dots += `M${f1(x)} ${f1(y)}h0`;
  }

const porto = proj([-8.61, 41.15]);
// Destinos ilustrativos (decorativos, sem etiquetas)
const dest = [[-74, 40.7], [-46.6, -23.5], [28, -26], [55, 25], [103.8, 1.35], [139.7, 35.7], [151, -33.9]].map(proj);
let arcs = '', ends = '';
dest.forEach(([x, y], i) => {
  const dx = x - porto[0], dy = y - porto[1], d = Math.hypot(dx, dy);
  const cx = (porto[0] + x) / 2, cy = (porto[1] + y) / 2 - Math.min(110, d * 0.32);
  arcs += `<path class="arc" style="--i:${i}" pathLength="1" d="M${f1(porto[0])} ${f1(porto[1])}Q${f1(cx)} ${f1(cy)} ${f1(x)} ${f1(y)}"/>`;
  ends += `<circle class="end" style="--i:${i}" cx="${f1(x)}" cy="${f1(y)}" r="3.4"/>`;
});

const svg = `<svg class="world" viewBox="0 0 ${W} ${H}" role="img" aria-label="Porto"><path class="land" d="${dots}"/>${arcs}${ends}` +
  `<g class="porto"><circle class="ring r1" cx="${f1(porto[0])}" cy="${f1(porto[1])}" r="9"/><circle class="ring r2" cx="${f1(porto[0])}" cy="${f1(porto[1])}" r="9"/>` +
  `<circle class="core" cx="${f1(porto[0])}" cy="${f1(porto[1])}" r="6.5"/><text x="${f1(porto[0] - 14)}" y="${f1(porto[1] - 16)}" text-anchor="end">Porto</text></g></svg>`;
fs.writeFileSync(path.join(__dirname, '..', 'src', 'world.svg'), svg);
console.log('src/world.svg', (svg.length / 1024).toFixed(1), 'KB');
