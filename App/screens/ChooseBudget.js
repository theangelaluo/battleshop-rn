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

          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold'}}>$ </Text>
          <View style={styles.textBoxSurroundings}>
            <TextInput
            style={styles.textBox}
            keyboardType='numeric'
            onChangeText={this.handleInputChange}
            value={this.state.text}
            />
          </View>
          </View>

        <TouchableOpacity onPress={() => this.toChooseTime()} style={[styles.button, {backgroundColor: '#7B1E7A', marginTop: 25}]}>
          <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'white'}}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <Progress.Bar progress={0.3} width={300} progress={0.7} color={'rgba(123, 30, 122, 1)'}/>
        </View>
      </View>

    )
  }
}

module.exports = ChooseBudget;
