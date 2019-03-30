import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Slideshow from "react-native-image-slider-show";

const { width } = Dimensions.get('window')

export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      interval: null,
      indicatorSize: 10,
      height: this.props.height,
      titleStyle: this.props.titleStyle,
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.props.dataSource.length - 1
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
      <Slideshow
        style={styles.images}
        dataSource={this.props.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })}
        indicatorSize={this.state.indicatorSize}
        scrollEnabled={false}
        height={this.state.height}
        titleStyle={this.state.titleStyle}
        arrowSize={13}
      />
    );
  }
}

const styles = StyleSheet.create({
  images: {
    width,
    resizeMode: "cover",
  }
});
