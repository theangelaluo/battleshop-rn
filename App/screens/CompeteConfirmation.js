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

export default class CompeteConfirmation extends React.Component {
  constructor() {
    super();
    this.state = {showHunt: false};
  }

  _renderInstructions(isHunt) {
       if (isHunt) {
           return (
              <Text style={{marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 15, color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 20}}>For HUNT, you will be shown a shopping list. Your job is to check off as many items as possible by shopping within the store.</Text>
           );
       } else{
         return(
            <View>
              <Text style={{marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 15, color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 18}}>For SAVE, you will be searching for {global.item}. Your job is to look for the cheapest one IN THE STORE within the time limit.</Text>
              <Text style={{marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 15, color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 18}}>As you find good candidates, send a picture to the chat.</Text>
              <Text style={{marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 15, color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 18}}>At the end of {global.hours} hours and {global.minutes} minutes, the person who found the item with lowest price will win!</Text>
            </View>
         );
     }
   }

  _renderOpponent(isDuel) {
       if (isDuel) {
           return (
              <Text style={{marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 15, color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 28}}>You're about to start a "{global.hunt_or_save}" {global.duel_or_solo} with {global.opponents_arr[0]}!</Text>
           );
       } else{
         return(
              <Text style={{marginTop: 30, marginLeft: 30, marginRight: 30, marginBottom: 15, color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 28}}>You're about to start a "{global.hunt_or_save}" {global.duel_or_solo}!</Text>
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
        <TouchableOpacity onPress={() => this.startChallenge()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 10}]}>
          <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'white'}}>Start Challenge!</Text>
        </TouchableOpacity>
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
  },
  progressBar:{
    bottom: 15,
    position: 'absolute'
  }
});

module.exports = CompeteConfirmation;
