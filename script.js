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

const ancestralPlaces = [
  {
    id: "frielendorf", name: "Frielendorf", x: 64.5, y: 29.5,
    note: "The Bachrach household location across two generations.",
    couples: ["gg-bachrach", "g-bachrach"],
    snapshot: {
      year: "1861", total: "676", jewish: "128 (18.9%)",
      fact: "Frielendorf sustained a synagogue, school, and cemetery. Butchers such as Jakob Bachrach linked its farms and livestock dealers to consumers, placing Jewish tradespeople inside both the opportunities and strains of the changing agricultural economy.",
      sources: [{ label: "Jewish history of Frielendorf", url: "https://www.alemannia-judaica.de/frielendorf_synagoge.htm" }]
    }
  },
  {
    id: "merzhausen", name: "Merzhausen", x: 60.0, y: 39.5,
    note: "Placed here using Hennel Spier’s recorded birthplace.",
    couples: ["gg-spier"],
    snapshot: {
      year: "1861", total: "710", jewish: "75 (10.6%)",
      fact: "Many Jewish families worked in textile trade and initially lived along the lane still known as Judengasse. The village maintained a Jewish elementary school for much of the period from the 1830s to 1932.",
      sources: [{ label: "Jewish history of Merzhausen", url: "https://www.alemannia-judaica.de/merzhausen_synagoge.htm" }]
    }
  },
  {
    id: "josbach", name: "Josbach", x: 50.0, y: 38.5,
    note: "The Steinfeld household location across two generations.",
    couples: ["gg-steinfeld", "g-steinfeld"],
    snapshot: {
      year: "1861", total: "about 360", jewish: "38 (about 11%)",
      fact: "Josbach’s Jews belonged to the Halsdorf synagogue community. In 1878 the Steinfeld and Kadden families bought a house for a local prayer room; neighbors sometimes came from Wohra to make the ten-man minyan.",
      sources: [
        { label: "1861 religious population", url: "https://de.wikipedia.org/wiki/Josbach" },
        { label: "Jewish life in Josbach", url: "https://www.alemannia-judaica.de/images/Images%20422/Josbach%20Beitrag%20Michael%20Dorhs.pdf" }
      ]
    }
  },
  {
    id: "mardorf", name: "Mardorf", x: 44.0, y: 44.0,
    note: "Placed here using Marle Haas’s recorded birthplace.",
    couples: ["gg-haas"],
    snapshot: {
      year: "1885", total: "1,002", jewish: "47 (4.7%)",
      fact: "An 1828 list included Haas households among twelve Jewish families; all made their living in livestock, fruit, or grain trade. The community maintained a synagogue, religious school, and ritual bath.",
      sources: [{ label: "Jewish history of Mardorf", url: "https://www.alemannia-judaica.de/mardorf_synagoge.htm" }]
    }
  },
  {
    id: "wittelsberg", name: "Wittelsberg", x: 39.0, y: 40.5,
    note: "The Baum household location across two generations.",
    couples: ["gg-baum", "g-baum"],
    snapshot: {
      year: "1885", total: "475", jewish: "27 (5.7%)",
      fact: "Jewish residents worshiped and buried their dead in nearby Rauischholzhausen. Wittelsberg lay in the Kirchhain district, where agrarian distress helped Otto Böckel turn attacks on Jewish cattle and grain dealers into a powerful rural movement.",
      sources: [
        { label: "Population and Jewish history", url: "https://de.wikipedia.org/wiki/Wittelsberg" },
        { label: "Rauischholzhausen synagogue", url: "https://alemannia-judaica.de/rauischholzhausen_synagoge.htm" },
        { label: "Jewish life in Holzhausen and Wittelsberg", url: "https://www.alemannia-judaica.de/images/Images%20423/junge_theres_nobody_left_2018.pdf" }
      ]
    }
  },
  {
    id: "merlau", name: "Merlau", x: 49.5, y: 49.0,
    note: "Placed here using Bertha Wolf’s recorded birthplace.",
    couples: ["gg-wolf"],
    snapshot: {
      year: "1829", total: "415", jewish: "12 (2.9%)",
      fact: "Merlau’s few Jewish families—including Wolf households recorded in 1828—belonged to the congregation in Nieder-Ohmen, where the synagogue, religious school, ritual bath, and cemetery were located.",
      sources: [
        { label: "1829 religious population", url: "https://de.wikipedia.org/wiki/Merlau" },
        { label: "Nieder-Ohmen and Merlau community", url: "https://www.alemannia-judaica.de/nieder_ohmen_synagoge.htm" }
      ]
    }
  },
  {
    id: "rohrbach", name: "Rohrbach (Büdingen)", x: 53.0, y: 58.5,
    note: "Placed here using Anselm Grünbaum’s recorded birthplace.",
    couples: ["gg-grunbaum"],
    snapshot: {
      year: "1880", total: "393", jewish: "86 (21.9%)",
      fact: "Nearly one in five villagers was Jewish at this point. The community maintained a synagogue, schoolroom, ritual bath, and cemetery; the rebuilt 1884 synagogue seated 54 men and 26 women.",
      sources: [{ label: "Jewish history of Rohrbach", url: "https://www.alemannia-judaica.de/rohrbach_fb_synagoge.htm" }]
    }
  },
  {
    id: "heldenbergen", name: "Heldenbergen", x: 45.0, y: 63.0,
    note: "Placed here using Minna Scheuer’s recorded birthplace.",
    couples: ["gg-scheuer"],
    snapshot: {
      year: "about 1925", total: "about 1,700", jewish: "110 (6.5%)",
      fact: "The community supported mutual-aid and women’s charities, a synagogue association, a Jewish youth group, and a soldiers’ association originally formed to provide kosher food to Jewish servicemen.",
      sources: [{ label: "Jewish history of Heldenbergen", url: "https://alemannia-judaica.de/heldenbergen_synagoge.htm" }]
    }
  },
  {
    id: "staden", name: "Staden", x: 44.0, y: 56.0,
    note: "Placed here using Lina Grünbaum’s recorded birthplace.",
    couples: ["g-grunbaum"],
    snapshot: {
      year: "1900", total: "393", jewish: "56 (14.2%)",
      fact: "Jewish families traded livestock, horses, and farm produce and ran several village shops. Their congregation maintained a synagogue, religious school, ritual bath, and cemetery.",
      sources: [{ label: "Jewish history of Staden", url: "https://www.alemannia-judaica.de/staden_synagoge.htm" }]
    }
  }
];

const referenceCities = [
  { name: "Kassel", x: 69.5, y: 15.5, labelSide: "left" },
  { name: "Marburg", x: 40.5, y: 37.5, labelSide: "left" },
  { name: "Frankfurt", x: 36.5, y: 68.5, labelSide: "left" }
];

const familyPeople = {
  "Jacob Bachrach": { dates: "1778–1846", generation: "great-great" },
  "Betti Stern": { dates: "c. 1786–1853", generation: "great-great" },
  "Wolf Joseph Spier": { dates: "1773–1865", generation: "great-great" },
  "Guetel (Giddel) Jacob": { dates: "1792–1836", generation: "great-great" },
  "Salomon Steinfeld": { dates: "1793–1848", generation: "great-great" },
  "Roschen Stern": { dates: "1788–1868", generation: "great-great" },
  "Samuel Mendel Haas": { dates: "1770–1862", generation: "great-great" },
  "Sarah Katten": { dates: "1772–1839", generation: "great-great" },
  "Isaac Baum": { dates: "1798–1896", generation: "great-great" },
  "Feile (Veilchen) Jacobsohn": { dates: "c. 1799–1859", generation: "great-great" },
  "Anschel Löb Wolf": { dates: "c. 1801–1868", generation: "great-great" },
  "Gitel Rothschild": { dates: "c. 1812–unknown", generation: "great-great" },
  "Löb Grünbaum": { dates: "dates unknown–before 1886", generation: "great-great" },
  "Jettchen Süssel": { dates: "dates unknown–before 1886", generation: "great-great" },
  "Abraham Scheuer": { dates: "dates unknown–1876/1901", generation: "great-great" },
  "Regine Hirsch": { dates: "dates unknown–1876/1901", generation: "great-great" },
  "Noah Bachrach": { dates: "1821–1884", generation: "great" },
  "Hennel (Hindel) Spier": { dates: "1819–1916", generation: "great" },
  "Meier Steinfeld": { dates: "1819–1898", generation: "great" },
  "Marle “Miriam/Merle” Haas": { dates: "1821–1878", generation: "great" },
  "Elias Baum": { dates: "1843–1927", generation: "great" },
  "Bertha Wolf": { dates: "1842–1880", generation: "great" },
  "Anselm Grünbaum": { dates: "1830–1920", generation: "great" },
  "Abrahamina “Minna” Scheuer": { dates: "1846–1909", generation: "great" },
  "Jakob Noa Bachrach": { dates: "1853–1934", generation: "grandparent" },
  "Auguste “Gustel” Steinfeld": { dates: "1857–1938", generation: "grandparent" },
  "Anschel Baum": { dates: "1868–1938", generation: "grandparent" },
  "Lina Grünbaum": { dates: "1875–1949", generation: "grandparent" },
  "Samuel Bachrach": { dates: "1890–1977", generation: "parent" },
  "Bertha Baum": { dates: "1901–1953", generation: "parent" },
  "Margot Bachrach": { dates: "1925–2016", generation: "margot" }
};

const lineageCouples = {
  "gg-bachrach": { label: "Great-great-grandparents", people: ["Jacob Bachrach", "Betti Stern"], next: "g-bachrach", nextChild: "Noah Bachrach" },
  "gg-spier": { label: "Great-great-grandparents", people: ["Wolf Joseph Spier", "Guetel (Giddel) Jacob"], next: "g-bachrach", nextChild: "Hennel (Hindel) Spier" },
  "gg-steinfeld": { label: "Great-great-grandparents", people: ["Salomon Steinfeld", "Roschen Stern"], next: "g-steinfeld", nextChild: "Meier Steinfeld" },
  "gg-haas": { label: "Great-great-grandparents", people: ["Samuel Mendel Haas", "Sarah Katten"], next: "g-steinfeld", nextChild: "Marle “Miriam/Merle” Haas" },
  "gg-baum": { label: "Great-great-grandparents", people: ["Isaac Baum", "Feile (Veilchen) Jacobsohn"], next: "g-baum", nextChild: "Elias Baum" },
  "gg-wolf": { label: "Great-great-grandparents", people: ["Anschel Löb Wolf", "Gitel Rothschild"], next: "g-baum", nextChild: "Bertha Wolf" },
  "gg-grunbaum": { label: "Great-great-grandparents", people: ["Löb Grünbaum", "Jettchen Süssel"], next: "g-grunbaum", nextChild: "Anselm Grünbaum" },
  "gg-scheuer": { label: "Great-great-grandparents", people: ["Abraham Scheuer", "Regine Hirsch"], next: "g-grunbaum", nextChild: "Abrahamina “Minna” Scheuer" },
  "g-bachrach": { label: "Great-grandparents", people: ["Noah Bachrach", "Hennel (Hindel) Spier"], next: "grand-bachrach", nextChild: "Jakob Noa Bachrach" },
  "g-steinfeld": { label: "Great-grandparents", people: ["Meier Steinfeld", "Marle “Miriam/Merle” Haas"], next: "grand-bachrach", nextChild: "Auguste “Gustel” Steinfeld" },
  "g-baum": { label: "Great-grandparents", people: ["Elias Baum", "Bertha Wolf"], next: "grand-baum", nextChild: "Anschel Baum" },
  "g-grunbaum": { label: "Great-grandparents", people: ["Anselm Grünbaum", "Abrahamina “Minna” Scheuer"], next: "grand-baum", nextChild: "Lina Grünbaum" },
  "grand-bachrach": { label: "Grandparents", people: ["Jakob Noa Bachrach", "Auguste “Gustel” Steinfeld"], next: "parents", nextChild: "Samuel Bachrach" },
  "grand-baum": { label: "Grandparents", people: ["Anschel Baum", "Lina Grünbaum"], next: "parents", nextChild: "Bertha Baum" },
  "parents": { label: "Parents", people: ["Samuel Bachrach", "Bertha Baum"], next: "margot", nextChild: "Margot Bachrach" },
  "margot": { label: "Margot", people: ["Margot Bachrach"] }
};

function lineageForCouple(coupleId) {
  const stages = [];
  let stageId = coupleId;
  while (stageId && lineageCouples[stageId]) {
    const stage = lineageCouples[stageId];
    stages.push({ ...stage, id: stageId });
    stageId = stage.next;
  }
  return stages;
}

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
    enhancedLabel: "AI colorized",
    kind: "place",
    note: "AI-assisted colorization. Architectural detail and colors are interpretive; use Original to inspect the source photograph."
  },
  "assets/frielendorf-schoolroom-dispute-1896-original.jpg": {
    enhanced: "assets/facsimile-frielendorf-schoolroom-dispute-1896.png",
    enhancedLabel: "English facsimile",
    kind: "document",
    note: "Editorial English facsimile of the German manuscript. The original paper, layout, embossed seal, folds, and show-through are retained; the English handwriting is reconstructed. HStAM, 171, no. 277, image 0007."
  },
  "assets/Germany baby Bertha Baum 1901.jpg": {
    enhanced: "assets/restored-baum-family-1901-2026.png",
    enhancedLabel: "AI restored",
    kind: "photo",
    note: "AI-assisted restoration created to evoke the clarity of a present-day photograph. Reconstructed facial detail, color, texture, and other fine detail are interpretive; use Original to inspect the historical photograph."
  },
  "assets/Murry & Margot photo.jpeg": {
    enhanced: "assets/colorized-margot-murry.png",
    enhancedLabel: "AI colorized",
    kind: "photo",
    note: "AI-assisted colorization. Clothing and interior colors are interpretive."
  },
  "assets/Samuel Bachrach.jpeg": {
    enhanced: "assets/samuel-bachrach-80-restored-2026.png",
    enhancedLabel: "AI restored",
    kind: "photo",
    note: "AI-assisted reconstruction created to evoke a present-day studio portrait. Reconstructed facial detail, color, texture, and clothing detail are interpretive; use Original to inspect the newspaper image."
  },
  "assets/Bertha Paul wedding announcement Aufbau.png": {
    enhanced: "assets/Bertha Paul wedding announcement Aufbau-upscaled.png",
    enhancedLabel: "AI restored",
    kind: "document",
    note: "AI-assisted restoration and upscaling. The wording, composition, border, and newsprint character follow the original clipping; use Original to inspect the source image."
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
    enhancedLabel: "AI restored",
    kind: "photo",
    note: "AI-assisted reconstruction of the portrait embedded in Werner's 1951 Brazilian consular record, created to evoke a present-day studio photograph. Reconstructed facial detail, color, texture, and clothing detail are interpretive; use Original to inspect the complete document."
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

function renderAncestralAtlas() {
  const atlas = document.createElement("section");
  atlas.className = "ancestry-atlas context-wide";
  atlas.setAttribute("aria-labelledby", "ancestry-map-title");

  const header = document.createElement("div");
  header.className = "context-block-heading";
  header.innerHTML = `
    <div><p class="eyebrow">An ancestral atlas</p><h3 id="ancestry-map-title">Villages where ancestors lived, 1770s–1930s</h3></div>
    <p>Choose a generation and place, then select a couple to see their direct family line to Margot.</p>
  `;

  const controls = document.createElement("div");
  controls.className = "map-controls";
  controls.setAttribute("role", "group");
  controls.setAttribute("aria-label", "Filter ancestral locations by generation");
  const filterOptions = [
    { id: "all", label: "Both generations" },
    { id: "great-great", label: "Great-great-grandparents" },
    { id: "great", label: "Great-grandparents" }
  ];

  const layout = document.createElement("div");
  layout.className = "ancestry-map-layout";
  const map = document.createElement("div");
  map.className = "ancestry-map";
  const mapImage = document.createElement("img");
  mapImage.src = "assets/hesse-location-base.svg";
  mapImage.alt = "Map of Hesse with nine approximate ancestral household locations and the reference cities Frankfurt, Marburg, and Kassel";
  map.append(mapImage);

  referenceCities.forEach(city => {
    const marker = document.createElement("div");
    marker.className = `map-reference-city label-${city.labelSide}`;
    marker.style.left = `${city.x}%`;
    marker.style.top = `${city.y}%`;
    marker.setAttribute("aria-label", `${city.name}, reference city`);
    marker.innerHTML = `<i aria-hidden="true"></i><span>${city.name}</span>`;
    map.append(marker);
  });

  const detail = document.createElement("aside");
  detail.className = "map-detail";
  detail.setAttribute("aria-label", "Selected place and direct family line");
  const placeSummary = document.createElement("div");
  placeSummary.className = "map-place-summary";
  placeSummary.setAttribute("aria-live", "polite");
  const detailIndex = document.createElement("span");
  detailIndex.className = "map-detail-index";
  const detailName = document.createElement("h4");
  const detailNote = document.createElement("p");
  const villageSnapshot = document.createElement("section");
  villageSnapshot.className = "village-snapshot";
  const snapshotKicker = document.createElement("p");
  snapshotKicker.className = "village-snapshot-kicker";
  const snapshotStats = document.createElement("div");
  snapshotStats.className = "village-snapshot-stats";
  const totalPopulation = document.createElement("div");
  const jewishPopulation = document.createElement("div");
  snapshotStats.append(totalPopulation, jewishPopulation);
  const snapshotFact = document.createElement("p");
  snapshotFact.className = "village-snapshot-fact";
  const snapshotSources = document.createElement("p");
  snapshotSources.className = "village-snapshot-sources";
  villageSnapshot.append(snapshotKicker, snapshotStats, snapshotFact, snapshotSources);
  const detailCouples = document.createElement("ul");
  detailCouples.className = "map-couples";
  placeSummary.append(detailIndex, detailName, detailNote, villageSnapshot, detailCouples);

  const lineage = document.createElement("section");
  lineage.className = "compact-lineage";
  lineage.setAttribute("aria-labelledby", "ancestry-lineage-title");
  lineage.setAttribute("aria-live", "polite");
  detail.append(placeSummary, lineage);

  let activeFilter = "all";
  let activePlace = ancestralPlaces.find(place => place.id === "frielendorf") || ancestralPlaces[0];
  let activeCoupleId = "gg-bachrach";
  const markerButtons = [];

  function coupleGeneration(coupleId) {
    return coupleId.startsWith("gg-") ? "great-great" : "great";
  }

  function visibleCouples(place) {
    return place.couples
      .map(id => ({ id, ...lineageCouples[id] }))
      .filter(couple => activeFilter === "all" || coupleGeneration(couple.id) === activeFilter);
  }

  function namesForCouple(couple) {
    return couple.people.join(" + ");
  }

  function datesForCouple(couple) {
    return couple.people.map(name => familyPeople[name]?.dates || "dates unknown").join(" · ");
  }

  function relationshipLabel(stage) {
    return stage.label === "Margot" ? "Margot" : `Margot’s ${stage.label.toLowerCase()}`;
  }

  function renderLineage(coupleId) {
    const stages = lineageForCouple(coupleId);
    if (!stages.length) return;
    lineage.innerHTML = "";

    const heading = document.createElement("header");
    heading.className = "compact-lineage-heading";
    heading.innerHTML = `
      <p class="eyebrow">Direct line to Margot</p>
      <h5 id="ancestry-lineage-title">How this couple connects</h5>
    `;

    const path = document.createElement("ol");
    path.className = "compact-lineage-list";
    stages.forEach((stage, index) => {
      const item = document.createElement("li");
      item.className = "compact-lineage-stage";
      const label = document.createElement("p");
      label.textContent = relationshipLabel(stage);
      const names = document.createElement("strong");
      names.textContent = namesForCouple(stage);
      const dates = document.createElement("span");
      dates.textContent = datesForCouple(stage);
      item.append(label, names, dates);
      if (index < stages.length - 1) {
        const descent = document.createElement("span");
        descent.className = "compact-lineage-descent";
        descent.textContent = "their child";
        item.append(descent);
      }
      path.append(item);
    });

    lineage.append(heading, path);
  }

  function syncCoupleButtons() {
    const buttons = atlas.querySelectorAll("button[data-couple-id]");
    buttons.forEach(button => {
      const selected = button.dataset.coupleId === activeCoupleId;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  function selectCouple(coupleId) {
    if (!lineageCouples[coupleId]) return;
    activeCoupleId = coupleId;
    renderLineage(coupleId);
    syncCoupleButtons();
  }

  function renderDetail(place) {
    activePlace = place;
    const placeIndex = ancestralPlaces.indexOf(place) + 1;
    detailIndex.textContent = `Place ${String(placeIndex).padStart(2, "0")}`;
    detailName.textContent = place.name;
    detailNote.textContent = place.note;
    snapshotKicker.textContent = `Village snapshot · ${place.snapshot.year}`;
    totalPopulation.innerHTML = `<strong>${place.snapshot.total}</strong><span>Total residents</span>`;
    jewishPopulation.innerHTML = `<strong>${place.snapshot.jewish}</strong><span>Jewish residents</span>`;
    snapshotFact.textContent = place.snapshot.fact;
    snapshotSources.innerHTML = "";
    place.snapshot.sources.forEach((source, index) => {
      if (index) snapshotSources.append(document.createTextNode(" · "));
      const link = document.createElement("a");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = `${source.label} ↗`;
      snapshotSources.append(link);
    });
    detailCouples.innerHTML = "";
    const couples = visibleCouples(place);
    couples.forEach(couple => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "map-couple-button";
      button.dataset.coupleId = couple.id;
      button.setAttribute("aria-pressed", String(couple.id === activeCoupleId));
      button.innerHTML = `<small>Margot’s ${couple.label.toLowerCase()}</small><strong>${namesForCouple(couple)}</strong><span>${datesForCouple(couple)}</span>`;
      button.addEventListener("click", () => selectCouple(couple.id));
      item.append(button);
      detailCouples.append(item);
    });
    const nextSelection = couples.find(couple => couple.id === activeCoupleId) || couples[0];
    if (nextSelection) selectCouple(nextSelection.id);
    markerButtons.forEach(({ button, place: candidate }) => {
      const selected = candidate.id === place.id;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  ancestralPlaces.forEach((place, index) => {
    const marker = document.createElement("button");
    marker.type = "button";
    marker.className = "map-marker";
    marker.style.left = `${place.x}%`;
    marker.style.top = `${place.y}%`;
    const markerLabel = document.createElement("span");
    markerLabel.textContent = String(index + 1);
    marker.append(markerLabel);
    marker.setAttribute("aria-pressed", "false");
    marker.addEventListener("click", () => renderDetail(place));
    markerButtons.push({ button: marker, place });
    map.append(marker);
  });

  filterOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `map-filter${index === 0 ? " active" : ""}`;
    button.textContent = option.label;
    button.setAttribute("aria-pressed", String(index === 0));
    button.addEventListener("click", () => {
      activeFilter = option.id;
      controls.querySelectorAll(".map-filter").forEach(candidate => {
        const selected = candidate === button;
        candidate.classList.toggle("active", selected);
        candidate.setAttribute("aria-pressed", String(selected));
      });
      markerButtons.forEach(entry => {
        const couples = visibleCouples(entry.place);
        const count = couples.length;
        entry.button.hidden = count === 0;
        entry.button.style.setProperty("--couple-count", String(count));
        entry.button.setAttribute("aria-label", `${entry.place.name}: ${count} ${count === 1 ? "couple" : "couples"} — ${couples.map(namesForCouple).join("; ")}`);
      });
      if (!visibleCouples(activePlace).length) {
        activePlace = ancestralPlaces.find(place => visibleCouples(place).length) || ancestralPlaces[0];
      }
      renderDetail(activePlace);
    });
    controls.append(button);
  });

  markerButtons.forEach(entry => {
    const couples = visibleCouples(entry.place);
    const count = couples.length;
    entry.button.style.setProperty("--couple-count", String(count));
    entry.button.setAttribute("aria-label", `${entry.place.name}: ${count} ${count === 1 ? "couple" : "couples"} — ${couples.map(namesForCouple).join("; ")}`);
  });

  const weightKey = document.createElement("div");
  weightKey.className = "map-weight-key";
  weightKey.setAttribute("aria-label", "Map marker key");
  weightKey.innerHTML = `<span class="map-key-item"><span class="weight-dots" aria-hidden="true"><i></i><i></i></span><span>Larger red markers represent more ancestral couples.</span></span><span class="map-key-item"><i class="reference-city-dot" aria-hidden="true"></i><span>Black dots mark reference cities and are not selectable.</span></span>`;

  layout.append(map, detail);
  const caption = document.createElement("p");
  caption.className = "map-caption";
  caption.innerHTML = `Household locations are approximate. Where a shared residence is not explicit, the map uses the listed descendant’s birthplace. Frankfurt, Marburg, and Kassel are static geographic reference points. Base map: <a href="https://commons.wikimedia.org/wiki/File:Hesse_location_map.svg" target="_blank" rel="noreferrer">TUBS and NordNordWest, Wikimedia Commons</a> (CC BY-SA).`;
  atlas.append(header, controls, weightKey, layout, caption);
  renderDetail(activePlace);
  return atlas;
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
  title.textContent = item.title;
  const intro = document.createElement("p");
  intro.textContent = item.intro;
  header.append(eyebrow, title, intro);

  const scroller = document.createElement("div");
  scroller.className = "restitution-table-scroll";
  scroller.tabIndex = 0;
  scroller.setAttribute("aria-label", "Confirmed compensation awards table");

  const table = document.createElement("table");
  table.className = "restitution-table";
  const head = document.createElement("thead");
  const headRow = document.createElement("tr");
  const columnLabels = ["Recipient", "Award year", "Basis", "Amount at the time", "Approx. 2026 USD"];
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
    [row.year, row.basis, row.dm, row.usd].forEach((value, index) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      cell.dataset.label = columnLabels[index + 1];
      tr.append(cell);
    });
    body.append(tr);
  });
  table.append(head, body);
  scroller.append(table);

  section.append(header, scroller);
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
    } else if (item.type === "ancestral_atlas") {
      body.append(renderAncestralAtlas());
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
