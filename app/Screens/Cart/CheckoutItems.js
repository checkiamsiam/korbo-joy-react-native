import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import pic1 from "../../assets/images/product/pic1.jpg";
import pic2 from "../../assets/images/product/pic2.jpg";
import pic3 from "../../assets/images/product/pic3.jpg";
import CheckoutItem from "../../components/CheckoutItem";

const CheckoutData = [
  {
    image: pic1,
    title: "Peter England Causual",
    type: "Printed Longline Pure Cotteon T-shirt",
    quantity: 1,
    price: "$158.2",
    oldPrice: "$170",
  },
  {
    image: pic2,
    title: "Peter England Causual",
    type: "Printed Longline Pure Cotteon T-shirt",
    quantity: 1,
    price: "$158.2",
    oldPrice: "$170",
  },
  {
    image: pic3,
    title: "Peter England Causual",
    type: "Printed Longline Pure Cotteon T-shirt",
    quantity: 1,
    price: "$158.2",
    oldPrice: "$170",
  },
];

const CheckoutItems = ({ data }) => {
  const navigation = useNavigation();
  console.log(data);
  return (
    <View>
      {data.map((item, index) => (
        <CheckoutItem
          onPress={() =>
            navigation.navigate("ProductDetail", {
              item: item,
            })
          }
          key={index}
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
