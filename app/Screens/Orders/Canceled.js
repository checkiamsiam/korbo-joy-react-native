import React from 'react';
import { ScrollView } from 'react-native';
import CartItem from '../../components/CartItem';
import pic2 from '../../assets/images/shop/pic2.png';

const CartData = [
  {
    productId: '#125125671',
    image: pic2,
    title: 'Brown Women Shirts by Coklat Cloth',
    quantity: '2x',
    size: 'LONG Size',
    price: '$158.2',
    status: 'canceled',
    desc: 'Reach on payment due date',
  },
];

const Canceled = () => {
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

export default Canceled;
