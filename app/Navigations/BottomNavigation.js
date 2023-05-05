import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainHome from '../Screens/Home/MainHome';
import Categories from '../Screens/Categories/Categories';
import Profile from '../Screens/Account/Profile';
import Cart from '../Screens/Cart/Cart';
import CustomBottomNavigation from './CustomBottomNavigation';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}
      tabBar={(props) => <CustomBottomNavigation {...props} />}
    >
      <Tab.Screen name="Home" component={MainHome} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Account" component={Profile} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
