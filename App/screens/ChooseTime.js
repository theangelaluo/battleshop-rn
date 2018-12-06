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

export default class ChooseTime extends React.Component {
 
  toChallengeSent() {
    if (global.hours === 0 && global.minutes === 0) {
      Alert.alert(
      'Battleshop Says',
      'You must enter a valid time limit. Please choose time besides zero hours and zero minutes.',
      [
        {text: 'OK'},
      ],
      {cancelable: false}
      )
    } else {
      var challenged_opponents = '';
      if (global.opponents_arr.length === 1) {
        challenged_opponents = global.opponents_arr[0];
      } else {
        for (var i = 0; i < global.opponents_arr.length; i++) {
          if (i < global.opponents_arr.length - 2) {
            challenged_opponents += global.opponents_arr[i] + ', ';
          } else if (i == global.opponents_arr.length - 2) {
            challenged_opponents += global.opponents_arr[i] + ', and ';
          } else {
            challenged_opponents += global.opponents_arr[i];
          }
        }
      }

      // Format time string
global.time_string = ''; // Reset
if (global.hours === 0) {
  if (global.minutes === 1) {
    global.time_string += '1 minute ';
  } else {
    global.time_string += global.minutes + ' minutes ';
  }
} else if (global.minutes === 0) {
  if (global.hours  === 1) {
    global.time_string += '1 hour ';
  } else {
    global.time_string += global.hours  + ' hours ';
  }
} else {
  if (global.hours  === 1) {
    global.time_string += '1 hour ';
  } else {
    global.time_string += global.hours  + ' hours ';
  }
  if (global.minutes === 1) {
    global.time_string += 'and 1 minute ';
  } else {
    global.time_string += 'and ' + global.minutes + ' minutes ';
  }
}

if (global.duel_or_solo === "duel") {
  Alert.alert(
    'Battleshop Says',
    'You are about to send a SAVE challenge for ' + global.item + ' for ' + global.time_string +
    'with a $' + global.budget + ' budget versus ' +
    challenged_opponents + '.',
  [
    {text: 'Cancel', style: 'cancel'},
    {text: 'OK', onPress: () => this.props.navigation.navigate('ChallengeSent')},
    // {text: 'OK', onPress: () => this.loginActual()},
  ],
  { cancelable: false }
  )
} else {
  Alert.alert(
    'Battleshop Says',
    'You are about to send a SAVE challenge for ' + global.item + ' for ' + global.time_string +
    'with a $' + global.budget + ' budget' +
    challenged_opponents + '.',
  [
    {text: 'Cancel', style: 'cancel'},
    {text: 'OK', onPress: () => this.props.navigation.navigate('CompeteConfirmation')},
    // {text: 'OK', onPress: () => this.loginActual()},
  ],
  { cancelable: false }
  )
}

    }
  }
  state = {
   selectedHours: 0,
   //initial Hours
   selectedMinutes: 0,
   //initial Minutes
  }
  handleInputChange = (hours, minutes) => {
      this.setState({
        selectedHours: hours, selectedMinutes: minutes
      });
      global.hours = hours;
      global.minutes = minutes;
  }
  render() {
    const { selectedHours, selectedMinutes } = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#F9564F', alignItems: 'center'}}>
        <Text style={{fontSize: 36, color: "white", fontWeight: 'bold', marginTop: 30}}>Choose Time</Text>
        <Text style={{fontSize: 30, color: 'white', margin: 15}}>{selectedHours} hr : {selectedMinutes} min</Text>
        <View style={styles.yellowContainer}>
        <View style={{backgroundColor: 'white', padding: 15, display: 'flex', width: '93%', height: '90%'}}>
          <TimePicker
            selectedHours={selectedHours}
            //initial Hours value
            selectedMinutes={selectedMinutes}
            //initial Minutes value
            onChange={this.handleInputChange}
          />
          </View>
        </View>
        <TouchableOpacity onPress={() => this.toChallengeSent()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 15}]}>
          <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'white'}}>Send Challenge</Text>
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <Progress.Bar progress={0.3} width={300} progress={1} color={'rgba(123, 30, 122, 1)'}/>
        </View>
      </View>
    );
  }
}

module.exports = ChooseTime;
