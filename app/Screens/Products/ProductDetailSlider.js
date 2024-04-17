import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, View } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";

const ProductDetailSlider = ({ images }) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <Swiper
      style={{ height: SIZES.width }}
      dotStyle={{
        height: 10,
        width: 10,
        borderWidth: 2,
        borderColor: COLORS.white,
        borderRadius: 10,
      }}
      activeDotStyle={{
        height: 10,
        width: 10,
        backgroundColor: COLORS.white,
        borderRadius: 10,
      }}
    >
      {images.map((data, index) => {
        return (
          <View key={index}>
            <Image
              source={{ uri: `${data}` }}
              style={{
                width: "100%",
                height: undefined,
                aspectRatio: 1 / 1,
              }}
            />
            <LinearGradient
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
              }}
              colors={["rgba(0,0,0,.3)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"]}
            />
          </View>
        );
      })}
    </Swiper>
  );
};

export default ProductDetailSlider;
