import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../Screens/Home/DummyData";

const initialState = {
  vendors: ProductData,
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
