import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Slideshow from "react-native-image-slider-show";

export default class EventSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      interval: null,
      indicatorSize: 10,
      dataSource: [
        {
          title: "asdf1",
          caption: "qwer1",
          url: "http://placeimg.com/640/480/any"
        },
        {
          title: "asdf2",
          caption: "qwer2",
          url: "http://placeimg.com/640/480/any"
        },
        {
          title: "asdf3",
          caption: "qwer3",
          url: require("../assets/images/welcome.png")
        }
      ]
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length - 1
              ? 0
              : this.state.position + 1
        });
      }, 5000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <View style={styles.eventSection}>
        <Slideshow
          style={styles.eventImage}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
          indicatorSize={this.state.indicatorSize}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventSection: {
    height: 350,
    padding: 10
  },
  eventImage: {
    height: 300,
    width: "100%"
  }
});
