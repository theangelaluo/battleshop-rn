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
var RecentChallenges = require("./screens/RecentChallenges");
var CompeteConfirmation = require("./screens/CompeteConfirmation");
var ChallengeComplete = require("./screens/ChallengeComplete");

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
    screen: Login,
  },
  Tutorial:{
    screen: Tutorial
  },
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

const CompeteStack = createStackNavigator({
    RecentChallenges: {
      screen: RecentChallenges
    },
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
    CompeteConfirmation: {
      screen: CompeteConfirmation
    },
    CompeteScreen: {
      screen: CompeteScreen
    },
    ChallengeComplete: {
      screen: ChallengeComplete
    }

},{
  defaultNavigationOptions: ({ navigation }) => ({
    headerTitle: <Header/>,
    headerRight: (
      <TouchableOpacity style={{paddingRight: 20}} onPress={() => navigation.navigate('Login')}>
        <Image source={require('../img/ic_exit_to_app.png')}/>
      </TouchableOpacity>
    ),
  }),

});

const bottomTabNavigator = createBottomTabNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
        headerTitle: <Header/>,
        headerRight: (
          <TouchableOpacity style={{paddingRight: 20}} onPress={() => navigation.navigate('Login')}>
            <Image source={require('../img/ic_exit_to_app.png')}/>
          </TouchableOpacity>
        ),
      tabBarLabel: 'Profile',
      tabBarButtonComponent: TouchableOpacity,
      tabBarIcon: ({ tintColor }) => <Image source={require('../img/Profile.png')} />
    }),
  },
  Compete: {
    screen: CompeteStack,
    navigationOptions: {
      tabBarButtonComponent: TouchableOpacity,
      tabBarLabel: 'Compete',
      tabBarIcon: ({ tintColor }) => <Image source={require('../img/Compete.png')} />
    },
  },
  Rewards: {
    screen: Rewards,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Rewards',
      tabBarButtonComponent: TouchableOpacity,
      tabBarIcon: ({ tintColor }) => <Image source={require('../img/Rewards.png')} />,
      headerTitle: <Header/>,
      headerRight: (
        <TouchableOpacity style={{paddingRight: 20}} onPress={() => navigation.navigate('Login')}>
          <Image source={require('../img/ic_exit_to_app.png')}/>
        </TouchableOpacity>
      ),
    }),
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
			allowFontScaling: true,
      activeBackgroundColor: '#E5E5E5'
		},
});

const AppNavigator = createSwitchNavigator({
  Login: AuthenticationNavigator,
  Main: bottomTabNavigator,
}, {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);
