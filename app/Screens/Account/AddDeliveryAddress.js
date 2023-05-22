import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS } from "../../constants/theme";
import { setDeliveryDetails } from "../../features/Order/OrderSlice";
import Header from "../../layout/Header";

const AddDeliveryAddress = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isFocused, setisFocused] = useState(false);
  const [isFocused1, setisFocused1] = useState(false);
  const [isFocused2, setisFocused2] = useState(false);
  const [isFocused3, setisFocused3] = useState(false);
  const [defaultAddress, setAddress] = useState("Home");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const deliveryAdress = { ...data, addressType: defaultAddress, userId: user.id };
    dispatch(setDeliveryDetails(deliveryAdress));
    navigation.navigate("Payment");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header titleLeft leftIcon={"back"} title={"Add delivery address"} />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: COLORS.borderColor,
                paddingBottom: 10,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  ...FONTS.font,
                  ...FONTS.fontBold,
                  color: COLORS.title,
                }}
              >
                Contact Details
              </Text>
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Full Name *</Text>
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
              <Text style={GlobalStyleSheet.label}>Mobile Number *</Text>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                  pattern: {
                    value: /^[\+0-9-]+$/,
                    message: "Phone Number should contain only numbers",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[GlobalStyleSheet.formControl, isFocused1 && GlobalStyleSheet.activeInput, errors.number && GlobalStyleSheet.errorInput]}
                    onFocus={() => {
                      setisFocused1(true);
                    }}
                    onChangeText={onChange}
                    value={value}
                    onBlur={() => {
                      setisFocused1(false);
                      onBlur();
                    }}
                    placeholder="Type Number Here"
                    placeholderTextColor={COLORS.label}
                    keyboardType="numeric"
                  />
                )}
                name="number"
              />
              {errors.number && <Text style={GlobalStyleSheet.errorInputText}>{errors.number?.message}</Text>}
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: COLORS.borderColor,
                paddingBottom: 10,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  ...FONTS.font,
                  ...FONTS.fontBold,
                  color: COLORS.title,
                }}
              >
                Address
              </Text>
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Adress *</Text>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Adress in required",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[GlobalStyleSheet.formControl, isFocused2 && GlobalStyleSheet.activeInput, errors.adress && GlobalStyleSheet.errorInput]}
                    onFocus={() => {
                      setisFocused2(true);
                    }}
                    onChangeText={onChange}
                    value={value}
                    onBlur={() => {
                      setisFocused2(false);
                      onBlur();
                    }}
                    placeholder="Type Adress Specification"
                    placeholderTextColor={COLORS.label}
                  />
                )}
                name="adress"
              />
              {errors.adress && <Text style={GlobalStyleSheet.errorInputText}>{errors.adress?.message}</Text>}
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Locality/Town *</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[
                      GlobalStyleSheet.formControl,
                      isFocused3 && GlobalStyleSheet.activeInput,
                      errors.localTown && GlobalStyleSheet.errorInput,
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
                    placeholder="Locality/Town"
                    placeholderTextColor={COLORS.label}
                  />
                )}
                name="localTown"
              />
              {errors.localTown && <Text style={GlobalStyleSheet.errorInputText}>{errors.localTown?.message}</Text>}
            </View>
            {/* <View style={[GlobalStyleSheet.row]}>
              <View style={[GlobalStyleSheet.col50]}>
                <View style={GlobalStyleSheet.inputGroup}>
                  <Text style={GlobalStyleSheet.label}>City/District</Text>
                  <TextInput style={GlobalStyleSheet.formControl} placeholder="City/District" placeholderTextColor={COLORS.label} />
                </View>
              </View>
              <View style={[GlobalStyleSheet.col50]}>
                <View style={GlobalStyleSheet.inputGroup}>
                  <Text style={GlobalStyleSheet.label}>State</Text>
                  <TextInput style={GlobalStyleSheet.formControl} placeholder="State" placeholderTextColor={COLORS.label} />
                </View>
              </View>
            </View> */}
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: COLORS.borderColor,
                paddingBottom: 10,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  ...FONTS.font,
                  ...FONTS.fontBold,
                  color: COLORS.title,
                }}
              >
                Save Address As
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => setAddress("Home")}
                style={[
                  {
                    borderWidth: 1,
                    borderColor: COLORS.borderColor,
                    borderRadius: 30,
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                    marginRight: 10,
                  },
                  defaultAddress === "Home" && {
                    borderColor: COLORS.primary,
                  },
                ]}
              >
                <Text style={[{ ...FONTS.font, color: COLORS.title, paddingBottom: 2 }, defaultAddress === "Home" && { color: COLORS.primary }]}>
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setAddress("Work")}
                style={[
                  {
                    borderWidth: 1,
                    borderColor: COLORS.borderColor,
                    borderRadius: 30,
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                  },
                  defaultAddress === "Work" && {
                    borderColor: COLORS.primary,
                  },
                ]}
              >
                <Text style={[{ ...FONTS.font, color: COLORS.title, paddingBottom: 2 }, defaultAddress === "Work" && { color: COLORS.primary }]}>
                  Work
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={GlobalStyleSheet.container}>
        <CustomButton onPress={handleSubmit(onSubmit)} title={"Save Address"} />
      </View>
    </SafeAreaView>
  );
};

export default AddDeliveryAddress;
