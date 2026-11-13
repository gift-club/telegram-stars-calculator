// <telegram-stars-calculator> web component. Import once, then use the tag anywhere:
//   <script type="module" src="https://cdn.jsdelivr.net/npm/@gift-club/telegram-stars-calculator/src/widget.js"></script>
//   <telegram-stars-calculator lang="en" store="us" stars="1000"></telegram-stars-calculator>
// Attributes: lang (en ru uk es pl it tr de fr), store (an App Store country code), stars (start amount).
// It renders no link and loads nothing from the network.

import { STORES, compare, APP_STORES, MAX_STARS } from "./index.js";

const TEXT = {
  en: { title: "Telegram Stars calculator", stars: "Stars", store: "App Store country", fragment: "Fragment", appStore: "App Store", perStar: "per Star", plan: "packs", saving: (p) => `Fragment costs ${p} less per Star.`, approx: "estimate at the snapshot rate", read: (d) => `App Store prices read ${d}.` },
  ru: { title: "Калькулятор звёзд Telegram", stars: "Звёзды", store: "Страна App Store", fragment: "Fragment", appStore: "App Store", perStar: "за звезду", plan: "пакеты", saving: (p) => `На Fragment звезда дешевле на ${p}.`, approx: "оценка по курсу снимка", read: (d) => `Цены App Store на ${d}.` },
  uk: { title: "Калькулятор зірок Telegram", stars: "Зірки", store: "Країна App Store", fragment: "Fragment", appStore: "App Store", perStar: "за зірку", plan: "пакети", saving: (p) => `На Fragment зірка дешевша на ${p}.`, approx: "оцінка за курсом знімка", read: (d) => `Ціни App Store станом на ${d}.` },
  es: { title: "Calculadora de Estrellas de Telegram", stars: "Estrellas", store: "País de la App Store", fragment: "Fragment", appStore: "App Store", perStar: "por Estrella", plan: "paquetes", saving: (p) => `En Fragment cada Estrella cuesta un ${p} menos.`, approx: "estimación al tipo de cambio del registro", read: (d) => `Precios de la App Store del ${d}.` },
  pl: { title: "Kalkulator Gwiazdek Telegram", stars: "Gwiazdki", store: "Kraj App Store", fragment: "Fragment", appStore: "App Store", perStar: "za Gwiazdkę", plan: "pakiety", saving: (p) => `Na Fragment Gwiazdka jest tańsza o ${p}.`, approx: "szacunek po kursie z dnia odczytu", read: (d) => `Ceny App Store z ${d}.` },
  it: { title: "Calcolatore di Stelle Telegram", stars: "Stelle", store: "Paese dell'App Store", fragment: "Fragment", appStore: "App Store", perStar: "a Stella", plan: "pacchetti", saving: (p) => `Su Fragment ogni Stella costa il ${p} in meno.`, approx: "stima al cambio della rilevazione", read: (d) => `Prezzi App Store del ${d}.` },
  tr: { title: "Telegram Yıldız hesaplayıcı", stars: "Yıldız", store: "App Store ülkesi", fragment: "Fragment", appStore: "App Store", perStar: "Yıldız başına", plan: "paket", saving: (p) => `Fragment'ta Yıldız başına fiyat ${p} daha düşük.`, approx: "kayıt günündeki kurla tahmin", read: (d) => `App Store fiyatları: ${d}.` },
  de: { title: "Telegram-Sterne-Rechner", stars: "Sterne", store: "App-Store-Land", fragment: "Fragment", appStore: "App Store", perStar: "pro Stern", plan: "Pakete", saving: (p) => `Auf Fragment kostet ein Stern ${p} weniger.`, approx: "Schätzung zum Kurs des Stichtags", read: (d) => `App-Store-Preise vom ${d}.` },
  fr: { title: "Calculateur d’Étoiles Telegram", stars: "Étoiles", store: "Pays de l’App Store", fragment: "Fragment", appStore: "App Store", perStar: "par Étoile", plan: "packs", saving: (p) => `Sur Fragment, l’Étoile coûte ${p} de moins.`, approx: "estimation au taux du relevé", read: (d) => `Prix App Store relevés le ${d}.` },
};

const LOCALE = { uk: "uk-UA" };

const CSS = `
:host{display:block;max-width:480px;font:15px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--tsc-ink,#1b1724)}
.card{border:1px solid var(--tsc-line,#e2dcef);border-radius:14px;padding:16px;background:var(--tsc-bg,#fff)}
h2{font-size:17px;margin:0 0 12px}
label{display:block;font-size:13px;color:var(--tsc-muted,#6b6480);margin:8px 0 4px}
input,select{width:100%;box-sizing:border-box;font:inherit;padding:8px 10px;border:1px solid var(--tsc-line,#e2dcef);border-radius:10px;background:transparent;color:inherit}
.row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}
.stat{border:1px solid var(--tsc-line,#e2dcef);border-radius:10px;padding:10px}
.stat b{display:block;font-size:20px}
.stat small,.note{color:var(--tsc-muted,#6b6480);font-size:12px}
.good{border-color:var(--tsc-accent,#2fa36b)}
p{margin:10px 0 0}
`;

export class TelegramStarsCalculator extends HTMLElement {
  static observedAttributes = ["lang", "store", "stars"];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#render();
  }

  attributeChangedCallback() {
    if (this.isConnected) this.#render();
  }

  get #lang() {
    const l = (this.getAttribute("lang") || document.documentElement.lang || "en").slice(0, 2).toLowerCase();
    return TEXT[l] ? l : "en";
  }

  #render() {
    const lang = this.#lang;
    const t = TEXT[lang];
    const locale = LOCALE[lang] ?? lang;
    const regions = new Intl.DisplayNames([locale], { type: "region" });
    const regionName = (code) => {
      const name = regions.of(code.toUpperCase()) ?? code;
      return code === "ru" ? name.toLocaleLowerCase(locale) : name;
    };
    const store = STORES.includes(this.getAttribute("store")) ? this.getAttribute("store") : "us";
    const start = Number(this.getAttribute("stars")) || 1000;
    const options = [...STORES]
      .sort((a, b) => regionName(a).localeCompare(regionName(b), locale))
      .map((c) => `<option value="${c}"${c === store ? " selected" : ""}>${regionName(c)} (${APP_STORES[c].currency})</option>`)
      .join("");
    this.shadowRoot.innerHTML = `<style>${CSS}</style>
<div class="card" part="card">
<h2>${t.title}</h2>
<label for="s">${t.stars}</label><input id="s" type="number" min="1" max="${MAX_STARS}" step="1" value="${start}" inputmode="numeric">
<label for="c">${t.store}</label><select id="c">${options}</select>
<div class="row"><div class="stat good" id="f"></div><div class="stat" id="a"></div></div>
<p id="v"></p><p class="note" id="n"></p>
</div>`;
    const $ = (id) => this.shadowRoot.getElementById(id);
    const update = () => {
      const r = compare($("s").value, $("c").value);
      const cur = r.appStore.currency;
      const fmt = (v, c, small = false) => {
        const digits = small && v < 1 ? 4 : c === "IDR" || c === "KZT" ? 0 : 2;
        // Set both bounds: older engines throw when the maximum falls below the currency's default minimum.
        return new Intl.NumberFormat(locale, { style: "currency", currency: c, minimumFractionDigits: Math.min(digits, 2), maximumFractionDigits: digits }).format(v);
      };
      const num = (v) => new Intl.NumberFormat(locale).format(v);
      const fragLocal = r.fragment.local ?? r.fragment.usd;
      const fragCur = r.fragment.local === null ? "USD" : cur;
      $("f").innerHTML = `<small>${t.fragment}</small><b>${cur !== "USD" && r.fragment.local !== null ? "≈ " : ""}${fmt(fragLocal, fragCur)}</b><small>${num(r.fragment.stars)} · ${fmt(fragLocal / r.fragment.stars, fragCur, true)} ${t.perStar}</small>`;
      $("a").innerHTML = `<small>${t.appStore} · ${regionName(r.appStore.store)}</small><b>${fmt(r.appStore.price, cur)}</b><small>${r.appStore.packs.map((p) => `${p.count} × ${num(p.stars)}`).join(" + ")} ${t.plan}</small>`;
      $("v").textContent = r.saving !== null && r.saving > 0 ? t.saving(new Intl.NumberFormat(locale, { style: "percent" }).format(r.saving)) : "";
      const d = new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${APP_STORES[r.appStore.store].checked}T00:00:00Z`));
      $("n").textContent = `${t.read(d).replace(/\.\.$/, ".")}${cur !== "USD" && r.fragment.local !== null ? ` Fragment: ${t.approx}.` : ""}`;
    };
    $("s").addEventListener("input", update);
    $("c").addEventListener("change", update);
    update();
  }
}

if (typeof customElements !== "undefined" && !customElements.get("telegram-stars-calculator")) {
  customElements.define("telegram-stars-calculator", TelegramStarsCalculator);
}
