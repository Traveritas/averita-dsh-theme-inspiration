/**
 * 组件表：CSS、设置模块与占槽位的组件都只在这里登记一次。
 *
 * - css：构建按数组顺序拼接（顺序影响同优先级覆盖），没有 CSS 的组件写 null。
 * - settings：设置面板里的**一个模块**，文件被 build.mjs 原样内联，必须导出一个
 *   名为 name 的函数，返回 [{ order, node }]；order 是模块内顺序，模块顺序由
 *   settings.order 决定（小的排前）。
 * - probes：冒烟测试用的特征串，组件的 CSS 必须能在产物里找到它。
 *
 * 每个组件目录两到三件：style.css（有视觉组件才有）、settings.js（有设置行才有）、
 * README.md；设置行是给插件自己的面板用的，单独复用 CSS 时不需要。
 */
export default [
  {
    id: 'brand',
    label: '品牌字标',
    settings: { file: 'brand/settings.js', name: 'brandSettings', order: 10 },
  },
  {
    id: 'hero',
    label: '新会话首屏',
    css: 'hero/style.css',
    settings: { file: 'hero/settings.js', name: 'heroSettings', order: 20 },
    probes: ['data-av-hero-text', 'data-av-hero-empty', 'content: var(--av-hero-text)', '_previewBadge'],
  },
  {
    id: 'backdrop',
    label: '背景',
    settings: { file: 'backdrop/settings.js', name: 'backdropSettings', order: 30 },
  },
  {
    id: 'dots',
    label: '点阵底纹',
    css: 'dots/style.css',
    settings: { file: 'dots/settings.js', name: 'dotsSettings', order: 40 },
    probes: ['data-av-dots="char"', 'data-av-dots="wall"', 'mask-composite: intersect'],
  },
  {
    id: 'flow',
    label: '流光背景',
    css: 'flow/style.css',
    settings: { file: 'flow/settings.js', name: 'flowSettings', order: 50 },
    probes: ['data-av-bg="flow"', 'data-av-flow-invert="off"', '.av-flow', 'image-rendering: pixelated'],
  },
  {
    id: 'deco',
    label: '装饰与星形',
    settings: { file: 'deco/settings.js', name: 'decoSettings', order: 60 },
  },
  {
    id: 'motion',
    label: '位移动效',
    css: 'motion/style.css',
    probes: ['@keyframes avSessionIn', '@keyframes avTurnIn'],
  },
  {
    id: 'paper',
    label: '纸品装饰',
    css: 'paper/style.css',
    probes: ['data-av-deco="paper"', 'mask-size: 10px 100%', 'data-chat-flow-kind="steering"', '[data-pending-steering]'],
  },
  {
    id: 'star',
    label: '星芒装饰',
    css: 'star/style.css',
    probes: ['data-av-deco="star"', '--av-star-shape', 'data-chat-flow-kind="steering"', '[data-pending-steering]'],
  },
  {
    id: 'composer',
    label: '输入框底衬',
    css: 'composer/style.css',
    settings: { file: 'composer/settings.js', name: 'composerSettings', order: 70 },
    probes: ['data-av-fade="on"', 'background: none !important'],
  },
];
