import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/Theme/themeSlice";

const DarkModeToggler = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);

  const offset = useSharedValue(mode === "dark" ? 20 : 0);
  const toggleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value,
        },
      ],
    };
  });

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          dispatch(toggleTheme());
          if (mode === "dark") {
            offset.value = withSpring(0);
          } else {
            offset.value = withSpring(20);
          }
        }}
        style={[
          {
            height: 28,
            width: 50,
            backgroundColor: mode === "dark" ? COLORS.dark : COLORS.primary,
            borderRadius: 30,
          },
        ]}
      >
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 2,
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              ...FONTS.font,
              ...FONTS.fontBold,
              fontSize: 10,
              color: COLORS.white,
            }}
          >
            ON
          </Text>
          <Text
            style={{
              ...FONTS.font,
              ...FONTS.fontBold,
              fontSize: 10,
              color: COLORS.white,
            }}
          >
            OFF
          </Text>
        </View>
        <Animated.View
          style={[
            toggleStyle,
            {
              height: 24,
              width: 24,
              backgroundColor: "#fff",
              borderRadius: 30,
              top: 2,
              left: 2,
            },
          ]}
        />
      </TouchableOpacity>
    </>
  );
};

export default DarkModeToggler;
