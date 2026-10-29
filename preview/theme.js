/* 预览用的控制条：只改 html 上的 CSS 变量 / data 属性，令牌与 --av-* 都在 tokens.css。
   ?dark 让整页按深色令牌渲染，方便截图对照；
   ?bg=dots|flow|off、?flow=theme|mist|dusk|jade|amber、?dots=dot|square|char|wall、
   ?glyph=plus|hash|star|cross、?scale=0.5…4、?depth=0.3…4、
   ?motion=both|breathe|drift|off、?breathe=0…1、?fade=on|off 看背景；
   ?soft=1 放行软件渲染（截图用）。 */
(function () {
  const params = new URLSearchParams(location.search);
  const root = document.documentElement;
  let flow = null;
  let flowCanvas = null;
  const url = () => new URL(location.href);
  const writeParam = (key, value) => {
    const next = url();
    next.searchParams.set(key, value);
    history.replaceState(null, '', next);
  };
  if (params.has('dark')) document.body.setAttribute('data-ds-dark-theme', '');
  const deco = params.get('deco');
  if (deco === 'off') root.removeAttribute('data-av-deco');
  else if (deco === 'star') root.setAttribute('data-av-deco', 'star');

  /* 输入框底衬：默认关；?fade=on 或点「开」才挂 data-av-fade="on" */
  const FADES = ['on', 'off'];
  const fadeButtons = Array.from(document.querySelectorAll('[data-fade-pick]'));
  const applyFade = (id) => {
    const mode = FADES.includes(id) ? id : 'off';
    if (mode === 'on') root.setAttribute('data-av-fade', 'on');
    else root.removeAttribute('data-av-fade');
    fadeButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.fadePick === mode));
    });
  };
  fadeButtons.forEach((button) =>
    button.addEventListener('click', () => {
      applyFade(button.dataset.fadePick);
      writeParam('fade', button.dataset.fadePick);
    }),
  );
  applyFade(params.get('fade') === 'on' ? 'on' : 'off');

  const clampNumber = (raw, min, max, step, fallback) => {
    const n = Number.parseFloat(raw);
    if (!Number.isFinite(n)) return fallback;
    const stepped = Math.round(n / step) * step;
    return Number(Math.min(max, Math.max(min, stepped)).toFixed(2));
  };
  const fillPercent = (value, min, max) => {
    const pct = ((Number(value) - min) / (max - min)) * 100;
    return `${Math.min(100, Math.max(0, pct)).toFixed(2)}%`;
  };
  const scaleText = (value) => `${Number(value).toFixed(1).replace(/\.0$/, '')}×`;
  const depthText = (value) => `${Math.round(Number(value) * 100)}%`;
  const breatheText = (value) => `${Math.round(Number(value) * 100)}%`;
  const breatheHint = (value) => {
    const pct = Math.round(Number(value) * 100);
    if (pct === 0) return '谷底完全淡出';
    if (pct === 100) return '没有呼吸幅度';
    return '淡入到 100%';
  };
  const flowOpacity = (depth) => Math.min(0.86, Math.max(0.12, Number(depth) * 0.62));

  /* 主题：四套 */
  const themeButtons = Array.from(document.querySelectorAll('[data-theme-pick]'));
  const applyTheme = (id) => {
    root.dataset.avTheme = id;
    themeButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.themePick === id));
    });
    // 流光「跟随主题」直接吃 CSS 变量；换主题后让画布重新取色。
    if (root.getAttribute('data-av-flow-palette') === 'theme' && flow) flow.refreshPalette();
  };
  themeButtons.forEach((button) =>
    button.addEventListener('click', () => {
      applyTheme(button.dataset.themePick);
      writeParam('theme', button.dataset.themePick);
    }),
  );
  applyTheme(root.dataset.avTheme || 'averita');

  /* 背景：点阵 / 流光 / 关闭；流光才建画布，切走就拆。 */
  const BG = ['dots', 'flow', 'off'];
  const bgButtons = Array.from(document.querySelectorAll('[data-bg-pick]'));
  const dotsPicker = document.querySelector('[data-dots-picker]');
  const flowPicker = document.querySelector('[data-flow-picker]');
  const speedPicker = document.querySelector('[data-speed-picker]');
  const glyphPicker = document.querySelector('[data-glyph-picker]');
  const scalePicker = document.querySelector('[data-scale-picker]');
  const depthPicker = document.querySelector('[data-depth-picker]');
  const motionPicker = document.querySelector('[data-motion-picker]');
  const breathePicker = document.querySelector('[data-breathe-picker]');
  let currentBg = 'dots';
  let currentDots = 'dot';
  let currentMotion = 'both';
  let currentScale = 1;
  let currentDepth = 1;
  let currentSpeed = 1;

  const ensureFlow = () => {
    if (flow) return true;
    if (typeof createFlowBackground !== 'function') return false;
    const canvas = document.createElement('canvas');
    canvas.className = 'av-flow';
    canvas.style.transition = 'none';
    canvas.classList.add('av-flow--on');
    document.body.appendChild(canvas);
    const renderer = createFlowBackground(canvas, { allowSoftware: params.get('soft') === '1' });
    if (!renderer) {
      canvas.remove();
      return false;
    }
    renderer.setZoom(currentScale);
    renderer.setOpacity(flowOpacity(currentDepth));
    renderer.setSpeed(currentSpeed);
    renderer.start();
    flow = renderer;
    flowCanvas = canvas;
    return true;
  };

  const destroyFlow = () => {
    if (flowCanvas) flowCanvas.remove();
    if (flow) flow.dispose();
    flowCanvas = null;
    flow = null;
  };

  function syncRows() {
    const onDots = currentBg === 'dots';
    const onFlow = currentBg === 'flow';
    if (dotsPicker !== null) dotsPicker.hidden = !onDots;
    if (flowPicker !== null) flowPicker.hidden = !onFlow;
    if (glyphPicker !== null) glyphPicker.hidden = !(onDots && currentDots === 'char');
    if (scalePicker !== null) scalePicker.hidden = currentBg === 'off';
    if (depthPicker !== null) depthPicker.hidden = currentBg === 'off';
    if (motionPicker !== null) motionPicker.hidden = !onDots;
    if (speedPicker !== null) speedPicker.hidden = !onFlow;
    if (scaleRange !== null) {
      scaleRange.setAttribute('aria-label', onFlow ? '流场缩放' : '点阵缩放');
    }
    if (depthRange !== null) {
      depthRange.setAttribute('aria-label', onFlow ? '流光浓度' : '点阵浓淡');
      depthRange.title = onFlow ? '30%–400%，步进 5%（乘在画布不透明度上）' : '30%–400%，步进 5%';
    }
    syncBreatheRow();
  }

  const applyBg = (id) => {
    let mode = BG.includes(id) ? id : 'dots';
    if (mode === 'flow' && !ensureFlow()) {
      mode = 'dots';
      console.warn('[preview] 流光需要 WebGL2；已回退点阵');
    }
    if (mode !== 'flow') destroyFlow();
    currentBg = mode;
    if (mode === 'dots') root.removeAttribute('data-av-bg');
    else root.setAttribute('data-av-bg', mode);
    bgButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.bgPick === mode));
    });
    syncRows();
  };
  bgButtons.forEach((button) =>
    button.addEventListener('click', () => {
      applyBg(button.dataset.bgPick);
      writeParam('bg', button.dataset.bgPick);
    }),
  );

  /* 色板：只改属性，画布下一帧自己取色 */
  const FLOWS = ['theme', 'mist', 'dusk', 'jade', 'amber'];
  const flowButtons = Array.from(document.querySelectorAll('[data-flow-pick]'));
  const applyFlowPalette = (id) => {
    const mode = FLOWS.includes(id) ? id : 'theme';
    root.setAttribute('data-av-flow-palette', mode);
    flowButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.flowPick === mode));
    });
    if (flow) flow.refreshPalette();
    return mode;
  };
  flowButtons.forEach((button) =>
    button.addEventListener('click', () => {
      applyFlowPalette(button.dataset.flowPick);
      writeParam('flow', button.dataset.flowPick);
    }),
  );

  /* 底纹：圆点 = 不挂属性 */
  const DOTS = ['dot', 'square', 'char', 'wall'];
  const dotButtons = Array.from(document.querySelectorAll('[data-dots-pick]'));
  const applyDots = (id) => {
    currentDots = DOTS.includes(id) ? id : 'dot';
    if (currentDots === 'dot') root.removeAttribute('data-av-dots');
    else root.setAttribute('data-av-dots', currentDots);
    dotButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.dotsPick === currentDots));
    });
    syncRows();
  };
  dotButtons.forEach((button) =>
    button.addEventListener('click', () => {
      applyDots(button.dataset.dotsPick);
      writeParam('dots', button.dataset.dotsPick);
    }),
  );

  /* 字符：四枚字形，只有字符底纹用得上 */
  const GLYPHS = ['plus', 'hash', 'star', 'cross'];
  const glyphButtons = Array.from(document.querySelectorAll('[data-glyph-pick]'));
  const applyGlyph = (id) => {
    root.setAttribute('data-av-glyph', id);
    glyphButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.glyphPick === id));
    });
  };
  glyphButtons.forEach((button) =>
    button.addEventListener('click', () => {
      applyGlyph(button.dataset.glyphPick);
      writeParam('glyph', button.dataset.glyphPick);
    }),
  );

  /* 缩放 / 浓淡：无级滑杆，值直接写 --av-scale / --av-depth；流光下换成语义 */
  const SCALE_MIN = 0.5;
  const SCALE_MAX = 4;
  const SCALE_STEP = 0.1;
  const DEPTH_MIN = 0.3;
  const DEPTH_MAX = 4;
  const DEPTH_STEP = 0.05;
  const SPEED_MIN = 0.2;
  const SPEED_MAX = 2.5;
  const SPEED_STEP = 0.1;
  const scaleRange = document.querySelector('[data-scale-range]');
  const depthRange = document.querySelector('[data-depth-range]');
  const speedRange = document.querySelector('[data-speed-range]');
  const scaleValue = document.querySelector('[data-scale-value]');
  const depthValue = document.querySelector('[data-depth-value]');
  const speedValue = document.querySelector('[data-speed-value]');
  const applyScale = (value) => {
    const n = clampNumber(value, SCALE_MIN, SCALE_MAX, SCALE_STEP, 1);
    currentScale = n;
    root.style.setProperty('--av-scale', String(n));
    if (scaleRange !== null) {
      scaleRange.value = String(n);
      scaleRange.style.setProperty('--av-fill', fillPercent(n, SCALE_MIN, SCALE_MAX));
      scaleRange.setAttribute('aria-valuetext', `${scaleText(n)}，${Math.round(n * 10)}px 格距`);
    }
    if (scaleValue !== null) scaleValue.textContent = scaleText(n);
    if (flow) flow.setZoom(n);
  };
  const applyDepth = (value) => {
    const n = clampNumber(value, DEPTH_MIN, DEPTH_MAX, DEPTH_STEP, 1);
    currentDepth = n;
    root.style.setProperty('--av-depth', String(n));
    if (depthRange !== null) {
      depthRange.value = String(n);
      depthRange.style.setProperty('--av-fill', fillPercent(n, DEPTH_MIN, DEPTH_MAX));
      depthRange.setAttribute('aria-valuetext', depthText(n));
    }
    if (depthValue !== null) depthValue.textContent = depthText(n);
    if (flow) flow.setOpacity(flowOpacity(n));
  };
  if (scaleRange !== null) {
    scaleRange.addEventListener('input', () => applyScale(scaleRange.value));
    scaleRange.addEventListener('change', () => writeParam('scale', String(scaleRange.value)));
  }
  if (depthRange !== null) {
    depthRange.addEventListener('input', () => applyDepth(depthRange.value));
    depthRange.addEventListener('change', () => writeParam('depth', String(depthRange.value)));
  }
  const applySpeed = (value) => {
    const n = clampNumber(value, SPEED_MIN, SPEED_MAX, SPEED_STEP, 1);
    currentSpeed = n;
    if (speedRange !== null) {
      speedRange.value = String(n);
      speedRange.style.setProperty('--av-fill', fillPercent(n, SPEED_MIN, SPEED_MAX));
      speedRange.setAttribute('aria-valuetext', `${n.toFixed(1)}×`);
    }
    if (speedValue !== null) speedValue.textContent = `${n.toFixed(1)}×`;
    if (flow) flow.setSpeed(n);
  };
  if (speedRange !== null) {
    speedRange.addEventListener('input', () => applySpeed(speedRange.value));
    speedRange.addEventListener('change', () => writeParam('speed', String(speedRange.value)));
  }

  /* 呼吸下限：0 = 谷底完全淡出，1 = 不呼吸；写进 --av-breathe-min */
  const BREATHE_MIN = 0;
  const BREATHE_MAX = 1;
  const BREATHE_STEP = 0.05;
  const DEFAULT_BREATHE = 0.65;
  const breatheRange = document.querySelector('[data-breathe-range]');
  const breatheValue = document.querySelector('[data-breathe-value]');
  const applyBreathe = (value) => {
    const n = clampNumber(value, BREATHE_MIN, BREATHE_MAX, BREATHE_STEP, DEFAULT_BREATHE);
    root.style.setProperty('--av-breathe-min', String(n));
    if (breatheRange !== null) {
      breatheRange.value = String(n);
      breatheRange.style.setProperty('--av-fill', fillPercent(n, BREATHE_MIN, BREATHE_MAX));
      breatheRange.setAttribute('aria-valuetext', `${breatheText(n)}，${breatheHint(n)}`);
    }
    if (breatheValue !== null) breatheValue.textContent = breatheText(n);
  };
  if (breatheRange !== null) {
    breatheRange.addEventListener('input', () => applyBreathe(breatheRange.value));
    breatheRange.addEventListener('change', () => writeParam('breathe', String(breatheRange.value)));
  }

  /* 动效：都开 = 不挂属性，其余挂 data-av-motion */
  const MOTIONS = ['both', 'breathe', 'drift', 'off'];
  const motionButtons = Array.from(document.querySelectorAll('[data-motion-pick]'));
  const applyMotion = (id) => {
    const mode = MOTIONS.includes(id) ? id : 'both';
    currentMotion = mode;
    if (mode === 'both') root.removeAttribute('data-av-motion');
    else root.setAttribute('data-av-motion', mode);
    motionButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.motionPick === mode));
    });
    syncBreatheRow();
  };
  motionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      applyMotion(button.dataset.motionPick);
      writeParam('motion', button.dataset.motionPick);
    }),
  );

  function syncBreatheRow() {
    if (breathePicker === null) return;
    const breathing = currentMotion === 'both' || currentMotion === 'breathe';
    breathePicker.hidden = currentBg !== 'dots' || !breathing;
  }

  /* 恢复默认：背景 / 底纹 / 色板 / 字形 / 缩放 / 浓淡 / 动效 回默认 */
  const resetButton = document.querySelector('[data-reset]');
  if (resetButton !== null) {
    resetButton.addEventListener('click', () => {
      applyBg('dots');
      applyDots('dot');
      applyFlowPalette('theme');
      applyGlyph('plus');
      applyScale(1);
      applyDepth(1);
      applySpeed(1);
      applyMotion('both');
      applyBreathe(DEFAULT_BREATHE);
      writeParam('bg', 'dots');
      writeParam('flow', 'theme');
      writeParam('dots', 'dot');
      writeParam('glyph', 'plus');
      writeParam('scale', '1');
      writeParam('depth', '1');
      writeParam('speed', '1');
      writeParam('motion', 'both');
      writeParam('breathe', String(DEFAULT_BREATHE));
    });
  }

  /* 初始值：URL 参数优先，其次默认 */
  applyFlowPalette(FLOWS.includes(params.get('flow')) ? params.get('flow') : 'theme');
  applyGlyph(GLYPHS.includes(params.get('glyph')) ? params.get('glyph') : 'plus');
  applyScale(clampNumber(params.get('scale'), SCALE_MIN, SCALE_MAX, SCALE_STEP, 1));
  applyDepth(clampNumber(params.get('depth'), DEPTH_MIN, DEPTH_MAX, DEPTH_STEP, 1));
  applySpeed(clampNumber(params.get('speed'), SPEED_MIN, SPEED_MAX, SPEED_STEP, 1));
  applyBreathe(clampNumber(params.get('breathe'), BREATHE_MIN, BREATHE_MAX, BREATHE_STEP, DEFAULT_BREATHE));
  applyMotion(MOTIONS.includes(params.get('motion')) ? params.get('motion') : 'both');
  applyDots(DOTS.includes(params.get('dots')) ? params.get('dots') : 'dot');
  applyBg(BG.includes(params.get('bg')) ? params.get('bg') : 'dots');
})();
