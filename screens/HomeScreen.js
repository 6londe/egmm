import React from "react";
import { Image, Platform, ScrollView, StyleSheet, View } from "react-native";

import MenuSection from "../components/MenuSection";
import PurposeSection from "../components/PurposeSection";
import RecommendationSection from "../components/RecommendationSection";
import PopularSection from "../components/PopularSection";
import EventSection from "../components/EventSection";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "LOGO",
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          
          <MenuSection />
          <View style={styles.welcomeContainer}>
            <Image
              source={require("../assets/images/welcome.png")}
              style={styles.welcomeImage} />
          </View>
          <PurposeSection />
          <RecommendationSection />
          <PopularSection />
          <EventSection />

          <View style={styles.tabBarInfoContainer}>
            <View style={[styles.codeHighlightContainer, styles.navigationFilename]} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'column',
  },
  welcomeContainer: {
    alignItems: "flex-start",
  },
  welcomeImage: {
    resizeMode: "stretch",
    height: 250,
    width: '100%',
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
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  navigationFilename: {
    marginTop: 5,
  }
});
