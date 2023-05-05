import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../constants/theme';

const Divider = (props) => {
  return (
    <>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: props.color ? props.color : COLORS.borderColor,
          borderStyle: props.dashed ? 'dashed' : 'solid',
          marginTop: 15,
          marginBottom: 15,
          ...props.style,
        }}
      />
    </>
  );
};

export default Divider;
