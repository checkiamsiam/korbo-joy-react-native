import React from "react";
import FlashMessage from "react-native-flash-message";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./app/Navigations/Route";
import FontProvider from "./app/components/FontsProvider";

const App = () => {
  return (
    <FontProvider>
      <SafeAreaProvider>
        {/* <SafeAreaWrapper> */}
        <Routes />
        <FlashMessage position="top" />
        {/* </SafeAreaWrapper> */}
      </SafeAreaProvider>
    </FontProvider>
  );
};

export default App;
