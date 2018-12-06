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
  ScrollView
} from 'react-native';

import { Font } from 'expo';

import { Icon } from 'react-native-elements';
import TimePicker from 'react-native-simple-time-picker';
import * as Progress from 'react-native-progress';
import CountDown from 'react-native-countdown-component';
import {styles} from '../styles.js';

var selected_recent = false; // bool for correct behavior if you send more than one challenge atta time

export default class RecentChallenges extends React.Component {
  // componentDidMount() {
  //   Font.loadAsync({
  //     'Oswald': require('../../assets/oswald/Oswald-Regular.ttf'),
  //   });
  // }


  toChallengeSent() {
    this.props.navigation.navigate('ChallengeSent');
  }

  toCompete() {
    this.props.navigation.navigate('CompeteConfirmation');
  }

  toNewChallenge() {
    if (global.sent_challenge) {
      this.oneAttaTime();
    } else {
       this.props.navigation.navigate('GroupOrSolo');
    }
  }

  oneAttaTime() {
    Alert.alert (
    'Battleshop Says',
    'You can only send one challenge at a time. You must cancel your current challenge ' +
    'before starting a new one. Do you want to cancel the current challenge? ',
    [
    {text: 'No', style: 'cancel'},
    {text: 'Yes', onPress: () => this.reset()},
    ],
    { cancelable: false })
  }

  reset() {
    global.opponents_arr = [];
    global.item = '';
    global.budget = -1;
    global.hours = 0;
    global.minutes = 0;
    global.time_string = '';
    global.sent_challenge = false;
    if (!selected_recent) {
        this.props.navigation.navigate('GroupOrSolo');
    }
  }

  selectedFirst() {
    if (global.sent_challenge) {
      this.oneAttaTime();
    } else {
    global.opponents_arr = [];
    global.opponents_arr.push('Alice Vera');
    global.item = 'a dress';
    global.budget = 50;
    global.hours = 1;
    global.time_string = '1 hour';
    global.duel_or_solo = "duel";
    global.hunt_or_save = "save";
    global.sent_challenge = true;
    selected_recent = true;
    this.toChallengeSent();
    }
  }

  selectedSecond() {
    if (global.sent_challenge) {
      this.oneAttaTime();
    } else {
    global.opponents_arr = [];
    global.opponents_arr.push('Barry Allen');
    global.item = 'tennis shoes';
    global.budget = 75;
    global.minutes = 30;
    global.time_string = global.minutes + ' minutes';
    global.duel_or_solo = "duel";
    global.hunt_or_save = "save";
    global.sent_challenge = true;
    selected_recent = true;
    this.toChallengeSent();
    }
  }

  selectedThird() {
    if (global.sent_challenge) {
      this.oneAttaTime();
    } else {
    global.opponents_arr = [];
    global.opponents_arr.push('Yanyan Tong');
    global.item = 'a blouse';
    global.budget = 60;
    global.minutes = 45;
    global.time_string = global.minutes + ' minutes';
    global.duel_or_solo = "duel";
    global.hunt_or_save = "save";
    global.sent_challenge = true;
    selected_recent = true;
    this.toChallengeSent();
    }
  }

  selectedFourth() {
    if (global.sent_challenge) {
      this.oneAttaTime();
    } else {
    global.opponents_arr = [];
    global.opponents_arr.push('Clark Kent');
    global.item = 'glasses';
    global.budget = 100;
    global.hours = 1;
    global.minutes = 30;
    global.time_string = '1 hour and ' + global.minutes + ' minutes';
    global.duel_or_solo = "duel";
    global.hunt_or_save = "save";
    global.sent_challenge = true;
    selected_recent = true;
    this.toChallengeSent();
    }
  }

  toCurrentGame(){
    if(!global.opponents_arr[0]){
      alert("No game currently in progress!");
    }else{
      this.props.navigation.navigate('CompeteConfirmation');
    }
  }

  _renderButton1() {
    return(
      <TouchableOpacity style={styles.itemButton}  onPress={this.selectedFirst.bind(this)} >
        <Text style={{textAlign: 'center', fontSize: 24}}>SAVE vs. Alice</Text>
        <Text style={{textAlign: 'center', fontSize: 16, width: '95%'}}>Item: Dress; Budget: $50; Time: 1 Hour</Text>
      </TouchableOpacity>
    )
  }

  _renderButton2() {
    return(
      // I switched the order, so that's why I'm calling selectedThird rather than selectedSecond
      <TouchableOpacity style={styles.itemButton} onPress={this.selectedThird.bind(this)} >
        <Text style={{textAlign: 'center', fontSize: 24, width: '95%'}}>SAVE vs. Yanyan</Text>
        <Text style={{textAlign: 'center', fontSize: 16, width: '95%'}}>Item: Blouse; Budget: $60; Time: 45 Minutes</Text>

      </TouchableOpacity>
    )
  }

  _renderButton3() {
    return(
      <TouchableOpacity style={styles.itemButton} onPress={this.selectedSecond.bind(this)} >
        <Text style={{textAlign: 'center', fontSize: 24, width: '95%'}}>SAVE vs. Barry</Text>
        <Text style={{textAlign: 'center', fontSize: 16, width: '95%'}}>Item: Shoes; Budget: $75; Time: 30 Minutes</Text>
      </TouchableOpacity>
    )
  }

  _renderButton4() {
    return(
      <TouchableOpacity style={styles.itemButton} onPress={this.selectedFourth.bind(this)} >
        <Text style={{textAlign: 'center', fontSize: 24, width: '95%'}}>SAVE vs. Clark</Text>
           <Text style={{textAlign: 'center', fontSize: 16}}>Item: Glasses; Budget: $70; Time: 1.5 Hours</Text>
      </TouchableOpacity>
    )
  }


  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#F9564F'}}>
        <Text style={{marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 15, color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 36}}>Compete Page</Text>
        <View style={styles.itemsContainer}>
        <TouchableOpacity onPress={() => this.toNewChallenge()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 25}]}>
          <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'white'}}>New Challenge</Text>
        </TouchableOpacity>

          <View style={{display: 'flex', flexDirection: 'column', width: '90%'}}>
            <Text style={{marginBottom: 20, color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 20}}>Recent Challenges</Text>
            <ScrollView contentContainerStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              {this._renderButton1()}
              {this._renderButton2()}
              {this._renderButton3()}
              {this._renderButton4()}
            </ScrollView>
          </View>

        </View>
      </View>
    )
  }
}
<<<<<<< HEAD

=======
            //
            // <TouchableOpacity style={styles.itemButton} onPress={this.selectedFirst.bind(this)}>
            //   <Text style={{textAlign: 'center', fontSize: 24}}>SAVE vs. Alice</Text>
            //   <Text style={{textAlign: 'center', fontSize: 16}}>Item: Dress; Budget: $50; Time: 1 Hour</Text>
            // </TouchableOpacity>
            // <TouchableOpacity style={styles.itemButton} onPress={this.selectedSecond.bind(this)}>
            //   <Text style={{textAlign: 'center', fontSize: 24}}>SAVE vs. Barry</Text>
            //   <Text style={{textAlign: 'center', fontSize: 16}}>Item: Shoes; Budget: $75; Time: 30 Minutes</Text>
            // </TouchableOpacity>
            // <TouchableOpacity style={styles.itemButton} onPress={this.selectedThird.bind(this)}>
            //   <Text style={{textAlign: 'center', fontSize: 24}}>SAVE vs. Yanyan</Text>
            //   <Text style={{textAlign: 'center', fontSize: 16}}>Item: Blouse; Budget: $60; Time: 45 Minutes</Text>
            // </TouchableOpacity>
            // <TouchableOpacity style={styles.itemButton} onPress={this.selectedFourth.bind(this)}>
            //   <Text style={{textAlign: 'center', fontSize: 24}}>SAVE vs. Clark</Text>
            //   <Text style={{textAlign: 'center', fontSize: 16}}>Item: Glasses; Budget: $70; Time: 1.5 Hours</Text>
            // </TouchableOpacity>
>>>>>>> ec4e98c4e224b1c16ef4b780738c835344d29479
module.exports = RecentChallenges;
