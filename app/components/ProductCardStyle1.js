import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const ProductCardStyle1 = ({
  image,
  title,
  price,
  oldPrice,
  offer,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        borderRadius: 8,
      }}
    >
      <Image
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 80 / 100,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        source={image}
      />
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            ...FONTS.font,
            fontSize: 11,
            ...FONTS.fontBold,
            color: COLORS.title,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -3,
          }}
        >
          <Text
            style={{
              ...FONTS.font,
              fontSize: 10,
              ...FONTS.fontBold,
              color: COLORS.success,
            }}
          >
            {offer}
          </Text>
          <Text
            style={{
              ...FONTS.font,
              fontSize: 10,
              textDecorationLine: 'line-through',
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            {oldPrice}
          </Text>
          <Text
            style={{
              ...FONTS.font,
              fontSize: 10,
              ...FONTS.fontBold,
              color: COLORS.title,
            }}
          >
            {price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardStyle1;
