import { Currency } from '../api/private/schemas';

export const MAX_WIDTH_LAYOUT = 1240;

export const DEFAULT_CURRENCY_UNIT = '₫';

export const CURRENCY_SYMBOL: Map<'' | Currency, string> = new Map([
  [Currency.Cad, '$'],
  [Currency.Usd, '$'],
  [Currency.Vnd, '₫'],
]);
