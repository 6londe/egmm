import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";

export default class PurposeItem extends React.Component {
  render() {
    return (
      <View style={styles.purposeItem}>
        <Image
          source={require("../assets/images/circle.png")}
          style={styles.purposeImage} />
        <Text style={styles.purposeText}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  purposeItem: {
    height: '100%',
    margin: 5,
    flex: 1,
    flexDirection: 'column',
  },
  purposeImage: {
    height: '75%',
    width: 80,
    resizeMode: "contain",
  },
  purposeText: {
    margin: 5,
    fontSize: 17,
    color: 'grey',
    alignSelf: 'center',
  },
});
