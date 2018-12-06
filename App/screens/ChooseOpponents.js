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
import CountDown from 'react-native-countdown-component';
import {styles} from '../styles.js';

class Opponent extends React.Component {
  constructor() {
    super();
    this.state = {
      color: '#F2C57D',
      clicked: false,
    };
  }

  press(item) {
    // if the button is going from unclicked to clicked
    if (!this.state.clicked) {
      global.opponents_arr.push(item);
      this.setState({
        color: 'white',
        clicked: true
      })
    } else {
      // Find the index position of then opponent, then remove one element from that position
      var index = global.opponents_arr.indexOf(item)
      global.opponents_arr.splice(index, 1);
      this.setState({
        color: '#F2C57D',
        clicked: false
      })
    }
  }

  render() {
    return (
      <View style={{backgroundColor: this.state.color}}>
        <TouchableOpacity onPress={this.press.bind(this, this.props.item)}>
        <Text style={styles.opponent}>{this.props.item}</Text>

         </TouchableOpacity>
      </View>
    )
  }
}

export default class ChooseOpponents extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
       rowHasChanged: (r1, r2) => (r1 != r2)
    });

    this.state = {
      color: '#F2C57D',
      dataSource: ds.cloneWithRows(['Xiajang Wang', 'Melinda Vandersteen',
      'John Klickman', 'Alice Vera', 'Jason Brown']),
      dataSource2: ds.cloneWithRows([ 'Alice Vera', 'Angela Luo', 'Barry Allen', 'Bruce Wayne',
      'Emily Hu', 'Francesca Colombo','Jason Brown', 'John Klickman','Kara Danvers',
      'Logan Pearce', 'Michael Cooper', 'Melinda Vandersteen',
      'Peter Parker', 'Tony Stark', 'Xiajang Wang', 'Yanyan Tong'
      ]),
    };
    // reset
    global.opponents_arr = [];
  }


  toHuntOrSave() {
    this.props.navigation.navigate('HuntOrSave');
  }

  toChooseItem() {
    if (global.opponents_arr.length == 0) {
      Alert.alert(
      'Battleshop Says',
      'Please select at least one opponent.',
      [
        {text: 'OK'},
      ],
      {cancelable: false}
      )
    } else if (global.opponents_arr.length > 1){
      Alert.alert (
      'Battleshop Says',
      'Please select select no more than one opponent.',
      [
        {text: 'OK'},
      ],
      {cancelable: false}
      )
    } else {
      Alert.alert (
        'Battleshop Says',
        'You have challenged ' + global.opponents_arr[0] + '. Continue?',
        [
          {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: () => this.toHuntOrSave()},
        ],
        { cancelable: false }
      )
    }
  }


  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#F9564F'}}>

        <Text style={[styles.header, {marginTop: 30, marginBottom: 30}]}>Choose Opponents</Text>
        <View style={{backgroundColor: '#F2C57D', width: '80%', height: '60%', borderColor: 'black', borderWidth: 1}}>
          <Text style={ styles.subheader}> Recent Opponents </Text>
          <ListView
              dataSource={this.state.dataSource}
              removeClippedSubviews = {false}
              renderRow={(item) => (
                <Opponent item={item}/>
              )}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
            <View style={{marginTop: 10, borderColor: 'black', borderTopWidth: 1}}>
          <Text style={styles.subheader}> All Available Contacts </Text>
          </View>
          <ListView
              dataSource={this.state.dataSource2}
              removeClippedSubviews = {false}
              renderRow={(item) => (
                <Opponent item={item}/>
              )}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
          </View>
          <TouchableOpacity onPress={() => this.toChooseItem()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 25}]}>
            <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'white'}}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.progressBar}>
            <Progress.Bar progress={0.3} width={300} progress={0.1} color={'rgba(123, 30, 122, 1)'}/>
          </View>
      </View>
    );
  }

}

module.exports = ChooseOpponents;
