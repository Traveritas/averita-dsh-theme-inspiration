# 点阵底纹

`body::before` 一层 fixed 伪元素，四种颗粒（圆点 / 方块 / 字符 / 字符墙），
用 SVG 遮罩与中心渐隐遮罩相交，只动 `transform` / `opacity`，不跑逐帧。

## 挂什么

| 属性 | 值 | 默认 |
|---|---|---|
| `data-av-dots` | `square` / `char` / `wall` | 不挂 = 圆点 |
| `data-av-glyph` | `plus` / `hash` / `star` / `cross` | `plus`，只在字符底纹下用 |
| `data-av-motion` | `breathe` / `drift` / `off` | 不挂 = 两样都开 |
| `data-av-bg` | `flow` / `off` | 不挂 = 点阵 |
| `data-av-idle` | 布尔 | 窗口失焦时暂停 |

## 变量

- `--av-dot`（必需）：墨色，带 alpha；填充色给，遮罩只管形状
- `--av-scale`：0.5–4，默认 1；格距 = 10px × 值（字符墙 120×80 起）
- `--av-depth`：0.3–4，默认 1；乘在墨色 alpha 上
- `--av-breathe-min`：0–1，默认 0.65；呼吸谷底
- `--av-space`：底色，兜底块里有值

## 存

不存。插件把选择存进 `dsh-theme-averita:dots` / `:glyph` / `:motion` / `:breathe`，
再写成 HTML 属性或 `html` 行内变量。

## 依赖

- 只用 `body::before`，不插 DOM。
- 要让底色透出来，还得给 `html` 铺 `--av-space`，并把 `AppFrame` / `centerCol` /
  `ConversationRoot` 的底色置空（见 `../../theme.css` 的「让外壳透出背景」）。
  只复制本文件只会得到一层浮在宿主实色上的纹理。
- `mask-composite: intersect` 要 Chromium 120+ / Safari 15.4+；
  `rgb(from …)` 要 Chromium 119+ / Safari 16.4+。更老的核退化成叠加 / 原色。

## 单独用

复制 `style.css`；不想要开关，就把选择器里的 `html[data-av-dots=…]` 等前缀换成 `html`。
