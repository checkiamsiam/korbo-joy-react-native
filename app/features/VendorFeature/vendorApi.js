import { showMessage } from "react-native-flash-message";
import ApiBase from "../app/ApiBase";
import { setVendors } from "./vendorSlice";

export const vendorsApi = ApiBase.injectEndpoints({
  endpoints: (builder) => ({
    getVendors: builder.query({
      query: () => ({
        url: `/api/ev1/allOutlet`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(setVendors(res.data));
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
