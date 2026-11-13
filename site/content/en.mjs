// English copy for the calculator docs. Every other language file has the same shape.

export default {
  siteName: "Telegram Stars calculator for JavaScript",
  short: "Stars calculator",

  ui: {
    navLabel: "Docs sections",
    langsLabel: "Languages",
    footerBy: (brand) => `Open source by ${brand}, the Telegram Mini App with gift boxes and games.`,
    moreLabel: "More from Gift Club",
    sourceOnGithub: "Source on GitHub",
    sisters: { dataset: "Telegram data", calculator: "Stars calculator", verifier: "Provably fair verifier" },
    updated: "Prices read",
    faqHeading: "Questions",
    relatedHeading: "Read next on Gift Club",
  },

  nav: { home: "Overview", api: "API", embed: "Embed" },

  home: {
    title: () => "Telegram Stars Calculator: npm Package and Web Component",
    description: ({ F, n }) =>
      `Zero-dependency JavaScript that prices any number of Telegram Stars on Fragment and in the App Store in ${n(F.stores)} countries. npm package plus a drop-in widget, MIT.`,
    h1: "Telegram Stars calculator for JavaScript",
    lead: ({ F, n }) =>
      `Work out what any number of Telegram Stars costs on Fragment and in the App Store in ${n(F.stores)} countries, in Node.js or the browser. No dependencies, no network calls.`,
    answer: ({ F, money, pct }) =>
      `1,000 Telegram Stars cost <strong>${money(F.usd1000)}</strong> on Fragment and <strong>${money(F.app1000)}</strong> in the US App Store, so Fragment is ${pct(F.saving)} cheaper per Star. The package returns those figures for any amount and country.`,
    tableCaption: "US App Store vs Fragment, from the package",
    cols: { stars: "Stars", fragment: "Fragment", appStore: "App Store (US)" },
    installHeading: "Install",
    installText: ({ F, money }) =>
      `<code>compare()</code> returns both prices, the packs to buy in the App Store, and the saving. Fragment sells any amount from ${F.min} Stars at ${money(F.perStar)} each; the App Store sells fixed packs, so the plan rounds up to the smallest amount the packs can make.`,
    widgetHeading: "Drop-in widget",
    widgetText:
      "One script tag adds a <code>&lt;telegram-stars-calculator&gt;</code> element in nine languages. It runs entirely in the page, renders no links and sends no requests.",
    demoLink: "Try the widget",
    featuresHeading: "What it does",
    features: ({ F, n }) => [
      `Prices any amount from 1 to 100,000 Stars in ${n(F.stores)} App Store countries, in each store's own currency.`,
      "Finds the App Store packs to buy: the smallest amount at or above what you asked for, in the fewest purchases.",
      "Converts Fragment's dollar price into each store's own currency at a dated central-bank rate.",
      "Ships TypeScript types, ES modules and tests; runs in Node 18+ and every modern browser.",
    ],
    countriesHeading: "Countries included",
    sourceNote: (dataset, d) => `Prices come from the ${dataset}, read up to ${d}. Each price is what Apple printed in that country; none is converted.`,
    faq: ({ F, money }) => [
      {
        q: "How much are 1,000 Telegram Stars in dollars?",
        a: `${money(F.usd1000)} on Fragment and ${money(F.app1000)} in the US App Store.`,
      },
      {
        q: "Does the package fetch live prices?",
        a: "No. It ships a dated snapshot so results are repeatable and work offline. Update the package to get newer prices.",
      },
      {
        q: "Can I use it in a commercial app or bot?",
        a: "Yes, it is MIT licensed.",
      },
      {
        q: "Why is there no Google Play price?",
        a: "Google Play publishes no public price list to read, so the package only covers Fragment and the App Store.",
      },
    ],
  },

  api: {
    title: "Telegram Stars Calculator API Reference (JavaScript)",
    description: "Every function of the Telegram Stars calculator package: compare, appStorePlan, fragmentPlan, starsToUsd, usdToStars, and the price constants.",
    h1: "API reference",
    intro: "All functions are pure and synchronous. Amounts are clamped to 1–100,000 Stars; a country is an ISO code such as <code>\"us\"</code> or <code>\"de\"</code>.",
    compare: "Both ways of buying <code>stars</code> in one country. <code>saving</code> is how much less a Star costs on Fragment, as a fraction, or <code>null</code> when the snapshot has no exchange rate for that currency.",
    appStorePlan: "The App Store packs to buy: the smallest total at or above <code>stars</code> that the country's packs can make, in the fewest purchases. Throws a <code>RangeError</code> for an unknown country.",
    fragmentPlan: "Fragment's price for <code>stars</code> (at least its minimum), in dollars and, when the snapshot has a rate, in <code>currency</code>.",
    convert: "Stars to dollars and back at Fragment's flat rate.",
    constants: "The snapshot itself: every country's packs with the date they were read, Fragment's rate and minimum, and the exchange rates.",
    typesHeading: "TypeScript",
    types: "Types ship in <code>src/index.d.ts</code> and load automatically.",
  },

  embed: {
    title: "Embed a Telegram Stars Calculator on Your Website",
    description: "Add a free Telegram Stars price calculator to any site with one iframe, or as a themeable web component. No sign-up, no key.",
    h1: "Embed the calculator on your site",
    intro: "Two ways to put a Telegram Stars calculator on your page. Both are free.",
    iframeHeading: "Option 1: iframe",
    iframeText: "Paste this where the calculator should appear. It shows the current prices and fits columns from 320 px wide.",
    creditText: "A credit line under it is welcome, never required:",
    frameTitle: "Telegram Stars calculator",
    previewHeading: "Preview",
    componentHeading: "Option 2: web component",
    componentText: "Self-hosted and fully styleable: the script runs in your page, renders no links and makes no requests.",
    themeText: "Match your theme with CSS variables:",
    faq: [
      { q: "Is it free to embed?", a: "Yes, for any site, commercial included." },
      { q: "Does the embed track visitors?", a: "The web component sets no cookies and makes no network request. The iframe is a page on giftclub.app, which counts visits with Google Analytics; use the web component if you need no third-party requests at all." },
      { q: "Which languages does it support?", a: "Nine, each set with the lang attribute: English, русский, українська, español, polski, italiano, Türkçe, Deutsch and français." },
    ],
  },

  demo: {
    title: "Telegram Stars calculator widget demo",
    description: "Live demo of the <telegram-stars-calculator> web component.",
    h1: "Widget demo",
    text: (brand) => `The <code>&lt;telegram-stars-calculator&gt;</code> element running from this repository. The full calculator, with every pack in a table, is on ${brand}.`,
  },
};
