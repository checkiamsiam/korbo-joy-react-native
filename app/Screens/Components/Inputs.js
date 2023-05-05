import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, ICONS, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';
import CustomInput from '../../components/Input/CustomInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import DropShadow from 'react-native-drop-shadow';

const Inputs = () => {
  const [passwordShow, setPasswordShow] = useState(true);

  const handndleShowPassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}
      >
        <Header titleLeft title={'Inputs'} leftIcon={'back'} />
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={styles.card}>
                <View style={{ marginBottom: 15 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Input with icon
                  </Text>
                </View>

                <View style={{ marginBottom: 15 }}>
                  <View style={styles.inputIcon}>
                    <SvgXml stroke={COLORS.primary} xml={ICONS.user} />
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Username"
                    placeholderTextColor={COLORS.text}
                  />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <View style={styles.inputIcon}>
                    <SvgXml stroke={COLORS.primary} xml={ICONS.email} />
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Email"
                    placeholderTextColor={COLORS.text}
                  />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <View style={styles.inputIcon}>
                    <SvgXml fill={COLORS.primary} xml={ICONS.lock} />
                  </View>
                  <TextInput
                    secureTextEntry={passwordShow}
                    style={styles.inputStyle}
                    placeholder="Password"
                    placeholderTextColor={COLORS.text}
                  />
                  <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Password"
                    accessibilityHint="Password show and hidden"
                    onPress={() => handndleShowPassword()}
                    style={styles.eyeIcon}
                  >
                    <SvgXml
                      xml={passwordShow ? ICONS.eyeClose : ICONS.eyeOpen}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </DropShadow>

            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={styles.card}>
                <View style={{ marginBottom: 15 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Modern Fields
                  </Text>
                </View>
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
                    placeholder="Enter Username"
                    onChangeText={(value) => console.log(value)}
                  />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <CustomInput
                    icon={
                      <MaterialIcon
                        style={{ opacity: 0.6 }}
                        name={'email'}
                        size={20}
                        color={COLORS.text}
                      />
                    }
                    value={''}
                    placeholder="Enter Email"
                    onChangeText={(value) => console.log(value)}
                  />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <CustomInput
                    type={'password'}
                    icon={
                      <FontAwesome
                        style={{ opacity: 0.6 }}
                        name={'lock'}
                        size={20}
                        color={COLORS.text}
                      />
                    }
                    value={''}
                    placeholder="Password"
                    onChangeText={(value) => console.log(value)}
                  />
                </View>
              </View>
            </DropShadow>

            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={styles.card}>
                <View style={{ marginBottom: 15 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Input with different sizes
                  </Text>
                </View>
                <View style={{ marginBottom: 15 }}>
                  <CustomInput
                    inputLg
                    icon={
                      <FontAwesome
                        style={{ opacity: 0.6 }}
                        name={'user'}
                        size={20}
                        color={COLORS.textLight}
                      />
                    }
                    value={''}
                    placeholder="Enter Username"
                    onChangeText={(value) => console.log(value)}
                  />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <CustomInput
                    icon={
                      <FontAwesome
                        style={{ opacity: 0.6 }}
                        name={'user'}
                        size={20}
                        color={COLORS.textLight}
                      />
                    }
                    value={''}
                    placeholder="Enter Username"
                    onChangeText={(value) => console.log(value)}
                  />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <CustomInput
                    inputSm
                    icon={
                      <FontAwesome
                        style={{ opacity: 0.6 }}
                        name={'user'}
                        size={20}
                        color={COLORS.textLight}
                      />
                    }
                    value={''}
                    placeholder="Enter Username"
                    onChangeText={(value) => console.log(value)}
                  />
                </View>
              </View>
            </DropShadow>

            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={styles.card}>
                <View style={{ marginBottom: 15 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Modern Fields With Radius
                  </Text>
                </View>
                <View style={{ marginBottom: 15 }}>
                  <CustomInput
                    inputRounded
                    icon={
                      <FontAwesome
                        style={{ opacity: 0.6 }}
                        name={'user'}
                        size={20}
                        color={COLORS.textLight}
                      />
                    }
                    value={''}
                    placeholder="Enter Username"
                    onChangeText={(value) => console.log(value)}
                  />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <CustomInput
                    inputRounded
                    icon={
                      <MaterialIcon
                        style={{ opacity: 0.6 }}
                        name={'email'}
                        size={20}
                        color={COLORS.textLight}
                      />
                    }
                    value={''}
                    placeholder="Enter Email"
                    onChangeText={(value) => console.log(value)}
                  />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <CustomInput
                    inputRounded
                    type={'password'}
                    icon={
                      <FontAwesome
                        style={{ opacity: 0.6 }}
                        name={'lock'}
                        size={20}
                        color={COLORS.textLight}
                      />
                    }
                    value={''}
                    placeholder="Password"
                    onChangeText={(value) => console.log(value)}
                  />
                </View>
              </View>
            </DropShadow>

            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={styles.card}>
                <View style={{ marginBottom: 15 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Minimalist Fields
                  </Text>
                </View>
                <View style={{ marginBottom: 15 }}>
                  <CustomInput
                    inputBorder
                    icon={
                      <FontAwesome
                        style={{ opacity: 0.6 }}
                        name={'user'}
                        size={20}
                        color={COLORS.textLight}
                      />
                    }
                    value={''}
                    placeholder="Enter Username"
                    onChangeText={(value) => console.log(value)}
                  />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <CustomInput
                    inputBorder
                    icon={
                      <MaterialIcon
                        style={{ opacity: 0.6 }}
                        name={'email'}
                        size={20}
                        color={COLORS.textLight}
                      />
                    }
                    value={''}
                    placeholder="Enter Email"
                    onChangeText={(value) => console.log(value)}
                  />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <CustomInput
                    inputBorder
                    type={'password'}
                    icon={
                      <FontAwesome
                        style={{ opacity: 0.6 }}
                        name={'lock'}
                        size={20}
                        color={COLORS.textLight}
                      />
                    }
                    value={''}
                    placeholder="Password"
                    onChangeText={(value) => console.log(value)}
                  />
                </View>
              </View>
            </DropShadow>

            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={styles.card}>
                <View style={{ marginBottom: 15 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Range Slider
                  </Text>
                </View>
                <View style={{ marginBottom: 15 }}>
                  <MultiSlider
                    enableLabel
                    customLabel={() => (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          position: 'absolute',
                          bottom: -4,
                          width: '100%',
                        }}
                      >
                        <Text style={{ ...FONTS.fontSm, color: COLORS.text }}>
                          0%
                        </Text>
                        <Text style={{ ...FONTS.fontSm, color: COLORS.text }}>
                          25%
                        </Text>
                        <Text style={{ ...FONTS.fontSm, color: COLORS.text }}>
                          50%
                        </Text>
                        <Text style={{ ...FONTS.fontSm, color: COLORS.text }}>
                          75%
                        </Text>
                        <Text style={{ ...FONTS.fontSm, color: COLORS.text }}>
                          100%
                        </Text>
                      </View>
                    )}
                    trackStyle={{
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: 'rgba(142,165,200,.3)',
                    }}
                    selectedStyle={{
                      backgroundColor: COLORS.primary,
                    }}
                    markerStyle={{
                      backgroundColor: COLORS.white,
                      top: 1,
                      height: 16,
                      width: 16,
                      borderWidth: 3,
                      borderColor: COLORS.primary,
                    }}
                    sliderLength={SIZES.width - 60}
                    max={100}
                  />
                </View>
              </View>
            </DropShadow>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: SIZES.radius,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.white,
  },
  inputStyle: {
    ...FONTS.fontLg,
    height: 50,
    paddingLeft: 60,
    borderWidth: 1,
    color: COLORS.title,
    borderColor: COLORS.borderColor,
    borderRadius: SIZES.radius,
  },
  inputIcon: {
    backgroundColor: COLORS.primaryLight,
    height: 40,
    width: 40,
    borderRadius: 10,
    position: 'absolute',
    left: 5,
    top: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    zIndex: 1,
    top: 0,
  },
});

export default Inputs;
