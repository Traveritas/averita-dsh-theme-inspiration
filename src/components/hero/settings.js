/**
 * 品牌组「首屏文案」：新会话首屏标题的输入框与恢复默认。
 *
 * 本文件被 scripts/build.mjs 原样内联进 client.js，只能引用参数 api。
 * 三种状态：
 *   null     跟随 DSH 原文（不写 localStorage）
 *   ""       只留星标（标题整段不渲染）
 *   "..."    替换标题
 * 留空是明确隐藏；要回到原文点「恢复默认」。
 */
function heroSettings(api) {
  const { h, props, state, brand } = api;
  const { heroText } = state;
  const { nativeHeroText, maxHeroText } = brand;
  const value = heroText === null ? "" : heroText;
  const hidden = heroText !== null && heroText.trim() === "";
  const length = Array.from(value).length;
  const stateText =
    heroText === null ? "跟随 DSH 原文" : hidden ? "已隐藏：只留星标" : `首屏文案 · ${length}/${maxHeroText}`;

  return [
    {
      group: "brand",
      order: 20,
      node: h(
        "div",
        { className: "av-deco-row av-deco-row--text" },
        h("span", { className: "av-theme-sub" }, "首屏文案"),
        h("input", {
          type: "text",
          className: "av-text-input",
          value,
          placeholder: heroText === null ? `跟随 DSH 原文「${nativeHeroText}」` : "留空只留星标",
          maxLength: maxHeroText,
          autoComplete: "off",
          spellCheck: false,
          "aria-label": "新会话首屏文案",
          title: `留空只留星标；「恢复默认」回到 DSH 原文；最多 ${maxHeroText} 字`,
          onChange: (event) => props.selectHeroText(event.target.value),
        }),
        h(
          "button",
          {
            type: "button",
            className: "av-deco-chip",
            title: `恢复为 DSH 原文「${nativeHeroText}」`,
            onClick: () => props.selectHeroText(null),
          },
          "恢复默认",
        ),
        h("span", { className: "av-theme-state" }, stateText),
      ),
    },
  ];
}
