import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deliveryDetails: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setDeliveryDetails(state, { payload }) {
      state.deliveryDetails = payload;
    },
  },
});

const orderReducer = orderSlice.reducer;

export const { setDeliveryDetails } = orderSlice.actions;

export default orderReducer;
