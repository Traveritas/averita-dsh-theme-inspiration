/**
 * 离线冒烟测试：用最小桩子跑一遍 client.js 的 factory + apply，
 * 检查主题令牌成对、样式装卸、品牌位/设置页注册与卸载还原。不碰真 DSH。
 *
 *   node scripts/smoke.mjs
 */
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const bundle = readFileSync(resolve(root, 'client.js'), 'utf8');
const components = (await import(new URL('../src/components/manifest.js', import.meta.url).href)).default;

const EXPECTED_THEMES = ['averita', 'coldmorning', 'duskrose', 'duskpurple'];
const MIN_TOKEN_COUNT = 128;

let factory;
const head = [];
const bodyNodes = [];
const attrs = new Map();
const listeners = new Map();
const storage = new Map();
const styles = new Map();
const near = (a, b) => Math.abs(a - b) < 1e-9;

/** 只够 flow 渲染器走完构建 / 绘制 / 拆装的假 WebGL2。 */
const fakeGl = {
  VERTEX_SHADER: 1,
  FRAGMENT_SHADER: 2,
  COMPILE_STATUS: 3,
  LINK_STATUS: 4,
  ARRAY_BUFFER: 5,
  STATIC_DRAW: 6,
  FLOAT: 7,
  TRIANGLES: 8,
  createShader: () => ({}),
  shaderSource() {},
  compileShader() {},
  getShaderParameter: () => true,
  getShaderInfoLog: () => '',
  deleteShader() {},
  createProgram: () => ({}),
  attachShader() {},
  linkProgram() {},
  getProgramParameter: () => true,
  getProgramInfoLog: () => '',
  deleteProgram() {},
  useProgram() {},
  createBuffer: () => ({}),
  bindBuffer() {},
  bufferData() {},
  getAttribLocation: () => 0,
  enableVertexAttribArray() {},
  vertexAttribPointer() {},
  getUniformLocation: () => ({}),
  uniform3fv() {},
  uniform1f() {},
  uniform2f() {},
  viewport() {},
  drawArrays() {},
  deleteBuffer() {},
  getExtension: () => null,
  getParameter: () => '',
};

function makeCanvas() {
  return {
    tagName: 'CANVAS',
    width: 0,
    height: 0,
    isConnected: false,
    dataset: {},
    classList: {
      set: new Set(),
      add(name) {
        this.set.add(name);
      },
      remove(name) {
        this.set.delete(name);
      },
      contains(name) {
        return this.set.has(name);
      },
    },
    getContext: (kind) => (kind === 'webgl2' ? fakeGl : null),
    setAttribute() {},
    getAttribute: () => null,
    addEventListener() {},
    removeEventListener() {},
    remove() {
      const i = bodyNodes.indexOf(this);
      if (i >= 0) bodyNodes.splice(i, 1);
      this.isConnected = false;
    },
  };
}

const fakeDocument = {
  hidden: false,
  documentElement: {
    setAttribute: (k, v) => attrs.set(k, v),
    removeAttribute: (k) => attrs.delete(k),
    toggleAttribute: (k, on) => (on ? attrs.set(k, '') : attrs.delete(k)),
    style: {
      setProperty: (k, v) => styles.set(k, String(v)),
      removeProperty: (k) => styles.delete(k),
      getPropertyValue: (k) => styles.get(k) ?? '',
    },
  },
  body: {
    firstChild: null,
    insertBefore(node) {
      node.isConnected = true;
      bodyNodes.unshift(node);
      this.firstChild = node;
    },
  },
  head: {
    appendChild: (node) => {
      node.isConnected = true;
      head.push(node);
    },
  },
  createElement: (tag) => {
    if (tag === 'canvas') return makeCanvas();
    return {
      tagName: tag.toUpperCase(),
      dataset: {},
      textContent: '',
      isConnected: false,
      remove() {
        this.isConnected = false;
        const i = head.indexOf(this);
        if (i >= 0) head.splice(i, 1);
      },
    };
  },
  addEventListener: (type, fn) => listeners.set(type, fn),
  removeEventListener: (type) => listeners.delete(type),
};

const fakeWindow = {
  localStorage: {
    getItem: (key) => (storage.has(key) ? storage.get(key) : null),
    setItem: (key, value) => storage.set(key, String(value)),
    removeItem: (key) => storage.delete(key),
  },
  matchMedia: () => ({ matches: false }),
  requestAnimationFrame: () => 0,
  cancelAnimationFrame: () => {},
  addEventListener() {},
  removeEventListener() {},
  __ModuleLoader__: {
    load(spec) {
      factory = spec.factory;
    },
  },
};

// 求值 bundle（它只调用 window.__ModuleLoader__.load）。
new Function('window', 'document', bundle)(fakeWindow, fakeDocument);
if (typeof factory !== 'function') throw new Error('bundle did not register a factory');

const React = {
  createElement: (type, props, ...children) => ({ type, props, children }),
  cloneElement: (element, props) => ({ ...element, props: { ...element.props, ...props } }),
  useRef: () => ({ current: null }),
  useEffect: () => {},
  // useState 支持惰性初值（ThemeSection 传的是函数），每次渲染重新求值。
  useState: (initial) => [typeof initial === 'function' ? initial() : initial, () => {}],
};
const requireStub = (name) => {
  if (name === 'react') return React;
  throw new Error(`unexpected require: ${name}`);
};

const plugin = factory(requireStub);
if (!plugin || typeof plugin.apply !== 'function') throw new Error('factory did not return { inject, apply }');
if (!Array.isArray(plugin.inject)) throw new Error('plugin.inject missing');

const disposers = [];
let overrideCalls = [];
const registrations = [];

const ctx = {
  effect(fn, label) {
    const dispose = fn();
    if (typeof dispose === 'function') disposers.push({ label, dispose });
  },
  theme: {
    overrideTokens(source, tokens) {
      overrideCalls.push({ source, tokens });
      return () => {};
    },
  },
  slots: {
    inject(name, callback) {
      callback();
    },
    register(options, Component) {
      registrations.push({ options, Component });
      return () => {};
    },
  },
};

plugin.apply(ctx);

/** 1. 主题：启动时套用默认主题；四套主题的令牌都成对。 */
if (overrideCalls.length < 1) throw new Error('overrideTokens was not called');
const first = overrideCalls[0];
if (first.source !== 'dsh-theme-averita') throw new Error('unexpected source');
const names = Object.keys(first.tokens);
if (names.length <= MIN_TOKEN_COUNT) throw new Error('expected > ' + MIN_TOKEN_COUNT + ' tokens, got ' + names.length);
for (const staticName of ['--dsw-static-neutral-500', '--dsw-static-blue-500', '--dsw-static-red-600']) {
  if (!names.includes(staticName)) throw new Error('missing static token: ' + staticName);
}
for (const name of names) {
  if (!name.startsWith('--dsw-') && !name.startsWith('--shiki-') && !name.startsWith('--ds-')) throw new Error(`unexpected token name: ${name}`);
  const pair = first.tokens[name];
  if (typeof pair?.light !== 'string' || typeof pair?.dark !== 'string') {
    throw new Error(`token ${name} is not a {light,dark} pair`);
  }
}
if (attrs.get('data-av-theme') !== 'averita') throw new Error('default theme marker missing');
if (attrs.has('data-av-hero-text')) throw new Error('default hero text should follow DSH');
if (attrs.has('data-av-fade')) throw new Error('default composer fade should be off');

/** 2. 样式：注入一个 style，含四套主题变量；卸载时干净移除。 */
if (head.length !== 1) throw new Error(`expected 1 style tag, got ${head.length}`);
if (head[0].dataset.plugin !== 'dsh-theme-averita') throw new Error('style tag missing data-plugin');
if (head[0].textContent.length < 3000) throw new Error('style tag content too short');
for (const id of EXPECTED_THEMES) {
  if (!head[0].textContent.includes(`data-av-theme="${id}"`)) throw new Error(`theme vars missing for ${id}`);
}
for (const needle of [
  'data-av-bg="flow"',
  'data-av-flow-palette="theme"',
  'data-av-flow-palette="dusk"',
  'color-mix(in srgb, var(--av-space)',
  '--av-flow-3',
  '.av-flow',
  'image-rendering: pixelated',
  'data-av-dots="char"',
  'data-av-dots="wall"',
  'data-av-glyph="star"',
  'data-av-motion="breathe"',
  'data-av-motion="drift"',
  'data-av-motion="off"',
  '.av-range',  '--av-scale',
  '--av-depth',
  'rgb(from var(--av-dot)',
  'mask-composite: intersect',
  'data-av-fade="on"',
  'background: none !important',
]) {
  if (!head[0].textContent.includes(needle)) throw new Error(`theme css missing: ${needle}`);
}

/** 2.5 组件：manifest 里每个有 CSS 的组件，特征串都要出现在同一份样式表里。 */
const cssComponents = components.filter((component) => component.css);
for (const component of cssComponents) {
  if (!head[0].textContent.includes(`component: ${component.id} · `)) {
    throw new Error(`component css not assembled: ${component.id}`);
  }
  for (const probe of component.probes ?? []) {
    if (!head[0].textContent.includes(probe)) {
      throw new Error(`component ${component.id} css missing: ${probe}`);
    }
  }
}

/** 2.6 预览页：三页都按 manifest 顺序引全组件样式，别漏也别乱序。 */
for (const page of ['index.html', 'lab.html', 'star.html']) {
  const html = readFileSync(resolve(root, 'preview', page), 'utf8');
  const positions = cssComponents.map((component) => html.indexOf(`../src/components/${component.css}`));
  if (positions.some((index) => index < 0)) {
    throw new Error(`preview/${page} missing a component stylesheet`);
  }
  if (positions.join() !== [...positions].sort((a, b) => a - b).join()) {
    throw new Error(`preview/${page} component stylesheets are out of manifest order`);
  }
}

/** 2.7 设置行：每个片段都进了 bundle，注册表按 manifest 收齐。 */
const settingsComponents = components.filter((component) => component.settings);
for (const component of settingsComponents) {
  if (!bundle.includes(`function ${component.settings.name}(`)) {
    throw new Error(`settings function missing: ${component.settings.name}`);
  }
  if (!bundle.includes(`${component.id}: ${component.settings.name},`)) {
    throw new Error(`settings registry missing: ${component.id}`);
  }
}

const vis = listeners.get('visibilitychange');
if (typeof vis !== 'function') throw new Error('visibilitychange listener missing');
fakeDocument.hidden = true;
vis();
if (!attrs.has('data-av-idle')) throw new Error('data-av-idle not set when hidden');

const disposeSection = registrations.find((r) => r.options.name === 'settings.section');
if (!disposeSection) throw new Error('missing settings.section registration before dispose');
disposeSection.options.inject().selectHeroText('');
if (!attrs.has('data-av-hero-text') || !attrs.has('data-av-hero-empty')) {
  throw new Error('hero text attrs were not set before dispose');
}
disposeSection.options.inject().selectFade('on');
if (attrs.get('data-av-fade') !== 'on') throw new Error('fade attr was not set before dispose');

for (const d of disposers) d.dispose();
if (head.length !== 0) throw new Error('style tag was not removed on dispose');
if (attrs.has('data-av-theme')) throw new Error('data-av-theme was not removed on dispose');
if (attrs.has('data-av-fade')) throw new Error('data-av-fade was not removed on dispose');
if (attrs.has('data-av-dots')) throw new Error('data-av-dots was not removed on dispose');
if (attrs.has('data-av-glyph')) throw new Error('data-av-glyph was not removed on dispose');
if (attrs.has('data-av-motion')) throw new Error('data-av-motion was not removed on dispose');
if (attrs.has('data-av-bg')) throw new Error('data-av-bg was not removed on dispose');
if (attrs.has('data-av-flow-palette')) throw new Error('data-av-flow-palette was not removed on dispose');
if (attrs.has('data-av-hero-text')) throw new Error('data-av-hero-text was not removed on dispose');
if (attrs.has('data-av-hero-empty')) throw new Error('data-av-hero-empty was not removed on dispose');
if (styles.has('--av-scale')) throw new Error('--av-scale was not removed on dispose');
if (styles.has('--av-depth')) throw new Error('--av-depth was not removed on dispose');
if (styles.has('--av-breathe-min')) throw new Error('--av-breathe-min was not removed on dispose');
if (styles.has('--av-hero-text')) throw new Error('--av-hero-text was not removed on dispose');
if (listeners.has('visibilitychange')) throw new Error('visibilitychange listener was not removed on dispose');
/* 回放前面为卸载测试挂上的 on；后面的默认值 / 面板测试都按关（默认）走。 */
disposeSection.options.inject().selectFade('off');

/** 3. 品牌位、首屏星标与设置页：两个品牌 single slot + 一个首屏 slot + 一个 settings.section。 */
for (const slot of ['sidebar.brand.mark', 'sidebar.brand.name']) {
  const reg = registrations.find((r) => r.options.name === slot);
  if (!reg) throw new Error(`missing registration for ${slot}`);
  if (reg.options.priority !== -1) throw new Error(`${slot} priority must be -1`);
  if (typeof reg.Component !== 'function') throw new Error(`${slot} component must be a function`);
  const el = reg.Component();
  if (!el || typeof el !== 'object') throw new Error(`${slot} did not render`);
}
const heroMark = registrations.find((r) => r.options.name === 'conversation.hero.brand.mark');
if (!heroMark) throw new Error('missing registration for conversation.hero.brand.mark');
if (heroMark.options.priority !== -1) throw new Error('conversation.hero.brand.mark priority must be -1');
if (typeof heroMark.Component !== 'function') throw new Error('hero mark component must be a function');
const heroMarkEl = heroMark.Component();
if (!heroMarkEl || typeof heroMarkEl !== 'object') throw new Error('hero mark did not render');
if (!String(heroMarkEl.props?.className || '').includes('av-hero-mark')) {
  throw new Error('hero mark is missing the av-hero-mark class');
}
const section = registrations.find((r) => r.options.name === 'settings.section');
if (!section) throw new Error('missing settings.section registration');
if (typeof section.options.label !== 'function' || typeof section.options.label() !== 'string') {
  throw new Error('settings.section label must be a function returning a string');
}
const props = section.options.inject();
if (typeof props.select !== 'function' || typeof props.getActive !== 'function' || typeof props.subscribe !== 'function') {
  throw new Error('settings.section inject payload incomplete');
}
if (typeof props.selectWordmark !== 'function' || typeof props.getWordmark !== 'function') {
  throw new Error('settings.section inject payload missing wordmark controls');
}
if (typeof props.selectHeroText !== 'function' || typeof props.getHeroText !== 'function') {
  throw new Error('settings.section inject payload missing hero text controls');
}
if (typeof props.selectFade !== 'function' || typeof props.getFade !== 'function') {
  throw new Error('settings.section inject payload missing composer fade controls');
}
if (typeof props.selectDots !== 'function' || typeof props.getDots !== 'function') {
  throw new Error('settings.section inject payload missing dots controls');
}
if (typeof props.selectGlyph !== 'function' || typeof props.getGlyph !== 'function') {
  throw new Error('settings.section inject payload missing glyph controls');
}
if (typeof props.selectScale !== 'function' || typeof props.getScale !== 'function') {
  throw new Error('settings.section inject payload missing scale controls');
}
if (typeof props.selectDepth !== 'function' || typeof props.getDepth !== 'function') {
  throw new Error('settings.section inject payload missing depth controls');
}
if (typeof props.selectMotion !== 'function' || typeof props.getMotion !== 'function') {
  throw new Error('settings.section inject payload missing motion controls');
}
if (typeof props.selectBreathe !== 'function' || typeof props.getBreathe !== 'function') {
  throw new Error('settings.section inject payload missing breathe controls');
}
if (typeof props.selectBg !== 'function' || typeof props.getBg !== 'function') {
  throw new Error('settings.section inject payload missing background controls');
}
if (typeof props.selectFlow !== 'function' || typeof props.getFlow !== 'function') {
  throw new Error('settings.section inject payload missing flow palette controls');
}
if (typeof props.selectSpeed !== 'function' || typeof props.getSpeed !== 'function') {
  throw new Error('settings.section inject payload missing flow speed controls');
}
if (typeof props.getFlowAvailable !== 'function') {
  throw new Error('settings.section inject payload missing flow availability');
}
if (typeof props.resetBackground !== 'function') {
  throw new Error('settings.section inject payload missing resetBackground');
}
props.select('duskpurple');
if (props.getActive() !== 'duskpurple') throw new Error('select(duskpurple) did not stick');
if (attrs.get('data-av-theme') !== 'duskpurple') throw new Error('select(duskpurple) did not set data-av-theme');
props.select('averita');
if (props.getActive() !== 'averita') throw new Error('did not return to averita');

/** 3.5 品牌字标：默认、空值隐藏、持久化、单行化与上限。 */
const brandNameReg = registrations.find((r) => r.options.name === 'sidebar.brand.name');
const brandNameText = () => {
  const el = brandNameReg.Component();
  return el === null ? null : (el.children?.[0] ?? null);
};
if (props.getWordmark() !== "AveritA's DSH") throw new Error('default wordmark must be AveritA\'s DSH');
if (brandNameText() !== "AveritA's DSH") throw new Error('default wordmark did not render');
props.selectWordmark('AveritA 主题集');
if (props.getWordmark() !== 'AveritA 主题集') throw new Error('selectWordmark did not stick');
if (storage.get('dsh-theme-averita:wordmark') !== 'AveritA 主题集') throw new Error('wordmark was not persisted');
if (brandNameText() !== 'AveritA 主题集') throw new Error('brand name did not follow wordmark');
props.selectWordmark('   ');
if (props.getWordmark() !== '   ') throw new Error('blank wordmark should be kept as-is');
if (brandNameText() !== null) throw new Error('blank wordmark should hide the brand name');
props.selectWordmark('A\nB');
if (props.getWordmark() !== 'A B') throw new Error('newlines in wordmark should fold to spaces');
props.selectWordmark('x'.repeat(40));
if (props.getWordmark().length !== 32) throw new Error('wordmark must be capped at 32 chars');
props.selectWordmark('');
if (brandNameText() !== null) throw new Error('empty wordmark should hide the brand name');
props.selectWordmark("AveritA's DSH");

/** 3.6 首屏文案：默认跟随、替换、空值隐藏、恢复默认、单行化、上限与 CSS 转义。 */
props.selectHeroText(null);
if (props.getHeroText() !== null) throw new Error('hero text should reset to null');
if (attrs.has('data-av-hero-text') || attrs.has('data-av-hero-empty')) {
  throw new Error('hero attrs should be cleared when following DSH');
}
if (styles.has('--av-hero-text')) throw new Error('--av-hero-text should be cleared when following DSH');
if (storage.has('dsh-theme-averita:hero-text')) {
  throw new Error('hero text storage should be cleared when following DSH');
}
props.selectHeroText('今晚写点什么');
if (props.getHeroText() !== '今晚写点什么') throw new Error('selectHeroText did not stick');
if (!attrs.has('data-av-hero-text')) throw new Error('selectHeroText did not set data-av-hero-text');
if (attrs.has('data-av-hero-empty')) throw new Error('hero text should not be marked empty');
if (styles.get('--av-hero-text') !== '"今晚写点什么"') {
  throw new Error('hero text CSS var = ' + styles.get('--av-hero-text'));
}
if (storage.get('dsh-theme-averita:hero-text') !== '今晚写点什么') {
  throw new Error('hero text was not persisted');
}
props.selectHeroText('');
if (props.getHeroText() !== '') throw new Error('empty hero text should be kept');
if (!attrs.has('data-av-hero-empty')) throw new Error('empty hero text should set data-av-hero-empty');
if (styles.get('--av-hero-text') !== '""') {
  throw new Error('empty hero text CSS var = ' + styles.get('--av-hero-text'));
}
props.selectHeroText('   ');
if (!attrs.has('data-av-hero-empty')) throw new Error('blank hero text should hide the title');
props.selectHeroText('A\nB');
if (props.getHeroText() !== 'A B') throw new Error('newlines in hero text should fold to spaces');
props.selectHeroText('x'.repeat(60));
if (props.getHeroText().length !== 40) throw new Error('hero text must be capped at 40 chars');
const quote = String.fromCharCode(34);
const slash = String.fromCharCode(92);
props.selectHeroText('a' + quote + 'b' + slash + 'c');
if (styles.get('--av-hero-text') !== quote + 'a' + slash + quote + 'b' + slash + slash + 'c' + quote) {
  throw new Error('hero text CSS escaping = ' + styles.get('--av-hero-text'));
}
props.selectHeroText(null);
if (attrs.has('data-av-hero-text') || attrs.has('data-av-hero-empty')) {
  throw new Error('hero attrs should be cleared on reset');
}
if (styles.has('--av-hero-text')) throw new Error('--av-hero-text should be cleared on reset');
if (storage.has('dsh-theme-averita:hero-text')) {
  throw new Error('hero text storage should be cleared on reset');
}

/** 3.7 输入框底衬：默认关（不挂属性）；开时挂 data-av-fade，关时摘掉；选择持久化。 */
if (props.getFade() !== 'off') throw new Error('default composer fade must be off');
if (attrs.has('data-av-fade')) throw new Error('off composer fade should not set data-av-fade');
props.selectFade('on');
if (props.getFade() !== 'on') throw new Error('selectFade(on) did not stick');
if (attrs.get('data-av-fade') !== 'on') throw new Error('selectFade(on) did not set data-av-fade');
if (storage.get('dsh-theme-averita:fade') !== 'on') throw new Error('composer fade choice was not persisted');
props.selectFade('off');
if (props.getFade() !== 'off') throw new Error('selectFade(off) did not stick');
if (attrs.has('data-av-fade')) throw new Error('selectFade(off) did not clear data-av-fade');
props.selectFade('nope');
if (props.getFade() !== 'off') throw new Error('unknown composer fade must fall back to off');

/** 4. 底纹：方块 / 字符 / 字符墙 / 关闭挂属性、圆点摘属性；选择进 localStorage。 */
if (props.getDots() !== 'dot') throw new Error('default dots must be dot');
props.selectDots('square');
if (attrs.get('data-av-dots') !== 'square') throw new Error('selectDots(square) did not set data-av-dots');
if (props.getDots() !== 'square') throw new Error('getDots did not follow selectDots');
if (storage.get('dsh-theme-averita:dots') !== 'square') throw new Error('dots choice was not persisted');
props.selectDots('char');
if (attrs.get('data-av-dots') !== 'char') throw new Error('selectDots(char) did not set data-av-dots');
props.selectDots('wall');
if (attrs.get('data-av-dots') !== 'wall') throw new Error('selectDots(wall) did not set data-av-dots');
props.selectDots('off');
if (props.getDots() !== 'dot') throw new Error('dots off is no longer a shape; must fall back to dot');
props.selectDots('nope');
if (props.getDots() !== 'dot') throw new Error('unknown dots must fall back to dot');

/** 4.5 背景：默认点阵；关闭挂 data-av-bg；流光建画布、切色板、切走拆画布。 */
if (props.getBg() !== 'dots') throw new Error('default background must be dots');
if (attrs.has('data-av-bg')) throw new Error('dots background should not set data-av-bg');
props.selectBg('off');
if (attrs.get('data-av-bg') !== 'off') throw new Error('selectBg(off) did not set data-av-bg');
if (storage.get('dsh-theme-averita:bg') !== 'off') throw new Error('background choice was not persisted');
props.selectBg('flow');
if (props.getBg() !== 'flow') throw new Error('selectBg(flow) did not stick');
if (attrs.get('data-av-bg') !== 'flow') throw new Error('selectBg(flow) did not set data-av-bg');
if (storage.get('dsh-theme-averita:bg') !== 'flow') throw new Error('flow choice was not persisted');
if (!props.getFlowAvailable()) throw new Error('flow should be available with a fake GL context');
if (bodyNodes.length !== 1 || bodyNodes[0].tagName !== 'CANVAS') throw new Error('flow canvas was not mounted');
if (!(bodyNodes[0].width > 0) || !(bodyNodes[0].height > 0)) throw new Error('flow canvas was not sized');
if (props.getFlow() !== 'theme') throw new Error('default flow palette must follow the theme');
props.selectFlow('dusk');
if (props.getFlow() !== 'dusk') throw new Error('selectFlow(dusk) did not stick');
if (attrs.get('data-av-flow-palette') !== 'dusk') throw new Error('selectFlow(dusk) did not set the palette attr');
if (storage.get('dsh-theme-averita:flow') !== 'dusk') throw new Error('flow palette was not persisted');
props.selectFlow('nope');
if (props.getFlow() !== 'theme') throw new Error('unknown flow palette must fall back to theme');
if (!near(props.getSpeed(), 1)) throw new Error('default flow speed must be 1');
props.selectSpeed('1.6');
if (!near(props.getSpeed(), 1.6)) throw new Error('selectSpeed(1.6) did not stick');
if (storage.get('dsh-theme-averita:speed') !== '1.6') throw new Error('flow speed was not persisted');
props.selectSpeed('9');
if (!near(props.getSpeed(), 2.5)) throw new Error('speed above 2.5 must clamp');
props.selectSpeed('0');
if (!near(props.getSpeed(), 0.2)) throw new Error('speed below 0.2 must clamp');
props.selectSpeed('nope');
if (!near(props.getSpeed(), 1)) throw new Error('invalid speed must fall back to 1');
props.selectBg('dots');
if (attrs.has('data-av-bg')) throw new Error('selectBg(dots) did not clear data-av-bg');
if (bodyNodes.length !== 0) throw new Error('flow canvas was not removed when leaving flow');
props.selectFlow('mist');
props.selectBg('dots');
if (props.getBg() !== 'dots') throw new Error('background did not return to dots');

/** 5. 字符：默认加号，四枚字形可切，未知值退回加号。 */
if (props.getGlyph() !== 'plus') throw new Error('default glyph must be plus');
props.selectGlyph('plus');
if (attrs.get('data-av-glyph') !== 'plus') throw new Error('default glyph attr must be plus');
props.selectGlyph('hash');
if (attrs.get('data-av-glyph') !== 'hash') throw new Error('selectGlyph(hash) did not set data-av-glyph');
if (props.getGlyph() !== 'hash') throw new Error('getGlyph did not follow selectGlyph');
if (storage.get('dsh-theme-averita:glyph') !== 'hash') throw new Error('glyph choice was not persisted');
props.selectGlyph('nope');
if (props.getGlyph() !== 'plus') throw new Error('unknown glyph must fall back to plus');

/** 6. 缩放 / 浓淡 / 动效：默认 1 / 1 / both；滑杆值无级、越界夹紧、非法值回默认。 */
if (!near(props.getScale(), 1) || !near(props.getDepth(), 1)) throw new Error('default scale/depth must be 1');
if (props.getMotion() !== 'both') throw new Error('default motion must be both');
props.selectScale('2.3');
if (!near(props.getScale(), 2.3)) throw new Error('selectScale(2.3) did not stick');
if (styles.get('--av-scale') !== '2.3') throw new Error('selectScale did not set --av-scale');
if (storage.get('dsh-theme-averita:scale') !== '2.3') throw new Error('scale choice was not persisted');
props.selectDepth('1.4');
if (!near(props.getDepth(), 1.4)) throw new Error('selectDepth(1.4) did not stick');
if (styles.get('--av-depth') !== '1.4') throw new Error('selectDepth did not set --av-depth');
if (storage.get('dsh-theme-averita:depth') !== '1.4') throw new Error('depth choice was not persisted');
props.selectScale('9');
props.selectDepth('0.01');
if (!near(props.getScale(), 4) || !near(props.getDepth(), 0.3)) throw new Error('slider values must clamp to range');
props.selectScale('nope');
props.selectDepth('');
if (!near(props.getScale(), 1) || !near(props.getDepth(), 1)) throw new Error('invalid slider values must fall back to 1');
props.selectMotion('breathe');
if (attrs.get('data-av-motion') !== 'breathe') throw new Error('selectMotion(breathe) did not set data-av-motion');
if (storage.get('dsh-theme-averita:motion') !== 'breathe') throw new Error('motion choice was not persisted');
props.selectMotion('drift');
if (attrs.get('data-av-motion') !== 'drift') throw new Error('selectMotion(drift) did not set data-av-motion');
props.selectMotion('off');
if (attrs.get('data-av-motion') !== 'off') throw new Error('selectMotion(off) did not set data-av-motion');
props.selectMotion('both');
if (attrs.has('data-av-motion')) throw new Error('selectMotion(both) did not clear data-av-motion');
props.selectMotion('nope');
if (props.getMotion() !== 'both') throw new Error('unknown motion must fall back to both');
if (!near(props.getBreathe(), 0.65)) throw new Error('default breathe must be 0.65');
props.selectBreathe('0.35');
if (!near(props.getBreathe(), 0.35)) throw new Error('selectBreathe(0.35) did not stick');
if (styles.get('--av-breathe-min') !== '0.35') throw new Error('selectBreathe did not set --av-breathe-min');
if (storage.get('dsh-theme-averita:breathe') !== '0.35') throw new Error('breathe choice was not persisted');
props.selectBreathe(9);
if (!near(props.getBreathe(), 1)) throw new Error('breathe above 1 must clamp to 1');
props.selectBreathe(-1);
if (!near(props.getBreathe(), 0)) throw new Error('breathe below 0 must clamp to 0');
props.selectBreathe('nope');
if (!near(props.getBreathe(), 0.65)) throw new Error('invalid breathe must fall back to 0.65');

/** 6.5 一键回默认：底纹 / 字形 / 缩放 / 浓淡 / 动效 / 呼吸下限 都复位，主题与装饰不动。 */
props.select('coldmorning');
props.selectDots('wall');
props.selectGlyph('star');
props.selectBg('flow');
props.selectFlow('amber');
props.selectScale('2.2');
props.selectDepth('1.4');
props.selectSpeed('1.8');
props.selectMotion('off');
props.selectBreathe('0.2');
props.resetBackground();
if (props.getBg() !== 'dots' || attrs.has('data-av-bg')) throw new Error('resetBackground did not restore dots background');
if (props.getFlow() !== 'theme' || attrs.get('data-av-flow-palette') !== 'theme') throw new Error('resetBackground did not restore flow palette');
if (bodyNodes.length !== 0) throw new Error('resetBackground did not remove the flow canvas');
if (props.getDots() !== 'dot' || props.getGlyph() !== 'plus') throw new Error('resetBackground did not restore dots/glyph');
if (!near(props.getScale(), 1) || !near(props.getDepth(), 1)) throw new Error('resetBackground did not restore scale/depth');
if (!near(props.getSpeed(), 1)) throw new Error('resetBackground did not restore speed');
if (props.getMotion() !== 'both') throw new Error('resetBackground did not restore motion');
if (!near(props.getBreathe(), 0.65)) throw new Error('resetBackground did not restore breathe');
if (attrs.has('data-av-dots')) throw new Error('resetBackground did not clear data-av-dots');
if (attrs.has('data-av-motion')) throw new Error('resetBackground did not clear data-av-motion');
if (styles.get('--av-scale') !== '1' || styles.get('--av-depth') !== '1') throw new Error('resetBackground did not reset CSS vars');
if (styles.get('--av-breathe-min') !== '0.65') throw new Error('resetBackground did not reset breathe var');
if (props.getActive() !== 'coldmorning') throw new Error('resetBackground should keep the theme');
props.select('averita');

/** 7. 设置面板：渲染一次，检查默认 / 字符 / 关闭 / 星芒 四种形态的行布局。 */
const walk = (node, out = []) => {
  if (!node || typeof node !== 'object') return out;
  if (Array.isArray(node)) {
    for (const child of node) walk(child, out);
    return out;
  }
  out.push(node);
  walk(node.children, out);
  return out;
};
const rowLabels = () =>
  walk(section.Component(props))
    .filter((node) => node.props && String(node.props.className || '').includes('av-deco-row'))
    .map((node) => node.children?.[0]?.children?.[0] ?? '?');
const panelNodes = () => walk(section.Component(props));
const groupLabels = () =>
  panelNodes()
    .filter((node) => String(node.props?.className || '') === 'av-theme-group')
    .map((node) => node.children?.[0]);

props.selectDots('dot');
let labels = rowLabels();
if (labels.join('/') !== '字标/首屏文案/背景/底纹/缩放/浓淡/动效/呼吸下限/装饰/底部遮罩/重置背景') throw new Error('panel rows (default) = ' + labels.join('/'));
if (groupLabels().join('/') !== '品牌/背景/装饰/界面') throw new Error('panel groups (default) = ' + groupLabels().join('/'));

const fadeChips = panelNodes().filter(
  (node) => node.type === 'button' && ['开', '关'].includes(node.children?.[0]),
);
if (fadeChips.length !== 2) throw new Error('composer fade chips = ' + fadeChips.length);
if (fadeChips.find((node) => node.children[0] === '关')?.props['aria-pressed'] !== true) {
  throw new Error('composer fade chip should default to off');
}
props.selectFade('on');
const fadeOnChip = panelNodes().find((node) => node.type === 'button' && node.children?.[0] === '开');
if (fadeOnChip?.props['aria-pressed'] !== true) throw new Error('composer fade chip did not follow state');
props.selectFade('off');

const scaleInput = panelNodes().find((node) => node.type === 'input' && node.props?.min === 0.5);
const depthInput = panelNodes().find((node) => node.type === 'input' && node.props?.min === 0.3);
const breatheInput = panelNodes().find((node) => node.type === 'input' && node.props?.min === 0 && node.props?.max === 1);
if (!scaleInput || scaleInput.props.max !== 4 || scaleInput.props.step !== 0.1) throw new Error('scale slider missing or wrong range');
if (!depthInput || depthInput.props.max !== 4 || depthInput.props.step !== 0.05) throw new Error('depth slider missing or wrong range');
if (!breatheInput || breatheInput.props.step !== 0.05) throw new Error('breathe slider missing or wrong range');
const wordmarkInput = panelNodes().find(
  (node) => node.type === 'input' && node.props?.['aria-label'] === '左上角 logo 右侧的字标',
);
if (!wordmarkInput) throw new Error('wordmark input missing');
if (wordmarkInput.props.value !== "AveritA's DSH") throw new Error('wordmark input value = ' + wordmarkInput.props.value);
if (wordmarkInput.props.maxLength !== 32) throw new Error('wordmark input maxLength = ' + wordmarkInput.props.maxLength);
props.selectWordmark('');
const emptyWordmarkInput = panelNodes().find(
  (node) => node.type === 'input' && node.props?.['aria-label'] === '左上角 logo 右侧的字标',
);
if (emptyWordmarkInput.props.value !== '') throw new Error('wordmark input did not clear');
if (!panelNodes().some((node) => node.children?.[0] === '留空：只显示星标')) {
  throw new Error('empty wordmark hint missing');
}
props.selectWordmark("AveritA's DSH");
const heroInput = panelNodes().find(
  (node) => node.type === 'input' && node.props?.['aria-label'] === '新会话首屏文案',
);
if (!heroInput) throw new Error('hero text input missing');
if (heroInput.props.value !== '') throw new Error('hero text input should start empty = follow DSH');
if (heroInput.props.maxLength !== 40) throw new Error('hero text input maxLength = ' + heroInput.props.maxLength);
if (!String(heroInput.props.placeholder).includes('探索未至之境')) {
  throw new Error('hero text placeholder should show the native headline');
}
if (!panelNodes().some((node) => node.children?.[0] === '跟随 DSH 原文')) {
  throw new Error('hero text follow-DSH hint missing');
}
props.selectHeroText('自定义标题');
const customHeroInput = panelNodes().find(
  (node) => node.type === 'input' && node.props?.['aria-label'] === '新会话首屏文案',
);
if (customHeroInput.props.value !== '自定义标题') throw new Error('hero text input did not follow state');
props.selectHeroText('');
if (!panelNodes().some((node) => node.children?.[0] === '已隐藏：只留星标')) {
  throw new Error('hero text hidden hint missing');
}
props.selectHeroText(null);
if (scaleInput.props.style?.['--av-fill'] !== '14.29%') throw new Error('scale fill at 1× = ' + scaleInput.props.style?.['--av-fill']);
if (depthInput.props.style?.['--av-fill'] !== '18.92%') throw new Error('depth fill at 100% = ' + depthInput.props.style?.['--av-fill']);
if (breatheInput.props.style?.['--av-fill'] !== '65.00%') throw new Error('breathe fill at 65% = ' + breatheInput.props.style?.['--av-fill']);
const motionLabels = panelNodes()
  .filter((node) => node.type === 'button' && ['都开', '呼吸', '漂移', '都关'].includes(node.children?.[0]))
  .map((node) => node.children[0]);
if (motionLabels.join('/') !== '都开/呼吸/漂移/都关') throw new Error('motion chips = ' + motionLabels.join('/'));
if (motionLabels.length !== 4) throw new Error('motion chips missing');

props.selectMotion('drift');
labels = rowLabels();
if (labels.join('/') !== '字标/首屏文案/背景/底纹/缩放/浓淡/动效/装饰/底部遮罩/重置背景') throw new Error('panel rows (drift) = ' + labels.join('/'));
props.selectMotion('both');

props.selectScale(2.6);
props.selectDepth(2.4);
props.selectBreathe(0.35);
const tuned = panelNodes();
const tunedScale = tuned.find((node) => node.type === 'input' && node.props?.min === 0.5);
const tunedDepth = tuned.find((node) => node.type === 'input' && node.props?.min === 0.3);
const tunedBreathe = tuned.find((node) => node.type === 'input' && node.props?.min === 0 && node.props?.max === 1);
if (tunedScale?.props.value !== 2.6 || tunedScale.props.style?.['--av-fill'] !== '60.00%') throw new Error('scale slider did not follow state');
if (tunedDepth?.props.value !== 2.4 || tunedDepth.props.style?.['--av-fill'] !== '56.76%') throw new Error('depth slider did not follow state');
if (tunedBreathe?.props.value !== 0.35 || tunedBreathe.props.style?.['--av-fill'] !== '35.00%') throw new Error('breathe slider did not follow state');
const tunedText = tuned.filter((node) => typeof node.children?.[0] === 'string').map((node) => node.children[0]);
if (!tunedText.includes('2.6× · 26px 格距')) throw new Error('scale readout missing');
if (!tunedText.includes('240% · 比主题浓 140%')) throw new Error('depth readout missing');
if (!tunedText.includes('35% · 淡入到 100%')) throw new Error('breathe readout missing');
props.selectMotion('off');
if (panelNodes().some((node) => node.type === 'input' && node.props?.min === 0 && node.props?.max === 1)) {
  throw new Error('breathe slider should hide when motion is off');
}
const offChip = panelNodes().find((node) => node.type === 'button' && node.children?.[0] === '都关');
if (offChip?.props['aria-pressed'] !== true) throw new Error('motion chip did not follow state');
props.selectScale(1);
props.selectDepth(1);
props.selectBreathe(0.65);
props.selectMotion('both');

props.selectDots('char');
labels = rowLabels();
if (labels.join('/') !== '字标/首屏文案/背景/底纹/字符/缩放/浓淡/动效/呼吸下限/装饰/底部遮罩/重置背景') throw new Error('panel rows (char) = ' + labels.join('/'));

props.selectBg('off');
labels = rowLabels();
if (labels.join('/') !== '字标/首屏文案/背景/装饰/底部遮罩/重置背景') throw new Error('panel rows (off) = ' + labels.join('/'));

props.selectDeco('star');
labels = rowLabels();
if (labels.join('/') !== '字标/首屏文案/背景/装饰/星形/底部遮罩/重置背景') throw new Error('panel rows (star) = ' + labels.join('/'));
props.selectDeco('paper');
props.selectBg('dots');
props.selectDots('dot');
if (attrs.has('data-av-dots')) throw new Error('selectDots(dot) did not clear data-av-dots');

/** 8. 流光面板：只剩 背景 / 色板 / 缩放 / 浓淡 / 重置，滑杆换成流光的说法。 */
props.selectBg('flow');
labels = rowLabels();
if (labels.join('/') !== '字标/首屏文案/背景/色板/速率/缩放/浓淡/装饰/底部遮罩/重置背景') throw new Error('panel rows (flow) = ' + labels.join('/'));
const flowChips = panelNodes()
  .filter((node) => node.type === 'button' && ['跟随主题', '雾蓝', '暮紫', '青灰', '暖沙'].includes(node.children?.[0]))
  .map((node) => node.children[0]);
if (flowChips.join('/') !== '跟随主题/雾蓝/暮紫/青灰/暖沙') throw new Error('flow chips = ' + flowChips.join('/'));
const flowScale = panelNodes().find((node) => node.type === 'input' && node.props?.min === 0.5);
const flowDepth = panelNodes().find((node) => node.type === 'input' && node.props?.min === 0.3);
const flowSpeed = panelNodes().find((node) => node.type === 'input' && node.props?.min === 0.2);
if (flowScale?.props['aria-label'] !== '流场缩放') throw new Error('flow scale aria-label missing');
if (flowDepth?.props['aria-label'] !== '流光浓度') throw new Error('flow depth aria-label missing');
if (flowSpeed?.props['aria-label'] !== '流光速率') throw new Error('flow speed aria-label missing');
if (flowSpeed?.props.max !== 2.5 || flowSpeed?.props.step !== 0.1) throw new Error('flow speed slider range/step wrong');
if (panelNodes().some((node) => node.type === 'input' && node.props?.min === 0 && node.props?.max === 1)) {
  throw new Error('breathe slider should hide in flow mode');
}
props.selectBg('dots');
if (bodyNodes.length !== 0) throw new Error('flow canvas leaked after panel test');

console.log(
  `smoke OK — ${names.length} token pairs × ${EXPECTED_THEMES.length} themes, ${registrations.length} slot registrations, ` +
    `style cleaned up, idle attr ${attrs.has('data-av-idle')}`,
);