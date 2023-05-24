import React from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { useSelector } from "react-redux";

const Loading = () => {
  const { loading } = useSelector((state) => state.actionSheet);
  return <Spinner visible={loading} />;
};

export default Loading;
