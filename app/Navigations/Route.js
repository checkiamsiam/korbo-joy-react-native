import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

const Routes = () => {
  return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  );
};
export default Routes;
