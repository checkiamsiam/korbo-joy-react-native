import { createSlice } from "@reduxjs/toolkit";
import { SuggestData } from "../../Screens/Home/DummyData";

const initialState = {
  products: SuggestData,
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
