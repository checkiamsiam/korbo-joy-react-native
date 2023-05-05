import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import CustomButton from "../../components/CustomButton";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS, IMAGES, SIZES } from "../../constants/theme";

const SignUp = (props) => {
  const [isFocused, setisFocused] = useState(false);
  const [isFocused2, setisFocused2] = useState(false);
  const [isFocused3, setisFocused3] = useState(false);
  const [handlePassword, setHandlePassword] = useState(true);
  const [handlePassword2, setHandlePassword2] = useState(true);

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
          <Text style={{ ...FONTS.h3 }}>Create account Free</Text>
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
        <View style={GlobalStyleSheet.inputGroup}>
          <Text style={GlobalStyleSheet.label}>Confirm Password</Text>
          <View>
            <TouchableOpacity
              onPress={() => setHandlePassword2(!handlePassword2)}
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
              {handlePassword2 ? (
                <FeatherIcon name="eye" color={COLORS.secondary} size={22} />
              ) : (
                <FeatherIcon name="eye-off" color={COLORS.secondary} size={22} />
              )}
            </TouchableOpacity>
            <TextInput
              style={[GlobalStyleSheet.formControl, isFocused3 && GlobalStyleSheet.activeInput]}
              onFocus={() => setisFocused3(true)}
              onBlur={() => setisFocused3(false)}
              secureTextEntry={handlePassword2}
              placeholder="Confirm Password"
              placeholderTextColor={COLORS.label}
            />
          </View>
        </View>

        <CustomButton onPress={() => props.navigation.navigate("SignIn")} title="Register" />
        <Text style={{ ...FONTS.font, marginTop: 15 }}>By tapping “Sign Up” you accept our terms and condition.</Text>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              ...FONTS.font,
              color: COLORS.title,
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Already have an account?
          </Text>
          <CustomButton outline title="Continue with email" />

          <View
            style={{
              flexDirection: "row",
              marginVertical: 15,
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                height: 50,
                borderRadius: SIZES.radius,
                borderColor: COLORS.borderColor,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                marginRight: 10,
              }}
            >
              <Image style={{ height: 22, width: 22 }} source={IMAGES.google} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                borderRadius: SIZES.radius,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#305CCD",
                flex: 1,
                marginLeft: 10,
              }}
            >
              <MaterialCommunityIcons color={"#fff"} name="facebook" size={22} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
