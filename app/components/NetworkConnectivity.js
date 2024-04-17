import { API_BASE } from "@env";
import { MaterialIcons } from "@expo/vector-icons";
import NetInfo from "@react-native-community/netinfo";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import MaintenanceHome from "../Screens/Maintenance/MaintenanceHome";

const NetworkConnectivity = ({ children }) => {
  const { COLORS } = useSelector((state) => state.theme);
  const [isOnline, setIsOnline] = useState(true);
  const [isServerOK, setIsServerOk] = useState(true);

  const offlineIcon = (
    <FeatherIcon name="wifi-off" size={80} color={COLORS.primary} />
  );
  const MaintannaceIcon = (
    <MaterialIcons name="build" size={80} color={COLORS.primary} />
  );

  const checkInternetConnectivity = async () => {
    try {
      const response = await fetch("https://8.8.8.8", { method: "HEAD" });
      setIsOnline(response.ok);
    } catch (error) {
      setIsOnline(false);
    }
  };
  const checkServerConnectivity = async () => {
    try {
      const response = await fetch(API_BASE, { method: "HEAD" });
      setIsServerOk(response.ok);
    } catch (error) {
      setIsServerOk(false);
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

  useEffect(() => {
    checkServerConnectivity();
  }, []);

  if (!isOnline) {
    return (
      <MaintenanceHome
        icon={offlineIcon}
        title="You are offline. Check you internet connection"
      />
    );
  }
  // if (!isServerOK) {
  //   return (
  //     <MaintenanceHome
  //       icon={MaintannaceIcon}
  //       title="Application is under maintenance. Please try again later"
  //     />
  //   );
  // }

  return children;
};

export default NetworkConnectivity;
