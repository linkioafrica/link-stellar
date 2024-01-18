import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const devUrl = 'http://localhost:5505';
export const prodUrl = 'https://api.ngnc.online';
export const linkApi = 'https://lobster-app-whutt.ondigitalocean.app';
export const url3 = 'https://jellyfish-app-wn3tf.ondigitalocean.app/api';

export const baseQuery = fetchBaseQuery({
  baseUrl: prodUrl,
  // baseUrl: devUrl,
  credentials: 'include',
  prepareHeaders: (headers, { getState }: any) => {
    const secKey = getState().launch.secKey;
    if (secKey) {
      headers.set('ngnc-sec-key', secKey);
    }
    return headers;
  },
});
