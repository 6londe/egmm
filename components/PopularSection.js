import React from 'react';
import { StyleSheet, View, Text } from "react-native";

export default class PopularSection extends React.Component {
  render() {
    return (
      <View style={styles.popularSection}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  popularSection: {
    height: 100,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'grey',
  },
});
