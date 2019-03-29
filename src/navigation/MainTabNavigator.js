import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CategoryScreen from "../screens/CategoryScreen";
import OrdersScreen from "../screens/OrdersScreen";
import MyPageScreen from "../screens/MyPageScreen";

const defaultNavigationOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'skyblue',
  },
};

const HomeStack = createStackNavigator({
  Home: HomeScreen
}, { defaultNavigationOptions });

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

const SearchStack = createStackNavigator({
  Search: SearchScreen
}, { defaultNavigationOptions });

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

const CategoryStack = createStackNavigator({
  Category: CategoryScreen
}, { defaultNavigationOptions });

CategoryStack.navigationOptions = {
  tabBarLabel: "Category",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-apps" : "md-apps"}
    />
  )
};

const OrdersStack = createStackNavigator({
  Orders: OrdersScreen
}, { defaultNavigationOptions });

OrdersStack.navigationOptions = {
  tabBarLabel: "Orders",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
    />
  )
};

const MyPageStack = createStackNavigator({
  MyPage: MyPageScreen
}, { defaultNavigationOptions });

MyPageStack.navigationOptions = {
  tabBarLabel: "MyPage",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  SearchStack,
  CategoryStack,
  OrdersStack,
  MyPageStack
});
