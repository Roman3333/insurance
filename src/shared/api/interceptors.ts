import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { getContentTypeHeader, getContentTypeFormDataHeader } from './helper';

// Для запросов без авторизации
export const axiosClassic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: getContentTypeHeader(),
});

// Для запросов с авторизацией
export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: getContentTypeFormDataHeader(),
});

instance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// export const interceptor = (logout: any) => {
//   instance.interceptors.request.use((config) => {
//     const accessToken = Cookies.get('accessToken');

//     if (config.headers && accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     return config;
//   });

//   instance.interceptors.response.use(
//     (config) => config,
//     async (error) => {
//       const originalRequest = error.config;

//       if (error.response?.status === 401 && !originalRequest._isRetry) {
//         originalRequest._isRetry = true;

//         try {
//           await AuthService.refreshToken();

//           return instance(originalRequest);
//         } catch (error) {
//           if (error instanceof AxiosError && error.response?.status === 429) {
//             return instance(originalRequest);
//           }

//           logout();
//         }
//       }

//       return Promise.reject(error);
//     },
//   );
// };
