import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSelector } from "react-redux";
import blog from "../../../assets/images/icons/blog.png";
import collage from "../../../assets/images/icons/collage.png";
import heart from "../../../assets/images/icons/heart.png";
import home from "../../../assets/images/icons/home2.png";
import profile from "../../../assets/images/icons/user2.png";

const CustomNavigation = ({ state, navigation, descriptors }) => {
  const offset = useSharedValue((SIZES.width - 20) / 2.5);
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const styles = createStyle(FONTS);

  const tabShapeStyle = useAnimatedStyle(() => {
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
      <View
        style={{
          height: 60,
          flexDirection: "row",
          position: "absolute",
          width: "auto",
          left: 10,
          right: 10,
          bottom: 10,
          borderRadius: 20,
          backgroundColor: COLORS.white,
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
        <Animated.View style={[tabShapeStyle]}>
          <View
            style={{
              width: (SIZES.width - 20) / 5,
              position: "absolute",
              zIndex: 1,
              top: 7.5,
              left: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 45,
                backgroundColor: COLORS.primary,
              }}
            />
          </View>
        </Animated.View>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }

            if (route.name === "Home") {
              var a = 0;
            } else if (route.name === "Markets") {
              var a = (SIZES.width - 20) / 5;
            } else if (route.name === "Change") {
              var a = (SIZES.width - 20) / 2.5;
            } else if (route.name === "Wallet") {
              var a = (SIZES.width - 20) / 2.5 + (SIZES.width - 20) / 5;
            } else if (route.name === "Profile") {
              var a = SIZES.width - 20 - (SIZES.width - 20) / 5;
            }

            var b = withSpring(a);
            offset.value = b;
          };

          return (
            <View style={styles.tabItem} key={index}>
              <TouchableOpacity style={styles.tabLink} onPress={onPress}>
                <Image
                  style={{
                    height: 22,
                    width: 22,
                    resizeMode: "contain",
                    opacity: isFocused ? 1 : 0.6,
                    tintColor: isFocused ? COLORS.white : COLORS.text,
                  }}
                  source={
                    label === "Home"
                      ? home
                      : label === "Markets"
                      ? heart
                      : label === "Change"
                      ? collage
                      : label === "Wallet"
                      ? blog
                      : label === "Profile" && profile
                  }
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </>
  );
};

const createStyle = (FONTS) => {
  return StyleSheet.create({
    tabLink: {
      alignItems: "center",
    },
    tabItem: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    navText: {
      ...FONTS.fontSm,
    },
  });
};

export default CustomNavigation;
