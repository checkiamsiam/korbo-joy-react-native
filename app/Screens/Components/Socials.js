import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS } from '../../constants/theme';
import Header from '../../layout/Header';
import SocialBtn from '../../components/Socials/SocialBtn';
import SocialIcon from '../../components/Socials/SocialIcon';
import DropShadow from 'react-native-drop-shadow';
import { StatusBar } from 'react-native';

const Socials = () => {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.backgroundColor , paddingTop: StatusBar.currentHeight }}
      >
        <Header title={'Socials'} titleLeft leftIcon={'back'} />
        <ScrollView>
          <View style={{ ...GlobalStyleSheet.container }}>
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
              <View style={GlobalStyleSheet.card}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.borderColor,
                    paddingBottom: 8,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ ...FONTS.h6, color: COLORS.title }}>
                    Social Button
                  </Text>
                </View>
                <View style={GlobalStyleSheet.row}>
                  <View style={[GlobalStyleSheet.col50, { marginBottom: 10 }]}>
                    <SocialBtn
                      icon={
                        <FontAwesome
                          name="facebook"
                          size={16}
                          color={COLORS.white}
                        />
                      }
                      color={'#3b5998'}
                      text={'Facebook'}
                    />
                  </View>
                  <View style={[GlobalStyleSheet.col50, { marginBottom: 10 }]}>
                    <SocialBtn
                      icon={
                        <FontAwesome
                          name="linkedin-square"
                          size={16}
                          color={COLORS.white}
                        />
                      }
                      color={'#007bb6'}
                      text={'LinkdIn'}
                    />
                  </View>
                  <View style={[GlobalStyleSheet.col50, { marginBottom: 10 }]}>
                    <SocialBtn
                      icon={
                        <FontAwesome
                          name="twitter"
                          size={16}
                          color={COLORS.white}
                        />
                      }
                      color={'#1da1f2'}
                      text={'Twitter'}
                    />
                  </View>
                  <View style={[GlobalStyleSheet.col50, { marginBottom: 10 }]}>
                    <SocialBtn
                      icon={
                        <FontAwesome
                          name="whatsapp"
                          size={16}
                          color={COLORS.white}
                        />
                      }
                      color={'#25d366'}
                      text={'WhatsApp'}
                    />
                  </View>
                  <View style={[GlobalStyleSheet.col50, { marginBottom: 10 }]}>
                    <SocialBtn
                      icon={
                        <FontAwesome
                          name="pinterest"
                          size={16}
                          color={COLORS.white}
                        />
                      }
                      color={'#bd081c'}
                      text={'Pinterest'}
                    />
                  </View>
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
              <View style={GlobalStyleSheet.card}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.borderColor,
                    paddingBottom: 8,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ ...FONTS.h6, color: COLORS.title }}>
                    Social Button Rounded
                  </Text>
                </View>
                <View style={GlobalStyleSheet.row}>
                  <View style={[GlobalStyleSheet.col50, { marginBottom: 10 }]}>
                    <SocialBtn
                      rounded
                      icon={
                        <FontAwesome
                          name="facebook"
                          size={16}
                          color={COLORS.white}
                        />
                      }
                      color={'#3b5998'}
                      text={'Facebook'}
                    />
                  </View>
                  <View style={[GlobalStyleSheet.col50, { marginBottom: 10 }]}>
                    <SocialBtn
                      rounded
                      icon={
                        <FontAwesome
                          name="linkedin-square"
                          size={16}
                          color={COLORS.white}
                        />
                      }
                      color={'#007bb6'}
                      text={'LinkdIn'}
                    />
                  </View>
                  <View style={[GlobalStyleSheet.col50, { marginBottom: 10 }]}>
                    <SocialBtn
                      rounded
                      icon={
                        <FontAwesome
                          name="twitter"
                          size={16}
                          color={COLORS.white}
                        />
                      }
                      color={'#1da1f2'}
                      text={'Twitter'}
                    />
                  </View>
                  <View style={[GlobalStyleSheet.col50, { marginBottom: 10 }]}>
                    <SocialBtn
                      rounded
                      icon={
                        <FontAwesome
                          name="whatsapp"
                          size={16}
                          color={COLORS.white}
                        />
                      }
                      color={'#25d366'}
                      text={'WhatsApp'}
                    />
                  </View>
                  <View style={[GlobalStyleSheet.col50, { marginBottom: 10 }]}>
                    <SocialBtn
                      rounded
                      icon={
                        <FontAwesome
                          name="pinterest"
                          size={16}
                          color={COLORS.white}
                        />
                      }
                      color={'#bd081c'}
                      text={'Pinterest'}
                    />
                  </View>
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
              <View style={GlobalStyleSheet.card}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.borderColor,
                    paddingBottom: 8,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ ...FONTS.h6, color: COLORS.title }}>
                    Social Icons
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  <SocialIcon
                    color={'#3b5998'}
                    icon={
                      <FontAwesome
                        name="facebook"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    color={'#007bb6'}
                    icon={
                      <FontAwesome
                        name="linkedin-square"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    color={'#1da1f2'}
                    icon={
                      <FontAwesome
                        name="twitter"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    color={'#25d366'}
                    icon={
                      <FontAwesome
                        name="whatsapp"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    color={'#bd081c'}
                    icon={
                      <FontAwesome
                        name="pinterest"
                        size={16}
                        color={COLORS.white}
                      />
                    }
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
              <View style={GlobalStyleSheet.card}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.borderColor,
                    paddingBottom: 8,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ ...FONTS.h6, color: COLORS.title }}>
                    Social Icons Rounded
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  <SocialIcon
                    rounded
                    color={'#3b5998'}
                    icon={
                      <FontAwesome
                        name="facebook"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    rounded
                    color={'#007bb6'}
                    icon={
                      <FontAwesome
                        name="linkedin-square"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    rounded
                    color={'#1da1f2'}
                    icon={
                      <FontAwesome
                        name="twitter"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    rounded
                    color={'#25d366'}
                    icon={
                      <FontAwesome
                        name="whatsapp"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    rounded
                    color={'#bd081c'}
                    icon={
                      <FontAwesome
                        name="pinterest"
                        size={16}
                        color={COLORS.white}
                      />
                    }
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
              <View style={GlobalStyleSheet.card}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.borderColor,
                    paddingBottom: 8,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ ...FONTS.h6, color: COLORS.title }}>
                    Social Icons Square
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  <SocialIcon
                    square
                    color={'#3b5998'}
                    icon={
                      <FontAwesome
                        name="facebook"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    square
                    color={'#007bb6'}
                    icon={
                      <FontAwesome
                        name="linkedin-square"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    square
                    color={'#1da1f2'}
                    icon={
                      <FontAwesome
                        name="twitter"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    square
                    color={'#25d366'}
                    icon={
                      <FontAwesome
                        name="whatsapp"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    square
                    color={'#bd081c'}
                    icon={
                      <FontAwesome
                        name="pinterest"
                        size={16}
                        color={COLORS.white}
                      />
                    }
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
              <View style={GlobalStyleSheet.card}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.borderColor,
                    paddingBottom: 8,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ ...FONTS.h6, color: COLORS.title }}>
                    Social Icons Sizes
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  <SocialIcon
                    btnLg
                    color={'#3b5998'}
                    icon={
                      <FontAwesome
                        name="facebook"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    color={'#007bb6'}
                    icon={
                      <FontAwesome
                        name="linkedin-square"
                        size={16}
                        color={COLORS.white}
                      />
                    }
                  />
                  <SocialIcon
                    btnSm
                    color={'#1da1f2'}
                    icon={
                      <FontAwesome
                        name="twitter"
                        size={16}
                        color={COLORS.white}
                      />
                    }
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

export default Socials;
