import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import Collapsible from "react-native-collapsible";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import ListStyle1 from "../../components/list/ListStyle1";
import Header from "../../layout/Header";

const CollapseElements = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [isCollapsed4, setIsCollapsed4] = useState(true);
  const { COLORS, FONTS, GlobalStyleSheet } = useSelector((state) => state.theme);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor, paddingTop: StatusBar.currentHeight }}>
        <Header titleLeft title={"Collapse"} leftIcon={"back"} />
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                elevation: 5,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={GlobalStyleSheet.card}>
                <View style={{ marginBottom: 8 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Collapse Content
                  </Text>
                </View>
                <Text
                  style={{
                    ...FONTS.font,
                    color: COLORS.text,
                    marginBottom: 15,
                  }}
                >
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Text>
                <Collapsible collapsed={isCollapsed}>
                  <View style={{ paddingBottom: 15 }}>
                    <Text style={{ ...FONTS.font, color: COLORS.text }}>
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true
                      generator on the Internet.
                    </Text>
                  </View>
                </Collapsible>
                <Button onPress={() => setIsCollapsed(!isCollapsed)} title={"Tap me"} />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                elevation: 5,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={GlobalStyleSheet.card}>
                <View>
                  <ListStyle1
                    arrowDown
                    onPress={() => setIsCollapsed2(!isCollapsed2)}
                    icon={<FontAwesome name={"share-alt"} size={15} color={COLORS.danger} />}
                    title={"Social"}
                  />
                  <Collapsible collapsed={isCollapsed2}>
                    <View style={{ paddingLeft: 20 }}>
                      <ListStyle1 arrowRight icon={<FontAwesome name={"facebook-official"} size={15} color={"#3b5998"} />} title={"Facebook"} />
                      <ListStyle1 arrowRight icon={<FontAwesome name={"twitter-square"} size={15} color={"#4099ff"} />} title={"Twitter"} />
                      <ListStyle1 arrowRight icon={<FontAwesome name={"linkedin-square"} size={15} color={"#0077b5"} />} title={"Linkdin"} />
                    </View>
                  </Collapsible>
                </View>
                <View>
                  <ListStyle1
                    arrowDown
                    onPress={() => setIsCollapsed3(!isCollapsed3)}
                    icon={<FontAwesome name={"envelope"} size={15} color={COLORS.secondary} />}
                    title={"Emails"}
                  />
                  <Collapsible collapsed={isCollapsed3}>
                    <View style={{ paddingLeft: 20 }}>
                      <ListStyle1 icon={<FontAwesome name={"arrow-right"} size={15} color={COLORS.text} />} title={"demo@gmail.com"} />
                      <ListStyle1 icon={<FontAwesome name={"arrow-right"} size={15} color={COLORS.text} />} title={"example@gmail.com"} />
                      <ListStyle1 icon={<FontAwesome name={"arrow-right"} size={15} color={COLORS.text} />} title={"your@gmail.com"} />
                    </View>
                  </Collapsible>
                </View>
                <View>
                  <ListStyle1
                    arrowDown
                    onPress={() => setIsCollapsed4(!isCollapsed4)}
                    icon={<FontAwesome name={"phone"} size={15} color={COLORS.info} />}
                    title={"Phones"}
                  />
                  <Collapsible collapsed={isCollapsed4}>
                    <View style={{ paddingLeft: 20 }}>
                      <ListStyle1 icon={<FontAwesome name={"arrow-right"} size={15} color={COLORS.text} />} title={"001 4444 5858"} />
                      <ListStyle1 icon={<FontAwesome name={"arrow-right"} size={15} color={COLORS.text} />} title={"4551 4444 5858"} />
                      <ListStyle1 icon={<FontAwesome name={"arrow-right"} size={15} color={COLORS.text} />} title={"2505 4484 5158"} />
                    </View>
                  </Collapsible>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CollapseElements;
