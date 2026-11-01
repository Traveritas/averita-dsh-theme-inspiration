# 装饰开关（设置行）

没有 CSS、没有存储。只提供「设置 → 主题」里的两行：

- **装饰**：纸品 / 星芒，写 `html[data-av-deco]`；关掉在「主题覆盖」的总开关里，摘掉属性即原生。
- **星形**：罗盘 / 针芒，写 `html[data-av-star]`；只在装饰为星芒且总开关打开时出现。

装饰总开关关掉后，本模块整个收起；旧版存的 `deco = "plain"` 会自动迁移为关闭。

视觉在 [`paper/`](../paper/style.css) 与 [`star/`](../star/style.css)。单独复用组件时
不需要这个目录。

所属模块「装饰与星形」（manifest `settings.order` 60），模块内行号 10 / 20，见 [`settings.js`](settings.js)。
总开关见 [`overrides/`](../overrides/README.md)（order 5）。