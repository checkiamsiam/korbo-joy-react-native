import React from 'react';
import { ScrollView } from 'react-native';
import CartItem from '../../components/CartItem';
import pic1 from '../../assets/images/shop/pic1.png';

const CartData = [
  {
    productId: '#125125671',
    image: pic1,
    title: 'Women Sleep Suits by Femall Clothings',
    quantity: '1x',
    size: 'GREY Variant',
    price: '$47.6',
    status: 'completed',
    desc: 'Order Received by [Louis Simatupang]',
  },
];

const Completed = () => {
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

export default Completed;
