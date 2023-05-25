import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

const AccordionSeprator = (props) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const [activeSections, setActiveSections] = useState([0]);
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const SECTIONS = [
    {
      color: "#eb6374",
      icon: "heart",
      title: "Accordion Header One",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      color: "#a3815d",
      icon: "star",
      title: "Accordion Header Two",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      color: "#9cd986",
      icon: "bookmark",
      title: "Accordion Header Three",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  const AccordionHeader = (item, _, isActive) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 12,
        }}
      >
        <FontAwesome style={{ marginRight: 10 }} name={item.icon} size={15} color={item.color} />
        <Text style={[FONTS.font, FONTS.fontMedium, { color: COLORS.title, flex: 1 }]}>{item.title}</Text>
        <FontAwesome name={isActive ? "angle-up" : "angle-down"} size={20} color={COLORS.title} />
      </View>
    );
  };
  const AccordionBody = (item, _, isActive) => {
    return (
      <View style={{ marginBottom: 15 }}>
        <Text style={[FONTS.fontSm, { color: COLORS.text }]}>{item.content}</Text>
      </View>
    );
  };

  return (
    <>
      <Accordion
        sections={SECTIONS}
        sectionContainerStyle={{
          borderBottomWidth: 1,
          borderColor: COLORS.borderColor,
        }}
        duration={300}
        activeSections={activeSections}
        onChange={setSections}
        touchableComponent={TouchableOpacity}
        renderHeader={AccordionHeader}
        renderContent={AccordionBody}
      />
    </>
  );
};

export default AccordionSeprator;
