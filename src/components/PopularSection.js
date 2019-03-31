import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";

import SectionTitle from "./SectionTitle";
import PopularItem from "./PopularItem";

const { width } = Dimensions.get('window');

export default class PopularSection extends React.Component {
  render() {
    return (
      <View>
        <SectionTitle name="오늘의 인기 상품" />
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
