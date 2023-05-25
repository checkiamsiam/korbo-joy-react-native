import React from "react";
import { Image, Text, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Button from "../Button/Button";

import { useSelector } from "react-redux";
import ThumbUp from "../../assets/images/icons/thumbs-up.png";

const PricingStyle2 = () => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
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
          paddingTop: 60,
          position: "relative",
          marginTop: 50,
          borderRadius: 0,
          backgroundColor: COLORS.white,
          borderWidth: 1,
          borderColor: COLORS.borderColor,
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
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.white,
              position: "absolute",
              top: -100,

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
            <Image
              style={{
                height: 44,
                width: 44,
              }}
              source={ThumbUp}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", marginBottom: 25 }}>
          <Text style={{ ...FONTS.h4, color: COLORS.title, marginBottom: 5 }}>Free</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              marginBottom: 5,
            }}
          >
            <Text style={{ ...FONTS.h2, lineHeight: 35, color: COLORS.title }}>$0</Text>
            <Text
              style={{
                ...FONTS.font,
                ...FONTS.fontBold,
                fontSize: 16,
                color: COLORS.title,
                marginBottom: 5,
                marginLeft: 3,
              }}
            >
              /month
            </Text>
          </View>
          <Text
            style={{
              ...FONTS.font,
              textAlign: "center",
              color: COLORS.text,
              marginBottom: 20,
            }}
          >
            All the basics for bussinesses that are just getting started
          </Text>
          <Button color={COLORS.secondary} btnSquare title={"Get started"} />
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: COLORS.borderColor,
            paddingTop: 20,
          }}
        >
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
                <FeatherIcon style={{ marginRight: 8 }} color={COLORS.secondary} name="check" size={18} />
                <Text style={{ ...FONTS.font, color: COLORS.text }}>{data}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default PricingStyle2;
