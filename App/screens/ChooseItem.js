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

import { Icon } from 'react-native-elements';
import TimePicker from 'react-native-simple-time-picker';
import * as Progress from 'react-native-progress';
import CountDown from 'react-native-countdown-component';
import {styles} from '../styles.js';

export default class ChooseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_text: '',
      dress_color: '#F2C57D',
      shirt_color: '#F2C57D',
      jacket_color: '#F2C57D',
      pants_color: '#F2C57D'
    };
    // reset
    global.item = '';
  }

  press() {
    if (global.item.length === 0) {
      Alert.alert(
      'Battleshop Says',
      'Please select an item or enter your own custom input.',
      [
        {text: 'OK'},
      ],
      {cancelable: false}
      )
    } else {
      this.props.navigation.navigate('ChooseBudget');
    }
  }

  toChooseBudget() {
    this.props.navigation.navigate('ChooseBudget');
  }

  selectedDress() {
    global.item = 'a dress';
    this.setState({
      dress_color: 'white',
      shirt_color: '#F2C57D',
      jacket_color: '#F2C57D',
      pants_color: '#F2C57D'
    });
  //  this.toChooseBudget();
  }

  selectedShirt() {
    global.item = 'a shirt';
    this.setState({
      dress_color: '#F2C57D',
      shirt_color: 'white',
      jacket_color: '#F2C57D',
      pants_color: '#F2C57D'
    })
  //  this.toChooseBudget();
  }

  selectedJacket() {
    global.item = 'a jacket';
    this.setState({
      dress_color: '#F2C57D',
      shirt_color: '#F2C57D',
      jacket_color: 'white',
      pants_color: '#F2C57D'
    })
  //  this.toChooseBudget();
  }

  selectedPants() {
    global.item = 'pants';
    this.setState({
      dress_color: '#F2C57D',
      shirt_color: '#F2C57D',
      jacket_color: '#F2C57D',
      pants_color: 'white'
    })
  //  this.toChooseBudget();
  }


  handleInputChange = (text) => {
      global.item = text;
  }


  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#F9564F'}}>
        <Text style={{marginTop: 30, color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 36}}>Choose Your Item</Text>
        <ScrollView contentContainerStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={[styles.itemButton, {backgroundColor: this.state.dress_color}]} onPress={this.selectedDress.bind(this)}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Dress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.itemButton, {backgroundColor: this.state.shirt_color}]} onPress={this.selectedShirt.bind(this)}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Shirt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.itemButton, {backgroundColor: this.state.jacket_color}]} onPress={this.selectedJacket.bind(this)}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Jacket</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.itemButton, {backgroundColor: this.state.pants_color}]} onPress={this.selectedPants.bind(this)}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Pants</Text>
            </TouchableOpacity>
            <View style={[styles.textBoxSurroundings, {marginTop: 20}]}>
              <TextInput
              style={styles.textBox}
              onChangeText={this.handleInputChange}
              value={this.state.item_text}
              />
            </View>
            <TouchableOpacity onPress={() => this.press()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 25}]}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'white'}}>Continue</Text>
            </TouchableOpacity>
            <View style={styles.progressBar}>
              <Progress.Bar progress={0.3} width={300} progress={0.5} color={'rgba(123, 30, 122, 1)'}/>
            </View>
        </ScrollView>

      </View>
    )
  }
}

module.exports = ChooseItem;
