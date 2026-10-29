/* 预览用的星：与 AveritA 主题 client.js 里同一套正等轴投影。
   六支 = ±x ±y ±z，每支按深度给 fill-opacity；中心小圆收平。 */
(function () {
  const g = document.querySelector('.av-star-g');
  if (!g) return;
  const DEG = Math.PI / 180;
  const reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  let auto = 45;
  let last = 0;
  let raf = 0;
  let frozen = null;

  function project(angle, wobble) {
    const yaw = angle * DEG;
    const pitch = (35.264 + wobble) * DEG;
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
    let out = '';
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

  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (frozen !== null || (reduce !== null && reduce.matches)) return;
    const dt = last === 0 ? 0 : Math.min(0.1, (now - last) / 1000);
    last = now;
    auto = (auto + dt * 10) % 360;
    g.innerHTML = project(auto, Math.sin(now / 3000) * 4);
  }

  window.__avStarFreeze = (deg) => {
    frozen = deg;
    last = 0;
    g.innerHTML = project(deg, 0);
  };
  window.__avStarRun = () => {
    frozen = null;
  };

  g.innerHTML = project(45, 0);
  if (reduce === null || !reduce.matches) raf = requestAnimationFrame(frame);
})();