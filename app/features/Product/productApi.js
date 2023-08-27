import ApiBase from "../app/ApiBase";

export const productApi = ApiBase.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetail: builder.query({
      query: (id) => ({
        url: `/api/ev1/singleProductDetails/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => response[0],
    }),
  }),
});

export const { useGetProductDetailQuery } = productApi;
