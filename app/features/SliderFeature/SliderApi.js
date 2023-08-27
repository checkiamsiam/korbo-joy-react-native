import { showMessage } from "react-native-flash-message";
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
          dispatch(setSliders(res.data));
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

export const { useGetSliderQuery } = sliderApi;
