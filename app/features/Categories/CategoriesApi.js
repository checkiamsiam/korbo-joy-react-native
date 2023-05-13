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
  }),
});

export const { useGetCategoriesQuery } = categoryAPI;
