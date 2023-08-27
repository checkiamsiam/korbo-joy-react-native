import { showMessage } from "react-native-flash-message";
import {
  removeLoadingScreen,
  setLoadingScreen,
} from "../Action/ActionSheetSlice";
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
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          dispatch(setLoadingScreen());
          await queryFulfilled;
          dispatch(removeLoadingScreen());
        } catch (err) {
          dispatch(removeLoadingScreen());
          showMessage({
            message: "There is an server side error!",
            type: "danger",
          });
        }
      },
    }),
  }),
});

export const { usePlaceOrderMutation } = orderApi;
