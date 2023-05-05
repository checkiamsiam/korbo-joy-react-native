import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import CustomButton from "../../components/CustomButton";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS, IMAGES } from "../../constants/theme";

const SignIn = (props) => {
  const [isFocused, setisFocused] = useState(false);
  const [isFocused2, setisFocused2] = useState(false);
  const [handlePassword, setHandlePassword] = useState(true);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          ...GlobalStyleSheet.container,
          flex: 1,
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingVertical: 30,
          }}
        >
          <Image style={{ height: 70, resizeMode: "contain" }} source={IMAGES.logo} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ ...FONTS.h3 }}>Welcome back!</Text>
          <Text style={{ ...FONTS.font }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
        </View>

        <View style={GlobalStyleSheet.inputGroup}>
          <Text style={GlobalStyleSheet.label}>Username</Text>
          <TextInput
            style={[GlobalStyleSheet.formControl, isFocused && GlobalStyleSheet.activeInput]}
            onFocus={() => setisFocused(true)}
            onBlur={() => setisFocused(false)}
            placeholder="Type Username Here"
            placeholderTextColor={COLORS.label}
          />
        </View>
        <View style={GlobalStyleSheet.inputGroup}>
          <Text style={GlobalStyleSheet.label}>Password</Text>
          <View>
            <TouchableOpacity
              onPress={() => setHandlePassword(!handlePassword)}
              style={{
                position: "absolute",
                zIndex: 1,
                height: 50,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
                right: 0,
              }}
            >
              {handlePassword ? (
                <FeatherIcon name="eye" color={COLORS.secondary} size={22} />
              ) : (
                <FeatherIcon name="eye-off" color={COLORS.secondary} size={22} />
              )}
            </TouchableOpacity>
            <TextInput
              style={[GlobalStyleSheet.formControl, isFocused2 && GlobalStyleSheet.activeInput]}
              onFocus={() => setisFocused2(true)}
              onBlur={() => setisFocused2(false)}
              secureTextEntry={handlePassword}
              placeholder="Type Password Here"
              placeholderTextColor={COLORS.label}
            />
          </View>
        </View>

        <CustomButton onPress={() => props.navigation.navigate("DrawerNavigation")} title="Login" />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Text style={{ ...FONTS.font }}>Forgot password?</Text>
          <TouchableOpacity>
            <Text style={{ ...FONTS.fontLg, color: COLORS.primary }}>Reset here</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              ...FONTS.font,
              color: COLORS.title,
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Don’t have an account?
          </Text>
          <CustomButton onPress={() => props.navigation.navigate("SignUp")} outline title="Register now" />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
