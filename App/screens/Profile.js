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
  levels() {
    alert("You are currently on Level 2. You have 440 more XP to earn to move up to the next level. Higher levels unlock better deals and rewards!")
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F9564F', alignItems: 'center'}}>
        <View style={{marginTop: 35, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../img/Rachel-Rouhana-Profile-Pic-Square.jpg')} style={{borderRadius: 200/2, width: 200, height: 200, resizeMode: 'contain'}}/>
          <Text style={{...styles.titleFont, marginTop: 10}}>Molly Adams</Text>
          <TouchableOpacity style={{marginTop: 15, backgroundColor: '#F2C57D', paddingLeft: 20, paddingRight: 20, paddingTop: 7, paddingBottom: 7, borderRadius: 10}} onPress={()=>this.levels()}>
            <Text style={{...styles.H2Font, marginTop: 0}}>Level 2</Text>
          </TouchableOpacity>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <Image source={require('../../img/swords.png')} style={{resizeMode: 'contain', marginRight: 20}}/>
            <Text style={styles.titleFont}>{global.xp}</Text>
            <Text style={styles.titleFontNotBold}> XP</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image source={require('../../img/coins.png')} style={{resizeMode: 'contain', marginRight: 20}}/>
            <Text style={styles.titleFont}>{global.coins}</Text>
            <Text style={styles.titleFontNotBold}> COINS</Text>
          </View>
        </View>
      </View>
    )
  }
}
module.exports = Profile;
