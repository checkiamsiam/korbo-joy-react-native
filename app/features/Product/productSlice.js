import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetails: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDetailsOfPD(state, { payload }) {
      state.productDetails = payload;
    },
  },
});

const productReducer = productSlice.reducer;

export const { setDetailsOfPD } = productSlice.actions;

export default productReducer;
