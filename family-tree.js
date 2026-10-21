const ancestors = {
  1: {
    name: "Margot Bachrach", lifespan: "1925–2016",
    birth: { date: "20 Dec 1925", place: "Frielendorf, Hesse, Germany" },
    death: { date: "20 Mar 2016", place: "East Meadow, Nassau County, New York, USA" },
    additionalMarriages: [{ spouse: "Murry D. Rosenblum", date: "7 Oct 1948", place: "Brooklyn, Kings County, New York, USA" }]
  },
  2: {
    name: "Samuel Bachrach", lifespan: "1890–1977",
    birth: { date: "17 Mar 1890", place: "Frielendorf, Hesse, Germany (house no. 40)" },
    death: { date: "25 May 1977", place: "Copenhagen, Denmark" },
    additionalMarriages: [{ spouse: "Ilse Pietsch", date: "1954", place: null }]
  },
  3: {
    name: "Bertha Baum", lifespan: "1901–1953",
    birth: { date: "24 Oct 1901", place: "Wittelsberg, Hesse, Germany" },
    death: { date: "27 Dec 1953", place: null }
  },
  4: {
    name: "Jakob Noa Bachrach", lifespan: "1853–1934",
    birth: { date: "3 Mar 1853", place: "Frielendorf, Hesse, Germany" },
    death: { date: "7 Jul 1934", place: "Treysa, Hesse, Germany" }
  },
  5: {
    name: "Auguste “Gustel” Steinfeld", lifespan: "1857–1938",
    birth: { date: "26 Oct 1857", place: "Josbach, Hesse, Germany" },
    death: { date: "5 Oct 1938", place: "Frankfurt am Main, Germany" }
  },
  6: {
    name: "Anschel Baum", lifespan: "1868–1938",
    birth: { date: "28 or 29 Sep 1868", place: "Wittelsberg, Hesse, Germany" },
    death: { date: "20 Nov 1938", place: "Brooklyn, Kings County, New York, USA" }
  },
  7: {
    name: "Lina Grünbaum", lifespan: "1875–1949",
    birth: { date: "28 Jul 1875", place: "Staden, Hesse, Germany" },
    death: { date: "16 Jun 1949", place: "Brooklyn, Kings County, New York, USA" }
  },
  8: {
    name: "Noah Bachrach", lifespan: "1821–1884",
    birth: { date: "14 Apr 1821", place: "Frielendorf, Hesse, Germany" },
    death: { date: "22 Jun 1884", place: "Frielendorf, Hesse, Germany" }
  },
  9: {
    name: "Hennel (Hindel) Spier", lifespan: "1819–1916",
    birth: { date: "18 Apr 1819", place: "Merzhausen, Hesse, Germany" },
    death: { date: "14 Apr 1916", place: "Frielendorf, Hesse, Germany" }
  },
  10: {
    name: "Meier Steinfeld", lifespan: "1819–1898",
    birth: { date: "1819", place: "Josbach, Hesse, Germany" },
    death: { date: "9 May 1898", place: "Josbach, Hesse, Germany" }
  },
  11: {
    name: "Marle “Miriam/Merle” Haas", lifespan: "1821–1878",
    birth: { date: "27 Dec 1821", place: "Mardorf, Hesse, Germany" },
    death: { date: "15 Apr 1878", place: "Josbach, Hesse, Germany" }
  },
  12: {
    name: "Elias Baum", lifespan: "1843–1927",
    birth: { date: "14 Feb 1843", place: "Wittelsberg, Hesse, Germany" },
    death: { date: "16 Nov 1927", place: "Wittelsberg, Hesse, Germany" }
  },
  13: {
    name: "Bertha Wolf", lifespan: "1842–1880",
    birth: { date: "1 Jan 1842", place: "Merlau, Hesse, Germany (house no. 47)" },
    death: { date: "10 Jan 1880", place: "Wittelsberg, Hesse, Germany (house no. 99)" }
  },
  14: {
    name: "Anselm Grünbaum", lifespan: "1830–1920",
    birth: { date: "18 Oct 1830", place: "Rohrbach, Kreis Büdingen, Hesse (house no. 33)" },
    death: { date: "10 Feb 1920", place: "Staden, Hesse, Germany" }
  },
  15: {
    name: "Abrahamina “Minna” Scheuer", lifespan: "1846–1909",
    birth: { date: "23 Aug 1846", place: "Heldenbergen, Hesse, Germany" },
    death: { date: "13 Apr 1909", place: "Frankfurt am Main, Germany" }
  },
  16: {
    name: "Jacob Bachrach", lifespan: "1778–1846",
    birth: { date: "1778", place: "Hattenbach, Hesse, Germany" },
    death: { date: "24 Apr 1846", place: "Frielendorf, Hesse, Germany" }
  },
  17: {
    name: "Betti Stern", lifespan: "c. 1786–1853",
    birth: { date: "c. 1786", place: "Frielendorf, Hesse, Germany" },
    death: { date: "13 Jan 1853", place: "Frielendorf, Hesse, Germany" }
  },
  18: {
    name: "Wolf Joseph Spier", lifespan: "1773–1865",
    birth: { date: "19 Oct 1773", place: "Merzhausen, Hesse, Germany" },
    death: { date: "3 Nov 1865", place: "Merzhausen, Hesse, Germany" }
  },
  19: {
    name: "Guetel (Giddel) Jacob", lifespan: "1792–1836",
    birth: { date: "1792", place: "Tann, Hesse, Germany" },
    death: { date: "16 Oct 1836", place: "Merzhausen (now Willingshausen), Hesse, Germany" }
  },
  20: {
    name: "Salomon Steinfeld", lifespan: "1793–1848",
    birth: { date: "1793", place: "Schiffelbach, Hesse, Germany" },
    death: { date: "26 Apr 1848", place: "Josbach, Hesse, Germany" }
  },
  21: {
    name: "Roschen Stern", lifespan: "1788–1868",
    birth: { date: "1788", place: "Gilserberg, Hesse, Germany" },
    death: { date: "18 Apr 1868", place: "Josbach, Hesse, Germany" }
  },
  22: {
    name: "Samuel Mendel Haas", lifespan: "1770–1862",
    birth: { date: "6 Feb 1770", place: "Mardorf, Hesse, Germany" },
    death: { date: "30 Apr 1862", place: "Mardorf, Hesse, Germany" }
  },
  23: {
    name: "Sarah Katten", lifespan: "1772–1839",
    birth: { date: "1772", place: "Halsdorf, Hesse, Germany" },
    death: { date: "24 Sep 1839", place: "Mardorf, Hesse, Germany" }
  },
  24: {
    name: "Isaac Baum", lifespan: "1798–1896",
    birth: { date: "1798", place: "Wittelsberg, Hesse, Germany" },
    death: { date: "6 Mar 1896", place: "Wittelsberg, Hesse, Germany" }
  },
  25: {
    name: "Feile (Veilchen) Jacobsohn", lifespan: "c. 1799–1859",
    birth: { date: "c. 1799", place: "Bad Zwesten, Hesse, Germany" },
    death: { date: "8 Oct 1859", place: "Wittelsberg, Hesse, Germany" }
  },
  26: {
    name: "Anschel Löb Wolf", lifespan: "c. 1801–1868",
    birth: { date: "c. 1801", place: "Merlau, Hesse, Germany" },
    death: { date: "24 Sep 1868", place: "Merlau, Hesse, Germany (house no. 54)" }
  },
  27: {
    name: "Gitel Rothschild", lifespan: "c. 1812–unknown",
    birth: { date: "c. 1812", place: "Ober-Gleen, Hesse, Germany (probable)" },
    death: { date: null, place: null }
  },
  28: {
    name: "Löb Grünbaum", lifespan: "dates unknown–before 1886",
    birth: { date: null, place: null },
    death: { date: "Before 8 Jan 1886", place: "Probably Rohrbach, Kreis Büdingen, Hesse" }
  },
  29: {
    name: "Jettchen Süssel", lifespan: "dates unknown–before 1886",
    birth: { date: null, place: null },
    death: { date: "Before 8 Jan 1886", place: "Probably Rohrbach, Kreis Büdingen, Hesse" }
  },
  30: {
    name: "Abraham Scheuer", lifespan: "dates unknown–1876/1901",
    birth: { date: null, place: "Heldenbergen, Hesse, Germany" },
    death: { date: "After 30 Nov 1876 and before 20 Dec 1901", place: "Last resident in Heldenbergen, Hesse, Germany" }
  },
  31: {
    name: "Regine Hirsch", lifespan: "dates unknown–1876/1901",
    birth: { date: null, place: null },
    death: { date: "After 30 Nov 1876 and before 20 Dec 1901", place: "Last resident in Bockenheim, Frankfurt, Germany" }
  }
};

const families = [
  { child: 1, parents: [2, 3], marriage: { date: "22 Aug 1921", place: "Wittelsberg, Hesse, Germany" } },
  { child: 2, parents: [4, 5], marriage: { date: "7 Oct 1884", place: "Josbach, Hesse, Germany" } },
  { child: 3, parents: [6, 7], marriage: { date: "8 Nov 1899", place: "Staden, Hesse, Germany" } },
  { child: 4, parents: [8, 9], marriage: { date: "15 May 1847", place: "Merzhausen (now Willingshausen), Hesse, Germany" } },
  { child: 5, parents: [10, 11], marriage: { date: "28 Aug 1847", place: "Halsdorf, Hesse, Germany" } },
  { child: 6, parents: [12, 13], marriage: null },
  { child: 7, parents: [14, 15], marriage: null },
  { child: 8, parents: [16, 17], marriage: null },
  { child: 9, parents: [18, 19], marriage: null },
  { child: 10, parents: [20, 21], marriage: null },
  { child: 11, parents: [22, 23], marriage: { date: "1798", place: "Mardorf, Hesse, Germany" } },
  { child: 12, parents: [24, 25], marriage: null },
  { child: 13, parents: [26, 27], marriage: { date: "8 Mar 1841", place: "Merlau, Hesse, Germany" } },
  { child: 14, parents: [28, 29], marriage: null },
  { child: 15, parents: [30, 31], marriage: null }
];

const stage = document.querySelector("#pedigree-stage");
const links = document.querySelector("#pedigree-links");
const details = document.querySelector("#person-details");
const detailsContent = document.querySelector("#person-details-content");
const closeDetails = document.querySelector("#person-details-close");
const nodeButtons = new Map();
let activePersonId = null;

function generationFor(id) {
  return Math.floor(Math.log2(id));
}

function relationshipFor(id, possessive = true) {
  if (id === 1) return "Margot";
  const generation = generationFor(id);
  const female = id % 2 === 1;
  const terms = {
    1: female ? "mother" : "father",
    2: female ? "grandmother" : "grandfather",
    3: female ? "great-grandmother" : "great-grandfather",
    4: female ? "great-great-grandmother" : "great-great-grandfather"
  };
  return possessive ? `Margot’s ${terms[generation]}` : terms[generation];
}

function initialsFor(name) {
  const words = name.replace(/[“”'"().]/g, "").split(/\s+/).filter(Boolean);
  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}

function visualNameFor(name) {
  return name.replace(/\s*\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
}

function marriagesFor(id) {
  const directMarriages = families
    .filter(family => family.parents.includes(id))
    .map(family => {
      const spouseId = family.parents.find(parentId => parentId !== id);
      return {
        spouseId,
        spouse: ancestors[spouseId].name,
        date: family.marriage?.date || null,
        place: family.marriage?.place || null
      };
    });
  return directMarriages.concat(ancestors[id].additionalMarriages || []);
}

function createTreeNode(id, person) {
  const generation = generationFor(id);
  const generationStart = 2 ** generation;
  const position = id - generationStart;
  const span = 16 / generationStart;
  const column = (position * span) + 1;
  const row = 5 - generation;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pedigree-node";
  button.dataset.personId = String(id);
  button.dataset.generation = String(generation);
  button.style.gridColumn = `${column} / span ${span}`;
  button.style.gridRow = String(row);
  button.setAttribute("role", "treeitem");
  button.setAttribute("aria-level", String(row));
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", `${relationshipFor(id)}: ${person.name}, ${person.lifespan}. Select for vital-event details.`);

  const relation = document.createElement("small");
  relation.className = "node-relationship";
  relation.textContent = relationshipFor(id, false);
  const name = document.createElement("strong");
  name.className = "node-full-name";
  name.textContent = visualNameFor(person.name);
  const initials = document.createElement("strong");
  initials.className = "node-initials";
  initials.textContent = initialsFor(person.name);
  const dates = document.createElement("span");
  dates.className = "node-dates";
  dates.textContent = person.lifespan;
  button.append(relation, name, initials, dates);
  button.addEventListener("click", () => selectPerson(id));
  nodeButtons.set(id, button);
  stage.append(button);
}

function appendVital(list, label, event) {
  const item = document.createElement("div");
  const term = document.createElement("dt");
  term.textContent = label;
  const value = document.createElement("dd");
  const date = document.createElement("strong");
  date.textContent = event?.date || "Date not established";
  const place = document.createElement("span");
  place.textContent = event?.place || "Place not established";
  value.append(date, place);
  item.append(term, value);
  list.append(item);
}

function connectionButton(id, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "person-connection";
  const relation = document.createElement("small");
  relation.textContent = label;
  const name = document.createElement("strong");
  name.textContent = ancestors[id].name;
  button.append(relation, name);
  button.addEventListener("click", () => selectPerson(id));
  return button;
}

function lineToMargot(id) {
  const ids = [];
  let current = id;
  while (current >= 1) {
    ids.push(current);
    if (current === 1) break;
    current = Math.floor(current / 2);
  }
  return ids;
}

function updateHighlight(id) {
  const activeIds = id ? lineToMargot(id) : [];
  const activeSet = new Set(activeIds);
  nodeButtons.forEach((button, personId) => {
    const selected = personId === id;
    button.classList.toggle("selected", selected);
    button.classList.toggle("in-line", activeSet.has(personId));
    button.setAttribute("aria-expanded", String(selected && !details.hidden));
  });

  const activeEdges = new Set();
  for (let index = 0; index < activeIds.length - 1; index += 1) {
    activeEdges.add(`${activeIds[index]}-${activeIds[index + 1]}`);
  }
  links.querySelectorAll("path").forEach(path => {
    path.classList.toggle("active", activeEdges.has(path.dataset.edge));
  });
}

function renderDetails(id) {
  const person = ancestors[id];
  detailsContent.innerHTML = "";
  const grid = document.createElement("div");
  grid.className = "person-details-grid";

  const heading = document.createElement("header");
  heading.className = "person-details-heading";
  const relationship = document.createElement("p");
  relationship.className = "eyebrow";
  relationship.textContent = relationshipFor(id);
  const name = document.createElement("h2");
  name.textContent = person.name;
  const lifespan = document.createElement("p");
  lifespan.className = "person-details-lifespan";
  lifespan.textContent = person.lifespan;
  heading.append(relationship, name, lifespan);

  const vitals = document.createElement("dl");
  vitals.className = "person-vitals";
  appendVital(vitals, "Birth", person.birth);
  marriagesFor(id).forEach(marriage => appendVital(vitals, `Marriage to ${marriage.spouse}`, marriage));
  appendVital(vitals, "Death", person.death);

  const connections = document.createElement("section");
  connections.className = "person-connections";
  const connectionsTitle = document.createElement("h3");
  connectionsTitle.textContent = "Direct-line connections";
  const connectionList = document.createElement("div");
  if (id <= 15) {
    connectionList.append(connectionButton(id * 2, "Father"), connectionButton((id * 2) + 1, "Mother"));
  }
  if (id > 1) connectionList.append(connectionButton(Math.floor(id / 2), "Child toward Margot"));
  marriagesFor(id).filter(marriage => marriage.spouseId).forEach(marriage => {
    connectionList.append(connectionButton(marriage.spouseId, "Spouse"));
  });
  connections.append(connectionsTitle, connectionList);

  grid.append(heading, vitals, connections);
  detailsContent.append(grid);
}

function selectPerson(id) {
  activePersonId = id;
  renderDetails(id);
  details.hidden = false;
  updateHighlight(id);
  requestAnimationFrame(() => {
    const bounds = details.getBoundingClientRect();
    if (bounds.bottom > window.innerHeight || bounds.top < 0) {
      details.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}

function closePersonDetails() {
  details.hidden = true;
  activePersonId = null;
  updateHighlight(null);
}

function drawConnections() {
  const width = stage.clientWidth;
  const height = stage.clientHeight;
  if (!width || !height) return;
  links.setAttribute("viewBox", `0 0 ${width} ${height}`);
  links.setAttribute("width", String(width));
  links.setAttribute("height", String(height));
  links.innerHTML = "";

  families.forEach(family => {
    const child = nodeButtons.get(family.child);
    family.parents.forEach(parentId => {
      const parent = nodeButtons.get(parentId);
      const startX = parent.offsetLeft + (parent.offsetWidth / 2);
      const startY = parent.offsetTop + parent.offsetHeight;
      const endX = child.offsetLeft + (child.offsetWidth / 2);
      const endY = child.offsetTop;
      const middleY = startY + ((endY - startY) / 2);
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", `M ${startX} ${startY} C ${startX} ${middleY}, ${endX} ${middleY}, ${endX} ${endY}`);
      path.dataset.edge = `${parentId}-${family.child}`;
      links.append(path);
    });
  });
  updateHighlight(activePersonId);
}

Object.entries(ancestors).forEach(([id, person]) => createTreeNode(Number(id), person));
closeDetails.addEventListener("click", closePersonDetails);
requestAnimationFrame(drawConnections);

if ("ResizeObserver" in window) {
  const observer = new ResizeObserver(() => requestAnimationFrame(drawConnections));
  observer.observe(stage);
} else {
  window.addEventListener("resize", drawConnections, { passive: true });
}
