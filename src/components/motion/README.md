# 位移动效

纯 CSS，无 JS、无属性开关、无存储。六件事：

1. `[data-conversation-session]` 切换时上浮 6px（160ms）
2. `[data-row-key]:hover` 横移 2px
3. `button:active` 下压 0.5px
4. `[class*="_frame"]` 侧栏折叠 grid 过渡 300ms（拖动改宽时关掉）
5. 最后一个 `[data-chat-turn]` 进入时上浮 6px（180ms）
6. `:where(button, a, summary, input, textarea)` 的颜色 / 边框 / 阴影过渡（零特异性）

## 变量

没有自己的变量；用宿主令牌 `--ds-transition-duration` / `-fast` / `-slow`
与 `--ds-ease-in-out`。本主题在 `src/tokens.js` 里把宿主默认的 0.2s / 0.1s
换成 180ms / 120ms 和柔出曲线。

## 存

不存。

## 依赖

- 第 1 / 2 / 4 / 5 条钉在宿主 `data-*` 与 CSS Modules 的稳定后缀上；DSH 改结构会静默失效。
- `prefers-reduced-motion: reduce` 时全部停掉（位移、过渡、进入动画）。

## 单独用

整份复制；只想要一两种，删掉对应选择器即可。菜单故意不做位移：DSH 的菜单带锚定定位。