import NetInfo from "@react-native-community/netinfo";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import OfflineScreen from "../Screens/OfflineScreen";

const NetworkConnectivity = ({ children }) => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [isOnline]);

  if (!isOnline) {
    return <OfflineScreen />;
  }
  return children;
};

export default NetworkConnectivity;
