// Polskie teksty dokumentacji kalkulatora. Ta sama struktura co w en.mjs.

export default {
  siteName: "Kalkulator Telegram Stars dla JavaScript",
  short: "Kalkulator Stars",

  ui: {
    navLabel: "Sekcje dokumentacji",
    langsLabel: "Języki",
    footerBy: (brand) => `Otwarty kod od ${brand}, Mini Appki Telegrama ze skrzynkami z prezentami i grami.`,
    moreLabel: "Więcej od Gift Club",
    sourceOnGithub: "Kod źródłowy na GitHubie",
    sisters: { dataset: "Dane Telegrama", calculator: "Kalkulator Gwiazdek", verifier: "Provably fair verifier" },
    updated: "Ceny z dnia",
    faqHeading: "Pytania",
    relatedHeading: "Czytaj dalej na Gift Club",
  },

  nav: { home: "Przegląd", api: "API", embed: "Osadzanie" },

  home: {
    title: () => "Kalkulator Telegram Stars: pakiet npm i komponent web",
    description: ({ F, n }) =>
      `JavaScript bez zależności liczy cenę dowolnej liczby Telegram Stars we Fragment i w App Store w ${n(F.stores)} krajach. Pakiet npm i gotowy widżet, MIT.`,
    h1: "Kalkulator Telegram Stars dla JavaScript",
    lead: ({ F, n }) =>
      `Sprawdź, ile kosztuje dowolna liczba Telegram Stars we Fragment i w App Store w ${n(F.stores)} krajach, w Node.js lub w przeglądarce. Bez zależności i zapytań sieciowych.`,
    answer: ({ F, money, pct }) =>
      `1000 Telegram Stars kosztuje <strong>${money(F.usd1000)}</strong> we Fragment i <strong>${money(F.app1000)}</strong> w amerykańskim App Store, więc we Fragment jedna Gwiazdka jest tańsza o ${pct(F.saving)}. Pakiet zwraca te liczby dla dowolnej ilości i kraju.`,
    tableCaption: "App Store (USA) i Fragment, dane z pakietu",
    cols: { stars: "Gwiazdki", fragment: "Fragment", appStore: "App Store (USA)" },
    installHeading: "Instalacja",
    installText: ({ F, money }) =>
      `<code>compare()</code> zwraca obie ceny, pakiety do kupienia w App Store i oszczędność. Fragment sprzedaje dowolną ilość od ${F.min} Gwiazdek po ${money(F.perStar)} za sztukę; App Store sprzedaje stałe pakiety, więc plan zaokrągla w górę do najmniejszej ilości, jaką da się z nich złożyć.`,
    widgetHeading: "Gotowy widżet",
    widgetText:
      "Jeden tag script dodaje element <code>&lt;telegram-stars-calculator&gt;</code> w dziewięciu językach. Działa w całości na stronie, nie renderuje linków i nie wysyła żadnych zapytań.",
    demoLink: "Wypróbuj widżet",
    featuresHeading: "Co potrafi",
    features: ({ F, n }) => [
      `Wylicza cenę dowolnej ilości od 1 do ${n(100000)} Gwiazdek w ${n(F.stores)} krajach App Store, w walucie każdego sklepu.`,
      "Dobiera pakiety App Store do kupienia: najmniejszą ilość nie mniejszą niż zamówiona, w jak najmniejszej liczbie zakupów.",
      "Przelicza cenę Fragment z dolarów na walutę każdego sklepu według kursu banku centralnego z danego dnia.",
      "Zawiera typy TypeScript, moduły ES i testy; działa w Node 18+ i we wszystkich nowoczesnych przeglądarkach.",
    ],
    countriesHeading: "Uwzględnione kraje",
    sourceNote: (dataset, d) => `Ceny pochodzą ze zbioru ${dataset}, odczytanego do ${d}. Każda cena jest tą, którą Apple pokazuje w danym kraju; żadna nie jest przeliczana.`,
    faq: ({ F, money }) => [
      {
        q: "Ile dolarów kosztuje 1000 Telegram Stars?",
        a: `${money(F.usd1000)} we Fragment i ${money(F.app1000)} w amerykańskim App Store.`,
      },
      {
        q: "Czy pakiet pobiera ceny na żywo?",
        a: "Nie. Zawiera datowaną migawkę, więc wyniki są powtarzalne i działają offline. Zaktualizuj pakiet, aby dostać nowsze ceny.",
      },
      {
        q: "Czy mogę go użyć w komercyjnej aplikacji lub bocie?",
        a: "Tak, ma licencję MIT.",
      },
      {
        q: "Dlaczego nie ma ceny z Google Play?",
        a: "Google Play nie publikuje jawnego cennika, który można by odczytać, więc pakiet obejmuje tylko Fragment i App Store.",
      },
    ],
  },

  api: {
    title: "API kalkulatora Telegram Stars: dokumentacja (JavaScript)",
    description: "Wszystkie funkcje pakietu kalkulatora Telegram Stars: compare, appStorePlan, fragmentPlan, starsToUsd, usdToStars oraz stałe z cenami.",
    h1: "Dokumentacja API",
    intro: "Wszystkie funkcje są czyste i synchroniczne. Ilość jest ograniczona do zakresu 1–100 000 Gwiazdek; kraj to kod ISO, taki jak <code>\"us\"</code> lub <code>\"de\"</code>.",
    compare: "Oba sposoby kupienia <code>stars</code> w jednym kraju. <code>saving</code> mówi, o ile mniej kosztuje Gwiazdka we Fragment, jako ułamek, albo <code>null</code>, gdy migawka nie ma kursu dla tej waluty.",
    appStorePlan: "Pakiety App Store do kupienia: najmniejsza suma nie mniejsza niż <code>stars</code>, jaką da się złożyć z pakietów danego kraju, w jak najmniejszej liczbie zakupów. Dla nieznanego kraju zgłasza <code>RangeError</code>.",
    fragmentPlan: "Cena Fragment za <code>stars</code> (co najmniej jego minimum) w dolarach i, gdy migawka ma kurs, w <code>currency</code>.",
    convert: "Gwiazdki na dolary i z powrotem według stałej stawki Fragment.",
    constants: "Sama migawka: pakiety każdego kraju z datą odczytu, stawka i minimum Fragment oraz kursy walut.",
    typesHeading: "TypeScript",
    types: "Typy są w <code>src/index.d.ts</code> i ładują się automatycznie.",
  },

  embed: {
    title: "Osadź kalkulator Telegram Stars na swojej stronie",
    description: "Dodaj darmowy kalkulator cen Telegram Stars na dowolną stronę przez iframe lub jako stylowalny komponent web. Bez rejestracji i klucza.",
    h1: "Osadź kalkulator na swojej stronie",
    intro: "Dwa sposoby na umieszczenie kalkulatora Telegram Stars na stronie. Oba są darmowe.",
    iframeHeading: "Opcja 1: iframe",
    iframeText: "Wklej to tam, gdzie ma się pojawić kalkulator. Pokazuje aktualne ceny i mieści się w kolumnach od 320 px szerokości.",
    creditText: "Linia z podziękowaniem pod spodem jest mile widziana, ale niewymagana:",
    frameTitle: "Kalkulator Telegram Stars",
    previewHeading: "Podgląd",
    componentHeading: "Opcja 2: komponent web",
    componentText: "Hostowany u Ciebie i w pełni stylowalny: skrypt działa na Twojej stronie, nie renderuje linków i nie wysyła zapytań.",
    themeText: "Dopasuj do swojego motywu za pomocą zmiennych CSS:",
    faq: [
      { q: "Czy osadzanie jest darmowe?", a: "Tak, na każdej stronie, także komercyjnej." },
      { q: "Czy osadzony kalkulator śledzi odwiedzających?", a: "Komponent web nie ustawia ciasteczek i nie wysyła żadnych zapytań sieciowych. Iframe to strona giftclub.app, która liczy odwiedziny przez Google Analytics; jeśli nie chcesz żadnych zapytań do stron trzecich, użyj komponentu web." },
      { q: "Jakie języki obsługuje?", a: "Komponent web mówi po angielsku, rosyjsku, ukraińsku, hiszpańsku, polsku, włosku, turecku, niemiecku i francusku." },
    ],
  },

  demo: {
    title: "Demo widżetu kalkulatora Telegram Stars",
    description: "Demo na żywo komponentu web <telegram-stars-calculator>.",
    h1: "Demo widżetu",
    text: (brand) => `Element <code>&lt;telegram-stars-calculator&gt;</code> uruchomiony z tego repozytorium. Pełny kalkulator z wszystkimi pakietami w tabeli jest na ${brand}.`,
  },
};
