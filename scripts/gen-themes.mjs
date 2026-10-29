/**
 * 从 averita 主题的令牌结构派生出另外三套主题（冷晨 / 暮玫瑰 / 暮紫）：
 * 保留明暗、层级、透明度与明度关系，只把色相族收束到目标方向；
 * 语义状态（error/warn/success）不动色相，只轻微降饱和。
 *
 *   node scripts/gen-themes.mjs
 */
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const source = (await import(pathToFileURL(resolve(root, 'src/tokens.js')).href)).default;

const hexToRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const rgbToHex = (rgb) => '#' + rgb.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  const d = max - min;
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h /= 6;
  }
  return [h * 360, s, l];
}

function hslToRgb(h, s, l) {
  h = ((h % 360) + 360) % 360 / 360;
  if (s === 0) { const v = Math.round(l * 255); return [v, v, v]; }
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [hue2rgb(p, q, h + 1 / 3) * 255, hue2rgb(p, q, h) * 255, hue2rgb(p, q, h - 1 / 3) * 255];
}

const clamp = (value, lo, hi) => Math.min(hi, Math.max(lo, value));

function transform(color, mode, spec) {
  if (typeof color !== 'string') return color;
  const rgbMatch = color.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/);
  const hexMatch = color.match(/^#[0-9a-fA-F]{6}$/);
  if (!rgbMatch && !hexMatch) return color;
  const [r, g, b] = rgbMatch ? rgbMatch.slice(1, 4).map(Number) : hexToRgb(color);
  const alpha = rgbMatch ? Number(rgbMatch[4]) : null;
  let [h, s, l] = rgbToHsl(r, g, b);
  if (s < 0.03) {
    // 纯灰不动，避免把按钮文字、白底染脏
    return color;
  }
  const hue = spec.hue[mode];
  const accentHue = spec.accentHue[mode];
  if (spec.name.includes('state-error') || spec.name.includes('state-warn') || spec.name.includes('state-success') || spec.name.includes('state-done') || spec.name.includes('state-idle')) {
    s *= 0.9;
  } else if (spec.name.startsWith('--shiki-token-')) {
    const token = spec.name.slice('--shiki-token-'.length);
    if (token === 'string' || token === 'string-expression') { h = spec.shiki.string; s = clamp(s, 0.18, 0.3); }
    else if (token === 'constant' || token === 'parameter') { h = spec.shiki.number; s = clamp(s, 0.22, 0.38); }
    else if (token === 'comment' || token === 'punctuation') { h = hue; s = Math.min(s, 0.08); }
    else { h = accentHue; s = clamp(s, 0.2, 0.34); }
  } else if (spec.name.includes('brand') || spec.name.includes('link') || spec.name.includes('button-primary') || spec.name.includes('button-info') || spec.name.includes('state-business') || spec.name.includes('document-selection') || spec.name.includes('specific-bubble') || spec.name.includes('markdown-citation') || spec.name.includes('menu-icon')) {
    h = accentHue;
    s = clamp(s * 0.85, 0.14, 0.34);
  } else if (spec.name.includes('label-') || spec.name.includes('specific-bubble') || spec.name.includes('avatar')) {
    h = hue;
    s = Math.min(s, 0.07);
  } else {
    h = hue;
    s = Math.min(s, 0.13) * 0.85;
  }
  const [nr, ng, nb] = hslToRgb(h, s, l);
  const out = rgbToHex([nr, ng, nb]);
  return alpha === null ? out : `rgba(${Math.round(nr)}, ${Math.round(ng)}, ${Math.round(nb)}, ${alpha})`;
}

const themes = [
  {
    id: 'coldmorning',
    label: '冷晨',
    hue: { light: 198, dark: 205 },
    accentHue: { light: 205, dark: 200 },
    shiki: { string: 190, number: 38 },
    vars: {
      light: { space: '#e4e9e9', dot: 'rgba(51, 59, 62, 0.055)', mark: '#5d6d80' },
      dark: { space: '#101820', dot: 'rgba(214, 230, 235, 0.10)', mark: '#a9c6d4' },
    },
    overrides: {
      light: {
        '--dsw-alias-label-primary': '#333b3e',
        '--dsw-alias-label-secondary': '#5b666b',
        '--dsw-alias-label-tertiary': '#657075',
        '--dsw-alias-link': '#4f6572',
        '--dsw-alias-brand-primary': '#4f6370',
        '--dsw-alias-state-business-primary': '#4f6370',
        '--dsw-specific-bubble': 'rgba(220, 232, 235, 0.88)',
      },
      dark: {
        '--dsw-alias-label-primary': '#e2eaec',
        '--dsw-alias-label-secondary': '#a6b6bd',
        '--dsw-alias-label-tertiary': '#82949c',
        '--dsw-alias-link': '#a9c6d4',
        '--dsw-alias-brand-primary': '#c3d4da',
        '--dsw-alias-state-business-primary': '#a9c6d4',
      },
    },
  },
  {
    id: 'duskrose',
    label: '暮玫瑰',
    hue: { light: 8, dark: 330 },
    accentHue: { light: 352, dark: 335 },
    shiki: { string: 190, number: 38 },
    vars: {
      light: { space: '#ecdfdb', dot: 'rgba(60, 50, 54, 0.055)', mark: '#7a4f5c' },
      dark: { space: '#1b1418', dot: 'rgba(242, 214, 214, 0.10)', mark: '#d3a6ad' },
    },
    overrides: {
      light: {
        '--dsw-alias-label-primary': '#3c3236',
        '--dsw-alias-label-secondary': '#6d6066',
        '--dsw-alias-label-tertiary': '#776b70',
        '--dsw-alias-link': '#7a4f5c',
        '--dsw-alias-brand-primary': '#6f4753',
        '--dsw-alias-state-business-primary': '#7a4f5c',
        '--dsw-specific-bubble': 'rgba(244, 228, 228, 0.88)',
      },
      dark: {
        '--dsw-alias-label-primary': '#f2e6e6',
        '--dsw-alias-label-secondary': '#c9b4b9',
        '--dsw-alias-label-tertiary': '#a89197',
        '--dsw-alias-link': '#d3a6ad',
        '--dsw-alias-brand-primary': '#e0c3c8',
        '--dsw-alias-state-business-primary': '#d3a6ad',
      },
    },
  },
  {
    id: 'duskpurple',
    label: '暮紫',
    hue: { light: 262, dark: 262 },
    accentHue: { light: 264, dark: 264 },
    shiki: { string: 190, number: 38 },
    vars: {
      light: { space: '#e2ddec', dot: 'rgba(60, 50, 72, 0.055)', mark: '#6f5685' },
      dark: { space: '#110e1a', dot: 'rgba(230, 214, 242, 0.10)', mark: '#ccb4f0' },
    },
    overrides: {
      light: {
        '--dsw-alias-label-primary': '#302a36',
        '--dsw-alias-label-secondary': '#5e5466',
        '--dsw-alias-label-tertiary': '#6a6073',
        '--dsw-alias-link': '#6f5685',
        '--dsw-alias-brand-primary': '#644a7a',
        '--dsw-alias-state-business-primary': '#6f5685',
        '--dsw-specific-bubble': 'rgba(238, 228, 244, 0.88)',
      },
      dark: {
        '--dsw-alias-label-primary': '#f1e9f7',
        '--dsw-alias-label-secondary': '#cbbcd8',
        '--dsw-alias-label-tertiary': '#a897b7',
        '--dsw-alias-link': '#ccb4f0',
        '--dsw-alias-brand-primary': '#d4c0ef',
        '--dsw-alias-state-business-primary': '#ccb4f0',
      },
    },
  },
];

for (const theme of themes) {
  const tokens = { light: {}, dark: {} };
  for (const mode of ['light', 'dark']) {
    const spec = { name: '', hue: theme.hue, accentHue: theme.accentHue, shiki: theme.shiki };
    for (const [name, value] of Object.entries(source[mode])) {
      spec.name = name;
      let next = transform(value, mode, spec);
      if (theme.overrides[mode][name]) next = theme.overrides[mode][name];
      tokens[mode][name] = next;
    }
    // 底色与点阵、星标颜色由主题 vars 决定，令牌里同步成空间色
    tokens[mode]['--dsw-alias-bg-base'] = theme.vars[mode].space;
  }
  const file = `src/themes/${theme.id}.js`;
  const body = `/**
 * 主题：${theme.label}（${theme.id}）—— 由 scripts/gen-themes.mjs 从 averita 派生，
 * 手调请直接改本文件后再跑 build；重跑生成脚本会覆盖基础令牌，静态色板在 ./static/${theme.id}.js。
 */
import statics from './static/${theme.id}.js';

const tokens = ${JSON.stringify(tokens, null, 2)};

export default {
  id: ${JSON.stringify(theme.id)},
  label: ${JSON.stringify(theme.label)},
  tokens: {
    light: { ...tokens.light, ...statics.light },
    dark: { ...tokens.dark, ...statics.dark },
  },
  vars: ${JSON.stringify(theme.vars, null, 2)},
};
`;
  fs.mkdirSync(resolve(root, 'src/themes'), { recursive: true });
  fs.writeFileSync(resolve(root, file), body);
  console.log('wrote', file);
}