import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import CircledItem from "./CircledItem";
import Divider from "../components/Divider";

export default class CircledMenu extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.purposeSection}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CircledItem name="결혼" image="../assets/images/robot-dev.png" />
            <CircledItem name="돌잔치" image="../assets/images/robot-dev.png" />
            <CircledItem name="아동" image="../assets/images/robot-dev.png" />
            <CircledItem name="환갑" image="../assets/images/robot-dev.png" />
            <CircledItem name="생일" image="../assets/images/robot-dev.png" />
            <CircledItem name="결혼" image="../assets/images/robot-dev.png" />
            <CircledItem name="돌잔치" image="../assets/images/robot-dev.png" />
          </ScrollView>
        </View>
        <Divider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  purposeSection: {
    height: 120,
    marginTop: 5,
    marginBottom: 5,
  }
});
