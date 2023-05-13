import ApiBase from "../app/ApiBase";
import { setSliders } from "./SliderSlice";

export const sliderApi = ApiBase.injectEndpoints({
  endpoints: (builder) => ({
    getSlider: builder.query({
      query: () => ({
        url: `/api/ev1/GetSlider`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(setSliders(res));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetSliderQuery } = sliderApi;
