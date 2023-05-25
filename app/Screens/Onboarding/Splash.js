import React, { useEffect } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { IMAGES } from "../../constants/theme";

const Splash = (props) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Home");
    }, 1000);
  }, [props.navigation]);

  return (
    <ImageBackground source={IMAGES.bg1} style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{
            height: 100,
            resizeMode: "contain",
          }}
          source={IMAGES.logo}
        />
      </View>
      <View style={{ alignItems: "center", paddingVertical: 15 }}>
        <Text style={{ ...FONTS.h5, color: COLORS.primary }}>Korbo Joy</Text>
        <Text style={{ ...FONTS.font, marginBottom: 4 }}>Online Store Platform.</Text>
        <Text style={{ ...FONTS.font }}>v1.0.0</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;
