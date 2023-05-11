import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, View } from "react-native";
import Swiper from "react-native-swiper";
import { COLORS } from "../../constants/theme";
import { bannerData } from "./DummyData";

const HomeBanner = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: COLORS.borderColor,
      }}
    >
      <Swiper
        autoplay={true}
        autoplayTimeout={6}
        height={"auto"}
        dotColor={"rgba(255,255,255,.3)"}
        activeDotColor={COLORS.white}
        paginationStyle={{ bottom: 10 }}
      >
        {bannerData.map((data, index) => {
          return (
            <View key={index}>
              <LinearGradient
                colors={["transparent", "transparent", "rgba(0,0,0,.4)"]}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  zIndex: 1,
                }}
              />
              <Image
                style={{
                  width: "100%",
                  height: undefined,
                  aspectRatio: 250 / 100,
                }}
                source={data.image}
              />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default HomeBanner;
