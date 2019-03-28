import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";

export default class PurposeItem extends React.Component {
  render() {
    return (
      <View style={styles.purposeItem}>
        <Image
          source={require("../assets/images/welcome.png")}
          style={styles.purposeImage} />
          <Text style={styles.purposeText}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  purposeItem: {
    flex: 0.2,
    height: '100%',
    margin: 5,
  },
  purposeImage: {
    height: '80%',
    width: '100%',
    resizeMode: "cover",
  },
  purposeText: {
    alignSelf: 'center',
    margin: 5,
  },
});
