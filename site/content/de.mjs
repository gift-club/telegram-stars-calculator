// Deutsche Texte der Rechner-Dokumentation. Gleiche Form wie en.mjs.

export default {
  siteName: "Telegram-Stars-Rechner für JavaScript",
  short: "Stars-Rechner",

  ui: {
    navLabel: "Abschnitte der Dokumentation",
    langsLabel: "Sprachen",
    footerBy: (brand) => `Open Source von ${brand}, der Telegram Mini App mit Geschenk-Boxen und Spielen.`,
    moreLabel: "Mehr von Gift Club",
    sourceOnGithub: "Quellcode auf GitHub",
    sisters: { dataset: "Telegram-Daten", calculator: "Sterne-Rechner", verifier: "Provably fair verifier" },
    updated: "Preise gelesen am",
    faqHeading: "Fragen",
    relatedHeading: "Weiterlesen bei Gift Club",
  },

  nav: { home: "Überblick", api: "API", embed: "Einbetten" },

  home: {
    title: () => "Telegram-Stars-Rechner: npm-Paket und Web Component",
    description: ({ F, n }) =>
      `JavaScript ohne Abhängigkeiten berechnet den Preis beliebig vieler Telegram Stars bei Fragment und im App Store von ${n(F.stores)} Ländern. npm-Paket und fertiges Widget, MIT.`,
    h1: "Telegram-Stars-Rechner für JavaScript",
    lead: ({ F, n }) =>
      `Berechne, was beliebig viele Telegram Stars bei Fragment und im App Store von ${n(F.stores)} Ländern kosten, in Node.js oder im Browser. Keine Abhängigkeiten, keine Netzwerkaufrufe.`,
    answer: ({ F, money, pct }) =>
      `1.000 Telegram Stars kosten bei Fragment <strong>${money(F.usd1000)}</strong> und im US-App-Store <strong>${money(F.app1000)}</strong>, also ist ein Stern bei Fragment ${pct(F.saving)} günstiger. Das Paket liefert diese Zahlen für jede Menge und jedes Land.`,
    tableCaption: "US-App-Store und Fragment, aus dem Paket",
    cols: { stars: "Sterne", fragment: "Fragment", appStore: "App Store (USA)" },
    installHeading: "Installation",
    installText: ({ F, money }) =>
      `<code>compare()</code> liefert beide Preise, die im App Store zu kaufenden Pakete und die Ersparnis. Fragment verkauft jede Menge ab ${F.min} Sternen für je ${money(F.perStar)}; der App Store verkauft feste Pakete, deshalb rundet der Plan auf die kleinste Menge auf, die sich aus den Paketen bilden lässt.`,
    widgetHeading: "Fertiges Widget",
    widgetText:
      "Ein einziges Script-Tag fügt ein <code>&lt;telegram-stars-calculator&gt;</code>-Element in neun Sprachen ein. Es läuft komplett auf der Seite, zeigt keine Links und sendet keine Anfragen.",
    demoLink: "Widget ausprobieren",
    featuresHeading: "Was es kann",
    features: ({ F, n }) => [
      `Berechnet jede Menge von 1 bis ${n(100000)} Sternen in ${n(F.stores)} App-Store-Ländern, in der Währung des jeweiligen Stores.`,
      "Findet die zu kaufenden App-Store-Pakete: die kleinste Menge, die mindestens der gewünschten entspricht, mit möglichst wenigen Käufen.",
      "Rechnet den Dollarpreis von Fragment mit einem datierten Zentralbankkurs in die Währung jedes Stores um.",
      "Bringt TypeScript-Typen, ES-Module und Tests mit; läuft in Node 18+ und in allen modernen Browsern.",
    ],
    countriesHeading: "Enthaltene Länder",
    sourceNote: (dataset, d) => `Die Preise stammen aus ${dataset}, gelesen bis ${d}. Jeder Preis ist der, den Apple in diesem Land ausweist; keiner ist umgerechnet.`,
    faq: ({ F, money }) => [
      {
        q: "Wie viele Dollar kosten 1.000 Telegram Stars?",
        a: `${money(F.usd1000)} bei Fragment und ${money(F.app1000)} im US-App-Store.`,
      },
      {
        q: "Ruft das Paket Live-Preise ab?",
        a: "Nein. Es enthält einen datierten Schnappschuss, deshalb sind die Ergebnisse reproduzierbar und funktionieren offline. Aktualisiere das Paket, um neuere Preise zu bekommen.",
      },
      {
        q: "Kann ich es in einer kommerziellen App oder einem Bot nutzen?",
        a: "Ja, es steht unter der MIT-Lizenz.",
      },
      {
        q: "Warum gibt es keinen Google-Play-Preis?",
        a: "Google Play veröffentlicht keine öffentliche Preisliste, die sich auslesen ließe, deshalb deckt das Paket nur Fragment und den App Store ab.",
      },
    ],
  },

  api: {
    title: "Telegram-Stars-Rechner: API-Referenz (JavaScript)",
    description: "Alle Funktionen des Telegram-Stars-Rechner-Pakets: compare, appStorePlan, fragmentPlan, starsToUsd, usdToStars und die Preiskonstanten.",
    h1: "API-Referenz",
    intro: "Alle Funktionen sind rein und synchron. Mengen werden auf 1–100.000 Sterne begrenzt; ein Land ist ein ISO-Code wie <code>\"us\"</code> oder <code>\"de\"</code>.",
    compare: "Beide Wege, <code>stars</code> in einem Land zu kaufen. <code>saving</code> gibt als Bruch an, wie viel weniger ein Stern bei Fragment kostet, oder <code>null</code>, wenn der Schnappschuss keinen Wechselkurs für diese Währung hat.",
    appStorePlan: "Die zu kaufenden App-Store-Pakete: die kleinste Summe, die mindestens <code>stars</code> entspricht und sich aus den Paketen des Landes bilden lässt, mit möglichst wenigen Käufen. Wirft einen <code>RangeError</code> für ein unbekanntes Land.",
    fragmentPlan: "Der Preis von Fragment für <code>stars</code> (mindestens dessen Minimum) in Dollar und, wenn der Schnappschuss einen Kurs hat, in <code>currency</code>.",
    convert: "Sterne in Dollar und zurück zum festen Fragment-Kurs.",
    constants: "Der Schnappschuss selbst: die Pakete jedes Landes mit dem Lesedatum, Fragments Kurs und Minimum sowie die Wechselkurse.",
    typesHeading: "TypeScript",
    types: "Die Typen liegen in <code>src/index.d.ts</code> und werden automatisch geladen.",
  },

  embed: {
    title: "Telegram-Stars-Rechner auf deiner Website einbetten",
    description: "Binde einen kostenlosen Telegram-Stars-Preisrechner per iframe oder als stilbares Web Component in jede Seite ein. Ohne Anmeldung, ohne Schlüssel.",
    h1: "Den Rechner auf deiner Website einbetten",
    intro: "Zwei Wege, einen Telegram-Stars-Rechner auf deine Seite zu bringen. Beide sind kostenlos.",
    iframeHeading: "Option 1: iframe",
    iframeText: "Füge das dort ein, wo der Rechner erscheinen soll. Er zeigt die aktuellen Preise und passt in Spalten ab 320 px Breite.",
    creditText: "Eine Quellenzeile darunter ist willkommen, aber nie nötig:",
    frameTitle: "Telegram-Stars-Rechner",
    previewHeading: "Vorschau",
    componentHeading: "Option 2: Web Component",
    componentText: "Selbst gehostet und voll gestaltbar: Das Script läuft auf deiner Seite, zeigt keine Links und sendet keine Anfragen.",
    themeText: "Passe es mit CSS-Variablen an dein Theme an:",
    faq: [
      { q: "Ist das Einbetten kostenlos?", a: "Ja, für jede Website, auch kommerzielle." },
      { q: "Trackt die Einbettung Besucher?", a: "Die Web Component setzt keine Cookies und stellt keine Netzwerkanfragen. Der iframe ist eine Seite auf giftclub.app, die Besuche mit Google Analytics zählt; wenn du gar keine Anfragen an Dritte willst, nimm die Web Component." },
      { q: "Welche Sprachen unterstützt sie?", a: "Das Web Component spricht Englisch, Russisch, Ukrainisch, Spanisch, Polnisch, Italienisch, Türkisch, Deutsch und Französisch." },
    ],
  },

  demo: {
    title: "Demo des Telegram-Stars-Rechner-Widgets",
    description: "Live-Demo des Web Components <telegram-stars-calculator>.",
    h1: "Widget-Demo",
    text: (brand) => `Das Element <code>&lt;telegram-stars-calculator&gt;</code> läuft aus diesem Repository. Der vollständige Rechner mit allen Paketen in einer Tabelle ist bei ${brand}.`,
  },
};
