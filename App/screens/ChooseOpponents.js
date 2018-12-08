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
        color: 'rgba(103, 49, 189, 0.55)',
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
      <TouchableOpacity onPress={this.press.bind(this, this.props.item)}>
        <View style={{backgroundColor: this.state.color, paddingLeft: 15, paddingRight: 20, paddingTop: 7, paddingBottom: 7, width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={require('../../img/avatar-small.png')} style={{resizeMode: 'contain'}}/>
                <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{this.props.item}</Text>
                </View>
          </View>

          <Image source={require('../../img/black-arrow-small.png')} style={{resizeMode: 'contain'}}/>

        </View>
      </TouchableOpacity>
    )
  }
}


// <TouchableOpacity onPress={this.selectedFirst.bind(this)}>
//   <View style={{borderColor: "#D3D3D3", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
//     <View style={{display: 'flex', flexDirection: 'row'}}>
//     <Image source={require('../../img/Alice.png')} style={{resizeMode: 'contain'}}/>
//     <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
//       <Text style={{fontSize: 16, fontWeight: 'bold'}}>SAVE vs. Alice</Text>
//       <Text>Item: Dress</Text>
//       <Text>Budget: $50</Text>
//       <Text>Time: 1 hour</Text>
//     </View>
//     </View>
//     <Image source={require('../../img/Right_Arrow.png')} style={{resizeMode: 'contain'}}/>
//   </View>
// </TouchableOpacity>

export default class ChooseOpponents extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
       rowHasChanged: (r1, r2) => (r1 != r2)
    });

    this.state = {
      color: '#F2C57D',
      dataSource: ds.cloneWithRows(["Alice Vera", "Yanyan Tong", "Barry Allen", "Clark Kent"]),
      dataSource2: ds.cloneWithRows(['Alice Vera', 'Angela Luo', 'Barry Allen', 'Bruce Wayne', 'Clark Kent',
      'Emily Hu', 'Francesca Colombo', 'Kara Danvers', 'Logan Pearce', 'Michael Cooper', 'Yanyan Tong'
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

        <Text style={[styles.header, {marginTop: 20, marginBottom: 10}]}>Choose Opponents</Text>

        <View style={{width: '95%', height: '27%'}}>
          <View style={{backgroundColor: '#7A2379', paddingTop: 7, paddingBottom: 7}}>
            <Text style={{...styles.subheader, color: 'white'}}>Recent</Text>
          </View>
          <ListView
              dataSource={this.state.dataSource}
              removeClippedSubviews = {false}
              renderRow={(item) => (
                <Opponent item={item}/>
              )}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />

        </View>

        <View style={{width: '95%', height: '37%', marginTop: 15}}>
        <View style={{backgroundColor: '#7A2379', paddingTop: 7, paddingBottom: 7}}>
          <Text style={{...styles.subheader, color: 'white'}}>All Contacts</Text>
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


          <TouchableOpacity onPress={() => this.toChooseItem()} style={[styles.button, {backgroundColor: '#7B1E7A', marginTop: 15}]}>
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
