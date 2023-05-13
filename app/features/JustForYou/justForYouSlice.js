import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const justForYouSlice = createSlice({
  name: "justForYou",
  initialState,
  reducers: {
    setJustForYouPd(state, { payload }) {
      state.products = payload;
    },
  },
});

const justForYouReducer = justForYouSlice.reducer;

export const { setJustForYouPd } = justForYouSlice.actions;

export default justForYouReducer;
