import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCategories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, { payload }) {
      state.allCategories = payload;
    },
  },
});

const categoriesReducer = categoriesSlice.reducer;

export const { setCategories } = categoriesSlice.actions;

export const selectHomeCategories = createSelector(
  (state) => state.categories,
  (categories) => {
    const homeCategories = categories.allCategories.slice(0, 7);
    homeCategories.push({ name: "More" });
    return homeCategories;
  }
);

export default categoriesReducer;
