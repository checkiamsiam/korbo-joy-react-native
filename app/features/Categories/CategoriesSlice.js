import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeCategories: [],
  allCategories: [],
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
  },
});

const categoriesReducer = categoriesSlice.reducer;

export const { setCategories } = categoriesSlice.actions;

export default categoriesReducer;
