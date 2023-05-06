import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const ItemCard = (props) => {
  const { title, image, price, oldPrice, rating, category, handleLike, id, isLike, shopBtn, listView, imageSrc } = props;

  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: listView ? 0.1 : 0.06,
        shadowRadius: 5,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductDetail", {
            item: {
              title: title,
              image: imageSrc,
              oldPrice: oldPrice,
              price: price,
            },
            category: "Appliances",
          })
        }
        activeOpacity={0.98}
        style={[
          {
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
            marginBottom: 15,
          },
          listView && {
            flexDirection: "row",
            //elevation:8,
          },
        ]}
      >
        <View>
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
            onPress={() => handleLike(id)}
          >
            {isLike ? <FontAwesome name="heart" color={COLORS.primary} size={20} /> : <FontAwesome name="heart-o" color={COLORS.white} size={20} />}
          </TouchableOpacity>
          <Image
            style={[
              {
                borderRadius: SIZES.radius,
                width: "100%",
                height: 160,
              },
              listView && {
                width: 110,
                height: 130,
              },
            ]}
            source={imageSrc ? { uri: imageSrc } : image}
          />
        </View>
        <View
          style={[
            {
              backgroundColor: COLORS.white,
              shadowColor: "rgba(0,0,0,.5)",
              elevation: 10,
              borderRadius: SIZES.radius,
              position: "relative",
              zIndex: 1,
              paddingHorizontal: 10,
              paddingBottom: 12,
              paddingTop: 15,
              marginTop: -30,
            },
            listView && {
              marginTop: 0,
              flex: 1,
              paddingHorizontal: 20,
              borderRadius: 0,
              elevation: 0,
              paddingTop: 20,
              backgroundColor: "transparent",
            },
          ]}
        >
          <Text
            style={{
              ...FONTS.fontXs,
              color: COLORS.primary,
              ...FONTS.fontBold,
              marginBottom: 3,
            }}
          >
            {category}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              ...FONTS.font,
              color: COLORS.title,
              ...FONTS.fontBold,
              marginBottom: 10,
            }}
          >
            {title}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ ...FONTS.h6, marginRight: 15 }}>{price}</Text>
            <Text
              style={{
                ...FONTS.fontXs,
                marginBottom: 2,
                textDecorationLine: "line-through",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: rating ? 8 : 0,
            }}
          >
            {rating && (
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
                  {rating}
                </Text>
              </View>
            )}
            {shopBtn !== false && (
              <TouchableOpacity style={{ top: -4 }}>
                <Feather name="shopping-cart" color={COLORS.primary} size={24} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;
