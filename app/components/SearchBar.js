import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SearchBar = (props) => {
  return (
    <>
      <View
        style={{
          position: 'relative',
        }}
      >
        <TextInput
          style={{
            ...FONTS.fontLg,
            borderWidth: 1,
            borderColor: COLORS.borderColor,
            borderRadius: SIZES.radius,
            paddingHorizontal: 18,
            paddingVertical: 10,
            color: COLORS.title,
          }}
          placeholder="Search here.."
          placeholderTextColor={COLORS.text}
        />
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: 0,
            top: -2,
          }}
        >
          <FeatherIcon name="search" color={COLORS.secondary} size={26} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SearchBar;
