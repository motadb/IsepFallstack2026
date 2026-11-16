// Gera index.html: um único ficheiro, sem dependências externas (funciona offline).
// Uso: node build.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { extname, basename, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const read = p => readFileSync(join(root, p), 'utf8');
const MIME = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.gif': 'image/gif', '.webp': 'image/webp' };

const images = {};
for (const f of readdirSync(join(root, 'assets'))) {
  const mime = MIME[extname(f).toLowerCase()];
  if (!mime) continue;  // (vídeos tratam-se à parte)
  images[basename(f, extname(f))] = `data:${mime};base64,` + readFileSync(join(root, 'assets', f)).toString('base64');
}

const VIDEO = 'data:video/mp4;base64,' + readFileSync(join(root, 'assets', 'devscope-video.mp4')).toString('base64');
const safe = s => s.replace(/<\/script/gi, '<\\/script');
const html = read('src/template.html')
  .replace('/*__D3__*/', () => safe(read('src/d3.min.js')))
  .replace('/*__IMAGES__*/', () => 'const IMG = ' + JSON.stringify(images) + ';')
  .replace('/*__VIDEO__*/', () => 'const VIDEOS = { devscope: ' + JSON.stringify(VIDEO) + ' };')
  .replace('/*__CONTENT__*/', () => safe(read('src/content.js')));

writeFileSync(join(root, 'index.html'), html);
console.log(`index.html: ${(html.length / 1024 / 1024).toFixed(2)} MB, ${Object.keys(images).length} imagens`);
