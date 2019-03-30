import React from "react";
import { StyleSheet, Text } from "react-native";

export default class MenuItem extends React.Component {
  render() {
    return (
      <Text style={styles.menuItem}>{this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    fontSize: 18,
    color: 'grey',
    flex: 0.2,
    height: "100%",
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5,
    textAlignVertical: "center",
    alignSelf: "center",
  },
});
