import React from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";

import MenuSection from "../components/MenuSection";
import PurposeSection from "../components/PurposeSection";
import RecommendationSection from "../components/RecommendationSection";
import PopularSection from "../components/PopularSection";
import SectionTitle from "../components/SectionTitle";
import ImageSlider from "../components/ImageSlider";
import EventSection from "../components/EventSection";
import Divider from "../components/Divider";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "에공"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <MenuSection />
        <ImageSlider 
          dataSource={[
            { url: require('../assets/images/example.png') },
            { url: require("../assets/images/welcome.png") }
          ]}
        />
        <Divider />
        <PurposeSection />

        <Divider />
        <SectionTitle name="MD 추천" />
        <RecommendationSection />

        <SectionTitle name="오늘의 인기 상품" />
        <PopularSection />

        <SectionTitle name="이벤트" />
        <EventSection />

        <View style={styles.tabBarInfoContainer}>
          <View style={[styles.codeHighlightContainer, styles.navigationFilename]} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  navigationFilename: {
    marginTop: 5
  }
});
