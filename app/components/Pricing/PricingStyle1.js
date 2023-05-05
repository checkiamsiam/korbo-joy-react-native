import React from 'react';
import { Text, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Button from '../Button/Button';

const PricingStyle1 = () => {
  const Data = [
    'Access to all basic features',
    'Basic reporting and analytics',
    'Up to 10 individual users',
    '20 GB individual data each user',
    'Basic chat and emails support',
  ];

  return (
    <>
      <View
        style={{
          padding: 30,
          borderRadius: SIZES.radius,
          borderWidth: 1,
          borderColor: COLORS.primary,
          backgroundColor: COLORS.white,
          maxWidth: 320,
          width: '100%',
        }}
      >
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ ...FONTS.h3, color: COLORS.title }}>$10/Month</Text>
          <Text
            style={{
              ...FONTS.font,
              ...FONTS.fontBold,
              marginBottom: 10,
              color: COLORS.title,
            }}
          >
            Basic plan
          </Text>
          <Text style={{ ...FONTS.font, color: COLORS.text }}>
            Billed annually
          </Text>
        </View>
        <View style={{ marginBottom: 25 }}>
          {Data.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
                }}
              >
                <FeatherIcon
                  style={{ marginRight: 8 }}
                  color={COLORS.primary}
                  name="check-circle"
                  size={18}
                />
                <Text style={{ ...FONTS.font, color: COLORS.text }}>
                  {data}
                </Text>
              </View>
            );
          })}
        </View>
        <Button title={'Get started'} />
      </View>
    </>
  );
};

export default PricingStyle1;
