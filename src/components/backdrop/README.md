# 背景 / 缩放 / 浓淡（设置行）

没有 CSS、没有存储。只提供「设置 → 主题」里的三行：

- **背景**：点阵 / 流光，写 `html[data-av-bg]`；流光不可用时给提示。
- **缩放**：0.5–4×，写 `html` 行内 `--av-scale`。
- **浓淡**：30%–400%，写 `html` 行内 `--av-depth`；流光下换算成画布不透明度。

真正的视觉在 [`dots/`](../dots/style.css) 与 [`flow/`](../flow/style.css)。背景总开关关掉时
本模块与点阵 / 流光模块一起收起，`html[data-av-bg="off"]` 不画背景。单独复用组件时
不需要这个目录。

所属模块「背景」（manifest `settings.order` 30），模块内行号 10 / 60 / 70，见 [`settings.js`](settings.js)。
总开关见 [`overrides/`](../overrides/README.md)（order 5）。