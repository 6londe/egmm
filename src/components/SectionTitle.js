import React from "react";
import { StyleSheet, Text } from "react-native";

export default class SectionTitle extends React.Component {
  render() {
    return <Text style={styles.sectionTitle}>{this.props.name}</Text>;
  }
}

const styles = StyleSheet.create({
  sectionTitle: {
    padding: 5,
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20,
    color: "grey",
    fontWeight: 'bold',
  }
});
