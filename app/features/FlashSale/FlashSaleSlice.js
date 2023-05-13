import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const flashSaleSlice = createSlice({
  name: "flashSale",
  initialState,
  reducers: {
    setFlashSaleProducts(state, { payload }) {
      state.products = payload;
    },
  },
});

const flashSaleReducer = flashSaleSlice.reducer;

export const { setFlashSaleProducts } = flashSaleSlice.actions;

export default flashSaleReducer;
