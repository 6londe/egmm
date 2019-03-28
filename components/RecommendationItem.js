import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";

export default class RecommendationItem extends React.Component {
  render() {
    return (
      <View style={styles.recommendationItem}>
        <Image
          source={require("../assets/images/welcome.png")}
          style={styles.recommendationImage} />
        <Text style={styles.nameText}>{this.props.name}</Text>
        <Text style={styles.priceText}>{this.props.price}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recommendationItem: {
    height: '100%',
    margin: 5,
  },
  recommendationImage: {
    resizeMode: "cover",
    height: '80%',
    width: 300,
  },
  nameText: {
    alignSelf: 'center',
  },
  priceText: {
    alignSelf: 'center',
  },
});
