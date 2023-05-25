import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";

const HeaderStyle1 = (props) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <>
      <View
        style={{
          height: 50,
          backgroundColor: COLORS.white,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 5,
          shadowColor: "rgba(0,0,0,.6)",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
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
        <Text style={{ ...FONTS.h6, color: COLORS.title, flex: 1 }}>{props.title}</Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FeatherIcon color={COLORS.title} name="search" size={20} />
        </TouchableOpacity>
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
              height: 18,
              width: 18,
              borderRadius: 20,
              position: "absolute",
              top: 7,
              right: 10,
              zIndex: 1,
              backgroundColor: COLORS.warning,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.fontXs,
                color: COLORS.white,
                ...FONTS.fontBold,
                lineHeight: 17,
              }}
            >
              9
            </Text>
          </View>
          <FeatherIcon color={COLORS.title} name="bell" size={20} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HeaderStyle1;
