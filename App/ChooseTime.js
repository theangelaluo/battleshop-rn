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

var Header = require("./Header"); 

export default class ChooseTime extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />
  }

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
          if (i !== global.opponents_arr.length - 2) {
            challenged_opponents = challenged_opponents.concat(global.opponents_arr[i] + ', ');
          } else if (i == global.opponents_arr.length - 2) {
            challenged_opponents = challenged_opponents.concat(global.opponents_arr[i] + ', and ');
          } else {
            challenged_opponents = challenged_opponents.concat(global.opponents_arr[i]);
          }
        }
      }
      Alert.alert(
        'Battleshop Says',
        'You are about to send a SAVE challenge for '  + global.hours + ' hours and ' +
        global.minutes + ' minutes with a $' + global.budget + ' budget versus ' + challenged_opponents,
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: () => this.props.navigation.navigate('ChallengeSent')},
        // {text: 'OK', onPress: () => this.loginActual()},
      ],
      { cancelable: false }
      )
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
        <View style={{backgroundColor: 'white', padding: 15, display: 'flex', width: '93%', height: '93%'}}>
          <TimePicker
            selectedHours={selectedHours}
            //initial Hours value
            selectedMinutes={selectedMinutes}
            //initial Minutes value
            onChange={this.handleInputChange}
          />
          </View>
        </View>
        <TouchableOpacity onPress={() => this.toChallengeSent()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 25}]}>
          <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'white'}}>Send Challenge</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
  shadowColor:'black',
  shadowRadius: 1,
  shadowOffset: {width: 4, height: 4},
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
    shadowColor:'black',
    shadowRadius: 1,
    shadowOffset: {width: 4, height: 4},
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
  }
});


module.exports = ChooseTime;
