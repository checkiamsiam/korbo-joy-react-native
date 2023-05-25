import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

const ShopItem = ({ item, handleLike }) => {
  const navigation = useNavigation();
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("ProductDetail")}
      style={{
        width: 200,
        marginRight: 20,
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.white,
          elevation: 10,
          borderRadius: SIZES.radius,
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
          }}
          onPress={() => handleLike(item.id)}
        >
          {item.isLike ? (
            <FontAwesome name="heart" color={COLORS.primary} size={22} />
          ) : (
            <FontAwesome name="heart-o" color={COLORS.white} size={22} />
          )}
        </TouchableOpacity>
        <Image
          style={{
            width: "100%",
            height: 250,
            borderRadius: SIZES.radius,
          }}
          source={item.image}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 15,
        }}
      >
        <Text style={{ ...FONTS.h5, marginBottom: 6 }}>{item.title}</Text>
        <Text style={{ ...FONTS.fontXs, color: COLORS.primary }}>{item.category}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ ...FONTS.h5, color: COLORS.secondary, marginRight: 10 }}>{item.price}</Text>
            <Text style={{ ...FONTS.font, top: 3 }}>{item.oldPrice}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <FontAwesome name="star" color="#FFA800" size={16} />
            <Text
              style={{
                ...FONTS.font,
                color: COLORS.title,
                ...FONTS.fontBold,
                marginLeft: 4,
              }}
            >
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShopItem;
