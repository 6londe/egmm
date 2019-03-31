import React from "react";
import { StyleSheet } from "react-native";
import { TabView, TabBar,SceneMap } from 'react-native-tab-view';

import HomeTab from "../tabs/HomeTab";
import BestTab from "../tabs/BestTab";
import NewTab from "../tabs/NewTab";
import NowTab from "../tabs/NowTab";
import SaleTab from "../tabs/SaleTab";
import EventTab from "../tabs/EventTab";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "에공이"
  };

  state = {
    index: 0,
    routes: [
      { key: 'home', title: '홈' },
      { key: 'best', title: '베스트' },
      { key: 'new', title: '신상품' },
      { key: 'now', title: '실시간' },
      { key: 'sale', title: '할인' },
      { key: 'event', title: '이벤트' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    return (
      <TabBar
        {...props}
        style={styles.tabBar}
        activeColor='skyblue'
        inactiveColor='grey'
        indicatorStyle={styles.tabBarIndicator}
        renderIcon={this._renderIcon}
      />
    );
  };

  _renderScene = SceneMap({
    home: HomeTab,
    best: BestTab,
    new: NewTab,
    now: NowTab,
    sale: SaleTab,
    event: EventTab,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
  },
  tabBarIndicator: {
    backgroundColor: 'skyblue',
  },
});