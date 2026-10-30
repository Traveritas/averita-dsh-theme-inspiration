/**
 * 流光组设置行：明暗、色板、速率。
 *
 * 只在背景为流光时出现；缩放 / 浓淡是点阵与流光共用的，在 backdrop/settings.js。
 * 本文件被 scripts/build.mjs 原样内联进 client.js，只能引用参数 api。
 */
function flowSettings(api) {
  const { h, props, state, helpers, modes, limits } = api;
  const { FLOW_MODES, FLOW_HINT, FLOW_INVERT_MODES, FLOW_INVERT_HINT } = modes;
  const { bg, flow, flowInvert, speed } = state;

  if (bg !== "flow") return [];

  return [
    {
      order: 20,
      node: h(
        "div",
        { className: "av-deco-row" },
        h("span", { className: "av-theme-sub" }, "明暗"),
        FLOW_INVERT_MODES.map((mode) =>
          h(
            "button",
            {
              key: mode.id,
              type: "button",
              className: "av-deco-chip" + (flowInvert === mode.id ? " av-deco-chip--on" : ""),
              "aria-pressed": flowInvert === mode.id,
              onClick: () => props.selectFlowInvert(mode.id),
            },
            mode.label,
          ),
        ),
        h(
          "span",
          { className: "av-theme-state" },
          // 深色两档一样，提一句省得在深色下找差别。
          (FLOW_INVERT_HINT[flowInvert] ?? FLOW_INVERT_HINT.on) + "（只影响浅色）",
        ),
      ),
    },
    {
      order: 30,
      node: h(
        "div",
        { className: "av-deco-row" },
        h("span", { className: "av-theme-sub" }, "色板"),
        FLOW_MODES.map((mode) =>
          h(
            "button",
            {
              key: mode.id,
              type: "button",
              className: "av-deco-chip" + (flow === mode.id ? " av-deco-chip--on" : ""),
              "aria-pressed": flow === mode.id,
              onClick: () => props.selectFlow(mode.id),
            },
            mode.label,
          ),
        ),
        h("span", { className: "av-theme-state" }, FLOW_HINT[flow] ?? FLOW_HINT.theme),
      ),
    },
    {
      order: 40,
      node: h(
        "div",
        { className: "av-deco-row av-deco-row--range" },
        h("span", { className: "av-theme-sub" }, "速率"),
        h("input", {
          type: "range",
          className: "av-range",
          min: limits.SPEED_MIN,
          max: limits.SPEED_MAX,
          step: limits.SPEED_STEP,
          value: speed,
          "aria-label": "流光速率",
          "aria-valuetext": `${helpers.speedText(speed)}，${helpers.speedHint(speed)}`,
          title: "0.2–2.5×，步进 0.1",
          style: { "--av-fill": helpers.speedFill(speed) },
          onChange: (event) => props.selectSpeed(event.target.value),
        }),
        h(
          "span",
          { className: "av-theme-state av-theme-state--num" },
          `${helpers.speedText(speed)} · ${helpers.speedHint(speed)}`,
        ),
      ),
    },
  ];
}
