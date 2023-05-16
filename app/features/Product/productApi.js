import { showMessage } from "react-native-flash-message";
import { removeLoadingScreen, setLoadingScreen } from "../ActionSheets/ActionSheetSlice";
import ApiBase from "../app/ApiBase";
import { setDetailsOfPD } from "./productSlice";

export const productApi = ApiBase.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetail: builder.query({
      query: (id) => ({
        url: `/api/ev1/singleProductDetails/${id}`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          dispatch(setLoadingScreen());
          const res = await queryFulfilled;
          dispatch(setDetailsOfPD(res.data[0]));
          dispatch(removeLoadingScreen());
        } catch (err) {
          dispatch(removeLoadingScreen());
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

export const { useGetProductDetailQuery } = productApi;
