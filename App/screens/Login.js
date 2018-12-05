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
// import Tutorial from './Tutorial.js'
import Onboarding from 'react-native-onboarding-swiper';

//var FBLoginButton = require('./FBLoginButton');

import { createBottomTabNavigator,  createStackNavigator, createAppContainer } from 'react-navigation';

import { AccessToken, LoginManager } from 'react-native-fbsdk';
// import firebase from '../config/firebase';

// var Login = React.createClass({
//   render: function() {
//     return (
//       <View>
//         <LoginButton
//           publishPermissions={["publish_actions"]}
//           onLoginFinished={
//             (error, result) => {
//               if (error) {
//                 alert("login has error: " + result.error);
//               } else if (result.isCancelled) {
//                 alert("login is cancelled.");
//               } else {
//                 AccessToken.getCurrentAccessToken().then(
//                   (data) => {
//                     alert(data.accessToken.toString())
//                   }
//                 )
//               }
//             }
//           }
//           onLogoutFinished={() => alert("logout.")}/>
//       </View>
//     );
//   }
// });
//
// Calling the following function will open the FB login dialogue:
// const facebookLogin = async () => {
//   try {
//     const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
//
//     if (result.isCancelled) {
//       throw new Error('User cancelled request'); // Handle this however fits the flow of your app
//     }
//
//     console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
//
//     // get the access token
//     const data = await AccessToken.getCurrentAccessToken();
//
//     if (!data) {
//       throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
//     }
//
//     // create a new firebase credential with the token
//     const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
//
//     // login with credential
//     const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
//
//     console.info(JSON.stringify(currentUser.user.toJSON()))
//   } catch (e) {
//     console.error(e);
//   }
// }

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = { showTutorial: false};
  }

  static navigationOptions = {
    tabBarVisible: false,
  };

  loginActual() {
    this.props.navigation.navigate('Compete');
  }

  _renderTutorial() {
       if (this.state.showTutorial) {
          //this.props.navigation.navigate("TutorialStack");
           return (
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
                         <Button
                           title={'Get Started'}
                           containerViewStyle={{ marginTop: 20 }}
                           backgroundColor={'white'}
                           borderRadius={5}
                           textStyle={{ color: '#003c8f' }}
                           onPress={() => {
                             this.loginActual();
                             StatusBar.setBarStyle('default');
                           }}
                         />
                     ),
                     backgroundColor: '#F9564F',
                     image: (
                       <Icon name="rocket" type="font-awesome" size={100} color="white" />
                     ),
                   },
                 ]}
               />
             </View>
           );
       } else return null;
   }

   _renderLoginScreen(){
     if(!this.state.showTutorial){
       return(
         <View>
           <View style={{ display:'flex', alignItems: 'center', width: '100%', height: 150, marginTop: 5, marginBottom: 0}}>
             <Image source={require('../../img/battleshop-svg.png')} style={{flex: 1, width: '200%', height: '200%', resizeMode: 'contain'}}/>
           </View>
           <View style={{ display:'flex', alignItems: 'center', width: '100%', height: 150, marginTop: 0, marginBottom: 0}}>
             <Image source={require('../../img/Battleshop-name.png')} style={{flex: 1, width: '50%', height: '50%', resizeMode: 'contain'}}/>
           </View>
           <Text></Text>
           <View style={{display: 'flex', flexDirection: 'column', marginTop: 10}}>
             <TouchableOpacity onPress={() => this.login('Facebook.com')} style={[styles.button, {backgroundColor: "#2553B4", borderRadius: 2}]}>
               <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'white'}}>Login with Facebook</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => this.login('Google.com')} style={[styles.button, {backgroundColor: '#ffffff', borderRadius: 2}]}>
               <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'black'}}>Login with Google</Text>
               </TouchableOpacity>
           </View>
         </View>
       );
     }else return null;
   }

  tutorialToggle(){
    this.setState({
      showTutorial: !this.state.showTutorial,
    });
  }

  login(company) {
    //this.props.navigation.navigate('Compete');
  //  createAppContainer(NavBar);
    Alert.alert(
    '"Battleshop" Wants to Use "' + company + '" to Sign In',
    'This allows the app and website to share information about you.',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => this.tutorialToggle()},
    ],
    { cancelable: false }
    )
  }

  render() {
      return (
        <View style={styles.container}>
            {this._renderLoginScreen()}
            {this._renderTutorial()}
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




module.exports = Login;
