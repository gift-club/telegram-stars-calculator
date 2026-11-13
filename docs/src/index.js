// Telegram Stars calculator: what any number of Stars costs on Fragment and in an App Store country.
// Pure functions, no dependencies, no network. Prices come from ./prices.js (a dated snapshot).

import { APP_STORES, FRAGMENT_MIN_STARS, FRAGMENT_USD_PER_STAR, USD_RATES } from "./prices.js";

export * from "./prices.js";

/** Every pack size in the snapshot is a multiple of 50 Stars, so the search runs in 50-Star units. */
const UNIT = 50;

/** The largest amount the calculator prices. */
export const MAX_STARS = 100000;

/** The App Store country codes with prices in the snapshot. */
export const STORES = Object.keys(APP_STORES);

const clamp = (stars) => Math.max(1, Math.min(Math.round(Number(stars) || 0), MAX_STARS));

const storeOf = (store) => {
  const key = String(store).toLowerCase();
  const s = Object.hasOwn(APP_STORES, key) ? APP_STORES[key] : undefined;
  if (!s) throw new RangeError(`Unknown App Store country "${store}". Known: ${STORES.join(", ")}`);
  return s;
};

/**
 * How to buy `stars` in an App Store country: the smallest amount the listed packs can make that is at
 * least `stars`, in the fewest packs (the cheaper mix on a tie).
 * @returns {{ store: string, currency: string, price: number, stars: number, packs: { stars: number, count: number }[] }}
 */
export const appStorePlan = (stars, store = "us") => {
  const s = storeOf(store);
  const packs = s.packs.map(([size, price]) => ({ size: size / UNIT, price }));
  const target = Math.ceil(clamp(stars) / UNIT);
  const limit = target + Math.max(...packs.map((p) => p.size));
  const count = new Array(limit + 1).fill(Infinity);
  const cost = new Array(limit + 1).fill(Infinity);
  const choice = new Array(limit + 1).fill(-1);
  count[0] = 0;
  cost[0] = 0;
  for (let u = 1; u <= limit; u++) {
    packs.forEach((p, i) => {
      if (p.size > u || count[u - p.size] === Infinity) return;
      const n = count[u - p.size] + 1;
      const c = cost[u - p.size] + p.price;
      if (n < count[u] || (n === count[u] && c < cost[u] - 1e-9)) {
        count[u] = n;
        cost[u] = c;
        choice[u] = i;
      }
    });
  }
  let best = target;
  while (count[best] === Infinity) best++;
  const counts = new Map();
  for (let u = best; u > 0; u -= packs[choice[u]].size) {
    const size = packs[choice[u]].size * UNIT;
    counts.set(size, (counts.get(size) ?? 0) + 1);
  }
  return {
    store: String(store).toLowerCase(),
    currency: s.currency,
    price: Math.round(cost[best] * 100) / 100,
    stars: best * UNIT,
    packs: [...counts].map(([size, n]) => ({ stars: size, count: n })).sort((a, b) => b.stars - a.stars),
  };
};

/**
 * Fragment sells any amount from FRAGMENT_MIN_STARS up at a flat dollar rate.
 * Pass a currency ("RUB", "EUR"…) for an estimate at the snapshot's exchange rate; `local` is null when the
 * snapshot has no rate for it.
 * @returns {{ stars: number, usd: number, currency: string, local: number | null }}
 */
export const fragmentPlan = (stars, currency = "USD") => {
  const amount = Math.max(FRAGMENT_MIN_STARS, clamp(stars));
  const usd = amount * FRAGMENT_USD_PER_STAR;
  const code = String(currency).toUpperCase();
  const rate = Object.hasOwn(USD_RATES, code) ? USD_RATES[code] : undefined;
  return { stars: amount, usd, currency: code, local: rate === undefined ? null : usd * rate };
};

/** Stars to US dollars at Fragment's rate (no minimum applied). */
export const starsToUsd = (stars) => Number(stars) * FRAGMENT_USD_PER_STAR;

/** US dollars to Stars at Fragment's rate, rounded down. */
export const usdToStars = (usd) => Math.floor(Number(usd) / FRAGMENT_USD_PER_STAR + 1e-9);

/**
 * Both ways of buying `stars` in one country, and how much less Fragment costs per Star.
 * `saving` is a fraction (0.25 = 25% less per Star on Fragment); it is null when Fragment has no rate for
 * the store's currency.
 */
export const compare = (stars, store = "us") => {
  const appStore = appStorePlan(stars, store);
  const fragment = fragmentPlan(stars, appStore.currency);
  const saving =
    fragment.local === null ? null : 1 - fragment.local / fragment.stars / (appStore.price / appStore.stars);
  return { stars: clamp(stars), appStore, fragment, saving };
};
