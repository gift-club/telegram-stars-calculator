export declare const FRAGMENT_USD_PER_STAR: number;
export declare const FRAGMENT_MIN_STARS: number;
export declare const FRAGMENT_CHECKED: string;
export declare const CREATOR_USD_PER_STAR: number;
export declare const USD_RATES: Record<string, number>;
export declare const USD_RATES_CHECKED: string;
export declare const APP_STORES: Record<string, { currency: string; checked: string; source: string; packs: [stars: number, price: number][] }>;
export declare const MAX_STARS: number;
export declare const STORES: string[];

export interface AppStorePlan {
  store: string;
  currency: string;
  /** Total in the store's currency. */
  price: number;
  /** Stars received: at least the amount asked for, since packs come in fixed sizes. */
  stars: number;
  packs: { stars: number; count: number }[];
}

export interface FragmentPlan {
  stars: number;
  usd: number;
  currency: string;
  /** The price in `currency` at the snapshot rate, or null when there is no rate for it. */
  local: number | null;
}

export declare function appStorePlan(stars: number, store?: string): AppStorePlan;
export declare function fragmentPlan(stars: number, currency?: string): FragmentPlan;
export declare function starsToUsd(stars: number): number;
export declare function usdToStars(usd: number): number;
export declare function compare(
  stars: number,
  store?: string,
): { stars: number; appStore: AppStorePlan; fragment: FragmentPlan; saving: number | null };
