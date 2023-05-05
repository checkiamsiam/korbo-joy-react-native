import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS } from '../../constants/theme';
import Header from '../../layout/Header';

const EditProfile = (props) => {
  const [isFocused, setisFocused] = useState(false);
  const [isFocused2, setisFocused2] = useState(false);
  const [isFocused3, setisFocused3] = useState(false);
  const [isFocused4, setisFocused4] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
      }}
    >
      <Header titleLeft leftIcon={'back'} title={'Manage Profile'} />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Mobile Number</Text>
              <TextInput
                style={[
                  GlobalStyleSheet.formControl,
                  isFocused && GlobalStyleSheet.activeInput,
                ]}
                defaultValue={'0015 1545 4815'}
                onFocus={() => setisFocused(true)}
                onBlur={() => setisFocused(false)}
                placeholder="Type Mobile number"
                placeholderTextColor={COLORS.label}
              />
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Full Name</Text>
              <TextInput
                style={[
                  GlobalStyleSheet.formControl,
                  isFocused2 && GlobalStyleSheet.activeInput,
                ]}
                defaultValue={'Yatin'}
                onFocus={() => setisFocused2(true)}
                onBlur={() => setisFocused2(false)}
                placeholder="Type your name"
                placeholderTextColor={COLORS.label}
              />
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Email</Text>
              <TextInput
                style={[
                  GlobalStyleSheet.formControl,
                  isFocused3 && GlobalStyleSheet.activeInput,
                ]}
                defaultValue={'yatinxarma@gmail.com'}
                onFocus={() => setisFocused3(true)}
                onBlur={() => setisFocused3(false)}
                placeholder="Type your email"
                placeholderTextColor={COLORS.label}
              />
            </View>
            <View style={GlobalStyleSheet.inputGroup}>
              <Text style={GlobalStyleSheet.label}>Location</Text>
              <TextInput
                style={[
                  GlobalStyleSheet.formControl,
                  isFocused4 && GlobalStyleSheet.activeInput,
                ]}
                onFocus={() => setisFocused4(true)}
                onBlur={() => setisFocused4(false)}
                placeholder="Type your location"
                placeholderTextColor={COLORS.label}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={GlobalStyleSheet.container}>
        <CustomButton title={'Save Details'} />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
