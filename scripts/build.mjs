/**
 * 生成 client.js：把主题集、CSS、插件 id 内联进浏览器 bundle。
 * 产物是 DSH 客户端的 lazy-CJS 格式，不依赖任何构建工具。
 *
 *   node scripts/build.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const load = async (file) => (await import(pathToFileURL(resolve(root, file)).href)).default;

const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));

const themeFiles = ['src/themes/averita.js', 'src/themes/coldmorning.js', 'src/themes/duskrose.js'];
const themes = [];
for (const file of themeFiles) {
  const theme = await load(file);
  const names = Object.keys(theme.tokens.light);
  const missing = names.filter((name) => !(name in theme.tokens.dark));
  const extra = Object.keys(theme.tokens.dark).filter((name) => !(name in theme.tokens.light));
  if (missing.length || extra.length) {
    throw new Error(`${theme.id}: token pairs mismatch — missing dark = ${missing.join(', ')}; extra dark = ${extra.join(', ')}`);
  }
  for (const mode of ['light', 'dark']) {
    if (!theme.vars?.[mode]?.space || !theme.vars[mode].dot || !theme.vars[mode].mark) {
      throw new Error(`${theme.id}: vars.${mode} needs space/dot/mark`);
    }
  }
  themes.push({
    id: theme.id,
    label: theme.label,
    tokens: Object.fromEntries(
      names.map((name) => [name, { light: theme.tokens.light[name], dark: theme.tokens.dark[name] }]),
    ),
    vars: theme.vars,
  });
}
if (new Set(themes.map((theme) => theme.id)).size !== themes.length) {
  throw new Error('duplicate theme ids');
}


/** 三套主题的令牌名集合必须一致（否则切换时会有键残留/缺失）。 */
const referenceKeys = Object.keys(themes[0].tokens).sort().join('\n');
for (const theme of themes.slice(1)) {
  const keys = Object.keys(theme.tokens).sort().join('\n');
  if (keys !== referenceKeys) {
    throw new Error(`token key set mismatch: ${theme.id} vs ${themes[0].id}`);
  }
}
/** 组件：CSS 与设置行都只在 src/components/manifest.js 登记一次。 */
const components = await load('src/components/manifest.js');
const componentIds = new Set();
const settingsNames = new Set();
for (const component of components) {
  if (componentIds.has(component.id)) throw new Error(`duplicate component id: ${component.id}`);
  componentIds.add(component.id);
  if (!component.css && !component.settings) {
    throw new Error(`component ${component.id} has neither css nor settings`);
  }
  if (component.settings) {
    const { file, name } = component.settings;
    if (!file || !name) throw new Error(`component ${component.id}: settings needs file + name`);
    if (settingsNames.has(name)) throw new Error(`duplicate settings function: ${name}`);
    settingsNames.add(name);
    const source = readFileSync(resolve(root, 'src/components', file), 'utf8');
    if (!source.includes(`function ${name}(`)) {
      throw new Error(`component ${component.id}: ${file} does not define ${name}()`);
    }
  }
}
const cssComponents = components.filter((component) => component.css);
const settingsComponents = components.filter((component) => component.settings);

/** 设置分组：面板里的小标题，空组不渲染。 */
const settingGroups = await load('src/components/groups.js');
const groupIds = new Set();
for (const group of settingGroups) {
  if (!group.id || !group.label) throw new Error('setting group needs id + label');
  if (typeof group.order !== 'number') throw new Error(`setting group ${group.id} needs a numeric order`);
  if (groupIds.has(group.id)) throw new Error(`duplicate setting group: ${group.id}`);
  groupIds.add(group.id);
}
const groupsBlock = `const SETTING_GROUPS = ${JSON.stringify(settingGroups, null, 2)};`;

const componentCss = cssComponents
  .map((component) => {
    const source = readFileSync(resolve(root, 'src/components', component.css), 'utf8');
    return `/* ═══ component: ${component.id} · ${component.label} ═══ */\n${source}`;
  })
  .join('\n');

const settingsBlock = `${settingsComponents
  .map((component) => {
    const source = readFileSync(resolve(root, 'src/components', component.settings.file), 'utf8').trim();
    return `/* ═══ settings: ${component.id} ═══ */\n${source}`;
  })
  .join('\n\n')}

const COMPONENT_SETTINGS = {
${settingsComponents.map((component) => `  ${component.id}: ${component.settings.name},`).join('\n')}
};`;

const css = readFileSync(resolve(root, 'src/theme.css'), 'utf8');
const template = readFileSync(resolve(root, 'src/client.template.js'), 'utf8');
const flow = readFileSync(resolve(root, 'src/flow.js'), 'utf8');

/** 每套主题只改 --av-* 三枚变量；深色跟着 body[data-ds-dark-theme] 走。 */
const themeCss = themes
  .map(
    (theme) => `html[data-av-theme="${theme.id}"] {
  --av-space: ${theme.vars.light.space};
  --av-dot: ${theme.vars.light.dot};
  --av-mark: ${theme.vars.light.mark};
}

html[data-av-theme="${theme.id}"]:has(body[data-ds-dark-theme]) {
  --av-space: ${theme.vars.dark.space};
  --av-dot: ${theme.vars.dark.dot};
  --av-mark: ${theme.vars.dark.mark};
}`,
  )
  .join('\n\n');

const fullCss = `${css}

${componentCss}

/* ── 主题变量（由 scripts/build.mjs 生成，勿手改） ───────────────────── */
${themeCss}
`;

const bundle = template
  .replaceAll('__PLUGIN_ID__', pkg.name)
  .replace('__THEMES__', JSON.stringify(themes, null, 2))
  .replace('__CSS__', JSON.stringify(fullCss))
  .replace('__SETTING_GROUPS__', () => groupsBlock)
  .replace('__COMPONENT_SETTINGS__', () => settingsBlock)
  .replace('__FLOW_SRC__', () => flow);

writeFileSync(resolve(root, 'client.js'), bundle);
console.log(`built client.js (${Buffer.byteLength(bundle)} bytes, ${themes.length} themes, ${cssComponents.length} css components, ${settingsComponents.length} settings groups, ${Object.keys(themes[0].tokens).length} tokens each)`);

/** 预览用的令牌表：同一份数据，别手抄。 */
const toCss = (entries, indent = '  ') =>
  Object.entries(entries)
    .map(([name, value]) => `${indent}${name}: ${value};`)
    .join('\n');

const varCss = (vars, indent = '  ') =>
  [indent + `--av-space: ${vars.space};`, indent + `--av-dot: ${vars.dot};`, indent + `--av-mark: ${vars.mark};`].join('\n');

const blocks = [];
for (const theme of themes) {
  const light = Object.fromEntries(Object.entries(theme.tokens).map(([name, pair]) => [name, pair.light]));
  const dark = Object.fromEntries(Object.entries(theme.tokens).map(([name, pair]) => [name, pair.dark]));
  blocks.push(
    `html[data-av-theme="${theme.id}"] {\n  color-scheme: light;\n${varCss(theme.vars.light)}\n${toCss(light)}\n}`,
    `html[data-av-theme="${theme.id}"]:has(body[data-ds-dark-theme]) {\n  color-scheme: dark;\n${varCss(theme.vars.dark)}\n${toCss(dark)}\n}`,
  );
}

mkdirSync(resolve(root, 'preview'), { recursive: true });
writeFileSync(resolve(root, 'preview/tokens.css'), blocks.join('\n\n') + '\n');
console.log('wrote preview/tokens.css');