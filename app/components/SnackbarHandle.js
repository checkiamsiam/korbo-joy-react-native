import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Snackbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { hideSnack } from "../features/Action/SnackbarSlice";

const SnackbarHandle = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { visible, text, actionLabel, navigateTo } = useSelector((state) => state.snackbar);
  return (
    <>
      <Snackbar
        visible={visible}
        duration={3000}
        onDismiss={() => dispatch(hideSnack())}
        action={{
          label: actionLabel,
          onPress: () =>
            navigation.navigate("BottomNavigation", {
              screen: navigateTo,
            }),
        }}
      >
        {text}
      </Snackbar>
    </>
  );
};

export default SnackbarHandle;
