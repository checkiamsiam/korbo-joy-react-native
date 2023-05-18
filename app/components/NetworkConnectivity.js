import NetInfo from "@react-native-community/netinfo";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import OfflineScreen from "../Screens/OfflineScreen";

const NetworkConnectivity = ({ children }) => {
  const [isOnline, setIsOnline] = useState(true);

  const checkInternetConnectivity = async () => {
    try {
      const response = await fetch("https://8.8.8.8", { method: "HEAD" });
      setIsOnline(response.ok);
    } catch (error) {
      setIsOnline(false);
    }
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        checkInternetConnectivity();
      } else {
        setIsOnline(false);
      }
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
