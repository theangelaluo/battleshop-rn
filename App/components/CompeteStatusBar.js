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

import { createBottomTabNavigator,  createStackNavigator, createAppContainer } from 'react-navigation';


export default class CompeteStatusBar extends React.Component {
  render() {
    return (
      <View>
        <Text>{global.opponents_arr[0]}</Text>
        <Text>vs.</Text>
        <Text>You</Text>
      </View>
    )
  }
}

module.exports = CompeteStatusBar
