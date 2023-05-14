import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS } from "../../constants/theme";
import Header from "../../layout/Header";

const EditProfile = (props) => {
  const [isFocused, setisFocused] = useState(false);
  const [isFocused2, setisFocused2] = useState(false);
  const [isFocused3, setisFocused3] = useState(false);
  const [isFocused4, setisFocused4] = useState(false);

  const { user } = useSelector((state) => state.auth);

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
              <TextInput
                style={[GlobalStyleSheet.formControl, isFocused && GlobalStyleSheet.activeInput]}
                editable={false}
                value={user?.number}
                onFocus={() => setisFocused(true)}
                onBlur={() => setisFocused(false)}
                placeholder="Type Mobile number"
                placeholderTextColor={COLORS.label}
              />
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Full Name</Text>
              <TextInput
                style={[GlobalStyleSheet.formControl, isFocused2 && GlobalStyleSheet.activeInput]}
                defaultValue={user?.name}
                onFocus={() => setisFocused2(true)}
                onBlur={() => setisFocused2(false)}
                placeholder="Type your name"
                placeholderTextColor={COLORS.label}
              />
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Email</Text>
              <TextInput
                style={[GlobalStyleSheet.formControl, isFocused3 && GlobalStyleSheet.activeInput]}
                onFocus={() => setisFocused3(true)}
                onBlur={() => setisFocused3(false)}
                placeholder="Type your email"
                placeholderTextColor={COLORS.label}
              />
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Location</Text>
              <TextInput
                style={[GlobalStyleSheet.formControl, isFocused4 && GlobalStyleSheet.activeInput]}
                onFocus={() => setisFocused4(true)}
                onBlur={() => setisFocused4(false)}
                placeholder="Type your location"
                placeholderTextColor={COLORS.label}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={GlobalStyleSheet.container}>
        <CustomButton title={"Save Details"} />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
