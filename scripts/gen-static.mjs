/**
 * 生成三套主题的静态色板模块 src/themes/static/<id>.js。
 * 数据来自 scripts/static-base.json（DSH base.css 提取），派生规则见 static-derive.mjs。
 *
 *   node scripts/gen-static.mjs
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { contrast, deriveStatic, parseColor } from './static-derive.mjs';

const root = resolve(import.meta.dirname, '..');
const themeFiles = ['src/themes/averita.js', 'src/themes/coldmorning.js', 'src/themes/duskrose.js'];
const themeIds = ['averita', 'coldmorning', 'duskrose'];

const outDir = resolve(root, 'src/themes/static');
mkdirSync(outDir, { recursive: true });

const report = [];

for (const id of themeIds) {
  const file = themeFiles.find((f) => f.includes(`/${id}.js`));
  const theme = (await import(pathToFileURL(resolve(root, file)).href)).default;
  const lightBg = parseColor(theme.tokens.light['--dsw-alias-bg-base']);
  const darkBg = parseColor(theme.tokens.dark['--dsw-alias-bg-base']);
  if (!lightBg || !darkBg) throw new Error(`${id}: bg-base missing`);

  const statics = {
    light: deriveStatic(id, 'light', lightBg),
    dark: deriveStatic(id, 'dark', darkBg),
  };

  const body = `/**
 * 静态色板：${theme.label}（${id}）
 * 由 scripts/gen-static.mjs 生成，数据源 scripts/static-base.json；不要手改。
 */
export default ${JSON.stringify(statics, null, 2)};
`;
  writeFileSync(resolve(outDir, `${id}.js`), body);
  console.log(`wrote src/themes/static/${id}.js (${Object.keys(statics.light).length} keys)`);

  const rows = [];
  for (const mode of ['light', 'dark']) {
    const bg = mode === 'light' ? lightBg : darkBg;
    for (const family of ['red', 'green', 'amber']) {
      const steps = family === 'red' ? ['400', '500', '600'] : ['400', '500', '600'];
      for (const step of steps) {
        const name = `--dsw-static-${family}-${step}`;
        const value = statics[mode][name];
        const ratio = value ? contrast(parseColor(value), bg) : 0;
        rows.push(`${mode} ${family}-${step} ${value} ${ratio.toFixed(2)}:1`);
      }
    }
  }
  report.push({ id, rows });
}

console.log('\nSemantic mid-step contrast on bg-base:');
for (const { id, rows } of report) {
  console.log(`\n# ${id}`);
  for (const row of rows) console.log('  ' + row);
}