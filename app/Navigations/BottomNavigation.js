import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useSelector } from "react-redux";
import Profile from "../Screens/Account/Profile";
import Cart from "../Screens/Cart/Cart";
import Categories from "../Screens/Categories/Categories";
import MainHome from "../Screens/Home/MainHome";
import protectedScreen from "../components/ProtectedScreen";
import CustomBottomNavigation from "./CustomBottomNavigation";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
      tabBar={(props) => <CustomBottomNavigation {...props} />}
    >
      <Tab.Screen name="Home" component={MainHome} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Cart" component={protectedScreen(Cart, token)} />
      <Tab.Screen name="Account" component={protectedScreen(Profile, token)} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
