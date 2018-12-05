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

  selectedReward1() {
    global.item = 'reward 1';
    alert("Reward 1 selected!");
    this.setState({
      showReward1: !this.state.showReward1,
      numCoins: this.state.numCoins-100
    });
  }

  selectedReward2() {
    global.item = 'reward 2';
    alert("Reward 2 selected!");
    this.setState({
      showReward2: !this.state.showReward2,
      numCoins: this.state.numCoins-200
    });
  }

  selectedReward3() {
    global.item = 'reward 3';
    alert("Reward 3 selected!");
    this.setState({
      showReward3: !this.state.showReward3,
      numCoins: this.state.numCoins-300
    });
  }

  selectedReward4() {
    global.item = 'reward 4';
    alert("Reward 4 selected!");
    this.setState({
      showReward4: !this.state.showReward4,
      numCoins: this.state.numCoins-400
    });
  }

  _renderButton1() {
       if (this.state.showReward1) {
           return (
               <TouchableOpacity style={styles.itemButton} onPress={this.selectedReward1.bind(this)}>
                 <Text style={{textAlign: 'center', fontSize: 24}}>Reward 1: 100 coins</Text>
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
                  <Text style={{textAlign: 'center', fontSize: 24}}>Reward 2: 200 coins</Text>
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
                   <Text style={{textAlign: 'center', fontSize: 24}}>Reward 3: 300 coins</Text>
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
                    <Text style={{textAlign: 'center', fontSize: 24}}>Reward 4: 400 coins</Text>
                  </TouchableOpacity>
              );
          } else {
              return null;
          }
      }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F9564F', alignItems: 'center'}}>
        <ScrollView>
          <View style={{marginTop: 75, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: "white", fontSize: 35, marginTop: 20, fontWeight: 'bold'}}>Rewards</Text>
            <Text style={{color: "white", fontSize: 25, marginTop: 10}}>Way to go! You've earned the following rewards.</Text>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
              <Image source={require('../../img/coins.png')} style={{resizeMode: 'contain', marginRight: 20}}/>
              <Text style={{color: "white", fontSize: 35, fontWeight: 'bold'}}>{String(this.state.numCoins)}</Text>
              <Text style={{color: "white", fontSize: 35}}> COINS</Text>
            </View>
          </View>
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
