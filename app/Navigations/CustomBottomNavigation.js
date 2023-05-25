import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSelector } from "react-redux";
import cart from "../assets/images/icons/cart.png";
import category from "../assets/images/icons/category.png";
import home from "../assets/images/icons/home.png";
import user from "../assets/images/icons/user.png";

const CustomBottomNavigation = ({ state, descriptors, navigation }) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const offset = useSharedValue(0);

  const tabShapeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value,
        },
      ],
    };
  });

  const activeTab = async () => {
    switch (state.index) {
      case 0:
        offset.value = withTiming(0);
        break;
      case 1:
        offset.value = withTiming(SIZES.width / 4);
        break;
      case 2:
        offset.value = withTiming(SIZES.width / 2);
        break;
      case 3:
        offset.value = withTiming(SIZES.width - SIZES.width / 4);
        break;
      default:
        offset.value = withTiming(0);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const activeTabInCallBack = async () => {
        switch (state.index) {
          case 0:
            offset.value = withTiming(0);
            break;
          case 1:
            offset.value = withTiming(SIZES.width / 4);
            break;
          case 2:
            offset.value = withTiming(SIZES.width / 2);
            break;
          case 3:
            offset.value = withTiming(SIZES.width - SIZES.width / 4);
            break;
          default:
            offset.value = withTiming(0);
        }
      };
      activeTabInCallBack();
    }, [offset, state.index, SIZES])
  );

  return (
    <View
      style={{
        height: 60,
        borderTopWidth: 1,
        borderColor: COLORS.borderColor,
        backgroundColor: COLORS.backgroundColor,
        flexDirection: "row",
        paddingTop: 4,
      }}
    >
      <Animated.View
        style={[
          tabShapeStyle,
          {
            width: "25%",
            position: "absolute",
            height: 5,
            alignItems: "center",
            top: -1,
            left: 0,
          },
        ]}
      >
        <View
          style={{
            height: 5,
            width: 65,
            backgroundColor: COLORS.primary,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}
        />
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
          activeTab();
        };

        return (
          <View
            key={index}
            style={{
              width: "25%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={onPress}
              style={{
                alignItems: "center",
                paddingVertical: 9,
              }}
            >
              <Image
                style={{
                  height: 20,
                  width: 20,
                  marginBottom: 5,
                  tintColor: isFocused ? COLORS.primary : COLORS.title,
                }}
                source={label === "Home" ? home : label === "Categories" ? category : label === "Account" ? user : label === "Cart" && cart}
              />
              <Text style={{ ...FONTS.fontXs }}>{label}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default CustomBottomNavigation;
