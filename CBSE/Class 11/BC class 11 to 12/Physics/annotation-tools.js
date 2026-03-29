(function () {
  'use strict';

  if (window.__annotationToolsInitialized) {
    return;
  }
  window.__annotationToolsInitialized = true;

  const STORAGE_KEY = 'physics-annotations:' + window.location.pathname;

  const style = document.createElement('style');
  style.textContent = `
    .anno-toolbar,
    .anno-toolbar * {
      box-sizing: border-box;
    }

    .anno-toolbar {
      position: fixed;
      right: 16px;
      bottom: 16px;
      z-index: 2147483647;
      display: flex;
      flex-direction: column;
      gap: 7px;
      width: min(96vw, 340px);
      padding: 10px;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background:
        radial-gradient(120% 120% at 0% 0%, rgba(63, 167, 255, 0.18) 0%, rgba(63, 167, 255, 0) 45%),
        linear-gradient(145deg, rgba(24, 28, 35, 0.94), rgba(15, 18, 25, 0.94));
      color: #f5f7ff;
      font: 12.5px/1.25 "Segoe UI", Arial, sans-serif;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(8px);
    }

    .anno-toolbar .anno-row {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }

    .anno-toolbar .anno-row.anno-header {
      justify-content: space-between;
      margin-bottom: 0;
    }

    .anno-toolbar .anno-row.anno-tools {
      gap: 5px;
    }

    .anno-toolbar .anno-row.anno-size-row {
      align-items: center;
    }

    .anno-toolbar .anno-body {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    .anno-toolbar.anno-minimized {
      width: auto;
      min-width: 190px;
      padding: 8px 10px;
      border-radius: 12px;
    }

    .anno-toolbar.anno-minimized .anno-body {
      display: none;
    }

    .anno-toolbar button,
    .anno-toolbar input[type="range"],
    .anno-toolbar input[type="color"] {
      font: inherit;
    }

    .anno-toolbar button {
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 9px;
      background: rgba(255, 255, 255, 0.08);
      color: #f5f7ff;
      padding: 5px 8px;
      cursor: pointer;
      transition: transform 0.12s ease, background 0.2s ease, border-color 0.2s ease;
    }

    .anno-toolbar button:hover {
      background: rgba(255, 255, 255, 0.16);
      border-color: rgba(255, 255, 255, 0.38);
    }

    .anno-toolbar button:active {
      transform: translateY(1px);
    }

    .anno-toolbar .anno-tool-btn {
      min-width: 0;
      flex: 1 1 0;
      text-align: center;
      padding: 6px 4px;
    }

    .anno-toolbar .anno-tool-btn.anno-active {
      background: linear-gradient(180deg, rgba(58, 172, 255, 0.34), rgba(58, 172, 255, 0.18));
      border-color: rgba(58, 172, 255, 0.85);
      color: #e9f6ff;
    }

    .anno-toolbar .anno-icon-btn {
      width: 28px;
      height: 28px;
      padding: 0;
      border-radius: 8px;
      font-size: 14px;
      line-height: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .anno-toolbar input[type="range"] {
      width: 140px;
      accent-color: #4bc0ff;
    }

    .anno-toolbar input[type="color"] {
      width: 30px;
      height: 26px;
      padding: 2px;
      border-radius: 7px;
      border: 1px solid rgba(255, 255, 255, 0.28);
      background: rgba(255, 255, 255, 0.1);
      cursor: pointer;
    }

    .anno-toolbar .anno-title {
      font-weight: 800;
      letter-spacing: 0.3px;
      font-size: 14px;
      margin-right: auto;
    }

    .anno-toolbar .anno-pill {
      padding: 4px 9px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.25);
      background: rgba(255, 255, 255, 0.1);
      font-weight: 700;
      letter-spacing: 0.2px;
    }

    .anno-toolbar .anno-status {
      color: #d6dfff;
      font-size: 11px;
      opacity: 0.9;
    }

    .anno-toolbar .anno-label {
      color: rgba(239, 243, 255, 0.88);
      font-weight: 600;
      min-width: 30px;
    }

    .anno-toolbar .anno-size-value {
      min-width: 34px;
      text-align: right;
      color: #e5ecff;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
    }

    .anno-toolbar .anno-swatches {
      display: inline-flex;
      gap: 5px;
      align-items: center;
    }

    .anno-toolbar .anno-swatch {
      width: 17px;
      height: 17px;
      padding: 0;
      border-radius: 999px;
      border: 2px solid rgba(255, 255, 255, 0.45);
      background: var(--swatch-color);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.16);
    }

    .anno-toolbar .anno-actions {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 6px;
    }

    .anno-toolbar .anno-actions button {
      width: 100%;
      padding: 6px 4px;
      font-size: 12px;
    }

    .anno-toolbar .anno-swatch.anno-active {
      border-color: #ffffff;
      box-shadow: 0 0 0 2px rgba(97, 200, 255, 0.5);
    }

    .anno-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2147483646;
      pointer-events: none;
      touch-action: none;
      cursor: crosshair;
    }

    .anno-toolbar .anno-on {
      background: linear-gradient(180deg, rgba(65, 224, 139, 0.3), rgba(65, 224, 139, 0.18));
      border-color: rgba(65, 224, 139, 0.82);
    }

    .anno-toolbar .anno-danger {
      background: rgba(255, 79, 79, 0.2);
      border-color: rgba(255, 99, 99, 0.8);
    }

    @media (max-width: 640px) {
      .anno-toolbar {
        right: 10px;
        left: 10px;
        bottom: 10px;
        width: auto;
      }

      .anno-toolbar input[type="range"] {
        width: 108px;
      }

      .anno-toolbar .anno-actions {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `;
  document.head.appendChild(style);

  const canvas = document.createElement('canvas');
  canvas.className = 'anno-canvas';
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  document.body.appendChild(canvas);

  const toolbar = document.createElement('div');
  toolbar.className = 'anno-toolbar';
  toolbar.innerHTML = `
    <div class="anno-row anno-header">
      <span class="anno-title">Annotation Tools</span>
      <button type="button" data-action="minimize" class="anno-icon-btn" aria-label="Minimize annotation panel">−</button>
      <button type="button" data-action="toggle" class="anno-pill">Enable</button>
      <span class="anno-status" data-id="status">Off</span>
    </div>
    <div class="anno-body">
      <div class="anno-row anno-tools">
        <span class="anno-label">Tool</span>
        <button type="button" class="anno-tool-btn" data-tool="pen">Pen</button>
        <button type="button" class="anno-tool-btn" data-tool="highlighter">Highlighter</button>
        <button type="button" class="anno-tool-btn" data-tool="eraser">Object Eraser</button>
      </div>
      <div class="anno-row">
        <span class="anno-label">Color</span>
        <input id="anno-color" data-id="color" type="color" value="#ff3b30" aria-label="Choose drawing color" />
        <div class="anno-swatches">
          <button type="button" class="anno-swatch" data-color="#ff3b30" style="--swatch-color:#ff3b30" aria-label="Red color"></button>
          <button type="button" class="anno-swatch" data-color="#ffd60a" style="--swatch-color:#ffd60a" aria-label="Yellow color"></button>
          <button type="button" class="anno-swatch" data-color="#34c759" style="--swatch-color:#34c759" aria-label="Green color"></button>
          <button type="button" class="anno-swatch" data-color="#007aff" style="--swatch-color:#007aff" aria-label="Blue color"></button>
          <button type="button" class="anno-swatch" data-color="#bf5af2" style="--swatch-color:#bf5af2" aria-label="Purple color"></button>
          <button type="button" class="anno-swatch" data-color="#ffffff" style="--swatch-color:#ffffff" aria-label="White color"></button>
        </div>
      </div>
      <div class="anno-row anno-size-row">
        <span class="anno-label">Size</span>
        <input id="anno-size" data-id="size" type="range" min="2" max="40" step="1" value="4" />
        <span class="anno-size-value" data-id="size-value">4px</span>
      </div>
      <div class="anno-row anno-actions">
        <button type="button" data-action="undo">Undo</button>
        <button type="button" data-action="redo">Redo</button>
        <button type="button" data-action="clear" class="anno-danger">Clear</button>
        <button type="button" data-action="save">Save PNG</button>
      </div>
    </div>
  `;
  document.body.appendChild(toolbar);

  const minimizeBtn = toolbar.querySelector('[data-action="minimize"]');
  const toggleBtn = toolbar.querySelector('[data-action="toggle"]');
  const statusLabel = toolbar.querySelector('[data-id="status"]');
  const toolButtons = Array.from(toolbar.querySelectorAll('[data-tool]'));
  const colorInput = toolbar.querySelector('[data-id="color"]');
  const swatchButtons = Array.from(toolbar.querySelectorAll('[data-color]'));
  const sizeInput = toolbar.querySelector('[data-id="size"]');
  const sizeValue = toolbar.querySelector('[data-id="size-value"]');

  let drawingEnabled = false;
  let drawing = false;
  let currentTool = 'pen';
  let strokeColor = '#ff3b30';
  let strokeSize = 4;
  let strokes = [];
  let redoStrokes = [];
  let currentStroke = null;

  function cssSizeToPixelRatio() {
    return window.devicePixelRatio || 1;
  }

  function getDocumentDimensions() {
    const doc = document.documentElement;
    const body = document.body;
    return {
      width: Math.max(doc.scrollWidth, doc.clientWidth, body ? body.scrollWidth : 0),
      height: Math.max(doc.scrollHeight, doc.clientHeight, body ? body.scrollHeight : 0)
    };
  }

  function resizeCanvas() {
    const dpr = cssSizeToPixelRatio();
    const dims = getDocumentDimensions();

    canvas.style.width = dims.width + 'px';
    canvas.style.height = dims.height + 'px';
    canvas.width = Math.floor(dims.width * dpr);
    canvas.height = Math.floor(dims.height * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    redrawAll();
  }

  function ensureCanvasFitsDocument() {
    const dims = getDocumentDimensions();
    const dpr = cssSizeToPixelRatio();
    const targetWidth = Math.floor(dims.width * dpr);
    const targetHeight = Math.floor(dims.height * dpr);

    if (canvas.width < targetWidth || canvas.height < targetHeight) {
      resizeCanvas();
    }
  }

  function setDrawingMode(enabled) {
    drawingEnabled = enabled;
    canvas.style.pointerEvents = enabled ? 'auto' : 'none';
    toggleBtn.textContent = enabled ? 'Disable' : 'Enable';
    toggleBtn.classList.toggle('anno-on', enabled);
    toggleBtn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    statusLabel.textContent = enabled ? 'On' : 'Off';
  }

  function setTool(toolName) {
    currentTool = toolName;
    toolButtons.forEach(function (btn) {
      const active = btn.getAttribute('data-tool') === toolName;
      btn.classList.toggle('anno-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function getRenderSizeForStroke(stroke) {
    if (stroke.tool === 'highlighter') {
      return Math.max(12, stroke.size * 2.5);
    }
    return stroke.size;
  }

  function applyStrokeStyle(stroke) {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = stroke.tool === 'highlighter' ? 0.28 : 1;
    ctx.strokeStyle = stroke.color;
    ctx.fillStyle = stroke.color;
    ctx.lineWidth = getRenderSizeForStroke(stroke);
  }

  function drawStroke(stroke) {
    const points = stroke.points || [];
    if (!points.length) {
      return;
    }

    applyStrokeStyle(stroke);

    if (points.length === 1) {
      const radius = Math.max(1, ctx.lineWidth / 2);
      ctx.beginPath();
      ctx.arc(points[0].x, points[0].y, radius, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i += 1) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
  }

  function redrawAll() {
    const dims = getDocumentDimensions();
    ctx.clearRect(0, 0, dims.width, dims.height);
    for (let i = 0; i < strokes.length; i += 1) {
      drawStroke(strokes[i]);
    }
  }

  function distancePointToSegment(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;

    if (dx === 0 && dy === 0) {
      return Math.hypot(px - x1, py - y1);
    }

    const t = ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy);
    const clamped = Math.max(0, Math.min(1, t));
    const nx = x1 + clamped * dx;
    const ny = y1 + clamped * dy;
    return Math.hypot(px - nx, py - ny);
  }

  function strokeContainsPoint(stroke, point) {
    const points = stroke.points || [];
    if (!points.length) {
      return false;
    }

    const hitRadius = Math.max(10, getRenderSizeForStroke(stroke) * 0.9);

    if (points.length === 1) {
      return Math.hypot(point.x - points[0].x, point.y - points[0].y) <= hitRadius;
    }

    for (let i = 1; i < points.length; i += 1) {
      const p1 = points[i - 1];
      const p2 = points[i];
      if (distancePointToSegment(point.x, point.y, p1.x, p1.y, p2.x, p2.y) <= hitRadius) {
        return true;
      }
    }

    return false;
  }

  function eraseObjectAt(point) {
    for (let i = strokes.length - 1; i >= 0; i -= 1) {
      if (strokeContainsPoint(strokes[i], point)) {
        strokes.splice(i, 1);
        redoStrokes = [];
        redrawAll();
        persistDrawing();
        return;
      }
    }
  }

  function updateActiveSwatch(colorValue) {
    const normalized = (colorValue || '').toLowerCase();
    swatchButtons.forEach(function (btn) {
      const isActive = btn.getAttribute('data-color').toLowerCase() === normalized;
      btn.classList.toggle('anno-active', isActive);
    });
  }

  function getPoint(event) {
    const isTouch = event.touches && event.touches.length;
    const source = isTouch ? event.touches[0] : event;
    return {
      x: source.clientX + window.scrollX,
      y: source.clientY + window.scrollY
    };
  }

  function persistDrawing() {
    try {
      const payload = JSON.stringify({
        version: 2,
        strokes: strokes
      });
      window.localStorage.setItem(STORAGE_KEY, payload);
    } catch (error) {
      // Ignore storage failures (private mode or quota).
    }
  }

  function restoreDrawing() {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.version === 2 && Array.isArray(parsed.strokes)) {
          strokes = parsed.strokes;
          redoStrokes = [];
          redrawAll();
        }
      }
    } catch (error) {
      // Ignore storage failures.
    }
  }

  function startDraw(event) {
    if (!drawingEnabled) {
      return;
    }

    const p = getPoint(event);

    if (currentTool === 'eraser') {
      drawing = true;
      eraseObjectAt(p);
      event.preventDefault();
      return;
    }

    drawing = true;
    currentStroke = {
      tool: currentTool,
      color: strokeColor,
      size: strokeSize,
      points: [p]
    };
    drawStroke(currentStroke);
    event.preventDefault();
  }

  function draw(event) {
    if (!drawing || !drawingEnabled) {
      return;
    }

    const p = getPoint(event);

    if (currentTool === 'eraser') {
      eraseObjectAt(p);
      event.preventDefault();
      return;
    }

    if (!currentStroke) {
      return;
    }

    currentStroke.points.push(p);
    redrawAll();
    drawStroke(currentStroke);
    event.preventDefault();
  }

  function endDraw() {
    if (!drawing) {
      return;
    }

    drawing = false;

    if (currentTool === 'eraser') {
      return;
    }

    if (currentStroke && currentStroke.points.length > 0) {
      strokes.push(currentStroke);
      if (strokes.length > 400) {
        strokes.shift();
      }
      redoStrokes = [];
      persistDrawing();
      redrawAll();
    }

    currentStroke = null;
  }

  function clearDrawing() {
    strokes = [];
    redoStrokes = [];
    currentStroke = null;
    redrawAll();
    persistDrawing();
  }

  function undo() {
    if (!strokes.length) {
      return;
    }

    redoStrokes.push(strokes.pop());
    redrawAll();
    persistDrawing();
  }

  function redo() {
    if (!redoStrokes.length) {
      return;
    }

    strokes.push(redoStrokes.pop());
    redrawAll();
    persistDrawing();
  }

  function savePng() {
    const link = document.createElement('a');
    const pageName = (document.title || 'notes').replace(/[^a-z0-9]+/gi, '_').toLowerCase();
    link.download = pageName + '_annotations.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  toolbar.addEventListener('click', function (event) {
    const action = event.target && event.target.getAttribute('data-action');
    const toolName = event.target && event.target.getAttribute('data-tool');
    const swatchColor = event.target && event.target.getAttribute('data-color');

    if (toolName) {
      setTool(toolName);
      return;
    }

    if (swatchColor) {
      strokeColor = swatchColor;
      colorInput.value = swatchColor;
      updateActiveSwatch(swatchColor);
      return;
    }

    if (!action) {
      return;
    }

    if (action === 'toggle') {
      setDrawingMode(!drawingEnabled);
    } else if (action === 'minimize') {
      const isMinimized = toolbar.classList.toggle('anno-minimized');
      minimizeBtn.textContent = isMinimized ? '+' : '−';
      minimizeBtn.setAttribute('aria-label', isMinimized ? 'Expand annotation panel' : 'Minimize annotation panel');
    } else if (action === 'undo') {
      undo();
    } else if (action === 'redo') {
      redo();
    } else if (action === 'clear') {
      clearDrawing();
    } else if (action === 'save') {
      savePng();
    }
  });

  colorInput.addEventListener('change', function () {
    strokeColor = colorInput.value;
    updateActiveSwatch(strokeColor);
  });

  sizeInput.addEventListener('input', function () {
    strokeSize = Number(sizeInput.value);
    sizeValue.textContent = strokeSize + 'px';
  });

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', endDraw);
  canvas.addEventListener('mouseleave', endDraw);

  canvas.addEventListener('touchstart', startDraw, { passive: false });
  canvas.addEventListener('touchmove', draw, { passive: false });
  canvas.addEventListener('touchend', endDraw, { passive: false });
  canvas.addEventListener('touchcancel', endDraw, { passive: false });

  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('scroll', ensureCanvasFitsDocument, { passive: true });

  setTool(currentTool);
  updateActiveSwatch(strokeColor);
  resizeCanvas();
  restoreDrawing();
  setDrawingMode(false);
})();
