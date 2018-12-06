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
  StatusBar,
} from 'react-native';

import { Icon } from 'react-native-elements';
import TimePicker from 'react-native-simple-time-picker';
import Onboarding from 'react-native-onboarding-swiper';

import { createBottomTabNavigator,  createStackNavigator, createAppContainer } from 'react-navigation';

import { AccessToken, LoginManager } from 'react-native-fbsdk';

export default class Tutorial extends React.Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    tabBarVisible: false,
  };

  loginActual() {
    this.props.navigation.navigate('RecentChallenges');
  }

  render() {
      return (
          <View style={styles.container}>
            <View style={{display: 'flex', flex: 1, height: '100%', width: '100%'}}>
              <Onboarding style={{borderWidth: 2, borderColor: "blue"}}
                showDone={false}
                onSkip={() => this.loginActual()}
                pages={[
                  {
                    title: 'Welcome to Battleshop!',
                    subtitle: 'We\'re here to bring friends and family togther and help you accomplish your shopping goals. This tutorial will get you started.',
                    backgroundColor: '#F9564F',
                    image: (
                      <Icon
                        name="shopping-cart"
                        type="font-awesome"
                        size={100}
                        color="white"
                      />
                    ),
                  },
                  {
                    title: 'Create Challenges',
                    subtitle: 'Turn your shopping list into a game. Choose \'Solo\' to play by yourself and \'Duel\' to invite a friend.',
                    backgroundColor: '#F9564F',
                    image: (
                      <Icon
                        name="gamepad"
                        type="font-awesome"
                        size={100}
                        color="white"
                      />
                    ),
                  },
                  {
                    title: 'Customize Your Experience',
                    subtitle: 'Choose \'Hunt\' to input a shopping list. Choose \'Save\' to look for one item. Don\'t forget to set a budget and time frame!',
                    backgroundColor: '#F9564F',
                    image: (
                      <Icon name="tasks" type="font-awesome" size={100} color="white" />
                    ),
                  },
                  {
                    title: 'Get Rewarded for Playing',
                    subtitle: 'The more you play, the more you earn. Check out the Rewards tab to see what you can redeem.',
                    backgroundColor: '#F9564F',
                    image: (
                      <Icon name="trophy" type="font-awesome" size={100} color="white" />
                    ),
                  },
                  {
                    title: "Ready to Battleshop?",
                    subtitle:(
                      <View>
                        <TouchableOpacity onPress={() => this.loginActual()} style={[styles.button, {backgroundColor: '#ffffff', borderRadius: 2}]}>
                          <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'black'}}>Get Started</Text>
                        </TouchableOpacity>
                      </View>
                    ),
                    backgroundColor: '#F9564F',
                    image: (
                      <Icon name="rocket" type="font-awesome" size={100} color="white" />
                    ),
                  },
                ]}
              />
            </View>
          </View>
      );
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
    width: '40%',
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




module.exports = Tutorial;
