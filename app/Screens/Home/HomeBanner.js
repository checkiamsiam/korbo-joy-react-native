import { IMAGE_BASE } from "@env";
import { Skeleton } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, View } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";
import { useGetSliderQuery } from "../../features/SliderFeature/SliderApi";

const HomeBanner = () => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const { isLoading: sliderLoading } = useGetSliderQuery();
  const { sliders } = useSelector((state) => state.slider);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: COLORS.borderColor,
      }}
    >
      {!sliderLoading ? (
        <Swiper
          autoplay={true}
          autoplayTimeout={6}
          height={"auto"}
          dotColor={"rgba(255,255,255,.3)"}
          activeDotColor={COLORS.white}
          paginationStyle={{ bottom: 10 }}
        >
          {sliders.map((data, index) => {
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
                  source={{ uri: `${IMAGE_BASE}/${data?.img}` }}
                />
              </View>
            );
          })}
        </Swiper>
      ) : (
        <Skeleton animation="pulse" width="100%" height={150} />
      )}
    </View>
  );
};

export default HomeBanner;
