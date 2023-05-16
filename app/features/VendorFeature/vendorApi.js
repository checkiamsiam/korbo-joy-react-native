import { showMessage } from "react-native-flash-message";
import ApiBase from "../app/ApiBase";

export const vendorsApi = ApiBase.injectEndpoints({
  endpoints: (builder) => ({
    getVendors: builder.query({
      query: () => ({
        url: `/api/ev1/getFlashSalesProduct`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
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

export const { useGetVendorsQuery } = vendorsApi;
