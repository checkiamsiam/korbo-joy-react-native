import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import BottomNavigation from './BottomNavigation';

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
