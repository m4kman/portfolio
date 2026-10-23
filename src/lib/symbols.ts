export const SYMBOLS = ["/", ">", "*", "~", "#", "+", ":", "—", "§", "→", "\\"];

export const symbolFor = (index: number): string =>
  SYMBOLS[index % SYMBOLS.length];
