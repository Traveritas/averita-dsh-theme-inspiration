window.__ModuleLoader__.load({
  id: "__PLUGIN_ID__",
  factory: (require) => {
    const React = require("react");
    const h = React.createElement;

    const PLUGIN_ID = "__PLUGIN_ID__";
    const THEMES = __THEMES__;
    const CSS = __CSS__;
    const STORAGE_KEY = PLUGIN_ID + ":theme";
    const DECO_KEY = PLUGIN_ID + ":deco";
    const STAR_KEY = PLUGIN_ID + ":star";
    const FADE_KEY = PLUGIN_ID + ":fade";
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
    const HERO_TEXT_KEY = PLUGIN_ID + ":hero-text";
    const DEFAULT_THEME = "averita";
    /** 品牌字标的默认值；空串是合法值，表示只显示星标。 */
    const DEFAULT_WORDMARK = "AveritA's DSH";
    const MAX_WORDMARK = 32;
    /** 首屏文案：null = 跟随 DSH 原文；空串 = 只留星标；其余 = 替换标题。 */
    const NATIVE_HERO_TEXT = "探索未至之境";
    const MAX_HERO_TEXT = 40;
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
    /** 输入框底衬：默认关（背景透到输入框后），开 = 保留 DSH 的渐隐底衬。 */
    const FADE_MODES = [
      { id: "on", label: "开" },
      { id: "off", label: "关" },
    ];
    const FADE_HINT = {
      on: "保留 DSH 的渐隐底衬",
      off: "去掉底衬，背景透到输入框后",
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
    /** 流光色板：默认从主题取色，另留四套固定的手选色板。 */
    const DEFAULT_FLOW = "theme";
    const FLOW_MODES = [
      { id: "theme", label: "跟随主题" },
      { id: "mist", label: "雾蓝" },
      { id: "dusk", label: "暮紫" },
      { id: "jade", label: "青灰" },
      { id: "amber", label: "暖沙" },
    ];
    const FLOW_HINT = {
      theme: "从当前主题的底色与强调色取色",
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
      __FLOW_SRC__
      return createFlowBackground;
    })();

    const THEME_BY_ID = new Map(THEMES.map((theme) => [theme.id, theme]));
    const listeners = new Set();
    let activeId = DEFAULT_THEME;
    let decoMode = "paper";
    let starVariant = "a";
    let fadeMode = "off";
    let dotsMode = "dot";
    let glyphMode = "plus";
    let scaleMode = 1;
    let depthMode = 1;
    let speedMode = DEFAULT_SPEED;
    let motionMode = "both";
    let breatheMode = DEFAULT_BREATHE;
    let bgMode = "dots";
    let flowPalette = DEFAULT_FLOW;
    let wordmark = DEFAULT_WORDMARK;
    let heroText = null;
    let flowRenderer = null;
    let flowCanvas = null;
    let flowUnavailable = false;
    let getActive = () => activeId;
    let getWordmark = () => wordmark;
    let getHeroText = () => heroText;
    let getDeco = () => decoMode;
    let getStar = () => starVariant;
    let getFade = () => fadeMode;
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
    let selectHeroText = () => {};
    let selectDeco = () => {};
    let selectStar = () => {};
    let selectFade = () => {};
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

    /** 输入框底衬：只有明确存了 "on" 才保留，其余一律按关处理（默认关）。 */
    function storedFade() {
      try {
        return window.localStorage.getItem(FADE_KEY) === "on" ? "on" : "off";
      } catch {
        return "off";
      }
    }

    function rememberFade(id) {
      try {
        window.localStorage.setItem(FADE_KEY, id);
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

    /** 流光色板：默认跟随主题，另有 mist / dusk / jade / amber。 */
    function storedFlow() {
      try {
        const id = window.localStorage.getItem(FLOW_KEY);
        return FLOW_MODES.some((mode) => mode.id === id) ? id : DEFAULT_FLOW;
      } catch {
        return DEFAULT_FLOW;
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

    /** 首屏文案：单行化 + 截断；null 表示跟随 DSH 原文，空串表示只留星标。 */
    function cleanHeroText(value) {
      if (typeof value !== "string") return "";
      return value
        .replace(/[\r\n\t]+/g, " ")
        .replace(/[\u0000-\u001f\u007f\u2028\u2029]+/g, " ")
        .slice(0, MAX_HERO_TEXT);
    }

    function storedHeroText() {
      try {
        const value = window.localStorage.getItem(HERO_TEXT_KEY);
        return value === null ? null : cleanHeroText(value);
      } catch {
        return null;
      }
    }

    function rememberHeroText(value) {
      try {
        if (value === null) window.localStorage.removeItem(HERO_TEXT_KEY);
        else window.localStorage.setItem(HERO_TEXT_KEY, value);
      } catch {
        /* 同上 */
      }
    }

    /** 任意文本 -> CSS 字符串字面量，供 content: var(--av-hero-text) 用。 */
    function cssString(value) {
      return '"' + value.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
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

    /**
     * 首屏星标：跟左上角同一颗三轴星。
     * 静态挂在首屏；鼠标移入 / 移出各绕 z 轴转 90°，累计不回位。
     * 每帧重画整颗星，深度决定 fill-opacity，转到背面时明暗会跟着换。
     */
    function HeroMark() {
      const group = React.useRef(null);
      const yaw = React.useRef(45);
      const target = React.useRef(45);
      const frameId = React.useRef(0);
      React.useEffect(() => {
        const g = group.current;
        if (g !== null) g.innerHTML = projectStar(yaw.current, 0);
        return () => {
          if (frameId.current !== 0) window.cancelAnimationFrame(frameId.current);
          frameId.current = 0;
        };
      }, []);
      const spin = () => {
        if (typeof window === "undefined") return;
        if (
          typeof window.matchMedia === "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          return;
        }
        const g = group.current;
        if (g === null) return;
        target.current += 90;
        const from = yaw.current;
        const to = target.current;
        if (frameId.current !== 0) window.cancelAnimationFrame(frameId.current);
        let start = 0;
        const step = (now) => {
          if (start === 0) start = now;
          const t = Math.min(1, (now - start) / 520);
          const eased = 1 - Math.pow(1 - t, 3);
          yaw.current = from + (to - from) * eased;
          g.innerHTML = projectStar(yaw.current, 0);
          if (t < 1) frameId.current = window.requestAnimationFrame(step);
          else {
            yaw.current = to;
            frameId.current = 0;
          }
        };
        frameId.current = window.requestAnimationFrame(step);
      };
      return h(
        "span",
        {
          className: "av-brand-mark av-hero-mark",
          "aria-hidden": "true",
          onMouseEnter: spin,
          onMouseLeave: spin,
        },
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

__SETTING_GROUPS__
__COMPONENT_SETTINGS__

    /** 设置页：主题网格是核心，其余行由 src/components/<id>/settings.js 按 order 排。 */
    function ThemeSection(props) {
      const read = () => ({
        theme: props.getActive(),
        wordmark: props.getWordmark(),
        heroText: props.getHeroText(),
        deco: props.getDeco(),
        star: props.getStar(),
        fade: props.getFade(),
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
          nativeHeroText: NATIVE_HERO_TEXT,
          maxHeroText: MAX_HERO_TEXT,
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
          FADE_MODES,
          FADE_HINT,
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
        root.setAttribute("data-av-theme", theme.id);
        activeId = theme.id;
        if (paletteDispose !== null) {
          paletteDispose();
          paletteDispose = null;
        }
        paletteDispose = ctx.theme.overrideTokens(PLUGIN_ID, theme.tokens);
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

      /* 首屏文案：null 跟随 DSH 原文；空串只留星标；其余替换标题。 */
      selectHeroText = (value) => {
        heroText = value === null ? null : cleanHeroText(value);
        if (heroText === null) {
          root.removeAttribute("data-av-hero-text");
          root.removeAttribute("data-av-hero-empty");
          root.style.removeProperty("--av-hero-text");
        } else {
          root.setAttribute("data-av-hero-text", "");
          root.style.setProperty("--av-hero-text", cssString(heroText));
          if (heroText.trim() === "") root.setAttribute("data-av-hero-empty", "");
          else root.removeAttribute("data-av-hero-empty");
        }
        rememberHeroText(heroText);
        for (const fn of listeners) fn();
      };
      getHeroText = () => heroText;

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

      // 输入框底衬：默认关（不挂属性）；开时挂 data-av-fade="on" 恢复宿主渐变。
      selectFade = (id) => {
        fadeMode = id === "on" ? "on" : "off";
        if (fadeMode === "on") root.setAttribute("data-av-fade", "on");
        else root.removeAttribute("data-av-fade");
        rememberFade(fadeMode);
        for (const fn of listeners) fn();
      };
      getFade = () => fadeMode;

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
        flowPalette = FLOW_MODES.some((mode) => mode.id === id) ? id : DEFAULT_FLOW;
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
        selectFlow(DEFAULT_FLOW);
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
        selectHeroText(storedHeroText());
        selectDeco(storedDeco());
        selectStar(storedStar());
        selectFade(storedFade());
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
          root.removeAttribute("data-av-fade");
          root.removeAttribute("data-av-dots");
          root.removeAttribute("data-av-glyph");
          root.removeAttribute("data-av-motion");
          root.removeAttribute("data-av-bg");
          root.removeAttribute("data-av-flow-palette");
          root.removeAttribute("data-av-hero-text");
          root.removeAttribute("data-av-hero-empty");
          root.removeAttribute("data-av-scale");
          root.removeAttribute("data-av-depth");
          root.style.removeProperty("--av-scale");
          root.style.removeProperty("--av-depth");
          root.style.removeProperty("--av-breathe-min");
          root.style.removeProperty("--av-hero-text");
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
      // 首屏原本是 DSH 的动画鱼 fallback；用同一颗星替换，卸载即回退。
      ctx.slots.inject("conversation.hero.brand.mark", () =>
        ctx.slots.register({ name: "conversation.hero.brand.mark", priority: -1 }, HeroMark),
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
              selectHeroText: (value) => selectHeroText(value),
              getHeroText: () => getHeroText(),
              selectDeco: (id) => selectDeco(id),
              getDeco: () => getDeco(),
              selectStar: (id) => selectStar(id),
              getStar: () => getStar(),
              selectFade: (id) => selectFade(id),
              getFade: () => getFade(),
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