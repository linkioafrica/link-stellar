import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../api";

type LaunchApi = [];

type RequestObject = {
  key: string;
};

export const launchApi = createApi({
  reducerPath: "launchApi",
  baseQuery,
  endpoints: (builder) => ({
    initiate: builder.mutation<LaunchApi, object>({
      query: (credentials: RequestObject) => ({
        url: "/initiate-widget",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    terminate: builder.mutation({
      query: (credentials) => ({
        url: "/initiate/terminate",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useTerminateMutation, useInitiateMutation } = launchApi;
