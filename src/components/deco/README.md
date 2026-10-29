# 装饰开关（设置行）

没有 CSS、没有存储。只提供「设置 → 主题」里的两行：

- **装饰**：纸品 / 星芒 / 原生，写 `html[data-av-deco]`；原生即摘掉属性。
- **星形**：罗盘 / 针芒，写 `html[data-av-star]`；只在装饰为星芒时出现。

视觉在 [`paper/`](../paper/style.css) 与 [`star/`](../star/style.css)。单独复用组件时
不需要这个目录。

所属分组「装饰」（`groups.js` order 30），组内行号 10 / 20，见 [`settings.js`](settings.js)。