import ApiBase from "../app/ApiBase";
import { setCategories } from "./CategoriesSlice";

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
      transformResponse: (res) => res[0],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryProductQuery } =
  categoryAPI;
