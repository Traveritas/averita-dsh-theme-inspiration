# AveritA 的 DSH 主题灵感集

[DeepSeek Harness](https://github.com/deepseek-ai/dsh) 的主题。

**分享出来给大家提供DSH个性化灵感~可以随意二次开发❤**

| 实机 · 浅色（纸品） | 实机 · 深色（星芒） |
|---|---|
| ![实机 · 浅色（纸品）](preview/screenshots/real-light.png) | ![实机 · 深色（星芒）](preview/screenshots/real-dark.png) |

> DSH 0.2.1-rc.3 · Windows 实机截图；侧栏会话列表已隐去。`preview/` 下另有近似壳预览图，只用来量比例。

---

三套 DSH 主题的宿主插件。背景二选一：**点阵**（圆点 / 方块 / 字符 / 字符墙，缩放 / 浓淡 / 动效 / 呼吸下限可调）或**流光**（移植个人站的域扭曲 fbm 场，四套色板，缩放 / 浓淡可调）。另有星标、位移动效与纸品装饰（用户消息 / 输入框）；左上角 logo 右侧的字标可在设置里改，留空只留星标。**设置 → 主题**里即时切换，选择存在 localStorage。

| 主题 | 方向 | 数据 |
|---|---|---|
| `averita` 昼雾 · 靛夜 | 断章雾面纸 / 首页靛夜（原主题） | `src/tokens.js` |
| `coldmorning` 冷晨 | 冷灰绿晨雾，亮部偏青 | `src/themes/coldmorning.js` |
| `duskrose` 暮玫瑰 | 暖玫瑰纸 / 暮紫褐夜色 | `src/themes/duskrose.js` |

- **令牌**：每套 205 个，浅/深成对 —— 128 个语义/语法令牌 + 77 个静态色板阶（`--dsw-static-*`，图标、状态点、diff、插画在用）；主题变量只有 `--av-space` / `--av-dot` / `--av-mark` 三枚。
- **切换**：`overrideTokens` 换令牌图层 + `html[data-av-theme]` 换 CSS 变量，不重装、不重启。
- **品牌位**：`sidebar.brand.mark` / `sidebar.brand.name` 两个 single slot，priority `-1`（官方在 0，数值低者渲染）——卸载即回退。星标是 32px 三轴正交六芒星；字标默认衬线 `AveritA's DSH`，可在**设置 → 主题 → 品牌**里自定义，留空只显示星标。
- **背景与细节**：点阵是 `src/components/dots/style.css` 里的一层 fixed 伪元素，不跑逐帧；流光是一层 WebGL2 画布（`src/flow.js`，构建时内联），1/5 分辨率、30fps，切到流光才创建；两者互斥。品牌星是 6 支 SVG，约 30fps 重画。
- **UI 动效**：`--ds-transition-*` 180/120ms + 柔出曲线；位移动效：会话切换上浮 6px、会话行 hover 横移 2px、按钮按下 0.5px、最后一条回复上浮 6px、侧栏折叠 300ms。
- **安装形态**：纯客户端插件。Host 半 (`index.js`) 是空壳，浏览器半是 `client.js`（手写 lazy-CJS，无构建依赖）。

## 安装

### 路线 A：应用内插件管理器（推荐）

设置 → 插件 → 添加插件，spec 填本目录的**绝对路径**：

```
<clone 目录>
```

管理器会把它 `pnpm link` 进 profile 并加入 `dsh.profile.bundles`。看返回的 `application`：`applied` 即生效；`restart-required` 则完全退出桌面端再开。

### 路线 B：手动放进 profile（不必先发布）

```powershell
git clone --depth 1 https://github.com/Traveritas/averita-dsh-theme-inspiration "$env:USERPROFILE\.dsh\profiles\desktop\local-plugins\averita-theme"
```

然后在 profile 的 `cordis.patch.yml` 末尾追加：

```yaml
- insert:
    - id: averita-theme
      name: './local-plugins/averita-theme/index.js'
```

重启 DSH 桌面端。卸掉时删掉这段、删除目录即可；令牌与样式都挂在 `ctx.effect` 上，不会残留。

> 官方提供的「添加插件」走 `plugin_manager`（会改 profile 的 package.json / bundles），路线 B 是手改 profile，二选一即可。

## 预览

这里放的是按 DSH 三栏骨架搭的近似壳截图，只用来量配色与比例；实机图见顶部。

直接用浏览器打开 `preview/index.html`（左下角可切三套主题、背景（点阵 / 流光 / 关闭）、底纹四形、色板四套、字符四形、缩放（0.5–4×）、浓淡（30–400%）、动效四选、呼吸下限（0–100%），`?theme=coldmorning`、`?bg=flow`、`?flow=mist|dusk|jade|amber`、`?speed=1.6`、`?dots=dot|square|char|wall`、`?glyph=plus|hash|star|cross`、`?scale=2.4`、`?depth=2.6`、`?motion=both|breathe|drift|off`、`?breathe=0.3` 也能直达，`?dark=1` 看深色，`?soft=1` 放行软件渲染给截图用），或看：

- `preview/screenshots/real-light.png` / `preview/screenshots/real-dark.png`（DSH 实机）

- `preview/preview-averita.png` / `preview/preview-averita-dark.png`
- `preview/preview-coldmorning.png` / `preview/preview-coldmorning-dark.png`
- `preview/preview-duskrose.png` / `preview/preview-duskrose-dark.png`
- `preview/flow-averita.png` / `preview/flow-averita-dark.png`（流光：雾蓝，浅 / 深；`?bg=flow&soft=1` 截的）
- `preview/dot-compare.png`（底纹四形：圆点 / 方块 / 字符 / 字符墙 × 浅 / 深，放大 4× 的真实渲染）
- `preview/bg-tune.png`（缩放与浓淡的对照，圆点底纹；旧截图里的档位现在用滑杆也能复现）
- `preview/panel-sliders.png`（旧版设置面板：三条无级滑杆 + 动效一排；现在多了「背景」一行与流光的色板）
- `preview/extreme-3.4x-360.png`（放开后的极端值预览：3.4× / 360%）

只看用户消息与输入框时开 `preview/lab.html`（同样吃 `?theme=`、`?dark=1`、`?deco=paper|star|off`、`?dots=square|char|wall|off`、`?glyph=`、`?scale=`、`?depth=`、`?motion=`、`?breathe=`），里面有短/长消息、空态、三行输入和主题面板四种状态（这份面板是装饰阶段的旧版，还没有「品牌 / 背景」行，底纹里的「关闭」仍按旧版走）；截图见 `preview/lab-light.png`、`preview/lab-dark.png`（纸品）、`preview/lab-star.png`、`preview/lab-star-b.png`、`preview/lab-star-dark.png`（星芒两形）、`preview/lab-off.png`（原生）；`preview/star.html` 是两种星形的并排对照页。

预览是按 DSH 三栏骨架搭的**近似壳**（字体、间距与真实 DSH 有差异），只用来判断配色、点阵与材质比例；最终以实机为准。壳里 composer 与用户消息的 DOM 按真实结构同构（`data-composer-seat`、`_card`、`_input`、`data-chat-flow-kind="user"`、`_bubble`），所以 `src/components/*/style.css` 的结构选择器在预览里也会如实命中（三个页面按 manifest 顺序引了这些文件）。

## 组件化复用

CSS 按组件拆在 `src/components/`，构建按 `manifest.js` 的顺序拼进 `client.js`。每个目录有两到三件：`style.css`（有视觉组件才有）、`settings.js`（有设置行才有）、`README.md`；README 固定写四栏：**挂什么属性、读写什么变量、存什么、依赖宿主哪些选择器**。

| 组件 | 文件 | 挂什么 | 变量 |
|---|---|---|---|
| 点阵底纹 | `src/components/dots/style.css` | `data-av-dots` / `-glyph` / `-motion` | `--av-space` / `--av-dot` / `--av-scale` / `--av-depth` / `--av-breathe-min` |
| 流光背景 | `src/components/flow/style.css` | `data-av-bg="flow"` / `data-av-flow-palette` | `--av-flow-0..3` / `--av-flow-glow` |
| 位移动效 | `src/components/motion/style.css` | 无 | 无（用宿主 `--ds-transition-*`） |
| 纸品装饰 | `src/components/paper/style.css` | `data-av-deco="paper"` | `--av-mark` 及派生的线 |
| 星芒装饰 | `src/components/star/style.css` | `data-av-deco="star"` / `data-av-star` | `--av-mark` / `--av-star-*` |

拿单个组件三步：复制它的 `style.css` → 在 `<html>` 挂对应属性 → 装了别的主题就把文件开头的兜底块删掉。没有设置面板也能用，属性手写即可；更多约定见 [`src/components/README.md`](src/components/README.md)。

`backdrop/`、`deco/` 与 `brand/` 只有设置行、没有 CSS：前者管背景 / 缩放 / 浓淡，后者管装饰 / 星形与品牌字标，是表里几组视觉组件共用的开关。

组件保持**未分层**：DSH 宿主 CSS 没有 `@layer`，分层里的普通声明会输给未分层声明（不管选择器多具体），主题要覆盖宿主就不能进层。

## 背景是怎么动起来的

背景二选一，落成 `html[data-av-bg="flow"|"off"]`（不挂属性 = 点阵）。两者互斥，切走就拆，不常驻。

### 点阵

```
html            底色（--av-space，按主题/深浅换）
body::before    默认颗粒：10px 网格、1.5px 圆点；极慢漂移 + 呼吸
html[data-av-dots="square"] body::before
                方块：同一网格、2.8px 方块（SVG 遮罩 + 渐隐遮罩相交）
html[data-av-dots="char"] body::before
                字符：同一网格、一个等宽字符（+ / # / * / ×）
html[data-av-dots="wall"] body::before
                字符墙：120×80 一块、8 行密排符号
--av-scale      缩放：遮罩 tile 一起缩放，0.5–4×（默认 1）
--av-depth      浓淡：墨色 alpha 乘一个倍数，30%–400%（默认 100%）
--av-breathe-min 呼吸下限：谷底不透明度，0–100%（默认 65%）
html[data-av-motion="breathe"|"drift"|"off"]
                动效：只呼吸 / 只漂移 / 全停；不挂属性 = 都开
```

- 只有一层 fixed 伪元素，动的是 `transform` / `opacity`：60s 漂移一程（±64 / ±36px 乘缩放，linear，往返 120s），30s 呼吸一程（`--av-breathe-min` → 1，往返 60s）。没有 canvas、没有颜色变化。
- 四种颗粒都是 SVG 遮罩，再和中心渐隐遮罩用 `mask-composite: intersect` 相交；颜色仍取 `--av-dot`（填充色给，遮罩只管形状），所以换主题 / 深浅自动跟。字符 / 符号走 SVG `<text>`，字号按墨量调过，和圆点、方块同一档深浅；字符墙整体 `fill-opacity` 压过半，比圆点还淡一点。
- 缩放只改遮罩 tile 的尺寸（`mask-size`），漂移幅度和 `inset` 余量都跟着缩放走；浓淡把 `--av-dot` 的 alpha 乘一个倍数（`rgb(from … / calc(alpha * var(--av-depth)))`），不碰主题令牌。两者都不动 DOM、不重装插件。
- `data-av-motion` 只重写动画列表：`breathe` 只留呼吸、`drift` 只留漂移、`off` 直接 `animation: none`；不挂属性即两样都开。品牌星和 UI 过渡不受这一项影响。
- 呼吸下限默认 65%，可调到 0（谷底完全淡出）或 100%（没有呼吸幅度）。浅色墨色只有 5.5% alpha，边缘实际只在 3.6%–5.5% 之间变，中心渐隐还要再减半，默认很淡；想看清可把浓淡拉到 200% 以上、把下限压到 0，或选「呼吸」排除漂移干扰。
- 窗口失焦时 `data-av-idle` 暂停动画；系统 `prefers-reduced-motion` 直接停住，设置面板会在「动效」旁提示「系统已减少动效」。

### 流光

```
html[data-av-bg="flow"] body::before
                点阵整层不画，位置让给 canvas.av-flow
canvas.av-flow  1/5 视口分辨率（1080p 约 384×216），5px 一格像素放大
--av-flow-0..3  色板四阶：底 / 暗面 / 光带 / 亮芯（CSS 给，JS 读）
--av-flow-glow  亮芯强度；浅色收着，深色放开
--av-scale      流光下当场的缩放（0.5–4×）
--av-depth      流光下当画布不透明度（30%–400% → 0.12–0.86）
速率            0.2–2.5×，只乘时间步长（默认 1×）
```

- 场来自个人站 `src/scripts/wander/light.js` 的 `field()`：两次域扭曲、每层 5 次 fbm，映射到 4 档色板，再量化到 26 阶并叠 4×4 Bayer 抖动。站点自己的三条斜缝、夜色池、塌缩圈、风痕、天气与镜头没有搬。
- 画布只有视口的 1/5：1080p 下每帧约 8.3 万片元、每像素一遍场，对 GPU 是零头；代价主要是常驻刷新（锁 30fps）和首次编译着色器。检测到 SwiftShader / Basic Render Driver 这类软件渲染就不建画布，回退点阵。
- 色板四套：雾蓝 / 暮紫 / 青灰 / 暖沙，各带浅深两版；切换只改 `html[data-av-flow-palette]`，画布下一帧重新取色，不重建上下文。
- 窗口隐藏 / 系统减少动效时停帧；减少动效只画一帧静态。切到点阵或关闭时画布整个拆掉、上下文一起丢。

- 外壳透明度：DSH 0.2.1-rc.3 的 AppFrame / centerCol / ConversationRoot 各自用 `--dsw-alias-bg-base` 铺满，主题用 CSS Modules 稳定后缀 + `:has` 把三处底色置空，背景才透出来。

## 品牌字标（设置 → 主题）

「品牌」一组只有一行「字标」：输入框实时改 `sidebar.brand.name` 里的文字，默认衬线 `AveritA's DSH`，最多 32 字；换行 / 制表符会折成空格，选择存在 localStorage 的 `<plugin-id>:wordmark`。

- 输入框留空（或只有空白）时整段文字不渲染，只留星标；旁边「恢复默认」把默认字标写回去。
- 字标只走 React 状态，不挂 `data-av-*` 属性；侧栏 `sidebar.brand.name` slot 订阅状态重渲染，切换主题 / 深浅不受影响。
- 自定义文字过长时侧栏按 `text-overflow: ellipsis` 省略，不会把 logo 挤走；完整文字在 `title` 里。

## 背景（设置 → 主题）

「背景」三选一：**点阵 / 流光 / 关闭**；下面按选择只露相关的行。

### 点阵

- **底纹**：圆点（默认）/ 方块（2.8px）/ 字符（选完再选字形 **+ / # / * / ×**，默认加号）/ 字符墙（8 行密排代码符号）。
- **缩放**：0.5–4×，步进 0.1，默认 1；格距 5–40px（字符墙 60×40 到 480×320）。颗粒大小、格距与漂移幅度一起变。
- **浓淡**：30%–400%，步进 5%，默认 100%，乘在墨色 alpha 上；深色主题的墨色本来就比浅色亮一档，按需微调即可。
- **动效**：都开（默认）/ 呼吸 / 漂移 / 都关，只控制背景那一层，选择存在 `<plugin-id>:motion`。
- **呼吸下限**：0%–100%，步进 5%，默认 65%；谷底不透明度，0 = 完全淡出，100 = 没有呼吸幅度。只在动效为「都开 / 呼吸」时出现，选择存在 `<plugin-id>:breathe`。

### 流光

- **色板**：雾蓝（默认）/ 暮紫 / 青灰 / 暖沙，浅深各自动切，选择存在 `<plugin-id>:flow`。
- **速率**：0.2–2.5×，步进 0.1，默认 1×；只乘时间步长，不动别的参数，选择存在 `<plugin-id>:speed`。
- **缩放**：场的缩放，0.5–4×，默认 1。
- **浓淡**：画布不透明度，30%–400% 映射到 0.12–0.86，默认 0.62。
- 系统减少动效时只画一帧，设置面板会提示「流光静止」；没有 WebGL2 时切不过去，面板会说明并留在点阵。

- 关闭背景时下面几排自动收起。
- 末尾「重置 → 恢复默认」把背景 / 底纹 / 色板 / 速率 / 字形 / 缩放 / 浓淡 / 动效 / 呼吸下限一键回默认，主题与装饰不动。

选择存在 localStorage 的 `<plugin-id>:wordmark` / `:bg` / `:dots` / `:flow` / `:speed` / `:glyph` / `:scale` / `:depth` / `:motion` / `:breathe`（速率 / 缩放 / 浓淡 / 呼吸下限存乘数，1 = 1× / 1× / 100% / 100%），落成 `html[data-av-bg="flow"|"off"]`、`html[data-av-dots="square"|"char"|"wall"]`、`html[data-av-flow-palette="mist"|"dusk"|"jade"|"amber"]`、`html[data-av-glyph="plus"|"hash"|"star"|"cross"]`、`html[data-av-motion="breathe"|"drift"|"off"]`；缩放 / 浓淡 / 呼吸下限直接写成 `html` 行内的 `--av-scale` / `--av-depth` / `--av-breathe-min`，不再挂 data 属性；「都开」把 `data-av-motion` 摘掉，选「圆点」把 `data-av-dots` 摘掉，选「点阵」把 `data-av-bg` 摘掉。切换只改属性 / 变量；点阵不动 DOM，流光按需建 / 拆画布；字符缺字形时 CSS 退回加号，不会把整块涂实。

## 用户消息与输入框

同一批部件有两套装饰，在「设置 → 主题」下方切换：**纸品 / 星芒 / 原生**。默认纸品，选择存在 localStorage 的 `<plugin-id>:deco`，落成 `html[data-av-deco="paper"|"star"]`；选「原生」就把属性摘掉，退回 DSH 原样。切换只改这一个属性，不动 DOM、不重装插件。

星形（只在星芒装饰下出现）默认 **罗盘**，另有针芒可选，存在 `<plugin-id>:star`，落成 `html[data-av-star="a"|"b"]`。

| 部件 | 命中点 | 纸品（paper） | 星芒（star） |
|---|---|---|---|
| 用户消息 | `[data-chat-flow-kind="user"] [class*="_bubble"]` | 左缘书签带、右上星章、右下折角、底缘齿孔，−0.3° 微斜 | 右上 8 角星（带光晕）+ 底缘光边，圆角 14px |
| 输入框 | `[data-composer-seat] [class*="_card"]` | 15px 信头窄带（三枚装订孔）、票根虚线、输入区横格线 | 右上角纯色星（罗盘 / 针芒两形）+ 放射光束，聚焦时放大一成 |
| 发送键 | `[data-composer-seat] [class*="_primary"]` | 缺角圆章，hover 转 −6° | 一圈光，hover 撑开 |

- 装饰线不写死色号：`--av-line` / `--av-line-soft` / `--av-wash` 三枚派生变量从 `--av-mark` 用 `color-mix` 算，换主题自动跟；深色单独压/提一档（`html:has(body[data-ds-dark-theme])`）。
- 纸品：输入卡 `padding-top` 加到 15px 给信头窄带让位；横格线周期 24px 对齐 DSH 行高，改字号设置时会有轻微错位。气泡底缘齿孔用 `mask-image`，会连 `box-shadow` 一起裁掉，所以阴影改用 `filter: drop-shadow()`。
- 星芒：星只做**纯色剪影**——不转、不加光晕、不做内部渐变，靠形状说话；形状由 `html[data-av-star]` 选：`a` 罗盘刻星（四长四短，端正）、`b` 针芒（四根长针 + 极短刺，更利），在「设置 → 主题 → 装饰 → 星形」里切。射线是 `repeating-conic-gradient`（每 12° 一束）+ `radial-gradient` 遮罩，浅色压到只当质感、深色提亮当光束。两套装饰共用同一批选择器，靠 `html[data-av-deco]` 分流，互斥。

## 主题文件与生成

- **昼雾 · 靛夜**：`src/tokens.js`（唯一手写令牌表）；主题变量在 `src/themes/averita.js`。
- **冷晨 / 暮玫瑰**：`src/themes/*.js`，由 `scripts/gen-themes.mjs` 从 averita 的明度、透明度结构派生色相族，再覆盖 label/link/brand 与底色。
  - 直接手改这两个文件后 **不要再跑** `gen-themes.mjs`（会覆盖）；要改派生规则就去改脚本。
- **静态色板**：`scripts/static-base.json` 是从 DSH base.css 提取的 77 个 `--dsw-static-*`；`scripts/static-derive.mjs` 定义派生规则（neutral / bluish 收向主题中性色，blue / deepseek 收向强调色，red / green / amber 保色相并按背景对比度≥4.6:1 排明度），`scripts/gen-static.mjs` 写出 `src/themes/static/<id>.js`。三套主题的键集合一致（build 会断言）。
- **加第四套**：复制一份 `src/themes/*.js`，在 `scripts/build.mjs` 的 `themeFiles` 里登记，并在 `preview/index.html` 加一个按钮。
- **组件**：`src/components/<id>/` 的 CSS 由 manifest 拼到 `theme.css` 之后，`settings.js` 由 build 原样内联并注册成 `COMPONENT_SETTINGS`，面板分组在 `groups.js` 登记。加组件要同时改 manifest（有 CSS 还要补三个预览页的 `<link>`），smoke 会查行序、分组与注册表。

## 构建与自检

```powershell
node scripts/build.mjs      # src/theme.css + src/components/* -> client.js（内联令牌 / 组件 CSS / 设置片段 / flow.js）+ preview/tokens.css
node scripts/smoke.mjs      # 离线冒烟：令牌成对、组件 CSS 与设置片段齐全、样式装卸、3 个 slot 注册、可见性暂停、字标 / 底纹 / 字形 / 缩放 / 浓淡 / 动效 / 呼吸下限往返
node scripts/gen-static.mjs  # 可选：重派生静态色板（覆盖 src/themes/static/*）
node scripts/gen-themes.mjs  # 可选：重派生冷晨/暮玫瑰基础令牌（覆盖手改，静态色板保留）
```

`client.js` 是产物，不要手改；改 `src/`。

## 已知限制

- **实机验收范围**：已在 DSH 0.2.1-rc.3 / Windows 上确认浅色纸品与深色星芒（顶部截图）；冷晨与暮玫瑰的深色是派生夜色（站点原场景只给了亮部），仍建议自看一遍。
- **静态色板是派生值**：blue / deepseek 在冷晨、暮玫瑰里会跟强调色走（暮玫瑰的 info 蓝会变成玫瑰色）；若想保留信息蓝，把 `static-derive.mjs` 里 `blue` / `deepseek` 的映射拿掉重跑即可。静态色板的 light / dark 值对 red/green/amber 是分开排的（按对比度），所以状态色在两种模式下会有轻微差异。
- **新回复动画靠结构选择器**：`[data-chat-turn]:not(:has(~ [data-chat-turn]))` 只认“最后一个 turn”，要求 turn 是同级兄弟；DSH 改结构时会静默失效。侧栏折叠的 300ms 过渡也依赖 frame 的 grid 过渡。
- **纸品装饰也钉在结构上**：用户消息靠 `data-chat-flow-kind="user"` + `_bubble` 后缀，输入框靠 `data-composer-seat` + `_card`/`_primary` 后缀。DSH 改这两处，装饰会整段失效（功能不受影响，回退成原生外观）。
- **字标只换文字**：品牌位只覆盖 logo 右侧文字，星标仍是主题自带的；字标上限 32 字，超长由侧栏省略，留空只留星标。
- **组件只拆到 CSS + 设置行**：单独复制 `src/components/<id>/style.css` 能用，但没有设置面板（属性手写即可）；选择器、localStorage 与流光画布的生命周期仍在 `src/client.template.js`。
- **颗粒遮罩依赖 `mask-composite`**：四种颗粒与渐隐两层遮罩相交需要 Chromium 120+ / Safari 15.4+；更老的内核会退化成两层叠加，颗粒照旧、中心渐隐失效，不影响可用性。字符 / 符号走 SVG `<text>`，字体栈是 Consolas / Segoe UI Symbol，换机器字形会有细微差别。
- **浓淡依赖相对色语法**：`rgb(from var(--av-dot) …)` 需要 Chromium 119+ / Safari 16.4+；不支持的内核退回主题原色，浓淡滑杆静默失效，其余照旧。
- **流光要 WebGL2 + 硬件渲染**：SwiftShader / Basic Render Driver 这类软件渲染会被 `src/flow.js` 直接拒掉，切流光时回退点阵并在面板提示；切到流光会新建一个 WebGL 上下文，切走即丢。默认锁 30fps，窗口隐藏 / 系统减少动效时停帧。
- **流光色板是绝对的**：四套色板各带浅深两版，但不跟三套主题变；主题是暮玫瑰时选青灰会撞色，换一档即可。色板的四阶在 `src/components/flow/style.css`（`--av-flow-0..3` / `--av-flow-glow`），5px 像素格与 30fps 在 `src/flow.js` 顶部。
- **极端缩放会放大合成面积**：fixed 伪元素按缩放留漂移余量，4× 时约为视口面积的 2.5 倍；低端 GPU 上大面积遮罩 + 位移动画的合成开销会上升。这是放开上限的代价，觉得不划算就把上限收回去。
- **深色发送键对比偏弱**：输入框发送键用 `--dsw-alias-button-info-fill`（深色 `#baadd2`），DSH 前景写死 `#ffffff`，白字压在亮紫上约 1.7:1。要修得改深色令牌（`tokens.js` 的 info-fill），不是 CSS 能补的。
- **外壳选择器钉在 DSH 0.2.1-rc.3 的结构上**：`_frame` / `_centerCol` / `_root:has(_composerSeat)` 依赖 CSS Modules 局部名后缀；升级后若背景退回纯色，先更新那段。
- 主题切换写在插件自己的设置分区里（`settings.section`），不接管 DSH 的浅色/深色开关；切换的是“主题”，浅色/深色仍由 DSH 控制。
- DSH 原生窗口 chrome 只认 light/dark，深色窗外框仍是中性灰，和靛夜/冷晨/暮玫瑰的底色有色相差。
- 正文/界面字体沿用 DSH 设置（当前 profile 是 Source Serif 4 + 霞鹜文楷）。想要个人站的文章感，建议把「正文字体」设为 `"Noto Serif SC", "Source Serif 4"`（装了 Noto Serif SC 时）。
- 预览壳里的字体回退与实际 DSH 不同，看截图时请忽略字形差异。

## License

MIT，见仓库根目录的 [LICENSE](LICENSE)。
