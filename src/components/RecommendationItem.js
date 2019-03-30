import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";

export default class RecommendationItem extends React.Component {
  render() {
    return (
      <View style={styles.recommendationItem}>
        <Image
          source={require("../assets/images/example.png")}
          style={styles.recommendationImage} />
        <Text style={styles.nameText}>{this.props.name}</Text>
        <Text style={styles.priceText}>{this.props.price}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recommendationItem: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    height: '100%',
    marginLeft: 3,
    marginRight: 3,
  },
  recommendationImage: {
    resizeMode: "cover",
    height: '80%',
    width: 300,
    marginBottom: 3,
  },
  nameText: {
    padding: 2,
    fontSize: 18,
  },
  priceText: {
    padding: 2,
    fontSize: 17,
    color: 'grey',
  },
});
