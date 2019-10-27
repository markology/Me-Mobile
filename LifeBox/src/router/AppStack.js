import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../pages/Home/HomeScreen';
import Settings from '../pages/Settings/TestScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

export const HomeStack = createStackNavigator(
  {
    Home,
    Settings,
  },
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};
HomeStack.path = '';

const TestStack = createStackNavigator(
  {
    Settings,
  },
  config
);

TestStack.navigationOptions = {
  tabBarLabel: 'TestScreen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

TestStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  TestStack,
});

tabNavigator.path = '';

export default tabNavigator;
