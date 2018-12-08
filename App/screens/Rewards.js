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
      'Are you sure you want to redeem Free Nuggets at Chick-fil-a for 100 coins?',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => {
        this.setState({
          showReward1: !this.state.showReward1,
        });
        alert("Check your email for your reward!");
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
      'Are you sure you want to redeem Free Dessert at Red Lobster for 200 coins?',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => {
        this.setState({
          showReward2: !this.state.showReward2,
        });
        alert("Check your email for your reward!");
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
      'Are you sure you want to redeem 10% off any item at Nike for 300 coins?',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => {
        this.setState({
          showReward3: !this.state.showReward3,
        });
        alert("Check your email for your reward!");
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
      'Are you sure you want to redeem 15% off entire purchase at Macy\'s for 400 coins?',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => {
        this.setState({
          showReward4: !this.state.showReward4,
        });
        alert("Check your email for your reward!");
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
             <TouchableOpacity onPress={this.selectedReward1.bind(this)} style={{width: '100%',}}>
               <View style={{borderColor: "#D3D3D3", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                 <View style={{display: 'flex', flexDirection: 'row'}}>
                 <Image source={require('../../img/chickfila.png')} style={{resizeMode: 'contain'}}/>
                 <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                   <Text style={{fontSize: 16, color:'#0C0C3D', fontWeight: 'bold'}}>Free Nuggets</Text>
                   <Text style={{fontSize: 16, color:'#0C0C3D'}}>Chick-fil-a</Text>
                 </View>
                 </View>
                 <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                   <Text style={{fontSize: 17, fontWeight: 'bold', color:'#0C0C3D', marginBottom: 5}}>100</Text>
                   <Image source={require('../../img/coins-rewards.png')} style={{resizeMode: 'contain'}}/>
                 </View>
               </View>
             </TouchableOpacity>

           );
       } else {
           return null;
       }
   }

   _renderButton2() {
        if (this.state.showReward2) {
            return (
              <TouchableOpacity onPress={this.selectedReward2.bind(this)} style={{width: '100%',}}>
                <View style={{borderColor: "#D3D3D3", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Image source={require('../../img/redlobster.png')} style={{resizeMode: 'contain'}}/>
                  <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={{fontSize: 16, color:'#0C0C3D', fontWeight: 'bold'}}>Free Dessert</Text>
                    <Text style={{fontSize: 16, color:'#0C0C3D'}}>Red Lobster</Text>
                  </View>
                  </View>
                  <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color:'#0C0C3D', marginBottom: 5}}>200</Text>
                    <Image source={require('../../img/coins-rewards.png')} style={{resizeMode: 'contain'}}/>
                  </View>
                </View>
              </TouchableOpacity>
            );
        } else {
            return null;
        }
    }

    _renderButton3() {
         if (this.state.showReward3) {
             return (
               <TouchableOpacity onPress={this.selectedReward3.bind(this)} style={{width: '100%',}}>
                 <View style={{borderColor: "#D3D3D3", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                   <View style={{display: 'flex', flexDirection: 'row'}}>
                   <Image source={require('../../img/nike.png')} style={{resizeMode: 'contain'}}/>
                   <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                     <Text style={{fontSize: 16, color:'#0C0C3D', fontWeight: 'bold'}}>10% Off Any Item</Text>
                     <Text style={{fontSize: 16, color:'#0C0C3D'}}>Nike</Text>
                   </View>
                   </View>
                   <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                     <Text style={{fontSize: 17, fontWeight: 'bold', color:'#0C0C3D', marginBottom: 5}}>300</Text>
                     <Image source={require('../../img/coins-rewards.png')} style={{resizeMode: 'contain'}}/>
                   </View>
                 </View>
               </TouchableOpacity>
             );
         } else {
             return null;
         }
     }

     _renderButton4() {
          if (this.state.showReward4) {
              return (
                <TouchableOpacity onPress={this.selectedReward4.bind(this)} style={{width: '100%',}}>
                  <View style={{borderColor: "#D3D3D3", borderBottomWidth:1, paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Image source={require('../../img/macys.png')} style={{resizeMode: 'contain'}}/>
                    <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <Text style={{fontSize: 16, color:'#0C0C3D', fontWeight: 'bold'}}>15% Off Purchase</Text>
                      <Text style={{fontSize: 16, color:'#0C0C3D'}}>Macy's</Text>
                    </View>
                    </View>
                    <View style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                      <Text style={{fontSize: 17, fontWeight: 'bold', color:'#0C0C3D', marginBottom: 5}}>400</Text>
                      <Image source={require('../../img/coins-rewards.png')} style={{resizeMode: 'contain'}}/>
                    </View>
                  </View>
                </TouchableOpacity>

              );
          } else {
              return null;
          }
      }

    _renderRewardText() {
      if (this.state.showReward1 == false && this.state.showReward2 == false && this.state.showReward3 == false && this.state.showReward4 == false) {
        return (
          <Text style={{color:'white', fontSize: 20, textAlign:'center'}}>No rewards currently available!</Text>
        );
      } else {
          return(
            <Text style={{color:'white', fontSize: 20, textAlign:'center'}}>Click to redeem an available award!</Text>
          );
      }
     }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F9564F', alignItems: 'center', }}>
        <Text style={{...styles.titleFont, marginTop: 30}}>Rewards</Text>
          <View style={{marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../../img/coins.png')} style={{resizeMode: 'contain', marginRight: 20}}/>
              <Text style={styles.titleFont}>{global.coins}</Text>
              <Text style={styles.titleFontNotBold}> COINS</Text>
            </View>
          </View>
          <View style={{marginTop: 20, marginBottom: 10, alignItems: 'center', justifyContent: "center"}}>
            {this._renderRewardText()}
          </View>

          <View style={{width: '95%', height: '60%'}}>
          <ScrollView contentContainerStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {this._renderButton1()}
            {this._renderButton2()}
            {this._renderButton3()}
            {this._renderButton4()}
          </ScrollView>
          </View>

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
