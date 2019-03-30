import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import RecommendationItem from "./RecommendationItem";

export default class RecommendationSection extends React.Component {
  render() {
    return (
      <View style={styles.recommendations}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <RecommendationItem name="[에공이공방] 딸기비누 답례품" price="3,900원" />
          <RecommendationItem name="[에공이공방] 사과비누 답례품" price="4,200원" />
          <RecommendationItem name="[에공이공방] 바나나비누 답례품" price="5,600원" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recommendations: {
    height: 300,
  }
});
