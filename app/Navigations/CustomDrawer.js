import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, FONTS, IMAGES } from "../constants/theme";

const CustomDrawer = ({ navigation }) => {
  const navItem = [
    {
      icon: "home",
      name: "Home",
      navigate: "DrawerNavigation",
    },
    {
      icon: "layers",
      name: "Products",
      navigate: "Products",
    },
    {
      icon: "grid",
      name: "Components",
      navigate: "Components",
    },
    {
      icon: "list",
      name: "Featured",
      navigate: "Featured",
    },
    {
      icon: "heart",
      name: "Wishlist",
      navigate: "Wishlist",
    },
    {
      icon: "repeat",
      name: "Orders",
      navigate: "Orders",
    },
    {
      icon: "shopping-cart",
      name: "My Cart",
      navigate: "Cart",
    },
    {
      icon: "user",
      name: "Profile",
      navigate: "Account",
    },
    {
      icon: "log-out",
      name: "Logout",
      navigate: "Onboarding",
    },
  ];

  return (
    <>
      <View style={{ flex: 1, backgroundColor: COLORS.white, paddingTop: StatusBar.currentHeight }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.borderColor,
            marginBottom: 10,
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              marginRight: 10,
              borderRadius: 50,
            }}
            source={IMAGES.user}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ ...FONTS.h6, color: COLORS.title, top: 2 }}>Olivia Johanson</Text>
            <Text style={{ ...FONTS.font, color: "rgba(0,0,0,.6)" }}>oliviajon@mail.com</Text>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          {navItem.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  data.navigate === "Cart" || data.navigate === "Account"
                    ? navigation.navigate("BottomNavigation", {
                        screen: data.navigate,
                      })
                    : data.navigate && navigation.navigate(data.navigate);
                  navigation.closeDrawer();
                }}
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 20,
                  paddingVertical: 12,
                }}
              >
                <View style={{ marginRight: 15 }}>
                  <FeatherIcon name={data.icon} color={"rgba(0,0,0,.3)"} size={20} />
                </View>
                <Text
                  style={{
                    ...FONTS.font,
                    ...FONTS.fontBold,
                    color: COLORS.title,
                    opacity: 0.8,
                    flex: 1,
                  }}
                >
                  {data.name}
                </Text>
                <FeatherIcon size={16} color={COLORS.text} name="chevron-right" />
              </TouchableOpacity>
            );
          })}
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 30,
            marginTop: 10,
          }}
        >
          <Text style={{ ...FONTS.fontLg, color: COLORS.title, marginBottom: 6 }}>Wedo Fashion Store</Text>
          <Text style={{ ...FONTS.font, color: "rgba(0,0,0,.5)" }}>App Version 1.0</Text>
        </View>
      </View>
    </>
  );
};

export default CustomDrawer;
