import { showMessage } from "react-native-flash-message";
import ApiBase from "../app/ApiBase";
import { setCart } from "./CartSlice";

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
          const res = await queryFulfilled;
          dispatch(setCart(res.data.data));
        } catch (err) {
          console.log(err);
          showMessage({
            message: "There is an server side error!",
            type: "danger",
          });
        }
      },
      providesTags: ["cart"],
    }),
  }),
});

export const { useAddToCartMutation, useGetUserCartQuery } = cartApi;
