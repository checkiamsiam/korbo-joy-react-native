import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem";

const CheckoutItems = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <View>
      {cart.length > 0 ? (
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
      ) : (
        <Text style={{ textAlign: "center", marginTop: 10 }}>Cart is Empty</Text>
      )}
    </View>
  );
};

export default CheckoutItems;
