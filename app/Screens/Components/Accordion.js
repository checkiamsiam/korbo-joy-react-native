import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import AccordionHighlight from "../../components/Accordion/AccordionHighlight";
import AccordionSeprator from "../../components/Accordion/AccordionSeprator";
import ClassicAccordion from "../../components/Accordion/ClassicAccordion";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import Header from "../../layout/Header";

const AccordionScreen = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor, paddingTop: StatusBar.currentHeight }}>
        <Header titleLeft title={"Accordions"} leftIcon={"back"} />
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
            <View
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
                elevation: 5,
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
                  <Text style={{ ...FONTS.fontSm, color: COLORS.text }}>You can use accordion with icon or without icon.</Text>
                </View>
                <ClassicAccordion />
              </View>
            </View>
            <View
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
                elevation: 5,
                backgroundColor: "#fff",
                borderRadius: 10,
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
                  <Text style={{ ...FONTS.fontSm, color: COLORS.text }}>You can use accordion with icon or without icon.</Text>
                </View>
                <AccordionHighlight />
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FFF",
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
                elevation: 5,
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
                  <Text style={{ ...FONTS.fontSm, color: COLORS.text }}>You can use accordion with icon or without icon.</Text>
                </View>
                <AccordionSeprator />
              </View>
            </View>
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
