import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

const productReducer = productSlice.reducer;

export const {} = productSlice.actions;

export default productReducer;
