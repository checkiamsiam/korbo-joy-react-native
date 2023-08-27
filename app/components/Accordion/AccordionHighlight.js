import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

const AccordionHighlight = () => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const [activeSections, setActiveSections] = useState([0]);
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const SECTIONS = [
    {
      icon: "heart",
      title: "Accordion Header One",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: "star",
      title: "Accordion Header Two",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: "bookmark",
      title: "Accordion Header Three",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  const AccordionHeader = (item, _, isActive) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 12,
          paddingHorizontal: 15,
          borderRadius: SIZES.radius,
          backgroundColor: isActive ? COLORS.primary : COLORS.primaryLight,
        }}
      >
        <FontAwesome
          style={{ marginRight: 10 }}
          name={item.icon}
          size={15}
          color={isActive ? COLORS.white : COLORS.title}
        />
        <Text
          style={[
            FONTS.font,
            FONTS.fontMedium,
            { color: isActive ? COLORS.white : COLORS.title, flex: 1 },
          ]}
        >
          {item.title}
        </Text>
        <FontAwesome
          name={isActive ? "angle-up" : "angle-down"}
          size={20}
          color={isActive ? COLORS.white : COLORS.title}
        />
      </View>
    );
  };
  const AccordionBody = (item, _, isActive) => {
    return (
      <View style={{ marginBottom: 15, marginTop: 10, paddingHorizontal: 15 }}>
        <Text style={[FONTS.fontSm, { color: COLORS.text }]}>
          {item.content}
        </Text>
      </View>
    );
  };

  return (
    <>
      <Accordion
        sections={SECTIONS}
        sectionContainerStyle={{ marginBottom: 8 }}
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

export default AccordionHighlight;
