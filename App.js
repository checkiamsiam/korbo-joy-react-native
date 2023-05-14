import React from "react";
import FlashMessage from "react-native-flash-message";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./app/Navigations/Route";
import ActionSheets from "./app/components/ActionSheets";
import FontProvider from "./app/components/FontsProvider";
import { persistor, store } from "./app/features/app/store";
import jwt_decode from "jwt-decode";

const App = () => {
  

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FontProvider>
          <SafeAreaProvider>
            <Routes />
            <FlashMessage position="top" />
            <ActionSheets />
          </SafeAreaProvider>
        </FontProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
