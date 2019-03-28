import React from 'react';
import { StyleSheet, View, Image, Text } from "react-native";

export default class EventSection extends React.Component {
  render() {
    return (
      <View style={styles.eventSection}>
        <Text style={styles.sectionTitle}>Event</Text>
        <Image
          source={require("../assets/images/welcome.png")}
          style={styles.eventImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventSection: {
    height: 350,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'grey',
  },
  eventImage: {
    resizeMode: "stretch",
    height: 300,
    width: '100%',
  },
});
