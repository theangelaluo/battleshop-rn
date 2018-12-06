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
    console.log("sent challenge in New Challenge: " + global.sent_challenge)
    if (global.sent_challenge) {
      Alert.alert (
      'Battleshop Says',
      'You can only send one challenge at a time. You must cancel your current challenge ' +
      'before starting a new one. Do you want to cancel the current challenge? ',
    [
      {text: 'No', style: 'cancel'},
      {text: 'Yes', onPress: () => this.reset()},
      // {text: 'OK', onPress: () => this.loginActual()},
    ],
    { cancelable: false })
    } else {
       this.props.navigation.navigate('GroupOrSolo');
    }
  }

  // _renderCountdown() {
  //   if (global.sent_challenge) {
  //     return (
  //       <CountDown
  //         // Fake opponent accepting the challenge
  //         until={7}
  //         timeToShow={[S]}
  //         onFinish={this.fakeInteraction()}
  //       />
  //     );
  //   }
  // }

  // fakeInteraction() {
    // console.log("sent challenge in Fake Interaction: " + global.sent_challenge)
    // if (global.sent_challenge) {
    //   console.log('made it here? ');
    //   Alert.alert(
    //     'Battleshop Says',
    //     global.opponents_arr[0] + ' accepted! Ready to start the challenge?',
    //     [
    //       {text: 'Cancel', style: 'cancel'},
    //       {text: 'OK', onPress: () => this.toCompete()},
    //     ],
    //     {cancelable: false }
    // )}

  // }

  reset() {
    global.opponents_arr = [];
    global.item = '';
    global.budget = -1;
    global.hours = 0;
    global.minutes = 0;
    global.time_string = '';
    global.sent_challenge = false;
  }

  selectedFirst() {
    global.opponents_arr = [];
    global.opponents_arr.push('Alice Vera');
    global.item = 'a dress';
    global.budget = 50;
    global.hours = 1;
    global.time_string = '1 hour';
    global.duel_or_solo = "duel";
    global.hunt_or_save = "save";
    global.sent_challenge = true;
    this.toChallengeSent();
  }

  selectedSecond() {
    global.opponents_arr = [];
    global.opponents_arr.push('Barry Allen');
    global.item = 'tennis shoes';
    global.budget = 75;
    global.minutes = 30;
    global.time_string = global.minutes + ' minutes';
    global.duel_or_solo = "duel";
    global.hunt_or_save = "save";
    global.sent_challenge = true;
    this.toChallengeSent();
  }

  selectedThird() {
    global.opponents_arr = [];
    global.opponents_arr.push('Yanyan Tong');
    global.item = 'a blouse';
    global.budget = 60;
    global.minutes = 45;
    global.time_string = global.minutes + ' minutes';
    global.duel_or_solo = "duel";
    global.hunt_or_save = "save";
    global.sent_challenge = true;
    this.toChallengeSent();
  }

  selectedFourth() {
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
    this.toChallengeSent();
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
      <TouchableOpacity style={styles.itemButton} >
        <Text style={{textAlign: 'center', fontSize: 24}}>SAVE vs. Alice</Text>
      </TouchableOpacity>
    )
  }

  _renderButton2() {
    return(
      <TouchableOpacity style={styles.itemButton} >
        <Text style={{textAlign: 'center', fontSize: 24, width: '95%'}}>SAVE vs. Alice</Text>
      </TouchableOpacity>
    )
  }

  _renderButton3() {
    return(
      <TouchableOpacity style={styles.itemButton} >
        <Text style={{textAlign: 'center', fontSize: 24, width: '95%'}}>SAVE vs. Alice</Text>
      </TouchableOpacity>
    )
  }

  _renderButton4() {
    return(
      <TouchableOpacity style={styles.itemButton} >
        <Text style={{textAlign: 'center', fontSize: 24, width: '95%'}}>SAVE vs. Alice</Text>
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9564F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemsContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
//  paddingVertical: '10%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: "center"
},
itemButton: {
  width: '40%',
  height: 100,
  margin: '3%',
  justifyContent: 'center',
  alignItems: "center",
  backgroundColor: '#F2C57D',
  //marginTop: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.8,
  shadowRadius: 1,
  elevation: 1,
  shadowColor:'#202020',
  shadowRadius: 1,
  shadowOffset: {width: 2, height: 2},
  borderRadius: 15
 },
  button: {
//alignSelf: 'stretch',
    padding: 10,
    margin: 10
  },
  yellowContainer: {
    borderColor: "black",
    borderWidth: 1,
    width: '85%',
    height: '55%',
    backgroundColor: '#f3c677',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    flex: 0,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '95%',
  },
  textBoxSurroundings: {
    flex: 0,
    backgroundColor: '#f3c677',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '80%',
    fontSize: 30,
  },
  buttonShadow: {
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
    shadowColor:'#202020',
    shadowRadius: 1,
    shadowOffset: {width: 2, height: 2},
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  },
  subheader: {
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#575757',
  },
  opponent: {
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 25,
    color: 'black'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black'
  },
  progressBar:{
    bottom: 15,
    position: 'absolute'
  }
});

module.exports = RecentChallenges;
