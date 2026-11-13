/** The `<telegram-stars-calculator>` element. Importing this module defines it. */
export declare class TelegramStarsCalculator extends HTMLElement {
  static observedAttributes: string[];
  connectedCallback(): void;
  attributeChangedCallback(): void;
}

declare global {
  interface HTMLElementTagNameMap {
    "telegram-stars-calculator": TelegramStarsCalculator;
  }
}
