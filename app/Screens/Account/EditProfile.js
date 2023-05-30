import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import Header from "../../layout/Header";

const EditProfile = (props) => {
  const { COLORS, FONTS, GlobalStyleSheet } = useSelector((state) => state.theme);
  const [isFocused, setisFocused] = useState(false);
  const [isFocused2, setisFocused2] = useState(false);
  const [isFocused3, setisFocused3] = useState(false);
  const [isFocused4, setisFocused4] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      number: user?.number,
      name: user?.name,
      email: user?.email,
      presentAddress: user?.presentAddress,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header titleLeft leftIcon={"back"} title={"Manage Profile"} />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Mobile Number</Text>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Mobile Number is required",
                  },
                  pattern: {
                    value: /^[\+0-9-]+$/,
                    message: "Mobile Number should contain only numbers",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[GlobalStyleSheet.formControl, isFocused && GlobalStyleSheet.activeInput, errors.number && GlobalStyleSheet.errorInput]}
                    onFocus={() => {
                      setisFocused(true);
                    }}
                    onChangeText={onChange}
                    editable={false}
                    value={value}
                    onBlur={() => {
                      setisFocused(false);
                      onBlur();
                    }}
                    placeholder="Type Mobile Number Here"
                    keyboardType="numeric"
                  />
                )}
                name="number"
              />
              {errors.number && <Text style={GlobalStyleSheet.errorInputText}>{errors.number?.message}</Text>}
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Name</Text>
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
                    style={[GlobalStyleSheet.formControl, isFocused2 && GlobalStyleSheet.activeInput, errors.name && GlobalStyleSheet.errorInput]}
                    onFocus={() => {
                      setisFocused2(true);
                    }}
                    onChangeText={onChange}
                    value={value}
                    onBlur={() => {
                      setisFocused2(false);
                      onBlur();
                    }}
                    placeholder="Type Your Name Here"
                  />
                )}
                name="name"
              />
              {errors.name && <Text style={GlobalStyleSheet.errorInputText}>{errors.name?.message}</Text>}
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Email</Text>
              <Controller
                control={control}
                rules={{
                  pattern: {
                    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    message: "please give a valid email adress",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[GlobalStyleSheet.formControl, isFocused3 && GlobalStyleSheet.activeInput, errors.email && GlobalStyleSheet.errorInput]}
                    onFocus={() => {
                      setisFocused3(true);
                    }}
                    onChangeText={onChange}
                    value={value}
                    onBlur={() => {
                      setisFocused3(false);
                      onBlur();
                    }}
                    placeholder="Type your email"
                  />
                )}
                name="email"
              />
              {errors.email && <Text style={GlobalStyleSheet.errorInputText}>{errors.email?.message}</Text>}
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Present Adress</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[
                      GlobalStyleSheet.formControl,
                      isFocused4 && GlobalStyleSheet.activeInput,
                      errors.presentAddress && GlobalStyleSheet.errorInput,
                    ]}
                    onFocus={() => {
                      setisFocused4(true);
                    }}
                    onChangeText={onChange}
                    value={value}
                    onBlur={() => {
                      setisFocused4(false);
                      onBlur();
                    }}
                    placeholder="Type your location"
                  />
                )}
                name="presentAddress"
              />
              {errors.presentAddress && <Text style={GlobalStyleSheet.errorInputText}>{errors.presentAddress?.message}</Text>}
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={GlobalStyleSheet.container}>
        <CustomButton onPress={handleSubmit(onSubmit)} title={"Save Details"} />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
