# 品牌字标（设置行）

没有 CSS、没有 `data-av-*` 属性。只提供「设置 → 主题 → 品牌」里的一行：

- **字标**：输入框实时改左上角 logo 右侧的文字，存在 `<plugin-id>:wordmark`；
  默认 `AveritA's DSH`，最多 32 字，换行 / 制表折成空格。
- **空值**：输入框留空（或只有空白）时整段文字不渲染，只留星标；
  「恢复默认」把默认字标写回去。
- 字标只走 React 状态，不改 `html` 属性；侧栏 `sidebar.brand.name` slot 里的
  组件订阅状态重渲染。

视觉在 [`src/theme.css`](../../theme.css) 的 `.av-brand-name` / `.av-text-input`，
星标在 `client.template.js` 的 `BrandMark`。单独复用组件时不需要这个目录。

所属分组「品牌」（[`groups.js`](../groups.js) order 10），组内行号 10，见 [`settings.js`](settings.js)。
同组的「首屏文案」行在 [`hero/`](../hero/README.md)（order 20），视觉 CSS 也在那边。
