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

import {styles} from '../styles.js';

export default class HuntOrSave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_text: ''
    };
  }

  toChooseItem() { //TODO:temporary navigation, delete before commit
    this.props.navigation.navigate('ChooseItem');
    global.hunt_or_save = "save";
  }

  toHunt() {
    //todo: hunt not implemented yet!
    global.hunt_or_save = "hunt";
  }

  huntTutorial() {
    Alert.alert(
    'HUNT Gameplay:',
    "\n SETUP: Create a collaborative shopping list and add a time limit. \n \n" +
    "HOW TO WIN: For each item you find, you earn 10 points. The player who finds the most items wins 100 coins!",
    [
      {text: 'OK'},
    ],
    {cancelable: false}
    )
  }



  saveTutorial() {

    Alert.alert(
      'SAVE Gameplay:',
      //  "Compete with friends to find the best deal. + \n" +
        "\n SETUP: Add the type of item you want to find, your budget, and time limit. \n \n" +
        "HOW TO WIN: The player who finds the cheapest item within the time limit wins 100 coins!",
      [
        {text: 'OK'},
      ],
      {cancelable: false}
    )

  }

  unlockMe() {
    Alert.alert(
    'Battleshop Says',
    'This Battleshop game is locked. Play more to unlock this challenge!',
    [
      {text: 'OK'},
    ],
    {cancelable: false}
    )
  }

  handleInputChange = (text) => {
      this.setState({
        item_text: text,
      });
      global.item = text;
  }

  render() {
    return (
      <View style={{backgroundColor: '#F9564F', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>

    <View style={{width: '95%', height: '30%', display: 'flex', alignItems: 'center', marginBottom: 25,}}>
      <TouchableOpacity onPress={() => this.unlockMe()} style={[styles.button, styles.buttonShadow, {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', width: '95%', height: '95%', backgroundColor: "#f3c677", }]}>
        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 70, color: 'black', marginRight: 40}}>HUNT </Text>
            <Image source={require('../../img/black-arrow-2.png')} style={{resizeMode: 'contain'}}/>
          </View>
          <Text>Get the items you need in the time you have</Text>
        </View>
      </TouchableOpacity>
      <View style={{display: 'flex', alignSelf: 'flex-end', position: "absolute"}}>
        <TouchableOpacity onPress={()=>this.huntTutorial()} style={[styles.shadow, {display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "white", height: 50, width: 50, borderRadius: 25}]}>
          <Text style={{fontSize: 30, fontWeight: "bold", color: "#696969"}}>i</Text>
        </TouchableOpacity>
      </View>
    </View>


    <View style={{width: '95%', height: '30%', display: 'flex', alignItems: 'center', marginBottom: 25,}}>
      <TouchableOpacity onPress={() => this.toChooseItem()} style={[styles.button, styles.buttonShadow, {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', width: '95%', height: '95%', backgroundColor: "#f3c677", }]}>
        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 70, color: 'black', marginRight: 40}}>SAVE </Text>
            <Image source={require('../../img/black-arrow-2.png')} style={{resizeMode: 'contain'}}/>
          </View>
          <Text>Shop within your budget</Text>
        </View>
      </TouchableOpacity>
      <View style={{display: 'flex', alignSelf: 'flex-end', position: "absolute"}}>
        <TouchableOpacity onPress={()=>this.saveTutorial()} style={[styles.shadow, {display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "white", height: 50, width: 50, borderRadius: 25}]}>
          <Text style={{fontSize: 30, fontWeight: "bold", color: "#696969"}}>i</Text>
        </TouchableOpacity>
      </View>
    </View>

        <View style={styles.progressBar}>
          <Progress.Bar progress={0.3} width={300} progress={0.2} color={'rgba(123, 30, 122, 1)'}/>
        </View>


      </View>
    )
  }
}
module.exports = HuntOrSave;
