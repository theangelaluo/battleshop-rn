import React from 'react';

import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  Image,
  FlatList,
} from 'react-native';

import { Icon } from 'react-native-elements';

import TimePicker from 'react-native-simple-time-picker';

var Header = require("./Header");
var Login = require("./Login");
var GroupOrSolo = require("./GroupOrSolo");
var Rewards = require("./Rewards");
var Profile = require("./Profile");
var ChallengeSent = require("./ChallengeSent");
var ChooseBudget = require("./ChooseBudget");
var ChooseOpponents = require("./ChooseOpponents");
var HuntOrSave = require("./HuntOrSave");
var ChooseTime = require("./ChooseTime");
var ChooseItem = require("./ChooseItem");

//var FBLoginButton = require('./FBLoginButton');

import { createBottomTabNavigator,  createStackNavigator, createAppContainer } from 'react-navigation';

// global variables
var opponents_arr = []; // makes sure user has chosen at least one opponent
var challenged_opponents = ''; // for confirmation message
var budget;
var global_hours;
var global_minutes;
var global_item;


const CompeteStack = createStackNavigator({
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

// const AppNavigator = createStackNavigator({
//   Login: {
//     screen: Login,
//   },
//   Compete: CompeteStack
// //  CompeteStack: CompeteStack,
//   // Compete: {
//   //   screen: NavBar,
//   // }
// }, {
//   initialRouteName: "Login",
//   headerMode: "none"
//   }
// )

// export default createAppContainer(AppNavigator);


export default createAppContainer(createBottomTabNavigator({
  Logout: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Logout',
      tabBarIcon: ({ tintColor }) => <Image source={require('../img/logout.png')} />
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Image source={require('../img/Profile.png')} />
    },
  },
  Compete: {
    screen: CompeteStack, // Replaced Feed with FeedStack
    navigationOptions: {
      tabBarLabel: 'Compete',
      tabBarIcon: ({ tintColor }) => <Image source={require('../img/Compete.png')} />
    },
  },
  Rewards: {
    screen: Rewards,
    navigationOptions: {
      tabBarLabel: 'Rewards',
      tabBarIcon: ({ tintColor }) => <Image source={require('../img/Rewards.png')} />
    }
  }

}, {
    initialRouteName: "Logout",
		swipeEnabled: true,
		animationEnabled: true,
		lazy: true,
		order: ["Profile", "Compete", "Rewards", "Logout"],
		backBehavior: "Login",
		tabBarOptions: {
			activeTintColor: 'coral',
			showLabel: true,
			showIcon: true,
			pressColor: 'coral',
			allowFontScaling: true
		}

}));
