import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import PurposeItem from "./PurposeItem";
import Divider from "../components/Divider";

export default class PurposeSection extends React.Component {
  render() {
    return (
      <View>
        <Divider />
          <View style={styles.purposeSection}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <PurposeItem name="결혼" image="../assets/images/robot-dev.png" />
              <PurposeItem name="돌잔치" image="../assets/images/robot-dev.png" />
              <PurposeItem name="아동" image="../assets/images/robot-dev.png" />
              <PurposeItem name="환갑" image="../assets/images/robot-dev.png" />
              <PurposeItem name="생일" image="../assets/images/robot-dev.png" />
              <PurposeItem name="결혼" image="../assets/images/robot-dev.png" />
              <PurposeItem name="돌잔치" image="../assets/images/robot-dev.png" />
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
