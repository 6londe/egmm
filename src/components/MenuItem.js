import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class MenuItem extends React.Component {
  render() {
    return (
      <View style={styles.purposeItem}>
        <Text style={styles.purposeText}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  purposeItem: {
    flex: 0.2,
    height: "100%",
    margin: 5
  },
  purposeText: {
    alignSelf: "center",
    margin: 5
  }
});
