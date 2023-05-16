import { showMessage } from "react-native-flash-message";
import ApiBase from "../app/ApiBase";
import { removeFromCart, setCart } from "./CartSlice";

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
        url: `/api/ev1/getShoppingCartInfo/${id}`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch, getState }) {
        try {
          const res = await queryFulfilled;
          dispatch(setCart(res.data));
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
    deleteFromCart: builder.mutation({
      query: (id) => ({
        url: `/api/ev1/deleteShoppingCartInfo/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch, getState }) {
        try {
          dispatch(removeFromCart(query));
        } catch (err) {
          console.log(err);
          showMessage({
            message: "There is an server side error!",
            type: "danger",
          });
        }
      },
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { useAddToCartMutation, useGetUserCartQuery, useDeleteFromCartMutation } = cartApi;
