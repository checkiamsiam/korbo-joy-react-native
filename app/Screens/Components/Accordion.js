import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import ClassicAccordion from '../../components/Accordion/ClassicAccordion';
import AccordionHighlight from '../../components/Accordion/AccordionHighlight';
import AccordionSeprator from '../../components/Accordion/AccordionSeprator';

const AccordionScreen = () => {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}
      >
        <Header titleLeft title={'Accordions'} leftIcon={'back'} />
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
                    Classic Accordion
                  </Text>
                  <Text style={{ ...FONTS.fontSm, color: COLORS.text }}>
                    You can use accordion with icon or without icon.
                  </Text>
                </View>
                <ClassicAccordion />
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
                <View style={{ marginBottom: 20 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Accordion Highlight
                  </Text>
                  <Text style={{ ...FONTS.fontSm, color: COLORS.text }}>
                    You can use accordion with icon or without icon.
                  </Text>
                </View>
                <AccordionHighlight />
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
                <View style={{ marginBottom: 20 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Accordion Seprator
                  </Text>
                  <Text style={{ ...FONTS.fontSm, color: COLORS.text }}>
                    You can use accordion with icon or without icon.
                  </Text>
                </View>
                <AccordionSeprator />
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
});

export default AccordionScreen;
