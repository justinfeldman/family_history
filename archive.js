(() => {
  const legacy = {
    story: 'wittelsberg.html', 'historical-context': 'wittelsberg.html#rural-hesse',
    'baums-in-wittelsberg': 'wittelsberg.html', 'bachrachs-in-frielendorf': 'frielendorf.html',
    'primary-sources': 'sources.html', 'bertha-and-samuel': 'margot.html#bertha-and-samuel',
    'anschel-and-lina-emigrate': 'margot.html#anschel-and-lina-emigrate',
    'margot-emigrates': 'margot.html#margot-emigrates', 'family-leaves-germany': 'margot.html#family-leaves-germany',
    'denmark-and-sweden': 'margot.html#denmark-and-sweden', 'life-after-the-war': 'margot.html#life-after-the-war',
    'children-cohort-grid': 'margot.html#children-cohort-grid', 'restitution-summary': 'margot.html#restitution-summary'
  };
  function followFragment() {
    const key = location.hash.slice(1);
    if (document.body.classList.contains('archive-home') && Object.hasOwn(legacy, key)) {
      location.replace(legacy[key]);
      return;
    }
    const target = document.getElementById(key);
    if (target) {
      target.scrollIntoView({block: 'start', behavior: 'instant'});
    }
  }
  window.addEventListener('hashchange', followFragment);
  document.addEventListener('DOMContentLoaded', followFragment);
  function button(label, className) {
    const el = document.createElement('button');
    el.type = 'button';
    el.textContent = label;
    if (className) el.className = className;
    return el;
  }
  function attachTreeZoom(pane, content) {
    const bar = document.createElement('div');
    bar.className = 'zoom-bar';
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Zoom controls');
    const minus = button('−'), plus = button('+'), fit = button('Fit');
    minus.setAttribute('aria-label', 'Zoom out');
    plus.setAttribute('aria-label', 'Zoom in');
    const output = document.createElement('output');
    bar.append(minus, output, plus, fit);
    pane.before(bar);
    let level = 1;
    function size(next = level, center = false) {
      if (!pane.clientWidth) return;
      const ratio = next / level;
      const x = (pane.scrollLeft + pane.clientWidth / 2) * ratio;
      const y = (pane.scrollTop + pane.clientHeight / 2) * ratio;
      level = next;
      content.style.width = pane.clientWidth + 'px';
      content.style.zoom = level;
      output.textContent = Math.round(level * 100) + '%';
      minus.disabled = level === 1;
      plus.disabled = level === 4;
      pane.dataset.zoomed = String(level > 1);
      pane.scrollTo(center ? x - pane.clientWidth / 2 : 0, center ? y - pane.clientHeight / 2 : 0);
    }
    minus.onclick = () => size(Math.max(1, level / 1.5), true);
    plus.onclick = () => size(Math.min(4, level * 1.5), true);
    fit.onclick = () => size(1);
    let drag, moved = false;
    pane.addEventListener('pointerdown', e => {
      if (level === 1 || e.pointerType !== 'mouse' || e.button !== 0) return;
      moved = false;
      drag = {x:e.clientX, y:e.clientY, left:pane.scrollLeft, top:pane.scrollTop};
    });
    pane.addEventListener('pointermove', e => {
      if (!drag || !e.buttons) { drag = null; return; }
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!moved && Math.hypot(dx, dy) < 4) return;
      moved = true; pane.setPointerCapture(e.pointerId);
      pane.scrollTo(drag.left - dx, drag.top - dy);
    });
    pane.addEventListener('pointerup', () => { drag = null; });
    pane.addEventListener('pointercancel', () => { drag = null; });
    pane.addEventListener('dragstart', e => e.preventDefault());
    pane.addEventListener('click', e => { if (moved) {e.preventDefault(); e.stopImmediatePropagation(); moved = false;} }, true);
    new ResizeObserver(() => size(level, true)).observe(pane);
    return () => size(1);
  }
  document.querySelectorAll('.house-tree .pan-window').forEach(pane => {
    attachTreeZoom(pane, pane.querySelector('.kin-chart'))();
  });
  document.querySelectorAll('.plate').forEach(figure => {
    const image = figure.querySelector('img');
    const opener = figure.querySelector('.enlarge');
    const original = opener.href;
    let label = '';
    opener.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      ArchiveViewer.open(opener.href, [figure.querySelector('figcaption').textContent, label].filter(Boolean).join(' · '), image.alt, opener);
    });
    if (!figure.dataset.variant) return;
    const controls = document.createElement('div');
    controls.className = 'variant-controls';
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', 'Image version');
    for (const [text, url] of [['Original', original], [figure.dataset.label, figure.dataset.variant]]) {
      const pick = button(text);
      pick.setAttribute('aria-pressed', String(url === original));
      pick.addEventListener('click', () => {
        image.src = url;
        opener.href = url;
        label = url === original ? '' : text;
        for (const sibling of controls.children) sibling.setAttribute('aria-pressed', String(sibling === pick));
      });
      controls.append(pick);
    }
    figure.append(controls);
  });
  document.querySelectorAll('.record-list a').forEach(anchor => {
    if (!/\.(jpg|png|jpeg)$/i.test(anchor.pathname)) return;
    anchor.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const description = anchor.nextElementSibling.textContent;
      ArchiveViewer.open(anchor.href, anchor.textContent + '. ' + description, anchor.textContent, anchor);
    });
  });
  document.querySelectorAll('.album').forEach(album => {
    const frames = [...album.querySelectorAll('.plate')];
    const controls = document.createElement('div');
    controls.className = 'album-controls';
    const previous = button('← Previous'), next = button('Next →');
    const position = document.createElement('span');
    position.setAttribute('aria-live', 'polite');
    let index = 0;
    function display(i) {
      index = (i + frames.length) % frames.length;
      frames.forEach((frame, j) => { frame.hidden = j !== index; });
      position.textContent = (index + 1) + ' of ' + frames.length;
    }
    previous.addEventListener('click', () => display(index - 1));
    next.addEventListener('click', () => display(index + 1));
    controls.append(previous, position, next);
    album.append(controls);
    display(0);
  });
})();
