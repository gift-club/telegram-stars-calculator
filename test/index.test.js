import { test } from "node:test";
import assert from "node:assert/strict";
import { appStorePlan, compare, fragmentPlan, starsToUsd, usdToStars, STORES } from "../src/index.js";

test("prices a listed pack at its listing price", () => {
  assert.equal(appStorePlan(1000, "us").price, 19.99);
  assert.equal(appStorePlan(500, "ru").price, 1060);
  assert.equal(appStorePlan(100, "id").price, 37500);
});

test("rounds an amount below the smallest pack up to it", () => {
  const plan = appStorePlan(50, "ru");
  assert.equal(plan.stars, 100);
  assert.equal(plan.price, 209);
});

test("combines the packs a country lists", () => {
  assert.deepEqual(appStorePlan(1000, "ru"), { store: "ru", currency: "RUB", price: 2120, stars: 1000, packs: [{ stars: 500, count: 2 }] });
  assert.deepEqual(appStorePlan(600, "us").packs, [{ stars: 500, count: 1 }, { stars: 100, count: 1 }]);
  assert.deepEqual(appStorePlan(1200, "us").packs, [{ stars: 1000, count: 1 }, { stars: 100, count: 2 }]);
  assert.equal(appStorePlan(750, "id").price, 280000);
});

test("prices Fragment at a flat $0.015 from 50 Stars", () => {
  assert.ok(Math.abs(fragmentPlan(1000).usd - 15) < 1e-9);
  assert.equal(fragmentPlan(10).stars, 50);
  assert.ok(Math.abs(fragmentPlan(100, "RUB").local - 125.92) < 0.01);
  assert.equal(Math.round(fragmentPlan(100, "IDR").local), 26895);
  assert.ok(Math.abs(fragmentPlan(100, "SEK").local - 14.98) < 0.01);
  assert.equal(fragmentPlan(100, "sek").currency, "SEK");
  assert.equal(fragmentPlan(100, "XYZ").local, null);
  assert.equal(fragmentPlan(100, "constructor").local, null);
});

test("converts both ways", () => {
  assert.equal(starsToUsd(1000), 15);
  assert.equal(usdToStars(15), 1000);
});

test("compares in every country without throwing", () => {
  for (const store of STORES) {
    const r = compare(1000, store);
    assert.ok(r.appStore.price > 0, store);
    assert.ok(r.appStore.stars >= 1000, store);
  }
  assert.throws(() => appStorePlan(100, "zz"), RangeError);
});

test("has a Fragment rate for every App Store country", () => {
  for (const store of STORES) assert.notEqual(compare(1000, store).saving, null, store);
});

test("rejects unknown and prototype store codes with a RangeError", () => {
  for (const bad of ["xx", "constructor", "__proto__", "toString"]) assert.throws(() => appStorePlan(100, bad), RangeError);
});
