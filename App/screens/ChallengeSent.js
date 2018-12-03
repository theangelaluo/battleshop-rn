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

export default class ChallengeSent extends React.Component {
  backToGroupOrSolo() {
    this.props.navigation.navigate('GroupOrSolo');
  }
  // toCompete() {
  //   this.props.navigation.navigate('CompeteScreen');
  // }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F9564F', alignItems: 'center', padding: 15}}>
        <Text style={{marginTop: 30, fontSize: 36, color: "white", fontWeight: 'bold', textAlign: 'center'}}>Challenge Sent!</Text>
        <Text style={{marginTop: 20, fontSize: 30, color: 'white', textAlign: 'center'}}>
          Your opponent has 5 minutes to accept this challenge, or the challenge will be cancelled.
        </Text>
        <Text style={{marginTop: 20, fontSize: 30, color: 'white', textAlign: 'center'}}>
          We will send you a notification when your opponent accepts.
        </Text>
      <TouchableOpacity onPress={() => this.backToGroupOrSolo()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 10}]}>
      <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'white'}}>Back to Home</Text>
      </TouchableOpacity>
      // <TouchableOpacity onPress={() => this.toCompete()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 10}]}>
      // <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'white'}}>Compete</Text>
      // </TouchableOpacity>
      </View>
    )
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
  shadowColor: 'rgba(0, 0, 0, 0.25)',
  //shadowOffset: { width: 0, height: 0 },
  shadowRadius: 1,
  //elevation: 1,
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
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    //shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
    elevation: 1,
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

module.exports = ChallengeSent;
