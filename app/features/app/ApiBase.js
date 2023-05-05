import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.github.com/",
  prepareHeaders: (headers, { getState }) => {
    /**
     *
     * pass nessesarry headers here
     * headers.set("authorization", `Bearer ${token}`);
     *
     *
     */

    return headers;
  },
});

const ApiBase = createApi({
  reducerPath: "API",
  tagTypes: [],
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export default ApiBase;
