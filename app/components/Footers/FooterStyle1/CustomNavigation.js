import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

import { useSelector } from "react-redux";
import market from "../../../assets/images/icons/clock.png";
import exchange from "../../../assets/images/icons/exchange.png";
import home from "../../../assets/images/icons/home.png";
import profile from "../../../assets/images/icons/user.png";
import wallet from "../../../assets/images/icons/wallet.png";

const CustomNavigation = ({ state, navigation, descriptors }) => {
  const offset = useSharedValue(SIZES.width / 2.5);
  const icon1 = useSharedValue(0);
  const icon2 = useSharedValue(0);
  const icon3 = useSharedValue(10);
  const icon4 = useSharedValue(0);
  const icon5 = useSharedValue(0);
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

  const tabIcon1Style = useAnimatedStyle(() => {
    return { transform: [{ translateY: icon1.value }] };
  });
  const tabIcon2Style = useAnimatedStyle(() => {
    return { transform: [{ translateY: icon2.value }] };
  });
  const tabIcon3Style = useAnimatedStyle(() => {
    return { transform: [{ translateY: icon3.value }] };
  });
  const tabIcon4Style = useAnimatedStyle(() => {
    return { transform: [{ translateY: icon4.value }] };
  });
  const tabIcon5Style = useAnimatedStyle(() => {
    return { transform: [{ translateY: icon5.value }] };
  });

  return (
    <>
      <View
        style={{
          height: 60,
          flexDirection: "row",
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
              width: SIZES.width / 5,
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
          const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

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
              icon1.value = withSpring(10);
              icon2.value = withSpring(0);
              icon3.value = withSpring(0);
              icon4.value = withSpring(0);
              icon5.value = withSpring(0);
            } else if (route.name === "Markets") {
              var a = SIZES.width / 5;
              icon2.value = withSpring(10);
              icon1.value = withSpring(0);
              icon3.value = withSpring(0);
              icon4.value = withSpring(0);
              icon5.value = withSpring(0);
            } else if (route.name === "Change") {
              var a = SIZES.width / 2.5;
              icon3.value = withSpring(10);
              icon1.value = withSpring(0);
              icon2.value = withSpring(0);
              icon4.value = withSpring(0);
              icon5.value = withSpring(0);
            } else if (route.name === "Wallet") {
              var a = SIZES.width / 2.5 + SIZES.width / 5;
              icon4.value = withSpring(10);
              icon1.value = withSpring(0);
              icon2.value = withSpring(0);
              icon3.value = withSpring(0);
              icon5.value = withSpring(0);
            } else if (route.name === "Profile") {
              var a = SIZES.width - SIZES.width / 5;
              icon5.value = withSpring(10);
              icon1.value = withSpring(0);
              icon2.value = withSpring(0);
              icon3.value = withSpring(0);
              icon4.value = withSpring(0);
            }

            var b = withSpring(a);
            offset.value = b;
          };

          return (
            <View style={styles.tabItem} key={index}>
              <TouchableOpacity style={styles.tabLink} onPress={onPress}>
                <Animated.View
                  style={[
                    route.name === "Home"
                      ? tabIcon1Style
                      : route.name === "Markets"
                      ? tabIcon2Style
                      : route.name === "Change"
                      ? tabIcon3Style
                      : route.name === "Wallet"
                      ? tabIcon4Style
                      : route.name === "Profile" && tabIcon5Style,
                  ]}
                >
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: "contain",
                      marginBottom: 4,
                      opacity: isFocused ? 1 : 0.6,
                      tintColor: isFocused ? COLORS.white : COLORS.text,
                    }}
                    source={
                      label === "Home"
                        ? home
                        : label === "Markets"
                        ? market
                        : label === "Change"
                        ? exchange
                        : label === "Wallet"
                        ? wallet
                        : label === "Profile" && profile
                    }
                  />
                </Animated.View>
                <Text
                  style={{
                    ...FONTS.fontSm,
                    color: COLORS.text,
                    opacity: isFocused ? 0 : 1,
                  }}
                >
                  {label}
                </Text>
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
