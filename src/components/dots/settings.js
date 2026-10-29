/**
 * 点阵组设置行：底纹、字符、动效、呼吸下限。
 *
 * 只在背景为点阵时出现；字符行只在字符底纹下出现，呼吸行只在有呼吸幅度时出现。
 * 本文件被 scripts/build.mjs 原样内联进 client.js，只能引用参数 api。
 */
function dotsSettings(api) {
  const { h, props, state, reduced, helpers, modes, limits } = api;
  const { DOT_MODES, DOT_HINT, GLYPH_MODES, MOTION_MODES, MOTION_HINT } = modes;
  const { dots, glyph, motion, breathe, bg } = state;
  const onDots = bg === "dots";
  const breathing = motion === "both" || motion === "breathe";
  const rows = [];

  if (onDots) {
    rows.push({
      group: "background",
      order: 20,
      node: h(
        "div",
        { className: "av-deco-row" },
        h("span", { className: "av-theme-sub" }, "底纹"),
        DOT_MODES.map((mode) =>
          h(
            "button",
            {
              key: mode.id,
              type: "button",
              className: "av-deco-chip" + (dots === mode.id ? " av-deco-chip--on" : ""),
              "aria-pressed": dots === mode.id,
              onClick: () => props.selectDots(mode.id),
            },
            mode.label,
          ),
        ),
        h("span", { className: "av-theme-state" }, DOT_HINT[dots] ?? DOT_HINT.dot),
      ),
    });
  }

  if (onDots && dots === "char") {
    rows.push({
      group: "background",
      order: 50,
      node: h(
        "div",
        { className: "av-deco-row" },
        h("span", { className: "av-theme-sub" }, "字符"),
        GLYPH_MODES.map((mode) =>
          h(
            "button",
            {
              key: mode.id,
              type: "button",
              className: "av-deco-chip av-deco-chip--glyph" + (glyph === mode.id ? " av-deco-chip--on" : ""),
              "aria-pressed": glyph === mode.id,
              title: mode.name,
              onClick: () => props.selectGlyph(mode.id),
            },
            mode.label,
          ),
        ),
        h(
          "span",
          { className: "av-theme-state" },
          (GLYPH_MODES.find((mode) => mode.id === glyph)?.name ?? "加号") + "铺格",
        ),
      ),
    });
  }

  if (onDots) {
    rows.push({
      group: "background",
      order: 80,
      node: h(
        "div",
        { className: "av-deco-row" },
        h("span", { className: "av-theme-sub" }, "动效"),
        MOTION_MODES.map((mode) =>
          h(
            "button",
            {
              key: mode.id,
              type: "button",
              className: "av-deco-chip" + (motion === mode.id ? " av-deco-chip--on" : ""),
              "aria-pressed": motion === mode.id,
              onClick: () => props.selectMotion(mode.id),
            },
            mode.label,
          ),
        ),
        h(
          "span",
          { className: "av-theme-state" },
          reduced ? "系统已减少动效" : (MOTION_HINT[motion] ?? MOTION_HINT.both),
        ),
      ),
    });
  }

  if (onDots && breathing && !reduced) {
    rows.push({
      group: "background",
      order: 90,
      node: h(
        "div",
        { className: "av-deco-row av-deco-row--range" },
        h("span", { className: "av-theme-sub" }, "呼吸下限"),
        h("input", {
          type: "range",
          className: "av-range",
          min: limits.BREATHE_MIN,
          max: limits.BREATHE_MAX,
          step: limits.BREATHE_STEP,
          value: breathe,
          "aria-label": "呼吸下限",
          "aria-valuetext": `${helpers.breatheText(breathe)}，${helpers.breatheHint(breathe)}`,
          title: "0%–100%，步进 5%",
          style: { "--av-fill": helpers.breatheFill(breathe) },
          onChange: (event) => props.selectBreathe(event.target.value),
        }),
        h(
          "span",
          { className: "av-theme-state av-theme-state--num" },
          `${helpers.breatheText(breathe)} · ${helpers.breatheHint(breathe)}`,
        ),
      ),
    });
  }

  return rows;
}