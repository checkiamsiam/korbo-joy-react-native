import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS } from "../../constants/theme";
import Header from "../../layout/Header";

const AddDeliveryAddress = ({ navigation }) => {
  const [defaultAddress, setAddress] = useState("Home");

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
              <Text style={GlobalStyleSheet.label}>Full Name</Text>
              <TextInput value="ds"  editable={false} d style={GlobalStyleSheet.formControl} placeholder="Type your name" placeholderTextColor={COLORS.label} />
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Mobile No.</Text>
              <TextInput style={GlobalStyleSheet.formControl} placeholder="Type your mobile no." placeholderTextColor={COLORS.label} />
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
              <Text style={GlobalStyleSheet.label}>Address</Text>
              <TextInput style={GlobalStyleSheet.formControl} placeholder="Address" placeholderTextColor={COLORS.label} />
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Locality/Town</Text>
              <TextInput style={GlobalStyleSheet.formControl} placeholder="Locality/Town" placeholderTextColor={COLORS.label} />
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
        <CustomButton onPress={() => navigation.navigate("Payment")} title={"Save Address"} />
      </View>
    </SafeAreaView>
  );
};

export default AddDeliveryAddress;
