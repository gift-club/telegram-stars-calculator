// Testi in italiano della documentazione del calcolatore. Stessa forma di en.mjs.

export default {
  siteName: "Calcolatore di Telegram Stars per JavaScript",
  short: "Calcolatore di Stars",

  ui: {
    navLabel: "Sezioni della documentazione",
    langsLabel: "Lingue",
    footerBy: (brand) => `Open source di ${brand}, la Mini App di Telegram con casse regalo e giochi.`,
    moreLabel: "Altro da Gift Club",
    sourceOnGithub: "Codice su GitHub",
    sisters: { dataset: "Dati di Telegram", calculator: "Calcolatore di Stelle", verifier: "Provably fair verifier" },
    updated: "Prezzi letti il",
    faqHeading: "Domande",
    relatedHeading: "Continua a leggere su Gift Club",
  },

  nav: { home: "Panoramica", api: "API", embed: "Incorpora" },

  home: {
    title: () => "Calcolatore Telegram Stars: pacchetto npm e web component",
    description: ({ F, n }) =>
      `JavaScript senza dipendenze che calcola il prezzo di qualsiasi quantità di Telegram Stars su Fragment e nell'App Store di ${n(F.stores)} paesi. Pacchetto npm e widget pronto, MIT.`,
    h1: "Calcolatore di Telegram Stars per JavaScript",
    lead: ({ F, n }) =>
      `Scopri quanto costa qualsiasi quantità di Telegram Stars su Fragment e nell'App Store di ${n(F.stores)} paesi, in Node.js o nel browser. Nessuna dipendenza, nessuna chiamata di rete.`,
    answer: ({ F, money, pct }) =>
      `1000 Telegram Stars costano <strong>${money(F.usd1000)}</strong> su Fragment e <strong>${money(F.app1000)}</strong> nell'App Store americano, quindi su Fragment ogni Stella costa il ${pct(F.saving)} in meno. Il pacchetto restituisce questi valori per qualsiasi quantità e paese.`,
    tableCaption: "App Store (USA) e Fragment, dal pacchetto",
    cols: { stars: "Stelle", fragment: "Fragment", appStore: "App Store (USA)" },
    installHeading: "Installazione",
    installText: ({ F, money }) =>
      `<code>compare()</code> restituisce entrambi i prezzi, i pacchetti da acquistare nell'App Store e il risparmio. Fragment vende qualsiasi quantità a partire da ${F.min} Stelle a ${money(F.perStar)} l'una; l'App Store vende pacchetti fissi, quindi il piano arrotonda per eccesso alla quantità più piccola ottenibile con i pacchetti.`,
    widgetHeading: "Widget pronto all'uso",
    widgetText:
      "Un solo tag script aggiunge un elemento <code>&lt;telegram-stars-calculator&gt;</code> in nove lingue. Funziona interamente nella pagina, non mostra link e non invia richieste.",
    demoLink: "Prova il widget",
    featuresHeading: "Cosa fa",
    features: ({ F, n }) => [
      `Calcola qualsiasi quantità da 1 a ${n(100000)} Stelle in ${n(F.stores)} paesi dell'App Store, nella valuta di ciascun negozio.`,
      "Trova i pacchetti App Store da acquistare: la quantità più piccola pari o superiore a quella richiesta, con il minor numero di acquisti.",
      "Converte il prezzo in dollari di Fragment nella valuta di ogni store al cambio datato di una banca centrale.",
      "Include i tipi TypeScript, moduli ES e test; funziona su Node 18+ e in tutti i browser moderni.",
    ],
    countriesHeading: "Paesi inclusi",
    sourceNote: (dataset, d) => `I prezzi provengono da ${dataset}, letti fino al ${d}. Ogni prezzo è quello che Apple mostra in quel paese; nessuno è convertito.`,
    faq: ({ F, money }) => [
      {
        q: "Quanti dollari costano 1000 Telegram Stars?",
        a: `${money(F.usd1000)} su Fragment e ${money(F.app1000)} nell'App Store americano.`,
      },
      {
        q: "Il pacchetto scarica i prezzi in tempo reale?",
        a: "No. Include un'istantanea datata, quindi i risultati sono ripetibili e funzionano offline. Aggiorna il pacchetto per avere prezzi più recenti.",
      },
      {
        q: "Posso usarlo in un'app o in un bot commerciale?",
        a: "Sì, ha licenza MIT.",
      },
      {
        q: "Perché non c'è il prezzo di Google Play?",
        a: "Google Play non pubblica un listino pubblico da leggere, quindi il pacchetto copre solo Fragment e l'App Store.",
      },
    ],
  },

  api: {
    title: "API del calcolatore Telegram Stars: riferimento (JavaScript)",
    description: "Tutte le funzioni del pacchetto del calcolatore Telegram Stars: compare, appStorePlan, fragmentPlan, starsToUsd, usdToStars e le costanti dei prezzi.",
    h1: "Riferimento API",
    intro: "Tutte le funzioni sono pure e sincrone. Le quantità sono limitate a 1–100 000 Stelle; un paese è un codice ISO come <code>\"us\"</code> o <code>\"de\"</code>.",
    compare: "Entrambi i modi di acquistare <code>stars</code> in un paese. <code>saving</code> indica quanto costa in meno una Stella su Fragment, come frazione, oppure <code>null</code> quando l'istantanea non ha un cambio per quella valuta.",
    appStorePlan: "I pacchetti App Store da acquistare: il totale più piccolo pari o superiore a <code>stars</code> ottenibile con i pacchetti del paese, con il minor numero di acquisti. Lancia un <code>RangeError</code> per un paese sconosciuto.",
    fragmentPlan: "Il prezzo di Fragment per <code>stars</code> (almeno il suo minimo), in dollari e, quando l'istantanea ha un cambio, in <code>currency</code>.",
    convert: "Da Stelle a dollari e viceversa alla tariffa fissa di Fragment.",
    constants: "L'istantanea stessa: i pacchetti di ogni paese con la data di lettura, la tariffa e il minimo di Fragment, e i tassi di cambio.",
    typesHeading: "TypeScript",
    types: "I tipi sono in <code>src/index.d.ts</code> e vengono caricati automaticamente.",
  },

  embed: {
    title: "Incorpora un calcolatore di Telegram Stars nel tuo sito",
    description: "Aggiungi un calcolatore gratuito dei prezzi di Telegram Stars a qualsiasi sito con un iframe o come web component personalizzabile. Senza registrazione né chiavi.",
    h1: "Incorpora il calcolatore nel tuo sito",
    intro: "Due modi per mettere un calcolatore di Telegram Stars nella tua pagina. Entrambi sono gratuiti.",
    iframeHeading: "Opzione 1: iframe",
    iframeText: "Incolla questo dove deve comparire il calcolatore. Mostra i prezzi attuali e sta in colonne larghe da 320 px.",
    creditText: "Una riga di credito sotto è gradita, mai obbligatoria:",
    frameTitle: "Calcolatore di Telegram Stars",
    previewHeading: "Anteprima",
    componentHeading: "Opzione 2: web component",
    componentText: "Ospitato da te e completamente personalizzabile: lo script gira nella tua pagina, non mostra link e non fa richieste.",
    themeText: "Adattalo al tuo tema con le variabili CSS:",
    faq: [
      { q: "Incorporarlo è gratuito?", a: "Sì, per qualsiasi sito, anche commerciale." },
      { q: "L'embed traccia i visitatori?", a: "Il web component non imposta cookie e non fa richieste di rete. L'iframe è una pagina di giftclub.app, che conta le visite con Google Analytics; se non vuoi nessuna richiesta a terzi, usa il web component." },
      { q: "Quali lingue supporta?", a: "Il web component parla inglese, russo, ucraino, spagnolo, polacco, italiano, turco, tedesco e francese." },
    ],
  },

  demo: {
    title: "Demo del widget del calcolatore Telegram Stars",
    description: "Demo dal vivo del web component <telegram-stars-calculator>.",
    h1: "Demo del widget",
    text: (brand) => `L'elemento <code>&lt;telegram-stars-calculator&gt;</code> in funzione da questo repository. Il calcolatore completo, con tutti i pacchetti in una tabella, è su ${brand}.`,
  },
};
