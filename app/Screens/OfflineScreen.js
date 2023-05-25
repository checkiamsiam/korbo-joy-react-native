import React from "react";
import { Image, Text, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { IMAGES } from "../constants/theme";

const OfflineScreen = () => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{
            height: 100,
            resizeMode: "contain",
          }}
          source={IMAGES.logo}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.background,
        }}
      >
        <FeatherIcon name="wifi-off" size={80} color={COLORS.primary} />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 24,
            color: COLORS.text,
          }}
        >
          You are offline
        </Text>
      </View>
    </View>
  );
};

export default OfflineScreen;
