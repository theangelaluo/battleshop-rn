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
  constructor() {
    super();
    this.state = {showWinner: false};
  }
  _renderOpponentsBest() {
       if (global.opponents_best !== -1) {
           return (
               <Text>Cheapest Item: </Text>
           );
       } else {
           return null;
       }
   }

   _renderYourBest() {
        if (global.your_best !== -1) {
            return (
                <Text>Cheapest Item: </Text>
            );
        } else {
            return null;
        }
    }

  render() {
    return (
      <View style = {{backgroundColor: '#F65854'}}>
        <Text style={styles.statusText}>{global.opponents_arr[0]}</Text>
        <View> {this._renderOpponentsBest()} </View>
        <View> {this._renderYourBest()}</View>
        <Text style={styles.statusText}>vs.</Text>
        <Text style={styles.statusText}>You</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusText: {
    color: 'white'
  }
});

module.exports = CompeteStatusBar
