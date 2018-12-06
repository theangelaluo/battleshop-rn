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
      <TouchableOpacity onPress={() => this.unlockMe()} style={[styles.button, styles.buttonShadow, {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', width: '95%', height: '95%', backgroundColor: "#f3c677", borderRadius: 15, }]}>
        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 60, color: 'black'}}>Hunt </Text>
            <Icon name='arrow-forward' size={40} />
          </View>
          <Text>Get the items you need in the time you have</Text>
        </View>
      </TouchableOpacity>
      <View style={{display: 'flex', alignSelf: 'flex-end', position: "absolute"}}>
        <TouchableOpacity onPress={()=>this.huntTutorial()} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "white", height: 50, width: 50, borderRadius: 25}}>
          <Text style={{fontSize: 30, fontWeight: "bold", color: "#696969"}}>i</Text>
        </TouchableOpacity>
      </View>
    </View>


    <View style={{width: '95%', height: '30%', display: 'flex', alignItems: 'center', marginBottom: 25,}}>
      <TouchableOpacity onPress={() => this.toChooseItem()} style={[styles.button, styles.buttonShadow, {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', width: '95%', height: '95%', backgroundColor: "#f3c677", borderRadius: 15, }]}>
        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 60, color: 'black'}}>Save </Text>
            <Icon name='arrow-forward' size={40} />
          </View>
          <Text>Shop within your budget</Text>
        </View>
      </TouchableOpacity>
      <View style={{display: 'flex', alignSelf: 'flex-end', position: "absolute"}}>
        <TouchableOpacity onPress={()=>this.saveTutorial()} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "white", height: 50, width: 50, borderRadius: 25}}>
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

module.exports = HuntOrSave;
