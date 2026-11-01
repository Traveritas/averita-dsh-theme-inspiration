# 品牌字标（设置行）

没有 CSS、没有 `data-av-*` 属性。提供「设置 → 主题 → 品牌字标」里的两行：

- **图标**：开关决定侧栏品牌位用主题星标还是 DSH 原生鲸标，存在 `<plugin-id>:brand-mark-on`；
  只控制 `sidebar.brand.mark`，不影响右侧文字。
- **字标**：输入框实时改左上角 logo 右侧的文字，存在 `<plugin-id>:wordmark`；
  默认 `AveritA's DSH`，最多 32 字，换行 / 制表折成空格。
- **空值**：输入框留空（或只有空白）时整段文字不渲染，只留图标；
  「恢复默认」把默认字标写回去。
- **总开关**：在「主题覆盖」里（`<plugin-id>:brand-on`）。关掉后本模块整个收起，
  `sidebar.brand.mark` 与 `sidebar.brand.name` 两个 slot 一起摘掉，侧栏回 DSH 原生鲸标与字标。
- 字标只走 React 状态，不改 `html` 属性；侧栏 `sidebar.brand.name` slot 里的
  组件订阅状态重渲染。

视觉在 [`src/theme.css`](../../theme.css) 的 `.av-brand-name` / `.av-text-input`，
星标在 `client.template.js` 的 `BrandMark`。单独复用组件时不需要这个目录。

所属模块「品牌字标」（manifest `settings.order` 10），模块内行号 10 / 20，见 [`settings.js`](settings.js)。
总开关见 [`overrides/`](../overrides/README.md)（order 5）。
