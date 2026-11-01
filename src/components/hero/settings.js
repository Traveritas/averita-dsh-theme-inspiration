/**
 * 新会话首屏设置行：图标开关 + 首屏标题输入框。
 *
 * 本文件被 scripts/build.mjs 原样内联进 client.js，只能引用参数 api。
 * 「主题覆盖」里新会话总开关关掉时整组收起，图标、标题、徽章都回原生；
 * 总开关打开时，图标开关决定星标 / 原生鱼，文案三种状态：
 *   null     跟随 DSH 原文（不写 localStorage）
 *   ""       只留图标（标题整段不渲染）
 *   "..."    替换标题
 * 留空是明确隐藏；要回到原文点「恢复默认」。
 */
function heroSettings(api) {
  const { h, props, state, brand } = api;
  const { heroText, heroOn, heroMarkOn } = state;
  if (!heroOn) return [];
  const { nativeHeroText, maxHeroText } = brand;
  const value = heroText === null ? "" : heroText;
  const hidden = heroText !== null && heroText.trim() === "";
  const length = Array.from(value).length;
  const stateText =
    heroText === null ? "跟随 DSH 原文" : hidden ? "已隐藏：只留图标" : `首屏文案 · ${length}/${maxHeroText}`;
  const markHint = heroMarkOn ? "开 · 星标替换原生图标" : "关 · 跟随 DSH 原生图标";

  return [
    {
      order: 10,
      node: h(
        "div",
        { className: "av-switch-row" },
        h("span", { className: "av-theme-sub" }, "图标"),
        h(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": heroMarkOn,
            "aria-label": "首屏图标",
            title: markHint,
            className: "av-switch" + (heroMarkOn ? " av-switch--on" : ""),
            onClick: () => props.selectHeroMarkOn(!heroMarkOn),
          },
          h("span", { className: "av-switch-knob", "aria-hidden": "true" }),
        ),
        h("span", { className: "av-theme-state" }, markHint),
      ),
    },
    {
      order: 20,
      node: h(
        "div",
        { className: "av-deco-row av-deco-row--text" },
        h("span", { className: "av-theme-sub" }, "首屏文案"),
        h("input", {
          type: "text",
          className: "av-text-input",
          value,
          placeholder: heroText === null ? `跟随 DSH 原文「${nativeHeroText}」` : "留空只留图标",
          maxLength: maxHeroText,
          autoComplete: "off",
          spellCheck: false,
          "aria-label": "新会话首屏文案",
          title: `留空只留图标；「恢复默认」回到 DSH 原文；最多 ${maxHeroText} 字`,
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
