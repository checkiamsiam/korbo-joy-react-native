import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import pic1 from "../../assets/images/product/pic1.jpg";
import CheckoutItem from "../../components/CheckoutItem";
import { IMAGES } from "../../constants/theme";
import Header from "../../layout/Header";
import DeliveryMap from "./DeliveryMap";

const CheckoutData = [
  {
    image: pic1,
    title: "Long Grey Bomber Jackets",
    type: "Grey Variant",
    quantity: 1,
    price: "$158.2",
    oldPrice: "$170",
  },
];

const DeliveryTracking = () => {
  const { COLORS, FONTS, GlobalStyleSheet } = useSelector(
    (state) => state.theme
  );
  const styles = createStyles(COLORS);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header
        leftIcon={"back"}
        title={"Tracking Orders"}
        rightIcon={"more"}
        productId={"#04451255"}
      />
      <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
        {CheckoutData.map((data, index) => (
          <CheckoutItem
            key={index}
            image={data.image}
            title={data.title}
            type={data.type}
            quantity={data.quantity}
            price={data.price}
            oldPrice={data.oldPrice}
          />
        ))}

        <DeliveryMap />

        <View style={GlobalStyleSheet.container}>
          <Text style={[FONTS.h5, { marginBottom: 12 }]}>History</Text>
          <View>
            <View style={styles.delCircle} />
            <View style={styles.delInfo}>
              <Text style={{ ...FONTS.h6, color: COLORS.primary }}>
                On Delivery
              </Text>
              <Text style={{ ...FONTS.fontXs, marginBottom: 15 }}>
                Monday June 20th, 2020 12:25 AM
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    height: 43,
                    width: 43,
                    borderRadius: 40,
                    marginRight: 10,
                  }}
                  source={IMAGES.user}
                />
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      ...FONTS.font,
                      ...FONTS.fontBold,
                      color: COLORS.title,
                      marginBottom: 6,
                    }}
                  >
                    Thomas Djono
                  </Text>
                  <Text style={{ ...FONTS.fontXs, color: COLORS.title }}>
                    ID 02123141
                  </Text>
                </View>
                <FeatherIcon
                  color={COLORS.success}
                  size={24}
                  name="phone-call"
                />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.delCircle} />
            <View style={styles.delInfo}>
              <Text style={{ ...FONTS.h6, color: COLORS.primary }}>
                North Gateway
              </Text>
              <Text style={{ ...FONTS.fontXs, marginBottom: 15 }}>
                Monday June 20th, 2020 12:25 AM
              </Text>
              <Text style={{ ...FONTS.font, color: COLORS.title }}>
                Your order has been arrived at North Gateway, please wait next
                info
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.delCircle} />
            <View style={[styles.delInfo, { borderColor: "transparent" }]}>
              <Text style={{ ...FONTS.h6, color: COLORS.primary }}>
                Order Created
              </Text>
              <Text style={{ ...FONTS.fontXs, marginBottom: 15 }}>
                Monday June 20th, 2020 12:25 AM
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyles = (COLORS) => {
  return StyleSheet.create({
    delCircle: {
      height: 21,
      width: 21,
      borderRadius: 21,
      backgroundColor: COLORS.secondary,
      borderWidth: 3,
      borderColor: COLORS.white,
      position: "absolute",
      top: 0,
      left: 5,
      zIndex: 2,
    },
    delInfo: {
      paddingLeft: 30,
      marginLeft: 15,
      borderLeftWidth: 2,
      borderColor: COLORS.primary,
      paddingBottom: 30,
      paddingRight: 10,
    },
  });
};

export default DeliveryTracking;
