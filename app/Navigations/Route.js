import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/Auth/AuthSlice";
import { clearCart } from "../features/Cart/CartSlice";
import verifyToken from "../utils/verifyToken";
import StackNavigator from "./StackNavigator";
const Drawer = createDrawerNavigator();

const Routes = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const checkValidation = async () => {
    await token;
    const isVerify = await verifyToken(token);
    if (!isVerify) {
      dispatch(logout());
      dispatch(clearCart());
    }
  };
  checkValidation();

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default Routes;
