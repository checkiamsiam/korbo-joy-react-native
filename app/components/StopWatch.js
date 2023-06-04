import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 31000 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    this.startTimer();

    let timeLeftVar = this.secondsToTime(this.state.seconds);

    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.

    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { COLORS, FONTS } = this.props;
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ ...FONTS.h6, color: COLORS.white, marginRight: 2 }}>
            {this.state.time.h}
          </Text>
          <Text
            style={{
              ...FONTS.font,
              fontSize: 10,
              color: COLORS.white,
              marginRight: 10,
              top: 3,
            }}
          >
            hrs
          </Text>
          <Text style={{ ...FONTS.h6, color: COLORS.white, marginRight: 2 }}>
            {this.state.time.m}
          </Text>
          <Text
            style={{
              ...FONTS.font,
              fontSize: 10,
              color: COLORS.white,
              marginRight: 10,
              top: 3,
            }}
          >
            mins
          </Text>
          <Text style={{ ...FONTS.h6, color: COLORS.white, marginRight: 2 }}>
            {this.state.time.s}
          </Text>
          <Text
            style={{
              ...FONTS.font,
              fontSize: 10,
              color: COLORS.white,
              marginRight: 10,
              top: 3,
            }}
          >
            secs
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  COLORS: state.theme.COLORS,
  FONTS: state.theme.FONTS,
});

// Connect the component to Redux store
export default connect(mapStateToProps)(StopWatch);
