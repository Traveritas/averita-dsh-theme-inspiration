# 流光背景

WebGL2 画布：1/5 视口分辨率、5px 一格放大、锁 30fps；场来自个人站的域扭曲 fbm，
映射到四档色板再量化 + Bayer 抖动。

## 挂什么

- `data-av-bg="flow"`：启用（不挂就不建画布）
- `data-av-flow-palette="theme" | "mist" | "dusk" | "jade" | "amber"`：色板，默认跟随主题
- `data-av-idle`：窗口失焦暂停

## 变量

`--av-flow-0..3`（底 / 暗面 / 光带 / 亮芯）与 `--av-flow-glow`（亮芯强度），
浅深各一套。「theme」从 `--av-space` / `--av-mark` 用 `color-mix` 混出；四套固定色板写在
`style.css` 里。JS 每帧读色（`color-mix` 经隐藏探针解析），换色板不用重建上下文。

## 存

不存。插件存 `dsh-theme-averita:bg` / `:flow` / `:speed`。

## 依赖

- `src/flow.js`（无第三方依赖）创建 `canvas.av-flow`，插到 `body` 第一个子节点，
  下一帧加 `av-flow--on` 淡入。
- 要 WebGL2 + 硬件渲染；SwiftShader / Basic Render Driver 会被 `flow.js` 直接拒掉。
- 窗口隐藏、系统 `prefers-reduced-motion` 时停帧（后者只画一帧静态）。

## 单独用

复制 `style.css` 与 `src/flow.js`：

```js
const canvas = document.createElement('canvas');
canvas.className = 'av-flow';
document.body.prepend(canvas);
const flow = createFlowBackground(canvas); // 返回 null = 当前环境不支持
if (flow) {
  flow.setZoom(1);
  flow.setOpacity(0.62);
  flow.start();
  requestAnimationFrame(() => canvas.classList.add('av-flow--on'));
}
```
