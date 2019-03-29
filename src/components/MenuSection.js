import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import MenuItem from "./MenuItem";

export default class MenuSection extends React.Component {
  render() {
    return (
      <View style={styles.menuSection}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <MenuItem name="abcdefg" />
          <MenuItem name="abcdefg" />
          <MenuItem name="abcdefg" />
          <MenuItem name="abcdefg" />
          <MenuItem name="abcdefg" />
          <MenuItem name="abcdefg" />
          <MenuItem name="abcdefg" />
          <MenuItem name="abcdefg" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuSection: {
    height: 55,
    alignItems: "center"
  }
});
