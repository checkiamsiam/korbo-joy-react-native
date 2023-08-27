import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Collapsible from "react-native-collapsible";
import FeatherIcon from "react-native-vector-icons/Feather";
import Header from "../../layout/Header";
//import Button from '../../../components/Button/Button';
//import CustomInput from '../../../components/Input/CustomInput';
import { StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import cash from "../../assets/images/icons/cash.png";
import phonepe from "../../assets/images/icons/phonepe.png";
import CustomButton from "../../components/CustomButton";
import { setActionSheet } from "../../features/Action/ActionSheetSlice";
import { usePlaceOrderMutation } from "../../features/Order/OrderApi";
import calculateSum from "../../utils/calculateSum";
import { actionSheetRef } from "../../utils/globalRef";

const Payment = (props) => {
  const { COLORS, FONTS, GlobalStyleSheet } = useSelector(
    (state) => state.theme
  );
  const styles = createStyles(COLORS, FONTS);
  const dispatch = useDispatch();
  const [paymentOption, setPaymentOption] = useState("");
  const { cart } = useSelector((state) => state.cart);
  const { deliveryDetails } = useSelector((state) => state.order);
  const [orderNow, { isLoading }] = usePlaceOrderMutation();

  const totalPrice = calculateSum(cart, "totalSalesPrice");
  const totalCharge = calculateSum(cart, "charge");
  const totalBill = totalCharge + totalPrice;

  const [payActive, setPayActive] = useState("");

  const PhonePeOption = [
    {
      image: phonepe,
      title: "Phone Pe",
    },
    {
      image: phonepe,
      title: "Paytm",
    },
    {
      image: phonepe,
      title: "Enter UPI ID",
    },
  ];

  const placeOrder = async () => {
    const res = await orderNow(deliveryDetails);

    dispatch(
      setActionSheet({
        activeSheet: "success",
        data: {
          title: "Order Successful",
          subTitle: `Your Order has been Placed. Your Order Invoice is  #${res?.data?.item?.invoiceNumber}`,
        },
      })
    );
    props.navigation.navigate("Home");
    actionSheetRef.current.open();
  };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.backgroundColor,
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <Header titleLeft leftIcon={"back"} title={"Order & Payment"} />

        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.backgroundColor,
          }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {/* <View style={[GlobalStyleSheet.container]}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Image style={{ height: 20, width: 20, marginRight: 10 }} source={discount} />
                <Text style={{ ...FONTS.h6 }}>Bank Offer</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    height: 3,
                    width: 3,
                    borderRadius: 3,
                    backgroundColor: COLORS.text,
                    marginRight: 10,
                    opacity: 0.5,
                    marginTop: 8,
                  }}
                />
                <Text style={{ ...FONTS.font, color: COLORS.text }}>
                  10% instant Savings on Citi Credit and Debit Cards on a min spend of Rs 3,0000. TCA
                </Text>
              </View>
            </View> */}
            <View
              style={{
                backgroundColor: COLORS.backgroundColor,
                paddingHorizontal: 15,
                paddingBottom: 10,
                paddingTop: 15,
              }}
            >
              <Text
                style={{ ...FONTS.font, ...FONTS.fontBold, color: COLORS.text }}
              >
                Payment Options
              </Text>
            </View>

            <View
              style={{ borderBottomWidth: 1, borderColor: COLORS.borderColor }}
            >
              <TouchableOpacity
                onPress={() =>
                  setPaymentOption(paymentOption === "Cash" ? "" : "Cash")
                }
                style={[styles.list]}
              >
                <Image
                  style={[styles.listImg, { tintColor: COLORS.title }]}
                  source={cash}
                />
                <Text style={[styles.listTitle, { color: COLORS.title }]}>
                  Cash On Delivery(Cash/Bkash/Nagad)
                </Text>
                <FeatherIcon
                  color={COLORS.title}
                  name={"chevron-down"}
                  size={22}
                />
              </TouchableOpacity>
              <Collapsible
                collapsed={paymentOption === "Cash" ? false : true}
              />
            </View>

            {/* <View style={{ borderBottomWidth: 1, borderColor: COLORS.borderColor }}>
              <TouchableOpacity onPress={() => setPaymentOption(paymentOption === "Credit" ? "" : "Credit")} style={[styles.list]}>
                <Image style={[styles.listImg, { tintColor: COLORS.title }]} source={card} />
                <Text style={[styles.listTitle, { color: COLORS.title }]}>Credit / Debit Card</Text>
                <FeatherIcon color={COLORS.title} name={"chevron-down"} size={22} />
              </TouchableOpacity>
              <Collapsible collapsed={paymentOption === "Credit" ? false : true}>
                <View
                  style={{
                    paddingHorizontal: 15,
                    paddingBottom: 30,
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.font,
                      color: COLORS.text,
                      marginBottom: 10,
                    }}
                  >
                    Please ensure your card can be used for online transactions.
                  </Text>
                  <View style={{ marginBottom: 15 }}>
                    <TextInput style={GlobalStyleSheet.formControl} placeholder="Card Number" placeholderTextColor={COLORS.label} />
                  </View>
                  <View style={{ marginBottom: 15 }}>
                    <TextInput style={GlobalStyleSheet.formControl} placeholder="Name on card" placeholderTextColor={COLORS.label} />
                  </View>
                  <View style={[GlobalStyleSheet.row]}>
                    <View style={[GlobalStyleSheet.col50]}>
                      <TextInput style={GlobalStyleSheet.formControl} placeholder="Valid Thru(MM/YY)" placeholderTextColor={COLORS.label} />
                    </View>
                    <View style={[GlobalStyleSheet.col50]}>
                      <TextInput style={GlobalStyleSheet.formControl} placeholder="CVV" placeholderTextColor={COLORS.label} />
                    </View>
                  </View>
                </View>
              </Collapsible>
            </View>

            <View style={{ borderBottomWidth: 1, borderColor: COLORS.borderColor }}>
              <TouchableOpacity onPress={() => setPaymentOption(paymentOption === "PhonePe" ? "" : "PhonePe")} style={[styles.list]}>
                <Image style={[styles.listImg, { tintColor: COLORS.title }]} source={pay} />
                <Text style={[styles.listTitle, { color: COLORS.title }]}>PhonePe/ Google Pay/ BHIM UPI</Text>
                <FeatherIcon color={COLORS.title} name={"chevron-down"} size={22} />
              </TouchableOpacity>
              <Collapsible collapsed={paymentOption === "PhonePe" ? false : true}>
                <View style={{ paddingBottom: 20 }}>
                  {PhonePeOption.map((data, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => setPayActive(data.title)}
                        key={index}
                        style={[
                          styles.payList,
                          {
                            borderBottomColor: COLORS.borderColor,
                          },
                          PhonePeOption.length - 1 === index && {
                            borderBottomWidth: 0,
                          },
                        ]}
                      >
                        <View
                          style={[
                            styles.listRadio,
                            {
                              borderColor: COLORS.text,
                            },
                            payActive === data.title && {
                              borderColor: COLORS.primary,
                            },
                          ]}
                        >
                          {payActive === data.title && <View style={styles.listRadioCircle} />}
                        </View>
                        <View
                          style={[
                            styles.payMedia,
                            {
                              borderColor: COLORS.borderColor,
                            },
                          ]}
                        >
                          <Image style={styles.payImg} source={data.image} />
                        </View>
                        <Text
                          style={[
                            {
                              ...FONTS.font,
                              color: COLORS.text,
                            },
                            payActive === data.title && {
                              ...FONTS.fontBold,
                              color: COLORS.title,
                            },
                          ]}
                        >
                          {data.title}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </Collapsible>
            </View>

            <View style={{ borderBottomWidth: 1, borderColor: COLORS.borderColor }}>
              <TouchableOpacity onPress={() => setPaymentOption(paymentOption === "PaytmWallet" ? "" : "PaytmWallet")} style={[styles.list]}>
                <Image style={[styles.listImg, { tintColor: COLORS.title }]} source={wallet} />
                <Text style={[styles.listTitle, { color: COLORS.title }]}>Paytm/ Wallets</Text>
                <FeatherIcon color={COLORS.title} name={"chevron-down"} size={22} />
              </TouchableOpacity>
              <Collapsible collapsed={paymentOption === "PaytmWallet" ? false : true}>
                <View style={{ paddingBottom: 20 }}>
                  {PhonePeOption.map((data, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => setPayActive(data.title)}
                        key={index}
                        style={[
                          styles.payList,
                          {
                            borderBottomColor: COLORS.borderColor,
                          },
                          PhonePeOption.length - 1 === index && {
                            borderBottomWidth: 0,
                          },
                        ]}
                      >
                        <View
                          style={[
                            styles.listRadio,
                            {
                              borderColor: COLORS.text,
                            },
                            payActive === data.title && {
                              borderColor: COLORS.primary,
                            },
                          ]}
                        >
                          {payActive === data.title && <View style={styles.listRadioCircle} />}
                        </View>
                        <View
                          style={[
                            styles.payMedia,
                            {
                              borderColor: COLORS.borderColor,
                            },
                          ]}
                        >
                          <Image style={styles.payImg} source={data.image} />
                        </View>
                        <Text
                          style={[
                            {
                              ...FONTS.font,
                              color: COLORS.text,
                            },
                            payActive === data.title && {
                              ...FONTS.fontBold,
                              color: COLORS.title,
                            },
                          ]}
                        >
                          {data.title}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </Collapsible>
            </View>

            <View style={{ borderBottomWidth: 1, borderColor: COLORS.borderColor }}>
              <TouchableOpacity onPress={() => setPaymentOption(paymentOption === "Netbanking" ? "" : "Netbanking")} style={[styles.list]}>
                <Image style={[styles.listImg, { tintColor: COLORS.title }]} source={bank} />
                <Text style={[styles.listTitle, { color: COLORS.title }]}>Net Banking</Text>
                <FeatherIcon color={COLORS.title} name={"chevron-down"} size={22} />
              </TouchableOpacity>
              <Collapsible collapsed={paymentOption === "Netbanking" ? false : true}>
                <View style={{ paddingBottom: 20 }}>
                  {PhonePeOption.map((data, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => setPayActive(data.title)}
                        key={index}
                        style={[
                          styles.payList,
                          {
                            borderBottomColor: COLORS.borderColor,
                          },
                          PhonePeOption.length - 1 === index && {
                            borderBottomWidth: 0,
                          },
                        ]}
                      >
                        <View
                          style={[
                            styles.listRadio,
                            {
                              borderColor: COLORS.text,
                            },
                            payActive === data.title && {
                              borderColor: COLORS.primary,
                            },
                          ]}
                        >
                          {payActive === data.title && <View style={styles.listRadioCircle} />}
                        </View>
                        <View
                          style={[
                            styles.payMedia,
                            {
                              borderColor: COLORS.borderColor,
                            },
                          ]}
                        >
                          <Image style={styles.payImg} source={data.image} />
                        </View>
                        <Text
                          style={[
                            {
                              ...FONTS.font,
                              color: COLORS.text,
                            },
                            payActive === data.title && {
                              ...FONTS.fontBold,
                              color: COLORS.title,
                            },
                          ]}
                        >
                          {data.title}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </Collapsible>
            </View>

            <View style={{ borderBottomWidth: 1, borderColor: COLORS.borderColor }}>
              <TouchableOpacity onPress={() => setPaymentOption(paymentOption === "EMI" ? "" : "EMI")} style={[styles.list]}>
                <Image style={[styles.listImg, { tintColor: COLORS.title }]} source={personal} />
                <Text style={[styles.listTitle, { color: COLORS.title }]}>EMI/ Pay Later</Text>
                <FeatherIcon color={COLORS.title} name={"chevron-down"} size={22} />
              </TouchableOpacity>
              <Collapsible collapsed={paymentOption === "EMI" ? false : true}>
                <View style={{ paddingBottom: 20 }}>
                  {PhonePeOption.map((data, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => setPayActive(data.title)}
                        key={index}
                        style={[
                          styles.payList,
                          {
                            borderBottomColor: COLORS.borderColor,
                          },
                          PhonePeOption.length - 1 === index && {
                            borderBottomWidth: 0,
                          },
                        ]}
                      >
                        <View
                          style={[
                            styles.listRadio,
                            {
                              borderColor: COLORS.text,
                            },
                            payActive === data.title && {
                              borderColor: COLORS.primary,
                            },
                          ]}
                        >
                          {payActive === data.title && <View style={styles.listRadioCircle} />}
                        </View>
                        <View
                          style={[
                            styles.payMedia,
                            {
                              borderColor: COLORS.borderColor,
                            },
                          ]}
                        >
                          <Image style={styles.payImg} source={data.image} />
                        </View>
                        <Text
                          style={[
                            {
                              ...FONTS.font,
                              color: COLORS.text,
                            },
                            payActive === data.title && {
                              ...FONTS.fontBold,
                              color: COLORS.title,
                            },
                          ]}
                        >
                          {data.title}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </Collapsible>
            </View>

            <View style={[GlobalStyleSheet.container]}>
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  backgroundColor: "#eee",
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    height: 18,
                    width: 18,
                    marginRight: 12,
                    tintColor: COLORS.title,
                  }}
                  source={gift}
                />
                <Text style={[styles.listTitle, { color: COLORS.title }]}>Have a Gift Card?</Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      ...FONTS.font,
                      color: COLORS.primary,
                      ...FONTS.fontBold,
                    }}
                  >
                    APPLY
                  </Text>
                </TouchableOpacity>
              </View>
            </View> */}
            <View style={[GlobalStyleSheet.container]}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.borderColor,
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    ...FONTS.font,
                    ...FONTS.fontBold,
                    color: COLORS.title,
                  }}
                >
                  Price Details({cart.length} item)
                </Text>
              </View>
              <View style={styles.detailList}>
                <Text style={{ ...FONTS.font, color: COLORS.text }}>
                  Total Price
                </Text>
                <Text style={{ ...FONTS.font, color: COLORS.text }}>
                  {totalPrice} TK
                </Text>
              </View>
              <View style={styles.detailList}>
                <Text style={{ ...FONTS.font, color: COLORS.text }}>
                  Delivery Charge
                </Text>
                <Text style={{ ...FONTS.font, color: COLORS.warning }}>
                  {totalCharge} TK
                </Text>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: COLORS.borderColor,
                  paddingTop: 8,
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    ...FONTS.font,
                    ...FONTS.fontBold,
                    color: COLORS.title,
                  }}
                >
                  Total Amount
                </Text>
                <Text
                  style={{
                    ...FONTS.font,
                    ...FONTS.fontBold,
                    color: COLORS.title,
                  }}
                >
                  {totalBill} TK
                </Text>
              </View>
            </View>
          </ScrollView>
          <View
            style={[
              GlobalStyleSheet.container,
              {
                borderTopWidth: 1,
                borderColor: COLORS.borderColor,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={{ width: 120 }}>
                <Text style={{ ...FONTS.h5, color: COLORS.title }}>
                  {totalBill} TK
                </Text>
                {/* <TouchableOpacity>
                  <Text
                    style={{
                      ...FONTS.font,
                      color: COLORS.primary,
                      lineHeight: 16,
                    }}
                  >
                    View Details
                  </Text>
                </TouchableOpacity> */}
              </View>
              <View style={{ flex: 1 }}>
                <CustomButton
                  disabled={isLoading}
                  onPress={placeOrder}
                  title={"Place Order"}
                  color={COLORS.primary}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const createStyles = (COLORS, FONTS) => {
  return StyleSheet.create({
    stepItem: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    stepIcon: {
      height: 30,
      width: 30,
      borderRadius: 35,
      marginRight: 10,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: COLORS.primary2,
    },
    list: {
      paddingHorizontal: 15,
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 18,
    },
    listImg: {
      height: 20,
      width: 20,
      resizeMode: "contain",
      marginRight: 12,
    },
    listTitle: {
      ...FONTS.font,
      ...FONTS.fontBold,
      flex: 1,
    },
    detailList: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 2,
    },
    payList: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderBottomWidth: 1,
    },
    listRadio: {
      height: 15,
      width: 15,
      borderRadius: 10,
      borderWidth: 1,
      marginRight: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    listRadioCircle: {
      height: 8,
      width: 8,
      borderRadius: 8,
      backgroundColor: COLORS.primary,
    },
    payImg: {
      height: 35,
      width: 35,
      borderRadius: 35,
    },
    payMedia: {
      borderWidth: 1,
      padding: 5,
      borderRadius: 40,
      marginRight: 15,
    },
  });
};
export default Payment;
