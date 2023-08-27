import { showMessage } from "react-native-flash-message";
import ApiBase from "../app/ApiBase";
import { setFlashSaleProducts } from "./FlashSaleSlice";

export const flashSaleApi = ApiBase.injectEndpoints({
  endpoints: (builder) => ({
    getFlashSalePd: builder.query({
      query: () => ({
        url: `/api/ev1/getFlashSalesProduct`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(setFlashSaleProducts(res.data));
        } catch (err) {
          console.log(err);
          showMessage({
            message: "There is an server side error!",
            type: "danger",
          });
        }
      },
    }),
  }),
});

export const { useGetFlashSalePdQuery } = flashSaleApi;
