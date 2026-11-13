// Builds the GitHub Pages docs in docs/ from site/content/<lang>.mjs.
// Run: node scripts/build-site.mjs
import { cpSync, existsSync, readFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { LANGS, ORGANIZATION, breadcrumbs, esc, faqHtml, faqPage, pageUrl, table, writeSite } from "./site-kit.mjs";
import { links } from "../site/links.mjs";
import { APP_STORES, FRAGMENT_MIN_STARS, FRAGMENT_USD_PER_STAR, STORES, compare } from "../src/index.js";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const DOCS = `${ROOT}docs`;
const pkg = JSON.parse(readFileSync(`${ROOT}package.json`, "utf8"));
const REPO = "https://github.com/gift-club/telegram-stars-calculator";
const EMBED = "https://giftclub.app/embed/telegram-stars-calculator";
const TOOL = "https://giftclub.app/tools/telegram-stars-calculator";

const site = {
  /** The release date: the sitemap lastmod of pages without their own data date. */
  updated: "2026-11-12",
  base: "https://gift-club.github.io/telegram-stars-calculator",
  root: "/telegram-stars-calculator/",
  repo: REPO,
  langs: LANGS,
  sisterKey: "calculator",
  name: {},
  short: {},
  nav: [
    { key: "home", path: "" },
    { key: "api", path: "api/" },
    { key: "embed", path: "embed/" },
  ],
};

const content = {};
for (const lang of LANGS) {
  if (!existsSync(`${ROOT}site/content/${lang}.mjs`)) {
    console.warn(`No site/content/${lang}.mjs: skipping ${lang}`);
    continue;
  }
  content[lang] = (await import(`../site/content/${lang}.mjs`)).default;
  site.name[lang] = content[lang].siteName;
  site.short[lang] = content[lang].short;
}
const BUILT = LANGS.filter((l) => content[l]);
site.langs = BUILT;

const checked = Object.values(APP_STORES).map((s) => s.checked).sort().at(-1);
const us = compare(1000, "us");
const F = {
  usd1000: us.fragment.usd,
  app1000: us.appStore.price,
  saving: us.saving,
  perStar: FRAGMENT_USD_PER_STAR,
  min: FRAGMENT_MIN_STARS,
  stores: STORES.length,
  version: pkg.version,
  name: pkg.name,
};

const locale = (lang) => (lang === "uk" ? "uk-UA" : lang);
const regionName = (lang, code) => {
  const n = new Intl.DisplayNames([locale(lang)], { type: "region" }).of(code.toUpperCase()) ?? code;
  return code === "ru" ? n.toLocaleLowerCase(locale(lang)) : n;
};
const money = (lang, v, c) => {
  const digits = v < 1 ? 4 : ["IDR", "KZT"].includes(c) ? 0 : 2;
  return new Intl.NumberFormat(locale(lang), { style: "currency", currency: c, minimumFractionDigits: Math.min(digits, 2), maximumFractionDigits: digits }).format(v);
};
const num = (lang, v) => new Intl.NumberFormat(locale(lang)).format(v);
const pct = (lang, v) => new Intl.NumberFormat(locale(lang), { style: "percent" }).format(v);

const related = (c, lang, keys) => {
  const seen = new Set();
  const items = keys.map((k) => links(lang, k)).filter((l) => l && !seen.has(l.url) && seen.add(l.url));
  return items.length
    ? `<h2>${esc(c.ui.relatedHeading)}</h2><ul>${items.map((l) => `<li><a href="${l.url}">${esc(l.title)}</a></li>`).join("")}</ul>`
    : "";
};

const software = (lang, description) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "Telegram Stars calculator",
  description,
  url: pageUrl(site, lang, ""),
  codeRepository: REPO,
  programmingLanguage: "JavaScript",
  runtimePlatform: ["Node.js", "Web browser"],
  license: "https://opensource.org/licenses/MIT",
  version: pkg.version,
  author: ORGANIZATION,
  publisher: ORGANIZATION,
  isBasedOn: "https://gift-club.github.io/telegram-gifts-dataset/stars-prices/",
});

const code = (s) => `<pre><code>${esc(s)}</code></pre>`;

const pages = [];
for (const lang of BUILT) {
  const c = content[lang];
  const ctx = { F, money: (v, cur = "USD") => money(lang, v, cur), n: (v) => num(lang, v), pct: (v) => pct(lang, v) };
  const crumb = (name, path) =>
    breadcrumbs([{ name: c.siteName, url: pageUrl(site, lang, "") }, ...(path ? [{ name, url: pageUrl(site, lang, path) }] : [])]);

  // --- Overview ------------------------------------------------------------------------
  {
    const h = c.home;
    const examples = [100, 500, 1000, 2500].map((s) => {
      const r = compare(s, "us");
      return [num(lang, s), esc(money(lang, r.fragment.usd, "USD")), esc(money(lang, r.appStore.price, "USD"))];
    });
    const body = `
<div class="answer"><p>${h.answer(ctx)}</p></div>
${table({ caption: h.tableCaption, headers: [h.cols.stars, h.cols.fragment, h.cols.appStore], rows: examples, num: [0, 1, 2] })}
<h2>${esc(h.installHeading)}</h2>
${code(`npm install ${F.name}`)}
${code(`import { compare } from "${F.name}";

const r = compare(1000, "us");
r.fragment.usd;     // ${us.fragment.usd}
r.appStore.price;   // ${us.appStore.price}
r.saving;           // ${us.saving.toFixed(4)}`)}
<p>${h.installText(ctx)}</p>
<h2>${esc(h.widgetHeading)}</h2>
<p>${h.widgetText}</p>
${code(`<script type="module" src="https://cdn.jsdelivr.net/npm/${F.name}@${F.version}/src/widget.js"></script>
<telegram-stars-calculator lang="${lang}" store="${lang === "en" ? "us" : STORES.includes(lang) ? lang : "us"}" stars="1000"></telegram-stars-calculator>`)}
<p><a href="${pageUrl(site, lang, "demo/")}">${esc(h.demoLink)}</a></p>
<h2>${esc(h.featuresHeading)}</h2>
<ul>${h.features(ctx).map((f) => `<li>${f}</li>`).join("")}</ul>
<h2>${esc(h.countriesHeading)}</h2>
<p>${STORES.map((s) => `${esc(regionName(lang, s))} (${APP_STORES[s].currency})`).sort((a, b) => a.localeCompare(b, locale(lang))).join(" · ")}</p>
<p class="meta">${h.sourceNote(`<a href="https://gift-club.github.io/telegram-gifts-dataset/${lang === "en" ? "" : `${lang}/`}stars-prices/">Telegram Gifts &amp; Stars Dataset</a>`, checked)}</p>
${related(c, lang, ["calculator", "buy", "starsPrice"])}
${faqHtml(c.ui.faqHeading, h.faq(ctx))}
`;
    pages.push({
      path: "", lang, title: h.title(ctx), description: h.description(ctx), h1: h.h1, lead: h.lead(ctx), updated: checked, body,
      jsonLd: [software(lang, h.description(ctx)), crumb("", ""), faqPage(h.faq(ctx))],
    });
  }

  // --- API -----------------------------------------------------------------------------
  {
    const a = c.api;
    const ru = compare(1000, "ru");
    const fn = (sig, text, example) => `<h3><code>${esc(sig)}</code></h3><p>${text}</p>${example ? code(example) : ""}`;
    const body = `
<p>${a.intro}</p>
${fn("compare(stars, store = \"us\")", a.compare, `compare(1000, "ru");
// { stars: 1000,
//   appStore: { store: "ru", currency: "RUB", price: ${ru.appStore.price}, stars: ${ru.appStore.stars}, packs: ${JSON.stringify(ru.appStore.packs).replace(/"/g, "")} },
//   fragment: { stars: 1000, usd: ${ru.fragment.usd}, currency: "RUB", local: ${ru.fragment.local.toFixed(2)} },
//   saving: ${ru.saving.toFixed(4)} }`)}
${fn("appStorePlan(stars, store = \"us\")", a.appStorePlan, `appStorePlan(1200, "us").packs;
// ${JSON.stringify(compare(1200, "us").appStore.packs)}`)}
${fn("fragmentPlan(stars, currency = \"USD\")", a.fragmentPlan, `fragmentPlan(10);         // { stars: ${F.min}, usd: ${F.min * F.perStar}, currency: "USD", local: ${F.min * F.perStar} }`)}
${fn("starsToUsd(stars) / usdToStars(usd)", a.convert, `starsToUsd(1000); // 15
usdToStars(15);   // 1000`)}
${fn("STORES, APP_STORES, FRAGMENT_USD_PER_STAR, USD_RATES", a.constants)}
<h2>${esc(a.typesHeading)}</h2>
<p>${a.types}</p>
${related(c, lang, ["calculator"])}
`;
    pages.push({
      path: "api/", lang, title: a.title, description: a.description, h1: a.h1, body,
      jsonLd: [software(lang, a.description), crumb(c.nav.api, "api/")],
    });
  }

  // --- Embed ---------------------------------------------------------------------------
  {
    const e = c.embed;
    const title = e.frameTitle;
    const snippet = `<iframe src="${EMBED}" title="${title}" width="100%" height="880" style="max-width:480px;border:0;display:block" loading="lazy"></iframe>`;
    const credit = `<p style="max-width:480px;font-size:14px">${title} · <a href="${links(lang, "calculator")?.url ?? TOOL}">Gift Club</a></p>`;
    const body = `
<p>${e.intro}</p>
<h2>${esc(e.iframeHeading)}</h2>
<p>${e.iframeText}</p>
${code(snippet)}
<p>${e.creditText}</p>
${code(credit)}
<h2>${esc(e.previewHeading)}</h2>
${snippet}
<h2>${esc(e.componentHeading)}</h2>
<p>${e.componentText}</p>
${code(`<script type="module" src="https://cdn.jsdelivr.net/npm/${F.name}@${F.version}/src/widget.js"></script>
<telegram-stars-calculator lang="${lang}"></telegram-stars-calculator>`)}
<p>${e.themeText}</p>
${code(`telegram-stars-calculator {
  --tsc-bg: #0d0b14;
  --tsc-ink: #f3f0fa;
  --tsc-muted: #a59fb5;
  --tsc-line: #2a2535;
  --tsc-accent: #ffcf4a;
}`)}
${faqHtml(c.ui.faqHeading, e.faq)}
`;
    pages.push({
      path: "embed/", lang, title: e.title, description: e.description, h1: e.h1, body,
      jsonLd: [crumb(c.nav.embed, "embed/"), faqPage(e.faq)],
    });
  }

  // --- Demo (noindex: the tool's indexable home is giftclub.app) ------------------------
  pages.push({
    path: "demo/", lang, noindex: true, title: c.demo.title, description: c.demo.description, h1: c.demo.h1,
    body: `<p>${c.demo.text(`<a href="${links(lang, "calculator")?.url ?? TOOL}">Gift Club</a>`)}</p>
<script type="module" src="${site.root}src/widget.js"></script>
<telegram-stars-calculator lang="${lang}" store="${STORES.includes(lang) ? lang : "us"}" stars="1000" style="--tsc-bg:#17141f;--tsc-ink:#f3f0fa;--tsc-muted:#a59fb5;--tsc-line:#2a2535;--tsc-accent:#ffcf4a"></telegram-stars-calculator>`,
  });
}

rmSync(DOCS, { recursive: true, force: true });
const ui = Object.fromEntries(BUILT.map((l) => [l, { ...content[l].ui, nav: content[l].nav }]));
const count = writeSite(DOCS, site, pages, ui);
cpSync(`${ROOT}src`, `${DOCS}/src`, { recursive: true });
console.log(`Built ${count} pages into docs/`);
