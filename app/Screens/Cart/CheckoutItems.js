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
          onPress={() =>
            navigation.navigate("ProductDetail", {
              item: item,
            })
          }
          key={index}
          productId={item.productId}
          image={pic3}
          title={"Peter England Causual"}
          type={"Printed Longline Pure Cotteon T-shirt"}
          quantity={item.qty}
          price={item.salePrice}
          oldPrice={item.buyPrice}
        />
      ))}
    </View>
  );
};

export default CheckoutItems;
