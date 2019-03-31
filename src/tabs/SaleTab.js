import React from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";

import PopularSection from "../components/PopularSection";

export default class SaleTab extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <PopularSection />
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
