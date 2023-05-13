import { createSlice } from "@reduxjs/toolkit";
import { bannerData } from "../../Screens/Home/DummyData";

const initialState = {
  sliders: bannerData,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setSliders(state, { payload }) {
      state.sliders = payload;
    },
  },
});

const sliderReducer = sliderSlice.reducer;

export const { setSliders } = sliderSlice.actions;

export default sliderReducer;
