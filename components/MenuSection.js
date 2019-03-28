import React from 'react';
import { StyleSheet, View, Text } from "react-native";

export default class MenuSection extends React.Component {
  render() {
    return (
      <View style={styles.menuSection}>
        <Text>abcd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuSection: {
    height: 55,
    alignItems: 'center',
  },
});
