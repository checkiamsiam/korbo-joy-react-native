import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, FONTS, IMAGES } from "../../constants/theme";

const HeaderStyle2 = (props) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        }}
      >
        <View
          style={{
            height: 50,
            backgroundColor: COLORS.white,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FeatherIcon color={COLORS.title} name="menu" size={18} />
          </TouchableOpacity>
          <Text
            style={{
              ...FONTS.h6,
              color: COLORS.title,
              flex: 1,
              textAlign: "center",
            }}
          >
            {props.title}
          </Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                position: "absolute",
                bottom: 8,
                right: 8,
                zIndex: 1,
                borderWidth: 2,
                borderColor: COLORS.white,
                backgroundColor: COLORS.success,
                height: 12,
                width: 12,
                borderRadius: 10,
              }}
            />
            <Image
              style={{
                height: 32,
                width: 32,
                borderRadius: 20,
              }}
              source={IMAGES.user}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HeaderStyle2;
