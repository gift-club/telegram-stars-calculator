# Telegram Stars calculator

What any number of **Telegram Stars** costs on **Fragment** and in the **App Store** in 18 countries. Zero-dependency JavaScript for Node.js and the browser, plus a drop-in `<telegram-stars-calculator>` web component.

**Docs:** https://gift-club.github.io/telegram-stars-calculator/ · [Widget demo](https://gift-club.github.io/telegram-stars-calculator/demo/) · [Embed on your site](https://gift-club.github.io/telegram-stars-calculator/embed/)

```bash
npm install @gift-club/telegram-stars-calculator
```

```js
import { compare } from "@gift-club/telegram-stars-calculator";

const r = compare(1000, "us");
r.fragment.usd;    // 15
r.appStore.price;  // 19.99
r.appStore.packs;  // [{ stars: 1000, count: 1 }]
r.saving;          // 0.2496 → Fragment is about 25% cheaper per Star
```

| Stars | Fragment | App Store (US) |
| ---: | ---: | ---: |
| 100 | $1.50 | $1.99 |
| 500 | $7.50 | $9.99 |
| 1,000 | $15.00 | $19.99 |
| 2,500 | $37.50 | $50.90 |

## API

| Function | Returns |
| --- | --- |
| `compare(stars, store = "us")` | Both prices, the App Store packs to buy and Fragment's saving per Star |
| `appStorePlan(stars, store = "us")` | The fewest App Store packs that make at least `stars`, and their total in the store's currency |
| `fragmentPlan(stars, currency = "USD")` | Fragment's price in dollars and, where the snapshot has a rate, in `currency` |
| `starsToUsd(stars)` / `usdToStars(usd)` | Conversion at Fragment's flat rate |
| `STORES`, `APP_STORES`, `FRAGMENT_USD_PER_STAR`, `USD_RATES` | The dated price snapshot itself |

Countries: Brazil, Denmark, Finland, France, Germany, India, Indonesia, Italy, Kazakhstan, Mexico, Norway, Poland, russia, Saudi Arabia, Spain, Sweden, Türkiye, United States. Full reference: [API docs](https://gift-club.github.io/telegram-stars-calculator/api/).

## Web component

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@gift-club/telegram-stars-calculator@1.0.0/src/widget.js"></script>
<telegram-stars-calculator lang="en" store="us" stars="1000"></telegram-stars-calculator>
```

Nine languages (`en ru uk es pl it tr de fr`), themeable with CSS variables (`--tsc-bg`, `--tsc-ink`, `--tsc-muted`, `--tsc-line`, `--tsc-accent`). It renders no links and makes no network requests.

## Where the prices come from

A dated snapshot of the [Telegram Gifts & Stars Dataset](https://gift-club.github.io/telegram-gifts-dataset/stars-prices/): each App Store price is what Apple printed on Telegram's listing in that country, in that country's currency. Fragment charges a flat $0.015 per Star from 50 Stars. Google Play publishes no public price list, so it is not covered. Update the package for newer prices.

## Development

```bash
npm test                  # node:test, no dependencies
node scripts/build-site.mjs  # rebuilds the docs in docs/
```

## Licence

MIT. Made by [Gift Club](https://giftclub.app/), the Telegram Mini App with gift boxes and games. More: [Telegram Gifts & Stars Dataset](https://github.com/gift-club/telegram-gifts-dataset) · [Provably fair verifier](https://github.com/gift-club/provably-fair-verifier)
