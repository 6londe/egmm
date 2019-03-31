import React from "react";
import { View } from "react-native";

export default class Divider extends React.Component {
  render() {
    return (
      <View
        style={{
          marginTop: 10,
          borderBottomColor: '#e8e8e8',
          borderBottomWidth: 1,
        }}
      />
    )
  };
}