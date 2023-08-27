import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendors: [],
  vendorsWiseProducts: [],
};

const vendorSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    setVendors(state, { payload }) {
      state.vendors = payload;
    },
    setVendorsWiseProducts(state, { payload }) {
      state.vendorsWiseProducts = payload;
    },
  },
});

const vendorReducer = vendorSlice.reducer;

export const { setVendors, setVendorsWiseProducts } = vendorSlice.actions;

export default vendorReducer;
