import React from "react";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";

const CustomStatusBar = () => {
  const { mode } = useSelector((state) => state.theme);
  return (
    <>
      <StatusBar
        translucent
        animated
        backgroundColor={mode === "dark" ? "#333333" : "#F5F5F5"}
        barStyle={mode === "dark" ? "light-content" : "dark-content"}
      />
    </>
  );
};

export default CustomStatusBar;
