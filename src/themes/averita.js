/** 主题：昼雾 · 靛夜（averita）—— 原始主题，基础令牌在 src/tokens.js。 */
import tokens from '../tokens.js';
import statics from './static/averita.js';

export default {
  id: 'averita',
  label: '昼雾 · 靛夜',
  tokens: {
    light: { ...tokens.light, ...statics.light },
    dark: { ...tokens.dark, ...statics.dark },
  },
  vars: {
    light: { space: '#e5eaf0', dot: 'rgba(55, 63, 79, 0.055)', mark: '#61567d' },
    dark: { space: '#0e131e', dot: 'rgba(217, 230, 243, 0.085)', mark: '#baadd2' },
  },
};