export function formatPrice(number) {
  return new Intl.NumberFormat().format(number);
}
