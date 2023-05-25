import React, { useRef } from "react";
import { Animated, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useSelector } from "react-redux";
import TabButtonStyle1 from "../../components/Tabs/TabButtonStyle1";
import TabButtonStyle2 from "../../components/Tabs/TabButtonStyle2";
import Header from "../../layout/Header";

const Tabs = () => {
  const { COLORS, FONTS, SIZES, GlobalStyleSheet } = useSelector((state) => state.theme);
  const buttons = ["First", "Second", "Third"];
  const scrollX = useRef(new Animated.Value(0)).current;
  const onCLick = (i) => this.scrollViewHome.scrollTo({ x: i * SIZES.width - 60 });
  const scrollX2 = useRef(new Animated.Value(0)).current;
  const onCLick2 = (i) => this.scrollViewHome2.scrollTo({ x: i * SIZES.width - 60 });

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.backgroundColor,
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <Header title={"Tabs"} titleLeft leftIcon={"back"} />
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                elevation: 5,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={GlobalStyleSheet.card}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.borderColor,
                    paddingBottom: 8,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ ...FONTS.h6 }}>Default Tab</Text>
                </View>

                <View style={{ paddingBottom: 15 }}>
                  <TabButtonStyle1 buttons={buttons} onClick={onCLick} scrollX={scrollX} />
                </View>
                <ScrollView
                  ref={(e) => (this.scrollViewHome = e)}
                  horizontal
                  pagingEnabled
                  scrollEnabled={false}
                  decelerationRate="fast"
                  showsHorizontalScrollIndicator={false}
                  onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                >
                  {/* tab 1 */}
                  <View
                    style={{
                      width: SIZES.width - 60,
                    }}
                  >
                    <Text style={{ ...FONTS.font }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                  </View>
                  {/* tab 2 */}
                  <View
                    style={{
                      width: SIZES.width - 60,
                    }}
                  >
                    <Text style={{ ...FONTS.font }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                  </View>
                  {/* tab 3 */}
                  <View
                    style={{
                      width: SIZES.width - 60,
                    }}
                  >
                    <Text style={{ ...FONTS.font }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                elevation: 5,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={GlobalStyleSheet.card}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.borderColor,
                    paddingBottom: 8,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ ...FONTS.h6 }}>Primary Tab</Text>
                </View>

                <View style={{ paddingBottom: 15 }}>
                  <TabButtonStyle2 buttons={buttons} onClick={onCLick2} scrollX={scrollX2} />
                </View>
                <ScrollView
                  ref={(e) => (this.scrollViewHome2 = e)}
                  horizontal
                  pagingEnabled
                  scrollEnabled={false}
                  decelerationRate="fast"
                  showsHorizontalScrollIndicator={false}
                  onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX2 } } }], { useNativeDriver: false })}
                >
                  {/* tab 1 */}
                  <View
                    style={{
                      width: SIZES.width - 60,
                    }}
                  >
                    <Text style={{ ...FONTS.font }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                  </View>
                  {/* tab 2 */}
                  <View
                    style={{
                      width: SIZES.width - 60,
                    }}
                  >
                    <Text style={{ ...FONTS.font }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                  </View>
                  {/* tab 3 */}
                  <View
                    style={{
                      width: SIZES.width - 60,
                    }}
                  >
                    <Text style={{ ...FONTS.font }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Tabs;
