# 渲染环境笔记：在这套 DSH Desktop 里做形状

> 2026-10-31，从「胶囊圆钮画不圆」那件事里攒下来的。写给以后调外观的自己：
> 每条按「现象 → 结论 → 怎么做」记，看过一次就别再踩。第 1 条 2026-11-06 重写过。

## 1. `border-radius: 50%` 画出来不是圆 —— 是 `corner-shape`，不是半径被压

- **现象**：32px 的方块用 `border-radius: 50%` 画出来是圆角方；12px 的紧凑圆点、24px 高的
  胶囊轨也一样。看着像"半径被压到了短边的约 40%"。
- **结论（2026-11-06 定案）**：DSH 的 `@deepseek-ai/dsh-client-ui-theme` 注入了一条全局规则
  （`lib/client.js` 里的 `corner-shape.css`）：

  ```css
  @supports (corner-shape: superellipse(1.5)) {
    :root { --dsw-corner-shape: superellipse(1.5) }
    *, :before, :after { corner-shape: var(--dsw-corner-shape) }
  }
  ```

  半径一点没被压，是**角的形状**被换成了 `superellipse(1.5)`：满半径的盒子按这个形状画出来
  就是圆角方，量起来像半径 40%。所以"按 40% 落地"只是换个半径去凑同一个形状，并没有变回圆
  —— 2026-10-31 版"`border-radius` 被压到约 40%"的结论作废。
- **做法**：
  - 要真圆：`border-radius: 50%` / `999px` 之后补一行 `corner-shape: round`；宿主自己的
    开关、圆钮、头像全是这么退出的；
  - `corner-shape` **不继承**，`*` 也匹配不到 shadow 伪元素：原生 `input[type=range]` 的
    `::-webkit-slider-thumb` 本来就是正圆，只有自己画的 `div` 会被压成圆角方；
  - 圆角矩形（卡片、气泡、输入框）**不要**加，superellipse 就是 DSH 的形状语言；
  - 内联 SVG `<circle>` / `clip-path: inset(0 round 999px)` 仍然有效，只是不再必要。
- **连带（启动转圈）**：宿主自己的 boot 屏就踩了这个坑 —— `._spinner` 的盒子上写了
  `corner-shape: round`，画弧线的 `::after` 漏了，于是插件一加载、转圈就从圆变方。
  本插件在 `src/theme.css` 用 `[class*="_spinner_"]::after` 兜住了；升级 DSH 后若又变方，
  先核对这个后缀名还在不在。
- **同一批修过的**：`dsh-yet-another-slider-thingy`（刻度点 / 尘埃粒子 / 搜索清除键）和
  `dsh-workspace-cards`（角标点 / 状态点 / 面板页头的上圆角）。滑块那套「40% 圆角方」
  「圆钮改画 SVG」「胶囊加 clip-path」都是这条误判留下的，现在能用但不必再照抄；
  那 40% 是在 superellipse 下校准的，改回 50% 反而更方。

## 2. `border-width` 会被吸附到整设备像素

- **现象**：125% 缩放下，`0.5px` / `1px` / `1.5px` 的 border 计算值都是 **0.8px**
  （= 1 设备像素）；`1.6px` / `2px` → 1.6px；`2.4px` / `3px` → 2.4px。
- **结论**：描边调粗要跨过设备像素台阶，0.5 → 1 → 1.5 这种微调等于没改，看起来"没变化"
  是正常的。
- **做法**：细描边用 `box-shadow: inset 0 0 0 Xpx …`（走子像素，不吸附），或者直接按
  设备像素档位给值。

## 3. 用渐变画形状的两个坑

- **硬停色标没有抗锯齿**：同一个位置从 A 切到 B，边缘会发毛。给 0.5–1px 的过渡段。
- **渐变会「延续最后一个颜色」**：径向渐变超出半径后，方盒子的四个角会被最后那个颜色
  整块铺满。最后一段必须显式收尾到 `transparent`，否则四角透出一块方色，再叠
  `drop-shadow` 就成了"方影子扣在圆钮后面"。

## 4. 诊断顺序：先证环境，再改样式

这次绕了很久才走对顺序，以后按这个来：

1. **注入对照**：在页面里临时画一排同样的方块（`0` / `8px` / `50%` / `999px` / 渐变各一个），
   一次截图就能分清是"渲染器不行"还是"样式没生效"。
2. **读计算值**：`getComputedStyle` 拿 `borderTopLeftRadius` / **`cornerShape`** /
   `borderTopWidth` / `boxSizing` / `transform` / `zoom`，别只看规则面板（规则面板显示的是
   写进去的值）。伪元素要单独取：`getComputedStyle(el, '::after')`——启动转圈就是盒子对了、
   `::after` 错了。
3. **本地复现**：用同样的 dpr（这里 1.25）在 headless Chrome 里渲染同一份 CSS，改完再让对方看。
4. **别拿像素拟合当证据**：低分辨率截图上，圆的边缘本来就会被压缩、裁切，拟合出来的
   "半径偏小"经常是测量口径问题。先用受控对照。

## 5. 不要在 app 运行时重建客户端 bundle

- **现象**：客户端热更新会把同一个包再执行一次 → `duplicate factory registration`，
  启动序列中断，连带别的插件报 `import failed`（这次连 `dsh-theme-averita` 都被带崩）。
- **做法**：`node scripts/build.mjs` 之前先退出 app；重启后再看效果。

## 6. 本地迭代的安装形态

- `plugin_manager` 装本地目录会落成 `link:`，之后改仓库 → 重建 → 刷新即生效；bundle 的 URL
  带 `&rev=`（内容哈希），内容变了会重新取，不用担心旧缓存。
- 要切回 Git 源，重新装一次那个 GitHub 包即可。
- 版本号换掉（哪怕是 patch）是最省事的强制刷新手段。
