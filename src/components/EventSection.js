import React from "react";
import { StyleSheet, View } from "react-native";
import ImageSlider from "./ImageSlider";
import SectionTitle from "./SectionTitle";

export default class EventSection extends React.Component {
  render() {
    return (
      <View>
        <SectionTitle name="이벤트" />
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
      </View>
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
  