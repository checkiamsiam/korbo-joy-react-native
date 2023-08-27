import React from "react";
import { Image, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import { IMAGES } from "../../constants/theme";

const SwiperData = [
  {
    image: IMAGES.obPic2,
    title: "Best Collections in Summer Sale",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tem",
  },
  {
    image: IMAGES.obPic1,
    title: "Find Your Best Winter Collection",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tem",
  },
  {
    image: IMAGES.obPic3,
    title: "Best Collections in Summer Sale",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tem",
  },
];

const Onboarding = (props) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Swiper
        loop={false}
        dotStyle={{
          height: 10,
          width: 10,
          borderRadius: 10,
        }}
        activeDotStyle={{
          height: 10,
          width: 10,
          borderRadius: 10,
          backgroundColor: COLORS.primary,
        }}
        paginationStyle={{
          bottom: 28,
        }}
        showsButtons={false}
      >
        {SwiperData.map((data, index) => {
          return (
            <View
              style={{ flex: 1, padding: 20, paddingBottom: 70 }}
              key={index}
            >
              <Image
                style={{
                  flex: 1,
                  width: "100%",
                  marginVertical: 20,
                  borderRadius: SIZES.radius,
                }}
                source={data.image}
              />
              <View
                style={{
                  padding: 10,
                }}
              >
                <Text
                  style={{ ...FONTS.h3, textAlign: "center", marginBottom: 8 }}
                >
                  {data.title}
                </Text>
                <Text style={[FONTS.font, { textAlign: "center" }]}>
                  {data.desc}
                </Text>
              </View>
            </View>
          );
        })}
      </Swiper>
      <View style={{ paddingHorizontal: 15, paddingBottom: 15 }}>
        <CustomButton
          onPress={() => props.navigation.navigate("Welcome")}
          title="Get Started"
        />
      </View>
    </View>
  );
};

export default Onboarding;
