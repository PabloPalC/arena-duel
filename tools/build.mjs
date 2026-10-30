// Arena Duel — build: subconjunto de Three.js para desarrollo + bundle minificado con hash para producción
import { build, transform } from 'esbuild';
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ADDONS = {
  mergeGeometries: 'three/addons/utils/BufferGeometryUtils.js',
  RoundedBoxGeometry: 'three/addons/geometries/RoundedBoxGeometry.js',
};

// 1) qué piezas de Three.js usa el código
const names = new Set();
const scan = [...readdirSync(join(ROOT, 'js')).filter(f => f.endsWith('.js')).map(f => join(ROOT, 'js', f)), join(ROOT, 'tools', 'art.html')];
for (const file of scan) {
  const src = readFileSync(file, 'utf8');
  for (const m of src.matchAll(/import\s*\{([^}]*)\}\s*from\s*'\.\.\/lib\/three\.js'/g)) {
    for (const n of m[1].split(',').map(s => s.trim()).filter(Boolean)) names.add(n);
  }
}
const core = [...names].filter(n => !ADDONS[n]).sort();
let entry = `export { ${core.join(', ')} } from 'three';\n`;
for (const [n, p] of Object.entries(ADDONS)) if (names.has(n)) entry += `export { ${n} } from '${p}';\n`;
writeFileSync(join(ROOT, 'tools', 'three-entry.js'), entry);

// 2) lib/three.js (lo usan dev.html y la herramienta de arte)
await build({
  entryPoints: [join(ROOT, 'tools', 'three-entry.js')], bundle: true, minify: true, format: 'esm', target: 'es2020',
  legalComments: 'none', outfile: join(ROOT, 'lib', 'three.js'),
  banner: { js: '/* Three.js r186 (MIT) — subconjunto para Arena Duel. https://threejs.org */' },
  logLevel: 'warning',
});
if (process.argv.includes('--three')) { console.log('lib/three.js listo:', core.length + ' piezas'); process.exit(0); }

// 3) bundle de la app
const threeAlias = {
  name: 'three-alias',
  setup(b) { b.onResolve({ filter: /lib\/three\.js$/ }, () => ({ path: join(ROOT, 'tools', 'three-entry.js') })); },
};
const out = await build({
  entryPoints: [join(ROOT, 'js', 'main.js')], bundle: true, minify: true, format: 'esm', target: 'es2020',
  legalComments: 'none', write: false, plugins: [threeAlias], logLevel: 'warning',
  banner: { js: '/* Arena Duel — palazondev. Incluye Three.js (MIT). */' },
});
const js = out.outputFiles[0].text;
const css = (await transform(readFileSync(join(ROOT, 'css', 'style.css'), 'utf8'), { loader: 'css', minify: true })).code;
const h = (s) => createHash('sha1').update(s).digest('hex').slice(0, 10);
const jsName = `app-${h(js)}.js`, cssName = `app-${h(css)}.css`;
rmSync(join(ROOT, 'build'), { recursive: true, force: true });
mkdirSync(join(ROOT, 'build'), { recursive: true });
writeFileSync(join(ROOT, 'build', jsName), js);
writeFileSync(join(ROOT, 'build', cssName), css.replaceAll('../fonts/', '../fonts/'));

// 4) index.html a partir de index.dev.html
let html = readFileSync(join(ROOT, 'index.dev.html'), 'utf8');
html = html.replace('<link rel="stylesheet" href="css/style.css">', `<link rel="stylesheet" href="build/${cssName}">`)
  .replace('<script type="module" src="js/main.js"></script>', `<link rel="modulepreload" href="build/${jsName}">\n  <script type="module" src="build/${jsName}"></script>`)
  .replace('<!-- DEV -->', '');
writeFileSync(join(ROOT, 'index.html'), html);

// 5) service worker con la lista de archivos a guardar
const art = existsSync(join(ROOT, 'art')) ? readdirSync(join(ROOT, 'art')).filter(f => f.endsWith('.webp')).map(f => 'art/' + f) : [];
const fonts = readdirSync(join(ROOT, 'fonts')).filter(f => f.endsWith('.woff2')).map(f => 'fonts/' + f);
const precache = ['./', 'index.html', `build/${jsName}`, `build/${cssName}`, 'manifest.webmanifest', 'icons/icon-192.png', ...fonts, ...art];
const version = h(js + css + art.join());
let sw = readFileSync(join(ROOT, 'tools', 'sw.template.js'), 'utf8');
sw = sw.replace('__VERSION__', version).replace('__PRECACHE__', JSON.stringify(precache));
writeFileSync(join(ROOT, 'sw.js'), sw);
console.log(`build/${jsName} ${(js.length / 1024).toFixed(0)} KB · build/${cssName} ${(css.length / 1024).toFixed(0)} KB · sw ${version} · ${art.length} artes`);
