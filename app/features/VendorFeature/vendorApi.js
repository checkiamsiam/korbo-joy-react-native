import { showMessage } from "react-native-flash-message";
import ApiBase from "../app/ApiBase";
import { setVendors, setVendorsWiseProducts } from "./vendorSlice";

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
    getVendorProducts: builder.query({
      query: (id) => ({
        url: `/api/ev1/outletWishProduct/${id}}`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(setVendorsWiseProducts(res.data[0].products));
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

export const { useGetVendorsQuery, useGetVendorProductsQuery } = vendorsApi;
