import React from 'react';

import {
  AsyncStorage,
  StyleSheet,
  View,
  ScrollView,
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

import {styles} from '../styles.js';

import { sanFranciscoWeights } from 'react-native-typography'

export default class Rewards extends React.Component {
  constructor() {
    super();
    this.state = { showReward1: true, showReward2: true, showReward3: true, showReward4: true};
  }

  basicAlert() {
    alert("Reward redeemed! Please check your mobile phone for the code.");
  }
  selectedReward1() {
    global.rewards_arr.push('Chick-fil-a nuggets');
    Alert.alert(
      'Battleshop Says',
      'Are you sure you want to reedem Chick-fil-a nuggets for 100 coins?',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => {
        this.setState({
          showReward1: !this.state.showReward1,
        });
        global.coins-=100;
        this.forceUpdate();
      }
    },
    ],
    { cancelable: false }
    )
  }

  selectedReward2() {
    global.rewards_arr.push('Dessert at Red Lobster');
    Alert.alert(
      'Battleshop Says',
      'Are you sure you want to reedem Dessert at Red Lobster for 200 coins?',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => {
        this.setState({
          showReward2: !this.state.showReward2,
        });
        global.coins-=200;
        this.forceUpdate();
      }
    },
    ],
    { cancelable: false }
    )
  }

  selectedReward3() {
    global.rewards_arr.push('10% off at Nike?');
    Alert.alert(
      'Battleshop Says',
      'Are you sure you want to reedem 10% off at Nike for 300 coins?',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => {
        this.setState({
          showReward3: !this.state.showReward3,
        });
        global.coins-=300;
        this.forceUpdate();
      }
    },
    ],
    { cancelable: false }
    )
  }

  selectedReward4() {
    global.rewards_arr.push('15% off at Macy\'s');
    Alert.alert(
      'Battleshop Says',
      'Are you sure you want to reedem 15% off at Macy\'s for 400 coins?',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => {
        this.setState({
          showReward4: !this.state.showReward4,
        });
        global.coins-=400;
        this.forceUpdate();
      }
    },
    ],
    { cancelable: false }
    )
  }

  _renderButton1() {
       if (this.state.showReward1) {
           return (
             <TouchableOpacity style={[reward_styles.itemButton, {marginTop: 10, width: '95%'}]} onPress={this.selectedReward1.bind(this)}>
               <Text style={styles.H2FontBlackUnbold}>Nuggets at Chick-fil-a</Text>
               <Text style={styles.H2FontBlackUnbold}>100 coins</Text>
             </TouchableOpacity>


           );
       } else {
           return null;
       }
   }

   _renderButton2() {
        if (this.state.showReward2) {
            return (
              <TouchableOpacity style={[reward_styles.itemButton, {marginTop: 10, width: '95%'}]} onPress={this.selectedReward2.bind(this)}>
                <Text style={styles.H2FontBlackUnbold}>Dessert at Red Lobster</Text>
                <Text style={styles.H2FontBlackUnbold}>200 coins</Text>
              </TouchableOpacity>
            );
        } else {
            return null;
        }
    }

    _renderButton3() {
         if (this.state.showReward3) {
             return (
                 <TouchableOpacity style={[reward_styles.itemButton, {marginTop: 10, width: '95%'}]} onPress={this.selectedReward3.bind(this)}>
                   <Text style={styles.H2FontBlackUnbold}>10% off at Nike</Text>
                   <Text style={styles.H2FontBlackUnbold}>300 coins</Text>
                 </TouchableOpacity>
             );
         } else {
             return null;
         }
     }

     _renderButton4() {
          if (this.state.showReward4) {
              return (
                <TouchableOpacity style={[reward_styles.itemButton, {marginTop: 10, width: '95%'}]} onPress={this.selectedReward4.bind(this)}>
                  <Text style={styles.H2FontBlackUnbold}>15% off at Macy's</Text>
                  <Text style={styles.H2FontBlackUnbold}>400 coins</Text>
                </TouchableOpacity>

              );
          } else {
              return null;
          }
      }

    _renderRewardText() {
      if (this.state.showReward1 == false && this.state.showReward2 == false && this.state.showReward3 == false && this.state.showReward4 == false) {
        return (
          <Text style={{...styles.titleFont, textAlign:'center'}}>No rewards currently available!</Text>
        );
      } else {
          return(
            <Text style={{...styles.titleFont, textAlign:'center'}}>Click to redeem an available award!</Text>
          );
      }
     }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F9564F', alignItems: 'center', justifyContent: "center"}}>
          <View style={{marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
              <Image source={require('../../img/coins.png')} style={{resizeMode: 'contain', marginRight: 20}}/>
              <Text style={styles.titleFont}>{global.coins}</Text>
              <Text style={styles.titleFontNotBold}> COINS</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', justifyContent: "center"}}>
            {this._renderRewardText()}
          </View>
            <ScrollView contentContainerStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              {this._renderButton1()}
              {this._renderButton2()}
              {this._renderButton3()}
              {this._renderButton4()}
            </ScrollView>
      </View>
    )
  }
}

const reward_styles = StyleSheet.create({
  itemButton: {
    width: '80%',
    height: 100,
    margin: '3%',
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#F2C57D',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
    shadowColor:'#202020',
    shadowRadius: 1,
    shadowOffset: {width: 2, height: 2},
    borderRadius: 15
   }
});

module.exports = Rewards;
