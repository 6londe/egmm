import React from 'react';
import { StyleSheet, View } from "react-native";

import PurposeItem from './PurposeItem';

export default class PurposeSection extends React.Component {
  render() {
    return (
      <View style={styles.purposeSection}>
        <PurposeItem name='purpose' image='../assets/images/robot-dev.png'/>
        <PurposeItem name='purpose' image='../assets/images/robot-dev.png'/>
        <PurposeItem name='purpose' image='../assets/images/robot-dev.png'/>
        <PurposeItem name='purpose' image='../assets/images/robot-dev.png'/>
        <PurposeItem name='purpose' image='../assets/images/robot-dev.png'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  purposeSection: {
    height: 100,
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
