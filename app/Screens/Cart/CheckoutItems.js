import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import pic3 from "../../assets/images/product/pic3.jpg";
import CheckoutItem from "../../components/CheckoutItem";

const CheckoutItems = () => {
  const { cart } = useSelector((state) => state.cart);
  const navigation = useNavigation();
  return (
    <View>
      {cart.map((item, index) => (
        <CheckoutItem
          key={index}
          id={item.id}
          image={JSON.parse(item.img)[0]}
          title={item.name}
          type={item.status}
          quantity={item.qty}
          price={item.salePrice}
        />
      ))}
    </View>
  );
};

export default CheckoutItems;
