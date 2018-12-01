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


var Login = require("./Login");

//var FBLoginButton = require('./FBLoginButton');

import { createBottomTabNavigator,  createStackNavigator, createAppContainer } from 'react-navigation';


export default class Header extends React.Component {
  render() {
    return (
      <Image source={require('../img/Battleshop-name-red.png')} style={{width: '50%', height: '50%', resizeMode: 'contain'}}/>
    )
  }
}

module.exports = Header
