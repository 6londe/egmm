import React from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";

import CircledMenu from "../components/CircledMenu";
import RecommendationSection from "../components/RecommendationSection";
import PopularSection from "../components/PopularSection";
import ImageSlider from "../components/ImageSlider";
import EventSection from "../components/EventSection";
import Divider from "../components/Divider";
import SectionTitle from "../components/SectionTitle";

export default class HomeTab extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageSlider 
          dataSource={[
            { url: require('../assets/images/example.png') },
            { url: require("../assets/images/welcome.png") }
          ]}
        />
        <Divider />
        <CircledMenu />
        
        <RecommendationSection />

        <SectionTitle name="오늘의 인기 상품" />
        <PopularSection />

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
  },
  navigationFilename: {
    marginTop: 5
  }
});
