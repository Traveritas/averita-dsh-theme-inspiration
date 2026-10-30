# 组件

主题的 CSS 与设置模块按组件拆在这里，构建时由 [`manifest.js`](manifest.js) 登记的顺序
拼进 `client.js`。每个目录两到三件：`style.css`（有视觉组件的才有）、`settings.js`（有设置行的才有）、
`README.md`（契约）。

## 怎么拿一个组件

1. 复制组件的 `style.css` 到自己插件的 `<style>` 或样式表里；
2. 在 `<html>` 上挂 README 里写的 `data-av-*` 属性；
3. 装了别的主题，就把文件开头的兜底块删掉（它只在没有 `data-av-theme` 时生效）。

不需要设置面板：CSS 不依赖 `client.template.js`，属性手写即可。`settings.js` 是给本插件
「设置 → 主题」用的，单独复用 CSS 时不用拿。

## 契约

每个组件的 README 都写四栏：**挂什么属性、读写什么变量、存什么、依赖宿主哪些选择器**。
DSH 结构一变，钉在选择器上的组件会整段失效（回退原生外观，不影响功能）。

## 设置模块

`settings.js` 的约定：

- 文件被 `scripts/build.mjs` 原样内联进 `client.js`，不经过任何打包器；不要写 `import` / `export`。
- 只能引用参数 `api`：`{ h, props, state, reduced, helpers, modes, limits, brand }`。
  模式表、范围、格式化函数都从 `client.template.js` 传进来，值只有一份。
- 导出一个函数，名字在 `manifest.js` 的 `settings.name` 里登记；返回 `[{ order, node }]`。
- **一个组件就是设置里的一个模块**：标题取 manifest 的 `label`，模块顺序取 `settings.order`，
  模块内按行的 `order` 排。组件返回空数组（或所有行都不该出现）时，整个模块不渲染。
- 现有模块与顺序：品牌字标 10、新会话首屏 20、背景 30、点阵底纹 40、流光背景 50、装饰与星形 60、
  输入框底衬 70。模块内行号：字标 10；首屏文案 20；背景 10、缩放 60、浓淡 70；
  底纹 20、字符 50、动效 80、呼吸 90；明暗 20、色板 30、速率 40；装饰 10、星形 20；底部遮罩 10；
  滑条开关 10。背景重置按钮由模板固定渲染在模块列表末尾。
- 可见性、文案、控件都在文件里自己判断；模板不再为单个组件加 `if`。
- `backdrop/`、`deco/` 与 `brand/` 只有设置行、没有 CSS，分别是背景 / 装饰 / 字标的开关；`hero/` 有 CSS（首屏标题与徽章）和首屏文案模块；`composer/` 有 CSS 与底部遮罩模块。

## 为什么不用 @layer

DSH 宿主 CSS 没有分层（`ui-theme` / `ui-chat` 的产物里没有 `@layer`）。按级联层规则，
分层里的普通声明会输给未分层声明，不管选择器多具体；主题本来就是覆盖宿主，所以组件
保持未分层，用属性前缀隔离。想覆盖组件里的某条规则，让自己的样式后加载，或提高特异性。

## 现状

CSS 与设置模块都已经按组件拆开；**选择器、localStorage、槽位注册时机、流光画布的
生命周期**仍在 `src/client.template.js`（它们是行为，不是设置 UI）。

加组件：新建目录 → 写 `style.css` / `settings.js` / `README.md`（按需）→ 在 `manifest.js` 登记
（有设置模块的记得给 `settings.order`）→ `node scripts/build.mjs`；有 CSS 的话三个预览页的 `<link>`
也要补（冒烟测试会查顺序）。