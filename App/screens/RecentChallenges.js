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
      <TouchableOpacity onPress={this.selectedFirst.bind(this)}>
        <View style={{borderColor: "#D3D3D3", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image source={require('../../img/Alice.png')} style={{resizeMode: 'contain'}}/>
          <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>SAVE vs. Alice</Text>
            <Text>Item: Dress</Text>
            <Text>Budget: $50</Text>
            <Text>Time: 1 hour</Text>
          </View>
          </View>
          <Image source={require('../../img/Right_Arrow.png')} style={{resizeMode: 'contain'}}/>
        </View>
      </TouchableOpacity>
    )
  }

  _renderButton2() {
    return(
      // I switched the order, so that's why I'm calling selectedThird rather than selectedSecond
      <TouchableOpacity onPress={this.selectedThird.bind(this)}>
        <View style={{borderColor: "#D3D3D3", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image source={require('../../img/Alice.png')} style={{resizeMode: 'contain'}}/>
          <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>SAVE vs. Yanyan</Text>
            <Text>Item: Blouse</Text>
            <Text>Budget: $60</Text>
            <Text>Time: 45 minutes</Text>
          </View>
          </View>
          <Image source={require('../../img/Right_Arrow.png')} style={{resizeMode: 'contain'}}/>
        </View>
      </TouchableOpacity>
    )
  }

  _renderButton3() {
    return(
      <TouchableOpacity onPress={this.selectedSecond.bind(this)}>
        <View style={{borderColor: "#D3D3D3", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image source={require('../../img/Alice.png')} style={{resizeMode: 'contain'}}/>
          <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>SAVE vs. Barry</Text>
            <Text>Item: Shoes</Text>
            <Text>Budget: $75</Text>
            <Text>Time: 30 minutes</Text>
          </View>
          </View>
          <Image source={require('../../img/Right_Arrow.png')} style={{resizeMode: 'contain'}}/>
        </View>
      </TouchableOpacity>
    )
  }

  _renderButton4() {
    return(
      <TouchableOpacity onPress={this.selectedFourth.bind(this)}>
        <View style={{borderColor: "#D3D3D3", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image source={require('../../img/Alice.png')} style={{resizeMode: 'contain'}}/>
          <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>SAVE vs. Clark</Text>
            <Text>Item: Glasses</Text>
            <Text>Budget: $70</Text>
            <Text>Time: 1.5 hours</Text>
          </View>
          </View>
          <Image source={require('../../img/Right_Arrow.png')} style={{resizeMode: 'contain'}}/>
        </View>
      </TouchableOpacity>
    )
  }


  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#F9564F'}}>
        <Text style={{...styles.titleFont, marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 5, textAlign: 'center'}}>Compete</Text>
        <View style={styles.itemsContainer}>
        <TouchableOpacity onPress={() => this.toNewChallenge()} style={[styles.button, {backgroundColor: '#7B1E7A', paddingTop: 15, paddingBottom: 15}]}>
          <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', justifyContent: 'center', color: 'white', fontSize: 24}}>New Challenge</Text>
        </TouchableOpacity>

          <View style={{display: 'flex', flexDirection: 'column', height: '70%', width: '100%'}}>
            <Text style={{...styles.H2Font, marginBottom: 5, marginTop: 20, fontWeight: 'bold', textAlign: 'left'}}>Recent Challenges</Text>

            <View style={{height: '100%'}}>
            <ScrollView contentContainerStyle={{width: '100%'}}>
              {this._renderButton1()}
              {this._renderButton2()}
              {this._renderButton3()}
              {this._renderButton4()}
            </ScrollView>
            </View>

          </View>

        </View>
      </View>
    )
  }
}




module.exports = RecentChallenges;
