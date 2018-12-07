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
import * as Progress from 'react-native-progress';
import CountDown from 'react-native-countdown-component';
import {styles} from '../styles.js';

export default class CompeteConfirmation extends React.Component {
  static navigationOptions = {
    headerLeft: null
  }

  constructor() {
    super();
    this.state = {showHunt: false};
  }

  _renderInstructions(isHunt) {
       if (isHunt) {
           return (
              <Text style={{...styles.H3Font, marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 5, fontWeight: 'bold', textAlign: 'center'}}>For HUNT, you will be shown a shopping list. Your job is to check off as many items as possible by shopping within the store.</Text>
           );
       } else{
         return(
            <View>
              <Text style={{...styles.H3Font, marginTop: 10, marginLeft: 30, marginRight: 30, marginBottom: 5, fontWeight: 'bold', textAlign: 'center'}}>Your job is to look for the cheapest {global.item} IN THE STORE within the time limit.</Text>
              <Text style={{...styles.H3Font, marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 5, fontWeight: 'bold', textAlign: 'center'}}>Send pictures and prices of items to the chat to try to win!</Text>
              <Text style={{...styles.H3Font, marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 5, fontWeight: 'bold', textAlign: 'center'}}>At the end of {global.time_string}, the person who found the item with lowest price will win!</Text>
            </View>
         );
     }
   }

  _renderOpponent(isDuel) {
       if (isDuel) {
           return (
              <Text style={{...styles.titleFont, marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 15, fontWeight: 'bold', textAlign: 'center'}}>You're about to start a "{global.hunt_or_save}" {global.duel_or_solo} with {global.opponents_arr[0]}!</Text>
           );
       } else{
         return(
              <Text style={{...styles.titleFont, marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 15, fontWeight: 'bold', textAlign: 'center'}}>You're about to start a "{global.hunt_or_save}" {global.duel_or_solo}!</Text>
         );
       }
   }

   startChallenge() {
      this.props.navigation.navigate('CompeteScreen');
    }

  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#F9564F'}}>

        {this._renderOpponent(global.duel_or_solo == "duel")}
        {this._renderInstructions(global.hunt_or_save == "hunt")}
        <TouchableOpacity onPress={() => this.startChallenge()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 20}]}>
          <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'white', fontSize: '24'}}>Start Challenge!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

module.exports = CompeteConfirmation;
