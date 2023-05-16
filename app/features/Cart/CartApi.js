import { removeLoadingScreen, setLoadingScreen } from "../ActionSheets/ActionSheetSlice";
import ApiBase from "../app/ApiBase";

export const cartApi = ApiBase.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (body) => ({
        url: `/api/ev1/AddToShoppingCart`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["cart"],
    }),
    getUserCart: builder.query({
      query: (id) => ({
        url: `/api/ev1/GetInformationSingle/cart&userId=${id}`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch, getState }) {
        try {
          dispatch(setLoadingScreen());
          await queryFulfilled;
          dispatch(removeLoadingScreen());
        } catch (err) {
          console.log(err);
        }
      },
      providesTags: ["cart"],
    }),
  }),
});

export const { useAddToCartMutation, useGetUserCartQuery } = cartApi;