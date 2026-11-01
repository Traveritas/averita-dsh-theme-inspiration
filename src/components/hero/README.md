# 新会话首屏（图标 + 文案）

替换新会话空态的大图标与标题，并去掉标题右侧的「预览版」徽章。

| 项 | 内容 |
|---|---|
| 挂什么属性 | `html[data-av-hero]`（总开关打开）；`html[data-av-hero-text]`（有自定义文案）；`html[data-av-hero-empty]`（文案为空，只留图标） |
| 读写什么变量 | 读 `--av-hero-text`（`content` 用的 CSS 字符串）、`--av-mark`（星标颜色）；不写别的变量 |
| 存什么 | `<plugin-id>:hero-on`（总开关）、`:hero-mark-on`（图标开关）、`:hero-text`（键不存在 = 跟随 DSH 原文，空串 = 只留图标，其余 = 替换标题） |
| 依赖宿主哪些选择器 | `_headline` / `_fishHitbox` / `_titleGroup` / `_previewBadge`（ui-conversation 0.2.1-rc.3 的 CSS Modules 稳定后缀） |

- **总开关**：在「主题覆盖」里（`:hero-on`）。关掉后图标 / 标题 / 徽章都不覆盖，`data-av-hero` 摘掉，首屏完全回原生；本模块整个收起。
- **图标**：`conversation.hero.brand.mark` single slot，组件是 `client.template.js` 的 `HeroMark`，和左上角 `BrandMark` 共用 `projectStar()`。尺寸 34px，颜色 `--av-mark`。
  总开关打开时，模块里的「图标」开关（`:hero-mark-on`）再决定星标还是原生鱼；关掉只摘 slot，标题与徽章仍按总开关走。
- **动效**：鼠标移入 / 移出各让 yaw 加 90°，累计不回位；每帧重画深度 opacity，所以是绕 z 轴的三维转向，不是 CSS 平面旋转。系统减少动效时不动。
- **文案**：宿主没有文案 slot，标题是 `t("hero.headline")`。这里直接隐藏 `_titleGroup` 的原文字，用 `::before { content: var(--av-hero-text) }` 替换；不碰 React，hover 重渲染也不会冲掉。`null` 时不挂属性，原文照常显示；总开关关掉时也不挂。
- **预览版**：`html[data-av-hero]` 时隐藏 `_previewBadge`；总开关关掉就回原生。要整体恢复就删 `style.css` 第一条规则。
- `data-av-hero-empty` 时整段 `_titleGroup` 不渲染，只留居中的图标。
- 选择器失效时回退：图标开关打开时 slot 仍会替换，文案和徽章回到 DSH 原样；不影响功能。

所属模块「新会话首屏」（manifest `settings.order` 20），模块内行号 10 / 20，见 [`settings.js`](settings.js)。星标组件与状态在 [`client.template.js`](../../client.template.js)，总开关在 [`overrides/`](../overrides/README.md)（order 5）。
