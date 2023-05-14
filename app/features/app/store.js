import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import ApiBase from "./ApiBase";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "sku-markets",
  version: 1,
  storage: AsyncStorage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gtm) =>
    gtm({
      serializableCheck: false,
    }).concat(ApiBase.middleware),
  devTools: true,
});

export const persistor = persistStore(store);
