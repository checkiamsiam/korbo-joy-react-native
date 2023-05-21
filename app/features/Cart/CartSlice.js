import { createSlice } from "@reduxjs/toolkit";
import { showMessage } from "react-native-flash-message";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, { payload }) {
      state.cart = payload;
    },
    addToCart(state, { payload }) {
      state.cart = payload;
    },

    removeFromCart(state, { payload }) {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    quantityIncrement(state, { payload }) {
      const index = state.cart.findIndex((item) => item.id === payload);
      state.cart[index].qty += 1;
      state.cart[index].totalSalesPrice = state.cart[index].totalSalesPrice + state.cart[index].salePrice;
    },
    quantityDecrement(state, { payload }) {
      const index = state.cart.findIndex((item) => item.id === payload);
      if (state.cart[index].qty > 1) {
        state.cart[index].qty -= 1;
        state.cart[index].totalSalesPrice = state.cart[index].totalSalesPrice - state.cart[index].salePrice;
      } else {
        showMessage({
          message: "Quantity can't be less than 1",
          type: "danger",
        });
      }
    },
    updateCartProduct(state, { payload }) {
      const index = state.cart.findIndex((item) => item.id === payload.id);
      state.cart[index] = payload;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

const cartReducer = cartSlice.reducer;

export const { setCart, clearCart, removeFromCart, quantityDecrement, quantityIncrement } = cartSlice.actions;

export default cartReducer;
