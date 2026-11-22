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


document.querySelector("#cohort-mount").append(renderChildrenCohort());
const compensationAwards = {
  "type": "restitution_table",
  "title": "Confirmed compensation awards",
  "rows": [
    {
      "recipient": "Margot Rosenblum, née Bachrach",
      "year": "Jan. 25, 1958; paid Mar. 1, 1958",
      "basis": "Capital compensation for damage to her education and training caused by Nazi persecution",
      "dm": "5,000 DM",
      "usd": "about $16,300"
    },
    {
      "recipient": "Margot Rosenblum, née Bachrach",
      "year": "Nov. 10, 1965",
      "basis": "Additional education-and-training compensation under the revised §116 BEG",
      "dm": "5,000 DM",
      "usd": "about $13,900"
    },
    {
      "recipient": "Margot Rosenblum — total",
      "year": "1958 and 1965",
      "basis": "Two capital awards for damage to education and training",
      "dm": "10,000 DM",
      "usd": "about $30,200",
      "emphasis": true
    },
    {
      "recipient": "Samuel Bachrach",
      "year": "1955 decision; retroactive to Nov. 1, 1953",
      "basis": "Damage to professional advancement; monthly pension based on a comparable senior civil-service grade",
      "dm": "420 DM per month",
      "usd": "about $1,500 per month"
    },
    {
      "recipient": "Samuel Bachrach",
      "year": "1965",
      "basis": "Later statutory increases to the same compensation pension",
      "dm": "627 DM per month",
      "usd": "about $1,740 per month"
    },
    {
      "recipient": "Bertha Loewinger, Ludwig Baum, Ernst Baum & Betty Jane Skipper",
      "year": "1959",
      "basis": "Damage to professional and economic advancement in his independent business, 1933–38",
      "dm": "4,380 DM",
      "usd": "about $14,300"
    },
    {
      "recipient": "Bertha Loewinger, Ludwig Baum, Ernst Baum & Betty Jane Skipper",
      "year": "1959",
      "basis": "Emigration expenses",
      "dm": "1,223.84 DM",
      "usd": "about $4,000"
    },
    {
      "recipient": "Bertha Loewinger, Ludwig Baum, Ernst Baum & Betty Jane Skipper",
      "year": "1960",
      "basis": "Household goods and personal property sold under persecution",
      "dm": "2,000 DM",
      "usd": "about $6,400"
    },
    {
      "recipient": "The four Baum heirs — total",
      "year": "1959–60",
      "basis": "Combined one-time awards",
      "dm": "7,603.84 DM",
      "usd": "about $24,600",
      "emphasis": true
    }
  ]
};
document.querySelector("#awards-mount").append(renderRestitutionTable(compensationAwards));
