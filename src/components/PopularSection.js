import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class PopularSection extends React.Component {
  render() {
    return <View style={styles.popularSection} />;
  }
}

const styles = StyleSheet.create({
  popularSection: {
    height: 100,
    padding: 10
  }
});
