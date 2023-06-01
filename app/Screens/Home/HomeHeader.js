import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";

const HomeHeader = () => {
  const navigation = useNavigation();
  const { cart } = useSelector((state) => state.cart);
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 45,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.borderColor,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          icon={() => (
            <View
              style={{
                borderWidth: 1,
                borderColor: COLORS.borderColor,
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <AntDesign name="menu-fold" size={17} color={COLORS.title} />
            </View>
          )}
          size={25}
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          icon={() => <FeatherIcon color={COLORS.title} size={20} name="search" />}
          size={25}
          onPress={() => navigation.navigate("Search")}
        />
        {/* <IconButton
        icon={() => <FeatherIcon color={COLORS.title} size={20} name="heart" />}
        size={25}
        onPress={() => navigation.navigate("Wishlist")}
      /> */}
        <IconButton
          onPress={() => navigation.navigate("Cart")}
          icon={() => (
            <View>
              <FeatherIcon color={COLORS.title} size={20} name="shopping-cart" />
              {cart.length > 0 && (
                <View
                  style={{
                    height: 14,
                    width: 14,
                    borderRadius: 14,
                    backgroundColor: COLORS.primary,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: -4,
                    right: -6,
                  }}
                >
                  <Text style={{ ...FONTS.fontXs, fontSize: 10, color: COLORS.white }}>{cart.length}</Text>
                </View>
              )}
            </View>
          )}
          size={25}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
