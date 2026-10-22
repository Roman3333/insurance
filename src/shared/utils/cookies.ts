import Cookies from 'js-cookie';

/**
 * Утилиты для работы с куками.
 */
const cookieOptions = {
  sameSite: 'Strict' as const,
  path: '/',
  expires: 7,
};

export const getCookie = (name: string) => Cookies.get(name);

export const removeCookie = (name: string) => Cookies.remove(name);

export const setCookie = (
  name: string,
  value: string,
  options?: Cookies.CookieAttributes,
) => {
  Cookies.set(name, value, { ...cookieOptions, ...options });
};
