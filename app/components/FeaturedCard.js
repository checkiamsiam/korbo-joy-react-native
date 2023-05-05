import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../constants/theme';

const FeaturedCard = ({ image, title }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate('Items', { type: 'Fashion' })}
      style={{
        marginBottom: 20,
      }}
    >
      <Image
        style={{
          borderRadius: 8,
          width: '100%',
          height: 170,
          //aspectRatio : 2 / 2,
        }}
        source={image}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          paddingLeft: '45%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{title}</Text>
        <Text
          style={{ ...FONTS.fontLg, color: COLORS.white, marginBottom: 20 }}
        >
          Collections
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Items', { type: 'Fashion' })}
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            paddingHorizontal: 18,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{ ...FONTS.font, ...FONTS.fontBold, color: COLORS.white }}
          >
            SHOP NOW
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCard;
