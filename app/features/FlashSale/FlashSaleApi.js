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
          dispatch(setFlashSaleProducts(res));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetFlashSalePdQuery } = flashSaleApi;
