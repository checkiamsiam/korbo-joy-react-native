import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import CouponItem from '../../components/CouponItem';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS } from '../../constants/theme';
import Header from '../../layout/Header';

const CouponsData = [
  {
    off: '20%',
    desc: 'On minimum purchase of Rs. 1,999',
    category: 'Home Decor',
  },
  {
    off: '50%',
    desc: 'On minimum purchase of Rs. 3,000',
    category: 'Home Furnishing',
  },
  {
    off: '15%',
    desc: 'On minimum purchase of Rs. 0',
    category: 'Mobile Accessories',
  },
];

const Coupons = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
      }}
    >
      <Header titleLeft leftIcon={'back'} title={'My Coupons'} />
      <ScrollView>
        <View style={GlobalStyleSheet.container}>
          {CouponsData.map((data, index) => (
            <CouponItem
              off={data.off}
              desc={data.desc}
              category={data.category}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Coupons;
