import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import BottomNavigation from "./BottomNavigation";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();
const DrawerNavigation = (props) => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomNavigation"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(data) => {
        return <CustomDrawer navigation={data.navigation} />;
      }}
    >
      <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
