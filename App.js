import React from "react";
import { StatusBar } from "react-native";
import FlashMessage from "react-native-flash-message";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./app/Navigations/Route";
import ActionSheets from "./app/components/ActionSheets";
import FontProvider from "./app/components/FontsProvider";
import Loading from "./app/components/Loading";
import NetworkConnectivity from "./app/components/NetworkConnectivity";
import { COLORS } from "./app/constants/theme";
import { persistor, store } from "./app/features/app/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FontProvider>
          <SafeAreaProvider>
            <StatusBar translucent backgroundColor={COLORS.primaryLight} barStyle="dark-content" />
            <NetworkConnectivity>
              <Routes />
            </NetworkConnectivity>
            <FlashMessage style={{ paddingTop: 30 }} position="top" />
            <ActionSheets />
            <Loading />
          </SafeAreaProvider>
        </FontProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
