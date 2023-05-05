import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, PermissionsAndroid, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import DropShadow from "react-native-drop-shadow";
import { launchImageLibrary } from "react-native-image-picker";
import uuid from "react-native-uuid";
import FeatherIcon from "react-native-vector-icons/Feather";
import Button from "../../components/Button/Button";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import Header from "../../layout/Header";
import { StatusBar } from "react-native";

const FileUploads = (props) => {
  const { colors } = useTheme();
  const [imageData, setImageData] = useState([]);

  const UploadFile = async (type) => {
    try {
      await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE]).then(
        (result) => {
          if (result["android.permission.CAMERA"] && result["android.permission.READ_EXTERNAL_STORAGE"] === "granted") {
            let options = {
              mediaType: type,
              maxWidth: 200,
              maxHeight: 200,
              quality: 1,
            };
            launchImageLibrary(options, (response) => {
              if (!response.didCancel) {
                setImageData([...imageData, { id: uuid.v4(), image: response.assets[0].uri }]);
              }
            });
          }
        }
      );
    } catch (err) {
      console.warn(err);
    }
  };

  const removeImageItem = (index) => {
    setImageData([...imageData.slice(0, index), ...imageData.slice(index + 1, imageData.length)]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor , paddingTop: StatusBar.currentHeight }}>
      <Header titleLeft title={"File Upload"} leftIcon={"back"} />
      <ScrollView>
        <View style={GlobalStyleSheet.container}>
          <DropShadow
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.15,
              shadowRadius: 5,
            }}
          >
            <View style={GlobalStyleSheet.card}>
              <View
                style={{
                  borderBottomColor: colors.borderColor,
                  marginBottom: 15,
                }}
              >
                <Text style={{ ...FONTS.h6, color: COLORS.title }}>Upload Image</Text>
              </View>

              {imageData.length === 0 && (
                <TouchableOpacity
                  onPress={() => UploadFile("photo")}
                  activeOpacity={0.8}
                  style={{
                    height: 120,
                    borderWidth: 2,
                    borderStyle: "dashed",
                    borderRadius: SIZES.radius,
                    marginBottom: 10,
                    borderColor: COLORS.borderColor,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FeatherIcon name="image" color={COLORS.borderColor} size={40} />
                </TouchableOpacity>
              )}
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginHorizontal: -5,
                  marginBottom: 10,
                }}
              >
                {imageData &&
                  imageData.length > 0 &&
                  imageData.map((data, index) => {
                    return (
                      <View key={index} style={{ width: "33.33%", paddingHorizontal: 5 }}>
                        <View
                          style={{
                            height: 110,
                            position: "relative",
                            marginBottom: 10,
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => removeImageItem(index)}
                            activeOpacity={0.8}
                            style={{
                              height: 25,
                              width: 25,
                              borderRadius: 20,
                              position: "absolute",
                              top: -5,
                              right: -5,
                              zIndex: 1,
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: COLORS.danger,
                            }}
                          >
                            <FeatherIcon name="x" size={16} color={COLORS.white} />
                          </TouchableOpacity>
                          <Image
                            source={{ uri: data.image }}
                            style={{
                              height: "100%",
                              width: "100%",
                              borderRadius: SIZES.radius,
                            }}
                          />
                        </View>
                      </View>
                    );
                  })}
              </View>

              <Button onPress={() => UploadFile("photo")} title={"Upload image"} />
            </View>
          </DropShadow>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FileUploads;
