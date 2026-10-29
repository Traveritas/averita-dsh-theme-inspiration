/**
 * AveritA —— DSH 主题令牌
 *
 * 取色自 personal-website 当前版（wander.css 的三种夜色 + 点阵/双缝/玻璃语言）。
 * 这里只写「浅色 / 深色」两套语义值，DSH 的 light/dark 开关就是昼/夜开关。
 * 约定：所有键必须是真实存在的 --dsw-* 自定义属性；背景动画的私有变量
 * 用 --av-*，写在本文件外的 theme.css 里。
 */
export default {
  light: {
    // ── 空间与表面 ──
    '--dsw-alias-bg-base': '#e5eaf0',
    '--dsw-alias-bg-layer-1': 'rgba(250, 252, 254, 0.86)',
    '--dsw-alias-bg-layer-2': 'rgba(247, 250, 252, 0.90)',
    '--dsw-alias-bg-layer-3': 'rgba(252, 253, 255, 0.94)',
    '--dsw-alias-bg-overlay': 'rgba(247, 250, 253, 0.94)',
    '--dsw-alias-bg-module-platform': 'rgba(239, 244, 249, 0.90)',
    '--dsw-alias-bg-document-preview': '#eff3f7',
    '--dsw-alias-bg-document-selection': 'rgba(97, 86, 125, 0.24)',
    '--dsw-alias-bg-skeleton': 'rgba(55, 63, 79, 0.06)',
    '--dsw-alias-bg-multi-select': 'rgba(55, 63, 79, 0.05)',
    '--dsw-alias-bg-mask-1': 'rgba(11, 14, 21, 0.28)',
    '--dsw-alias-bg-mask-2': 'rgba(11, 14, 21, 0.14)',
    '--dsw-alias-bg-mask-3': 'rgba(11, 14, 21, 0.50)',
    '--dsw-alias-bg-mask-drop': 'rgba(255, 255, 255, 0.70)',
    '--dsw-alias-bg-mask-photo': 'rgba(0, 0, 0, 0.88)',

    // ── 文字 ──
    '--dsw-alias-label-primary': '#24282f',
    '--dsw-alias-label-primary-dimmed': '#3c434d',
    '--dsw-alias-label-primary-inverted': '#f8fafc',
    '--dsw-alias-label-primary-foreground': '#ffffff',
    '--dsw-alias-label-primary-bluish': '#24282f',
    '--dsw-alias-label-secondary': '#58606b',
    '--dsw-alias-label-tertiary': '#68707b',
    '--dsw-alias-label-caption': '#7f8894',
    '--dsw-alias-label-dimmed': '#cfd5dd',
    '--dsw-alias-label-document-preview': '#3c434d',
    '--dsw-alias-label-shimmer': 'rgba(36, 40, 47, 0.18)',

    // ── 线 ──
    '--dsw-alias-border-l1': 'rgba(55, 63, 79, 0.14)',
    '--dsw-alias-border-l2': 'rgba(55, 63, 79, 0.22)',
    '--dsw-alias-border-l3': 'rgba(55, 63, 79, 0.28)',
    '--dsw-alias-border-l4': 'rgba(55, 63, 79, 0.34)',
    '--dsw-alias-border-l2-darkmode-thin': 'rgba(55, 63, 79, 0.22)',
    '--dsw-alias-border-inverted': 'rgba(255, 255, 255, 0.40)',
    '--dsw-alias-border-inverted2': 'rgba(255, 255, 255, 0.55)',

    // ── 交互 ──
    '--dsw-alias-interactive-bg-hover': 'rgba(55, 63, 79, 0.055)',
    '--dsw-alias-interactive-bg-active': 'rgba(55, 63, 79, 0.095)',
    '--dsw-alias-interactive-bg-hover-solid': 'rgba(239, 244, 249, 0.90)',
    '--dsw-alias-interactive-bg-hover-accent': 'rgba(97, 86, 125, 0.10)',
    '--dsw-alias-interactive-bg-hover-danger': 'rgba(151, 76, 59, 0.06)',

    // ── 品牌 / 强调 ──
    '--dsw-alias-brand-primary': '#514d63',
    '--dsw-alias-brand-primary-invert': '#f8fafc',
    '--dsw-alias-brand-text': '#514d63',
    '--dsw-alias-brand-primary-new-colorprimary-new-color': '#61567d',

    // ── 按钮 ──
    '--dsw-alias-button-primary-fill': '#514d63',
    '--dsw-alias-button-primary-hover': '#615d75',
    '--dsw-alias-button-primary-dimmed': 'rgba(81, 77, 99, 0.16)',
    '--dsw-alias-button-contrast-fill': '#24282f',
    '--dsw-alias-button-elevated-fill': '#fbfdfe',
    '--dsw-alias-button-floating-fill': 'rgba(252, 253, 255, 0.90)',
    '--dsw-alias-button-floating-hover': 'rgba(245, 248, 251, 0.95)',
    '--dsw-alias-button-ghost-active-fill': 'rgba(55, 63, 79, 0.06)',
    '--dsw-alias-button-ghost-active-hover': 'rgba(55, 63, 79, 0.09)',
    '--dsw-alias-button-ghost-active-border': 'rgba(55, 63, 79, 0.30)',
    '--dsw-alias-button-info-fill': '#61567d',
    '--dsw-alias-button-info-hover': '#716591',

    // ── 状态 ──
    '--dsw-alias-state-business-primary': '#61567d',
    '--dsw-alias-state-business-tertiary': 'rgba(97, 86, 125, 0.10)',
    '--dsw-alias-state-done-primary': '#7b6397',
    '--dsw-alias-state-error-primary': '#974c3b',
    '--dsw-alias-state-error-secondary': '#ac6150',
    '--dsw-alias-state-idle-primary': '#b9c1cc',
    '--dsw-alias-state-success-primary': '#4c6c56',
    '--dsw-alias-state-success-secondary': '#62856e',
    '--dsw-alias-state-success-tertiary': 'rgba(76, 108, 86, 0.12)',
    '--dsw-alias-state-warn-primary': '#856131',
    '--dsw-alias-state-warn-secondary': '#9d743b',
    '--dsw-alias-state-warn-tertiary': 'rgba(133, 97, 49, 0.12)',
    '--dsw-alias-state-warn-label': '#856131',
    '--dsw-alias-link': '#61567d',
    '--dsw-alias-menu-icon': '#4d5561',
    '--dsw-focus-ring-width': '2px',

    // ── Markdown / 代码 ──
    '--dsw-alias-markdown-code-block': 'rgba(234, 239, 245, 0.92)',
    '--dsw-alias-markdown-code-block-banner': 'rgba(230, 235, 242, 0.94)',
    '--dsw-alias-markdown-code-segment-selected': '#ffffff',
    '--dsw-alias-markdown-code-segment-unselected': 'rgba(237, 242, 247, 0.90)',
    '--dsw-alias-markdown-inline-code': 'rgba(230, 235, 242, 0.90)',
    '--dsw-alias-markdown-placeholder': 'rgba(237, 242, 247, 0.80)',
    '--dsw-alias-markdown-tag': 'rgba(237, 242, 247, 0.90)',
    '--dsw-alias-markdown-citation': 'rgba(97, 86, 125, 0.10)',
    '--dsw-alias-turn-trigger-bg': 'rgba(234, 239, 245, 0.92)',
    '--dsw-alias-turn-trigger-bg-hover': 'rgba(55, 63, 79, 0.055)',

    // ── 浮层 / 菜单 ──
    '--dsw-specific-menu': 'rgba(248, 251, 253, 0.88)',
    '--dsw-alias-menu-group-header-fill': 'rgba(248, 251, 253, 0.96)',
    '--dsw-alias-tooltip-bg': 'rgba(36, 40, 47, 0.94)',
    '--dsw-alias-toast-bg': 'rgba(36, 40, 47, 0.94)',
    '--dsw-alias-toast-label': '#f8fafc',
    '--dsw-alias-switch-thumb': '#ffffff',
    '--dsw-menu-backdrop-filter': 'blur(14px) saturate(120%)',
    '--dsw-mask-blur': 'none',

    // ── 侧栏 / 输入 / 气泡 ──
    '--dsw-specific-sidebar-fill': 'rgba(244, 248, 251, 0.72)',
    '--dsw-specific-sidebar-nav-item-active': 'rgba(81, 77, 99, 0.07)',
    '--dsw-specific-sidebar-nav-item-active-accent': 'rgba(97, 86, 125, 0.10)',
    '--dsw-specific-input-major': 'rgba(252, 253, 255, 0.86)',
    '--dsw-specific-bubble': 'rgba(241, 242, 248, 0.88)',
    '--dsw-specific-bubble-highlight': 'rgba(230, 231, 242, 0.92)',
    '--dsw-specific-selector': 'rgba(239, 244, 249, 0.86)',
    '--dsw-specific-tip': 'rgba(241, 245, 249, 0.90)',
    '--dsw-specific-login-input': '#eff3f7',

    // ── 滚动条 ──
    '--dsw-alias-scrollbar-bg-l1': 'rgba(55, 63, 79, 0.20)',
    '--dsw-alias-scrollbar-bg-l2': 'rgba(55, 63, 79, 0.24)',
    '--dsw-alias-scrollbar-hover-l1': 'rgba(55, 63, 79, 0.34)',
    '--dsw-alias-scrollbar-hover-l2': 'rgba(55, 63, 79, 0.38)',

    '--ds-ease-in-out': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
    '--ds-transition-duration': '180ms',
    '--ds-transition-duration-fast': '120ms',
    '--ds-transition-duration-slow': '300ms',
    // ── 形状 / 阴影 ──
    '--dsw-radius-xs': '2px',
    '--dsw-radius-sm': '3px',
    '--dsw-radius-md': '4px',
    '--dsw-radius-lg': '6px',
    '--dsw-radius-xl': '8px',
    '--dsw-radius-panel': '10px',
    '--dsw-shadow-lv1': '0 1px 2px rgba(36, 40, 47, 0.05)',
    '--dsw-shadow-lv1-blur': '0 2px 8px rgba(36, 40, 47, 0.04)',
    '--dsw-shadow-lv2': '0 6px 20px rgba(36, 40, 47, 0.07), 0 1px 2px rgba(36, 40, 47, 0.05)',
    '--dsw-shadow-lv3': '0 20px 56px rgba(36, 40, 47, 0.12), 0 2px 8px rgba(36, 40, 47, 0.06)',
    '--dsw-elevation-stroke-color': 'rgba(55, 63, 79, 0.18)',

    // ── 字体（只接管正文标题，正文/界面字体交给 DSH 设置） ──
    '--dsw-font-markdown-h1-font-family': '"Noto Serif SC", "Source Han Serif SC", "Songti SC", "SimSun", serif',
    '--dsw-font-markdown-h2-font-family': '"Noto Serif SC", "Source Han Serif SC", "Songti SC", "SimSun", serif',
    '--dsw-font-markdown-h3-font-family': '"Noto Serif SC", "Source Han Serif SC", "Songti SC", "SimSun", serif',

    // ── 语法高亮（Shiki） ──
    '--shiki-token-constant': '#7b6397',
    '--shiki-token-string': '#446b6f',
    '--shiki-token-comment': '#7f8894',
    '--shiki-token-keyword': '#6d5c91',
    '--shiki-token-parameter': '#815b38',
    '--shiki-token-function': '#7b6397',
    '--shiki-token-string-expression': '#446b6f',
    '--shiki-token-punctuation': '#4d5561',
    '--shiki-token-link': '#61567d',
  },

  dark: {
    // ── 空间与表面 ──
    '--dsw-alias-bg-base': '#0e131e',
    '--dsw-alias-bg-layer-1': 'rgba(25, 32, 45, 0.72)',
    '--dsw-alias-bg-layer-2': 'rgba(19, 26, 38, 0.82)',
    '--dsw-alias-bg-layer-3': 'rgba(29, 37, 53, 0.78)',
    '--dsw-alias-bg-overlay': 'rgba(18, 25, 36, 0.92)',
    '--dsw-alias-bg-module-platform': 'rgba(23, 30, 43, 0.90)',
    '--dsw-alias-bg-document-preview': '#111824',
    '--dsw-alias-bg-document-selection': 'rgba(163, 153, 189, 0.26)',
    '--dsw-alias-bg-skeleton': 'rgba(255, 255, 255, 0.06)',
    '--dsw-alias-bg-multi-select': 'rgba(255, 255, 255, 0.04)',
    '--dsw-alias-bg-mask-1': 'rgba(3, 5, 9, 0.40)',
    '--dsw-alias-bg-mask-2': 'rgba(3, 5, 9, 0.20)',
    '--dsw-alias-bg-mask-3': 'rgba(3, 5, 9, 0.56)',
    '--dsw-alias-bg-mask-drop': 'rgba(11, 14, 21, 0.70)',
    '--dsw-alias-bg-mask-photo': 'rgba(0, 0, 0, 0.88)',

    // ── 文字 ──
    '--dsw-alias-label-primary': '#e7ebf0',
    '--dsw-alias-label-primary-dimmed': '#cad2dd',
    '--dsw-alias-label-primary-inverted': '#0d1119',
    '--dsw-alias-label-primary-foreground': '#0d1119',
    '--dsw-alias-label-primary-bluish': '#e7ebf0',
    '--dsw-alias-label-secondary': '#a9b4c3',
    '--dsw-alias-label-tertiary': '#8691a2',
    '--dsw-alias-label-caption': '#6f7b8c',
    '--dsw-alias-label-dimmed': '#3d4757',
    '--dsw-alias-label-document-preview': '#cad2dd',
    '--dsw-alias-label-shimmer': 'rgba(231, 235, 240, 0.24)',

    // ── 线 ──
    '--dsw-alias-border-l1': 'rgba(174, 204, 220, 0.12)',
    '--dsw-alias-border-l2': 'rgba(174, 204, 220, 0.18)',
    '--dsw-alias-border-l3': 'rgba(174, 204, 220, 0.24)',
    '--dsw-alias-border-l4': 'rgba(174, 204, 220, 0.30)',
    '--dsw-alias-border-l2-darkmode-thin': 'rgba(174, 204, 220, 0.14)',
    '--dsw-alias-border-inverted': 'rgba(0, 0, 0, 0)',
    '--dsw-alias-border-inverted2': 'rgba(0, 0, 0, 0)',

    // ── 交互 ──
    '--dsw-alias-interactive-bg-hover': 'rgba(195, 215, 235, 0.06)',
    '--dsw-alias-interactive-bg-active': 'rgba(195, 215, 235, 0.10)',
    '--dsw-alias-interactive-bg-hover-solid': 'rgba(25, 32, 45, 0.90)',
    '--dsw-alias-interactive-bg-hover-accent': 'rgba(186, 173, 210, 0.12)',
    '--dsw-alias-interactive-bg-hover-danger': 'rgba(208, 144, 132, 0.10)',

    // ── 品牌 / 强调 ──
    '--dsw-alias-brand-primary': '#cac1dc',
    '--dsw-alias-brand-primary-invert': '#141928',
    '--dsw-alias-brand-text': '#e7ebf0',
    '--dsw-alias-brand-primary-new-colorprimary-new-color': '#baadd2',

    // ── 按钮 ──
    '--dsw-alias-button-primary-fill': '#cac1dc',
    '--dsw-alias-button-primary-hover': '#d9d2e6',
    '--dsw-alias-button-primary-dimmed': 'rgba(202, 193, 220, 0.16)',
    '--dsw-alias-button-contrast-fill': '#e7ebf0',
    '--dsw-alias-button-elevated-fill': 'rgba(29, 37, 53, 0.90)',
    '--dsw-alias-button-floating-fill': 'rgba(21, 28, 41, 0.90)',
    '--dsw-alias-button-floating-hover': 'rgba(31, 40, 57, 0.95)',
    '--dsw-alias-button-ghost-active-fill': 'rgba(195, 215, 235, 0.06)',
    '--dsw-alias-button-ghost-active-hover': 'rgba(195, 215, 235, 0.09)',
    '--dsw-alias-button-ghost-active-border': 'rgba(174, 204, 220, 0.26)',
    '--dsw-alias-button-info-fill': '#baadd2',
    '--dsw-alias-button-info-hover': '#ccc1e0',

    // ── 状态 ──
    '--dsw-alias-state-business-primary': '#baadd2',
    '--dsw-alias-state-business-tertiary': 'rgba(186, 173, 210, 0.14)',
    '--dsw-alias-state-done-primary': '#c5b5db',
    '--dsw-alias-state-error-primary': '#d09084',
    '--dsw-alias-state-error-secondary': '#daa597',
    '--dsw-alias-state-idle-primary': '#4d5565',
    '--dsw-alias-state-success-primary': '#8bb297',
    '--dsw-alias-state-success-secondary': '#75a88d',
    '--dsw-alias-state-success-tertiary': 'rgba(139, 178, 151, 0.14)',
    '--dsw-alias-state-warn-primary': '#ceae79',
    '--dsw-alias-state-warn-secondary': '#d6ba8a',
    '--dsw-alias-state-warn-tertiary': 'rgba(206, 174, 121, 0.14)',
    '--dsw-alias-state-warn-label': '#ceae79',
    '--dsw-alias-link': '#baadd2',
    '--dsw-alias-menu-icon': '#a3b0c0',
    '--dsw-focus-ring-width': '2px',

    // ── Markdown / 代码 ──
    '--dsw-alias-markdown-code-block': 'rgba(11, 16, 26, 0.72)',
    '--dsw-alias-markdown-code-block-banner': 'rgba(14, 21, 32, 0.86)',
    '--dsw-alias-markdown-code-segment-selected': '#1f283c',
    '--dsw-alias-markdown-code-segment-unselected': 'rgba(14, 21, 32, 0.70)',
    '--dsw-alias-markdown-inline-code': 'rgba(255, 255, 255, 0.06)',
    '--dsw-alias-markdown-placeholder': 'rgba(255, 255, 255, 0.05)',
    '--dsw-alias-markdown-tag': 'rgba(255, 255, 255, 0.06)',
    '--dsw-alias-markdown-citation': 'rgba(186, 173, 210, 0.12)',
    '--dsw-alias-turn-trigger-bg': 'rgba(11, 16, 26, 0.72)',
    '--dsw-alias-turn-trigger-bg-hover': 'rgba(195, 215, 235, 0.06)',

    // ── 浮层 / 菜单 ──
    '--dsw-specific-menu': 'rgba(14, 19, 28, 0.90)',
    '--dsw-alias-menu-group-header-fill': 'rgba(14, 19, 28, 0.97)',
    '--dsw-alias-tooltip-bg': 'rgba(27, 34, 47, 0.96)',
    '--dsw-alias-toast-bg': 'rgba(27, 34, 47, 0.96)',
    '--dsw-alias-toast-label': '#e7ebf0',
    '--dsw-alias-switch-thumb': '#baadd2',
    '--dsw-menu-backdrop-filter': 'blur(14px) saturate(120%)',
    '--dsw-mask-blur': 'none',

    // ── 侧栏 / 输入 / 气泡 ──
    '--dsw-specific-sidebar-fill': 'rgba(10, 15, 22, 0.66)',
    '--dsw-specific-sidebar-nav-item-active': 'rgba(163, 153, 189, 0.10)',
    '--dsw-specific-sidebar-nav-item-active-accent': 'rgba(186, 173, 210, 0.12)',
    '--dsw-specific-input-major': 'rgba(17, 23, 33, 0.84)',
    '--dsw-specific-bubble': 'rgba(33, 39, 57, 0.62)',
    '--dsw-specific-bubble-highlight': 'rgba(50, 47, 73, 0.72)',
    '--dsw-specific-selector': 'rgba(25, 32, 45, 0.86)',
    '--dsw-specific-tip': 'rgba(23, 30, 43, 0.90)',
    '--dsw-specific-login-input': '#111824',

    // ── 滚动条 ──
    '--dsw-alias-scrollbar-bg-l1': 'rgba(174, 204, 220, 0.18)',
    '--dsw-alias-scrollbar-bg-l2': 'rgba(174, 204, 220, 0.22)',
    '--dsw-alias-scrollbar-hover-l1': 'rgba(174, 204, 220, 0.32)',
    '--dsw-alias-scrollbar-hover-l2': 'rgba(174, 204, 220, 0.36)',

    '--ds-ease-in-out': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
    '--ds-transition-duration': '180ms',
    '--ds-transition-duration-fast': '120ms',
    '--ds-transition-duration-slow': '300ms',
    // ── 形状 / 阴影 ──
    '--dsw-radius-xs': '2px',
    '--dsw-radius-sm': '3px',
    '--dsw-radius-md': '4px',
    '--dsw-radius-lg': '6px',
    '--dsw-radius-xl': '8px',
    '--dsw-radius-panel': '10px',
    '--dsw-shadow-lv1': '0 1px 2px rgba(0, 0, 0, 0.24)',
    '--dsw-shadow-lv1-blur': '0 2px 8px rgba(0, 0, 0, 0.18)',
    '--dsw-shadow-lv2': '0 6px 22px rgba(0, 0, 0, 0.34), 0 1px 2px rgba(0, 0, 0, 0.24)',
    '--dsw-shadow-lv3': '0 22px 60px rgba(0, 0, 0, 0.46), 0 2px 8px rgba(0, 0, 0, 0.30)',
    '--dsw-elevation-stroke-color': 'rgba(174, 204, 220, 0.18)',

    // ── 字体 ──
    '--dsw-font-markdown-h1-font-family': '"Noto Serif SC", "Source Han Serif SC", "Songti SC", "SimSun", serif',
    '--dsw-font-markdown-h2-font-family': '"Noto Serif SC", "Source Han Serif SC", "Songti SC", "SimSun", serif',
    '--dsw-font-markdown-h3-font-family': '"Noto Serif SC", "Source Han Serif SC", "Songti SC", "SimSun", serif',

    // ── 语法高亮（Shiki） ──
    '--shiki-token-constant': '#d2b896',
    '--shiki-token-string': '#94b5bf',
    '--shiki-token-comment': '#6f7b8c',
    '--shiki-token-keyword': '#baadd2',
    '--shiki-token-parameter': '#d2b896',
    '--shiki-token-function': '#ccbde3',
    '--shiki-token-string-expression': '#94b5bf',
    '--shiki-token-punctuation': '#9da8b7',
    '--shiki-token-link': '#baadd2',
  },
};