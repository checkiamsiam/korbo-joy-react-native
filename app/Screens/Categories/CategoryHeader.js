import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, FONTS } from "../../constants/theme";

const CategoryHeader = () => {
  const navigation = useNavigation();
  const {
    params: { title },
  } = useRoute();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 45,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.borderColor,
      }}
    >
      <IconButton icon={() => <FeatherIcon color={COLORS.title} size={18} name="arrow-left" />} size={25} onPress={() => navigation.goBack()} />
      <Text
        style={{
          ...FONTS.font,
          ...FONTS.fontBold,
          color: COLORS.title,
          flex: 1,
          bottom: 1,
          marginLeft: 5,
        }}
      >
        {title}
      </Text>
      <IconButton icon={() => <FeatherIcon color={COLORS.title} size={20} name="search" />} size={25} onPress={() => navigation.navigate("Search")} />
      <IconButton
        icon={() => <FeatherIcon color={COLORS.title} size={20} name="heart" />}
        size={25}
        onPress={() => navigation.navigate("Wishlist")}
      />
      <IconButton
        onPress={() => navigation.navigate("Cart")}
        icon={() => (
          <View>
            <FeatherIcon color={COLORS.title} size={20} name="shopping-cart" />
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
              <Text style={{ ...FONTS.fontXs, fontSize: 10, color: COLORS.white }}>2</Text>
            </View>
          </View>
        )}
        size={25}
      />
    </View>
  );
};

export default CategoryHeader;
