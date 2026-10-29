/* ─────────────────────────────────────────────────────────────
   流光：把 personal-website 的背景场（src/scripts/wander/light.js）
   压成一层低分辨率画布。核心不变：
     · 域扭曲 fbm（5 层）当明暗场，慢慢自己走；
     · 4 档调色 + Bayer 抖动量化；
     · 一格 5 个 CSS 像素，整块画布按像素放大（pixelated）。
   去掉的是站点自己的叙事：三条斜缝、夜色池、塌缩圈、风痕、天气、镜头。
   颜色不写死在这里：读 html 上的 --av-flow-0..3 / --av-flow-glow。
   默认「跟随主题」由 CSS 从 --av-space / --av-mark 混出，另四套固定色板，
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
      return resolveFlowColor(raw);
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

/**
 * 读一个 --av-flow-* 值：静态色板直接解析；「跟随主题」拿到的是
 * color-mix(...)，需要挂一个隐藏探针读计算后的 color 再解析。
 */
function resolveFlowColor(raw) {
  if (!raw) return null;
  const direct = parseFlowColor(raw);
  if (direct) return direct;
  if (
    typeof document === "undefined" ||
    !document.body ||
    typeof window === "undefined" ||
    typeof window.getComputedStyle !== "function"
  ) {
    return null;
  }
  const probe = document.createElement("span");
  probe.style.position = "fixed";
  probe.style.left = "-1000px";
  probe.style.visibility = "hidden";
  probe.style.color = raw;
  /* 老内核不认 color-mix 时 style.color 会是空串；此时不要拿继承色当结果。 */
  if (!probe.style.color) return null;
  document.body.appendChild(probe);
  let computed = "";
  try {
    computed = window.getComputedStyle(probe).color;
  } finally {
    probe.remove();
  }
  return parseFlowColor(computed);
}

/** #rgb / #rrggbb / rgb() / rgba() / color(srgb …) → [r, g, b] 0–1；读不懂就返回 null。 */
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
  m = /^color\(\s*srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/i.exec(s);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  return null;
}

if (typeof window !== "undefined") window.createFlowBackground = createFlowBackground;
