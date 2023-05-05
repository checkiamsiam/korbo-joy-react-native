import React from "react";
import FlashMessage from "react-native-flash-message";
import "react-native-gesture-handler";
import Routes from "./app/Navigations/Route";
import FontProvider from "./app/components/FontsProvider";

const App = () => {
  return (
    <FontProvider>
      <Routes />
      <FlashMessage position="top" />
    </FontProvider>
  );
};

export default App;
