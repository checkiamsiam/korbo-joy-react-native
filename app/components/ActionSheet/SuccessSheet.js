import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS } from '../../constants/theme';

const SuccessSheet = () => {
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 35,
          paddingVertical: 20,
        }}
      >
        <Ionicons
          name="checkmark-circle"
          style={{ marginBottom: 8 }}
          color={COLORS.success}
          size={60}
        />
        <Text style={{ ...FONTS.h5, color: COLORS.title }}>Success</Text>
        <Text
          style={{ ...FONTS.font, color: COLORS.text, textAlign: 'center' }}
        >
          You can continue with your previous actions. Easy to attach these to
          success calls.
        </Text>
      </View>
    </>
  );
};

export default SuccessSheet;
