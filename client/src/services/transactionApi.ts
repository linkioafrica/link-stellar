import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../api';

export const transactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery,
  endpoints: (builder) => ({
    buy: builder.mutation({
      query: (credentials) => ({
        url: '/transactions/buy-ngnc',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    sell: builder.mutation({
      query: (credentials) => ({
        url: '/transactions/sell-ngnc',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    buyRamp: builder.mutation({
      query: (credentials) => ({
        url: '/transactions/buy-ramp',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    sellRamp: builder.mutation({
      query: (credentials) => ({
        url: '/transactions/sell-ramp',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    verifyLinkTag: builder.query({
      query: (linkTag) => ({
        url: `/transactions/verify-link-tag?tag=${linkTag}`,
        method: 'GET',
      }),
    }),
    customerKYC: builder.mutation({
      query: (credentials) => ({
        url: `/transactions/customer-kyc`,
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useBuyMutation,
  useBuyRampMutation,
  useSellRampMutation,
  useSellMutation,
  useVerifyLinkTagQuery,
  useCustomerKYCMutation,
} = transactionApi;
