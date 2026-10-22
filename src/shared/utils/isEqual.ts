/**
 * Утилита для сравнения 2 ключей.
 */
export const isEqual = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);
