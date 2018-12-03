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

export default class ChooseBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleInputChange = (text) => {
      this.setState({
        text: text,
      });
      global.budget = text;
  }
  toChooseTime() {
    // Error prevention
    // Error prevention
    if (typeof(global.budget ) === 'undefined' || (typeof(global.budget ) === 'string' && global.budget.length == 0)) {
        Alert.alert(
        'Battleshop Says',
        'Your budget cannot be empty. Please choose a budget that is a positive number.',
        [
          {text: 'OK'},
        ],
        {cancelable: false}
        )
  } else if (global.budget[0] === '-') {
    Alert.alert(
    'Battleshop Says',
    'Budgets cannot be negative. Please choose a budget that is a positive number.',
    [
      {text: 'OK'},
    ],
    {cancelable: false}
    )
    // Checks if the budget only contains digits
  } else if (!/^\d+$/.test(global.budget)) {
        Alert.alert(
        'Battleshop Says',
        'Budgets cannot include letters. Please choose a budget that is a positive number.',
        [
          {text: 'OK'},
        ],
        {cancelable: false}
        )
    } else if (global.budget === '0') {
      Alert.alert(
      'Battleshop Says',
      'Zero is not a valid budget. Please choose a budget that is a positive number.',
      [
        {text: 'OK'},
      ],
      {cancelable: false}
      )
    }  else {
      this.props.navigation.navigate('ChooseTime');
    }
  }
  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#F9564F', alignItems: 'center'}}>
        <Text style={{marginTop: 30, marginBottom: 30, textAlign: 'center', fontSize: 36, color: "white", fontWeight: 'bold'}}>Choose Budget</Text>

          <View style={styles.textBoxSurroundings}>
            <TextInput
            style={styles.textBox}
            keyboardType='numeric'
            onChangeText={this.handleInputChange}
            value={this.state.text}
            />
          </View>

        <TouchableOpacity onPress={() => this.toChooseTime()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 25}]}>
          <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'white'}}>Continue</Text>
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
  }
});

module.exports = ChooseBudget;
