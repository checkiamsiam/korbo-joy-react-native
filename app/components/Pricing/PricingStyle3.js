import React from "react";
import { Text, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import Button from "../Button/Button";

const PricingStyle3 = () => {
  const Data = [
    "Access to all basic features",
    "Basic reporting and analytics",
    "Up to 10 individual users",
    "20 GB individual data each user",
    "Basic chat and emails support",
  ];

  return (
    <>
      <View
        style={{
          padding: 30,
          paddingTop: 50,
          borderRadius: SIZES.radius,
          borderWidth: 10,
          borderColor: COLORS.white,
          backgroundColor: COLORS.primaryLight,
          maxWidth: 320,
          width: "100%",
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
        <View
          style={{
            height: 70,
            position: "absolute",
            right: 0,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
            paddingTop: 3,
            borderTopLeftRadius: 40,
            borderBottomLeftRadius: 40,
            paddingRight: 20,
            backgroundColor: "rgba(255,4,95,.15)",
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
              lineHeight: 32,
              color: COLORS.title,
              opacity: 0.9,
            }}
          >
            $56
          </Text>
          <Text style={{ ...FONTS.font, color: COLORS.text, marginLeft: 5 }}>/m</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ ...FONTS.h4, color: COLORS.title, marginBottom: 4 }}>Professional</Text>
          <Text
            style={{
              ...FONTS.font,
              fontSize: 16,
              color: COLORS.text,
              lineHeight: 22,
            }}
          >
            This plan for those who have a team already and running a large business.
          </Text>
        </View>
        <View style={{ marginBottom: 25 }}>
          {Data.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5,
                }}
              >
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    marginRight: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: COLORS.secondary,
                  }}
                >
                  <FeatherIcon color={COLORS.white} name="check" size={14} />
                </View>
                <Text style={{ ...FONTS.font, color: COLORS.text }}>{data}</Text>
              </View>
            );
          })}
        </View>
        <Button title={"Get started"} />
      </View>
    </>
  );
};

export default PricingStyle3;
