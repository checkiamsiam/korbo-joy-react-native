import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useSelector } from "react-redux";

const ToggleStyle4 = () => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const [active, setActive] = useState(false);

  const offset = useSharedValue(0);
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
    <View
      style={{
        height: 32,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setActive(!active);
          if (active) {
            offset.value = withSpring(0);
          } else {
            offset.value = withSpring(30);
          }
        }}
        style={[
          {
            height: 17,
            width: 55,
            backgroundColor: active ? COLORS.primary : "#aab2bd",
            borderRadius: 30,
          },
        ]}
      >
        <Animated.View
          style={[
            toggleStyle,
            {
              height: 28,
              width: 28,
              backgroundColor: active ? COLORS.primary : COLORS.white,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: active ? COLORS.primary : COLORS.borderColor,
              top: -5,
              left: -2,
              shadowColor: "rgba(0,0,0,.6)",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,

              elevation: 8,
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ToggleStyle4;
