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
    this.state = {showWinner: true};
  }

  _showWinner(){
    if(this.state.showWinner){
      return (<Image source={require('../../img/Rewards.png')} style={{width: '15%', height: '15%', resizeMode: 'contain'}}/>);
    }
  }

  render() {
    return(
      <View style = {styles.bar}>
        <Image source={require('../../img/avatar.jpg')} style={{width: 100, height: 60, resizeMode: 'contain'}}/>
        <Text style={styles.nameText}>{global.opponents_arr[0]} </Text>
        <Text style={styles.statusText}> vs. </Text>
        <Text style={styles.nameText}> You    </Text>
        {this._showWinner()}
        <Image source={require('../../img/Rachel-Rouhana-Profile-Pic-Square.jpg')} style={{width: 60, height: 100, resizeMode: 'contain'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bar:{
    flexDirection: 'row',
    backgroundColor: '#F65854',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameText:{
    color: 'white',
    fontSize: 15,
    fontWeight:'bold'
  },
  statusText: {
    color: 'white'
  }
});

module.exports = CompeteStatusBar
