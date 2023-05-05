import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../Counter/Counter";
import ApiBase from "./ApiBase";

const rootReducer = combineReducers({
  [ApiBase.reducerPath]: ApiBase.reducer,
  counter: counterReducer,
});

export default rootReducer;
