/**
 * 装饰组设置行：装饰三选一（纸品 / 星芒 / 原生），选了星芒再出星形。
 *
 * 这一组没有对应的 CSS（纸品在 paper/，星芒在 star/），只负责设置面板。
 * 本文件被 scripts/build.mjs 原样内联进 client.js，只能引用参数 api。
 */
function decoSettings(api) {
  const { h, props, state, modes } = api;
  const { DECO_MODES, DECO_HINT, STAR_MODES, STAR_HINT } = modes;
  const { deco, star } = state;
  const rows = [
    {
      group: "deco",
      order: 10,
      node: h(
        "div",
        { className: "av-deco-row" },
        h("span", { className: "av-theme-sub" }, "装饰"),
        DECO_MODES.map((mode) =>
          h(
            "button",
            {
              key: mode.id,
              type: "button",
              className: "av-deco-chip" + (deco === mode.id ? " av-deco-chip--on" : ""),
              "aria-pressed": deco === mode.id,
              onClick: () => props.selectDeco(mode.id),
            },
            mode.label,
          ),
        ),
        h("span", { className: "av-theme-state" }, DECO_HINT[deco] ?? DECO_HINT.paper),
      ),
    },
  ];

  if (deco === "star") {
    rows.push({
      group: "deco",
      order: 20,
      node: h(
        "div",
        { className: "av-deco-row" },
        h("span", { className: "av-theme-sub" }, "星形"),
        STAR_MODES.map((mode) =>
          h(
            "button",
            {
              key: mode.id,
              type: "button",
              className: "av-deco-chip" + (star === mode.id ? " av-deco-chip--on" : ""),
              "aria-pressed": star === mode.id,
              onClick: () => props.selectStar(mode.id),
            },
            mode.label,
          ),
        ),
        h("span", { className: "av-theme-state" }, STAR_HINT[star] ?? STAR_HINT.a),
      ),
    });
  }

  return rows;
}