import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Button from '../Button/Button';
import CustomInput from '../Input/CustomInput';

const LoginModal = (props) => {
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.white,
          maxWidth: 330,
          width: '100%',
          borderRadius: SIZES.radius,
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            paddingHorizontal: 15,
            borderBottomWidth: 1,
            borderColor: COLORS.borderColor,
            paddingVertical: 6,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ ...FONTS.h5, color: COLORS.title }}>Sign In</Text>
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => props.close(false)}
          >
            <FeatherIcon name={'x'} size={24} color={COLORS.title} />
          </TouchableOpacity>
        </View>
        <View style={GlobalStyleSheet.container}>
          <View style={{ marginBottom: 15 }}>
            <CustomInput
              icon={
                <FontAwesome
                  style={{ opacity: 0.6 }}
                  name={'user'}
                  size={20}
                  color={COLORS.text}
                />
              }
              value={''}
              placeholder={'Name'}
              onChangeText={(value) => console.log(value)}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <CustomInput
              icon={
                <FontAwesome
                  style={{ opacity: 0.6 }}
                  name={'lock'}
                  size={20}
                  color={COLORS.text}
                />
              }
              value={''}
              placeholder={'Password'}
              onChangeText={(value) => console.log(value)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              marginTop: 10,
            }}
          >
            <TouchableOpacity>
              <Text style={{ ...FONTS.font, color: COLORS.primary }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ ...FONTS.font, color: COLORS.primary }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
          <Button title={'Login'} />
        </View>
      </View>
    </>
  );
};

export default LoginModal;
