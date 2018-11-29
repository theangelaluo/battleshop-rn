import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Rewards from '../screens/Rewards';
import Profile from '../screens/Profile';

export const CompeteStack = createStackNavigator({
  Compete: {
    GroupOrSolo: {
        screen: GroupOrSolo
      },
    ChooseOpponents: {
      screen: ChooseOpponents
    },
    HuntOrSave: {
      screen: HuntOrSave
    },
    ChooseItem: {
      screen: ChooseItem
    },
    ChooseBudget: {
      screen: ChooseBudget
    },
    ChooseTime: {
      screen: ChooseTime
    },
    ChallengeSent: {
      screen: ChallengeSent
    },
});

export const Tabs = TabNavigator({
  Compete: {
    screen: CompeteStack, // Replaced Feed with FeedStack
    navigationOptions: {
      tabBarLabel: 'Compete',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
  initialRouteName: 'Login',
});
