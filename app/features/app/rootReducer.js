import { combineReducers } from "@reduxjs/toolkit";
import actionSheetReducer from "../ActionSheets/ActionSheetSlice";
import categoriesReducer from "../Categories/CategoriesSlice";
import flashSaleReducer from "../FlashSale/FlashSaleSlice";
import justForYouReducer from "../JustForYou/justForYouSlice";
import sliderReducer from "../SliderFeature/SliderSlice";
import ApiBase from "./ApiBase";

const rootReducer = combineReducers({
  [ApiBase.reducerPath]: ApiBase.reducer,
  actionSheet: actionSheetReducer,
  categories: categoriesReducer,
  slider: sliderReducer,
  flashSale: flashSaleReducer,
  justForYou: justForYouReducer,
});

export default rootReducer;
