# 组件

主题的 CSS 与设置行按组件拆在这里，构建时由 [`manifest.js`](manifest.js) 登记的顺序拼进 `client.js`。
每个目录两到三件：`style.css`（有视觉组件的才有）、`settings.js`（有设置行的才有）、`README.md`（契约）。

## 怎么拿一个组件

1. 复制组件的 `style.css` 到自己插件的 `<style>` 或样式表里；
2. 在 `<html>` 上挂 README 里写的 `data-av-*` 属性；
3. 装了别的主题，就把文件开头的兜底块删掉（它只在没有 `data-av-theme` 时生效）。

不需要设置面板：CSS 不依赖 `client.template.js`，属性手写即可。`settings.js` 是给本插件
「设置 → 主题」用的，单独复用 CSS 时不用拿。

## 契约

每个组件的 README 都写四栏：**挂什么属性、读写什么变量、存什么、依赖宿主哪些选择器**。
DSH 结构一变，钉在选择器上的组件会整段失效（回退原生外观，不影响功能）。

## 设置行

`settings.js` 的约定：

- 文件被 `scripts/build.mjs` 原样内联进 `client.js`，不经过任何打包器；不要写 `import` / `export`。
- 只能引用参数 `api`：`{ h, props, state, reduced, helpers, modes, limits }`。
  模式表、范围、格式化函数都从 `client.template.js` 传进来，值只有一份。
- 导出一个函数，名字在 `manifest.js` 的 `settings.name` 里登记；返回 `[{ group, order, node }]`。
- `group` 是面板分组，在 [`groups.js`](groups.js) 登记（当前：品牌 10、背景 20、装饰 30）；
  空组不渲染，`brand` 等自定义字标落地后会自动出现。`order` 是**组内**顺序。
- 组内现存顺序：背景组 背景 10、底纹 20、色板 30、速率 40、字符 50、缩放 60、浓淡 70、
  动效 80、呼吸 90；装饰组 装饰 10、星形 20。没有 `group` 的行（重置背景）排在面板最后。
- 可见性、文案、控件都在文件里自己判断；模板不再为单个组件加 `if`。
- `backdrop/` 与 `deco/` 只有设置行、没有 CSS，是点阵 / 流光、纸品 / 星芒共用的两组。

## 为什么不用 @layer

DSH 宿主 CSS 没有分层（`ui-theme` / `ui-chat` 的产物里没有 `@layer`）。按级联层规则，
分层里的普通声明会输给未分层声明，不管选择器多具体；主题本来就是覆盖宿主，所以组件
保持未分层，用属性前缀隔离。想覆盖组件里的某条规则，让自己的样式后加载，或提高特异性。

## 现状

CSS 和设置行都已经按组件拆开；**选择器、localStorage、流光画布的生命周期**仍在
`src/client.template.js`（它们是行为，不是设置 UI）。

加组件：新建目录 → 写 `style.css` / `settings.js` / `README.md` → 在 `manifest.js` 登记 →
`node scripts/build.mjs`；有 CSS 的话三个预览页的 `<link>` 也要补（冒烟测试会查顺序）。