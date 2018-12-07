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

export default class GroupOrSolo extends React.Component {
  toChooseOpponents() {
    this.props.navigation.navigate('ChooseOpponents');
    global.duel_or_solo = "duel";
  }

  toHuntOrSave() {
    this.props.navigation.navigate('HuntOrSave');
    global.duel_or_solo = "solo";
  }

  toCompete() {
    this.props.navigation.navigate('CompeteScreen');
  }

  unlockMe() {
    Alert.alert(
    'Battleshop Says',
    'This Battleshop mode is locked. Play more to unlock these challenges!',
    [
      {text: 'OK'},
    ],
    {cancelable: false}
    )
  }

  render() {
    const { navigation } = this.props;
    return (
          <View style={{backgroundColor: '#F9564F', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.toChooseOpponents()} style={[styles.button, styles.buttonShadow, {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', height: '30%', backgroundColor: "#f3c677", marginBottom: 25,}]}>
              <Text style={{fontSize: 70, color: 'black'}}>DUEL</Text>
              <Image source={require('../../img/black-arrow-2.png')} style={{resizeMode: 'contain'}}/>
              </TouchableOpacity>

            <TouchableOpacity onPress={() => this.unlockMe()} style={[styles.button, styles.buttonShadow, {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', height: '30%', backgroundColor: '#f3c677', marginTop: 25}]}>
              <Text style={{textAlign: 'center', fontSize: 70, color: 'black'}}>SOLO</Text>
              <Image source={require('../../img/black-arrow-2.png')} style={{resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <View style={styles.progressBar}>
              <Progress.Bar progress={0.3} width={300} progress={0} color={'rgba(123, 30, 122, 1)'}/>
            </View>

          </View>
    )
  }
}

module.exports = GroupOrSolo;
