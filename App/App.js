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

import './global.js';

var Header = require("./Header");
var Login = require("./screens/Login");
var GroupOrSolo = require("./screens/GroupOrSolo");
var Rewards = require("./screens/Rewards");
var Profile = require("./screens/Profile");
var ChallengeSent = require("./screens/ChallengeSent");
var ChooseBudget = require("./screens/ChooseBudget");
var ChooseOpponents = require("./screens/ChooseOpponents");
var HuntOrSave = require("./screens/HuntOrSave");
var ChooseTime = require("./screens/ChooseTime");
var ChooseItem = require("./screens/ChooseItem");
var CompeteScreen = require("./screens/CompeteScreen");
var Tutorial = require("./screens/Tutorial");

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AuthenticationNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Tutorial:{
    screen: Tutorial
  }
});

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
    CompeteScreen: {
      screen: CompeteScreen
    },
},{
  defaultNavigationOptions: ({ navigation }) => ({
    headerTitle: <Header/>,
    headerRight: (
      <TouchableOpacity style={{paddingRight: 20}} onPress={() => navigation.navigate('Login')}>
        <Image source={require('../img/ic_exit_to_app.png')}/>
      </TouchableOpacity>
    ),
  })
});

const bottomTabNavigator = createBottomTabNavigator({
  Profile: {
    screen: Profile,
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: <Header/>,
      headerRight: (
        <TouchableOpacity style={{paddingRight: 20}} onPress={() => navigation.navigate('Login')}>
          <Image source={require('../img/ic_exit_to_app.png')}/>
        </TouchableOpacity>
      ),
    }),
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
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: <Header/>,
      headerRight: (
        <TouchableOpacity style={{paddingRight: 20}} onPress={() => navigation.navigate('Login')}>
          <Image source={require('../img/ic_exit_to_app.png')}/>
        </TouchableOpacity>
      ),
    }),
    navigationOptions: {
      tabBarLabel: 'Rewards',
      tabBarIcon: ({ tintColor }) => <Image source={require('../img/Rewards.png')} />
    }
  }

}, {
    initialRouteName: "Compete",
		swipeEnabled: true,
		animationEnabled: true,
		lazy: true,
		order: ["Profile", "Compete", "Rewards"],
		tabBarOptions: {
			activeTintColor: 'coral',
			showLabel: true,
			showIcon: true,
			pressColor: 'coral',
			allowFontScaling: true
		}
});

const AppNavigator = createSwitchNavigator({
  Login: AuthenticationNavigator,
  Main: bottomTabNavigator,
}, {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);
