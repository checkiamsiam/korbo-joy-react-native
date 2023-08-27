import React from "react";
import { ScrollView } from "react-native";
import CartItem from "../../components/CartItem";
import pic3 from "../../assets/images/shop/pic3.png";

const CartData = [
  {
    productId: "#125125671",
    image: pic3,
    title: "Red Candy Handy Bag with Random Accessories",
    quantity: "2x",
    size: "43 Size",
    price: "$158.2",
    status: "on delivery",
    desc: "On the way by Courir  [H. Stefanus]",
  },
];

const OnDelivery = () => {
  return (
    <ScrollView>
      {CartData.map((data, index) => (
        <CartItem
          key={index}
          productId={data.productId}
          image={data.image}
          title={data.title}
          price={data.price}
          quantity={data.quantity}
          size={data.size}
          status={data.status}
          desc={data.desc}
        />
      ))}
    </ScrollView>
  );
};

export default OnDelivery;
