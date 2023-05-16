import { showMessage } from "react-native-flash-message";
import { removeLoadingScreen, setLoadingScreen } from "../ActionSheets/ActionSheetSlice";
import ApiBase from "../app/ApiBase";
import { setCategories, setSelectedCategoryProducts } from "./CategoriesSlice";

export const categoryAPI = ApiBase.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: `/api/ev1/getCategoryData`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(setCategories(res.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getCategoryProduct: builder.query({
      query: (id) => ({
        url: `/api/ev1/categoryAllProduct/${id}`,
        method: "GET",
      }),

      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          dispatch(setLoadingScreen());
          const res = await queryFulfilled;
          dispatch(setSelectedCategoryProducts(res?.data[0].products));
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

export const { useGetCategoriesQuery, useGetCategoryProductQuery } = categoryAPI;
