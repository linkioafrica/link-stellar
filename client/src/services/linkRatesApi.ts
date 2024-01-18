import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { linkApi } from "../api";

export const linkRateApi = createApi({
  reducerPath: "linkRateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: linkApi,
  }),
  endpoints: (builder) => ({
    getUsdcNgncRates: builder.query({
      query: () => ({
        url: "/crypto_rates/usdc-ngnc",
        method: "GET",
      }),
    }),
    getNgncUsdcRates: builder.query({
      query: () => ({
        url: "/rates",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetNgncUsdcRatesQuery, useGetUsdcNgncRatesQuery } =
  linkRateApi;
