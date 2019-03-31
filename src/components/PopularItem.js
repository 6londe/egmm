import React from 'react';
import { StyleSheet, Dimensions, View, Text, Image } from "react-native";

const { width } = Dimensions.get('window');

export default class RecommendationItem extends React.Component {
  render() {
    return (
      <View style={styles.popularContainer}>
         <View style={styles.popularItem}>
          <Image
            source={require("../assets/images/example.png")}
            style={styles.popularImage} /> 
          <Text style={styles.popularTitle}>[에공이공방] 꽃하트비누</Text>   
          <View style={styles.popularInfo}>
            <Text style={styles.popularPrice}>7,400원</Text>
            <Text style={styles.popularRate}>★★★★★</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    popularContainer: {
      flexBasis: width / 2 - 1,
      padding: 3,
    },
    popularItem: {
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderStyle: 'solid',
    },
    popularImage: {
      resizeMode: "cover",
      height: width / 2,
      width: "100%",
    },
    popularTitle: {
      fontSize: 18,
      padding: 2,
    },
    popularInfo: {
      flexDirection: 'row',
    },
    popularPrice: {
      fontSize: 17,
      color: 'grey',
      padding: 2,
      flex: 0.9,
    },
    popularRate: {
      fontSize: 17,
      color: 'skyblue',
    },
  });
  