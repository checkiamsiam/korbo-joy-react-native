import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 6 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

const counterReducer = counterSlice.reducer;

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterReducer;
