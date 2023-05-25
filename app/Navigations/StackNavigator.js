import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSelector } from "react-redux";
import AddDeliveryAddress from "../Screens/Account/AddDeliveryAddress";
import Address from "../Screens/Account/Address";
import EditProfile from "../Screens/Account/EditProfile";
import Profile from "../Screens/Account/Profile";
import SignIn from "../Screens/Auth/SignIn";
import SignUp from "../Screens/Auth/SignUp";
import CategoryHome from "../Screens/Categories/CategoryHome";
import Payment from "../Screens/Delivery/Payment";
import Featured from "../Screens/Featured/Featured";
import Filter from "../Screens/Filter/Filter";
import Items from "../Screens/Items/Items";
import Welcome from "../Screens/Onboarding/Welcome";
import Orders from "../Screens/Orders/Orders";
import ProductDetail from "../Screens/Products/ProductDetail";
import Products from "../Screens/Products/Products";
import Search from "../Screens/Search/Search";
import protectedScreen from "../utils/ProtectedScreen";
import DrawerNavigation from "./DrawerNavigation";

const StackComponent = createNativeStackNavigator();

const StackNavigator = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <StackComponent.Navigator
        initialRouteName={"DrawerNavigation"}
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
        }}
      >
        <StackComponent.Screen name={"Welcome"} component={Welcome} />
        <StackComponent.Screen name={"SignUp"} component={SignUp} />
        <StackComponent.Screen name={"SignIn"} component={SignIn} />
        <StackComponent.Screen name={"DrawerNavigation"} component={DrawerNavigation} />
        <StackComponent.Screen name={"CategoryHome"} component={CategoryHome} />
        <StackComponent.Screen name={"Products"} component={Products} />
        <StackComponent.Screen name={"ProductDetail"} component={ProductDetail} />
        <StackComponent.Screen name={"Featured"} component={Featured} />
        <StackComponent.Screen name={"Orders"} component={protectedScreen(Orders, token)} />
        <StackComponent.Screen name={"Profile"} component={protectedScreen(Profile, token)} />
        <StackComponent.Screen name={"EditProfile"} component={protectedScreen(EditProfile, token)} />
        <StackComponent.Screen name={"Address"} component={protectedScreen(Address, token)} />
        <StackComponent.Screen name={"Payment"} component={protectedScreen(Payment, token)} />
        <StackComponent.Screen name={"AddDeliveryAddress"} component={protectedScreen(AddDeliveryAddress, token)} />
        <StackComponent.Screen name={"Filter"} component={Filter} />
        <StackComponent.Screen name={"Items"} component={Items} />
        <StackComponent.Screen name={"Search"} component={Search} />
        {/* <StackComponent.Screen name={"Splash"} component={Splash} /> */}
        {/* <StackComponent.Screen name={"Onboarding"} component={Onboarding} /> */}
        {/* <StackComponent.Screen name={"DeliveryTracking"} component={DeliveryTracking} /> */}
        {/* <StackComponent.Screen name={"Wishlist"} component={Wishlist} /> */}
        {/* <StackComponent.Screen name={"Coupons"} component={Coupons} /> */}
        {/* <StackComponent.Screen name={"Components"} component={Components} /> */}
        {/* <StackComponent.Screen name={"Accordion"} component={AccordionScreen} /> */}
        {/* <StackComponent.Screen name={"ActionSheet"} component={ActionSheet} /> */}
        {/* <StackComponent.Screen name={"ActionModals"} component={ActionModals} /> */}
        {/* <StackComponent.Screen name={"Buttons"} component={Buttons} /> */}
        {/* <StackComponent.Screen name={"Charts"} component={Charts} /> */}
        {/* <StackComponent.Screen name={"Chips"} component={Chips} /> */}
        {/* <StackComponent.Screen name={"CollapseElements"} component={CollapseElements} /> */}
        {/* <StackComponent.Screen name={"DividerElements"} component={DividerElements} /> */}
        {/* <StackComponent.Screen name={"FileUploads"} component={FileUploads} /> */}
        {/* <StackComponent.Screen name={"Inputs"} component={Inputs} /> */}
        {/* <StackComponent.Screen name={"Headers"} component={Headers} /> */}
        {/* <StackComponent.Screen name={"Footers"} component={Footers} /> */}
        {/* <StackComponent.Screen name={"TabStyle1"} component={TabStyle1} /> */}
        {/* <StackComponent.Screen name={"TabStyle2"} component={TabStyle2} /> */}
        {/* <StackComponent.Screen name={"TabStyle3"} component={TabStyle3} /> */}
        {/* <StackComponent.Screen name={"TabStyle4"} component={TabStyle4} /> */}
        {/* <StackComponent.Screen name={"lists"} component={ListScreen} /> */}
        {/* <StackComponent.Screen name={"Paginations"} component={Paginations} /> */}
        {/* <StackComponent.Screen name={"Pricings"} component={Pricings} /> */}
        {/* <StackComponent.Screen name={"Snackbars"} component={Snackbars} /> */}
        {/* <StackComponent.Screen name={"Socials"} component={Socials} /> */}
        {/* <StackComponent.Screen name={"Swipeable"} component={SwipeableScreen} /> */}
        {/* <StackComponent.Screen name={"Tabs"} component={Tabs} /> */}
        {/* <StackComponent.Screen name={"Tables"} component={Tables} /> */}
        {/* <StackComponent.Screen name={"Toggles"} component={Toggles} /> */}
      </StackComponent.Navigator>
    </>
  );
};
export default StackNavigator;
