# 主题覆盖（设置行）

没有 CSS、没有 `data-av-*` 属性，只有「设置 → 主题」里的四个区域总开关：

| 开关 | 开 | 关 |
|---|---|---|
| 品牌位 | 「品牌字标」模块生效 | 星标与字标两个 slot 都不挂，回 DSH 原生鲸标 + 字标 |
| 新会话 | 「新会话首屏」模块生效 | 图标、标题、徽章都不覆盖，回原生首屏 |
| 装饰 | 纸品 / 星芒 | 摘掉 `html[data-av-deco]`，回原生外观 |
| 背景 | 点阵 / 流光 | `html[data-av-bg="off"]`，不画背景 |

- 默认全开。关掉后对应细节模块（品牌字标、新会话首屏、装饰与星形、背景 / 点阵底纹 / 流光背景）自动收起；总开关打开时，品牌位 / 新会话模块里的「图标」开关再决定是否用星标替换原图标：
  - 品牌位：星标 vs 原生鲸标；字标文字仍按输入框替换。
  - 新会话：星标 vs 原生鱼；标题仍按输入框替换，「预览版」徽章仍隐藏。
- 存储：`<plugin-id>:brand-on` / `:brand-mark-on` / `:hero-on` / `:hero-mark-on` / `:deco-on` / `:bg-on`，值为 `on` / `off`。旧版 `:wordmark-on` 自动迁移为 `:brand-on`；旧版 `:deco = "plain"` 与 `:bg = "off"` 自动迁移为关闭。
- 总开关只是设置行；状态、slot 挂载与属性切换在 [`client.template.js`](../../client.template.js) 的 `selectBrandOn` / `selectBrandMarkOn` / `selectHeroOn` / `selectHeroMarkOn` / `selectDecoOn` / `selectBgOn`。

所属模块「主题覆盖」（manifest `settings.order` 5），模块内行号 10 / 20 / 30 / 40，见 [`settings.js`](settings.js)。
