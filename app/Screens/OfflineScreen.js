import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, IMAGES } from "../constants/theme";

const OfflineScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{
            height: 100,
            resizeMode: "contain",
          }}
          source={IMAGES.logo}
        />
      </View>
      <View style={styles.container}>
        <FeatherIcon name="wifi-off" size={80} color={COLORS.primary} />
        <Text style={styles.text}>You are offline</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  text: {
    fontSize: 20,
    marginBottom: 24,
    color: COLORS.text,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default OfflineScreen;
