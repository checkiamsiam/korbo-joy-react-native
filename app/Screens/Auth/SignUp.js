import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import CustomButton from "../../components/CustomButton";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS, IMAGES } from "../../constants/theme";

const SignUp = (props) => {
  const [isFocused, setisFocused] = useState(false);
  const [isFocused1, setisFocused1] = useState(false);
  const [isFocused2, setisFocused2] = useState(false);
  const [isFocused3, setisFocused3] = useState(false);
  const [password, setPassword] = useState("");
  const [handlePassword, setHandlePassword] = useState(true);
  const [handlePassword2, setHandlePassword2] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
            paddingVertical: 20,
          }}
        >
          <Image style={{ height: 70, resizeMode: "contain" }} source={IMAGES.logo} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ ...FONTS.h3 }}>Create account Free</Text>
        </View>

        <View style={GlobalStyleSheet.inputGroup}>
          <Text style={GlobalStyleSheet.label}>Phone Number *</Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "Phone Number is required",
              },
              pattern: {
                value: /^[\+0-9]+$/,
                message: "Phone Number should contain only numbers",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[GlobalStyleSheet.formControl, isFocused1 && GlobalStyleSheet.activeInput, errors.phoneNumber && GlobalStyleSheet.errorInput]}
                onFocus={() => {
                  setisFocused1(true);
                }}
                onChangeText={onChange}
                value={value}
                onBlur={() => {
                  setisFocused1(false);
                  onBlur();
                }}
                placeholder="Type Phone Number Here"
                placeholderTextColor={COLORS.label}
              />
            )}
            name="phoneNumber"
          />
          {errors.phoneNumber && <Text style={GlobalStyleSheet.errorInputText}>{errors.phoneNumber?.message}</Text>}
        </View>
        <View style={GlobalStyleSheet.inputGroup}>
          <Text style={GlobalStyleSheet.label}>Name *</Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "Name is required",
              },
              minLength: {
                value: 3,
                message: "Name is to short",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[GlobalStyleSheet.formControl, isFocused && GlobalStyleSheet.activeInput, errors.name && GlobalStyleSheet.errorInput]}
                onFocus={() => {
                  setisFocused(true);
                }}
                onChangeText={onChange}
                value={value}
                onBlur={() => {
                  setisFocused(false);
                  onBlur();
                }}
                placeholder="Type Your Name Here"
                placeholderTextColor={COLORS.label}
              />
            )}
            name="name"
          />
          {errors.name && <Text style={GlobalStyleSheet.errorInputText}>{errors.name?.message}</Text>}
        </View>
        <View style={GlobalStyleSheet.inputGroup}>
          <Text style={GlobalStyleSheet.label}>Password *</Text>
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
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Password is required",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[GlobalStyleSheet.formControl, isFocused2 && GlobalStyleSheet.activeInput, errors.password && GlobalStyleSheet.errorInput]}
                  onFocus={() => {
                    setisFocused2(true);
                  }}
                  onChangeText={(v) => {
                    onChange(v);
                    setPassword(v);
                  }}
                  value={value}
                  onBlur={() => {
                    setisFocused2(false);
                    onBlur();
                  }}
                  secureTextEntry={handlePassword}
                  placeholder="Type Password Here"
                  placeholderTextColor={COLORS.label}
                />
              )}
              name="password"
            />
            {errors.password && <Text style={GlobalStyleSheet.errorInputText}>{errors.password?.message}</Text>}
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
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Confirm Password is required",
                },
                validate: (value) => value === password || "The passwords do not match",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[
                    GlobalStyleSheet.formControl,
                    isFocused3 && GlobalStyleSheet.activeInput,
                    errors.confirmPassword && GlobalStyleSheet.errorInput,
                  ]}
                  onFocus={() => {
                    setisFocused3(true);
                  }}
                  onChangeText={onChange}
                  value={value}
                  onBlur={() => {
                    setisFocused3(false);
                    onBlur();
                  }}
                  secureTextEntry={handlePassword}
                  placeholder="Confirm Password"
                  placeholderTextColor={COLORS.label}
                />
              )}
              name="confirmPassword"
            />
            {errors.confirmPassword && <Text style={GlobalStyleSheet.errorInputText}>{errors.confirmPassword?.message}</Text>}
          </View>
        </View>

        <CustomButton onPress={handleSubmit(onSubmit)} title="Register" />
        <Text style={{ ...FONTS.font, marginTop: 15 }}>By tapping “Register” you accept our terms and condition.</Text>
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
          <CustomButton onPress={() => props.navigation.navigate("SignIn")} outline title="Login with Phone Number" />

          {/* <View
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
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
