const ASSET = "../assets/";

const documents = [
  {
    id: "preparing-household-for-emigration",
    legacyIds: ["moving-goods-application", "household-inventory", "asset-statement-cuba", "dego-levy-sequence"],
    number: "01",
    date: "11 July–11 August 1938",
    title: "Preparing the household goods for emigration",
    shortTitle: "Household goods and the Dego levy",
    pagesLabel: "11 pages",
    people: "Samuel, Berta, and Werner Bachrach",
    type: "Emigration and foreign-exchange records",
    summary: "This sequence follows the family’s attempt to take its household abroad: Berta’s application, a detailed inventory, the declaration of the family’s limited assets and Cuba plan, and the assessment, appeal, payment, and clearance of the 350-Reichsmark Dego levy.",
    citation: "Emigration, property, and Dego-levy records concerning the Bachrach family, July–August 1938. HHStAW 519/3 Nr. 35995, images 0056, 0063–0064, 0068, 0072–0074, 0076–0078, and 0009.",
    pages: [
      {
        english: "facsimile-bertha-moving-goods-v2.png",
        original: "bertha-moving-goods-application-1938.jpg",
        caption: "Berta’s application identifies the planned departure date and intended voyage to North America."
      },
      {
        english: "facsimile-packing-list-1938-v3.png",
        original: "hhstaw_519--3_nr_35995_0063.jpg",
        caption: "Page 1 lists the principal furniture, carpets, lamps, books, tableware, and personal objects."
      },
      {
        english: "facsimile-packing-list-page-2-v2.png",
        original: "hhstaw_519--3_nr_35995_0064.jpg",
        caption: "Page 2 continues with household linens, kitchen goods, clothing, bedding, and other possessions."
      },
      {
        english: "facsimile-bertha-cuba-plan-v2.png",
        original: "bertha-asset-declaration-cuba-1938.jpg",
        caption: "The statement is the clearest surviving record of the family’s temporary plan for Samuel to travel through Cuba."
      },
      {
        english: "facsimile-dego-conditional-approval-ai-v1.png",
        original: "hhstaw_519--3_nr_35995_0072.jpg",
        caption: "3 August: the Customs Investigation Branch found no objection to export—provided Berta paid 350 Reichsmarks and left one bed frame behind."
      },
      {
        english: "facsimile-dego-levy-notice-ai-v1.png",
        original: "hhstaw_519--3_nr_35995_0073.jpg",
        caption: "5 August: the Foreign Exchange Office formally made export permission contingent on the levy."
      },
      {
        english: "facsimile-bertha-dego-appeal-v2.png",
        original: "bertha-dego-levy-appeal-1938.jpg",
        caption: "6 August: Berta asked that the levy be waived or reduced, describing the family’s strained finances and Werner’s recent growth."
      },
      {
        english: "facsimile-dego-postal-receipt-ai-v1.png",
        original: "hhstaw_519--3_nr_35995_0076.jpg",
        caption: "6 August: the postal receipt records payment of the full 350 Reichsmarks to the Deutsche Golddiskontbank."
      },
      {
        english: "facsimile-dego-final-clearance-ai-v1.png",
        original: "hhstaw_519--3_nr_35995_0077.jpg",
        caption: "8 August: the Foreign Exchange Office issued the clearance required to export the household goods."
      },
      {
        english: "facsimile-dego-customs-notification-ai-v1.png",
        original: "hhstaw_519--3_nr_35995_0078.jpg",
        caption: "8 August: customs officials at Kassel’s main freight station were told to allow the packing and onward handling of the shipment."
      },
      {
        english: "facsimile-dego-bank-acknowledgment-ai-v1.png",
        original: "hhstaw_519--3_nr_35995_0009.jpg",
        caption: "11 August: the Deutsche Golddiskontbank acknowledged receiving the levy and stated that the money had been used for “export-promotion purposes.”"
      }
    ]
  },
  {
    id: "citizenship-and-confiscation",
    number: "02",
    date: "1939–1940",
    title: "Citizenship revocation and confiscation of the family’s assets",
    shortTitle: "Citizenship and confiscation",
    pagesLabel: "3 pages",
    people: "Samuel, Berta, Werner, and Margot Bachrach",
    type: "Gestapo correspondence",
    summary: "After the family had left Germany, the Gestapo pursued the revocation of Samuel and Berta’s citizenship and the confiscation of any assets still within reach. One notice explicitly named Werner and Margot as part of the proceeding.",
    citation: "Gestapo correspondence concerning Samuel Bachrach and his family, 1939–1940. HHStAW 519/3 Nr. 35995, images 0010, 0017, and 0016.",
    pages: [
      {
        english: "facsimile-citizenship-revocation-proposal-ai-v1.png",
        original: "hhstaw_519--3_nr_35995_0010.jpg",
        caption: "16 February 1939: the Gestapo announced its intention to propose Samuel and Berta for revocation of German citizenship and asked officials to identify their assets."
      },
      {
        english: "facsimile-family-assets-confiscation-ai-v1.png",
        original: "hhstaw_519--3_nr_35995_0017.jpg",
        caption: "24 April 1940: the Gestapo ordered the family’s assets secured, naming Samuel, Berta, Werner, and Margot."
      },
      {
        english: "facsimile-assets-secured-1940-ai-v1.png",
        original: "hhstaw_519--3_nr_35995_0016.jpg",
        caption: "23 May 1940: the Gestapo reported that a bank account containing 422.60 Reichsmarks had been located and secured."
      }
    ]
  }
];

const state = {
  documentIndex: -1,
  pageIndex: 0,
  variant: "english",
  zoom: 1,
  panX: 0,
  panY: 0
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = .5;

const cards = document.querySelector("#document-cards");
const reader = document.querySelector("#reader");
const readerEmpty = document.querySelector("#reader-empty");
const readerContent = document.querySelector("#reader-content");
const readerTitle = document.querySelector("#reader-title");
const readerKicker = document.querySelector("#reader-kicker");
const readerSummary = document.querySelector("#reader-summary");
const readerMeta = document.querySelector("#reader-meta");
const readerCitation = document.querySelector("#reader-citation");
const image = document.querySelector("#document-image");
const fullImageLink = document.querySelector("#full-image-link");
const caption = document.querySelector("#document-caption");
const position = document.querySelector("#page-position");
const thumbnails = document.querySelector("#page-thumbnails");
const previous = document.querySelector("#previous-page");
const next = document.querySelector("#next-page");
const variantButtons = [...document.querySelectorAll(".variant-tab")];
const viewport = document.querySelector("#document-viewport");
const zoomIn = document.querySelector("#zoom-in");
const zoomOut = document.querySelector("#zoom-out");
const resetViewButton = document.querySelector("#reset-view");
const zoomLevel = document.querySelector("#zoom-level");

const drag = {
  active: false,
  moved: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  startPanX: 0,
  startPanY: 0
};

function asset(path) {
  return `${ASSET}${path}?v=20261021-ai1`;
}

function renderCards() {
  cards.innerHTML = "";
  documents.forEach((entry, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "document-card";
    button.dataset.documentId = entry.id;
    button.setAttribute("aria-label", `Open ${entry.title}, ${entry.pagesLabel}`);
    button.innerHTML = `
      <span class="document-card-image"><img src="${asset(entry.pages[0].original)}" alt="" loading="lazy"></span>
      <span class="document-card-copy">
        <span class="card-number">${entry.number}</span>
        <span class="card-date">${entry.date}</span>
        <strong>${entry.shortTitle}</strong>
        <span class="card-pages">${entry.pagesLabel}</span>
      </span>`;
    button.addEventListener("click", () => openDocument(index, true));
    cards.append(button);
  });
}

function clampPan() {
  if (state.zoom <= MIN_ZOOM) {
    state.panX = 0;
    state.panY = 0;
    return;
  }

  const maxX = Math.max(0, (image.offsetWidth * state.zoom - viewport.clientWidth) / 2 + 24);
  const maxY = Math.max(0, (image.offsetHeight * state.zoom - viewport.clientHeight) / 2 + 24);
  state.panX = Math.max(-maxX, Math.min(maxX, state.panX));
  state.panY = Math.max(-maxY, Math.min(maxY, state.panY));
}

function applyView() {
  clampPan();
  image.style.transform = `translate3d(${state.panX}px, ${state.panY}px, 0) scale(${state.zoom})`;
  viewport.dataset.zoomed = String(state.zoom > MIN_ZOOM);
  viewport.dataset.dragging = String(drag.active && drag.moved);
  zoomLevel.value = `${Math.round(state.zoom * 100)}%`;
  zoomLevel.textContent = `${Math.round(state.zoom * 100)}%`;
  zoomOut.disabled = state.zoom <= MIN_ZOOM;
  zoomIn.disabled = state.zoom >= MAX_ZOOM;
  resetViewButton.disabled = state.zoom <= MIN_ZOOM && state.panX === 0 && state.panY === 0;
}

function resetView() {
  state.zoom = MIN_ZOOM;
  state.panX = 0;
  state.panY = 0;
  applyView();
}

function setZoom(value, originX = viewport.clientWidth / 2, originY = viewport.clientHeight / 2) {
  const nextZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, value));
  const previousZoom = state.zoom;
  if (nextZoom === previousZoom) return;

  if (nextZoom === MIN_ZOOM) {
    state.panX = 0;
    state.panY = 0;
  } else {
    const centerX = viewport.clientWidth / 2;
    const centerY = viewport.clientHeight / 2;
    const ratio = nextZoom / previousZoom;
    state.panX = originX - centerX - (originX - centerX - state.panX) * ratio;
    state.panY = originY - centerY - (originY - centerY - state.panY) * ratio;
  }

  state.zoom = nextZoom;
  applyView();
}

function renderMetadata(entry) {
  readerMeta.innerHTML = `
    <div><dt>Date</dt><dd>${entry.date}</dd></div>
    <div><dt>People</dt><dd>${entry.people}</dd></div>
    <div><dt>Record type</dt><dd>${entry.type}</dd></div>
    <div><dt>Extent</dt><dd>${entry.pagesLabel}</dd></div>`;
}

function renderThumbnails(entry) {
  thumbnails.innerHTML = "";
  entry.pages.forEach((page, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "thumbnail-button";
    button.setAttribute("aria-label", `Show page ${index + 1}`);
    button.setAttribute("aria-current", String(index === state.pageIndex));
    const source = state.variant === "english" ? page.english : page.original;
    button.innerHTML = `<img src="${asset(source)}" alt=""><span>${String(index + 1).padStart(2, "0")}</span>`;
    button.addEventListener("click", () => {
      state.pageIndex = index;
      renderPage();
    });
    thumbnails.append(button);
  });
}

function renderPage() {
  const entry = documents[state.documentIndex];
  const page = entry.pages[state.pageIndex];
  const source = state.variant === "english" ? page.english : page.original;
  resetView();
  image.src = asset(source);
  image.alt = `${state.variant === "english" ? "English facsimile" : "Archival original"}, page ${state.pageIndex + 1} of ${entry.pages.length}: ${entry.title}`;
  fullImageLink.href = asset(source);
  caption.textContent = page.caption;
  position.textContent = `Page ${state.pageIndex + 1} of ${entry.pages.length}`;
  previous.disabled = state.pageIndex === 0;
  next.disabled = state.pageIndex === entry.pages.length - 1;
  variantButtons.forEach(button => {
    const active = button.dataset.variant === state.variant;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderThumbnails(entry);
}

function openDocument(index, shouldScroll = false) {
  state.documentIndex = index;
  state.pageIndex = 0;
  state.variant = "english";
  const entry = documents[index];
  readerEmpty.hidden = true;
  readerContent.hidden = false;
  readerKicker.textContent = `Document ${entry.number} · ${entry.pagesLabel}`;
  readerTitle.textContent = entry.title;
  readerSummary.textContent = entry.summary;
  readerCitation.textContent = entry.citation;
  renderMetadata(entry);
  renderPage();
  document.querySelectorAll(".document-card").forEach(card => {
    card.classList.toggle("active", card.dataset.documentId === entry.id);
  });
  history.replaceState(null, "", `#${entry.id}`);
  if (shouldScroll) reader.scrollIntoView({ behavior: "smooth", block: "start" });
}

previous.addEventListener("click", () => {
  if (state.pageIndex > 0) {
    state.pageIndex -= 1;
    renderPage();
  }
});

next.addEventListener("click", () => {
  const entry = documents[state.documentIndex];
  if (state.pageIndex < entry.pages.length - 1) {
    state.pageIndex += 1;
    renderPage();
  }
});

variantButtons.forEach(button => {
  button.addEventListener("click", () => {
    state.variant = button.dataset.variant;
    renderPage();
  });
});

zoomIn.addEventListener("click", () => setZoom(state.zoom + ZOOM_STEP));
zoomOut.addEventListener("click", () => setZoom(state.zoom - ZOOM_STEP));
resetViewButton.addEventListener("click", resetView);

viewport.addEventListener("pointerdown", event => {
  if (event.button !== 0 || !event.isPrimary) return;
  drag.active = true;
  drag.moved = false;
  drag.pointerId = event.pointerId;
  drag.startX = event.clientX;
  drag.startY = event.clientY;
  drag.startPanX = state.panX;
  drag.startPanY = state.panY;
  viewport.setPointerCapture(event.pointerId);
});

viewport.addEventListener("pointermove", event => {
  if (!drag.active || event.pointerId !== drag.pointerId || state.zoom <= MIN_ZOOM) return;
  const deltaX = event.clientX - drag.startX;
  const deltaY = event.clientY - drag.startY;
  if (Math.abs(deltaX) + Math.abs(deltaY) > 5) drag.moved = true;
  if (!drag.moved) return;
  state.panX = drag.startPanX + deltaX;
  state.panY = drag.startPanY + deltaY;
  applyView();
});

function finishPointer(event) {
  if (!drag.active || event.pointerId !== drag.pointerId) return;
  if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
  const shouldZoom = !drag.moved;
  drag.active = false;
  drag.pointerId = null;
  viewport.dataset.dragging = "false";
  if (shouldZoom) {
    const bounds = viewport.getBoundingClientRect();
    setZoom(state.zoom + ZOOM_STEP, event.clientX - bounds.left, event.clientY - bounds.top);
  }
}

viewport.addEventListener("pointerup", finishPointer);
viewport.addEventListener("pointercancel", event => {
  if (event.pointerId !== drag.pointerId) return;
  drag.active = false;
  drag.pointerId = null;
  viewport.dataset.dragging = "false";
});

image.addEventListener("load", applyView);
window.addEventListener("resize", applyView);

document.addEventListener("keydown", event => {
  if (state.documentIndex < 0 || event.target.matches("input, textarea, select")) return;
  if (event.key === "ArrowLeft") previous.click();
  if (event.key === "ArrowRight") next.click();
  if (event.key === "+" || event.key === "=") setZoom(state.zoom + ZOOM_STEP);
  if (event.key === "-") setZoom(state.zoom - ZOOM_STEP);
  if (event.key === "0") resetView();
});

renderCards();

function openFromHash() {
  const requestedId = window.location.hash.slice(1);
  const index = documents.findIndex(entry => entry.id === requestedId || entry.legacyIds?.includes(requestedId));
  if (index >= 0 && index !== state.documentIndex) openDocument(index, true);
}

openFromHash();
window.addEventListener("hashchange", openFromHash);
