import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import ApiBase from "./ApiBase";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "korbo-joy",
  version: 1,
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gtm) =>
    gtm({
      serializableCheck: false,
    }).concat(ApiBase.middleware),
  devTools: false,
});

export const persistor = persistStore(store);
