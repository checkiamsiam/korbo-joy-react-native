import React from "react";
import { StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { useSelector } from "react-redux";

const Loading = () => {
  const { loading } = useSelector((state) => state.actionSheet);
  return <Spinner visible={loading} textContent={"Loading..."} textStyle={styles.spinnerTextStyle} />;
};

export default Loading;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
});
