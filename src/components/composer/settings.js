/**
 * 输入框底衬设置行：开 / 关，默认关。
 *
 * 「关」是默认：不挂属性，CSS 摘掉 composerSeat 的渐隐底衬，背景透到输入框后。
 * 「开」挂 html[data-av-fade="on"]，恢复 DSH 原来的渐变底衬。
 * 本文件被 scripts/build.mjs 原样内联进 client.js，只能引用参数 api。
 */
function composerSettings(api) {
  const { h, props, state, modes } = api;
  const { FADE_MODES, FADE_HINT } = modes;
  const { fade } = state;

  return [
    {
      group: "interface",
      order: 10,
      node: h(
        "div",
        { className: "av-deco-row" },
        h("span", { className: "av-theme-sub" }, "底部遮罩"),
        FADE_MODES.map((mode) =>
          h(
            "button",
            {
              key: mode.id,
              type: "button",
              className: "av-deco-chip" + (fade === mode.id ? " av-deco-chip--on" : ""),
              "aria-pressed": fade === mode.id,
              onClick: () => props.selectFade(mode.id),
            },
            mode.label,
          ),
        ),
        h("span", { className: "av-theme-state" }, FADE_HINT[fade] ?? FADE_HINT.off),
      ),
    },
  ];
}
