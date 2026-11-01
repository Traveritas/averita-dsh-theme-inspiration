/**
 * 品牌组设置行：自定义左上角 logo 右侧的字标，并选择图标是否换成星标。
 *
 * 这一组没有对应的 CSS（字标样式在 src/theme.css 的 .av-brand-name），只负责设置面板。
 * 本文件被 scripts/build.mjs 原样内联进 client.js，只能引用参数 api。
 * 空串是合法值：输入框留空 = 只显示图标。品牌位总开关关掉时整组收起，
 * 两个 slot 都不挂，侧栏回 DSH 原生鲸标与字标。
 */
function brandSettings(api) {
  const { h, props, state, brand } = api;
  const { wordmark, brandOn, brandMarkOn } = state;
  if (!brandOn) return [];
  const { defaultWordmark, maxWordmark } = brand;
  const empty = wordmark.trim() === "";
  const length = Array.from(wordmark.trim()).length;
  const markHint = brandMarkOn ? "开 · 星标替换原生鲸标" : "关 · 跟随 DSH 原生鲸标";

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
            "aria-checked": brandMarkOn,
            "aria-label": "品牌位图标",
            title: markHint,
            className: "av-switch" + (brandMarkOn ? " av-switch--on" : ""),
            onClick: () => props.selectBrandMarkOn(!brandMarkOn),
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
        h("span", { className: "av-theme-sub" }, "字标"),
        h("input", {
          type: "text",
          className: "av-text-input",
          value: wordmark,
          placeholder: "留空则隐藏文字",
          maxLength: maxWordmark,
          autoComplete: "off",
          spellCheck: false,
          "aria-label": "左上角 logo 右侧的字标",
          title: `默认：${defaultWordmark}；最多 ${maxWordmark} 字，留空只显示图标`,
          onChange: (event) => props.selectWordmark(event.target.value),
        }),
        h(
          "button",
          {
            type: "button",
            className: "av-deco-chip",
            title: `恢复为 ${defaultWordmark}`,
            onClick: () => props.selectWordmark(defaultWordmark),
          },
          "恢复默认",
        ),
        h(
          "span",
          { className: "av-theme-state" },
          empty ? "留空：只显示图标" : `侧栏字标 · ${length}/${maxWordmark}`,
        ),
      ),
    },
  ];
}
