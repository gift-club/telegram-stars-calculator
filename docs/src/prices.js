// Telegram Stars prices: a dated snapshot of the Telegram Gifts & Stars Dataset
// (https://gift-club.github.io/telegram-gifts-dataset/stars-prices/). Each App Store price is what Apple
// printed on Telegram's listing in that country, in that currency, on the store's `checked` date.

/** Fragment (fragment.com/stars/buy) sells any amount from FRAGMENT_MIN_STARS at a flat dollar rate. */
export const FRAGMENT_USD_PER_STAR = 0.015;
export const FRAGMENT_MIN_STARS = 50;
export const FRAGMENT_CHECKED = "2026-10-14";

/** What a Star earned by a channel or bot pays out (telegram.org/tos/content-creator-rewards). */
export const CREATOR_USD_PER_STAR = 0.013;

/** Local currency per US dollar, read 2026-10-15 (Bank of russia and ECB reference rates). */
export const USD_RATES = {"USD":1,"RUB":83.9497,"IDR":17930.001196,"BRL":5.057013,"MXN":18.522127,"EUR":0.89222,"INR":95.057816,"DKK":6.681499,"KZT":448.449252,"NOK":9.535697,"PLN":3.904201,"SAR":3.749998,"SEK":9.983731,"TRY":49.323858};
export const USD_RATES_CHECKED = "2026-10-15";

/** App Store Stars packs by storefront (ISO country code): [stars, price in the store currency]. */
export const APP_STORES = {
  "br": {
    "currency": "BRL",
    "checked": "2026-10-15",
    "source": "https://apps.apple.com/br/app/telegram-messenger/id686449807",
    "packs": [
      [100, 12.9],
      [150, 18.99],
      [250, 31.99],
      [350, 44.5],
      [500, 64.9],
      [750, 94.99],
      [1000, 127.9]
    ]
  },
  "dk": {
    "currency": "DKK",
    "checked": "2026-10-30",
    "source": "https://apps.apple.com/dk/app/telegram-messenger/id686449807",
    "packs": [
      [100, 17],
      [150, 25],
      [250, 42],
      [350, 58],
      [500, 83],
      [750, 125],
      [1000, 169],
      [2500, 415]
    ]
  },
  "fi": {
    "currency": "EUR",
    "checked": "2026-10-30",
    "source": "https://apps.apple.com/fi/app/telegram-messenger/id686449807",
    "packs": [
      [100, 2.19],
      [150, 3.29],
      [250, 5.49],
      [350, 7.69],
      [500, 10.99],
      [750, 16.49],
      [1000, 21.99]
    ]
  },
  "fr": {
    "currency": "EUR",
    "checked": "2026-10-30",
    "source": "https://apps.apple.com/fr/app/telegram-messenger/id686449807",
    "packs": [
      [100, 2.19],
      [150, 3.19],
      [250, 5.39],
      [350, 7.49],
      [500, 10.9],
      [750, 15.99],
      [1000, 21.49],
      [2500, 53.9]
    ]
  },
  "de": {
    "currency": "EUR",
    "checked": "2026-10-30",
    "source": "https://apps.apple.com/de/app/telegram-messenger/id686449807",
    "packs": [
      [100, 2.09],
      [150, 3.19],
      [250, 5.29],
      [350, 7.39],
      [500, 10.9],
      [750, 15.99],
      [1000, 20.99],
      [2500, 52.99]
    ]
  },
  "in": {
    "currency": "INR",
    "checked": "2026-10-15",
    "source": "https://apps.apple.com/in/app/telegram-messenger/id686449807",
    "packs": [
      [100, 205],
      [150, 305],
      [250, 509],
      [350, 709],
      [500, 1019],
      [750, 1549],
      [1000, 2049]
    ]
  },
  "id": {
    "currency": "IDR",
    "checked": "2026-10-15",
    "source": "https://apps.apple.com/id/app/telegram-messenger/id686449807",
    "packs": [
      [100, 37500],
      [150, 56000],
      [250, 94000],
      [500, 187000],
      [750, 280000],
      [1000, 375000]
    ]
  },
  "it": {
    "currency": "EUR",
    "checked": "2026-10-19",
    "source": "https://apps.apple.com/it/app/telegram-messenger/id686449807",
    "packs": [
      [100, 2.19],
      [150, 3.29],
      [250, 5.39],
      [350, 7.59],
      [500, 10.9],
      [750, 16.49],
      [1000, 21.9]
    ]
  },
  "kz": {
    "currency": "KZT",
    "checked": "2026-10-30",
    "source": "https://apps.apple.com/kz/app/telegram-messenger/id686449807",
    "packs": [
      [100, 1190],
      [150, 1750],
      [250, 2900],
      [350, 4100],
      [500, 5890],
      [1000, 11790]
    ]
  },
  "mx": {
    "currency": "MXN",
    "checked": "2026-10-15",
    "source": "https://apps.apple.com/mx/app/telegram-messenger/id686449807",
    "packs": [
      [100, 48],
      [150, 73],
      [250, 119],
      [350, 169],
      [500, 239],
      [750, 359],
      [1000, 479]
    ]
  },
  "no": {
    "currency": "NOK",
    "checked": "2026-10-30",
    "source": "https://apps.apple.com/no/app/telegram-messenger/id686449807",
    "packs": [
      [100, 27],
      [150, 40],
      [250, 67],
      [350, 94],
      [500, 135],
      [750, 199],
      [1000, 269],
      [2500, 669]
    ]
  },
  "pl": {
    "currency": "PLN",
    "checked": "2026-10-15",
    "source": "https://apps.apple.com/pl/app/telegram-messenger/id686449807",
    "packs": [
      [100, 9.49],
      [150, 13.99],
      [250, 23.49],
      [500, 46.99],
      [750, 70.99],
      [1000, 93.99]
    ]
  },
  "ru": {
    "currency": "RUB",
    "checked": "2026-10-15",
    "source": "https://apps.apple.com/ru/app/telegram-messenger/id686449807",
    "packs": [
      [100, 209],
      [150, 319],
      [250, 529],
      [500, 1060]
    ]
  },
  "sa": {
    "currency": "SAR",
    "checked": "2026-10-30",
    "source": "https://apps.apple.com/sa/app/telegram-messenger/id686449807",
    "packs": [
      [100, 8.99],
      [150, 12.99],
      [250, 21.99],
      [350, 30.49],
      [500, 43.49],
      [1000, 86.99],
      [1500, 129],
      [2500, 219]
    ]
  },
  "es": {
    "currency": "EUR",
    "checked": "2026-10-15",
    "source": "https://apps.apple.com/es/app/telegram-messenger/id686449807",
    "packs": [
      [100, 2.19],
      [150, 3.19],
      [250, 5.39],
      [350, 7.59],
      [500, 10.9],
      [750, 15.99],
      [1000, 21.49]
    ]
  },
  "se": {
    "currency": "SEK",
    "checked": "2026-10-30",
    "source": "https://apps.apple.com/se/app/telegram-messenger/id686449807",
    "packs": [
      [100, 25],
      [250, 62],
      [500, 125],
      [750, 189],
      [1000, 249],
      [2500, 619]
    ]
  },
  "tr": {
    "currency": "TRY",
    "checked": "2026-10-15",
    "source": "https://apps.apple.com/tr/app/telegram-messenger/id686449807",
    "packs": [
      [100, 99.99],
      [150, 149],
      [250, 249],
      [350, 349],
      [500, 499],
      [750, 749],
      [1000, 999]
    ]
  },
  "us": {
    "currency": "USD",
    "checked": "2026-10-14",
    "source": "https://apps.apple.com/us/app/telegram-messenger/id686449807",
    "packs": [
      [100, 1.99],
      [250, 5.09],
      [500, 9.99],
      [750, 14.99],
      [1000, 19.99],
      [1500, 29.99],
      [2500, 50.9]
    ]
  }
};
