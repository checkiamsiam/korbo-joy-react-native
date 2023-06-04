import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { connect } from "react-redux";

const SCREEN_WIDTH = Dimensions.get("window").width;

class SwipeBox extends Component {
  leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    const { COLORS, FONTS } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          this.close();
          this.props.handleDelete();
        }}
        activeOpacity={0.6}
      >
        <View style={styles.deleteBox}>
          <Animated.Text
            style={{
              ...FONTS.font,
              fontSize: 16,
              top: 1,
              color: COLORS.white,
              transform: [{ scale: scale }],
            }}
          >
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  updateRef = (ref) => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };

  render() {
    const { COLORS, FONTS } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        renderLeftActions={this.leftSwipe}
      >
        <View style={[styles.container, { backgroundColor: COLORS.white }]}>
          <Text style={{ ...FONTS.font, color: COLORS.title, fontSize: 16 }}>
            {this.props.data.title}
          </Text>
        </View>
      </Swipeable>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    padding: 20,
  },
  deleteBox: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 60,
  },
});

const mapStateToProps = (state) => ({
  COLORS: state.theme.COLORS,
  FONTS: state.theme.FONTS,
});

// Connect the component to Redux store
export default connect(mapStateToProps)(SwipeBox);
