import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import MenuItem from "./MenuItem";

export default class MenuSection extends React.Component {
  render() {
    return (
      <View style={styles.menuSection}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <MenuItem name="홈" />
          <MenuItem name="베스트" />
          <MenuItem name="신상품" />
          <MenuItem name="실시간" />
          <MenuItem name="할인" />
          <MenuItem name="긴급" />
          <MenuItem name="베스트" />
          <MenuItem name="신상품" />
          <MenuItem name="실시간" />
          <MenuItem name="할인" />
          <MenuItem name="긴급" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuSection: {
    height: 50,
    alignItems: "center"
  }
});
