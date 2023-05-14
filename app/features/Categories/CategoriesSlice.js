import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeCategories: [],
  allCategories: [],
  categoryWiseProducts: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, { payload }) {
      state.allCategories = payload;
      const homeCategories = payload.slice(0, 7);
      homeCategories.push({ name: "More" });
      state.homeCategories = homeCategories;
    },
    setSelectedCategoryProducts(state, { payload }) {
      state.categoryWiseProducts = payload;
    },
  },
});

const categoriesReducer = categoriesSlice.reducer;

export const { setCategories,  setSelectedCategoryProducts } = categoriesSlice.actions;

export default categoriesReducer;
