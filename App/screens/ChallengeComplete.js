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

export default class ChallengeComplete extends React.Component {
  static navigationOptions = {
    headerLeft: null
  }

  toRecentChallenges() {
    global.sent_challenge = false;
    this.props.navigation.navigate("RecentChallenges");
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F9564F', alignItems: 'center'}}>
        <Text style={{color: "white", fontSize: 35, marginTop: 20, fontWeight: 'bold'}}>Battle Complete!</Text>
        <View style={{marginTop: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../img/Rachel-Rouhana-Profile-Pic-Square.jpg')} style={{borderRadius: 150/2, width: 150, height: 150, resizeMode: 'contain'}}/>

          <Text style={{color: "white", fontSize: 32, fontWeight: 'bold', marginTop: 10}}>You won!</Text>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 25}}>
            <Image source={require('../../img/swords.png')} style={{resizeMode: 'contain', marginRight: 20}}/>
            <Text style={{color: "white", fontSize: 30, fontWeight: 'bold'}}>+50</Text>
            <Text style={{color: "white", fontSize: 30}}> XP</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image source={require('../../img/coins.png')} style={{resizeMode: 'contain', marginRight: 20}}/>
            <Text style={{color: "white", fontSize: 30, fontWeight: 'bold'}}>+100</Text>
            <Text style={{color: "white", fontSize: 30}}> COINS</Text>
          </View>
          <TouchableOpacity onPress={() => this.toRecentChallenges()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 25}]}>
            <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'white'}}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

module.exports = ChallengeComplete;
