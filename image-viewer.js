// Shared by the archive lightbox and the inline document reader.
(() => {
  const { select, pointer, zoom, zoomIdentity, zoomTransform } = ArchiveD3;
  const tolerance = 0.00001;

  function createSurface(stage, toolbar) {
    const surface = select(stage);
    const minus = toolbar.querySelector('[data-view="out"]');
    const plus = toolbar.querySelector('[data-view="in"]');
    const fit = toolbar.querySelector('[data-view="fit"]');
    const actual = toolbar.querySelector('[data-view="actual"]');
    const percentage = toolbar.querySelector('output');
    const status = stage.querySelector('[role="status"]');
    let image;
    let fitted = 1;
    let maximum = 4;
    let size;
    let ready = false;
    let pointerType;

    function updateControls(scale) {
      minus.disabled = !ready || scale <= fitted + tolerance;
      plus.disabled = !ready || scale >= maximum - tolerance;
      fit.disabled = minus.disabled;
      actual.disabled = !ready || Math.abs(scale - 1) < tolerance;
      percentage.value = ready ? Math.round(scale * 100) + '%' : '—';
      stage.dataset.zoomed = String(ready && !minus.disabled);
    }

    const behavior = zoom()
      .extent(() => [[0, 0], [stage.clientWidth, stage.clientHeight]])
      .filter(event => ready && !event.button && (!event.ctrlKey || event.type === 'wheel'))
      .duration(0)
      .clickDistance(4)
      .on('start', event => {
        if (event.sourceEvent?.type === 'mousedown') stage.dataset.dragging = 'true';
      })
      .on('end', () => { delete stage.dataset.dragging; })
      .on('zoom', ({transform}) => {
        if (!ready) return;
        image.style.transform = 'translate(' + transform.x + 'px,' + transform.y + 'px) scale(' + transform.k + ')';
        updateControls(transform.k);
      });
    surface.call(behavior);

    function fitImage() {
      if (ready) surface.call(behavior.scaleTo, fitted);
    }

    function scaleBy(factor) {
      if (ready) surface.call(behavior.scaleBy, factor);
    }

    function toggleAt(event) {
      if (!ready) return;
      const position = pointer(event.changedTouches?.[0] || event, stage);
      const scale = zoomTransform(stage).k;
      const detail = Math.min(maximum, Math.max(1, fitted * 2));
      surface.call(behavior.scaleTo, scale > fitted + tolerance ? fitted : detail, position);
    }

    // D3 suppresses the click after a drag. It also delivers a touch double-tap
    // to the dblclick handler. Keep the two synthetic mouse clicks from toggling twice.
    stage.addEventListener('pointerdown', event => { pointerType = event.pointerType; });
    surface.on('wheel.limit', event => {
      if (ready && (stage.closest('dialog') || event.ctrlKey)) event.preventDefault();
    }, {passive:false});
    surface.on('click.inspect', event => {
      if (event.target !== image || event.detail > 1 || pointerType === 'touch' || event.pointerType === 'touch' || event.sourceCapabilities?.firesTouchEvents) return;
      toggleAt(event);
    });
    surface.on('dblclick.zoom', event => {
      if (event.changedTouches) toggleAt(event);
      event.preventDefault();
    });

    minus.addEventListener('click', () => scaleBy(1 / Math.SQRT2));
    plus.addEventListener('click', () => scaleBy(Math.SQRT2));
    fit.addEventListener('click', fitImage);
    actual.addEventListener('click', () => surface.call(behavior.scaleTo, 1));

    function layout() {
      const width = stage.clientWidth, height = stage.clientHeight;
      if (!image?.complete || !image.naturalWidth || !width || !height) return;
      if (ready && width === size.width && height === size.height) return;

      const previous = zoomTransform(stage);
      const keepDetail = ready && previous.k > fitted + tolerance;
      const center = keepDetail ? previous.invert([size.width / 2, size.height / 2]) : [image.naturalWidth / 2, image.naturalHeight / 2];
      size = {width, height};
      fitted = Math.min(1, width / image.naturalWidth, height / image.naturalHeight);
      maximum = Math.max(4, fitted * 8);
      const bounds = [[0, 0], [image.naturalWidth, image.naturalHeight]];
      behavior.scaleExtent([fitted, maximum]).translateExtent(bounds);
      const k = keepDetail ? Math.min(maximum, Math.max(fitted, previous.k)) : fitted;
      const transform = zoomIdentity.translate(width / 2, height / 2).scale(k).translate(-center[0], -center[1]);
      ready = true;
      status.hidden = true;
      surface.call(behavior.transform, behavior.constrain()(transform, [[0, 0], [width, height]], bounds));
      image.style.visibility = 'visible';
    }

    function clear() {
      ready = false;
      size = null;
      if (image) {
        image.onload = image.onerror = null;
        image.remove();
        image = null;
      }
      status.hidden = true;
      updateControls(1);
    }

    function load(src, alt) {
      clear();
      status.textContent = 'Loading image…';
      status.hidden = false;
      image = new Image();
      image.alt = alt;
      image.draggable = false;
      image.style.visibility = 'hidden';
      image.onload = layout;
      image.onerror = () => { status.textContent = 'This image could not be loaded.'; };
      stage.prepend(image);
      image.src = src;
      layout();
    }

    function keydown(event) {
      if (!ready || event.ctrlKey || event.metaKey || event.altKey) return;
      const scale = zoomTransform(stage).k;
      const step = (event.shiftKey ? 160 : 64) / scale;
      switch (event.key) {
        case '+': case '=': scaleBy(Math.SQRT2); break;
        case '-': case '_': scaleBy(1 / Math.SQRT2); break;
        case '0': case 'Home': fitImage(); break;
        case '1': surface.call(behavior.scaleTo, 1); break;
        case 'ArrowLeft': surface.call(behavior.translateBy, step, 0); break;
        case 'ArrowRight': surface.call(behavior.translateBy, -step, 0); break;
        case 'ArrowUp': surface.call(behavior.translateBy, 0, step); break;
        case 'ArrowDown': surface.call(behavior.translateBy, 0, -step); break;
        default: return;
      }
      event.preventDefault();
      event.stopPropagation();
    }
    stage.addEventListener('keydown', keydown);
    new ResizeObserver(layout).observe(stage);
    updateControls(1);
    return {load, clear, keydown};
  }

  const dialog = document.getElementById('image-viewer');
  dialog.innerHTML = `
    <header class="image-toolbar">
      <div class="image-tools" role="group" aria-label="Image magnification">
        <button type="button" data-view="out" aria-label="Zoom out" title="Zoom out (−)">−</button>
        <output aria-label="Image magnification" aria-live="off"></output>
        <button type="button" data-view="in" aria-label="Zoom in" title="Zoom in (+)">+</button>
        <span class="tool-divider" aria-hidden="true"></span>
        <button type="button" data-view="fit" title="Fit image (0)">Fit</button>
        <button type="button" data-view="actual" aria-label="Actual size" title="Actual size (1)">1:1</button>
      </div>
      <div class="image-actions">
        <a class="open-original" target="_blank" rel="noopener" aria-label="Open full-resolution image in a new tab" title="Open full-resolution image in a new tab">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 4h6v6m0-6L10 14m0-9H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4"/></svg>
        </a>
        <button type="button" class="close-viewer" aria-label="Close image" title="Close (Esc)">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>
        </button>
      </div>
    </header>
    <figure class="image-frame">
      <div class="image-stage" tabindex="0" role="group" aria-label="Image pan and zoom" aria-describedby="image-keys image-caption">
        <span class="image-status" role="status" hidden></span>
      </div>
      <figcaption id="image-caption"></figcaption>
    </figure>
    <p class="image-gestures"><span>Click for detail · Scroll to zoom · Drag to pan</span><span>Double-tap or pinch to zoom · Drag to pan</span></p>
    <p class="viewer-visually-hidden" id="image-keys">Use plus and minus to zoom, arrow keys to pan, 0 to fit, 1 for actual size, and Escape to close.</p>`;
  const stage = dialog.querySelector('.image-stage');
  const toolbar = dialog.querySelector('.image-toolbar');
  const caption = dialog.querySelector('figcaption');
  const original = dialog.querySelector('.open-original');
  const close = dialog.querySelector('.close-viewer');
  const modal = createSurface(stage, toolbar);
  let opener;
  function open(src, description, alt, trigger) {
    opener = trigger || document.activeElement;
    original.href = src;
    caption.textContent = description;
    dialog.showModal();
    document.documentElement.classList.add('viewing-image');
    modal.load(src, alt);
    stage.focus({preventScroll:true});
  }
  dialog.addEventListener('keydown', modal.keydown);
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (dialog.open) return;
    modal.clear();
    document.documentElement.classList.remove('viewing-image');
    if (opener?.isConnected) opener.focus({preventScroll:true});
  });
  window.ArchiveViewer = {open, createSurface};
})();
