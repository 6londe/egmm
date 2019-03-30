import React from "react";
import { StyleSheet } from "react-native";
import ImageSlider from "./ImageSlider";

export default class EventSection extends React.Component {
  render() {
    return (
      <ImageSlider 
        height={300}
        titleStyle={styles.titleStyle}
        dataSource={[
          {
            title: "딸기비누 답례품 30% 할인",
            caption: "",
            url: require('../assets/images/example.png'),
          },
          {
            title: "바나나비누 80% 할인",
            caption: "",
            url: "http://placeimg.com/640/480/any",
          },
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
    titleStyle: {
    fontSize: 25,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  }
});
  