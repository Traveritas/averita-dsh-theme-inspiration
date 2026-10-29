# 星芒装饰

用户消息与输入框的星芒化：右上焦点星 + 放射线 + 柔光、底缘光边、发送键光圈。

## 挂什么

- `html[data-av-deco="star"]`：启用，与纸品互斥
- `html[data-av-star="a" | "b"]`：`a` 罗盘刻星（默认）/ `b` 针芒；不挂时按 `a` 画

## 变量

- `--av-mark`：星与光线的颜色
- `--av-star-shape` / `--av-star-size` / `--av-star-offset` / `--av-star-bubble`：
  由 `a` / `b` 两档写在 `[data-av-star]` 上，容器级也能覆盖（变量会继承）

## 存

不存。插件存 `dsh-theme-averita:deco` / `:star`。

## 依赖

- 与纸品共用同一批宿主选择器（见 `paper/README.md`），靠 `data-av-deco` 分流。
- 放射线是 `repeating-conic-gradient` + 径向遮罩；深色单独提亮当光束。
- 星只做纯色剪影：不转、不加内部渐变、不加光晕，靠形状说话。
- 品牌位那颗 32px 三轴六芒星是 JS 画的（`client.template.js` 的 `projectStar`），
  不在这份 CSS 里；`dsh-status-minimal` 的活动图标也抄了同一套几何。

## 单独用

复制 `style.css`，挂 `data-av-deco="star"`；不挂 `data-av-star` 时默认罗盘形。