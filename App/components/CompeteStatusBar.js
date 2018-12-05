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

import { Constants } from 'expo';

import { Icon } from 'react-native-elements';

import TimePicker from 'react-native-simple-time-picker';

import { createBottomTabNavigator,  createStackNavigator, createAppContainer } from 'react-navigation';


export default class CompeteStatusBar extends React.Component {
  render() {
    return (
      <View style = {{backgroundColor: '#F65854'}}>
        <Text style={styles.statusText}>{global.opponents_arr[0]}</Text>
        <Text style={styles.statusText}>vs.</Text>
        <Text style={styles.statusText}>You</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'white'
  },
  competeStatus: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    paddingTop: Constants.statusBarHeight + 64,
    backgroundColor: '#F65854',
  },
  statusText: {
    color: 'white'
  }
});

module.exports = CompeteStatusBar
