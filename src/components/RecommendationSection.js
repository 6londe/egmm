import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import RecommendationItem from "./RecommendationItem";

export default class RecommendationSection extends React.Component {
  render() {
    return (
      <View style={styles.recommendations}>
        <ScrollView
          horizontal={true}
          style={styles.recommendation}
          contentContainerStyle={styles.recommendationItem}
          showsHorizontalScrollIndicator={false}
        >
          <RecommendationItem name="abc" price="123" />
          <RecommendationItem name="abc" price="123" />
          <RecommendationItem name="abc" price="123" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recommendations: {
    padding: 10,
    height: 300
  }
});
