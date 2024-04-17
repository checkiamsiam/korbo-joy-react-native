import React, { memo } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem";

const CheckoutItems = () => {
  const { cart } = useSelector((state) => state.cart);
  const { COLORS } = useSelector((state) => state.theme);
  return (
    <View>
      {cart.length > 0 ? (
        <View>
          {cart.map((item, index) => (
            <CheckoutItem
              key={index}
              id={item.id}
              image={item.img}
              title={item.name}
              type={item.status}
              quantity={item.qty}
              price={item.salePrice}
            />
          ))}
        </View>
      ) : (
        <Text
          style={{ textAlign: "center", marginTop: 10, color: COLORS.text }}
        >
          Cart is Empty
        </Text>
      )}
    </View>
  );
};

export default memo(CheckoutItems);
