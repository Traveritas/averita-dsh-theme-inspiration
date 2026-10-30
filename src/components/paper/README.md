# 纸品装饰

用户消息、输入框、发送键的纸质化：左缘书签带、右上星章、右下折角、底缘齿孔、
信头窄带与三枚装订孔、票根虚线、横格线、缺角发送键。

## 挂什么

`html[data-av-deco="paper"]` 生效；摘掉属性即回原生外观（默认就是纸品）。

## 变量

- `--av-mark`：主墨色（必需）
- `--av-line` / `--av-line-soft` / `--av-wash`：从 `--av-mark` 派生；兜底块会给
- `--av-serif`：占位语的衬线字体栈

## 存

不存。插件存 `dsh-theme-averita:deco`。

## 依赖的宿主选择器（DSH 0.2.1-rc.3）

- 用户消息：`:is([data-chat-flow-kind="user"], [data-chat-flow-kind="steering"], [data-pending-steering]) [class*="_bubble"]:not([role="tooltip"])`
  - `steering` 是运行中插话的消息；宿主还没落成正式节点时，回显气泡挂在 `[data-pending-steering]` 上，同样命中。
  - 气泡提示的类名也叫 `_bubble_*`，必须用 `:not([role="tooltip"])` 排除，否则会被改成 `position: relative` 撑宽复制按钮那一行。
- 输入框：`[data-composer-seat] [class*="_card"]`，以及 `_input` / `_row` / `_placeholder`
- 发送键：`[data-composer-seat] [class*="_primary"]`

DSH 改结构或后缀，装饰会整段失效，回退原生，不影响功能。

## 单独用

复制 `style.css`，挂上 `data-av-deco="paper"`。不想要开关，就把选择器里的
`html[data-av-deco="paper"]` 换成 `html`。装了别的主题时删掉文件开头的兜底块。

两个实现细节：输入卡 `padding-top` 加到 15px 给信头让位；气泡齿孔用 `mask-image`，
会把 `box-shadow` 一起裁掉，所以阴影改用 `filter: drop-shadow()`。横格线周期 24px
对齐 DSH 行高，改字号设置会有轻微错位。