import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, FONTS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const SectionHeader = ({ title, action, actionTitle, actionFunc }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 10,
        paddingTop: 10,
      }}
    >
      <Text
        style={{
          ...FONTS.font,
          ...FONTS.fontBold,
          color: COLORS.title,
          flex: 1,
        }}
      >
        {title}
      </Text>
      {action && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Items", { type: "Fashion" })}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.fontSm, color: COLORS.title, marginRight: 2 }}>{actionTitle}</Text>
          <FeatherIcon size={16} color={COLORS.title} name="chevron-right" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;
