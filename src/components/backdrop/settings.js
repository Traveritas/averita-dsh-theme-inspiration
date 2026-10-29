/**
 * 背景组设置行：背景三选一、缩放、浓淡。
 *
 * 这一组没有对应的 CSS（点阵在 dots/，流光在 flow/），只负责设置面板。
 * 本文件被 scripts/build.mjs 原样内联进 client.js，只能引用参数 api 里的东西：
 *   { h, props, state, reduced, helpers, modes, limits }
 * 返回 [{ group, order, node }]：group 是面板分组，order 是组内顺序。
 */
function backdropSettings(api) {
  const { h, props, state, reduced, helpers, modes, limits } = api;
  const { BG_MODES, BG_HINT } = modes;
  const { bg, scale, depth, flowOk } = state;
  const onFlow = bg === "flow";
  const rows = [];

  rows.push({
    group: "background",
    order: 10,
    node: h(
      "div",
      { className: "av-deco-row" },
      h("span", { className: "av-theme-sub" }, "背景"),
      BG_MODES.map((mode) =>
        h(
          "button",
          {
            key: mode.id,
            type: "button",
            className: "av-deco-chip" + (bg === mode.id ? " av-deco-chip--on" : ""),
            "aria-pressed": bg === mode.id,
            onClick: () => props.selectBg(mode.id),
          },
          mode.label,
        ),
      ),
      h(
        "span",
        { className: "av-theme-state" },
        !flowOk
          ? "流光需要 WebGL2，当前不可用"
          : onFlow && reduced
            ? "系统已减少动效，流光静止"
            : (BG_HINT[bg] ?? BG_HINT.dots),
      ),
    ),
  });

  if (bg !== "off") {
    rows.push({
      group: "background",
      order: 60,
      node: h(
        "div",
        { className: "av-deco-row av-deco-row--range" },
        h("span", { className: "av-theme-sub" }, "缩放"),
        h("input", {
          type: "range",
          className: "av-range",
          min: limits.SCALE_MIN,
          max: limits.SCALE_MAX,
          step: limits.SCALE_STEP,
          value: scale,
          "aria-label": onFlow ? "流场缩放" : "点阵缩放",
          "aria-valuetext": `${helpers.scaleText(scale)}，${
            onFlow ? "场放大" : `${Math.round(Number(scale) * 10)}px 格距`
          }`,
          title: "0.5–4×，步进 0.1",
          style: { "--av-fill": helpers.scaleFill(scale) },
          onChange: (event) => props.selectScale(event.target.value),
        }),
        h(
          "span",
          { className: "av-theme-state av-theme-state--num" },
          `${helpers.scaleText(scale)} · ${
            onFlow ? "场放大" : `${Math.round(Number(scale) * 10)}px 格距`
          }`,
        ),
      ),
    });

    rows.push({
      group: "background",
      order: 70,
      node: h(
        "div",
        { className: "av-deco-row av-deco-row--range" },
        h("span", { className: "av-theme-sub" }, "浓淡"),
        h("input", {
          type: "range",
          className: "av-range",
          min: limits.DEPTH_MIN,
          max: limits.DEPTH_MAX,
          step: limits.DEPTH_STEP,
          value: depth,
          "aria-label": onFlow ? "流光浓度" : "点阵浓淡",
          "aria-valuetext": `${helpers.depthText(depth)}，${
            onFlow ? "流光浓度" : helpers.depthHint(depth)
          }`,
          title: onFlow ? "30%–400%，步进 5%（乘在画布不透明度上）" : "30%–400%，步进 5%",
          style: { "--av-fill": helpers.depthFill(depth) },
          onChange: (event) => props.selectDepth(event.target.value),
        }),
        h(
          "span",
          { className: "av-theme-state av-theme-state--num" },
          `${helpers.depthText(depth)} · ${onFlow ? "流光浓度" : helpers.depthHint(depth)}`,
        ),
      ),
    });
  }

  return rows;
}