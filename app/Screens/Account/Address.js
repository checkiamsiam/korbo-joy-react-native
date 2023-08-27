import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import Header from "../../layout/Header";

const Address = ({ navigation }) => {
  const { COLORS, FONTS, GlobalStyleSheet } = useSelector(
    (state) => state.theme
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header titleLeft leftIcon={"back"} title={"Address"} />
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddDeliveryAddress")}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 8,
          }}
        >
          <Text
            style={{ ...FONTS.font, ...FONTS.fontBold, color: COLORS.primary }}
          >
            +Add New Address
          </Text>
        </TouchableOpacity>
        <View style={GlobalStyleSheet.container}>
          <Text
            style={[
              FONTS.font,
              FONTS.fontBold,
              { color: COLORS.title, marginBottom: 10 },
            ]}
          >
            Default Address
          </Text>

          <View
            style={{
              padding: 12,
              borderWidth: 1,
              borderColor: COLORS.borderColor,
              borderRadius: 6,
            }}
          >
            <View
              style={{
                marginBottom: 8,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  ...FONTS.font,
                  ...FONTS.fontBold,
                  color: COLORS.title,
                }}
              >
                Yatin
              </Text>
              <View
                style={{
                  backgroundColor: "#F2F2F2",
                  paddingHorizontal: 10,
                  paddingTop: 6,
                  paddingBottom: 4,
                  borderRadius: 15,
                }}
              >
                <Text style={{ ...FONTS.fontXs, ...FONTS.fontBold }}>
                  OFFICE
                </Text>
              </View>
            </View>
            <Text style={FONTS.font}>
              Mokshita dairy near bsnl circle {"\n"}Rk puram{"\n"}Kota -324009
              {"\n"}Rajasthan{"\n"}
              {"\n"}Mobile: 0123 4567 891
            </Text>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: COLORS.borderColor,
                marginTop: 12,
                flexDirection: "row",
                marginHorizontal: -12,
                marginBottom: -12,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  padding: 12,
                  alignItems: "center",
                  borderRightWidth: 1,
                  borderColor: COLORS.borderColor,
                }}
              >
                <Text style={{ ...FONTS.h6, color: COLORS.secondary }}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  padding: 12,
                  alignItems: "center",
                }}
              >
                <Text style={{ ...FONTS.h6, color: COLORS.secondary }}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Address;
