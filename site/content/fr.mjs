// Textes français de la documentation du calculateur. Même forme que en.mjs.

export default {
  siteName: "Calculateur de Telegram Stars pour JavaScript",
  short: "Calculateur de Stars",

  ui: {
    navLabel: "Sections de la documentation",
    langsLabel: "Langues",
    footerBy: (brand) => `Open source par ${brand}, la Mini App Telegram avec des coffres cadeaux et des jeux.`,
    moreLabel: "Plus de Gift Club",
    sourceOnGithub: "Code source sur GitHub",
    sisters: { dataset: "Données Telegram", calculator: "Calculateur d’Étoiles", verifier: "Provably fair verifier" },
    updated: "Prix relevés le",
    faqHeading: "Questions",
    relatedHeading: "À lire ensuite sur Gift Club",
  },

  nav: { home: "Présentation", api: "API", embed: "Intégration" },

  home: {
    title: () => "Calculateur Telegram Stars : paquet npm et Web Component",
    description: ({ F, n }) =>
      `JavaScript sans dépendance qui calcule le prix de n’importe quel nombre de Telegram Stars sur Fragment et sur l’App Store de ${n(F.stores)} pays. Paquet npm et widget prêt à l’emploi, MIT.`,
    h1: "Calculateur de Telegram Stars pour JavaScript",
    lead: ({ F, n }) =>
      `Calcule ce que coûte n’importe quel nombre de Telegram Stars sur Fragment et sur l’App Store de ${n(F.stores)} pays, dans Node.js ou dans le navigateur. Aucune dépendance, aucun appel réseau.`,
    answer: ({ F, money, pct }) =>
      `1 000 Telegram Stars coûtent <strong>${money(F.usd1000)}</strong> sur Fragment et <strong>${money(F.app1000)}</strong> sur l’App Store américain, donc une Étoile revient ${pct(F.saving)} moins cher sur Fragment. Le paquet renvoie ces chiffres pour toute quantité et tout pays.`,
    tableCaption: "App Store américain et Fragment, d’après le paquet",
    cols: { stars: "Étoiles", fragment: "Fragment", appStore: "App Store (États-Unis)" },
    installHeading: "Installation",
    installText: ({ F, money }) =>
      `<code>compare()</code> renvoie les deux prix, les packs à acheter sur l’App Store et l’économie réalisée. Fragment vend n’importe quelle quantité à partir de ${F.min} Étoiles à ${money(F.perStar)} pièce ; l’App Store vend des packs fixes, donc le plan arrondit à la plus petite quantité que les packs permettent d’obtenir.`,
    widgetHeading: "Widget prêt à l’emploi",
    widgetText:
      "Une seule balise script ajoute un élément <code>&lt;telegram-stars-calculator&gt;</code> en neuf langues. Il fonctionne entièrement dans la page, n’affiche aucun lien et n’envoie aucune requête.",
    demoLink: "Essayer le widget",
    featuresHeading: "Ce qu’il fait",
    features: ({ F, n }) => [
      `Calcule le prix de toute quantité de 1 à ${n(100000)} Étoiles dans ${n(F.stores)} pays de l’App Store, dans la devise de chaque boutique.`,
      "Trouve les packs App Store à acheter : la plus petite quantité égale ou supérieure à celle demandée, en un minimum d’achats.",
      "Convertit le prix en dollars de Fragment dans la devise de chaque store, à un taux de banque centrale daté.",
      "Fournit des types TypeScript, des modules ES et des tests ; fonctionne sous Node 18+ et dans tous les navigateurs modernes.",
    ],
    countriesHeading: "Pays inclus",
    sourceNote: (dataset, d) => `Les prix proviennent de ${dataset}, relevés jusqu’au ${d}. Chaque prix est celui qu’Apple affiche dans ce pays ; aucun n’est converti.`,
    faq: ({ F, money }) => [
      {
        q: "Combien coûtent 1 000 Telegram Stars en dollars ?",
        a: `${money(F.usd1000)} sur Fragment et ${money(F.app1000)} sur l’App Store américain.`,
      },
      {
        q: "Le paquet récupère-t-il les prix en direct ?",
        a: "Non. Il embarque un instantané daté, donc les résultats sont reproductibles et fonctionnent hors ligne. Mets le paquet à jour pour obtenir des prix plus récents.",
      },
      {
        q: "Puis-je l’utiliser dans une appli ou un bot commercial ?",
        a: "Oui, il est sous licence MIT.",
      },
      {
        q: "Pourquoi n’y a-t-il pas de prix Google Play ?",
        a: "Google Play ne publie aucune grille de prix publique à lire, donc le paquet ne couvre que Fragment et l’App Store.",
      },
    ],
  },

  api: {
    title: "API du calculateur Telegram Stars : référence (JavaScript)",
    description: "Toutes les fonctions du paquet calculateur Telegram Stars : compare, appStorePlan, fragmentPlan, starsToUsd, usdToStars et les constantes de prix.",
    h1: "Référence de l’API",
    intro: "Toutes les fonctions sont pures et synchrones. Les quantités sont bornées à 1–100 000 Étoiles ; un pays est un code ISO comme <code>\"us\"</code> ou <code>\"de\"</code>.",
    compare: "Les deux façons d’acheter <code>stars</code> dans un pays. <code>saving</code> indique combien une Étoile coûte de moins sur Fragment, sous forme de fraction, ou <code>null</code> quand l’instantané n’a pas de taux de change pour cette devise.",
    appStorePlan: "Les packs App Store à acheter : le plus petit total égal ou supérieur à <code>stars</code> que les packs du pays permettent d’obtenir, en un minimum d’achats. Lève une <code>RangeError</code> pour un pays inconnu.",
    fragmentPlan: "Le prix de Fragment pour <code>stars</code> (au moins son minimum), en dollars et, quand l’instantané a un taux, en <code>currency</code>.",
    convert: "Des Étoiles aux dollars et inversement, au taux fixe de Fragment.",
    constants: "L’instantané lui-même : les packs de chaque pays avec leur date de relevé, le taux et le minimum de Fragment, et les taux de change.",
    typesHeading: "TypeScript",
    types: "Les types sont fournis dans <code>src/index.d.ts</code> et se chargent automatiquement.",
  },

  embed: {
    title: "Intégrer un calculateur Telegram Stars sur ton site",
    description: "Ajoute un calculateur de prix Telegram Stars gratuit à n’importe quel site avec un iframe ou comme Web Component personnalisable. Sans inscription ni clé.",
    h1: "Intègre le calculateur sur ton site",
    intro: "Deux façons de mettre un calculateur Telegram Stars sur ta page. Les deux sont gratuites.",
    iframeHeading: "Option 1 : iframe",
    iframeText: "Colle ceci à l’endroit où le calculateur doit apparaître. Il affiche les prix actuels et tient dans des colonnes à partir de 320 px de large.",
    creditText: "Une mention en dessous est la bienvenue, jamais obligatoire :",
    frameTitle: "Calculateur de Telegram Stars",
    previewHeading: "Aperçu",
    componentHeading: "Option 2 : Web Component",
    componentText: "Hébergé chez toi et entièrement stylable : le script s’exécute dans ta page, n’affiche aucun lien et ne fait aucune requête.",
    themeText: "Adapte-le à ton thème avec des variables CSS :",
    faq: [
      { q: "L’intégration est-elle gratuite ?", a: "Oui, pour tout site, y compris commercial." },
      { q: "L’intégration suit-elle les visiteurs ?", a: "Le Web Component ne dépose aucun cookie et ne fait aucune requête réseau. L’iframe est une page de giftclub.app, qui compte les visites avec Google Analytics ; si tu ne veux aucune requête vers un tiers, prends le Web Component." },
      { q: "Quelles langues prend-elle en charge ?", a: "Le Web Component parle anglais, russe, ukrainien, espagnol, polonais, italien, turc, allemand et français." },
    ],
  },

  demo: {
    title: "Démo du widget calculateur Telegram Stars",
    description: "Démo en direct du Web Component <telegram-stars-calculator>.",
    h1: "Démo du widget",
    text: (brand) => `L’élément <code>&lt;telegram-stars-calculator&gt;</code> exécuté depuis ce dépôt. Le calculateur complet, avec tous les packs dans un tableau, se trouve sur ${brand}.`,
  },
};
