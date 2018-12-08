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
      item_text: 'Custom Item',
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
      dress_color: 'rgba(103, 49, 189, 0.55)',
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
      shirt_color: 'rgba(103, 49, 189, 0.55)',
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
      jacket_color: 'rgba(103, 49, 189, 0.55)',
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
      pants_color: 'rgba(103, 49, 189, 0.55)'
    })
  //  this.toChooseBudget();
  }


  handleInputChange = (text) => {
      global.item = text;
      this.setState({
        item_text: text
      })
  }


  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#F9564F',display: 'flex', alignItems: 'center'}}>
        <Text style={{marginTop: 30, color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 36}}>Choose Your Item</Text>

        <View style={[styles.textBoxSurroundings, {width: '95%', marginTop: 20, marginBottom: 20}]}>
          <TextInput
          style={styles.textBox}
          onChangeText={this.handleInputChange}
          value={this.state.item_text}
          />
        </View>

        <View style={{height: '48%', width: '95%'}}>

          <ScrollView contentContainerStyle={{width: '100%'}}>

          <TouchableOpacity onPress={this.selectedDress.bind(this)}>
            <View style={{borderColor: "#404040", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: this.state.dress_color, width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image source={require('../../img/dress.png')} style={{resizeMode: 'contain'}}/>
              <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Dress</Text>
              </View>
              </View>
              <Image source={require('../../img/black-arrow-small.png')} style={{resizeMode: 'contain'}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.selectedShirt.bind(this)}>
            <View style={{borderColor: "#404040", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: this.state.shirt_color, width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image source={require('../../img/shirt.png')} style={{resizeMode: 'contain'}}/>
              <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Shirt</Text>
              </View>
              </View>
              <Image source={require('../../img/black-arrow-small.png')} style={{resizeMode: 'contain'}}/>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={this.selectedJacket.bind(this)}>
            <View style={{borderColor: "#404040", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: this.state.jacket_color, width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image source={require('../../img/jacket-icon.png')} style={{resizeMode: 'contain'}}/>
              <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Jacket</Text>
              </View>
              </View>
              <Image source={require('../../img/black-arrow-small.png')} style={{resizeMode: 'contain'}}/>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={this.selectedPants.bind(this)}>
            <View style={{borderColor: "#404040", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: this.state.pants_color, width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image source={require('../../img/pants.png')} style={{resizeMode: 'contain'}}/>
              <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Pants</Text>
              </View>
              </View>
              <Image source={require('../../img/black-arrow-small.png')} style={{resizeMode: 'contain'}}/>
            </View>
          </TouchableOpacity>


            </ScrollView>
            </View>

              <TouchableOpacity onPress={() => this.press()} style={[styles.button, {backgroundColor: '#7B1E7A', marginTop: 15, marginBottom: 25}]}>
                <Text style={{paddingLeft: 10, paddingRight: 10, textAlign: 'center', fontSize: 30, color: 'white'}}>Continue</Text>
              </TouchableOpacity>


            <View style={{...styles.progressBar, left:'10%'}}>
              <Progress.Bar progress={0.3} width={300} progress={0.5} color={'rgba(123, 30, 122, 1)'}/>
            </View>
      </View>
    )
  }
}

module.exports = ChooseItem;
