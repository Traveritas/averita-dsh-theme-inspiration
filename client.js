window.__ModuleLoader__.load({
  id: "dsh-theme-averita",
  factory: (require) => {
    const React = require("react");
    const h = React.createElement;

    const PLUGIN_ID = "dsh-theme-averita";
    const THEMES = [
  {
    "id": "averita",
    "label": "昼雾 · 靛夜",
    "tokens": {
      "--dsw-alias-bg-base": {
        "light": "#e5eaf0",
        "dark": "#0e131e"
      },
      "--dsw-alias-bg-layer-1": {
        "light": "rgba(250, 252, 254, 0.86)",
        "dark": "rgba(25, 32, 45, 0.72)"
      },
      "--dsw-alias-bg-layer-2": {
        "light": "rgba(247, 250, 252, 0.90)",
        "dark": "rgba(19, 26, 38, 0.82)"
      },
      "--dsw-alias-bg-layer-3": {
        "light": "rgba(252, 253, 255, 0.94)",
        "dark": "rgba(29, 37, 53, 0.78)"
      },
      "--dsw-alias-bg-overlay": {
        "light": "rgba(247, 250, 253, 0.94)",
        "dark": "rgba(18, 25, 36, 0.92)"
      },
      "--dsw-alias-bg-module-platform": {
        "light": "rgba(239, 244, 249, 0.90)",
        "dark": "rgba(23, 30, 43, 0.90)"
      },
      "--dsw-alias-bg-document-preview": {
        "light": "#eff3f7",
        "dark": "#111824"
      },
      "--dsw-alias-bg-document-selection": {
        "light": "rgba(97, 86, 125, 0.24)",
        "dark": "rgba(163, 153, 189, 0.26)"
      },
      "--dsw-alias-bg-skeleton": {
        "light": "rgba(55, 63, 79, 0.06)",
        "dark": "rgba(255, 255, 255, 0.06)"
      },
      "--dsw-alias-bg-multi-select": {
        "light": "rgba(55, 63, 79, 0.05)",
        "dark": "rgba(255, 255, 255, 0.04)"
      },
      "--dsw-alias-bg-mask-1": {
        "light": "rgba(11, 14, 21, 0.28)",
        "dark": "rgba(3, 5, 9, 0.40)"
      },
      "--dsw-alias-bg-mask-2": {
        "light": "rgba(11, 14, 21, 0.14)",
        "dark": "rgba(3, 5, 9, 0.20)"
      },
      "--dsw-alias-bg-mask-3": {
        "light": "rgba(11, 14, 21, 0.50)",
        "dark": "rgba(3, 5, 9, 0.56)"
      },
      "--dsw-alias-bg-mask-drop": {
        "light": "rgba(255, 255, 255, 0.70)",
        "dark": "rgba(11, 14, 21, 0.70)"
      },
      "--dsw-alias-bg-mask-photo": {
        "light": "rgba(0, 0, 0, 0.88)",
        "dark": "rgba(0, 0, 0, 0.88)"
      },
      "--dsw-alias-label-primary": {
        "light": "#24282f",
        "dark": "#e7ebf0"
      },
      "--dsw-alias-label-primary-dimmed": {
        "light": "#3c434d",
        "dark": "#cad2dd"
      },
      "--dsw-alias-label-primary-inverted": {
        "light": "#f8fafc",
        "dark": "#0d1119"
      },
      "--dsw-alias-label-primary-foreground": {
        "light": "#ffffff",
        "dark": "#0d1119"
      },
      "--dsw-alias-label-primary-bluish": {
        "light": "#24282f",
        "dark": "#e7ebf0"
      },
      "--dsw-alias-label-secondary": {
        "light": "#58606b",
        "dark": "#a9b4c3"
      },
      "--dsw-alias-label-tertiary": {
        "light": "#68707b",
        "dark": "#8691a2"
      },
      "--dsw-alias-label-caption": {
        "light": "#7f8894",
        "dark": "#6f7b8c"
      },
      "--dsw-alias-label-dimmed": {
        "light": "#cfd5dd",
        "dark": "#3d4757"
      },
      "--dsw-alias-label-document-preview": {
        "light": "#3c434d",
        "dark": "#cad2dd"
      },
      "--dsw-alias-label-shimmer": {
        "light": "rgba(36, 40, 47, 0.18)",
        "dark": "rgba(231, 235, 240, 0.24)"
      },
      "--dsw-alias-border-l1": {
        "light": "rgba(55, 63, 79, 0.14)",
        "dark": "rgba(174, 204, 220, 0.12)"
      },
      "--dsw-alias-border-l2": {
        "light": "rgba(55, 63, 79, 0.22)",
        "dark": "rgba(174, 204, 220, 0.18)"
      },
      "--dsw-alias-border-l3": {
        "light": "rgba(55, 63, 79, 0.28)",
        "dark": "rgba(174, 204, 220, 0.24)"
      },
      "--dsw-alias-border-l4": {
        "light": "rgba(55, 63, 79, 0.34)",
        "dark": "rgba(174, 204, 220, 0.30)"
      },
      "--dsw-alias-border-l2-darkmode-thin": {
        "light": "rgba(55, 63, 79, 0.22)",
        "dark": "rgba(174, 204, 220, 0.14)"
      },
      "--dsw-alias-border-inverted": {
        "light": "rgba(255, 255, 255, 0.40)",
        "dark": "rgba(0, 0, 0, 0)"
      },
      "--dsw-alias-border-inverted2": {
        "light": "rgba(255, 255, 255, 0.55)",
        "dark": "rgba(0, 0, 0, 0)"
      },
      "--dsw-alias-interactive-bg-hover": {
        "light": "rgba(55, 63, 79, 0.055)",
        "dark": "rgba(195, 215, 235, 0.06)"
      },
      "--dsw-alias-interactive-bg-active": {
        "light": "rgba(55, 63, 79, 0.095)",
        "dark": "rgba(195, 215, 235, 0.10)"
      },
      "--dsw-alias-interactive-bg-hover-solid": {
        "light": "rgba(239, 244, 249, 0.90)",
        "dark": "rgba(25, 32, 45, 0.90)"
      },
      "--dsw-alias-interactive-bg-hover-accent": {
        "light": "rgba(97, 86, 125, 0.10)",
        "dark": "rgba(186, 173, 210, 0.12)"
      },
      "--dsw-alias-interactive-bg-hover-danger": {
        "light": "rgba(151, 76, 59, 0.06)",
        "dark": "rgba(208, 144, 132, 0.10)"
      },
      "--dsw-alias-brand-primary": {
        "light": "#514d63",
        "dark": "#cac1dc"
      },
      "--dsw-alias-brand-primary-invert": {
        "light": "#f8fafc",
        "dark": "#141928"
      },
      "--dsw-alias-brand-text": {
        "light": "#514d63",
        "dark": "#e7ebf0"
      },
      "--dsw-alias-brand-primary-new-colorprimary-new-color": {
        "light": "#61567d",
        "dark": "#baadd2"
      },
      "--dsw-alias-button-primary-fill": {
        "light": "#514d63",
        "dark": "#cac1dc"
      },
      "--dsw-alias-button-primary-hover": {
        "light": "#615d75",
        "dark": "#d9d2e6"
      },
      "--dsw-alias-button-primary-dimmed": {
        "light": "rgba(81, 77, 99, 0.16)",
        "dark": "rgba(202, 193, 220, 0.16)"
      },
      "--dsw-alias-button-contrast-fill": {
        "light": "#24282f",
        "dark": "#e7ebf0"
      },
      "--dsw-alias-button-elevated-fill": {
        "light": "#fbfdfe",
        "dark": "rgba(29, 37, 53, 0.90)"
      },
      "--dsw-alias-button-floating-fill": {
        "light": "rgba(252, 253, 255, 0.90)",
        "dark": "rgba(21, 28, 41, 0.90)"
      },
      "--dsw-alias-button-floating-hover": {
        "light": "rgba(245, 248, 251, 0.95)",
        "dark": "rgba(31, 40, 57, 0.95)"
      },
      "--dsw-alias-button-ghost-active-fill": {
        "light": "rgba(55, 63, 79, 0.06)",
        "dark": "rgba(195, 215, 235, 0.06)"
      },
      "--dsw-alias-button-ghost-active-hover": {
        "light": "rgba(55, 63, 79, 0.09)",
        "dark": "rgba(195, 215, 235, 0.09)"
      },
      "--dsw-alias-button-ghost-active-border": {
        "light": "rgba(55, 63, 79, 0.30)",
        "dark": "rgba(174, 204, 220, 0.26)"
      },
      "--dsw-alias-button-info-fill": {
        "light": "#61567d",
        "dark": "#baadd2"
      },
      "--dsw-alias-button-info-hover": {
        "light": "#716591",
        "dark": "#ccc1e0"
      },
      "--dsw-alias-state-business-primary": {
        "light": "#61567d",
        "dark": "#baadd2"
      },
      "--dsw-alias-state-business-tertiary": {
        "light": "rgba(97, 86, 125, 0.10)",
        "dark": "rgba(186, 173, 210, 0.14)"
      },
      "--dsw-alias-state-done-primary": {
        "light": "#7b6397",
        "dark": "#c5b5db"
      },
      "--dsw-alias-state-error-primary": {
        "light": "#974c3b",
        "dark": "#d09084"
      },
      "--dsw-alias-state-error-secondary": {
        "light": "#ac6150",
        "dark": "#daa597"
      },
      "--dsw-alias-state-idle-primary": {
        "light": "#b9c1cc",
        "dark": "#4d5565"
      },
      "--dsw-alias-state-success-primary": {
        "light": "#4c6c56",
        "dark": "#8bb297"
      },
      "--dsw-alias-state-success-secondary": {
        "light": "#62856e",
        "dark": "#75a88d"
      },
      "--dsw-alias-state-success-tertiary": {
        "light": "rgba(76, 108, 86, 0.12)",
        "dark": "rgba(139, 178, 151, 0.14)"
      },
      "--dsw-alias-state-warn-primary": {
        "light": "#856131",
        "dark": "#ceae79"
      },
      "--dsw-alias-state-warn-secondary": {
        "light": "#9d743b",
        "dark": "#d6ba8a"
      },
      "--dsw-alias-state-warn-tertiary": {
        "light": "rgba(133, 97, 49, 0.12)",
        "dark": "rgba(206, 174, 121, 0.14)"
      },
      "--dsw-alias-state-warn-label": {
        "light": "#856131",
        "dark": "#ceae79"
      },
      "--dsw-alias-link": {
        "light": "#61567d",
        "dark": "#baadd2"
      },
      "--dsw-alias-menu-icon": {
        "light": "#4d5561",
        "dark": "#a3b0c0"
      },
      "--dsw-focus-ring-width": {
        "light": "2px",
        "dark": "2px"
      },
      "--dsw-alias-markdown-code-block": {
        "light": "rgba(234, 239, 245, 0.92)",
        "dark": "rgba(11, 16, 26, 0.72)"
      },
      "--dsw-alias-markdown-code-block-banner": {
        "light": "rgba(230, 235, 242, 0.94)",
        "dark": "rgba(14, 21, 32, 0.86)"
      },
      "--dsw-alias-markdown-code-segment-selected": {
        "light": "#ffffff",
        "dark": "#1f283c"
      },
      "--dsw-alias-markdown-code-segment-unselected": {
        "light": "rgba(237, 242, 247, 0.90)",
        "dark": "rgba(14, 21, 32, 0.70)"
      },
      "--dsw-alias-markdown-inline-code": {
        "light": "rgba(230, 235, 242, 0.90)",
        "dark": "rgba(255, 255, 255, 0.06)"
      },
      "--dsw-alias-markdown-placeholder": {
        "light": "rgba(237, 242, 247, 0.80)",
        "dark": "rgba(255, 255, 255, 0.05)"
      },
      "--dsw-alias-markdown-tag": {
        "light": "rgba(237, 242, 247, 0.90)",
        "dark": "rgba(255, 255, 255, 0.06)"
      },
      "--dsw-alias-markdown-citation": {
        "light": "rgba(97, 86, 125, 0.10)",
        "dark": "rgba(186, 173, 210, 0.12)"
      },
      "--dsw-alias-turn-trigger-bg": {
        "light": "rgba(234, 239, 245, 0.92)",
        "dark": "rgba(11, 16, 26, 0.72)"
      },
      "--dsw-alias-turn-trigger-bg-hover": {
        "light": "rgba(55, 63, 79, 0.055)",
        "dark": "rgba(195, 215, 235, 0.06)"
      },
      "--dsw-specific-menu": {
        "light": "rgba(248, 251, 253, 0.88)",
        "dark": "rgba(14, 19, 28, 0.90)"
      },
      "--dsw-alias-menu-group-header-fill": {
        "light": "rgba(248, 251, 253, 0.96)",
        "dark": "rgba(14, 19, 28, 0.97)"
      },
      "--dsw-alias-tooltip-bg": {
        "light": "rgba(36, 40, 47, 0.94)",
        "dark": "rgba(27, 34, 47, 0.96)"
      },
      "--dsw-alias-toast-bg": {
        "light": "rgba(36, 40, 47, 0.94)",
        "dark": "rgba(27, 34, 47, 0.96)"
      },
      "--dsw-alias-toast-label": {
        "light": "#f8fafc",
        "dark": "#e7ebf0"
      },
      "--dsw-alias-switch-thumb": {
        "light": "#ffffff",
        "dark": "#baadd2"
      },
      "--dsw-menu-backdrop-filter": {
        "light": "blur(14px) saturate(120%)",
        "dark": "blur(14px) saturate(120%)"
      },
      "--dsw-mask-blur": {
        "light": "none",
        "dark": "none"
      },
      "--dsw-specific-sidebar-fill": {
        "light": "rgba(244, 248, 251, 0.72)",
        "dark": "rgba(10, 15, 22, 0.66)"
      },
      "--dsw-specific-sidebar-nav-item-active": {
        "light": "rgba(81, 77, 99, 0.07)",
        "dark": "rgba(163, 153, 189, 0.10)"
      },
      "--dsw-specific-sidebar-nav-item-active-accent": {
        "light": "rgba(97, 86, 125, 0.10)",
        "dark": "rgba(186, 173, 210, 0.12)"
      },
      "--dsw-specific-input-major": {
        "light": "rgba(252, 253, 255, 0.86)",
        "dark": "rgba(17, 23, 33, 0.84)"
      },
      "--dsw-specific-bubble": {
        "light": "rgba(241, 242, 248, 0.88)",
        "dark": "rgba(33, 39, 57, 0.62)"
      },
      "--dsw-specific-bubble-highlight": {
        "light": "rgba(230, 231, 242, 0.92)",
        "dark": "rgba(50, 47, 73, 0.72)"
      },
      "--dsw-specific-selector": {
        "light": "rgba(239, 244, 249, 0.86)",
        "dark": "rgba(25, 32, 45, 0.86)"
      },
      "--dsw-specific-tip": {
        "light": "rgba(241, 245, 249, 0.90)",
        "dark": "rgba(23, 30, 43, 0.90)"
      },
      "--dsw-specific-login-input": {
        "light": "#eff3f7",
        "dark": "#111824"
      },
      "--dsw-alias-scrollbar-bg-l1": {
        "light": "rgba(55, 63, 79, 0.20)",
        "dark": "rgba(174, 204, 220, 0.18)"
      },
      "--dsw-alias-scrollbar-bg-l2": {
        "light": "rgba(55, 63, 79, 0.24)",
        "dark": "rgba(174, 204, 220, 0.22)"
      },
      "--dsw-alias-scrollbar-hover-l1": {
        "light": "rgba(55, 63, 79, 0.34)",
        "dark": "rgba(174, 204, 220, 0.32)"
      },
      "--dsw-alias-scrollbar-hover-l2": {
        "light": "rgba(55, 63, 79, 0.38)",
        "dark": "rgba(174, 204, 220, 0.36)"
      },
      "--ds-ease-in-out": {
        "light": "cubic-bezier(0.22, 0.61, 0.36, 1)",
        "dark": "cubic-bezier(0.22, 0.61, 0.36, 1)"
      },
      "--ds-transition-duration": {
        "light": "180ms",
        "dark": "180ms"
      },
      "--ds-transition-duration-fast": {
        "light": "120ms",
        "dark": "120ms"
      },
      "--ds-transition-duration-slow": {
        "light": "300ms",
        "dark": "300ms"
      },
      "--dsw-radius-xs": {
        "light": "2px",
        "dark": "2px"
      },
      "--dsw-radius-sm": {
        "light": "3px",
        "dark": "3px"
      },
      "--dsw-radius-md": {
        "light": "4px",
        "dark": "4px"
      },
      "--dsw-radius-lg": {
        "light": "6px",
        "dark": "6px"
      },
      "--dsw-radius-xl": {
        "light": "8px",
        "dark": "8px"
      },
      "--dsw-radius-panel": {
        "light": "10px",
        "dark": "10px"
      },
      "--dsw-shadow-lv1": {
        "light": "0 1px 2px rgba(36, 40, 47, 0.05)",
        "dark": "0 1px 2px rgba(0, 0, 0, 0.24)"
      },
      "--dsw-shadow-lv1-blur": {
        "light": "0 2px 8px rgba(36, 40, 47, 0.04)",
        "dark": "0 2px 8px rgba(0, 0, 0, 0.18)"
      },
      "--dsw-shadow-lv2": {
        "light": "0 6px 20px rgba(36, 40, 47, 0.07), 0 1px 2px rgba(36, 40, 47, 0.05)",
        "dark": "0 6px 22px rgba(0, 0, 0, 0.34), 0 1px 2px rgba(0, 0, 0, 0.24)"
      },
      "--dsw-shadow-lv3": {
        "light": "0 20px 56px rgba(36, 40, 47, 0.12), 0 2px 8px rgba(36, 40, 47, 0.06)",
        "dark": "0 22px 60px rgba(0, 0, 0, 0.46), 0 2px 8px rgba(0, 0, 0, 0.30)"
      },
      "--dsw-elevation-stroke-color": {
        "light": "rgba(55, 63, 79, 0.18)",
        "dark": "rgba(174, 204, 220, 0.18)"
      },
      "--dsw-font-markdown-h1-font-family": {
        "light": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif",
        "dark": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif"
      },
      "--dsw-font-markdown-h2-font-family": {
        "light": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif",
        "dark": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif"
      },
      "--dsw-font-markdown-h3-font-family": {
        "light": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif",
        "dark": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif"
      },
      "--shiki-token-constant": {
        "light": "#7b6397",
        "dark": "#d2b896"
      },
      "--shiki-token-string": {
        "light": "#446b6f",
        "dark": "#94b5bf"
      },
      "--shiki-token-comment": {
        "light": "#7f8894",
        "dark": "#6f7b8c"
      },
      "--shiki-token-keyword": {
        "light": "#6d5c91",
        "dark": "#baadd2"
      },
      "--shiki-token-parameter": {
        "light": "#815b38",
        "dark": "#d2b896"
      },
      "--shiki-token-function": {
        "light": "#7b6397",
        "dark": "#ccbde3"
      },
      "--shiki-token-string-expression": {
        "light": "#446b6f",
        "dark": "#94b5bf"
      },
      "--shiki-token-punctuation": {
        "light": "#4d5561",
        "dark": "#9da8b7"
      },
      "--shiki-token-link": {
        "light": "#61567d",
        "dark": "#baadd2"
      },
      "--dsw-static-amber-100": {
        "light": "#fdf5e8",
        "dark": "#fdf5e8"
      },
      "--dsw-static-amber-400": {
        "light": "#8c5d0d",
        "dark": "#edaa3b"
      },
      "--dsw-static-amber-500": {
        "light": "#754d0b",
        "dark": "#efb553"
      },
      "--dsw-static-amber-600": {
        "light": "#543412",
        "dark": "#e3af78"
      },
      "--dsw-static-amber-900": {
        "light": "#2e2618",
        "dark": "#2e2618"
      },
      "--dsw-static-blue-100": {
        "light": "#e7e7f2",
        "dark": "#e7e7f2"
      },
      "--dsw-static-blue-300": {
        "light": "#b6b8da",
        "dark": "#b6b8da"
      },
      "--dsw-static-blue-400": {
        "light": "#9395c7",
        "dark": "#9395c7"
      },
      "--dsw-static-blue-450": {
        "light": "#8587c0",
        "dark": "#8587c0"
      },
      "--dsw-static-blue-500": {
        "light": "#787ab9",
        "dark": "#787ab9"
      },
      "--dsw-static-blue-50": {
        "light": "#f4f5fa",
        "dark": "#f4f5fa"
      },
      "--dsw-static-blue-50p": {
        "light": "#f1f1f8",
        "dark": "#f1f1f8"
      },
      "--dsw-static-blue-600": {
        "light": "#6264ae",
        "dark": "#6264ae"
      },
      "--dsw-static-blue-75": {
        "light": "#eeeef6",
        "dark": "#eeeef6"
      },
      "--dsw-static-blue-800": {
        "light": "#464887",
        "dark": "#464887"
      },
      "--dsw-static-blue-900": {
        "light": "#2c2e56",
        "dark": "#2c2e56"
      },
      "--dsw-static-blue-950": {
        "light": "#282943",
        "dark": "#282943"
      },
      "--dsw-static-deepseek-100": {
        "light": "#ececf5",
        "dark": "#ececf5"
      },
      "--dsw-static-deepseek-200": {
        "light": "#e2e2f0",
        "dark": "#e2e2f0"
      },
      "--dsw-static-deepseek-300": {
        "light": "#cfd0e6",
        "dark": "#cfd0e6"
      },
      "--dsw-static-deepseek-400": {
        "light": "#a7a9d2",
        "dark": "#a7a9d2"
      },
      "--dsw-static-deepseek-450": {
        "light": "#8f91c5",
        "dark": "#8f91c5"
      },
      "--dsw-static-deepseek-500": {
        "light": "#7173b6",
        "dark": "#7173b6"
      },
      "--dsw-static-deepseek-50": {
        "light": "#f2f3f9",
        "dark": "#f2f3f9"
      },
      "--dsw-static-deepseek-600": {
        "light": "#656795",
        "dark": "#656795"
      },
      "--dsw-static-deepseek-700-delete": {
        "light": "#494b75",
        "dark": "#494b75"
      },
      "--dsw-static-deepseek-800": {
        "light": "#3f3f50",
        "dark": "#3f3f50"
      },
      "--dsw-static-deepseek-900": {
        "light": "#2f2f3b",
        "dark": "#2f2f3b"
      },
      "--dsw-static-green-100": {
        "light": "#e7f9ed",
        "dark": "#e7f9ed"
      },
      "--dsw-static-green-400": {
        "light": "#247642",
        "dark": "#55ca80"
      },
      "--dsw-static-green-500": {
        "light": "#186936",
        "dark": "#5edb8c"
      },
      "--dsw-static-green-500-a08": {
        "light": "#18693614",
        "dark": "#5edb8c14"
      },
      "--dsw-static-green-500-a12": {
        "light": "#1869361f",
        "dark": "#5edb8c1f"
      },
      "--dsw-static-green-900": {
        "light": "#213e2c",
        "dark": "#213e2c"
      },
      "--dsw-static-neutral-00": {
        "light": "#ffffff",
        "dark": "#ffffff"
      },
      "--dsw-static-neutral-1000": {
        "light": "#000000",
        "dark": "#040405"
      },
      "--dsw-static-neutral-100": {
        "light": "#f5f5f5",
        "dark": "#f5f5f5"
      },
      "--dsw-static-neutral-150": {
        "light": "#ededed",
        "dark": "#ededed"
      },
      "--dsw-static-neutral-200": {
        "light": "#e5e5e5",
        "dark": "#e5e5e5"
      },
      "--dsw-static-neutral-250": {
        "light": "#dcdcdc",
        "dark": "#dcdcdc"
      },
      "--dsw-static-neutral-300": {
        "light": "#d4d4d4",
        "dark": "#d4d4d4"
      },
      "--dsw-static-neutral-400": {
        "light": "#a3a3a5",
        "dark": "#a3a3a5"
      },
      "--dsw-static-neutral-500": {
        "light": "#828284",
        "dark": "#828284"
      },
      "--dsw-static-neutral-50": {
        "light": "#fafafa",
        "dark": "#fafafa"
      },
      "--dsw-static-neutral-550": {
        "light": "#676769",
        "dark": "#676769"
      },
      "--dsw-static-neutral-600": {
        "light": "#555556",
        "dark": "#555556"
      },
      "--dsw-static-neutral-700": {
        "light": "#3c3c3d",
        "dark": "#404142"
      },
      "--dsw-static-neutral-800": {
        "light": "#292929",
        "dark": "#2d2d2e"
      },
      "--dsw-static-neutral-850": {
        "light": "#222222",
        "dark": "#262627"
      },
      "--dsw-static-neutral-900": {
        "light": "#0f0f0f",
        "dark": "#131314"
      },
      "--dsw-static-neutral-bluish-00": {
        "light": "#ffffff",
        "dark": "#ffffff"
      },
      "--dsw-static-neutral-bluish-1000": {
        "light": "#101114",
        "dark": "#141519"
      },
      "--dsw-static-neutral-bluish-100": {
        "light": "#ededf0",
        "dark": "#ededf0"
      },
      "--dsw-static-neutral-bluish-150": {
        "light": "#ececef",
        "dark": "#ececef"
      },
      "--dsw-static-neutral-bluish-200": {
        "light": "#e5e6ea",
        "dark": "#e5e6ea"
      },
      "--dsw-static-neutral-bluish-300": {
        "light": "#cfd1d6",
        "dark": "#cfd1d6"
      },
      "--dsw-static-neutral-bluish-400": {
        "light": "#aeb0b7",
        "dark": "#aeb0b7"
      },
      "--dsw-static-neutral-bluish-500": {
        "light": "#989ba5",
        "dark": "#989ba5"
      },
      "--dsw-static-neutral-bluish-50": {
        "light": "#f9fafb",
        "dark": "#f9fafb"
      },
      "--dsw-static-neutral-bluish-600": {
        "light": "#82848b",
        "dark": "#82848b"
      },
      "--dsw-static-neutral-bluish-60": {
        "light": "#f5f5f7",
        "dark": "#f9fafb"
      },
      "--dsw-static-neutral-bluish-700": {
        "light": "#62636a",
        "dark": "#66686f"
      },
      "--dsw-static-neutral-bluish-750": {
        "light": "#43454a",
        "dark": "#48494e"
      },
      "--dsw-static-neutral-bluish-75": {
        "light": "#f2f2f4",
        "dark": "#f2f2f4"
      },
      "--dsw-static-neutral-bluish-800": {
        "light": "#353638",
        "dark": "#3a3a3c"
      },
      "--dsw-static-neutral-bluish-850": {
        "light": "#2c2c2e",
        "dark": "#303132"
      },
      "--dsw-static-neutral-bluish-875": {
        "light": "#232324",
        "dark": "#272729"
      },
      "--dsw-static-neutral-bluish-900": {
        "light": "#1b1b1c",
        "dark": "#1f2021"
      },
      "--dsw-static-neutral-bluish-950": {
        "light": "#151517",
        "dark": "#191a1c"
      },
      "--dsw-static-red-100": {
        "light": "#fde3e3",
        "dark": "#fde3e3"
      },
      "--dsw-static-red-400": {
        "light": "#cb1b1b",
        "dark": "#ea6262"
      },
      "--dsw-static-red-400-a12": {
        "light": "#cb1b1b1f",
        "dark": "#ea62621f"
      },
      "--dsw-static-red-500": {
        "light": "#b41919",
        "dark": "#ed7979"
      },
      "--dsw-static-red-50": {
        "light": "#fdf3f3",
        "dark": "#fdf3f3"
      },
      "--dsw-static-red-600": {
        "light": "#9e1515",
        "dark": "#f08f8f"
      },
      "--dsw-static-red-600-a08": {
        "light": "#9e151514",
        "dark": "#f08f8f14"
      },
      "--dsw-static-red-900": {
        "light": "#531010",
        "dark": "#531010"
      }
    },
    "vars": {
      "light": {
        "space": "#e5eaf0",
        "dot": "rgba(55, 63, 79, 0.055)",
        "mark": "#61567d"
      },
      "dark": {
        "space": "#0e131e",
        "dot": "rgba(217, 230, 243, 0.085)",
        "mark": "#baadd2"
      }
    }
  },
  {
    "id": "coldmorning",
    "label": "冷晨",
    "tokens": {
      "--dsw-alias-bg-base": {
        "light": "#e4e9e9",
        "dark": "#101820"
      },
      "--dsw-alias-bg-layer-1": {
        "light": "rgba(252, 252, 252, 0.86)",
        "dark": "rgba(31, 36, 39, 0.72)"
      },
      "--dsw-alias-bg-layer-2": {
        "light": "rgba(249, 250, 250, 0.9)",
        "dark": "rgba(25, 29, 32, 0.82)"
      },
      "--dsw-alias-bg-layer-3": {
        "light": "rgba(253, 254, 254, 0.94)",
        "dark": "rgba(36, 42, 46, 0.78)"
      },
      "--dsw-alias-bg-overlay": {
        "light": "rgba(249, 250, 251, 0.94)",
        "dark": "rgba(24, 27, 30, 0.92)"
      },
      "--dsw-alias-bg-module-platform": {
        "light": "rgba(243, 244, 245, 0.9)",
        "dark": "rgba(29, 34, 37, 0.9)"
      },
      "--dsw-alias-bg-document-preview": {
        "light": "#f2f4f4",
        "dark": "#181b1d"
      },
      "--dsw-alias-bg-document-selection": {
        "light": "rgba(89, 108, 122, 0.24)",
        "dark": "rgba(156, 176, 186, 0.26)"
      },
      "--dsw-alias-bg-skeleton": {
        "light": "rgba(60, 70, 74, 0.06)",
        "dark": "rgba(255, 255, 255, 0.06)"
      },
      "--dsw-alias-bg-multi-select": {
        "light": "rgba(60, 70, 74, 0.05)",
        "dark": "rgba(255, 255, 255, 0.04)"
      },
      "--dsw-alias-bg-mask-1": {
        "light": "rgba(14, 17, 18, 0.28)",
        "dark": "rgba(5, 6, 7, 0.4)"
      },
      "--dsw-alias-bg-mask-2": {
        "light": "rgba(14, 17, 18, 0.14)",
        "dark": "rgba(5, 6, 7, 0.2)"
      },
      "--dsw-alias-bg-mask-3": {
        "light": "rgba(14, 17, 18, 0.5)",
        "dark": "rgba(5, 6, 7, 0.56)"
      },
      "--dsw-alias-bg-mask-drop": {
        "light": "rgba(255, 255, 255, 0.70)",
        "dark": "rgba(14, 16, 18, 0.7)"
      },
      "--dsw-alias-bg-mask-photo": {
        "light": "rgba(0, 0, 0, 0.88)",
        "dark": "rgba(0, 0, 0, 0.88)"
      },
      "--dsw-alias-label-primary": {
        "light": "#333b3e",
        "dark": "#e2eaec"
      },
      "--dsw-alias-label-primary-dimmed": {
        "light": "#404649",
        "dark": "#d0d4d7"
      },
      "--dsw-alias-label-primary-inverted": {
        "light": "#fafafa",
        "dark": "#121314"
      },
      "--dsw-alias-label-primary-foreground": {
        "light": "#ffffff",
        "dark": "#121314"
      },
      "--dsw-alias-label-primary-bluish": {
        "light": "#272b2c",
        "dark": "#eaeced"
      },
      "--dsw-alias-label-secondary": {
        "light": "#5b666b",
        "dark": "#a6b6bd"
      },
      "--dsw-alias-label-tertiary": {
        "light": "#657075",
        "dark": "#82949c"
      },
      "--dsw-alias-label-caption": {
        "light": "#818d92",
        "dark": "#757f86"
      },
      "--dsw-alias-label-dimmed": {
        "light": "#d3d7d9",
        "dark": "#454b4f"
      },
      "--dsw-alias-label-document-preview": {
        "light": "#404649",
        "dark": "#d0d4d7"
      },
      "--dsw-alias-label-shimmer": {
        "light": "rgba(39, 43, 44, 0.18)",
        "dark": "rgba(234, 236, 237, 0.24)"
      },
      "--dsw-alias-border-l1": {
        "light": "rgba(60, 70, 74, 0.14)",
        "dark": "rgba(191, 198, 203, 0.12)"
      },
      "--dsw-alias-border-l2": {
        "light": "rgba(60, 70, 74, 0.22)",
        "dark": "rgba(191, 198, 203, 0.18)"
      },
      "--dsw-alias-border-l3": {
        "light": "rgba(60, 70, 74, 0.28)",
        "dark": "rgba(191, 198, 203, 0.24)"
      },
      "--dsw-alias-border-l4": {
        "light": "rgba(60, 70, 74, 0.34)",
        "dark": "rgba(191, 198, 203, 0.3)"
      },
      "--dsw-alias-border-l2-darkmode-thin": {
        "light": "rgba(60, 70, 74, 0.22)",
        "dark": "rgba(191, 198, 203, 0.14)"
      },
      "--dsw-alias-border-inverted": {
        "light": "rgba(255, 255, 255, 0.40)",
        "dark": "rgba(0, 0, 0, 0)"
      },
      "--dsw-alias-border-inverted2": {
        "light": "rgba(255, 255, 255, 0.55)",
        "dark": "rgba(0, 0, 0, 0)"
      },
      "--dsw-alias-interactive-bg-hover": {
        "light": "rgba(60, 70, 74, 0.055)",
        "dark": "rgba(211, 216, 219, 0.06)"
      },
      "--dsw-alias-interactive-bg-active": {
        "light": "rgba(60, 70, 74, 0.095)",
        "dark": "rgba(211, 216, 219, 0.1)"
      },
      "--dsw-alias-interactive-bg-hover-solid": {
        "light": "rgba(243, 244, 245, 0.9)",
        "dark": "rgba(31, 36, 39, 0.9)"
      },
      "--dsw-alias-interactive-bg-hover-accent": {
        "light": "rgba(94, 110, 117, 0.1)",
        "dark": "rgba(184, 193, 199, 0.12)"
      },
      "--dsw-alias-interactive-bg-hover-danger": {
        "light": "rgba(93, 110, 117, 0.06)",
        "dark": "rgba(161, 172, 179, 0.1)"
      },
      "--dsw-alias-brand-primary": {
        "light": "#4f6370",
        "dark": "#c3d4da"
      },
      "--dsw-alias-brand-primary-invert": {
        "light": "#f8fafc",
        "dark": "#162127"
      },
      "--dsw-alias-brand-text": {
        "light": "#4c5a64",
        "dark": "#e8edef"
      },
      "--dsw-alias-brand-primary-new-colorprimary-new-color": {
        "light": "#596c7a",
        "dark": "#b0c5cf"
      },
      "--dsw-alias-button-primary-fill": {
        "light": "#4c5a64",
        "dark": "#c3d2da"
      },
      "--dsw-alias-button-primary-hover": {
        "light": "#5a6b78",
        "dark": "#d4dfe5"
      },
      "--dsw-alias-button-primary-dimmed": {
        "light": "rgba(76, 90, 100, 0.16)",
        "dark": "rgba(195, 210, 218, 0.16)"
      },
      "--dsw-alias-button-contrast-fill": {
        "light": "#252b2e",
        "dark": "#e9ecee"
      },
      "--dsw-alias-button-elevated-fill": {
        "light": "#fcfdfd",
        "dark": "rgba(36, 42, 46, 0.9)"
      },
      "--dsw-alias-button-floating-fill": {
        "light": "rgba(253, 254, 254, 0.9)",
        "dark": "rgba(28, 32, 34, 0.9)"
      },
      "--dsw-alias-button-floating-hover": {
        "light": "rgba(247, 248, 249, 0.95)",
        "dark": "rgba(39, 45, 49, 0.95)"
      },
      "--dsw-alias-button-ghost-active-fill": {
        "light": "rgba(60, 70, 74, 0.06)",
        "dark": "rgba(211, 216, 219, 0.06)"
      },
      "--dsw-alias-button-ghost-active-hover": {
        "light": "rgba(60, 70, 74, 0.09)",
        "dark": "rgba(211, 216, 219, 0.09)"
      },
      "--dsw-alias-button-ghost-active-border": {
        "light": "rgba(60, 70, 74, 0.3)",
        "dark": "rgba(191, 198, 203, 0.26)"
      },
      "--dsw-alias-button-info-fill": {
        "light": "#596c7a",
        "dark": "#b0c5cf"
      },
      "--dsw-alias-button-info-hover": {
        "light": "#687e8e",
        "dark": "#c3d5de"
      },
      "--dsw-alias-state-business-primary": {
        "light": "#4f6370",
        "dark": "#a9c6d4"
      },
      "--dsw-alias-state-business-tertiary": {
        "light": "rgba(89, 108, 122, 0.1)",
        "dark": "rgba(176, 197, 207, 0.14)"
      },
      "--dsw-alias-state-done-primary": {
        "light": "#7b6694",
        "dark": "#c5b7d9"
      },
      "--dsw-alias-state-error-primary": {
        "light": "#924f40",
        "dark": "#cc9388"
      },
      "--dsw-alias-state-error-secondary": {
        "light": "#a76455",
        "dark": "#d7a79a"
      },
      "--dsw-alias-state-idle-primary": {
        "light": "#bac1cb",
        "dark": "#4e5564"
      },
      "--dsw-alias-state-success-primary": {
        "light": "#4e6a57",
        "dark": "#8db098"
      },
      "--dsw-alias-state-success-secondary": {
        "light": "#64836f",
        "dark": "#78a58d"
      },
      "--dsw-alias-state-success-tertiary": {
        "light": "rgba(78, 106, 87, 0.12)",
        "dark": "rgba(141, 176, 152, 0.14)"
      },
      "--dsw-alias-state-warn-primary": {
        "light": "#816035",
        "dark": "#caad7d"
      },
      "--dsw-alias-state-warn-secondary": {
        "light": "#987340",
        "dark": "#d2b98e"
      },
      "--dsw-alias-state-warn-tertiary": {
        "light": "rgba(129, 96, 53, 0.12)",
        "dark": "rgba(202, 173, 125, 0.14)"
      },
      "--dsw-alias-state-warn-label": {
        "light": "#816035",
        "dark": "#caad7d"
      },
      "--dsw-alias-link": {
        "light": "#4f6572",
        "dark": "#a9c6d4"
      },
      "--dsw-alias-menu-icon": {
        "light": "#4b5963",
        "dark": "#a5b6be"
      },
      "--dsw-focus-ring-width": {
        "light": "2px",
        "dark": "2px"
      },
      "--dsw-alias-markdown-code-block": {
        "light": "rgba(238, 240, 241, 0.92)",
        "dark": "rgba(16, 19, 21, 0.72)"
      },
      "--dsw-alias-markdown-code-block-banner": {
        "light": "rgba(234, 237, 238, 0.94)",
        "dark": "rgba(20, 23, 26, 0.86)"
      },
      "--dsw-alias-markdown-code-segment-selected": {
        "light": "#ffffff",
        "dark": "#282e33"
      },
      "--dsw-alias-markdown-code-segment-unselected": {
        "light": "rgba(241, 243, 243, 0.9)",
        "dark": "rgba(20, 23, 26, 0.7)"
      },
      "--dsw-alias-markdown-inline-code": {
        "light": "rgba(234, 237, 238, 0.9)",
        "dark": "rgba(255, 255, 255, 0.06)"
      },
      "--dsw-alias-markdown-placeholder": {
        "light": "rgba(241, 243, 243, 0.8)",
        "dark": "rgba(255, 255, 255, 0.05)"
      },
      "--dsw-alias-markdown-tag": {
        "light": "rgba(241, 243, 243, 0.9)",
        "dark": "rgba(255, 255, 255, 0.06)"
      },
      "--dsw-alias-markdown-citation": {
        "light": "rgba(89, 108, 122, 0.1)",
        "dark": "rgba(176, 197, 207, 0.12)"
      },
      "--dsw-alias-turn-trigger-bg": {
        "light": "rgba(238, 240, 241, 0.92)",
        "dark": "rgba(16, 19, 21, 0.72)"
      },
      "--dsw-alias-turn-trigger-bg-hover": {
        "light": "rgba(60, 70, 74, 0.055)",
        "dark": "rgba(211, 216, 219, 0.06)"
      },
      "--dsw-specific-menu": {
        "light": "rgba(250, 251, 251, 0.88)",
        "dark": "rgba(19, 21, 23, 0.9)"
      },
      "--dsw-alias-menu-group-header-fill": {
        "light": "rgba(250, 251, 251, 0.96)",
        "dark": "rgba(19, 21, 23, 0.97)"
      },
      "--dsw-alias-tooltip-bg": {
        "light": "rgba(37, 43, 46, 0.94)",
        "dark": "rgba(33, 38, 41, 0.96)"
      },
      "--dsw-alias-toast-bg": {
        "light": "rgba(37, 43, 46, 0.94)",
        "dark": "rgba(33, 38, 41, 0.96)"
      },
      "--dsw-alias-toast-label": {
        "light": "#f9fafb",
        "dark": "#e9ecee"
      },
      "--dsw-alias-switch-thumb": {
        "light": "#ffffff",
        "dark": "#b8c1c7"
      },
      "--dsw-menu-backdrop-filter": {
        "light": "blur(14px) saturate(120%)",
        "dark": "blur(14px) saturate(120%)"
      },
      "--dsw-mask-blur": {
        "light": "none",
        "dark": "none"
      },
      "--dsw-specific-sidebar-fill": {
        "light": "rgba(247, 248, 248, 0.72)",
        "dark": "rgba(14, 16, 18, 0.66)"
      },
      "--dsw-specific-sidebar-nav-item-active": {
        "light": "rgba(79, 92, 97, 0.07)",
        "dark": "rgba(162, 173, 180, 0.1)"
      },
      "--dsw-specific-sidebar-nav-item-active-accent": {
        "light": "rgba(94, 110, 117, 0.1)",
        "dark": "rgba(184, 193, 199, 0.12)"
      },
      "--dsw-specific-input-major": {
        "light": "rgba(253, 254, 254, 0.86)",
        "dark": "rgba(22, 25, 28, 0.84)"
      },
      "--dsw-specific-bubble": {
        "light": "rgba(220, 232, 235, 0.88)",
        "dark": "rgba(35, 48, 55, 0.62)"
      },
      "--dsw-specific-bubble-highlight": {
        "light": "rgba(231, 237, 241, 0.92)",
        "dark": "rgba(49, 64, 71, 0.72)"
      },
      "--dsw-specific-selector": {
        "light": "rgba(243, 244, 245, 0.86)",
        "dark": "rgba(31, 36, 39, 0.86)"
      },
      "--dsw-specific-tip": {
        "light": "rgba(244, 245, 246, 0.9)",
        "dark": "rgba(29, 34, 37, 0.9)"
      },
      "--dsw-specific-login-input": {
        "light": "#f2f4f4",
        "dark": "#181b1d"
      },
      "--dsw-alias-scrollbar-bg-l1": {
        "light": "rgba(60, 70, 74, 0.2)",
        "dark": "rgba(191, 198, 203, 0.18)"
      },
      "--dsw-alias-scrollbar-bg-l2": {
        "light": "rgba(60, 70, 74, 0.24)",
        "dark": "rgba(191, 198, 203, 0.22)"
      },
      "--dsw-alias-scrollbar-hover-l1": {
        "light": "rgba(60, 70, 74, 0.34)",
        "dark": "rgba(191, 198, 203, 0.32)"
      },
      "--dsw-alias-scrollbar-hover-l2": {
        "light": "rgba(60, 70, 74, 0.38)",
        "dark": "rgba(191, 198, 203, 0.36)"
      },
      "--ds-ease-in-out": {
        "light": "cubic-bezier(0.22, 0.61, 0.36, 1)",
        "dark": "cubic-bezier(0.22, 0.61, 0.36, 1)"
      },
      "--ds-transition-duration": {
        "light": "180ms",
        "dark": "180ms"
      },
      "--ds-transition-duration-fast": {
        "light": "120ms",
        "dark": "120ms"
      },
      "--ds-transition-duration-slow": {
        "light": "300ms",
        "dark": "300ms"
      },
      "--dsw-radius-xs": {
        "light": "2px",
        "dark": "2px"
      },
      "--dsw-radius-sm": {
        "light": "3px",
        "dark": "3px"
      },
      "--dsw-radius-md": {
        "light": "4px",
        "dark": "4px"
      },
      "--dsw-radius-lg": {
        "light": "6px",
        "dark": "6px"
      },
      "--dsw-radius-xl": {
        "light": "8px",
        "dark": "8px"
      },
      "--dsw-radius-panel": {
        "light": "10px",
        "dark": "10px"
      },
      "--dsw-shadow-lv1": {
        "light": "0 1px 2px rgba(36, 40, 47, 0.05)",
        "dark": "0 1px 2px rgba(0, 0, 0, 0.24)"
      },
      "--dsw-shadow-lv1-blur": {
        "light": "0 2px 8px rgba(36, 40, 47, 0.04)",
        "dark": "0 2px 8px rgba(0, 0, 0, 0.18)"
      },
      "--dsw-shadow-lv2": {
        "light": "0 6px 20px rgba(36, 40, 47, 0.07), 0 1px 2px rgba(36, 40, 47, 0.05)",
        "dark": "0 6px 22px rgba(0, 0, 0, 0.34), 0 1px 2px rgba(0, 0, 0, 0.24)"
      },
      "--dsw-shadow-lv3": {
        "light": "0 20px 56px rgba(36, 40, 47, 0.12), 0 2px 8px rgba(36, 40, 47, 0.06)",
        "dark": "0 22px 60px rgba(0, 0, 0, 0.46), 0 2px 8px rgba(0, 0, 0, 0.30)"
      },
      "--dsw-elevation-stroke-color": {
        "light": "rgba(60, 70, 74, 0.18)",
        "dark": "rgba(191, 198, 203, 0.18)"
      },
      "--dsw-font-markdown-h1-font-family": {
        "light": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif",
        "dark": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif"
      },
      "--dsw-font-markdown-h2-font-family": {
        "light": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif",
        "dark": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif"
      },
      "--dsw-font-markdown-h3-font-family": {
        "light": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif",
        "dark": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif"
      },
      "--shiki-token-constant": {
        "light": "#998462",
        "dark": "#d1bc97"
      },
      "--shiki-token-string": {
        "light": "#44686f",
        "dark": "#94b8bf"
      },
      "--shiki-token-comment": {
        "light": "#808d93",
        "dark": "#737f88"
      },
      "--shiki-token-keyword": {
        "light": "#5c7b91",
        "dark": "#adc6d2"
      },
      "--shiki-token-parameter": {
        "light": "#806639",
        "dark": "#d1bc97"
      },
      "--shiki-token-function": {
        "light": "#638197",
        "dark": "#c0d5e0"
      },
      "--shiki-token-string-expression": {
        "light": "#44686f",
        "dark": "#94b8bf"
      },
      "--shiki-token-punctuation": {
        "light": "#505a5e",
        "dark": "#a3abb1"
      },
      "--shiki-token-link": {
        "light": "#546d7f",
        "dark": "#adc6d2"
      },
      "--dsw-static-amber-100": {
        "light": "#fdf5e8",
        "dark": "#fdf5e8"
      },
      "--dsw-static-amber-400": {
        "light": "#8c5d0d",
        "dark": "#edaa3b"
      },
      "--dsw-static-amber-500": {
        "light": "#754d0b",
        "dark": "#efb553"
      },
      "--dsw-static-amber-600": {
        "light": "#543412",
        "dark": "#e3af78"
      },
      "--dsw-static-amber-900": {
        "light": "#2e2618",
        "dark": "#2e2618"
      },
      "--dsw-static-blue-100": {
        "light": "#e2eef7",
        "dark": "#e2f0f7"
      },
      "--dsw-static-blue-300": {
        "light": "#aacde6",
        "dark": "#aad2e6"
      },
      "--dsw-static-blue-400": {
        "light": "#80b5da",
        "dark": "#80bcda"
      },
      "--dsw-static-blue-450": {
        "light": "#70abd5",
        "dark": "#70b3d5"
      },
      "--dsw-static-blue-500": {
        "light": "#60a2d1",
        "dark": "#60abd1"
      },
      "--dsw-static-blue-50": {
        "light": "#f3f8fb",
        "dark": "#f3f8fb"
      },
      "--dsw-static-blue-50p": {
        "light": "#eff5fa",
        "dark": "#eff6fa"
      },
      "--dsw-static-blue-600": {
        "light": "#4793c9",
        "dark": "#479ec9"
      },
      "--dsw-static-blue-75": {
        "light": "#ebf3f9",
        "dark": "#ebf4f9"
      },
      "--dsw-static-blue-800": {
        "light": "#2e709f",
        "dark": "#2e799f"
      },
      "--dsw-static-blue-900": {
        "light": "#1d4765",
        "dark": "#1d4d65"
      },
      "--dsw-static-blue-950": {
        "light": "#1c3a4f",
        "dark": "#1c3e4f"
      },
      "--dsw-static-deepseek-100": {
        "light": "#e9f2f8",
        "dark": "#e9f3f8"
      },
      "--dsw-static-deepseek-200": {
        "light": "#ddebf5",
        "dark": "#ddedf5"
      },
      "--dsw-static-deepseek-300": {
        "light": "#c6deef",
        "dark": "#c6e1ef"
      },
      "--dsw-static-deepseek-400": {
        "light": "#98c3e1",
        "dark": "#98c9e1"
      },
      "--dsw-static-deepseek-450": {
        "light": "#7bb2d9",
        "dark": "#7bbad9"
      },
      "--dsw-static-deepseek-500": {
        "light": "#589dcf",
        "dark": "#58a7cf"
      },
      "--dsw-static-deepseek-50": {
        "light": "#f0f6fb",
        "dark": "#f0f7fb"
      },
      "--dsw-static-deepseek-600": {
        "light": "#5284a8",
        "dark": "#528ba8"
      },
      "--dsw-static-deepseek-700-delete": {
        "light": "#386686",
        "dark": "#386c86"
      },
      "--dsw-static-deepseek-800": {
        "light": "#384a57",
        "dark": "#384d57"
      },
      "--dsw-static-deepseek-900": {
        "light": "#2a3740",
        "dark": "#2a3940"
      },
      "--dsw-static-green-100": {
        "light": "#e7f9ed",
        "dark": "#e7f9ed"
      },
      "--dsw-static-green-400": {
        "light": "#237240",
        "dark": "#55ca80"
      },
      "--dsw-static-green-500": {
        "light": "#176534",
        "dark": "#5edb8c"
      },
      "--dsw-static-green-500-a08": {
        "light": "#17653414",
        "dark": "#5edb8c14"
      },
      "--dsw-static-green-500-a12": {
        "light": "#1765341f",
        "dark": "#5edb8c1f"
      },
      "--dsw-static-green-900": {
        "light": "#213e2c",
        "dark": "#213e2c"
      },
      "--dsw-static-neutral-00": {
        "light": "#ffffff",
        "dark": "#ffffff"
      },
      "--dsw-static-neutral-1000": {
        "light": "#000000",
        "dark": "#0b0b0b"
      },
      "--dsw-static-neutral-100": {
        "light": "#f5f5f5",
        "dark": "#f5f5f5"
      },
      "--dsw-static-neutral-150": {
        "light": "#ededed",
        "dark": "#ededed"
      },
      "--dsw-static-neutral-200": {
        "light": "#e4e5e6",
        "dark": "#e4e5e6"
      },
      "--dsw-static-neutral-250": {
        "light": "#dbdcdd",
        "dark": "#dbdcdd"
      },
      "--dsw-static-neutral-300": {
        "light": "#d3d4d5",
        "dark": "#d3d4d5"
      },
      "--dsw-static-neutral-400": {
        "light": "#a2a5a6",
        "dark": "#a2a4a6"
      },
      "--dsw-static-neutral-500": {
        "light": "#818485",
        "dark": "#818385"
      },
      "--dsw-static-neutral-50": {
        "light": "#fafafa",
        "dark": "#fafafa"
      },
      "--dsw-static-neutral-550": {
        "light": "#66696a",
        "dark": "#66686a"
      },
      "--dsw-static-neutral-600": {
        "light": "#545657",
        "dark": "#545657"
      },
      "--dsw-static-neutral-700": {
        "light": "#3b3d3e",
        "dark": "#464849"
      },
      "--dsw-static-neutral-800": {
        "light": "#28292a",
        "dark": "#333435"
      },
      "--dsw-static-neutral-850": {
        "light": "#212223",
        "dark": "#2c2d2e"
      },
      "--dsw-static-neutral-900": {
        "light": "#0f0f0f",
        "dark": "#191a1a"
      },
      "--dsw-static-neutral-bluish-00": {
        "light": "#ffffff",
        "dark": "#ffffff"
      },
      "--dsw-static-neutral-bluish-1000": {
        "light": "#101314",
        "dark": "#1a1d20"
      },
      "--dsw-static-neutral-bluish-100": {
        "light": "#edeff0",
        "dark": "#edeff0"
      },
      "--dsw-static-neutral-bluish-150": {
        "light": "#eceeef",
        "dark": "#eceeef"
      },
      "--dsw-static-neutral-bluish-200": {
        "light": "#e5e9ea",
        "dark": "#e5e8ea"
      },
      "--dsw-static-neutral-bluish-300": {
        "light": "#d0d3d5",
        "dark": "#d0d3d5"
      },
      "--dsw-static-neutral-bluish-400": {
        "light": "#afb4b6",
        "dark": "#afb3b6"
      },
      "--dsw-static-neutral-bluish-500": {
        "light": "#99a1a4",
        "dark": "#999fa4"
      },
      "--dsw-static-neutral-bluish-50": {
        "light": "#f9fafb",
        "dark": "#f9fafb"
      },
      "--dsw-static-neutral-bluish-600": {
        "light": "#83888a",
        "dark": "#83878a"
      },
      "--dsw-static-neutral-bluish-60": {
        "light": "#f5f6f7",
        "dark": "#f9fafb"
      },
      "--dsw-static-neutral-bluish-700": {
        "light": "#62676a",
        "dark": "#6d7175"
      },
      "--dsw-static-neutral-bluish-750": {
        "light": "#444749",
        "dark": "#4f5254"
      },
      "--dsw-static-neutral-bluish-75": {
        "light": "#f2f4f4",
        "dark": "#f2f3f4"
      },
      "--dsw-static-neutral-bluish-800": {
        "light": "#353738",
        "dark": "#404243"
      },
      "--dsw-static-neutral-bluish-850": {
        "light": "#2c2d2e",
        "dark": "#373839"
      },
      "--dsw-static-neutral-bluish-875": {
        "light": "#232424",
        "dark": "#2d2e2f"
      },
      "--dsw-static-neutral-bluish-900": {
        "light": "#1b1c1c",
        "dark": "#262627"
      },
      "--dsw-static-neutral-bluish-950": {
        "light": "#151617",
        "dark": "#202122"
      },
      "--dsw-static-red-100": {
        "light": "#fde3e3",
        "dark": "#fde3e3"
      },
      "--dsw-static-red-400": {
        "light": "#cb1b1b",
        "dark": "#ea6262"
      },
      "--dsw-static-red-400-a12": {
        "light": "#cb1b1b1f",
        "dark": "#ea62621f"
      },
      "--dsw-static-red-500": {
        "light": "#b41919",
        "dark": "#ed7979"
      },
      "--dsw-static-red-50": {
        "light": "#fdf3f3",
        "dark": "#fdf3f3"
      },
      "--dsw-static-red-600": {
        "light": "#9e1515",
        "dark": "#f08f8f"
      },
      "--dsw-static-red-600-a08": {
        "light": "#9e151514",
        "dark": "#f08f8f14"
      },
      "--dsw-static-red-900": {
        "light": "#531010",
        "dark": "#531010"
      }
    },
    "vars": {
      "light": {
        "space": "#e4e9e9",
        "dot": "rgba(51, 59, 62, 0.055)",
        "mark": "#5d6d80"
      },
      "dark": {
        "space": "#101820",
        "dot": "rgba(214, 230, 235, 0.10)",
        "mark": "#a9c6d4"
      }
    }
  },
  {
    "id": "duskrose",
    "label": "暮玫瑰",
    "tokens": {
      "--dsw-alias-bg-base": {
        "light": "#ecdfdb",
        "dark": "#1b1418"
      },
      "--dsw-alias-bg-layer-1": {
        "light": "rgba(252, 252, 252, 0.86)",
        "dark": "rgba(39, 31, 35, 0.72)"
      },
      "--dsw-alias-bg-layer-2": {
        "light": "rgba(250, 249, 249, 0.9)",
        "dark": "rgba(32, 25, 28, 0.82)"
      },
      "--dsw-alias-bg-layer-3": {
        "light": "rgba(254, 253, 253, 0.94)",
        "dark": "rgba(46, 36, 41, 0.78)"
      },
      "--dsw-alias-bg-overlay": {
        "light": "rgba(251, 250, 249, 0.94)",
        "dark": "rgba(30, 24, 27, 0.92)"
      },
      "--dsw-alias-bg-module-platform": {
        "light": "rgba(245, 243, 243, 0.9)",
        "dark": "rgba(37, 29, 33, 0.9)"
      },
      "--dsw-alias-bg-document-preview": {
        "light": "#f4f2f2",
        "dark": "#1d181a"
      },
      "--dsw-alias-bg-document-selection": {
        "light": "rgba(122, 89, 93, 0.24)",
        "dark": "rgba(186, 156, 168, 0.26)"
      },
      "--dsw-alias-bg-skeleton": {
        "light": "rgba(74, 62, 60, 0.06)",
        "dark": "rgba(255, 255, 255, 0.06)"
      },
      "--dsw-alias-bg-multi-select": {
        "light": "rgba(74, 62, 60, 0.05)",
        "dark": "rgba(255, 255, 255, 0.04)"
      },
      "--dsw-alias-bg-mask-1": {
        "light": "rgba(18, 15, 14, 0.28)",
        "dark": "rgba(7, 5, 6, 0.4)"
      },
      "--dsw-alias-bg-mask-2": {
        "light": "rgba(18, 15, 14, 0.14)",
        "dark": "rgba(7, 5, 6, 0.2)"
      },
      "--dsw-alias-bg-mask-3": {
        "light": "rgba(18, 15, 14, 0.5)",
        "dark": "rgba(7, 5, 6, 0.56)"
      },
      "--dsw-alias-bg-mask-drop": {
        "light": "rgba(255, 255, 255, 0.70)",
        "dark": "rgba(18, 14, 16, 0.7)"
      },
      "--dsw-alias-bg-mask-photo": {
        "light": "rgba(0, 0, 0, 0.88)",
        "dark": "rgba(0, 0, 0, 0.88)"
      },
      "--dsw-alias-label-primary": {
        "light": "#3c3236",
        "dark": "#f2e6e6"
      },
      "--dsw-alias-label-primary-dimmed": {
        "light": "#494140",
        "dark": "#d7d0d3"
      },
      "--dsw-alias-label-primary-inverted": {
        "light": "#fafafa",
        "dark": "#141213"
      },
      "--dsw-alias-label-primary-foreground": {
        "light": "#ffffff",
        "dark": "#141213"
      },
      "--dsw-alias-label-primary-bluish": {
        "light": "#2c2727",
        "dark": "#edeaec"
      },
      "--dsw-alias-label-secondary": {
        "light": "#6d6066",
        "dark": "#c9b4b9"
      },
      "--dsw-alias-label-tertiary": {
        "light": "#776b70",
        "dark": "#a89197"
      },
      "--dsw-alias-label-caption": {
        "light": "#928381",
        "dark": "#86757e"
      },
      "--dsw-alias-label-dimmed": {
        "light": "#d9d4d3",
        "dark": "#4f454a"
      },
      "--dsw-alias-label-document-preview": {
        "light": "#494140",
        "dark": "#d7d0d3"
      },
      "--dsw-alias-label-shimmer": {
        "light": "rgba(44, 39, 39, 0.18)",
        "dark": "rgba(237, 234, 236, 0.24)"
      },
      "--dsw-alias-border-l1": {
        "light": "rgba(74, 62, 60, 0.14)",
        "dark": "rgba(203, 191, 197, 0.12)"
      },
      "--dsw-alias-border-l2": {
        "light": "rgba(74, 62, 60, 0.22)",
        "dark": "rgba(203, 191, 197, 0.18)"
      },
      "--dsw-alias-border-l3": {
        "light": "rgba(74, 62, 60, 0.28)",
        "dark": "rgba(203, 191, 197, 0.24)"
      },
      "--dsw-alias-border-l4": {
        "light": "rgba(74, 62, 60, 0.34)",
        "dark": "rgba(203, 191, 197, 0.3)"
      },
      "--dsw-alias-border-l2-darkmode-thin": {
        "light": "rgba(74, 62, 60, 0.22)",
        "dark": "rgba(203, 191, 197, 0.14)"
      },
      "--dsw-alias-border-inverted": {
        "light": "rgba(255, 255, 255, 0.40)",
        "dark": "rgba(0, 0, 0, 0)"
      },
      "--dsw-alias-border-inverted2": {
        "light": "rgba(255, 255, 255, 0.55)",
        "dark": "rgba(0, 0, 0, 0)"
      },
      "--dsw-alias-interactive-bg-hover": {
        "light": "rgba(74, 62, 60, 0.055)",
        "dark": "rgba(219, 211, 215, 0.06)"
      },
      "--dsw-alias-interactive-bg-active": {
        "light": "rgba(74, 62, 60, 0.095)",
        "dark": "rgba(219, 211, 215, 0.1)"
      },
      "--dsw-alias-interactive-bg-hover-solid": {
        "light": "rgba(245, 243, 243, 0.9)",
        "dark": "rgba(39, 31, 35, 0.9)"
      },
      "--dsw-alias-interactive-bg-hover-accent": {
        "light": "rgba(117, 97, 94, 0.1)",
        "dark": "rgba(199, 184, 192, 0.12)"
      },
      "--dsw-alias-interactive-bg-hover-danger": {
        "light": "rgba(117, 96, 93, 0.06)",
        "dark": "rgba(179, 161, 170, 0.1)"
      },
      "--dsw-alias-brand-primary": {
        "light": "#6f4753",
        "dark": "#e0c3c8"
      },
      "--dsw-alias-brand-primary-invert": {
        "light": "#fcf8f9",
        "dark": "#27161d"
      },
      "--dsw-alias-brand-text": {
        "light": "#644c4f",
        "dark": "#efe8eb"
      },
      "--dsw-alias-brand-primary-new-colorprimary-new-color": {
        "light": "#7a595d",
        "dark": "#cfb0bd"
      },
      "--dsw-alias-button-primary-fill": {
        "light": "#644c4f",
        "dark": "#dac3cd"
      },
      "--dsw-alias-button-primary-hover": {
        "light": "#785a5e",
        "dark": "#e5d4db"
      },
      "--dsw-alias-button-primary-dimmed": {
        "light": "rgba(100, 76, 79, 0.16)",
        "dark": "rgba(218, 195, 205, 0.16)"
      },
      "--dsw-alias-button-contrast-fill": {
        "light": "#2e2625",
        "dark": "#eee9ec"
      },
      "--dsw-alias-button-elevated-fill": {
        "light": "#fdfcfc",
        "dark": "rgba(46, 36, 41, 0.9)"
      },
      "--dsw-alias-button-floating-fill": {
        "light": "rgba(254, 253, 253, 0.9)",
        "dark": "rgba(34, 28, 31, 0.9)"
      },
      "--dsw-alias-button-floating-hover": {
        "light": "rgba(249, 247, 247, 0.95)",
        "dark": "rgba(49, 39, 44, 0.95)"
      },
      "--dsw-alias-button-ghost-active-fill": {
        "light": "rgba(74, 62, 60, 0.06)",
        "dark": "rgba(219, 211, 215, 0.06)"
      },
      "--dsw-alias-button-ghost-active-hover": {
        "light": "rgba(74, 62, 60, 0.09)",
        "dark": "rgba(219, 211, 215, 0.09)"
      },
      "--dsw-alias-button-ghost-active-border": {
        "light": "rgba(74, 62, 60, 0.3)",
        "dark": "rgba(203, 191, 197, 0.26)"
      },
      "--dsw-alias-button-info-fill": {
        "light": "#7a595d",
        "dark": "#cfb0bd"
      },
      "--dsw-alias-button-info-hover": {
        "light": "#8e686d",
        "dark": "#dec3ce"
      },
      "--dsw-alias-state-business-primary": {
        "light": "#7a4f5c",
        "dark": "#d3a6ad"
      },
      "--dsw-alias-state-business-tertiary": {
        "light": "rgba(122, 89, 93, 0.1)",
        "dark": "rgba(207, 176, 189, 0.14)"
      },
      "--dsw-alias-state-done-primary": {
        "light": "#7b6694",
        "dark": "#c5b7d9"
      },
      "--dsw-alias-state-error-primary": {
        "light": "#924f40",
        "dark": "#cc9388"
      },
      "--dsw-alias-state-error-secondary": {
        "light": "#a76455",
        "dark": "#d7a79a"
      },
      "--dsw-alias-state-idle-primary": {
        "light": "#bac1cb",
        "dark": "#4e5564"
      },
      "--dsw-alias-state-success-primary": {
        "light": "#4e6a57",
        "dark": "#8db098"
      },
      "--dsw-alias-state-success-secondary": {
        "light": "#64836f",
        "dark": "#78a58d"
      },
      "--dsw-alias-state-success-tertiary": {
        "light": "rgba(78, 106, 87, 0.12)",
        "dark": "rgba(141, 176, 152, 0.14)"
      },
      "--dsw-alias-state-warn-primary": {
        "light": "#816035",
        "dark": "#caad7d"
      },
      "--dsw-alias-state-warn-secondary": {
        "light": "#987340",
        "dark": "#d2b98e"
      },
      "--dsw-alias-state-warn-tertiary": {
        "light": "rgba(129, 96, 53, 0.12)",
        "dark": "rgba(202, 173, 125, 0.14)"
      },
      "--dsw-alias-state-warn-label": {
        "light": "#816035",
        "dark": "#caad7d"
      },
      "--dsw-alias-link": {
        "light": "#7a4f5c",
        "dark": "#d3a6ad"
      },
      "--dsw-alias-menu-icon": {
        "light": "#634b4e",
        "dark": "#bea5af"
      },
      "--dsw-focus-ring-width": {
        "light": "2px",
        "dark": "2px"
      },
      "--dsw-alias-markdown-code-block": {
        "light": "rgba(241, 238, 238, 0.92)",
        "dark": "rgba(21, 16, 18, 0.72)"
      },
      "--dsw-alias-markdown-code-block-banner": {
        "light": "rgba(238, 234, 234, 0.94)",
        "dark": "rgba(26, 20, 23, 0.86)"
      },
      "--dsw-alias-markdown-code-segment-selected": {
        "light": "#ffffff",
        "dark": "#33282e"
      },
      "--dsw-alias-markdown-code-segment-unselected": {
        "light": "rgba(243, 241, 241, 0.9)",
        "dark": "rgba(26, 20, 23, 0.7)"
      },
      "--dsw-alias-markdown-inline-code": {
        "light": "rgba(238, 234, 234, 0.9)",
        "dark": "rgba(255, 255, 255, 0.06)"
      },
      "--dsw-alias-markdown-placeholder": {
        "light": "rgba(243, 241, 241, 0.8)",
        "dark": "rgba(255, 255, 255, 0.05)"
      },
      "--dsw-alias-markdown-tag": {
        "light": "rgba(243, 241, 241, 0.9)",
        "dark": "rgba(255, 255, 255, 0.06)"
      },
      "--dsw-alias-markdown-citation": {
        "light": "rgba(122, 89, 93, 0.1)",
        "dark": "rgba(207, 176, 189, 0.12)"
      },
      "--dsw-alias-turn-trigger-bg": {
        "light": "rgba(241, 238, 238, 0.92)",
        "dark": "rgba(21, 16, 18, 0.72)"
      },
      "--dsw-alias-turn-trigger-bg-hover": {
        "light": "rgba(74, 62, 60, 0.055)",
        "dark": "rgba(219, 211, 215, 0.06)"
      },
      "--dsw-specific-menu": {
        "light": "rgba(251, 250, 250, 0.88)",
        "dark": "rgba(23, 19, 21, 0.9)"
      },
      "--dsw-alias-menu-group-header-fill": {
        "light": "rgba(251, 250, 250, 0.96)",
        "dark": "rgba(23, 19, 21, 0.97)"
      },
      "--dsw-alias-tooltip-bg": {
        "light": "rgba(46, 38, 37, 0.94)",
        "dark": "rgba(41, 33, 37, 0.96)"
      },
      "--dsw-alias-toast-bg": {
        "light": "rgba(46, 38, 37, 0.94)",
        "dark": "rgba(41, 33, 37, 0.96)"
      },
      "--dsw-alias-toast-label": {
        "light": "#fbfaf9",
        "dark": "#eee9ec"
      },
      "--dsw-alias-switch-thumb": {
        "light": "#ffffff",
        "dark": "#c7b8c0"
      },
      "--dsw-menu-backdrop-filter": {
        "light": "blur(14px) saturate(120%)",
        "dark": "blur(14px) saturate(120%)"
      },
      "--dsw-mask-blur": {
        "light": "none",
        "dark": "none"
      },
      "--dsw-specific-sidebar-fill": {
        "light": "rgba(248, 247, 247, 0.72)",
        "dark": "rgba(18, 14, 16, 0.66)"
      },
      "--dsw-specific-sidebar-nav-item-active": {
        "light": "rgba(97, 81, 79, 0.07)",
        "dark": "rgba(180, 162, 171, 0.1)"
      },
      "--dsw-specific-sidebar-nav-item-active-accent": {
        "light": "rgba(117, 97, 94, 0.1)",
        "dark": "rgba(199, 184, 192, 0.12)"
      },
      "--dsw-specific-input-major": {
        "light": "rgba(254, 253, 253, 0.86)",
        "dark": "rgba(28, 22, 25, 0.84)"
      },
      "--dsw-specific-bubble": {
        "light": "rgba(244, 228, 228, 0.88)",
        "dark": "rgba(55, 35, 43, 0.62)"
      },
      "--dsw-specific-bubble-highlight": {
        "light": "rgba(241, 231, 232, 0.92)",
        "dark": "rgba(71, 49, 58, 0.72)"
      },
      "--dsw-specific-selector": {
        "light": "rgba(245, 243, 243, 0.86)",
        "dark": "rgba(39, 31, 35, 0.86)"
      },
      "--dsw-specific-tip": {
        "light": "rgba(246, 244, 244, 0.9)",
        "dark": "rgba(37, 29, 33, 0.9)"
      },
      "--dsw-specific-login-input": {
        "light": "#f4f2f2",
        "dark": "#1d181a"
      },
      "--dsw-alias-scrollbar-bg-l1": {
        "light": "rgba(74, 62, 60, 0.2)",
        "dark": "rgba(203, 191, 197, 0.18)"
      },
      "--dsw-alias-scrollbar-bg-l2": {
        "light": "rgba(74, 62, 60, 0.24)",
        "dark": "rgba(203, 191, 197, 0.22)"
      },
      "--dsw-alias-scrollbar-hover-l1": {
        "light": "rgba(74, 62, 60, 0.34)",
        "dark": "rgba(203, 191, 197, 0.32)"
      },
      "--dsw-alias-scrollbar-hover-l2": {
        "light": "rgba(74, 62, 60, 0.38)",
        "dark": "rgba(203, 191, 197, 0.36)"
      },
      "--ds-ease-in-out": {
        "light": "cubic-bezier(0.22, 0.61, 0.36, 1)",
        "dark": "cubic-bezier(0.22, 0.61, 0.36, 1)"
      },
      "--ds-transition-duration": {
        "light": "180ms",
        "dark": "180ms"
      },
      "--ds-transition-duration-fast": {
        "light": "120ms",
        "dark": "120ms"
      },
      "--ds-transition-duration-slow": {
        "light": "300ms",
        "dark": "300ms"
      },
      "--dsw-radius-xs": {
        "light": "2px",
        "dark": "2px"
      },
      "--dsw-radius-sm": {
        "light": "3px",
        "dark": "3px"
      },
      "--dsw-radius-md": {
        "light": "4px",
        "dark": "4px"
      },
      "--dsw-radius-lg": {
        "light": "6px",
        "dark": "6px"
      },
      "--dsw-radius-xl": {
        "light": "8px",
        "dark": "8px"
      },
      "--dsw-radius-panel": {
        "light": "10px",
        "dark": "10px"
      },
      "--dsw-shadow-lv1": {
        "light": "0 1px 2px rgba(36, 40, 47, 0.05)",
        "dark": "0 1px 2px rgba(0, 0, 0, 0.24)"
      },
      "--dsw-shadow-lv1-blur": {
        "light": "0 2px 8px rgba(36, 40, 47, 0.04)",
        "dark": "0 2px 8px rgba(0, 0, 0, 0.18)"
      },
      "--dsw-shadow-lv2": {
        "light": "0 6px 20px rgba(36, 40, 47, 0.07), 0 1px 2px rgba(36, 40, 47, 0.05)",
        "dark": "0 6px 22px rgba(0, 0, 0, 0.34), 0 1px 2px rgba(0, 0, 0, 0.24)"
      },
      "--dsw-shadow-lv3": {
        "light": "0 20px 56px rgba(36, 40, 47, 0.12), 0 2px 8px rgba(36, 40, 47, 0.06)",
        "dark": "0 22px 60px rgba(0, 0, 0, 0.46), 0 2px 8px rgba(0, 0, 0, 0.30)"
      },
      "--dsw-elevation-stroke-color": {
        "light": "rgba(74, 62, 60, 0.18)",
        "dark": "rgba(203, 191, 197, 0.18)"
      },
      "--dsw-font-markdown-h1-font-family": {
        "light": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif",
        "dark": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif"
      },
      "--dsw-font-markdown-h2-font-family": {
        "light": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif",
        "dark": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif"
      },
      "--dsw-font-markdown-h3-font-family": {
        "light": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif",
        "dark": "\"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif"
      },
      "--shiki-token-constant": {
        "light": "#998462",
        "dark": "#d1bc97"
      },
      "--shiki-token-string": {
        "light": "#44686f",
        "dark": "#94b8bf"
      },
      "--shiki-token-comment": {
        "light": "#938380",
        "dark": "#88737e"
      },
      "--shiki-token-keyword": {
        "light": "#915c63",
        "dark": "#d2adbc"
      },
      "--shiki-token-parameter": {
        "light": "#806639",
        "dark": "#d1bc97"
      },
      "--shiki-token-function": {
        "light": "#97636a",
        "dark": "#e0c0cd"
      },
      "--shiki-token-string-expression": {
        "light": "#44686f",
        "dark": "#94b8bf"
      },
      "--shiki-token-punctuation": {
        "light": "#5e5250",
        "dark": "#b1a3aa"
      },
      "--shiki-token-link": {
        "light": "#7f545a",
        "dark": "#d2adbc"
      },
      "--dsw-static-amber-100": {
        "light": "#fdf5e8",
        "dark": "#fdf5e8"
      },
      "--dsw-static-amber-400": {
        "light": "#885a0c",
        "dark": "#edaa3b"
      },
      "--dsw-static-amber-500": {
        "light": "#704a0a",
        "dark": "#efb553"
      },
      "--dsw-static-amber-600": {
        "light": "#503211",
        "dark": "#e3af78"
      },
      "--dsw-static-amber-900": {
        "light": "#2e2618",
        "dark": "#2e2618"
      },
      "--dsw-static-blue-100": {
        "light": "#f7e2e5",
        "dark": "#f7e2eb"
      },
      "--dsw-static-blue-300": {
        "light": "#e6aab2",
        "dark": "#e6aac3"
      },
      "--dsw-static-blue-400": {
        "light": "#da808c",
        "dark": "#da80a5"
      },
      "--dsw-static-blue-450": {
        "light": "#d5707d",
        "dark": "#d5709a"
      },
      "--dsw-static-blue-500": {
        "light": "#d1606f",
        "dark": "#d1608f"
      },
      "--dsw-static-blue-50": {
        "light": "#fbf3f4",
        "dark": "#fbf3f6"
      },
      "--dsw-static-blue-50p": {
        "light": "#faeff0",
        "dark": "#faeff4"
      },
      "--dsw-static-blue-600": {
        "light": "#c94758",
        "dark": "#c9477d"
      },
      "--dsw-static-blue-75": {
        "light": "#f9ebed",
        "dark": "#f9ebf1"
      },
      "--dsw-static-blue-800": {
        "light": "#9f2e3d",
        "dark": "#9f2e5d"
      },
      "--dsw-static-blue-900": {
        "light": "#651d27",
        "dark": "#651d3b"
      },
      "--dsw-static-blue-950": {
        "light": "#511a21",
        "dark": "#511a31"
      },
      "--dsw-static-deepseek-100": {
        "light": "#f8e9eb",
        "dark": "#f8e9ef"
      },
      "--dsw-static-deepseek-200": {
        "light": "#f5dde0",
        "dark": "#f5dde7"
      },
      "--dsw-static-deepseek-300": {
        "light": "#efc6cc",
        "dark": "#efc6d7"
      },
      "--dsw-static-deepseek-400": {
        "light": "#e198a2",
        "dark": "#e198b6"
      },
      "--dsw-static-deepseek-450": {
        "light": "#d97b88",
        "dark": "#d97ba2"
      },
      "--dsw-static-deepseek-500": {
        "light": "#cf5868",
        "dark": "#cf588a"
      },
      "--dsw-static-deepseek-50": {
        "light": "#fbf0f2",
        "dark": "#fbf0f5"
      },
      "--dsw-static-deepseek-600": {
        "light": "#ad4d5a",
        "dark": "#ad4d75"
      },
      "--dsw-static-deepseek-700-delete": {
        "light": "#8a343f",
        "dark": "#8a3458"
      },
      "--dsw-static-deepseek-800": {
        "light": "#59363b",
        "dark": "#593645"
      },
      "--dsw-static-deepseek-900": {
        "light": "#41292c",
        "dark": "#412933"
      },
      "--dsw-static-green-100": {
        "light": "#e7f9ed",
        "dark": "#e7f9ed"
      },
      "--dsw-static-green-400": {
        "light": "#226e3e",
        "dark": "#55ca80"
      },
      "--dsw-static-green-500": {
        "light": "#166131",
        "dark": "#5edb8c"
      },
      "--dsw-static-green-500-a08": {
        "light": "#16613114",
        "dark": "#5edb8c14"
      },
      "--dsw-static-green-500-a12": {
        "light": "#1661311f",
        "dark": "#5edb8c1f"
      },
      "--dsw-static-green-900": {
        "light": "#213e2c",
        "dark": "#213e2c"
      },
      "--dsw-static-neutral-00": {
        "light": "#ffffff",
        "dark": "#ffffff"
      },
      "--dsw-static-neutral-1000": {
        "light": "#000000",
        "dark": "#0c0b0b"
      },
      "--dsw-static-neutral-100": {
        "light": "#f5f5f5",
        "dark": "#f5f5f5"
      },
      "--dsw-static-neutral-150": {
        "light": "#ededed",
        "dark": "#ededed"
      },
      "--dsw-static-neutral-200": {
        "light": "#e6e5e4",
        "dark": "#e6e4e5"
      },
      "--dsw-static-neutral-250": {
        "light": "#dddbdb",
        "dark": "#dddbdc"
      },
      "--dsw-static-neutral-300": {
        "light": "#d5d3d3",
        "dark": "#d5d3d4"
      },
      "--dsw-static-neutral-400": {
        "light": "#a6a3a2",
        "dark": "#a6a2a4"
      },
      "--dsw-static-neutral-500": {
        "light": "#868180",
        "dark": "#868083"
      },
      "--dsw-static-neutral-50": {
        "light": "#fafafa",
        "dark": "#fafafa"
      },
      "--dsw-static-neutral-550": {
        "light": "#6a6666",
        "dark": "#6a6668"
      },
      "--dsw-static-neutral-600": {
        "light": "#575454",
        "dark": "#575456"
      },
      "--dsw-static-neutral-700": {
        "light": "#3e3c3b",
        "dark": "#494748"
      },
      "--dsw-static-neutral-800": {
        "light": "#2a2828",
        "dark": "#363334"
      },
      "--dsw-static-neutral-850": {
        "light": "#232121",
        "dark": "#2e2d2d"
      },
      "--dsw-static-neutral-900": {
        "light": "#0f0f0f",
        "dark": "#1b1a1a"
      },
      "--dsw-static-neutral-bluish-00": {
        "light": "#ffffff",
        "dark": "#ffffff"
      },
      "--dsw-static-neutral-bluish-1000": {
        "light": "#141110",
        "dark": "#211a1d"
      },
      "--dsw-static-neutral-bluish-100": {
        "light": "#f0eded",
        "dark": "#f0edef"
      },
      "--dsw-static-neutral-bluish-150": {
        "light": "#efecec",
        "dark": "#efecee"
      },
      "--dsw-static-neutral-bluish-200": {
        "light": "#eae6e5",
        "dark": "#eae5e8"
      },
      "--dsw-static-neutral-bluish-300": {
        "light": "#d5d1d0",
        "dark": "#d5d0d3"
      },
      "--dsw-static-neutral-bluish-400": {
        "light": "#b6b0af",
        "dark": "#b6afb3"
      },
      "--dsw-static-neutral-bluish-500": {
        "light": "#a49b99",
        "dark": "#a4999f"
      },
      "--dsw-static-neutral-bluish-50": {
        "light": "#fbfaf9",
        "dark": "#fbf9fa"
      },
      "--dsw-static-neutral-bluish-600": {
        "light": "#8a8483",
        "dark": "#8a8387"
      },
      "--dsw-static-neutral-bluish-60": {
        "light": "#f7f5f5",
        "dark": "#fbf9fa"
      },
      "--dsw-static-neutral-bluish-700": {
        "light": "#696363",
        "dark": "#756e71"
      },
      "--dsw-static-neutral-bluish-750": {
        "light": "#494544",
        "dark": "#554f52"
      },
      "--dsw-static-neutral-bluish-75": {
        "light": "#f4f2f2",
        "dark": "#f4f2f3"
      },
      "--dsw-static-neutral-bluish-800": {
        "light": "#383635",
        "dark": "#434142"
      },
      "--dsw-static-neutral-bluish-850": {
        "light": "#2e2c2c",
        "dark": "#3a3738"
      },
      "--dsw-static-neutral-bluish-875": {
        "light": "#242323",
        "dark": "#302e2f"
      },
      "--dsw-static-neutral-bluish-900": {
        "light": "#1c1b1b",
        "dark": "#282627"
      },
      "--dsw-static-neutral-bluish-950": {
        "light": "#171515",
        "dark": "#232021"
      },
      "--dsw-static-red-100": {
        "light": "#fde3e3",
        "dark": "#fde3e3"
      },
      "--dsw-static-red-400": {
        "light": "#c21919",
        "dark": "#ea6262"
      },
      "--dsw-static-red-400-a12": {
        "light": "#c219191f",
        "dark": "#ea62621f"
      },
      "--dsw-static-red-500": {
        "light": "#ab1717",
        "dark": "#ed7979"
      },
      "--dsw-static-red-50": {
        "light": "#fdf3f3",
        "dark": "#fdf3f3"
      },
      "--dsw-static-red-600": {
        "light": "#951414",
        "dark": "#f08f8f"
      },
      "--dsw-static-red-600-a08": {
        "light": "#95141414",
        "dark": "#f08f8f14"
      },
      "--dsw-static-red-900": {
        "light": "#531010",
        "dark": "#531010"
      }
    },
    "vars": {
      "light": {
        "space": "#ecdfdb",
        "dot": "rgba(60, 50, 54, 0.055)",
        "mark": "#7a4f5c"
      },
      "dark": {
        "space": "#1b1418",
        "dot": "rgba(242, 214, 214, 0.10)",
        "mark": "#d3a6ad"
      }
    }
  }
];
    const CSS = "/* ============================================================================\n   AveritA's DSH —— 主题核心样式（令牌 / 空间 / 外壳 / 品牌位 / 设置面板）\n   组件在 src/components/<id>/style.css，由 scripts/build.mjs 按 manifest 顺序\n   拼到本文件之后。改产物不要手改 client.js。\n   ========================================================================== */\n\n/* 兜底色：没拿到 data-av-theme 时按 averita 走。 */\n:root {\n  --av-space: #e5eaf0;\n  --av-dot: rgba(55, 63, 79, 0.055);\n  --av-mark: #61567d;\n  /* JS 直接覆写这三枚（滑杆无级），默认 1 / 1 / 0.65。 */\n  --av-scale: 1;\n  --av-depth: 1;\n  --av-breathe-min: 0.65;\n  --av-serif: \"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif;\n  /* 装饰线：全部从 --av-mark 派生，换主题自动跟；深色单独压一档。 */\n  --av-line: color-mix(in srgb, var(--av-mark) 36%, transparent);\n  --av-line-soft: color-mix(in srgb, var(--av-mark) 18%, transparent);\n  --av-wash: color-mix(in srgb, var(--av-mark) 7%, transparent);\n}\n\nhtml:has(body[data-ds-dark-theme]) {\n  --av-line: color-mix(in srgb, var(--av-mark) 26%, transparent);\n  --av-line-soft: color-mix(in srgb, var(--av-mark) 13%, transparent);\n  --av-wash: color-mix(in srgb, var(--av-mark) 8%, transparent);\n}\n\n/* ── 空间 ─────────────────────────────────────────────────────────────── */\n\nhtml {\n  background: var(--av-space);\n}\n\n/* 底色从 body 交给 html，点阵才透得出来。 */\nbody {\n  background-color: transparent !important;\n}\n\n/* ── 让外壳透出背景 ─────────────────────────────────────────────────────\n   DSH 0.2.1-rc.3 的 AppFrame / centerCol / ConversationRoot 都用\n   --dsw-alias-bg-base 铺满整块区域，会盖住点阵。这里用 CSS Modules 的\n   稳定后缀 + :has 结构定位（不依赖哈希前缀），只把这些外壳的底色置空；\n   组件自己的 bg-base 填充（代码块、粘性表头等）不受影响。\n   升级 DSH 后若背景又变纯色，先回来检查这几个后缀名。 */\n[class*=\"_frame\"]:has([class*=\"_centerCol\"]),\n[class*=\"_centerCol\"],\n[class*=\"_root\"]:has([class*=\"_composerSeat\"]) {\n  background-color: transparent !important;\n}\n\n\n/* 缩放 / 浓淡：滑杆直接写 html 上的 --av-scale / --av-depth，\n   取值 0.5–4× / 30%–400%，不再走离散属性。\n   点阵时缩放格距、浓淡乘墨色 alpha；流光时分别当场的缩放与浓度。 */\n\n/* ── 细节 ─────────────────────────────────────────────────────────────── */\n\n/* 标题走衬线，界面与正文的字交给 DSH 的字体设置。 */\nbody :is(h1, h2, h3) {\n  letter-spacing: 0.01em;\n}\n\n/* 菜单：发丝边 + 更轻的模糊（窗口上的毛玻璃只此一处）。 */\n[data-menu-material] {\n  border: 0.5px solid var(--dsw-alias-border-l3);\n}\n\n/* 品牌位：照个人站 toolstar.ts 的正等轴投影画的三轴正交六芒星 + 衬线字标。\n   星由 JS 每帧重画：六支按深度取 fill-opacity，中心一枚小圆收平。 */\n.av-brand-mark {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  color: var(--av-mark);\n}\n\n.av-brand-mark svg {\n  display: block;\n  width: 32px;\n  height: 32px;\n  overflow: visible;\n}\n\n.av-star-hub {\n  fill: color-mix(in srgb, currentColor 32%, #ffffff);\n}\n\n.av-brand-name {\n  display: inline-block;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: var(--av-serif);\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0.045em;\n  white-space: nowrap;\n  color: var(--dsw-alias-label-primary);\n  transform: translateY(0.5px);\n}\n\n/* ── 设置 → 主题 ──────────────────────────────────────────────────────── */\n.av-theme-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 2px 0 6px;\n}\n\n.av-theme-head {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n}\n\n.av-theme-title {\n  font-family: var(--av-serif);\n  font-size: 15px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.av-theme-sub {\n  font-size: 11px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n/* 设置分组：小标题 + 右侧发丝线，把面板切成品牌 / 背景 / 装饰几段。 */\n.av-theme-group {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 2px;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.08em;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.av-theme-group::after {\n  content: \"\";\n  flex: 1;\n  height: 0.5px;\n  background: var(--dsw-alias-border-l1);\n}\n\n.av-theme-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.av-theme-card {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border: 0.5px solid var(--dsw-alias-border-l2);\n  border-radius: var(--dsw-radius-lg);\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  cursor: pointer;\n  text-align: left;\n}\n\n.av-theme-card:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.av-theme-card--on {\n  border-color: var(--dsw-alias-brand-primary);\n}\n\n.av-theme-chip {\n  flex: none;\n  width: 30px;\n  height: 30px;\n  border: 0.5px solid var(--dsw-alias-border-l2);\n  border-radius: 8px;\n}\n\n.av-theme-label {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.av-theme-state {\n  font-size: 11px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n/* 滑杆右侧的读数：等宽数字，拖动时行不跳。 */\n.av-theme-state--num {\n  min-width: 148px;\n  font-variant-numeric: tabular-nums;\n}\n\n/* 滑杆行：标签定宽，缩放 / 浓淡 / 呼吸下限的轨道左边对齐。 */\n.av-deco-row--range .av-theme-sub {\n  flex: 0 0 56px;\n  white-space: nowrap;\n}\n\n/* 背景滑杆：轨道 3px，已选段用 --av-mark，滑块是主题色描边的圆点。\n   填充比例由 React 写进 --av-fill（0%–100%）。 */\n.av-range {\n  flex: none;\n  width: 200px;\n  height: 18px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n}\n\n.av-range::-webkit-slider-runnable-track {\n  height: 3px;\n  border-radius: 999px;\n  background: linear-gradient(\n    to right,\n    var(--av-mark) 0 var(--av-fill, 0%),\n    var(--dsw-alias-border-l2) var(--av-fill, 0%) 100%\n  );\n}\n\n.av-range::-webkit-slider-thumb {\n  width: 12px;\n  height: 12px;\n  margin-top: -4.5px;\n  border: 1px solid var(--av-mark);\n  border-radius: 50%;\n  background: var(--dsw-alias-bg-layer-1);\n  box-shadow: 0 1px 2px rgb(0 0 0 / 0.14);\n  appearance: none;\n  -webkit-appearance: none;\n  transition: transform 120ms ease;\n}\n\n.av-range:active::-webkit-slider-thumb {\n  transform: scale(1.12);\n}\n\n.av-range:focus-visible {\n  outline: 2px solid var(--dsw-alias-brand-primary);\n  outline-offset: 3px;\n  border-radius: 999px;\n}\n\n/* Firefox：轨道 / 已选段 / 滑块分开画。 */\n.av-range::-moz-range-track {\n  height: 3px;\n  border-radius: 999px;\n  background: var(--dsw-alias-border-l2);\n}\n\n.av-range::-moz-range-progress {\n  height: 3px;\n  border-radius: 999px;\n  background: var(--av-mark);\n}\n\n.av-range::-moz-range-thumb {\n  width: 11px;\n  height: 11px;\n  border: 1px solid var(--av-mark);\n  border-radius: 50%;\n  background: var(--dsw-alias-bg-layer-1);\n  box-shadow: 0 1px 2px rgb(0 0 0 / 0.14);\n}\n\n.av-range:active::-moz-range-thumb {\n  transform: scale(1.12);\n}\n\n/* 开关行：装饰 / 底纹 / 星形 / 动效共用 */\n.av-deco-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  padding-top: 2px;\n}\n\n.av-deco-chip {\n  padding: 4px 10px;\n  border: 0.5px solid var(--dsw-alias-border-l2);\n  border-radius: var(--dsw-radius-lg);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.av-deco-chip:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.av-deco-chip--on {\n  border-color: var(--dsw-alias-brand-primary);\n  background: var(--av-wash);\n  color: var(--dsw-alias-label-primary);\n}\n\n/* 字符开关：单字筹码，等宽 + 固定宽度，四枚排齐。 */\n.av-deco-chip--glyph {\n  min-width: 28px;\n  padding: 4px 0;\n  font-family: Consolas, \"Cascadia Code\", monospace;\n  font-size: 13px;\n  line-height: 1;\n  text-align: center;\n}\n\n/* 字标输入：单行文本框，标签与滑杆行同宽，过长时收窄。 */\n.av-deco-row--text .av-theme-sub {\n  flex: 0 0 56px;\n  white-space: nowrap;\n}\n\n.av-text-input {\n  flex: 1 1 180px;\n  min-width: 120px;\n  max-width: 280px;\n  padding: 5px 9px;\n  border: 0.5px solid var(--dsw-alias-border-l2);\n  border-radius: var(--dsw-radius-lg);\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  font-family: var(--av-serif);\n  font-size: 13px;\n  line-height: 18px;\n  transition:\n    border-color var(--ds-transition-duration-fast) var(--ds-ease-in-out),\n    box-shadow var(--ds-transition-duration-fast) var(--ds-ease-in-out);\n}\n\n.av-text-input::placeholder {\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.av-text-input:focus {\n  outline: none;\n  border-color: var(--dsw-alias-brand-primary);\n  box-shadow: 0 0 0 2px var(--av-wash);\n}\n\n.av-text-input:focus-visible {\n  outline: 2px solid var(--dsw-alias-brand-primary);\n  outline-offset: 2px;\n}\n\n\n/* ═══ component: dots · 点阵底纹 ═══ */\n/* ============================================================================\n   组件 · 点阵底纹\n   ----------------------------------------------------------------------------\n   挂 html[data-av-dots=\"square\" | \"char\" | \"wall\"] 换颗粒；不挂属性 = 圆点。\n   字符再挂 html[data-av-glyph=\"plus\" | \"hash\" | \"star\" | \"cross\"]；\n   动效挂 html[data-av-motion=\"breathe\" | \"drift\" | \"off\"]；\n   html[data-av-bg=\"flow\" | \"off\"] 时整层不画。\n\n   变量：--av-dot（墨色）· --av-scale（格距倍数）·\n         --av-depth（浓淡乘数）· --av-breathe-min（呼吸低谷）\n   存储：不存；由插件把选择写成属性 / html 行内变量。\n   宿主选择器：只用 body::before，不插 DOM。\n\n   单独复用：复制本文件即可，下面兜底只在没装主题时生效。\n   要让整块底色透出来，还需要给 html 铺 --av-space，并把 AppFrame /\n   centerCol / ConversationRoot 的底色置空（见 theme.css「让外壳透出背景」）。\n   ========================================================================== */\n\n/* 兜底：没有 data-av-theme 时用昼雾 · 靛夜的值。 */\nhtml:not([data-av-theme]) {\n  --av-space: #e5eaf0;\n  --av-dot: rgba(55, 63, 79, 0.055);\n  --av-scale: 1;\n  --av-depth: 1;\n  --av-breathe-min: 0.65;\n}\n\nhtml:not([data-av-theme]):has(body[data-ds-dark-theme]) {\n  --av-space: #0e131e;\n  --av-dot: rgba(217, 230, 243, 0.085);\n}\n\n/* ── 底纹：一层 fixed 伪元素，四种颗粒共用 ──────────────────────────────\n   圆点 / 方块 / 字符 / 字符墙都画成 SVG 遮罩（前三种 10px 一格，字符墙\n   120×80 一块），再和中心渐隐遮罩相交；颜色由填充色给，所以换主题 / 深浅\n   自动跟。缩放 = 缩放遮罩 tile，浓淡 = 乘在墨色 alpha 上。\n   开关在「设置 → 主题 → 背景」，落成 html[data-av-dots] / [data-av-glyph] /\n   [data-av-motion]，缩放 / 浓淡直接写 html 行内变量。 */\n\nbody::before {\n  /* 中心压淡的渐隐，四种颗粒共用。 */\n  --av-vig: radial-gradient(ellipse 82% 74% at 52% 42%, rgba(0, 0, 0, 0.5) 0%, #000 78%);\n  /* 默认颗粒：圆点（r 1.5px ≈ 原来的 1.4px 点 + 一点渐隐边）。 */\n  --av-tile: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Ccircle cx='5' cy='5' r='1.5' fill='%23000'/%3E%3C/svg%3E\");\n  --av-tile-size: calc(10px * var(--av-scale));\n  content: \"\";\n  position: fixed;\n  /* 留出漂移余量：最大 64px / 36px 乘缩放，四边各留 80px 乘缩放。 */\n  inset: calc(-80px * var(--av-scale));\n  z-index: -1;\n  pointer-events: none;\n  /* 墨色按浓淡乘 alpha；不支持相对色语法的内核退回主题原色。 */\n  background-color: var(--av-dot);\n  background-color: rgb(from var(--av-dot) r g b / calc(alpha * var(--av-depth)));\n  -webkit-mask-image: var(--av-tile), var(--av-vig);\n  mask-image: var(--av-tile), var(--av-vig);\n  -webkit-mask-size: var(--av-tile-size), 100% 100%;\n  mask-size: var(--av-tile-size), 100% 100%;\n  -webkit-mask-repeat: repeat, no-repeat;\n  mask-repeat: repeat, no-repeat;\n  -webkit-mask-composite: source-in, source-over;\n  mask-composite: intersect, add;\n  animation:\n    avDotDrift 60s linear infinite alternate,\n    avDotBreathe 30s ease-in-out infinite alternate;\n  will-change: transform, opacity;\n  transform: translateZ(0);\n}\n\n/* 漂移幅度跟着缩放走，不然放大后看着漂得更慢。 */\n@keyframes avDotDrift {\n  from { transform: translate3d(calc(-64px * var(--av-scale)), calc(-36px * var(--av-scale)), 0); }\n  to   { transform: translate3d(calc(64px * var(--av-scale)), calc(36px * var(--av-scale)), 0); }\n}\n\n@keyframes avDotBreathe {\n  from { opacity: var(--av-breathe-min, 0.65); }\n  to   { opacity: 1; }\n}\n\n/* 动效档：默认（both / 不挂属性）漂移 + 呼吸；也可只留一种或全停。\n   这里只重写 animation，不动别的样式。 */\nhtml[data-av-motion=\"breathe\"] body::before {\n  animation: avDotBreathe 30s ease-in-out infinite alternate;\n}\n\nhtml[data-av-motion=\"drift\"] body::before {\n  animation: avDotDrift 60s linear infinite alternate;\n}\n\nhtml[data-av-motion=\"off\"] body::before {\n  animation: none;\n  will-change: auto;\n  transform: none;\n}\n\n/* 窗口不在前台时暂停；减少动效时直接停住。 */\nhtml[data-av-idle] body::before {\n  animation-play-state: paused;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  body::before {\n    animation: none !important;\n  }\n}\n\n/* ── 颗粒：方块 / 字符 / 字符墙（圆点就是上面的默认值） ────────────────── */\n\n/* 方块：2.8px，与圆点同一个包围盒。 */\nhtml[data-av-dots=\"square\"] body::before {\n  --av-tile: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Crect x='3.6' y='3.6' width='2.8' height='2.8' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n/* 字符：10px 格子里一个等宽字符；字号按墨量调过，和圆点 / 方块同一档。 */\nhtml[data-av-dots=\"char\"] body::before {\n  --av-tile: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Ctext x='5' y='7.2' font-family='Consolas,Segoe UI Symbol,monospace' font-size='8' text-anchor='middle' fill='%23000'%3E%2B%3C/text%3E%3C/svg%3E\");\n}\n\nhtml[data-av-dots=\"char\"][data-av-glyph=\"hash\"] body::before {\n  --av-tile: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Ctext x='5' y='7.2' font-family='Consolas,Segoe UI Symbol,monospace' font-size='6.5' text-anchor='middle' fill='%23000'%3E%23%3C/text%3E%3C/svg%3E\");\n}\n\nhtml[data-av-dots=\"char\"][data-av-glyph=\"star\"] body::before {\n  --av-tile: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Ctext x='5' y='7.2' font-family='Consolas,Segoe UI Symbol,monospace' font-size='8' text-anchor='middle' fill='%23000'%3E%2A%3C/text%3E%3C/svg%3E\");\n}\n\nhtml[data-av-dots=\"char\"][data-av-glyph=\"cross\"] body::before {\n  --av-tile: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Ctext x='5' y='7.2' font-family='Consolas,Segoe UI Symbol,monospace' font-size='8' text-anchor='middle' fill='%23000'%3E%C3%97%3C/text%3E%3C/svg%3E\");\n}\n\n/* 字符墙：120×80 一块、8 行密排符号；fill-opacity 压过半，整体比圆点还淡一点。 */\nhtml[data-av-dots=\"wall\"] body::before {\n  --av-tile: url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27120%27%20height%3D%2780%27%3E%3Cg%20fill%3D%27%2523000%27%20fill-opacity%3D%270.55%27%20font-family%3D%27Consolas%2CSegoe%20UI%20Symbol%2Cmonospace%27%20font-size%3D%277%27%3E%3Ctext%20x%3D%270%27%20y%3D%277%27%3E%20-%2C%3B%25%28%28%3A%7C%28%3B%2C*%3B*%3A~%2F%21%5E..%3D%3F~%23~%3C%2Ftext%3E%3Ctext%20x%3D%270%27%20y%3D%2717%27%3E*%2F~%2F%2B%24%3F%5B%7C*%5D%5C%7B%3D*-%3A%3A%24%23.%2F%3F%40%7B%28%23%3C%2Ftext%3E%3Ctext%20x%3D%270%27%20y%3D%2727%27%3E%20%20%20%3F%2B%24_%7C*%28%2F_%5D~%23%2B-%3B*%5D%7C~%2F%28%5D_%5D%3C%2Ftext%3E%3Ctext%20x%3D%270%27%20y%3D%2737%27%3E%3A%3A%3A%2B%23%40%2F%25*%21%2B%2C%23-%40*%21%7C*%2B%3F%7C%5D%5E%3D%3A.%3C%2Ftext%3E%3Ctext%20x%3D%270%27%20y%3D%2747%27%3E%2B%21%3D%3D%2F%25%5C%3D%3B%5C%7B*%5C%3A%3D%5E%2B%7C%25%25%40%7D%7C%24%24%23*%3C%2Ftext%3E%3Ctext%20x%3D%270%27%20y%3D%2757%27%3E%20%20%20%29%3D%2F.%7B%25%7D%7B%7B%25%2C%25%2F%28%5C%3A%40%5D%5D%25%7C_%3F%2B%3C%2Ftext%3E%3Ctext%20x%3D%270%27%20y%3D%2767%27%3E%24%7D%5D%5D%5C%28%2F%2C_%40%2B*%5B%5C%5E%3A%25.%5D%23%2C%24.%7C%7C%5D%24%3C%2Ftext%3E%3Ctext%20x%3D%270%27%20y%3D%2777%27%3E%20%20%20..%29%5C-%2F%3D%3B%3F%2B%2B%5C%3F%7C%28%3A%3F%7B%3B%3A%40%40%7C-%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  --av-tile-size: calc(120px * var(--av-scale)) calc(80px * var(--av-scale));\n}\n\n/* 关闭：整层不画，只留 html 的底色；流光时点阵把位置让给画布。 */\nhtml[data-av-bg=\"off\"] body::before,\nhtml[data-av-bg=\"flow\"] body::before {\n  content: none;\n}\n\n/* 旧版把“关闭”放在底纹里；升级后若属性还残着，同样不画。 */\nhtml[data-av-dots=\"off\"] body::before {\n  content: none;\n}\n\n/* ═══ component: flow · 流光背景 ═══ */\n/* ============================================================================\n   组件 · 流光背景\n   ----------------------------------------------------------------------------\n   WebGL2 画布（src/flow.js），1/5 分辨率、5px 一格、锁 30fps。\n   挂 html[data-av-bg=\"flow\"] 才建画布；色板挂 html[data-av-flow-palette]。\n   变量：--av-flow-0..3（底 / 暗面 / 光带 / 亮芯）· --av-flow-glow（亮芯强度）\n   存储：不存；插件写 html[data-av-flow-palette]。\n   宿主选择器：canvas.av-flow 插在 body 第一个子节点，不碰宿主结构。\n\n   单独复用：复制本文件 + src/flow.js，建画布后 add('av-flow--on')。\n   ========================================================================== */\n\n/* ── 流光：低分辨率噪声场（src/flow.js）────────────────────────────────\n   画布只有视口的 1/5，像素放大回屏幕；颜色来自下面四套色板，\n   JS 只读 --av-flow-0..3 / --av-flow-glow，所以换主题 / 深色 / 色板\n   都不用重建画布。点阵与流光二选一，落成 html[data-av-bg]。 */\n.av-flow {\n  position: fixed;\n  inset: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  image-rendering: pixelated;\n  opacity: 0;\n  transition: opacity 420ms ease;\n}\n\n.av-flow--on {\n  opacity: 1;\n}\n\n/* 四套色板：0 底 · 1 暗面 · 2 光带 · 3 亮芯。\n   glow 是亮芯强度：浅色收着当纸上的反光，深色放开当光。 */\nhtml,\nhtml[data-av-flow-palette=\"mist\"] {\n  --av-flow-0: #d9e2ee;\n  --av-flow-1: #c8d6e7;\n  --av-flow-2: #edf3fa;\n  --av-flow-3: #fdfeff;\n  --av-flow-glow: 0.26;\n}\n\nhtml[data-av-flow-palette=\"dusk\"] {\n  --av-flow-0: #e2ddec;\n  --av-flow-1: #d2c9e2;\n  --av-flow-2: #f1edfa;\n  --av-flow-3: #fffdff;\n  --av-flow-glow: 0.26;\n}\n\nhtml[data-av-flow-palette=\"jade\"] {\n  --av-flow-0: #d9e5e1;\n  --av-flow-1: #c4d8d1;\n  --av-flow-2: #edf6f2;\n  --av-flow-3: #ffffff;\n  --av-flow-glow: 0.24;\n}\n\nhtml[data-av-flow-palette=\"amber\"] {\n  --av-flow-0: #e9e1d3;\n  --av-flow-1: #ddcdb6;\n  --av-flow-2: #f8f2e7;\n  --av-flow-3: #fffdf8;\n  --av-flow-glow: 0.26;\n}\n\nhtml[data-av-flow-palette=\"mist\"]:has(body[data-ds-dark-theme]) {\n  --av-flow-0: #0b111b;\n  --av-flow-1: #1a2740;\n  --av-flow-2: #40557e;\n  --av-flow-3: #b9cfec;\n  --av-flow-glow: 0.5;\n}\n\nhtml[data-av-flow-palette=\"dusk\"]:has(body[data-ds-dark-theme]) {\n  --av-flow-0: #110e1a;\n  --av-flow-1: #241b38;\n  --av-flow-2: #4a3a6e;\n  --av-flow-3: #ccb4f0;\n  --av-flow-glow: 0.5;\n}\n\nhtml[data-av-flow-palette=\"jade\"]:has(body[data-ds-dark-theme]) {\n  --av-flow-0: #091215;\n  --av-flow-1: #172a2e;\n  --av-flow-2: #2f5158;\n  --av-flow-3: #a8d8d0;\n  --av-flow-glow: 0.48;\n}\n\nhtml[data-av-flow-palette=\"amber\"]:has(body[data-ds-dark-theme]) {\n  --av-flow-0: #13100c;\n  --av-flow-1: #2a2118;\n  --av-flow-2: #513f2c;\n  --av-flow-3: #e6c093;\n  --av-flow-glow: 0.5;\n}\n\n/* ═══ component: motion · 位移动效 ═══ */\n/* ============================================================================\n   组件 · 位移动效\n   ----------------------------------------------------------------------------\n   纯 CSS，没有 JS、没有存储、没有 data-av-* 开关：\n     1. 会话切换上浮 6px；2. 会话行 hover 横移 2px；3. 按钮按下 0.5px；\n     4. 侧栏折叠 300ms；5. 最后一条回复上浮 6px；\n     6. 控件颜色 / 边框 / 阴影过渡（:where 零特异性，不压组件自己的过渡）。\n   依赖宿主令牌：--ds-transition-duration / -fast / -slow · --ds-ease-in-out\n   （主题在 tokens.js 里把宿主默认值换成 180ms / 120ms 与柔出曲线）。\n\n   单独复用：整份复制即可；不想要某条就删对应选择器。\n   ========================================================================== */\n\n/* ── 位移动效 ──────────────────────────────────────────────────────────\n   只动 transform，且都短：\n     1. 会话切换：会话区上浮 6px；\n     2. 会话行：hover 横移 2px；\n     3. 按钮按下：下压 0.5px；\n     后面还有：侧栏折叠的 grid 过渡、最后一条回复的上浮（见下）。\n   菜单不做位移——DSH 的菜单带锚定定位，动它容易跳。 */\n[data-conversation-session] {\n  animation: avSessionIn 160ms var(--ds-ease-in-out);\n}\n\n@keyframes avSessionIn {\n  from { opacity: 0.7; transform: translateY(6px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n[data-row-key] {\n  transition: transform var(--ds-transition-duration-fast) var(--ds-ease-in-out);\n}\n\n[data-row-key]:hover {\n  transform: translateX(2px);\n}\n\n:where(button):active:not(:disabled) {\n  transform: translateY(0.5px);\n}\n/* ── 折叠：frame 的 grid 过渡常开 ─────────────────────────────────────\n   DSH 只在部分切换路径上给 [data-animating] 过渡，折叠时可能直接跳。\n   这里给 frame 常开 300ms 曲线，拖动改宽时再关掉。 */\n[class*=\"_frame\"] {\n  transition: grid-template-columns var(--ds-transition-duration-slow) var(--ds-ease-in-out);\n}\n\n[class*=\"_frame\"][data-dragging] {\n  transition: none;\n}\n\n/* ── 新回复：只给最后一个 turn 挂进入动画 ─────────────────────────────\n   用“后面没有同级 turn”来认定最后一个；历史分页插在上方，不会触发。\n   依赖 turn 是同级兄弟；DSH 结构若变，这条会静默失效（不影响其它）。 */\n[data-chat-turn]:not(:has(~ [data-chat-turn])) {\n  animation: avTurnIn 180ms var(--ds-ease-in-out);\n}\n\n@keyframes avTurnIn {\n  from { opacity: 0.55; transform: translateY(6px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  [class*=\"_frame\"] {\n    transition: none;\n  }\n\n  [data-chat-turn]:not(:has(~ [data-chat-turn])) {\n    animation: none;\n  }\n}\n\n\n@media (prefers-reduced-motion: reduce) {\n  [data-conversation-session],\n  [data-row-key],\n  :where(button):active:not(:disabled) {\n    animation: none !important;\n    transition: none !important;\n    transform: none !important;\n  }\n}\n\n\n/* ── UI 动效：过渡令牌 + 轻量 hover 过渡 ───────────────────────────────\n   1. tokens.js 里的 --ds-transition-* 把宿主的 0.2s/0.1s 改成 180/120ms，\n      曲线换成个人站那种柔出；\n   2. :where() 补颜色/边框/阴影过渡，零 specificity——组件自己声明的\n      过渡仍然优先，不覆盖宿主行为；\n   3. 菜单不做动效：它的显隐由宿主控制，叠加 opacity 会在收尾时跳。 */\n:where(button, [role=\"button\"], a, summary, input, textarea) {\n  transition:\n    background-color var(--ds-transition-duration-fast) var(--ds-ease-in-out),\n    border-color var(--ds-transition-duration-fast) var(--ds-ease-in-out),\n    color var(--ds-transition-duration-fast) var(--ds-ease-in-out),\n    box-shadow var(--ds-transition-duration) var(--ds-ease-in-out),\n    opacity var(--ds-transition-duration) var(--ds-ease-in-out);\n}\n@media (prefers-reduced-motion: reduce) {\n  :where(button, [role=\"button\"], a, summary, input, textarea) {\n    transition: none !important;\n  }}\n\n/* ═══ component: paper · 纸品装饰 ═══ */\n/* ============================================================================\n   组件 · 纸品装饰（用户消息 / 输入框 / 发送键）\n   ----------------------------------------------------------------------------\n   挂 html[data-av-deco=\"paper\"] 生效；摘掉属性即回原生外观。\n   命中的宿主选择器（DSH 0.2.1-rc.3）：\n     用户消息  [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"]\n     输入框    [data-composer-seat] [class*=\"_card\"] / _input / _row / _placeholder\n     发送键    [data-composer-seat] [class*=\"_primary\"]\n   变量：--av-mark（主墨色）及其派生 --av-line / --av-line-soft / --av-wash、\n         --av-serif（占位语衬线）\n   存储：不存；插件写 html[data-av-deco]。\n   风险：装饰钉在 CSS Modules 的稳定后缀上，DSH 改结构会整段失效（回退原生，不影响功能）。\n\n   单独复用：复制本文件，挂 data-av-deco=\"paper\"；不想要开关就把选择器里的\n   html[data-av-deco=\"paper\"] 换成 html。下面的兜底只在没装主题时生效。\n   ========================================================================== */\n\n/* 兜底：没有 data-av-theme 时用昼雾 · 靛夜的值。 */\nhtml[data-av-deco=\"paper\"]:not([data-av-theme]) {\n  --av-mark: #61567d;\n  --av-line: color-mix(in srgb, var(--av-mark) 36%, transparent);\n  --av-line-soft: color-mix(in srgb, var(--av-mark) 18%, transparent);\n  --av-wash: color-mix(in srgb, var(--av-mark) 7%, transparent);\n  --av-serif: \"Noto Serif SC\", \"Source Han Serif SC\", \"Songti SC\", \"SimSun\", serif;\n}\n\nhtml[data-av-deco=\"paper\"]:not([data-av-theme]):has(body[data-ds-dark-theme]) {\n  --av-mark: #baadd2;\n  --av-line: color-mix(in srgb, var(--av-mark) 26%, transparent);\n  --av-line-soft: color-mix(in srgb, var(--av-mark) 13%, transparent);\n  --av-wash: color-mix(in srgb, var(--av-mark) 8%, transparent);\n}\n\n/* ══════════════════════════════════════════════════════════════════════\n   重装饰：用户消息与输入框\n   ──────────────────────────────────────────────────────────────────────\n   只在 html[data-av-deco=\"paper\"] 时生效。开关在「设置 → 主题」，值存 localStorage；\n   关掉即回到 DSH 原生外观（本段不碰任何功能，只加装饰）。\n   命中点（DSH 0.2.1-rc.3 的真实结构）：\n     用户消息  [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"]\n     输入框    [data-composer-seat] [class*=\"_card\"]\n     发送键    [data-composer-seat] [class*=\"_primary\"]\n   颜色全部走令牌 + color-mix；装饰线由 --av-mark 派生，换主题自动跟。\n   ══════════════════════════════════════════════════════════════════════ */\n\n/* ── 用户消息：贴上去的纸条 ───────────────────────────────────────────── */\nhtml[data-av-deco=\"paper\"] [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"] {\n  position: relative;\n  border: 1px solid var(--av-line);\n  border-radius: 2px 10px 2px 0;\n  padding: 12px 20px 15px 24px;\n  background-color: var(--dsw-specific-bubble);\n  /* 右下折角 + 折痕：折面压在右下角，折痕从底边斜向右缘（镜像 225deg → 135deg） */\n  background-image:\n    linear-gradient(\n      135deg,\n      transparent 0 47%,\n      color-mix(in srgb, var(--av-mark) 14%, var(--dsw-specific-bubble)) 47% 100%\n    ),\n    linear-gradient(\n      135deg,\n      transparent 0 43%,\n      var(--av-line-soft) 43% 45%,\n      transparent 45% 100%\n    );\n  background-repeat: no-repeat, no-repeat;\n  background-size: 18px 18px;\n  background-position: right bottom;\n  /* 底缘齿孔：像撕下来的票根 */\n  mask-image: radial-gradient(circle 2.6px at 3px 100%, transparent 97%, #000 100%);\n  mask-size: 10px 100%;\n  mask-repeat: repeat-x;\n  mask-position: left bottom;\n  filter: drop-shadow(2.5px 2.5px 0 var(--av-line-soft));\n  transform: rotate(-0.3deg);\n  transition:\n    transform var(--ds-transition-duration) var(--ds-ease-in-out),\n    filter var(--ds-transition-duration) var(--ds-ease-in-out);\n}\n\n/* 左缘书签带 */\nhtml[data-av-deco=\"paper\"] [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 10px;\n  bottom: 12px;\n  width: 4px;\n  border-radius: 0 2px 2px 0;\n  background: linear-gradient(\n    180deg,\n    var(--av-mark) 0%,\n    color-mix(in srgb, var(--av-mark) 34%, transparent) 100%\n  );\n}\n\n/* 右上角星章 */\nhtml[data-av-deco=\"paper\"] [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"]::after {\n  content: \"\";\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  width: 13px;\n  height: 13px;\n  background: var(--av-mark);\n  opacity: 0.7;\n  clip-path: polygon(\n    50% 0%, 61% 39%, 100% 50%, 61% 61%,\n    50% 100%, 39% 61%, 0% 50%, 39% 39%\n  );\n}\n\n@media (hover: hover) {\n  html[data-av-deco=\"paper\"] [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"]:hover {\n    transform: rotate(0deg);\n    filter: drop-shadow(1.5px 1.5px 0 var(--av-line));\n  }\n}\n\n/* ── 输入框：待写的活页卡 ─────────────────────────────────────────────── */\nhtml[data-av-deco=\"paper\"] [data-composer-seat] [class*=\"_card\"] {\n  position: relative;\n  border: 1px solid var(--av-line);\n  border-radius: 3px 13px 3px 0;\n  padding-top: 15px;\n  background-color: var(--dsw-specific-input-major);\n  /* 票根裁切线 */\n  outline: 1px dotted var(--av-line);\n  outline-offset: 4px;\n  box-shadow: 0 0 0 3px var(--av-wash);\n  transition:\n    box-shadow var(--ds-transition-duration) var(--ds-ease-in-out),\n    border-color var(--ds-transition-duration) var(--ds-ease-in-out),\n    outline-color var(--ds-transition-duration) var(--ds-ease-in-out);\n}\n\n/* 信头窄带：不带字，只留装订边和一条底线 */\nhtml[data-av-deco=\"paper\"] [data-composer-seat] [class*=\"_card\"]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 15px;\n  border-bottom: 0.5px solid var(--av-line-soft);\n  border-radius: 3px 13px 0 0;\n  background: var(--av-wash);\n  pointer-events: none;\n}\n\n/* 信头左端三枚装订孔 */\nhtml[data-av-deco=\"paper\"] [data-composer-seat] [class*=\"_card\"]::after {\n  content: \"\";\n  position: absolute;\n  left: 11px;\n  top: 6px;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--av-mark) 34%, transparent);\n  box-shadow:\n    7px 0 0 color-mix(in srgb, var(--av-mark) 34%, transparent),\n    14px 0 0 color-mix(in srgb, var(--av-mark) 34%, transparent);\n  pointer-events: none;\n}\n\nhtml[data-av-deco=\"paper\"] [data-composer-seat] [class*=\"_card\"]:focus-within {\n  border-color: var(--dsw-alias-brand-primary);\n  outline-color: var(--av-line);\n  box-shadow: 0 0 0 3px var(--av-line-soft);\n}\n\n/* 占位语：衬线斜体，和正文字体分开 */\nhtml[data-av-deco=\"paper\"] [data-composer-seat] [class*=\"_placeholder\"] {\n  font-family: var(--av-serif);\n  font-style: italic;\n  letter-spacing: 0.03em;\n}\n\n/* 输入区横格：极淡的信纸线，跟着行高走 */\nhtml[data-av-deco=\"paper\"] [data-composer-seat] [class*=\"_input\"] {\n  background-image: repeating-linear-gradient(\n    180deg,\n    transparent 0 23px,\n    color-mix(in srgb, var(--av-mark) 9%, transparent) 23px 24px\n  );\n  background-position: 0 5px;\n}\n\n/* 控制行与输入区之间：一条发丝线，像信纸的横格 */\nhtml[data-av-deco=\"paper\"] [data-composer-seat] [class*=\"_row\"] {\n  border-top: 0.5px solid color-mix(in srgb, var(--av-mark) 24%, transparent);\n}\n\n/* 发送键：缺一角的圆章 */\nhtml[data-av-deco=\"paper\"] [data-composer-seat] [class*=\"_primary\"] {\n  border-radius: 50% 50% 50% 5px;\n  box-shadow:\n    inset 0 0 0 1px color-mix(in srgb, var(--dsw-alias-label-primary-inverted) 24%, transparent),\n    inset 0 -7px 12px -7px color-mix(in srgb, var(--dsw-alias-label-primary) 32%, transparent);\n  transition:\n    transform var(--ds-transition-duration) var(--ds-ease-in-out),\n    border-radius var(--ds-transition-duration) var(--ds-ease-in-out);\n}\n\nhtml[data-av-deco=\"paper\"] [data-composer-seat] [class*=\"_primary\"]:hover:not(:disabled) {\n  transform: translateY(-2px) rotate(-6deg);\n  border-radius: 50% 50% 8px 50%;\n}\n\n/* 深色下这些装饰要退半步：底色已经暗，线一浓就吵。 */\nhtml[data-av-deco=\"paper\"]:has(body[data-ds-dark-theme]) [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"]::after {\n  opacity: 0.55;\n}\n\nhtml[data-av-deco=\"paper\"]:has(body[data-ds-dark-theme]) [data-composer-seat] [class*=\"_input\"] {\n  background-image: repeating-linear-gradient(\n    180deg,\n    transparent 0 23px,\n    color-mix(in srgb, var(--av-mark) 7%, transparent) 23px 24px\n  );\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html[data-av-deco=\"paper\"] [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"],\n  html[data-av-deco=\"paper\"] [data-composer-seat] [class*=\"_card\"],\n  html[data-av-deco=\"paper\"] [data-composer-seat] [class*=\"_primary\"] {\n    transform: none;\n    transition: none;\n  }\n\n  html[data-av-deco=\"paper\"] [data-composer-seat] [class*=\"_primary\"]:hover:not(:disabled) {\n    transform: translateY(-2px);\n  }\n}\n\n/* ═══ component: star · 星芒装饰 ═══ */\n/* ============================================================================\n   组件 · 星芒装饰（用户消息 / 输入框 / 发送键）\n   ----------------------------------------------------------------------------\n   挂 html[data-av-deco=\"star\"] 生效，与纸品互斥。\n   星形再挂 html[data-av-star=\"a\" | \"b\"]：a 罗盘刻星、b 针芒。\n   命中的宿主选择器与纸品相同，两套装饰共用一批选择器，靠 data-av-deco 分流。\n   变量：--av-mark（星与光线）· --av-star-shape / -size / -offset / -bubble\n   存储：不存；插件写 html[data-av-deco] / data-av-star。\n   风险：同纸品，钉在宿主结构与 CSS Modules 后缀上。\n\n   单独复用：复制本文件，挂 data-av-deco=\"star\"；不挂 data-av-star 时按 a 画。\n   下面的兜底只在没装主题时生效。\n   ========================================================================== */\n\n/* 兜底：没有 data-av-theme 时用昼雾 · 靛夜的值。 */\nhtml[data-av-deco=\"star\"]:not([data-av-theme]) {\n  --av-mark: #61567d;\n}\n\nhtml[data-av-deco=\"star\"]:not([data-av-theme]):has(body[data-ds-dark-theme]) {\n  --av-mark: #baadd2;\n}\n\n/* ══════════════════════════════════════════════════════════════════════\n   星芒装饰：以四角星芒与放射线为中心的对话框\n   ──────────────────────────────────────────────────────────────────────\n   与纸品（paper）互斥，同由「设置 → 主题 → 装饰」切换。\n   语言：一枚焦点星芒 + 极淡放射线 + 柔光；形状收圆，靠光和发散射程，不靠纸。\n   命中点与纸品相同，两套装饰共用同一批选择器，靠 html[data-av-deco] 分流。\n   ══════════════════════════════════════════════════════════════════════ */\n\n/* ── 星形变体：两组造型，挂在 [data-av-star] 上（容器级也能覆盖）────────\n   a = 罗盘刻星：四长四短，端正\n   b = 针芒：只留四根长针，更薄更利\n   星只做剪影：不转、不加内部渐变、不加光晕，靠形状说话。 */\n[data-av-star=\"a\"],\nhtml[data-av-deco=\"star\"]:not([data-av-star]) {\n  --av-star-shape: polygon(\n    50% 0%, 55% 39%, 78% 24%, 61% 45%,\n    100% 50%, 61% 55%, 78% 76%, 55% 61%,\n    50% 100%, 45% 61%, 22% 76%, 39% 55%,\n    0% 50%, 39% 45%, 22% 24%, 45% 39%\n  );\n  --av-star-size: 32px;\n  --av-star-offset: -15px;\n  --av-star-bubble: 16px;\n}\n\n[data-av-star=\"b\"] {\n  --av-star-shape: polygon(\n    50% 0%, 51.9% 45.4%, 64.8% 35.2%, 54.6% 47.9%,\n    100% 50%, 54.6% 52.1%, 64.8% 64.8%, 51.9% 54.6%,\n    50% 100%, 48.1% 54.6%, 35.2% 64.8%, 45.4% 52.1%,\n    0% 50%, 45.4% 47.9%, 35.2% 35.2%, 48.1% 45.4%\n  );\n  --av-star-size: 40px;\n  --av-star-offset: -19px;\n  --av-star-bubble: 20px;\n}\n\n/* ── 输入框：星芒卡 ───────────────────────────────────────────────────── */\nhtml[data-av-deco=\"star\"] [data-composer-seat] [class*=\"_card\"] {\n  position: relative;\n  border: 1px solid color-mix(in srgb, var(--av-mark) 36%, transparent);\n  border-radius: 16px;\n  background-color: var(--dsw-specific-input-major);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--av-mark) 5%, transparent);\n  transition:\n    box-shadow var(--ds-transition-duration) var(--ds-ease-in-out),\n    border-color var(--ds-transition-duration) var(--ds-ease-in-out);\n}\n\n/* 放射线：以右上角星为圆心，向左下渐隐；每 12° 一束，只当氛围 */\nhtml[data-av-deco=\"star\"] [data-composer-seat] [class*=\"_card\"]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  background-image: repeating-conic-gradient(\n    from 8deg at 100% 0%,\n    transparent 0deg 12deg,\n    color-mix(in srgb, var(--av-mark) 18%, transparent) 12deg 13.2deg\n  );\n  -webkit-mask-image: radial-gradient(circle 620px at 100% 0%, #000 0%, transparent 92%);\n  mask-image: radial-gradient(circle 620px at 100% 0%, #000 0%, transparent 92%);\n  opacity: 0.55;\n  filter: blur(0.5px);\n  pointer-events: none;\n}\n\n/* 焦点星：纯色剪影，聚焦时放大一成 */\nhtml[data-av-deco=\"star\"] [data-composer-seat] [class*=\"_card\"]::after {\n  content: \"\";\n  position: absolute;\n  right: var(--av-star-offset);\n  top: var(--av-star-offset);\n  width: var(--av-star-size);\n  height: var(--av-star-size);\n  background: var(--av-mark);\n  clip-path: var(--av-star-shape);\n  transform: scale(1);\n  transform-origin: 50% 50%;\n  transition: transform var(--ds-transition-duration) var(--ds-ease-in-out);\n  pointer-events: none;\n}\n\nhtml[data-av-deco=\"star\"] [data-composer-seat] [class*=\"_card\"]:focus-within::after {\n  transform: scale(1.12);\n}\n\nhtml[data-av-deco=\"star\"] [data-composer-seat] [class*=\"_card\"]:focus-within {\n  border-color: color-mix(in srgb, var(--av-mark) 70%, transparent);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--av-mark) 9%, transparent);\n}\n\n/* 发送键：一圈硬边，hover 撑开 */\nhtml[data-av-deco=\"star\"] [data-composer-seat] [class*=\"_primary\"] {\n  box-shadow: 0 0 0 1px color-mix(in srgb, var(--av-mark) 45%, transparent);\n  transition: box-shadow var(--ds-transition-duration) var(--ds-ease-in-out);\n}\n\nhtml[data-av-deco=\"star\"] [data-composer-seat] [class*=\"_primary\"]:hover:not(:disabled) {\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--av-mark) 70%, transparent);\n}\n\n/* ── 用户消息：一颗星 + 一条底光 ─────────────────────────────────────── */\nhtml[data-av-deco=\"star\"] [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"] {\n  position: relative;\n  border: 1px solid color-mix(in srgb, var(--av-mark) 30%, transparent);\n  border-radius: 14px 14px 4px 14px;\n  padding: 12px 24px 14px 20px;\n  background-color: var(--dsw-specific-bubble);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--av-mark) 4%, transparent);\n  transition: box-shadow var(--ds-transition-duration) var(--ds-ease-in-out);\n}\n\nhtml[data-av-deco=\"star\"] [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"]::before {\n  content: \"\";\n  position: absolute;\n  right: 7px;\n  top: 7px;\n  width: var(--av-star-bubble);\n  height: var(--av-star-bubble);\n  background: var(--av-mark);\n  clip-path: var(--av-star-shape);\n  pointer-events: none;\n}\n\nhtml[data-av-deco=\"star\"] [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"]::after {\n  content: \"\";\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  bottom: 0;\n  height: 1px;\n  border-radius: 1px;\n  background: linear-gradient(\n    90deg,\n    transparent 0%,\n    color-mix(in srgb, var(--av-mark) 55%, transparent) 100%\n  );\n}\n\n@media (hover: hover) {\n  html[data-av-deco=\"star\"] [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"]:hover {\n    box-shadow: 0 0 0 3px color-mix(in srgb, var(--av-mark) 8%, transparent);\n  }\n}\n\n/* 深色：射线换成亮紫，当光束用（浅色只留一层质感） */\nhtml[data-av-deco=\"star\"]:has(body[data-ds-dark-theme]) [data-composer-seat] [class*=\"_card\"]::before {\n  background-image: repeating-conic-gradient(\n    from 8deg at 100% 0%,\n    transparent 0deg 12deg,\n    color-mix(in srgb, var(--av-mark) 75%, transparent) 12deg 13.2deg\n  );\n  opacity: 0.85;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html[data-av-deco=\"star\"] [data-composer-seat] [class*=\"_card\"]::after,\n  html[data-av-deco=\"star\"] [data-composer-seat] [class*=\"_card\"],\n  html[data-av-deco=\"star\"] [data-composer-seat] [class*=\"_primary\"] {\n    transition: none;\n  }\n\n  html[data-av-deco=\"star\"] [data-composer-seat] [class*=\"_card\"]:focus-within::after {\n    transform: none;\n  }\n}\n\n\n/* ── 主题变量（由 scripts/build.mjs 生成，勿手改） ───────────────────── */\nhtml[data-av-theme=\"averita\"] {\n  --av-space: #e5eaf0;\n  --av-dot: rgba(55, 63, 79, 0.055);\n  --av-mark: #61567d;\n}\n\nhtml[data-av-theme=\"averita\"]:has(body[data-ds-dark-theme]) {\n  --av-space: #0e131e;\n  --av-dot: rgba(217, 230, 243, 0.085);\n  --av-mark: #baadd2;\n}\n\nhtml[data-av-theme=\"coldmorning\"] {\n  --av-space: #e4e9e9;\n  --av-dot: rgba(51, 59, 62, 0.055);\n  --av-mark: #5d6d80;\n}\n\nhtml[data-av-theme=\"coldmorning\"]:has(body[data-ds-dark-theme]) {\n  --av-space: #101820;\n  --av-dot: rgba(214, 230, 235, 0.10);\n  --av-mark: #a9c6d4;\n}\n\nhtml[data-av-theme=\"duskrose\"] {\n  --av-space: #ecdfdb;\n  --av-dot: rgba(60, 50, 54, 0.055);\n  --av-mark: #7a4f5c;\n}\n\nhtml[data-av-theme=\"duskrose\"]:has(body[data-ds-dark-theme]) {\n  --av-space: #1b1418;\n  --av-dot: rgba(242, 214, 214, 0.10);\n  --av-mark: #d3a6ad;\n}\n";
    const STORAGE_KEY = PLUGIN_ID + ":theme";
    const DECO_KEY = PLUGIN_ID + ":deco";
    const STAR_KEY = PLUGIN_ID + ":star";
    const DOTS_KEY = PLUGIN_ID + ":dots";
    const GLYPH_KEY = PLUGIN_ID + ":glyph";
    const SCALE_KEY = PLUGIN_ID + ":scale";
    const DEPTH_KEY = PLUGIN_ID + ":depth";
    const MOTION_KEY = PLUGIN_ID + ":motion";
    const BREATHE_KEY = PLUGIN_ID + ":breathe";
    const BG_KEY = PLUGIN_ID + ":bg";
    const FLOW_KEY = PLUGIN_ID + ":flow";
    const SPEED_KEY = PLUGIN_ID + ":speed";
    const WORDMARK_KEY = PLUGIN_ID + ":wordmark";
    const DEFAULT_THEME = "averita";
    /** 品牌字标的默认值；空串是合法值，表示只显示星标。 */
    const DEFAULT_WORDMARK = "AveritA's DSH";
    const MAX_WORDMARK = 32;
    const DECO_MODES = [
      { id: "paper", label: "纸品" },
      { id: "star", label: "星芒" },
      { id: "plain", label: "原生" },
    ];
    const DECO_HINT = {
      paper: "消息与输入框用纸品装饰",
      star: "消息与输入框用星芒装饰",
      plain: "跟随 DSH 原生外观",
    };
    /** 星芒造型：a = 罗盘刻星（四长四短），b = 针芒（四根长针 + 短刺）。 */
    const STAR_MODES = [
      { id: "a", label: "罗盘" },
      { id: "b", label: "针芒" },
    ];
    const STAR_HINT = {
      a: "四长四短，端正",
      b: "四根长针，更利",
    };
    /** 背景：点阵 / 流光 / 关闭；默认点阵。流光与点阵互斥，关闭时两者都不画。 */
    const BG_MODES = [
      { id: "dots", label: "点阵" },
      { id: "flow", label: "流光" },
      { id: "off", label: "关闭" },
    ];
    const BG_HINT = {
      dots: "10px 网格的印刷颗粒",
      flow: "低分辨率噪声场，慢慢流",
      off: "不画背景，只留底色",
    };
    /** 底纹：圆点（默认）/ square 方块 / char 字符 / wall 字符墙。 */
    const DOT_MODES = [
      { id: "dot", label: "圆点" },
      { id: "square", label: "方块" },
      { id: "char", label: "字符" },
      { id: "wall", label: "字符墙" },
    ];
    const DOT_HINT = {
      dot: "10px 网格、2.8px 圆点",
      square: "同一网格，换成方形颗粒",
      char: "同一网格，字符铺格",
      wall: "密排符号，像一页代码",
    };
    /** 流光的四套色板：颜色写在 theme.css 的 --av-flow-* 里，浅深各一套。 */
    const FLOW_MODES = [
      { id: "mist", label: "雾蓝" },
      { id: "dusk", label: "暮紫" },
      { id: "jade", label: "青灰" },
      { id: "amber", label: "暖沙" },
    ];
    const FLOW_HINT = {
      mist: "冷灰蓝，最接近昼雾",
      dusk: "薄暮紫，给深色留一层光",
      jade: "青灰，像雨后的窗",
      amber: "暖沙，纸上的夕照",
    };
    /** 字符底纹用哪个字：字号按墨量调过，和圆点 / 方块同一档。 */
    const GLYPH_MODES = [
      { id: "plus", label: "+", name: "加号" },
      { id: "hash", label: "#", name: "井号" },
      { id: "star", label: "*", name: "星号" },
      { id: "cross", label: "×", name: "叉号" },
    ];
    /** 缩放滑杆：0.5–4×，0.1 一格；值直接落成 --av-scale（格距 = 10px × 值）。 */
    const SCALE_MIN = 0.5;
    const SCALE_MAX = 4;
    const SCALE_STEP = 0.1;
    /** 浓淡滑杆：30%–400%，5% 一格；值直接落成 --av-depth（乘在墨色 alpha 上）。 */
    const DEPTH_MIN = 0.3;
    const DEPTH_MAX = 4;
    const DEPTH_STEP = 0.05;
    /** 流光速率：0.2–2.5×，0.1 一格；默认 1×（跟个人站同一档）。 */
    const SPEED_MIN = 0.2;
    const SPEED_MAX = 2.5;
    const SPEED_STEP = 0.1;
    const DEFAULT_SPEED = 1;
    /** 呼吸下限：0 = 谷底完全淡出，1 = 没有呼吸幅度；默认沿用 0.65。 */
    const BREATHE_MIN = 0;
    const BREATHE_MAX = 1;
    const BREATHE_STEP = 0.05;
    const DEFAULT_BREATHE = 0.65;
    /** 背景动效：都开 / 呼吸 / 漂移 / 都关；默认都开。 */
    const MOTION_MODES = [
      { id: "both", label: "都开" },
      { id: "breathe", label: "呼吸" },
      { id: "drift", label: "漂移" },
      { id: "off", label: "都关" },
    ];
    const MOTION_HINT = {
      both: "极慢漂移 + 透明度呼吸",
      breathe: "只留透明度呼吸",
      drift: "只留慢漂移",
      off: "背景完全静止",
    };

    /** 把任意输入夹到范围内并按步进取整；非法值走兜底。 */
    function clampStep(value, min, max, step, fallback) {
      const n = Number.parseFloat(value);
      if (!Number.isFinite(n)) return fallback;
      const stepped = Math.round(n / step) * step;
      return Number(Math.min(max, Math.max(min, stepped)).toFixed(2));
    }

    function scaleFill(value) {
      const pct = ((Number(value) - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;
      return `${Math.min(100, Math.max(0, pct)).toFixed(2)}%`;
    }

    function depthFill(value) {
      const pct = ((Number(value) - DEPTH_MIN) / (DEPTH_MAX - DEPTH_MIN)) * 100;
      return `${Math.min(100, Math.max(0, pct)).toFixed(2)}%`;
    }

    function scaleText(value) {
      return `${Number(value).toFixed(1).replace(/\.0$/, "")}×`;
    }

    function depthText(value) {
      return `${Math.round(Number(value) * 100)}%`;
    }

    function depthHint(value) {
      const pct = Math.round(Number(value) * 100);
      if (pct === 100) return "跟主题墨色一致";
      if (pct < 100) return `比主题淡 ${100 - pct}%`;
      return `比主题浓 ${pct - 100}%`;
    }

    function speedFill(value) {
      const pct = ((Number(value) - SPEED_MIN) / (SPEED_MAX - SPEED_MIN)) * 100;
      return `${Math.min(100, Math.max(0, pct)).toFixed(2)}%`;
    }

    function speedText(value) {
      return `${Number(value).toFixed(1)}×`;
    }

    function speedHint(value) {
      const n = Number(value);
      if (n === 1) return "默认速度";
      if (n < 1) return "更慢";
      return "更快";
    }

    function breatheFill(value) {
      const pct = Math.min(1, Math.max(0, Number(value))) * 100;
      return `${pct.toFixed(2)}%`;
    }

    function breatheText(value) {
      return `${Math.round(Number(value) * 100)}%`;
    }

    function breatheHint(value) {
      const pct = Math.round(Number(value) * 100);
      if (pct === 0) return "谷底完全淡出";
      if (pct === 100) return "没有呼吸幅度";
      return "淡入到 100%";
    }

    /** 浓淡滑杆在流光下的换算：30%–400% → 画布不透明度 0.12–0.86。 */
    function flowOpacity(depth) {
      return Math.min(0.86, Math.max(0.12, Number(depth) * 0.62));
    }

    /* 流光渲染器（src/flow.js，构建时内联；预览页直接 <script> 引同一份）。 */
    const createFlowBackground = (function () {
      /* ─────────────────────────────────────────────────────────────
   流光：把 personal-website 的背景场（src/scripts/wander/light.js）
   压成一层低分辨率画布。核心不变：
     · 域扭曲 fbm（5 层）当明暗场，慢慢自己走；
     · 4 档调色 + Bayer 抖动量化；
     · 一格 5 个 CSS 像素，整块画布按像素放大（pixelated）。
   去掉的是站点自己的叙事：三条斜缝、夜色池、塌缩圈、风痕、天气、镜头。
   颜色不写死在这里：读 html 上的 --av-flow-0..3 / --av-flow-glow，
   由 theme.css 按色板与浅深给值，所以换主题 / 深色 / 色板都不用重建画布。

   用法：
     const flow = createFlowBackground(canvas);
     if (!flow) return;                       // 没有 WebGL2 或只有软件渲染：调用方回退
     flow.setZoom(1); flow.setOpacity(0.62); flow.start();
     flow.refreshPalette(); flow.resize(); flow.stop(); flow.dispose();
   ───────────────────────────────────────────────────────────── */
function createFlowBackground(canvas, options) {
  const allowSoftware = !!(options && options.allowSoftware);
  /* 一格 5 个 CSS 像素：1080p 下画布只有 384×216，这是整个方案便宜的原因。 */
  const CELL = 5;
  const FRAME_MS = 1000 / 30;
  const TIME_SCALE = 0.55;
  const I_MAT = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

  const gl = (() => {
    try {
      return canvas.getContext("webgl2", {
        alpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
        powerPreference: "low-power",
      });
    } catch {
      return null;
    }
  })();
  if (!gl) return null;

  /* 软件渲染（SwiftShader / Basic Render Driver）跑这个场会把 CPU 吃满，
     不如不画；调用方回退到点阵。调试截图可以 allowSoftware 放行。 */
  try {
    const dbg = gl.getExtension("WEBGL_debug_renderer_info");
    const name = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : "";
    if (!allowSoftware && /swiftshader|llvmpipe|softpipe|basic render|software/i.test(name)) return null;
  } catch {
    /* 拿不到就算了，按硬件渲染处理 */
  }

  const VERT = `#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`;

  const FRAG = `#version 300 es
precision highp float;

uniform vec2 uRes;
uniform float uTime;
uniform vec2 uSeed;
uniform float uZoom;
uniform float uOpacity;
uniform float uGlow;
uniform vec3 uP[4];

out vec4 o;

float h21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(h21(i), h21(i + vec2(1.0, 0.0)), u.x),
    mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}
float fbm(vec2 p) {
  float a = 0.5, s = 0.0;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 4; i++) {
    s += a * vnoise(p);
    p = r * p * 2.03 + 11.7;
    a *= 0.5;
  }
  return s;
}
/* 与 light.js 的 field() 逐行对应：两次域扭曲，再取第三次 fbm。 */
float field(vec2 p, float t) {
  vec2 q = vec2(fbm(p + vec2(0.0, t * 0.05)), fbm(p + vec2(5.2, 1.3) - t * 0.04));
  vec2 r = vec2(
    fbm(p + 2.0 * q + vec2(1.7, 9.2) + t * 0.03),
    fbm(p + 2.0 * q + vec2(8.3, 2.8) - t * 0.025)
  );
  return fbm(p + 1.9 * r);
}
float bayer(vec2 p) {
  ivec2 i = ivec2(mod(p, 4.0));
  int m[16] = int[16](${I_MAT.join(",")});
  return (float(m[i.y * 4 + i.x]) + 0.5) / 16.0;
}
void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  /* 场自己走得很慢（见 field 里的 t 系数），再叠一点整体平移，免得盯着像静止。 */
  vec2 pan = vec2(uTime * 0.006 + uSeed.x, uTime * -0.004 + uSeed.y);
  float t = uTime * ${TIME_SCALE.toFixed(2)};
  float v = field(uv * (0.72 * uZoom) + pan, t);
  v = clamp((v - 0.30) / 0.42, 0.0, 1.0);

  vec3 col = mix(uP[0], uP[1], smoothstep(0.08, 0.5, v));
  col = mix(col, uP[2], smoothstep(0.5, 0.86, v));
  float band = smoothstep(0.6, 0.74, v) * (1.0 - smoothstep(0.78, 0.94, v));
  col += uP[3] * band * 0.58 * uGlow;
  col = mix(col, uP[3], smoothstep(0.84, 1.0, v) * uGlow);
  col = min(col, vec3(1.0));

  /* 26 阶 + 4×4 Bayer：低分辨率放大后不会出现大片色带，近看是一层细噪点。 */
  float q = 26.0;
  col = floor(col * q + 0.5 + (bayer(gl_FragCoord.xy) - 0.5) * 0.7) / q;
  col = clamp(col, 0.0, 1.0);

  /* premultipliedAlpha：颜色先乘 alpha。 */
  o = vec4(col * uOpacity, uOpacity);
}`;

  const compile = (type, src) => {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      const log = gl.getShaderInfoLog(sh);
      gl.deleteShader(sh);
      if (typeof console !== "undefined") console.warn("[averita] flow shader: " + log);
      return null;
    }
    return sh;
  };

  let program = null;
  let buffer = null;
  let u = {};
  const palette = [[0.86, 0.89, 0.93], [0.8, 0.85, 0.9], [0.93, 0.95, 0.97], [1, 1, 1]];
  let glow = 0.32;
  let zoom = 1;
  let opacity = 0.62;
  let speed = 1;
  /* 固定的落点：个人站每次滚动/换场景才换光的位置，这里开局必须好看，
     所以不摇种子；时间仍然往前走，画面会自己慢慢变。 */
  const seed = [12.4, -7.9];
  let t = 33.7;

  function readPalette() {
    if (typeof window === "undefined" || typeof window.getComputedStyle !== "function") return;
    const cs = window.getComputedStyle(document.documentElement);
    const read = (name) => {
      const raw = cs.getPropertyValue(name).trim();
      return parseFlowColor(raw);
    };
    for (let i = 0; i < 4; i++) {
      const c = read("--av-flow-" + i);
      if (c) palette[i] = c;
    }
    const g = Number.parseFloat(cs.getPropertyValue("--av-flow-glow"));
    if (Number.isFinite(g)) glow = Math.min(1, Math.max(0, g));
  }

  function build() {
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return false;
    const next = gl.createProgram();
    gl.attachShader(next, vs);
    gl.attachShader(next, fs);
    gl.linkProgram(next);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!gl.getProgramParameter(next, gl.LINK_STATUS)) {
      if (typeof console !== "undefined") console.warn("[averita] flow link: " + gl.getProgramInfoLog(next));
      gl.deleteProgram(next);
      return false;
    }
    if (program) gl.deleteProgram(program);
    program = next;
    gl.useProgram(program);

    /* 上下文丢失后旧 buffer 失效，这里总是重建。 */
    if (buffer) gl.deleteBuffer(buffer);
    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    u = {};
    for (const name of ["uRes", "uTime", "uSeed", "uZoom", "uOpacity", "uGlow", "uP"]) {
      u[name] = gl.getUniformLocation(program, name);
    }
    readPalette();
    gl.uniform3fv(u.uP, new Float32Array(palette.flat()));
    gl.uniform1f(u.uGlow, glow);
    gl.uniform2f(u.uSeed, seed[0], seed[1]);
    gl.uniform1f(u.uZoom, zoom);
    gl.uniform1f(u.uOpacity, opacity);
    return true;
  }

  function resize() {
    const w = Math.max(2, Math.ceil((window.innerWidth || 1) / CELL));
    const h = Math.max(2, Math.ceil((window.innerHeight || 1) / CELL));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    if (!program) return;
    gl.viewport(0, 0, w, h);
    gl.uniform2f(u.uRes, w, h);
  }

  function draw() {
    if (!program) return;
    gl.uniform1f(u.uTime, t);
    gl.uniform1f(u.uZoom, zoom);
    gl.uniform1f(u.uOpacity, opacity);
    gl.uniform1f(u.uGlow, glow);
    gl.uniform3fv(u.uP, new Float32Array(palette.flat()));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  let raf = 0;
  let want = false;
  let lastFrame = 0;
  let lastDraw = 0;
  const mq = typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;
  let reduced = !!(mq && mq.matches);

  function frame(now) {
    raf = window.requestAnimationFrame(frame);
    const dt = lastFrame ? Math.min(0.1, (now - lastFrame) / 1000) : 0;
    lastFrame = now;
    t += dt * TIME_SCALE * speed;
    if (now - lastDraw < FRAME_MS) return;
    lastDraw = now;
    draw();
  }

  function cancel() {
    if (raf) {
      window.cancelAnimationFrame(raf);
      raf = 0;
    }
    lastFrame = 0;
  }

  function sync() {
    const visible = typeof document === "undefined" || !document.hidden;
    const run = want && visible && !reduced;
    if (run && !raf) {
      lastFrame = 0;
      raf = window.requestAnimationFrame(frame);
    } else if (!run && raf) {
      cancel();
    }
  }

  function onVisibility() {
    sync();
    if (!raf && want && !reduced && !(typeof document !== "undefined" && document.hidden)) draw();
  }

  function onReducedChange() {
    reduced = !!(mq && mq.matches);
    sync();
    if (reduced) draw();
  }

  function onResize() {
    resize();
    if (!raf && want && !reduced) draw();
  }

  const onLost = (event) => {
    event.preventDefault();
    cancel();
  };
  const onRestored = () => {
    if (build()) {
      resize();
      sync();
      if (!raf) draw();
    }
  };

  if (!build()) {
    if (program) gl.deleteProgram(program);
    return null;
  }
  resize();
  draw();

  canvas.addEventListener("webglcontextlost", onLost);
  canvas.addEventListener("webglcontextrestored", onRestored);
  if (typeof window !== "undefined") window.addEventListener("resize", onResize);
  if (typeof document !== "undefined") document.addEventListener("visibilitychange", onVisibility);
  mq?.addEventListener?.("change", onReducedChange);
  /* 深色 / 色板切换只改 CSS 变量，这里跟上重新取色。 */
  let observer = null;
  if (typeof window !== "undefined" && typeof window.MutationObserver === "function" && typeof document !== "undefined") {
    observer = new window.MutationObserver(() => {
      readPalette();
      if (!raf) draw();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-av-flow-palette", "data-ds-dark-theme", "data-av-theme"] });
    if (document.body) observer.observe(document.body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
  }

  return {
    setZoom(value) {
      const n = Number(value);
      if (!Number.isFinite(n)) return;
      zoom = Math.min(4, Math.max(0.3, n));
      if (!raf) draw();
    },
    setOpacity(value) {
      const n = Number(value);
      if (!Number.isFinite(n)) return;
      opacity = Math.min(0.9, Math.max(0.06, n));
      if (!raf) draw();
    },
    /* 速率：只乘时间步长，不重算任何东西。 */
    setSpeed(value) {
      const n = Number(value);
      if (!Number.isFinite(n)) return;
      speed = Math.min(3, Math.max(0, n));
    },
    refreshPalette() {
      readPalette();
      if (!raf) draw();
    },
    resize,
    start() {
      want = true;
      if (reduced) {
        draw();
        return;
      }
      sync();
    },
    stop() {
      want = false;
      cancel();
    },
    dispose() {
      want = false;
      cancel();
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
      if (typeof window !== "undefined") window.removeEventListener("resize", onResize);
      if (typeof document !== "undefined") document.removeEventListener("visibilitychange", onVisibility);
      mq?.removeEventListener?.("change", onReducedChange);
      observer?.disconnect();
      if (program) gl.deleteProgram(program);
      if (buffer) gl.deleteBuffer(buffer);
      program = null;
      buffer = null;
      const lose = gl.getExtension("WEBGL_lose_context");
      lose?.loseContext();
    },
  };
}

/** #rgb / #rrggbb / rgb() / rgba() → [r, g, b] 0–1；读不懂就返回 null。 */
function parseFlowColor(raw) {
  if (!raw) return null;
  const s = String(raw).trim();
  let m = /^#([0-9a-f]{3,8})$/i.exec(s);
  if (m) {
    let hex = m[1];
    if (hex.length === 3 || hex.length === 4) hex = hex.split("").map((c) => c + c).join("");
    if (hex.length < 6) return null;
    return [
      Number.parseInt(hex.slice(0, 2), 16) / 255,
      Number.parseInt(hex.slice(2, 4), 16) / 255,
      Number.parseInt(hex.slice(4, 6), 16) / 255,
    ];
  }
  m = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(s);
  if (m) return [Number(m[1]) / 255, Number(m[2]) / 255, Number(m[3]) / 255];
  return null;
}

if (typeof window !== "undefined") window.createFlowBackground = createFlowBackground;

      return createFlowBackground;
    })();

    const THEME_BY_ID = new Map(THEMES.map((theme) => [theme.id, theme]));
    const listeners = new Set();
    let activeId = DEFAULT_THEME;
    let decoMode = "paper";
    let starVariant = "a";
    let dotsMode = "dot";
    let glyphMode = "plus";
    let scaleMode = 1;
    let depthMode = 1;
    let speedMode = DEFAULT_SPEED;
    let motionMode = "both";
    let breatheMode = DEFAULT_BREATHE;
    let bgMode = "dots";
    let flowPalette = "mist";
    let wordmark = DEFAULT_WORDMARK;
    let flowRenderer = null;
    let flowCanvas = null;
    let flowUnavailable = false;
    let getActive = () => activeId;
    let getWordmark = () => wordmark;
    let getDeco = () => decoMode;
    let getStar = () => starVariant;
    let getDots = () => dotsMode;
    let getGlyph = () => glyphMode;
    let getScale = () => scaleMode;
    let getDepth = () => depthMode;
    let getSpeed = () => speedMode;
    let getMotion = () => motionMode;
    let getBreathe = () => breatheMode;
    let getBg = () => bgMode;
    let getFlow = () => flowPalette;
    let getFlowAvailable = () => !flowUnavailable;
    let selectTheme = () => {};
    let selectWordmark = () => {};
    let selectDeco = () => {};
    let selectStar = () => {};
    let selectDots = () => {};
    let selectGlyph = () => {};
    let selectScale = () => {};
    let selectDepth = () => {};
    let selectSpeed = () => {};
    let selectMotion = () => {};
    let selectBreathe = () => {};
    let selectBg = () => {};
    let selectFlow = () => {};

    function storedTheme() {
      try {
        const id = window.localStorage.getItem(STORAGE_KEY);
        return THEME_BY_ID.has(id) ? id : DEFAULT_THEME;
      } catch {
        return DEFAULT_THEME;
      }
    }

    function rememberTheme(id) {
      try {
        window.localStorage.setItem(STORAGE_KEY, id);
      } catch {
        /* 读不到 localStorage 就只在本次运行里生效 */
      }
    }

    /** 装饰风格：纸品 / 星芒 / 原生，默认纸品。 */
    function storedDeco() {
      try {
        const id = window.localStorage.getItem(DECO_KEY);
        return id === "paper" || id === "star" || id === "plain" ? id : "paper";
      } catch {
        return "paper";
      }
    }

    function rememberDeco(id) {
      try {
        window.localStorage.setItem(DECO_KEY, id);
      } catch {
        /* 同上 */
      }
    }

    /** 星形造型：a / b，默认 a。 */
    function storedStar() {
      try {
        return window.localStorage.getItem(STAR_KEY) === "b" ? "b" : "a";
      } catch {
        return "a";
      }
    }

    function rememberStar(id) {
      try {
        window.localStorage.setItem(STAR_KEY, id);
      } catch {
        /* 同上 */
      }
    }

    /** 底纹：圆点 / 方块 / 字符 / 字符墙 / 关闭，默认圆点（圆点不挂属性）。 */
    function storedDots() {
      try {
        const id = window.localStorage.getItem(DOTS_KEY);
        return DOT_MODES.some((mode) => mode.id === id) ? id : "dot";
      } catch {
        return "dot";
      }
    }

    function rememberDots(id) {
      try {
        window.localStorage.setItem(DOTS_KEY, id);
      } catch {
        /* 同上 */
      }
    }

    /** 字符底纹用哪个字：plus / hash / star / cross，默认加号。 */
    function storedGlyph() {
      try {
        const id = window.localStorage.getItem(GLYPH_KEY);
        return GLYPH_MODES.some((mode) => mode.id === id) ? id : "plus";
      } catch {
        return "plus";
      }
    }

    function rememberGlyph(id) {
      try {
        window.localStorage.setItem(GLYPH_KEY, id);
      } catch {
        /* 同上 */
      }
    }

    /** 缩放：0.5–4× 连续值，默认 1。旧版存的是 "0.8" / "1.2" 这类档位，照读。 */
    function storedScale() {
      try {
        return clampStep(window.localStorage.getItem(SCALE_KEY), SCALE_MIN, SCALE_MAX, SCALE_STEP, 1);
      } catch {
        return 1;
      }
    }

    function rememberScale(value) {
      try {
        window.localStorage.setItem(SCALE_KEY, String(value));
      } catch {
        /* 同上 */
      }
    }

    /** 浓淡：30%–400% 连续值（存乘数），默认 1。旧版 "0.6" / "1.4" 照读。 */
    function storedDepth() {
      try {
        return clampStep(window.localStorage.getItem(DEPTH_KEY), DEPTH_MIN, DEPTH_MAX, DEPTH_STEP, 1);
      } catch {
        return 1;
      }
    }

    function rememberDepth(value) {
      try {
        window.localStorage.setItem(DEPTH_KEY, String(value));
      } catch {
        /* 同上 */
      }
    }

    /** 背景动效：both / breathe / drift / off，默认 both。 */
    function storedMotion() {
      try {
        const id = window.localStorage.getItem(MOTION_KEY);
        return MOTION_MODES.some((mode) => mode.id === id) ? id : "both";
      } catch {
        return "both";
      }
    }

    function rememberMotion(id) {
      try {
        window.localStorage.setItem(MOTION_KEY, id);
      } catch {
        /* 同上 */
      }
    }

    /** 呼吸下限：0–100%，默认 65%。 */
    function storedBreathe() {
      try {
        return clampStep(window.localStorage.getItem(BREATHE_KEY), BREATHE_MIN, BREATHE_MAX, BREATHE_STEP, DEFAULT_BREATHE);
      } catch {
        return DEFAULT_BREATHE;
      }
    }

    function rememberBreathe(value) {
      try {
        window.localStorage.setItem(BREATHE_KEY, String(value));
      } catch {
        /* 同上 */
      }
    }

    /** 背景样式：点阵 / 流光 / 关闭，默认点阵。
        旧版把“关闭”存在底纹里（:dots = off），读不到 :bg 时兼容一下。 */
    function storedBg() {
      try {
        const id = window.localStorage.getItem(BG_KEY);
        if (BG_MODES.some((mode) => mode.id === id)) return id;
        if (window.localStorage.getItem(DOTS_KEY) === "off") return "off";
        return "dots";
      } catch {
        return "dots";
      }
    }

    function rememberBg(id) {
      try {
        window.localStorage.setItem(BG_KEY, id);
      } catch {
        /* 同上 */
      }
    }

    /** 流光色板：mist / dusk / jade / amber，默认 mist。 */
    function storedFlow() {
      try {
        const id = window.localStorage.getItem(FLOW_KEY);
        return FLOW_MODES.some((mode) => mode.id === id) ? id : "mist";
      } catch {
        return "mist";
      }
    }

    function rememberFlow(id) {
      try {
        window.localStorage.setItem(FLOW_KEY, id);
      } catch {
        /* 同上 */
      }
    }

    /** 流光速率：0.2–2.5×，默认 1×。 */
    function storedSpeed() {
      try {
        return clampStep(window.localStorage.getItem(SPEED_KEY), SPEED_MIN, SPEED_MAX, SPEED_STEP, DEFAULT_SPEED);
      } catch {
        return DEFAULT_SPEED;
      }
    }

    function rememberSpeed(value) {
      try {
        window.localStorage.setItem(SPEED_KEY, String(value));
      } catch {
        /* 同上 */
      }
    }

    /** 品牌字标：只做单行化 + 截断，保留输入中的空格（渲染时再 trim 判断空值）。 */
    function cleanWordmark(value) {
      if (typeof value !== "string") return "";
      return value.replace(/[\r\n\t]+/g, " ").slice(0, MAX_WORDMARK);
    }

    function storedWordmark() {
      try {
        const value = window.localStorage.getItem(WORDMARK_KEY);
        return value === null ? DEFAULT_WORDMARK : cleanWordmark(value);
      } catch {
        return DEFAULT_WORDMARK;
      }
    }

    function rememberWordmark(value) {
      try {
        window.localStorage.setItem(WORDMARK_KEY, value);
      } catch {
        /* 同上 */
      }
    }

    /** 主题样式表：跟着插件生命周期一起装卸。 */
    function installStyles(ctx) {
      if (typeof document === "undefined") return;
      ctx.effect(() => {
        const tag = document.createElement("style");
        tag.dataset.plugin = PLUGIN_ID;
        tag.dataset.pluginCss = PLUGIN_ID + "/theme.css";
        tag.textContent = CSS;
        document.head.appendChild(tag);
        return () => {
          tag.remove();
        };
      }, "averita: theme stylesheet");
    }

    /* ── 三轴正交六芒星：照个人站 toolstar.ts 的正等轴投影 ───────────────
       六支 = ±x ±y ±z，yaw 45° / pitch 35.264°；每支是一个锥形四边形，
       fill-opacity 按深度 z 从 0.44（远）到 0.90（近）。 */
    const STAR_DEG = Math.PI / 180;

    function projectStar(angle, wobble) {
      const yaw = angle * STAR_DEG;
      const pitch = (35.264 + wobble) * STAR_DEG;
      const cy = Math.cos(yaw);
      const sy = Math.sin(yaw);
      const cp = Math.cos(pitch);
      const sp = Math.sin(pitch);
      const spikes = [];
      for (const [ax, ay, az] of [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]) {
        for (const s of [1, -1]) {
          const x0 = ax * s;
          const y0 = ay * s;
          const z0 = az * s;
          const x1 = x0 * cy + z0 * sy;
          const z1 = -x0 * sy + z0 * cy;
          const y2 = y0 * cp - z1 * sp;
          const z2 = y0 * sp + z1 * cp;
          spikes.push({ x: x1 * 16, y: -y2 * 16, z: z2 });
        }
      }
      spikes.sort((a, b) => a.z - b.z);
      let out = "";
      for (const p of spikes) {
        const len = Math.hypot(p.x, p.y);
        if (len < 0.6) continue;
        const ux = p.x / len;
        const uy = p.y / len;
        const w = 1.9;
        const op = (0.44 + (0.46 * (p.z + 1)) / 2).toFixed(3);
        out += `<path d="M${(-uy * w).toFixed(2)} ${(ux * w).toFixed(2)}L${p.x.toFixed(2)} ${p.y.toFixed(2)}L${(uy * w).toFixed(2)} ${(-ux * w).toFixed(2)}L${(-ux * 1.4).toFixed(2)} ${(-uy * 1.4).toFixed(2)}Z" fill="currentColor" fill-opacity="${op}"/>`;
      }
      out += '<circle class="av-star-hub" r="1.7"/>';
      return out;
    }

    function BrandMark() {
      const group = React.useRef(null);
      React.useEffect(() => {
        const g = group.current;
        if (g === null) return;
        const reduced =
          typeof window.matchMedia === "function"
            ? window.matchMedia("(prefers-reduced-motion: reduce)")
            : null;
        let raf = 0;
        let auto = 45;
        let last = 0;
        let lastDraw = 0;
        const hidden = () => document.hidden === true;
        const frame = (now) => {
          raf = requestAnimationFrame(frame);
          if (hidden() || (reduced !== null && reduced.matches)) return;
          const dt = last === 0 ? 0 : Math.min(0.1, (now - last) / 1000);
          last = now;
          auto = (auto + dt * 10) % 360;
          if (now - lastDraw < 33) return;
          lastDraw = now;
          g.innerHTML = projectStar(auto, Math.sin(now / 3000) * 4);
        };
        const start = () => {
          last = 0;
          lastDraw = 0;
          g.innerHTML = projectStar(auto, 0);
          if (raf === 0) raf = requestAnimationFrame(frame);
        };
        const stop = () => {
          if (raf !== 0) {
            cancelAnimationFrame(raf);
            raf = 0;
          }
        };
        const onVisibility = () => (hidden() ? stop() : start());
        start();
        document.addEventListener("visibilitychange", onVisibility);
        return () => {
          stop();
          document.removeEventListener("visibilitychange", onVisibility);
        };
      }, []);
      return h(
        "span",
        { className: "av-brand-mark", "aria-hidden": "true" },
        h(
          "svg",
          { viewBox: "-20 -20 40 40" },
          h("g", { ref: group, dangerouslySetInnerHTML: { __html: projectStar(45, 0) } }),
        ),
      );
    }

    /** 左上角字标：订阅设置里的改动；空值（含全空白）时整段不渲染。 */
    function BrandName() {
      const [text, setText] = React.useState(() => wordmark);
      React.useEffect(() => {
        const sync = () => setText(wordmark);
        sync();
        listeners.add(sync);
        return () => listeners.delete(sync);
      }, []);
      const label = String(text ?? "").trim();
      if (label === "") return null;
      return h("span", { className: "av-brand-name", title: label }, label);
    }

const SETTING_GROUPS = [
  {
    "id": "brand",
    "label": "品牌",
    "order": 10
  },
  {
    "id": "background",
    "label": "背景",
    "order": 20
  },
  {
    "id": "deco",
    "label": "装饰",
    "order": 30
  }
];
/* ═══ settings: brand ═══ */
/**
 * 品牌组设置行：自定义左上角 logo 右侧的字标。
 *
 * 这一组没有对应的 CSS（字标样式在 src/theme.css 的 .av-brand-name），只负责设置面板。
 * 本文件被 scripts/build.mjs 原样内联进 client.js，只能引用参数 api。
 * 空串是合法值：输入框留空 = 只显示 logo 星标。
 */
function brandSettings(api) {
  const { h, props, state, brand } = api;
  const { wordmark } = state;
  const { defaultWordmark, maxWordmark } = brand;
  const empty = wordmark.trim() === "";
  const length = Array.from(wordmark.trim()).length;

  return [
    {
      group: "brand",
      order: 10,
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
          title: `默认：${defaultWordmark}；最多 ${maxWordmark} 字，留空只显示星标`,
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
          empty ? "留空：只显示星标" : `侧栏字标 · ${length}/${maxWordmark}`,
        ),
      ),
    },
  ];
}

/* ═══ settings: backdrop ═══ */
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

/* ═══ settings: deco ═══ */
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

/* ═══ settings: dots ═══ */
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

/* ═══ settings: flow ═══ */
/**
 * 流光组设置行：色板、速率。
 *
 * 只在背景为流光时出现；缩放 / 浓淡是点阵与流光共用的，在 backdrop/settings.js。
 * 本文件被 scripts/build.mjs 原样内联进 client.js，只能引用参数 api。
 */
function flowSettings(api) {
  const { h, props, state, helpers, modes, limits } = api;
  const { FLOW_MODES, FLOW_HINT } = modes;
  const { bg, flow, speed } = state;

  if (bg !== "flow") return [];

  return [
    {
      group: "background",
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
        h("span", { className: "av-theme-state" }, FLOW_HINT[flow] ?? FLOW_HINT.mist),
      ),
    },
    {
      group: "background",
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

const COMPONENT_SETTINGS = {
  brand: brandSettings,
  backdrop: backdropSettings,
  deco: decoSettings,
  dots: dotsSettings,
  flow: flowSettings,
};

    /** 设置页：主题网格是核心，其余行由 src/components/<id>/settings.js 按 order 排。 */
    function ThemeSection(props) {
      const read = () => ({
        theme: props.getActive(),
        wordmark: props.getWordmark(),
        deco: props.getDeco(),
        star: props.getStar(),
        dots: props.getDots(),
        glyph: props.getGlyph(),
        scale: props.getScale(),
        depth: props.getDepth(),
        speed: props.getSpeed(),
        motion: props.getMotion(),
        breathe: props.getBreathe(),
        bg: props.getBg(),
        flow: props.getFlow(),
        flowOk: props.getFlowAvailable(),
      });
      const [state, setState] = React.useState(read);
      const [reduced, setReduced] = React.useState(false);
      React.useEffect(() => props.subscribe(() => setState(read())), [props]);
      React.useEffect(() => {
        if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (!mq) return;
        const sync = () => setReduced(mq.matches);
        sync();
        mq.addEventListener?.("change", sync);
        return () => mq.removeEventListener?.("change", sync);
      }, []);

      /* 传给每个组件的设置片段；片段只能拿这一份 api。 */
      const api = {
        h,
        props,
        state,
        reduced,
        brand: {
          defaultWordmark: DEFAULT_WORDMARK,
          maxWordmark: MAX_WORDMARK,
        },
        helpers: {
          scaleFill,
          depthFill,
          scaleText,
          depthText,
          depthHint,
          speedFill,
          speedText,
          speedHint,
          breatheFill,
          breatheText,
          breatheHint,
          flowOpacity,
        },
        modes: {
          BG_MODES,
          BG_HINT,
          DECO_MODES,
          DECO_HINT,
          STAR_MODES,
          STAR_HINT,
          DOT_MODES,
          DOT_HINT,
          FLOW_MODES,
          FLOW_HINT,
          GLYPH_MODES,
          MOTION_MODES,
          MOTION_HINT,
        },
        limits: {
          SCALE_MIN,
          SCALE_MAX,
          SCALE_STEP,
          DEPTH_MIN,
          DEPTH_MAX,
          DEPTH_STEP,
          SPEED_MIN,
          SPEED_MAX,
          SPEED_STEP,
          BREATHE_MIN,
          BREATHE_MAX,
          BREATHE_STEP,
        },
      };

      /* 各组件交行；带 group 的行按组连续渲染，没组的排最后（重置是插件级）。 */
      const rows = [];
      for (const factory of Object.values(COMPONENT_SETTINGS)) {
        for (const row of factory(api)) rows.push(row);
      }
      rows.push({
        order: 999,
        node: h(
          "div",
          { className: "av-deco-row" },
          h("span", { className: "av-theme-sub" }, "重置背景"),
          h(
            "button",
            { type: "button", className: "av-deco-chip", onClick: () => props.resetBackground() },
            "恢复默认",
          ),
          h("span", { className: "av-theme-state" }, "背景 / 底纹 / 色板 / 缩放 / 浓淡 回默认"),
        ),
      });

      const groups = new Map(SETTING_GROUPS.map((group) => [group.id, { ...group, rows: [] }]));
      const loose = [];
      for (const row of rows) {
        const bucket = row.group ? groups.get(row.group) : null;
        if (bucket) bucket.rows.push(row);
        else loose.push(row);
      }

      const panelRows = [];
      const orderedGroups = [...groups.values()]
        .filter((group) => group.rows.length > 0)
        .sort((a, b) => a.order - b.order);
      for (const group of orderedGroups) {
        panelRows.push(h("div", { className: "av-theme-group", key: "group-" + group.id }, group.label));
        group.rows.sort((a, b) => a.order - b.order);
        for (const row of group.rows) {
          panelRows.push(React.cloneElement(row.node, { key: group.id + ":" + row.order }));
        }
      }
      loose.sort((a, b) => a.order - b.order);
      for (const row of loose) {
        panelRows.push(React.cloneElement(row.node, { key: "loose:" + row.order }));
      }

      const { theme: active } = state;
      return h(
        "div",
        { className: "av-theme-panel" },
        h(
          "div",
          { className: "av-theme-head" },
          h("span", { className: "av-theme-title" }, "主题"),
          h("span", { className: "av-theme-sub" }, DEFAULT_WORDMARK + " 主题集"),
        ),
        h(
          "div",
          { className: "av-theme-grid" },
          THEMES.map((theme) =>
            h(
              "button",
              {
                key: theme.id,
                type: "button",
                className: "av-theme-card" + (theme.id === active ? " av-theme-card--on" : ""),
                onClick: () => props.select(theme.id),
              },
              h("span", {
                className: "av-theme-chip",
                "aria-hidden": "true",
                style: {
                  background: `linear-gradient(135deg, ${theme.vars.light.space} 0%, ${theme.vars.light.mark} 100%)`,
                },
              }),
              h("span", { className: "av-theme-label" }, theme.label),
              h("span", { className: "av-theme-state" }, theme.id === active ? "使用中" : "切换"),
            ),
          ),
        ),
        panelRows,
      );
    }

    const inject = ["theme", "slots"];

    function apply(ctx) {
      installStyles(ctx);

      const root = document.documentElement;
      let paletteDispose = null;

      /* ── 流光画布：切到流光时才建，切走就拆；没有 WebGL2 就返回 false 让调用方回退。 */
      function ensureFlow() {
        if (flowRenderer) return true;
        if (typeof document === "undefined" || !document.body || typeof createFlowBackground !== "function") return false;
        const canvas = document.createElement("canvas");
        canvas.className = "av-flow";
        canvas.setAttribute("aria-hidden", "true");
        const renderer = createFlowBackground(canvas);
        if (!renderer) return false;
        document.body.insertBefore(canvas, document.body.firstChild);
        renderer.setZoom(scaleMode);
        renderer.setOpacity(flowOpacity(depthMode));
        renderer.setSpeed(speedMode);
        renderer.start();
        flowCanvas = canvas;
        flowRenderer = renderer;
        flowUnavailable = false;
        /* 下一帧再淡入，避免刚插进 DOM 就跳出来。 */
        window.requestAnimationFrame(() => canvas.classList.add("av-flow--on"));
        return true;
      }

      function destroyFlow() {
        if (flowCanvas) {
          flowCanvas.remove();
          flowCanvas = null;
        }
        if (flowRenderer) {
          flowRenderer.dispose();
          flowRenderer = null;
        }
      }

      const applyBg = () => {
        if (bgMode === "dots") root.removeAttribute("data-av-bg");
        else root.setAttribute("data-av-bg", bgMode);
      };

      selectTheme = (id) => {
        const theme = THEME_BY_ID.get(id) ?? THEME_BY_ID.get(DEFAULT_THEME);
        if (paletteDispose !== null) {
          paletteDispose();
          paletteDispose = null;
        }
        paletteDispose = ctx.theme.overrideTokens(PLUGIN_ID, theme.tokens);
        root.setAttribute("data-av-theme", theme.id);
        activeId = theme.id;
        rememberTheme(theme.id);
        for (const fn of listeners) fn();
      };
      getActive = () => activeId;

      /* 品牌字标：空串合法（只显示星标）；只落 React 状态与 localStorage，不挂 DOM 属性。 */
      selectWordmark = (value) => {
        wordmark = cleanWordmark(value);
        rememberWordmark(wordmark);
        for (const fn of listeners) fn();
      };
      getWordmark = () => wordmark;

      selectDeco = (id) => {
        decoMode = id === "star" || id === "plain" ? id : "paper";
        if (decoMode === "plain") root.removeAttribute("data-av-deco");
        else root.setAttribute("data-av-deco", decoMode);
        rememberDeco(decoMode);
        for (const fn of listeners) fn();
      };
      getDeco = () => decoMode;

      selectStar = (id) => {
        starVariant = id === "b" ? "b" : "a";
        root.setAttribute("data-av-star", starVariant);
        rememberStar(starVariant);
        for (const fn of listeners) fn();
      };
      getStar = () => starVariant;

      selectDots = (id) => {
        dotsMode = DOT_MODES.some((mode) => mode.id === id) ? id : "dot";
        if (dotsMode === "dot") root.removeAttribute("data-av-dots");
        else root.setAttribute("data-av-dots", dotsMode);
        rememberDots(dotsMode);
        for (const fn of listeners) fn();
      };
      getDots = () => dotsMode;

      selectGlyph = (id) => {
        glyphMode = GLYPH_MODES.some((mode) => mode.id === id) ? id : "plus";
        root.setAttribute("data-av-glyph", glyphMode);
        rememberGlyph(glyphMode);
        for (const fn of listeners) fn();
      };
      getGlyph = () => glyphMode;

      // 缩放 / 浓淡：滑杆值直接写 html 上的 CSS 变量，无级、不挂 data 属性。
      selectScale = (value) => {
        scaleMode = clampStep(value, SCALE_MIN, SCALE_MAX, SCALE_STEP, 1);
        root.style.setProperty("--av-scale", String(scaleMode));
        flowRenderer?.setZoom(scaleMode);
        rememberScale(scaleMode);
        for (const fn of listeners) fn();
      };
      getScale = () => scaleMode;

      selectDepth = (value) => {
        depthMode = clampStep(value, DEPTH_MIN, DEPTH_MAX, DEPTH_STEP, 1);
        root.style.setProperty("--av-depth", String(depthMode));
        flowRenderer?.setOpacity(flowOpacity(depthMode));
        rememberDepth(depthMode);
        for (const fn of listeners) fn();
      };
      getDepth = () => depthMode;

      /* 流光速率：只改渲染器的时间步长，不挂 CSS 变量。 */
      selectSpeed = (value) => {
        speedMode = clampStep(value, SPEED_MIN, SPEED_MAX, SPEED_STEP, DEFAULT_SPEED);
        flowRenderer?.setSpeed(speedMode);
        rememberSpeed(speedMode);
        for (const fn of listeners) fn();
      };
      getSpeed = () => speedMode;

      // 背景动效：都开 = 不挂属性（走 theme.css 默认），其余挂 data-av-motion。
      selectMotion = (id) => {
        motionMode = MOTION_MODES.some((mode) => mode.id === id) ? id : "both";
        if (motionMode === "both") root.removeAttribute("data-av-motion");
        else root.setAttribute("data-av-motion", motionMode);
        rememberMotion(motionMode);
        for (const fn of listeners) fn();
      };
      getMotion = () => motionMode;

      // 呼吸下限：0 = 谷底完全淡出，1 = 不呼吸；写进 --av-breathe-min。
      selectBreathe = (value) => {
        breatheMode = clampStep(value, BREATHE_MIN, BREATHE_MAX, BREATHE_STEP, DEFAULT_BREATHE);
        root.style.setProperty("--av-breathe-min", String(breatheMode));
        rememberBreathe(breatheMode);
        for (const fn of listeners) fn();
      };
      getBreathe = () => breatheMode;

      /* 背景样式：点阵 / 流光 / 关闭。流光要有 WebGL2，建不起来就不切，面板给提示。 */
      selectBg = (id) => {
        const next = BG_MODES.some((mode) => mode.id === id) ? id : "dots";
        if (next === "flow" && !ensureFlow()) {
          flowUnavailable = true;
          for (const fn of listeners) fn();
          return;
        }
        if (next !== "flow") destroyFlow();
        bgMode = next;
        applyBg();
        rememberBg(bgMode);
        for (const fn of listeners) fn();
      };
      getBg = () => bgMode;

      /* 色板：只改 CSS 属性，画布下一帧自己取色。 */
      selectFlow = (id) => {
        flowPalette = FLOW_MODES.some((mode) => mode.id === id) ? id : "mist";
        root.setAttribute("data-av-flow-palette", flowPalette);
        rememberFlow(flowPalette);
        flowRenderer?.refreshPalette();
        for (const fn of listeners) fn();
      };
      getFlow = () => flowPalette;

      // 背景那一组一键回默认（主题 / 装饰 / 星形不动）。
      const resetBackground = () => {
        selectBg("dots");
        selectDots("dot");
        selectFlow("mist");
        selectGlyph("plus");
        selectScale(1);
        selectDepth(1);
        selectSpeed(DEFAULT_SPEED);
        selectMotion("both");
        selectBreathe(DEFAULT_BREATHE);
      };

      ctx.effect(() => {
        // 旧版把缩放 / 浓淡落成 data 属性；升级后清掉，避免残留在 html 上。
        root.removeAttribute("data-av-scale");
        root.removeAttribute("data-av-depth");
        selectTheme(storedTheme());
        selectWordmark(storedWordmark());
        selectDeco(storedDeco());
        selectStar(storedStar());
        selectFlow(storedFlow());
        selectGlyph(storedGlyph());
        selectScale(storedScale());
        selectDepth(storedDepth());
        selectSpeed(storedSpeed());
        selectMotion(storedMotion());
        selectBreathe(storedBreathe());
        selectDots(storedDots());
        selectBg(storedBg());
        return () => {
          destroyFlow();
          if (paletteDispose !== null) paletteDispose();
          paletteDispose = null;
          listeners.clear();
          root.removeAttribute("data-av-theme");
          root.removeAttribute("data-av-deco");
          root.removeAttribute("data-av-star");
          root.removeAttribute("data-av-dots");
          root.removeAttribute("data-av-glyph");
          root.removeAttribute("data-av-motion");
          root.removeAttribute("data-av-bg");
          root.removeAttribute("data-av-flow-palette");
          root.removeAttribute("data-av-scale");
          root.removeAttribute("data-av-depth");
          root.style.removeProperty("--av-scale");
          root.style.removeProperty("--av-depth");
          root.style.removeProperty("--av-breathe-min");
        };
      }, "averita: palette");

      // 窗口不在前台时停掉背景动画（只停 CSS animation，不动任何状态）。
      if (typeof document !== "undefined") {
        ctx.effect(() => {
          const sync = () => root.toggleAttribute("data-av-idle", document.hidden);
          document.addEventListener("visibilitychange", sync);
          sync();
          return () => {
            document.removeEventListener("visibilitychange", sync);
            root.removeAttribute("data-av-idle");
          };
        }, "averita: background idle");
      }

      // single slot、官方品牌在 priority 0；用更低的优先级盖住，卸载即回退。
      ctx.slots.inject("sidebar.brand.mark", () =>
        ctx.slots.register({ name: "sidebar.brand.mark", priority: -1 }, BrandMark),
      );
      ctx.slots.inject("sidebar.brand.name", () =>
        ctx.slots.register({ name: "sidebar.brand.name", priority: -1 }, BrandName),
      );
      ctx.slots.inject("settings.section", () =>
        ctx.slots.register(
          {
            name: "settings.section",
            id: "averita-theme",
            order: 40,
            label: () => "主题",
            inject: () => ({
              select: (id) => selectTheme(id),
              getActive: () => getActive(),
              selectWordmark: (value) => selectWordmark(value),
              getWordmark: () => getWordmark(),
              selectDeco: (id) => selectDeco(id),
              getDeco: () => getDeco(),
              selectStar: (id) => selectStar(id),
              getStar: () => getStar(),
              selectDots: (id) => selectDots(id),
              getDots: () => getDots(),
              selectGlyph: (id) => selectGlyph(id),
              getGlyph: () => getGlyph(),
              selectScale: (value) => selectScale(value),
              getScale: () => getScale(),
              selectDepth: (value) => selectDepth(value),
              getDepth: () => getDepth(),
              selectSpeed: (value) => selectSpeed(value),
              getSpeed: () => getSpeed(),
              selectMotion: (id) => selectMotion(id),
              getMotion: () => getMotion(),
              selectBreathe: (value) => selectBreathe(value),
              getBreathe: () => getBreathe(),
              selectBg: (id) => selectBg(id),
              getBg: () => getBg(),
              selectFlow: (id) => selectFlow(id),
              getFlow: () => getFlow(),
              getFlowAvailable: () => getFlowAvailable(),
              resetBackground: () => resetBackground(),
              subscribe: (fn) => {
                listeners.add(fn);
                return () => listeners.delete(fn);
              },
            }),
          },
          ThemeSection,
        ),
      );
    }

    return { inject, apply };
  },
});