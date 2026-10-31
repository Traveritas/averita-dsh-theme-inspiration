/**
 * 从四套主题令牌推导「思考强度滑条」的四套主题配色（静态 hex）。
 *
 * 滑条插件独立安装，不读这里的 `--av-*` / `--dsw-*`，所以配色必须写成常量：
 * 把本脚本输出粘到 dsh-yet-another-slider-thingy 的 `src/client.js` →
 * `BUILTIN_PALETTES` 里对应四项，再重建滑条的 lib/client.js。
 *
 * 取色规则与滑条源码注释一致：
 *   强调 / 粒子 = state-business-primary
 *   进度 = 强调混入 bg-layer-1 合成后的表面（60%）
 *   轨道 = 浅色取 border-l1 合成后与表面 55:45，深色全量合成
 *   刻度 = 浅色 label-caption，深色 label-caption 70% + label-secondary 30%
 *   文字 = label-tertiary
 *   拇指 = 浅色 #fff，深色 label-primary
 *
 *   node scripts/derive-slider-palettes.mjs
 */
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const themes = [
  { id: 'theme-averita', file: 'averita', name: '昼雾 · 靛夜' },
  { id: 'theme-coldmorning', file: 'coldmorning', name: '冷晨' },
  { id: 'duskrose', file: 'duskrose', name: '暮玫瑰' },
  { id: 'theme-duskpurple', file: 'duskpurple', name: '暮紫' },
];

const parse = (value) => {
  if (value !== null && typeof value === 'object') return value;
  const hex = /^#([0-9a-f]{6})$/i.exec(value);
  if (hex) {
    const int = parseInt(hex[1], 16);
    return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255, a: 1 };
  }
  const rgba = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)$/i.exec(value);
  if (rgba === null) throw new Error(`不认识的色值：${value}`);
  return { r: Number(rgba[1]), g: Number(rgba[2]), b: Number(rgba[3]), a: rgba[4] === undefined ? 1 : Number(rgba[4]) };
};
const over = (top, bottom) => {
  const t = parse(top);
  const b = parse(bottom);
  return { r: t.r * t.a + b.r * (1 - t.a), g: t.g * t.a + b.g * (1 - t.a), b: t.b * t.a + b.b * (1 - t.a), a: 1 };
};
/** weight = 前一个颜色的占比。 */
const mix = (a, b, weight) => {
  const x = parse(a);
  const y = parse(b);
  return { r: x.r * weight + y.r * (1 - weight), g: x.g * weight + y.g * (1 - weight), b: x.b * weight + y.b * (1 - weight), a: 1 };
};
const hex = (color) => '#' + [color.r, color.g, color.b].map((n) => Math.round(n).toString(16).padStart(2, '0')).join('');

const out = [];
for (const theme of themes) {
  const module = await import(pathToFileURL(resolve(root, 'src/themes', `${theme.file}.js`)).href);
  const entry = { id: theme.id, name: theme.name, light: {}, dark: {} };
  for (const mode of ['light', 'dark']) {
    const tokens = module.default.tokens[mode];
    const mark = tokens['--dsw-alias-state-business-primary'];
    const surface = over(tokens['--dsw-alias-bg-layer-1'], tokens['--dsw-alias-bg-base']);
    const track = over(tokens['--dsw-alias-border-l1'], surface);
    const caption = tokens['--dsw-alias-label-caption'];
    entry[mode] = {
      fill: hex(mix(mark, surface, 0.6)),
      accent: mark,
      particle: mark,
      thumb: mode === 'light' ? '#ffffff' : tokens['--dsw-alias-label-primary'],
      track: hex(mode === 'light' ? mix(surface, track, 0.55) : track),
      tick: hex(mode === 'light' ? parse(caption) : mix(caption, tokens['--dsw-alias-label-secondary'], 0.7)),
      text: tokens['--dsw-alias-label-tertiary'],
    };
  }
  out.push(entry);
}
console.log(JSON.stringify(out, null, 2));
