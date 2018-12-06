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

import {styles} from '../styles.js';

var Header = require("../Header")

export default class Profile extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F9564F', alignItems: 'center'}}>
        <View style={{marginTop: 35, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../img/Rachel-Rouhana-Profile-Pic-Square.jpg')} style={{borderRadius: 200/2, width: 200, height: 200, resizeMode: 'contain'}}/>
          <Text style={{color: "white", fontSize: 35, marginTop: 20, fontWeight: 'bold'}}>Molly Adams</Text>
          <Text style={{color: "white", fontSize: 25, marginTop: 10}}>Level 2</Text>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 50}}>
            <Image source={require('../../img/swords.png')} style={{resizeMode: 'contain', marginRight: 20}}/>
            <Text style={{color: "white", fontSize: 35, fontWeight: 'bold'}}>{global.xp}</Text>
            <Text style={{color: "white", fontSize: 35}}> XP</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image source={require('../../img/coins.png')} style={{resizeMode: 'contain', marginRight: 20}}/>
            <Text style={{color: "white", fontSize: 35, fontWeight: 'bold'}}>{global.coins}</Text>
            <Text style={{color: "white", fontSize: 35}}> COINS</Text>
          </View>
        </View>
      </View>
    )
  }
}
module.exports = Profile;
