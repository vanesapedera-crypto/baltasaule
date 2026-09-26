const eur = new Intl.NumberFormat("lv-LV", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

/** 100 → "100 €", 9.5 → "9,50 €" */
export function formatPrice(value: number) {
  return Number.isInteger(value)
    ? eur.format(value)
    : new Intl.NumberFormat("lv-LV", { style: "currency", currency: "EUR", minimumFractionDigits: 2 }).format(value);
}
