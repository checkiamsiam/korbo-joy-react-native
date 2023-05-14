import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliders: [],
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
