import { IconButton } from "@react-native-material/core";
import React, { useRef } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import { useSelector } from "react-redux";
import UnitedStates from "../../assets/images/flags/UnitedStates.png";
import german from "../../assets/images/flags/german.png";
import india from "../../assets/images/flags/india.png";
import italian from "../../assets/images/flags/italian.png";
import spanish from "../../assets/images/flags/spanish.png";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS, IMAGES } from "../../constants/theme";
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
  const RBSheetLanguage = useRef();
  const { user, token } = useSelector((state) => state.auth);

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
        <ScrollView contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 15 }}>
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
              <Text style={{ ...FONTS.fontLg, color: COLORS.title, flex: 1 }}>{data.name}</Text>
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
              <Image
                style={{
                  height: 65,
                  width: 65,
                  borderRadius: 65,
                  marginRight: 15,
                }}
                source={IMAGES.user}
              />
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text style={{ ...FONTS.h6 }}>{user.name ? user.name : "Guest"}</Text>
                <Text style={{ ...FONTS.font }}>{user.number ? user.number : "+880XXXXXXXXXX"}</Text>
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
                <TouchableOpacity onPress={() => navigation.navigate("Orders")} style={styles.profileBtn}>
                  <Ionicons style={{ marginRight: 10, top: -1 }} color={COLORS.text} size={20} name={"cube-outline"} />
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
                  <FeatherIcon style={{ marginRight: 10, top: -1 }} color={COLORS.text} size={20} name={"headphones"} />
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
            <Text style={{ ...FONTS.h6, marginBottom: 5 }}>Account Settings</Text>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("EditProfile")} style={styles.listItem}>
                <FeatherIcon style={{ marginRight: 12 }} color={COLORS.secondary} size={20} name="user" />
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>Edit Profile</Text>
                <FeatherIcon size={20} color={COLORS.title} name="chevron-right" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Address")} style={styles.listItem}>
                <FeatherIcon style={{ marginRight: 12 }} color={COLORS.secondary} size={18} name="map-pin" />
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>Saved Addresses</Text>
                <FeatherIcon size={20} color={COLORS.title} name="chevron-right" />
              </TouchableOpacity>
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
              <TouchableOpacity onPress={() => navigation.navigate("Onboarding")} style={styles.listItem}>
                <FeatherIcon style={{ marginRight: 12 }} color={COLORS.secondary} size={20} name="log-out" />
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>Log Out</Text>
                <FeatherIcon size={20} color={COLORS.title} name="chevron-right" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  profileBtn: {
    backgroundColor: "#F9F9F9",
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

export default Profile;
