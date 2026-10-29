/**
 * 静态色板派生：把 DSH base.css 的 --dsw-static-* 收进主题色相。
 * 数据源 scripts/static-base.json（从 ui-theme/base.css 提取的 77 个令牌）。
 * 供 gen-static.mjs 与 gen-themes.mjs 共用；纯函数，无副作用。
 */
import fs from 'node:fs';

const BASE = JSON.parse(fs.readFileSync(new URL('./static-base.json', import.meta.url), 'utf8'));

export const STATIC_KEYS = Object.keys(BASE.light);

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

export function parseColor(value) {
  const hex = String(value).match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
  if (!hex) return null;
  let body = hex[1];
  if (body.length === 3) body = body.split('').map((c) => c + c).join('');
  const rgb = [0, 2, 4].map((i) => parseInt(body.slice(i, i + 2), 16));
  const alpha = body.length === 8 ? parseInt(body.slice(6, 8), 16) / 255 : 1;
  return { rgb, alpha };
}

const toHex = (rgb, alpha) => {
  const hex = rgb.map((v) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, '0')).join('');
  return '#' + hex + (alpha < 1 ? clamp(Math.round(alpha * 255), 0, 255).toString(16).padStart(2, '0') : '');
};

function rgbToHsl([r, g, b]) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  let h = 0, s = 0;
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return [h, s, l];
}

function hslToRgb(h, s, l) {
  h = ((h % 360) + 360) % 360 / 360;
  if (s === 0) { const v = l * 255; return [v, v, v]; }
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

function luminance([r, g, b]) {
  const c = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

export const contrast = (a, b) => {
  const la = luminance(a.rgb), lb = luminance(b.rgb);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
};

/** 三套主题的色相目标（按明暗分开：亮部偏暖/冷，夜色各自压深）。 */
export const THEME_HUE = {
  averita: {
    strength: 0.35,
    neutral: { light: 228, dark: 228 },
    accent: { light: 238, dark: 238 },
    satScale: 0.45,
    satCap: 0.32,
  },
  coldmorning: {
    strength: 0.85,
    neutral: { light: 198, dark: 205 },
    accent: { light: 205, dark: 200 },
    satScale: 0.82,
    satCap: 0.55,
  },
  duskrose: {
    strength: 0.9,
    neutral: { light: 8, dark: 330 },
    accent: { light: 352, dark: 335 },
    satScale: 0.9,
    satCap: 0.55,
  },
};

const familyOf = (name) => {
  if (name.includes('neutral-bluish')) return 'bluish';
  if (name.includes('neutral')) return 'neutral';
  if (name.includes('deepseek')) return 'deepseek';
  if (name.includes('blue')) return 'blue';
  if (name.includes('red')) return 'red';
  if (name.includes('green')) return 'green';
  if (name.includes('amber')) return 'amber';
  return 'other';
};

const stepOf = (name) => {
  const m = name.match(/-(\d+)(?:-[a-z0-9]+)?$/);
  return m ? Number(m[1]) : null;
};

/**
 * 派生一套静态色板。
 * @param {string} themeId averita / coldmorning / duskrose
 * @param {'light'|'dark'} mode
 * @param {{rgb:number[],alpha:number}} bg 该模式的 bg-base
 */
export function deriveStatic(themeId, mode, bg) {
  const spec = THEME_HUE[themeId];
  if (!spec) throw new Error(`unknown theme ${themeId}`);

  /* 语义族 400/500/600 是别名态的主色：先在 400 上找到 4.6:1 的明度锚点，
     再按 0.05 一档向深（亮色）/向浅（深色）排成有区分度的梯子。 */
  const semanticLightness = {};
  for (const family of ['red', 'green', 'amber']) {
    const base400 = BASE[mode][`--dsw-static-${family}-400`] ?? BASE.light[`--dsw-static-${family}-400`];
    const parsed = parseColor(base400);
    if (!parsed) continue;
    const [h, s, l] = rgbToHsl(parsed.rgb);
    const dir = mode === 'dark' ? 0.01 : -0.01;
    let cur = l;
    for (let i = 0; i < 120 && contrast({ rgb: hslToRgb(h, s * 0.9, cur), alpha: 1 }, bg) < 4.6; i += 1) {
      cur = clamp(cur + dir, 0.03, 0.97);
    }
    const steps = [400, 500, 600].filter((step) => {
      const name = `--dsw-static-${family}-${step}`;
      return name in BASE[mode] || name in BASE.light;
    });
    steps.forEach((step, index) => {
      semanticLightness[`${family}-${step}`] = clamp(
        cur + (mode === 'dark' ? 0.05 : -0.05) * index,
        0.03,
        0.97,
      );
    });
  }

  const out = {};
  for (const name of STATIC_KEYS) {
    const raw = BASE[mode][name] ?? BASE.light[name];
    const color = parseColor(raw);
    if (!color) { out[name] = raw; continue; }
    const family = familyOf(name);
    const [h, s, l] = rgbToHsl(color.rgb);
    const strength = spec.strength;
    const step = stepOf(name);
    let next = color;

    if (family === 'neutral' || family === 'bluish') {
      const hue = spec.neutral[mode];
      const sat = family === 'neutral'
        ? clamp(0.004 + 0.018 * strength, 0, 0.03)
        : clamp(s * (1 - strength * 0.35), 0.02, 0.11);
      let light = l;
      if (mode === 'dark' && step !== null && step >= 700) light = clamp(l + 0.05 * strength, 0, 0.97);
      next = { rgb: hslToRgb(hue, sat, light), alpha: color.alpha };
    } else if (family === 'blue' || family === 'deepseek') {
      const hue = spec.accent[mode];
      const sat = clamp(s * spec.satScale, 0.12, spec.satCap ?? 0.62);
      next = { rgb: hslToRgb(hue, sat, l), alpha: color.alpha };
    } else if (family === 'red' || family === 'green' || family === 'amber') {
      const sat = clamp(s * 0.9, 0.3, 0.95);
      const key = `${family}-${step}`;
      const light = semanticLightness[key] ?? l;
      next = { rgb: hslToRgb(h, sat, light), alpha: color.alpha };
    }

    out[name] = toHex(next.rgb, next.alpha);
    if (color.alpha < 1) {
      const baseName = name.replace(/-a\d+$/, '');
      const base = out[baseName];
      if (base) out[name] = toHex(parseColor(base).rgb, color.alpha);
    }
  }
  return out;
}

/** 原始基准值（报告/调试用）。 */
export function baseStaticFor(mode = 'light') {
  return { ...BASE[mode] };
}
