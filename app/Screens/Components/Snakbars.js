import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropShadow from 'react-native-drop-shadow';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Header from '../../layout/Header';
import { COLORS } from '../../constants/theme';
import ListStyle1 from '../../components/list/ListStyle1';
import { showMessage } from "react-native-flash-message";

const Snackbars = () => {
  const ShowSnackbarSuccess = () => {
    showMessage({
      message: 'Confirmed',
      backgroundColor: COLORS.success,
    });
  };
  const ShowSnackbarWarning = () => {
    showMessage({
      message: "Something's wrong!",
      backgroundColor: COLORS.warning,
    });
  };
  const ShowSnackbarInfo = () => {
    showMessage({
      message: "We're on it",
      backgroundColor: COLORS.info,
    });
  };
  const ShowSnackbarError = () => {
    showMessage({
      message: 'Error Occured',
      backgroundColor: COLORS.danger,
    });
  };

  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}
      >
        <Header title={'Snackbars'} titleLeft leftIcon={'back'} />
        <ScrollView>
          <View style={{ ...GlobalStyleSheet.container }}>
            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={GlobalStyleSheet.card}>
                <ListStyle1
                  onPress={() => ShowSnackbarSuccess()}
                  arrowRight
                  icon={
                    <FontAwesome
                      size={14}
                      color={COLORS.success}
                      name={'check'}
                    />
                  }
                  title={'Confirmation Snackbar'}
                />
                <ListStyle1
                  onPress={() => ShowSnackbarWarning()}
                  arrowRight
                  icon={
                    <FontAwesome
                      size={14}
                      color={COLORS.warning}
                      name={'warning'}
                    />
                  }
                  title={'Warning Snackbar'}
                />
                <ListStyle1
                  onPress={() => ShowSnackbarInfo()}
                  arrowRight
                  icon={
                    <FontAwesome
                      size={14}
                      color={COLORS.info}
                      name={'refresh'}
                    />
                  }
                  title={'Loading Snackbar'}
                />
                <ListStyle1
                  onPress={() => ShowSnackbarError()}
                  arrowRight
                  icon={
                    <FontAwesome
                      size={14}
                      color={COLORS.danger}
                      name={'close'}
                    />
                  }
                  title={'Error Snackbar'}
                />
              </View>
            </DropShadow>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Snackbars;
