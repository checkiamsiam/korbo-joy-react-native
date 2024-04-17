import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://korbo-joy-backend-sequelize-orm.vercel.app/",
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
  tagTypes: ["cart"],
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export default ApiBase;
