import { IconButton } from "@react-native-material/core";
import * as ImagePicker from "expo-image-picker";
import React, { useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import { useDispatch, useSelector } from "react-redux";
import UnitedStates from "../../assets/images/flags/UnitedStates.png";
import german from "../../assets/images/flags/german.png";
import india from "../../assets/images/flags/india.png";
import italian from "../../assets/images/flags/italian.png";
import spanish from "../../assets/images/flags/spanish.png";
import { IMAGES } from "../../constants/theme";
import { logout } from "../../features/Auth/AuthSlice";
import { clearCart } from "../../features/Cart/CartSlice";
import Header from "../../layout/Header";

const languagetData = [
  {
    flag: india,
    name: "Indian",
  },
  {
    flag: UnitedStates,
    name: "English",
  },
  {
    flag: german,
    name: "German",
  },
  {
    flag: italian,
    name: "Italian",
  },
  {
    flag: spanish,
    name: "Spanish",
  },
];

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const RBSheetLanguage = useRef();
  const { user } = useSelector((state) => state.auth);
  const { COLORS, FONTS, GlobalStyleSheet } = useSelector(
    (state) => state.theme
  );
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [65, 65],
      quality: 1,
    });

    if (!result?.canceled) {
      setImage(result.assets[0].uri);
      // server side upload
    }
  };
  const styles = createStyles(COLORS);

  return (
    <>
      <RBSheet
        ref={RBSheetLanguage}
        closeOnDragDown={true}
        height={400}
        openDuration={300}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,.3)",
          },
          container: {
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
        }}
      >
        <View
          style={{
            alignItems: "center",
            borderBottomWidth: 1,
            borderColor: COLORS.borderColor,
            paddingBottom: 8,
            paddingTop: 4,
          }}
        >
          <Text style={{ ...FONTS.h5, color: COLORS.title }}>Language</Text>
        </View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 15 }}
        >
          {languagetData.map((data, index) => (
            <TouchableOpacity
              onPress={() => RBSheetLanguage.current.close()}
              key={index}
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderColor: COLORS.borderColor,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  height: 20,
                  width: 25,
                  marginRight: 12,
                }}
                source={data.flag}
              />
              <Text style={{ ...FONTS.fontLg, color: COLORS.title, flex: 1 }}>
                {data.name}
              </Text>
              <FeatherIcon name="chevron-right" color={COLORS.text} size={24} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </RBSheet>

      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.backgroundColor,
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <Header title={"Profile"} />
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <TouchableHighlight
                onPress={pickImage}
                style={{
                  height: 65,
                  width: 65,
                  borderRadius: 65,
                  marginRight: 15,
                }}
              >
                <View>
                  <Image
                    style={{
                      height: 65,
                      width: 65,
                      borderRadius: 65,
                    }}
                    source={image ? { uri: image } : IMAGES.user}
                  />
                  <View
                    style={{
                      flex: 1,
                      height: 65,
                      width: 65,
                      borderRadius: 65,
                      position: "absolute",
                      backgroundColor: "rgba(51, 51, 51, 0.6)",
                    }}
                  >
                    <Ionicons
                      name="md-image"
                      size={20}
                      color="white"
                      style={{ position: "absolute", top: 23, left: 23 }}
                    />
                  </View>
                </View>
              </TouchableHighlight>
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text style={{ ...FONTS.h6, textTransform: "capitalize" }}>
                  {user.name ? user.name : "Guest"}
                </Text>
                <Text style={{ ...FONTS.font }}>
                  {user.number ? user.number : "+880XXXXXXXXXX"}
                </Text>
              </View>
              <IconButton
                onPress={() => navigation.navigate("EditProfile")}
                color={COLORS.primary}
                icon={(props) => <Octicons name="pencil" {...props} />}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginHorizontal: -10,
              }}
            >
              <View style={{ width: "50%", paddingHorizontal: 5 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Orders")}
                  style={styles.profileBtn}
                >
                  <Ionicons
                    style={{ marginRight: 10, top: -1 }}
                    color={COLORS.text}
                    size={20}
                    name={"cube-outline"}
                  />
                  <Text style={{ ...FONTS.h6 }}>Orders</Text>
                </TouchableOpacity>
              </View>
              {/* <View style={{ width: "50%", paddingHorizontal: 5 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Wishlist")}
                  style={styles.profileBtn}
                >
                  <FeatherIcon
                    style={{ marginRight: 10, top: -1 }}
                    color={COLORS.text}
                    size={20}
                    name={"heart"}
                  />
                  <Text style={{ ...FONTS.h6 }}>Wishlist</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: "50%", paddingHorizontal: 5 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Coupons")}
                  style={styles.profileBtn}
                >
                  <FeatherIcon
                    style={{ marginRight: 10, top: -1 }}
                    color={COLORS.text}
                    size={20}
                    name={"gift"}
                  />
                  <Text style={{ ...FONTS.h6 }}>Coupons</Text>
                </TouchableOpacity>
              </View> */}
              <View style={{ width: "50%", paddingHorizontal: 5 }}>
                <TouchableOpacity style={styles.profileBtn}>
                  <FeatherIcon
                    style={{ marginRight: 10, top: -1 }}
                    color={COLORS.text}
                    size={20}
                    name={"headphones"}
                  />
                  <Text style={{ ...FONTS.h6 }}>Help Center</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              ...GlobalStyleSheet.container,
              borderTopWidth: 1,
              borderColor: COLORS.borderColor,
            }}
          >
            <Text style={{ ...FONTS.h6, marginBottom: 5 }}>
              Account Settings
            </Text>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfile")}
                style={styles.listItem}
              >
                <FeatherIcon
                  style={{ marginRight: 12 }}
                  color={COLORS.primary}
                  size={20}
                  name="user"
                />
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>
                  Edit Profile
                </Text>
                <FeatherIcon
                  size={20}
                  color={COLORS.title}
                  name="chevron-right"
                />
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => navigation.navigate("Address")} style={styles.listItem}>
                <FeatherIcon style={{ marginRight: 12 }} color={COLORS.secondary} size={18} name="map-pin" />
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>Saved Addresses</Text>
                <FeatherIcon size={20} color={COLORS.title} name="chevron-right" />
              </TouchableOpacity> */}
              {/* <TouchableOpacity
                onPress={() => RBSheetLanguage.current.open()}
                style={styles.listItem}
              >
                <Ionicons
                  style={{ marginRight: 12 }}
                  color={COLORS.secondary}
                  size={20}
                  name="ios-language"
                />
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>
                  Select Language
                </Text>
                <FeatherIcon
                  size={20}
                  color={COLORS.title}
                  name="chevron-right"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.listItem}>
                <FeatherIcon
                  style={{ marginRight: 12 }}
                  color={COLORS.secondary}
                  size={20}
                  name="bell"
                />
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>
                  Notification Setting
                </Text>
                <FeatherIcon
                  size={20}
                  color={COLORS.title}
                  name="chevron-right"
                />
              </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => {
                  dispatch(logout());
                  dispatch(clearCart());
                  navigation.navigate("Welcome");
                }}
                style={styles.listItem}
              >
                <FeatherIcon
                  style={{ marginRight: 12 }}
                  color={COLORS.primary}
                  size={20}
                  name="log-out"
                />
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>
                  Log Out
                </Text>
                <FeatherIcon
                  size={20}
                  color={COLORS.title}
                  name="chevron-right"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const createStyles = (COLORS) => {
  return StyleSheet.create({
    profileBtn: {
      backgroundColor: COLORS.backgroundColor,
      borderWidth: 1,
      borderColor: COLORS.borderColor,
      paddingHorizontal: 15,
      paddingBottom: 7,
      paddingTop: 8,
      borderRadius: 6,
      marginBottom: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    listItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.borderColor,
    },
  });
};

export default Profile;
