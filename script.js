const chapterMeta = {
  "Two Generations in a Changing Hesse": {
    id: "historical-context",
    date: "c. 1770–1927",
    place: "Hesse · 9 family places",
    part: "I",
    partTitle: "Roots in rural Hesse"
  },
  "The Bachrach Family In Frielendorf": {
    id: "bachrachs-in-frielendorf",
    date: "c. 1850–1921",
    place: "Frielendorf",
    part: "I",
    partTitle: "Roots in rural Hesse"
  },
  "The Baum Family in Wittelsberg": {
    id: "baums-in-wittelsberg",
    date: "c. 1750–1933",
    place: "Wittelsberg",
    part: "I",
    partTitle: "Roots in rural Hesse"
  },
  "Bertha Baum and Samuel Bachrach": {
    id: "bertha-and-samuel",
    date: "1921–1933",
    place: "Frielendorf · Kassel",
    part: "II",
    partTitle: "A family in transition"
  },
  "Emigration of Anschel and Lina": {
    id: "anschel-and-lina-emigrate",
    date: "1933–1934",
    place: "Wittelsberg → Brooklyn",
    part: "III",
    partTitle: "Persecution and departure"
  },
  "Margot's Emigration": {
    id: "margot-emigrates",
    date: "1934–1935",
    place: "Kassel → Brooklyn",
    part: "III",
    partTitle: "Persecution and departure"
  },
  "Bertha, Werner, and Samuel Leave Germany": {
    id: "family-leaves-germany",
    date: "1938",
    place: "Kassel",
    part: "III",
    partTitle: "Persecution and departure"
  },
  "Trapped in Denmark, Evacuated to Sweden": {
    id: "denmark-and-sweden",
    date: "1938–1945",
    place: "Copenhagen · Malmö",
    part: "IV",
    partTitle: "War, rescue, and aftermath"
  },
  "Life After the War": {
    id: "life-after-the-war",
    date: "After 1945",
    place: "Brooklyn · Copenhagen",
    part: "IV",
    partTitle: "War, rescue, and aftermath"
  }
};

const backgroundTimeline = [
  {
    date: "c. 1770–1806",
    title: "Life by permission",
    text: "A <i>Schutzjude</i> (“protected Jew”) was a Jew permitted to reside in a territory under an individual ruler’s protection, usually documented in a <i>Schutzbrief</i> and often conditioned on fees and restrictions on marriage, settlement, and occupation. This was permission, not equal citizenship. Every ancestor in this oldest generation whose occupation is recorded was described as a <i>Handelsmann</i>—or, for a woman, <i>Handelsfrau</i>. The term meant a person who made a living through trade and could encompass buying and selling goods, produce, or livestock across several villages rather than one narrowly defined profession."
  },
  {
    date: "1807–1813",
    title: "Temporary Reforms Under Napoleon",
    text: "After Napoleon abolished Hesse-Kassel and incorporated much of it into the Kingdom of Westphalia, an 1808 decree granted Jews equal civic status and replaced the old protection system with citizenship. The reforms lasted only until Napoleon’s defeat; Hesse-Kassel was restored in 1813 and many restrictions returned."
  },
  {
    date: "1833–1848",
    title: "Rights widen unevenly",
    text: "An 1833 law improved the status of Jews in Electoral Hesse, while reforms elsewhere followed different timetables. The 1848 revolutions raised hopes of general citizenship, but some gains were narrowed again. Anschel Löb Wolf was still recorded as a Schutzjude when he married in 1841."
  },
  {
    date: "1866–1871",
    title: "Prussia, emancipation, empire",
    text: "Prussia annexed Electoral Hesse in 1866. The North German Confederation’s 1869 law removed civil and civic restrictions based on religion; the principle extended across the new German Empire in 1871. Formal equality arrived during the great-grandparents’ adult lives, though social barriers persisted."
  },
  {
    date: "c. 1876–1890s",
    title: "A crisis in the countryside",
    text: "Railways and steamships carried inexpensive grain from Russia and overseas into German markets. Farm prices fell, fixed debts became harder to repay, and agriculture entered a prolonged structural crisis even as German industry continued to grow. Livestock and meat markets expanded, but traders also faced price volatility, thin margins, and customers unable to pay."
  },
  {
    date: "1887–1890s",
    title: "Antisemitism becomes a rural movement",
    text: "Otto Böckel won the Marburg–Kirchhain–Frankenberg constituency in 1887 as the first openly antisemitic Reichstag deputy. His movement was concentrated especially strongly in rural north and central Hesse rather than spread evenly across Germany. His constituency covered the countryside around family villages including Wittelsberg, Mardorf, and Josbach, while other ancestral villages lay in the neighboring Hessian rural belt. He recast a real agrarian crisis as a Jewish conspiracy and organized boycotts, rival cooperatives, legal-aid offices, and ‘Jew-free’ markets."
  },
  {
    date: "1890s–1914",
    title: "Village institutions, urban horizons",
    text: "Small congregations still funded synagogues, cemeteries, teachers, ritual slaughterers, charities, and schools. Meanwhile, city growth and new commercial careers offered the next generation alternatives to rural trades increasingly exposed to volatility, exclusion, and demographic decline."
  },
  {
    date: "1914–1919",
    title: "War and a democratic constitution",
    text: "Margot’s father, Samuel Bachrach, fought for Germany in World War I. Several of her great-grandparents also lived through the war. The Weimar Constitution of 1919 again guaranteed civil equality and access to public office regardless of religious confession—an important promise in law, but not an end to antisemitism."
  }
];

const mediaVariants = {
  "assets/Synagogue in Frielendorf.png": {
    enhanced: "assets/colorized-frielendorf-synagogue.png",
    enhancedLabel: "Colorized",
    kind: "place",
    note: "Colorization. Architectural detail and colors are interpretive; use Original to inspect the source photograph."
  },
  "assets/frielendorf-schoolroom-dispute-1896-original.jpg": {
    enhanced: "assets/facsimile-frielendorf-schoolroom-dispute-1896.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile of the German manuscript. The original paper, layout, embossed seal, folds, and show-through are retained; the English handwriting is reconstructed. HStAM, 171, no. 277, image 0007."
  },
  "assets/Germany baby Bertha Baum 1901.jpg": {
    enhanced: "assets/restored-baum-family-1901-2026.png",
    enhancedLabel: "Restored",
    kind: "photo",
    note: "Restoration created to evoke the clarity of a present-day photograph. Reconstructed facial detail, color, texture, and other fine detail are interpretive; use Original to inspect the historical photograph."
  },
  "assets/Murry & Margot photo.jpeg": {
    enhanced: "assets/colorized-margot-murry.png",
    enhancedLabel: "Colorized",
    kind: "photo",
    note: "Colorization. Clothing and interior colors are interpretive."
  },
  "assets/Samuel Bachrach.jpeg": {
    enhanced: "assets/samuel-bachrach-80-restored-2026.png",
    enhancedLabel: "Restored",
    kind: "photo",
    note: "Reconstruction created to evoke a present-day studio portrait. Reconstructed facial detail, color, texture, and clothing detail are interpretive; use Original to inspect the newspaper image."
  },
  "assets/Jakob Bachrach 75th birthday announcement.jpg": {
    enhanced: "assets/facsimile-jakob-announcement-v2.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile based on the German newspaper clipping; spacing and typography are reconstructed."
  },
  "assets/samuel_police_certificate.jpg": {
    enhanced: "assets/facsimile-samuel-police-certificate-v2.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile. Dates and wording follow the archival scan; stamps and layout are reconstructed."
  },
  "assets/hhstaw_519--3_nr_35995_0063.jpg": {
    enhanced: "assets/facsimile-packing-list-1938-v3.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile of page 1. The original scan remains available for comparison."
  },
  "assets/hhstaw_519--3_nr_35995_0064.jpg": {
    enhanced: "assets/facsimile-packing-list-page-2-v2.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile of page 2, the continuation of the export inventory. The original scan remains available for comparison."
  },
  "assets/bertha-moving-goods-application-1938.jpg": {
    enhanced: "assets/facsimile-bertha-moving-goods-v2.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile of Berta's July 11, 1938 application."
  },
  "assets/bertha-asset-declaration-cuba-1938.jpg": {
    enhanced: "assets/facsimile-bertha-cuba-plan-v2.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile. This newly featured page explicitly links Samuel's planned journey to preparations for Cuba."
  },
  "assets/hhstaw_519--3_nr_35995_0050.jpg": {
    enhanced: "assets/facsimile-samuel-denmark-wagons-lits-1938-ai-v1.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile of the November 23, 1938 letter. The original paper, damage, stamps, typewriter texture, and layout are retained; select Original to inspect the German archival scan."
  },
  "assets/bertha-dego-levy-appeal-1938.jpg": {
    enhanced: "assets/facsimile-bertha-dego-appeal-v2.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile of Berta's appeal against the 350 Reichsmark levy."
  },
  "assets/Swedish refugee intake.jpg": {
    enhanced: "assets/facsimile-swedish-passport-application-v2.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile presenting the legible identifying fields; some handwriting on the original is faint."
  },
  "assets/Werner Bachrach.jpg": {
    enhanced: "assets/werner-bachrach-portrait-restored-2026.png",
    enhancedLabel: "Restored",
    kind: "photo",
    note: "Reconstruction of the portrait embedded in Werner's 1951 Brazilian consular record, created to evoke a present-day studio photograph. Reconstructed facial detail, color, texture, and clothing detail are interpretive; use Original to inspect the complete document."
  },
  "assets/baum_reparations_page.png": {
    enhanced: "assets/facsimile-reparations-inquiry-v2.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile of the 1958 inquiry sent to the mayor of Wittelsberg."
  },
  "assets/bertha-baum-household-affidavit-1959-original.jpg": {
    enhanced: "assets/facsimile-bertha-baum-household-affidavit-1959.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile of Bertha Loewinger's October 1959 sworn declaration about the Baum household and nighttime sales. The original remains available for comparison."
  },
  "assets/ludwig_power_of_attorney.png": {
    enhanced: "assets/facsimile-ludwig-power-of-attorney-v2.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile of Ludwig Baum's September 12, 1957 power of attorney."
  },
  "assets/hhstaw_518_nr_61134_0081.jpg": {
    enhanced: "assets/facsimile-reparations-application-v2.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile of the first application page."
  }
};

const state = {
  media: [],
  activeMedia: null,
  currentSection: null
};

const story = document.querySelector("#story");
const timeline = document.querySelector("#timeline");
const contentsList = document.querySelector("#contents-list");
const archiveGrid = document.querySelector("#archive-grid");
const contentsDialog = document.querySelector("#contents-dialog");
const mediaDialog = document.querySelector("#media-dialog");
const mediaDialogImage = document.querySelector("#media-dialog-image");
const mediaDialogTitle = document.querySelector("#media-dialog-title");
const mediaDialogKicker = document.querySelector("#media-dialog-kicker");
const mediaDialogCaption = document.querySelector("#media-dialog-caption");
const mediaDialogSwitch = document.querySelector("#media-dialog-switch");

function fallbackMeta(section, index) {
  const base = section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return {
    id: base || `chapter-${index + 1}`,
    date: section.year || "",
    place: "",
    part: "",
    partTitle: "The family story"
  };
}

function mediaKind(file, variant) {
  if (variant?.kind) return variant.kind;
  const name = file.toLowerCase();
  if (/map|house|school|volksschule|boarding|synagogue|st\.? john|lincoln place|washington ave/.test(name)) return "place";
  if (/certificate|register|passport|police|reparation|attorney|announcement|article|plaque|hhstaw|intake/.test(name)) return "document";
  return "photo";
}

function makeVariantSwitch(model, selected, onChange) {
  const switcher = document.createElement("div");
  switcher.className = "variant-switch";
  switcher.setAttribute("aria-label", "Image version");
  const options = model.variant ? [
    { value: "enhanced", label: model.variant.enhancedLabel },
    { value: "original", label: "Original" }
  ] : [{ value: "original", label: "Original" }];

  options.forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `variant-button${selected === option.value ? " active" : ""}`;
    button.textContent = option.label;
    button.dataset.variant = option.value;
    button.setAttribute("aria-pressed", String(selected === option.value));
    button.addEventListener("click", () => onChange(option.value, switcher));
    switcher.append(button);
  });
  return switcher;
}

function setSwitchState(switcher, value) {
  switcher.querySelectorAll(".variant-button").forEach(button => {
    const active = button.dataset.variant === value;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function createMediaModel(file, caption, chapterTitle) {
  const variant = mediaVariants[file];
  return {
    id: state.media.length,
    original: file,
    enhanced: variant?.enhanced || null,
    variant,
    selected: variant ? "enhanced" : "original",
    caption: caption || "Archival image",
    title: chapterTitle,
    kind: mediaKind(file, variant)
  };
}

function createMediaCard(model) {
  const card = document.createElement("div");
  card.className = "media-card";
  card.dataset.kind = model.kind;

  const shell = document.createElement("div");
  shell.className = "media-shell";
  const open = document.createElement("button");
  open.type = "button";
  open.className = "media-open";
  open.setAttribute("aria-label", `Open full-size image: ${model.caption}`);
  const img = document.createElement("img");
  img.src = model.enhanced || model.original;
  img.alt = model.caption;
  img.loading = "lazy";
  img.decoding = "async";
  open.append(img);
  open.addEventListener("click", () => openMedia(model));
  shell.append(open);

  const copy = document.createElement("div");
  copy.className = "media-copy";
  const meta = document.createElement("div");
  meta.className = "media-meta";
  const label = document.createElement("span");
  label.className = "media-label";
  label.textContent = model.variant?.enhancedLabel || (model.kind === "document" ? "Archival document" : model.kind === "place" ? "Place" : "Photograph");
  meta.append(label);

  if (model.variant) {
    const switcher = makeVariantSwitch(model, model.selected, (value, control) => {
      model.selected = value;
      img.src = value === "enhanced" ? model.enhanced : model.original;
      label.textContent = value === "enhanced" ? model.variant.enhancedLabel : "Archival original";
      setSwitchState(control, value);
    });
    meta.append(switcher);
  }

  const caption = document.createElement("p");
  caption.className = "media-caption";
  caption.textContent = model.caption;
  copy.append(meta, caption);

  if (model.variant?.note) {
    const note = document.createElement("p");
    note.className = "interpretive-note";
    note.textContent = model.variant.note;
    copy.append(note);
  }

  card.append(shell, copy);
  return card;
}

function renderMediaItem(item, chapterTitle) {
  const files = (item.image_files || []).filter(Boolean);
  if (!files.length) return null;
  const figure = document.createElement("figure");
  figure.className = "media-figure";
  const grid = document.createElement("div");
  grid.className = "media-grid";
  grid.style.setProperty("--media-count", Math.min(files.length, 2));

  files.forEach((file, index) => {
    const caption = item.captions?.[index] || item.captions?.[0] || item.text || "Archival image";
    const model = createMediaModel(file, caption, chapterTitle);
    state.media.push(model);
    grid.append(createMediaCard(model));
  });
  figure.append(grid);
  return figure;
}

function renderHistoryTimeline() {
  const section = document.createElement("section");
  section.className = "history-context context-wide";
  section.setAttribute("aria-labelledby", "history-context-title");
  const header = document.createElement("div");
  header.className = "context-block-heading context-block-heading-light";
  header.innerHTML = `
    <div><p class="eyebrow">History in their lifetimes</p><h3 id="history-context-title">What changed around them</h3></div>
    <p>Legal reform did not move in a straight line. Each expansion of rights existed alongside local limits, economic pressure, and social prejudice.</p>
  `;
  const list = document.createElement("ol");
  list.className = "history-context-list";
  backgroundTimeline.forEach((event, index) => {
    const item = document.createElement("li");
    item.innerHTML = `<span class="history-index">${String(index + 1).padStart(2, "0")}</span><div><time>${event.date}</time><h4>${event.title}</h4><p>${event.text}</p></div>`;
    list.append(item);
  });
  section.append(header, list);
  return section;
}

function renderRestitutionTable(item) {
  const section = document.createElement("section");
  section.className = "restitution-summary context-wide";
  section.id = "restitution-summary";

  const header = document.createElement("div");
  header.className = "restitution-heading";
  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "Restitution at a glance";
  const title = document.createElement("h3");
  title.id = "compensation-awards-title";
  title.textContent = item.title;
  header.append(eyebrow, title);

  const frame = document.createElement("div");
  frame.className = "restitution-table-frame";
  const table = document.createElement("table");
  table.className = "restitution-table";
  table.setAttribute("aria-labelledby", title.id);
  const head = document.createElement("thead");
  const headRow = document.createElement("tr");
  const columnLabels = ["Recipient", "Award year", "Basis", "Amount (DM and 2026 USD)"];
  columnLabels.forEach(label => {
    const cell = document.createElement("th");
    cell.scope = "col";
    cell.textContent = label;
    headRow.append(cell);
  });
  head.append(headRow);

  const body = document.createElement("tbody");
  item.rows.forEach(row => {
    const tr = document.createElement("tr");
    if (row.emphasis) tr.className = "restitution-total";
    const recipient = document.createElement("th");
    recipient.scope = "row";
    recipient.textContent = row.recipient;
    tr.append(recipient);
    [row.year, row.basis].forEach((value, index) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      cell.dataset.label = columnLabels[index + 1];
      tr.append(cell);
    });
    const amount = document.createElement("td");
    amount.dataset.label = columnLabels[3];
    const values = document.createElement("div");
    const dm = document.createElement("strong");
    dm.textContent = row.dm;
    const usd = document.createElement("span");
    usd.textContent = row.usd;
    values.append(dm, usd);
    amount.append(values);
    tr.append(amount);
    body.append(tr);
  });
  table.append(head, body);
  frame.append(table);

  section.append(header, frame);
  return section;
}

function cohortAgeBand(age) {
  if (age < 11) return "under-11";
  if (age < 14) return "11-13";
  return "14-15";
}

function renderChildrenCohort() {
  const children = window.cohort1935Children || [];
  const section = document.createElement("section");
  section.className = "children-cohort context-wide";
  section.id = "children-cohort-grid";
  section.setAttribute("aria-labelledby", "children-cohort-title");

  const header = document.createElement("div");
  header.className = "context-block-heading";
  header.innerHTML = `
    <div><p class="eyebrow">The 1935 cohort</p><h3 id="children-cohort-title">Unaccompanied German Jewish child refugees</h3></div>
    <p>Rearrange the same children to compare age, gender, or the kind of placement that brought them to the United States.</p>
  `;

  const controls = document.createElement("div");
  controls.className = "cohort-controls";
  controls.setAttribute("role", "group");
  controls.setAttribute("aria-label", "Group children by");
  const controlLabel = document.createElement("span");
  controlLabel.textContent = "Group by";
  controls.append(controlLabel);

  const summary = document.createElement("div");
  summary.className = "cohort-selection";
  summary.setAttribute("aria-live", "polite");
  const summaryName = document.createElement("strong");
  const summaryDetail = document.createElement("span");
  summary.append(summaryName, summaryDetail);

  const groups = document.createElement("div");
  groups.className = "cohort-groups";

  const tooltip = document.createElement("div");
  tooltip.className = "cohort-tooltip";
  tooltip.setAttribute("role", "tooltip");
  tooltip.hidden = true;

  const legend = document.createElement("div");
  legend.className = "cohort-legend";

  const note = document.createElement("p");
  note.className = "cohort-note";
  note.textContent = "These individuals were identified through a systematic search of ship manifests on Ancestry.com for children who were under age 16 who arrived in 1935 with \"Hebrew\" reported for race and Germany reported as the birth country. German Jewish Children’s Aid reported placing 103 children in 1935 (compared to 100 identified here), suggesting that the Ancestry search method identified the vast majority of unaccompanied minors.";

  const groupings = {
    age: {
      label: "Age group",
      categories: [
        { key: "under-11", label: "Ages 9–10", tone: "gold", test: child => cohortAgeBand(child.age) === "under-11" },
        { key: "11-13", label: "Ages 11–13", tone: "red", test: child => cohortAgeBand(child.age) === "11-13" },
        { key: "14-15", label: "Ages 14–15", tone: "forest", test: child => cohortAgeBand(child.age) === "14-15" }
      ]
    },
    gender: {
      label: "Gender",
      categories: [
        { key: "female", label: "Girls", tone: "red", test: child => child.gender === "female" },
        { key: "male", label: "Boys", tone: "forest", test: child => child.gender === "male" }
      ]
    },
    arrangement: {
      label: "Arrangement",
      categories: [
        { key: "informal", label: "Informal family placement", tone: "red", test: child => child.arrangement === "informal" },
        { key: "organized", label: "German Jewish Children’s Aid", tone: "forest", test: child => child.arrangement === "organized" }
      ]
    }
  };

  let activeGrouping = "age";
  let selectedId = "margot-bachrach";

  const displayName = child => child.name;
  const genderLabel = child => child.gender === "female" ? "Girl" : "Boy";
  const arrangementLabel = child => child.arrangement === "organized" ? "German Jewish Children’s Aid" : "Informal family placement";
  const detailText = child => `Age ${child.age} · ${genderLabel(child)} · ${arrangementLabel(child)}`;

  function updateSummary(child) {
    summaryName.textContent = displayName(child);
    summaryDetail.textContent = detailText(child);
  }

  function positionTooltip(tile) {
    const sectionRect = section.getBoundingClientRect();
    const tileRect = tile.getBoundingClientRect();
    const preferredLeft = tileRect.left - sectionRect.left + (tileRect.width / 2);
    const maxLeft = Math.max(120, section.clientWidth - 120);
    tooltip.style.left = `${Math.max(120, Math.min(maxLeft, preferredLeft))}px`;
    tooltip.style.top = `${tileRect.top - sectionRect.top - 12}px`;
  }

  function showTooltip(child, tile) {
    tooltip.innerHTML = `<strong>${displayName(child)}</strong><span>${detailText(child)}</span>`;
    tooltip.hidden = false;
    positionTooltip(tile);
  }

  function hideTooltip() {
    tooltip.hidden = true;
  }

  function selectChild(child) {
    selectedId = child.id;
    groups.querySelectorAll(".cohort-child").forEach(tile => {
      const selected = tile.dataset.childId === selectedId;
      tile.classList.toggle("selected", selected);
      tile.setAttribute("aria-pressed", String(selected));
    });
    updateSummary(child);
  }

  function renderLegend(categories) {
    legend.innerHTML = "";
    categories.forEach(category => {
      const item = document.createElement("span");
      item.innerHTML = `<i class="cohort-swatch" data-tone="${category.tone}" aria-hidden="true"></i>${category.label}`;
      legend.append(item);
    });
    const margot = document.createElement("span");
    margot.innerHTML = `<i class="cohort-swatch margot" aria-hidden="true">M</i>Margot`;
    legend.append(margot);
  }

  function captureTilePositions() {
    return new Map(Array.from(groups.querySelectorAll(".cohort-child"), tile => [
      tile.dataset.childId,
      tile.getBoundingClientRect()
    ]));
  }

  function animateTileMovement(previousPositions) {
    if (!previousPositions?.size || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animations = [];
    groups.classList.add("is-rearranging");
    groups.querySelectorAll(".cohort-child").forEach((tile, index) => {
      const previous = previousPositions.get(tile.dataset.childId);
      if (!previous) return;
      const current = tile.getBoundingClientRect();
      const deltaX = previous.left - current.left;
      const deltaY = previous.top - current.top;
      if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) return;
      const animation = tile.animate([
        { transform: `translate(${deltaX}px, ${deltaY}px)`, opacity: .72 },
        { transform: "translate(0, 0)", opacity: 1 }
      ], {
        duration: 680,
        delay: Math.min(index * 4, 120),
        easing: "cubic-bezier(.22, .8, .24, 1)",
        fill: "backwards"
      });
      animations.push(animation.finished.catch(() => undefined));
    });
    Promise.all(animations).then(() => groups.classList.remove("is-rearranging"));
  }

  function renderGroups(animate = false) {
    const config = groupings[activeGrouping];
    const previousPositions = animate ? captureTilePositions() : null;
    groups.innerHTML = "";
    config.categories.forEach(category => {
      const members = children
        .filter(category.test)
        .sort((a, b) => a.age - b.age || Number(Boolean(b.isMargot)) - Number(Boolean(a.isMargot)) || displayName(a).localeCompare(displayName(b)));
      const group = document.createElement("section");
      group.className = "cohort-group";
      const groupHeader = document.createElement("div");
      groupHeader.className = "cohort-group-header";
      const count = Math.round((members.length / children.length) * 100);
      groupHeader.innerHTML = `<h4>${category.label}</h4><span>${members.length} · ${count}%</span>`;
      const grid = document.createElement("div");
      grid.className = "cohort-grid";
      grid.setAttribute("role", "group");
      grid.setAttribute("aria-label", category.label);
      members.forEach(child => {
        const tile = document.createElement("button");
        tile.type = "button";
        tile.className = `cohort-child${child.isMargot ? " margot" : ""}${child.id === selectedId ? " selected" : ""}`;
        tile.dataset.childId = child.id;
        tile.dataset.tone = category.tone;
        tile.setAttribute("aria-pressed", String(child.id === selectedId));
        tile.setAttribute("aria-label", `${displayName(child)}. ${detailText(child)}${child.isMargot ? ". This is Margot" : ""}`);
        tile.textContent = child.isMargot ? "M" : "";
        tile.addEventListener("pointerenter", () => {
          showTooltip(child, tile);
        });
        tile.addEventListener("pointerleave", hideTooltip);
        tile.addEventListener("focus", () => {
          updateSummary(child);
          showTooltip(child, tile);
        });
        tile.addEventListener("blur", hideTooltip);
        tile.addEventListener("click", () => selectChild(child));
        grid.append(tile);
      });
      group.append(groupHeader, grid);
      groups.append(group);
    });
    renderLegend(config.categories);
    animateTileMovement(previousPositions);
  }

  Object.entries(groupings).forEach(([key, config]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `cohort-control${key === activeGrouping ? " active" : ""}`;
    button.textContent = config.label;
    button.setAttribute("aria-pressed", String(key === activeGrouping));
    button.addEventListener("click", () => {
      activeGrouping = key;
      controls.querySelectorAll(".cohort-control").forEach(candidate => {
        const selected = candidate === button;
        candidate.classList.toggle("active", selected);
        candidate.setAttribute("aria-pressed", String(selected));
      });
      hideTooltip();
      renderGroups(true);
    });
    controls.append(button);
  });

  const initial = children.find(child => child.id === selectedId) || children[0];
  if (initial) updateSummary(initial);
  renderGroups();
  section.append(header, controls, summary, groups, legend, note, tooltip);
  return section;
}

function renderChapter(section, index, sections) {
  const meta = chapterMeta[section.title] || fallbackMeta(section, index);
  const chapter = document.createElement("section");
  chapter.className = "chapter";
  chapter.id = meta.id;
  chapter.dataset.chapter = String(index + 1);
  chapter.dataset.part = meta.part;

  const header = document.createElement("header");
  header.className = "chapter-header";
  header.innerHTML = `
    <div class="chapter-marker"><strong>${meta.date}</strong><span>${meta.place}</span></div>
    <div class="chapter-heading"><p class="eyebrow">Chapter ${index + 1} of ${sections.length}</p><h2>${section.title}</h2></div>
  `;

  const body = document.createElement("div");
  body.className = "chapter-body";
  section.content.forEach(item => {
    if (item.type === "text" && item.text?.trim()) {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = item.text;
      body.append(paragraph);
    } else if (item.type === "image_placeholder") {
      const media = renderMediaItem(item, section.title);
      if (media) body.append(media);

    } else if (item.type === "history_timeline") {
      body.append(renderHistoryTimeline());
    } else if (item.type === "restitution_table") {
      body.append(renderRestitutionTable(item));
    } else if (item.type === "children_cohort_grid") {
      body.append(renderChildrenCohort());
    }
  });

  const nextSection = sections[index + 1];
  if (nextSection) {
    const nextMeta = chapterMeta[nextSection.title] || fallbackMeta(nextSection, index + 1);
    const next = document.createElement("div");
    next.className = "chapter-next";
    next.innerHTML = `<span>Continue the story</span><a href="#${nextMeta.id}">${nextSection.title} →</a>`;
    body.append(next);
  }

  chapter.append(header, body);
  return chapter;
}

function renderPartDivider(meta) {
  const divider = document.createElement("section");
  divider.className = "part-divider";
  divider.setAttribute("aria-label", `Part ${meta.part}: ${meta.partTitle}`);
  divider.innerHTML = `<span class="part-number">Part ${meta.part}</span><h2>${meta.partTitle}</h2>`;
  return divider;
}

function renderStory(data) {
  story.innerHTML = "";
  let previousPart = null;
  data.sections.forEach((section, index) => {
    const meta = chapterMeta[section.title] || fallbackMeta(section, index);
    if (meta.part !== previousPart) {
      story.append(renderPartDivider(meta));
      previousPart = meta.part;
    }
    story.append(renderChapter(section, index, data.sections));
  });
  renderNavigation(data.sections);
  renderArchive();
  initScrollTracking();
}

function renderNavigation(sections) {
  timeline.innerHTML = "";
  contentsList.innerHTML = "";
  let currentPart = null;
  sections.forEach((section, index) => {
    const meta = chapterMeta[section.title] || fallbackMeta(section, index);
    const link = document.createElement("a");
    link.href = `#${meta.id}`;
    link.className = "timeline-link";
    link.dataset.target = meta.id;
    link.innerHTML = `<span>${section.year || meta.date}</span><small>${section.title}</small>`;
    timeline.append(link);

    if (meta.part !== currentPart) {
      const part = document.createElement("p");
      part.className = "contents-part";
      part.textContent = `Part ${meta.part} · ${meta.partTitle}`;
      contentsList.append(part);
      currentPart = meta.part;
    }
    const contentsLink = document.createElement("a");
    contentsLink.href = `#${meta.id}`;
    contentsLink.className = "contents-link";
    contentsLink.innerHTML = `<span>${meta.date}</span><strong>${section.title}</strong>`;
    contentsLink.addEventListener("click", () => contentsDialog.close());
    contentsList.append(contentsLink);
  });
}

function renderArchive() {
  if (!archiveGrid) return;
  archiveGrid.innerHTML = "";
  const seen = new Set();
  state.media.forEach(model => {
    if (seen.has(model.original)) return;
    seen.add(model.original);
    const card = document.createElement("button");
    card.type = "button";
    card.className = "archive-card";
    card.dataset.kind = model.kind;
    card.setAttribute("aria-label", `Open ${model.caption}`);
    const img = document.createElement("img");
    img.src = model.enhanced || model.original;
    img.alt = "";
    img.loading = "lazy";
    const copy = document.createElement("span");
    copy.className = "archive-card-copy";
    const kindLabel = model.variant?.enhancedLabel || (model.kind === "document" ? "Document" : model.kind === "place" ? "Place" : "Photograph");
    copy.innerHTML = `<span>${kindLabel}</span><p>${model.caption}</p>`;
    card.append(img, copy);
    card.addEventListener("click", () => openMedia(model));
    archiveGrid.append(card);
  });
}

function setDialogVariant(model, value) {
  model.selected = value;
  mediaDialogImage.src = value === "enhanced" && model.enhanced ? model.enhanced : model.original;
  mediaDialogKicker.textContent = value === "enhanced" && model.variant ? model.variant.enhancedLabel : "Archival original";
  setSwitchState(mediaDialogSwitch, value);
}

function openMedia(model) {
  state.activeMedia = model;
  mediaDialogTitle.textContent = model.title;
  mediaDialogCaption.textContent = model.caption;
  mediaDialogImage.alt = model.caption;
  mediaDialogSwitch.innerHTML = "";
  const switcher = makeVariantSwitch(model, model.selected, value => setDialogVariant(model, value));
  [...switcher.children].forEach(child => mediaDialogSwitch.append(child));
  setDialogVariant(model, model.selected);
  mediaDialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
}

function initDialogs() {
  const openContents = () => {
    contentsDialog.showModal();
    document.body.classList.add("dialog-open");
  };
  document.querySelector("#contents-button").addEventListener("click", openContents);
  document.querySelector("#hero-contents-button").addEventListener("click", openContents);
  document.querySelectorAll("[data-close-dialog]").forEach(button => {
    button.addEventListener("click", () => closeDialog(button.closest("dialog")));
  });
  [contentsDialog, mediaDialog].forEach(dialog => {
    dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
    dialog.addEventListener("click", event => {
      if (event.target === dialog) closeDialog(dialog);
    });
  });
}

function initFilters() {
  if (!archiveGrid) return;
  document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach(candidate => {
        const active = candidate === button;
        candidate.classList.toggle("active", active);
        candidate.setAttribute("aria-pressed", String(active));
      });
      const filter = button.dataset.filter;
      archiveGrid.querySelectorAll(".archive-card").forEach(card => {
        card.hidden = filter !== "all" && card.dataset.kind !== filter;
      });
    });
  });
}

function initScrollTracking() {
  const chapters = [...document.querySelectorAll(".chapter")];
  const links = [...document.querySelectorAll(".timeline-link")];
  const progress = document.querySelector("#progress-bar");
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.width = `${Math.max(0, Math.min(100, ratio * 100))}%`;
  };
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });

  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const id = visible.target.id;
    if (state.currentSection === id) return;
    state.currentSection = id;
    links.forEach(link => link.classList.toggle("active", link.dataset.target === id));
    const active = links.find(link => link.dataset.target === id);
    active?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, { rootMargin: "-28% 0px -55% 0px", threshold: [0, .1, .25] });
  chapters.forEach(chapter => observer.observe(chapter));
}

async function init() {
  initDialogs();
  initFilters();
  try {
    let data = window.contentData;
    if (!data) {
      const response = await fetch("content.json?v=20261019m");
      if (!response.ok) throw new Error(`Unable to load content (${response.status})`);
      data = await response.json();
    }
    renderStory(data);
  } catch (error) {
    story.innerHTML = `<div class="chapter"><p>We couldn't open the family archive.</p></div>`;
    console.error(error);
  }
}

init();
