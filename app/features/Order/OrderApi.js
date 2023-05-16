import ApiBase from "../app/ApiBase";

export const orderApi = ApiBase.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (body) => ({
        url: `/api/ev1/newShoppingCartOrder`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { usePlaceOrderMutation } = orderApi;
