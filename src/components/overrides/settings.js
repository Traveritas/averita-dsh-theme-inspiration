/**
 * 主题覆盖：四个区域总开关（品牌位 / 新会话 / 装饰 / 背景）。
 *
 * 这一组没有对应的 CSS，只负责设置面板。总开关默认全开；关掉表示这一块
 * 完全不覆盖，对应细节模块由各自的 settings.js 收起。图标是否换成星标
 * 在「品牌字标」与「新会话首屏」模块里单独控制。
 * 本文件被 scripts/build.mjs 原样内联进 client.js，只能引用参数 api。
 */
function overridesSettings(api) {
  const { h, props, state } = api;
  const { brandOn, heroOn, deco, decoOn, bg, bgOn } = state;

  const switchRow = (order, label, on, hint, select) => ({
    order,
    node: h(
      "div",
      { className: "av-switch-row" },
      h("span", { className: "av-theme-sub" }, label),
      h(
        "button",
        {
          type: "button",
          role: "switch",
          "aria-checked": on,
          "aria-label": label,
          title: hint,
          className: "av-switch" + (on ? " av-switch--on" : ""),
          onClick: () => select(!on),
        },
        h("span", { className: "av-switch-knob", "aria-hidden": "true" }),
      ),
      h("span", { className: "av-theme-state" }, hint),
    ),
  });

  const brandHint = brandOn ? "开 · 品牌位按模块设置" : "关 · 完全不覆盖原生品牌位";
  const heroHint = heroOn ? "开 · 首屏按模块设置" : "关 · 完全不覆盖原生首屏";
  const decoHint = decoOn
    ? deco === "star"
      ? "开 · 星芒装饰"
      : "开 · 纸品装饰"
    : "关 · 完全不覆盖原生外观";
  const bgHint = bgOn
    ? bg === "flow"
      ? "开 · 流光背景"
      : "开 · 点阵底纹"
    : "关 · 不画背景";

  return [
    switchRow(10, "品牌位", brandOn, brandHint, props.selectBrandOn),
    switchRow(20, "新会话", heroOn, heroHint, props.selectHeroOn),
    switchRow(30, "装饰", decoOn, decoHint, props.selectDecoOn),
    switchRow(40, "背景", bgOn, bgHint, props.selectBgOn),
  ];
}
