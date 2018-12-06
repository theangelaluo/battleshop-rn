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

export default class Rewards extends React.Component {
  constructor() {
    super();
    this.state = { showReward1: true, showReward2: true, showReward3: true, showReward4: true, numCoins: 2600};
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
          numCoins: this.state.numCoins-100
        });
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
          numCoins: this.state.numCoins-200
        });
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
          numCoins: this.state.numCoins-300
        });
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
          numCoins: this.state.numCoins-400
        });
      }
    },
    ],
    { cancelable: false }
    )
  }

  _renderButton1() {
       if (this.state.showReward1) {
           return (
               <TouchableOpacity style={styles.itemButton} onPress={this.selectedReward1.bind(this)}>
                 <Text style={{textAlign: 'center', fontSize: 24}}>Nuggets at Chick-fil-a: 100 coins</Text>
               </TouchableOpacity>
           );
       } else {
           return null;
       }
   }

   _renderButton2() {
        if (this.state.showReward2) {
            return (
                <TouchableOpacity style={styles.itemButton} onPress={this.selectedReward2.bind(this)}>
                  <Text style={{textAlign: 'center', fontSize: 24}}>Dessert at Red Lobster: 200 coins</Text>
                </TouchableOpacity>
            );
        } else {
            return null;
        }
    }

    _renderButton3() {
         if (this.state.showReward3) {
             return (
                 <TouchableOpacity style={styles.itemButton} onPress={this.selectedReward3.bind(this)}>
                   <Text style={{textAlign: 'center', fontSize: 24}}>10% off at Nike: 300 coins</Text>
                 </TouchableOpacity>
             );
         } else {
             return null;
         }
     }

     _renderButton4() {
          if (this.state.showReward4) {
              return (
                  <TouchableOpacity style={styles.itemButton} onPress={this.selectedReward4.bind(this)}>
                    <Text style={{textAlign: 'center', fontSize: 24}}>15% off at Macy's: 400 coins</Text>
                  </TouchableOpacity>
              );
          } else {
              return null;
          }
      }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F9564F', alignItems: 'center', justifyContent: "center"}}>
          <View style={{marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
            <Image source={require('../../img/coins.png')} style={{resizeMode: 'contain', marginRight: 20}}/>
            <Text style={{color: "white", fontSize: 35, fontWeight: 'bold'}}>{String(this.state.numCoins)}</Text>
            <Text style={{color: "white", fontSize: 35}}> COINS</Text>
          </View>
            <Text style={{color: "white", fontSize: 35, marginTop: 20, fontWeight: 'bold'}}>Available Rewards</Text>
            <Text style={{color: "white", fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>Click to redeem!</Text>

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
    width: '80%',
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

module.exports = Rewards;
