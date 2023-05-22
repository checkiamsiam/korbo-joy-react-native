import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendors: [],
};

const vendorSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    setVendors(state, { payload }) {
      state.vendors = payload;
    },
  },
});

const vendorReducer = vendorSlice.reducer;

export const { setVendors } = vendorSlice.actions;

export default vendorReducer;
