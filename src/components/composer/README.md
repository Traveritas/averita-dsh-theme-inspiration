# 输入框底衬

会话有内容时，DSH 会给输入框所在的 `composerSeat` 铺一层 `transparent → --dsw-alias-bg-base`
的渐变（顶部 36px 渐隐，往下纯色），把点阵 / 流光挡在输入框周围。这个组件默认把这层背景摘掉，
让背景透到输入框后；设置里可以开回 DSH 原来的效果。

| 项 | 内容 |
|---|---|
| 挂什么属性 | `html[data-av-fade="on"]`（开，保留 DSH 底衬）；不挂属性 = 关（默认），摘掉底衬 |
| 读写什么变量 | 无；直接用宿主的 `var(--dsw-alias-bg-base)` 渐变，但只负责摘掉，不重画 |
| 存什么 | localStorage `<plugin-id>:fade`；`on` = 开，其余 = 关 |
| 依赖宿主哪些选择器 | `[data-composer-seat]`（ui-conversation 0.2.1-rc.3 的 composerSeat 稳定属性） |

- CSS 只有一条：`html:not([data-av-fade="on"]) [data-composer-seat] { background: none !important }`。
  只摘 seat 自己的背景，不动宿主的 `position: sticky` / 层级，也不动输入卡 `_card` 自己的
  `--dsw-specific-input-major` 底色。
- 默认关，所以正常状态不挂 `data-av-fade`；选「开」才挂 `="on"`，卸载时摘掉。
- 选择器失效时回退成 DSH 的渐隐底衬；关掉后输入框周围会露出背景，滚动内容也可能从 seat 的
  非卡片区域（底部状态栏附近）透出一点，这是去掉底衬的连带效果。

所属模块「输入框底衬」（manifest `settings.order` 70），行号 10，见 [`settings.js`](settings.js)。
状态与属性写在 [`client.template.js`](../../client.template.js)。
