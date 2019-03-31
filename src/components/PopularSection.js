import React from "react";
import { StyleSheet, View } from "react-native";

import PopularItem from "./PopularItem";

export default class PopularSection extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.popularContainer}>
          <PopularItem />
          <PopularItem />
          <PopularItem />
          <PopularItem />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  popularContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
