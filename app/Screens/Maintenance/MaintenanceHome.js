import React from "react";
import { Image, Text, View } from "react-native";

import { useSelector } from "react-redux";
import { IMAGES } from "../../constants/theme";

const MaintenanceHome = ({ icon, title }) => {
  const { COLORS } = useSelector((state) => state.theme);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingHorizontal: 10,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{
            height: 100,
            resizeMode: "contain",
          }}
          source={IMAGES.logo}
        />
        <Text
          style={{
            fontSize: 30,
            marginTop: 10,
            color: COLORS.text,
          }}
        >
          Korbo Joy
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}

        <Text
          style={{
            fontSize: 20,
            marginTop: 15,
            marginBottom: 24,
            color: COLORS.text,
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default MaintenanceHome;
