import ApiBase from "../app/ApiBase";
import { setJustForYouPd } from "./justForYouSlice";

export const justForYou = ApiBase.injectEndpoints({
  endpoints: (builder) => ({
    getJustForYouPd: builder.query({
      query: (limit) => ({
        url: `/api/ev1/recentProduct/${limit}/0`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(setJustForYouPd(res.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetJustForYouPdQuery } = justForYou;
