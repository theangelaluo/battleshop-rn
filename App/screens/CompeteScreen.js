import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ListView,
  Alert,
  Image,
  FlatList,
  Platform,
} from 'react-native';

import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';
import CountDown from 'react-native-countdown-component';

import { Icon } from 'react-native-elements';
import { Provider } from 'react-redux';
import CustomActions from './CustomActions';
var CompeteStatusBar = require("../components/CompeteStatusBar");
console.disableYellowBox = true;
// import firebaseBackend from '../config/firebase';

export default class CompeteScreen extends React.Component {
  static navigationOptions = {
    headerLeft: null
  }

  constructor(props) {
   super(props);

   this.state = {
     messages: [],
     typingText: null,
     competeStatusText: global.opponents_arr[0] + " vs You",
   };

   this._isMounted = false;
   this.onSend = this.onSend.bind(this);
   this.onReceive = this.onReceive.bind(this);
   this.renderCustomActions = this.renderCustomActions.bind(this);
   this.renderBubble = this.renderBubble.bind(this);
   // this.answerDemo = this.answerDemo.bind(this);
   // this.renderSystemMessage = this.renderSystemMessage.bind(this);
   //
   this._isAlright = null;
 }

  // get user() {
  //   return {
  //     name: 'Me',
  //     _id: firebaseBackend.getUid(),
  //   };
  // }

  // checkForHumanMessages(){
  //   if(this.state.numUserMessages == 1){
  //     this.answerDemo(this.state.messages);
  //   }
  // }

  onSend(messages = [], callback){
    // firebaseBackend.sendMessage()
    this.setState((previousState) => {
     return {
       messages: GiftedChat.append(previousState.messages, messages),
     };
   });
     // this.setState((previousState) => {
     //   return {
     //     messages: GiftedChat.append(previousState.messages, messages),
     //   };
     // });
     setTimeout(() => {
       callback();
     }, 2000);
     Keyboard.dismiss();
   }

   // answerDemo(messages) {
   //   console.log("hello I made it");

     // if (messages.length > 0) {
     //   if ((messages[0].image || messages[0].length > 0) || !this._isAlright) {
         // this.setState((previousState) => {
         //   return {
         //     typingText: 'React Native is typing'
         //   };
         // });
     //   }
     // }

     // setTimeout(() => {
     //   if (this._isMounted === true) {
     //     if (messages.length > 0) {
     //       if (messages[0].image) {
     //         this.onReceive('Nice picture!');
     //       } else {
     //         if (!this._isAlright) {
     //           this._isAlright = true;
     //           this.onReceive('Looks like a winner!');
     //         }
     //       }
     //     }
     //   }

       // this.setState((previousState) => {
       //   return {
       //     typingText: null,
       //   };
       // });
     // }, 1000);
   // }
   onReceive(text) {
     setMessages = [
       {
         text: 'Looks good! Check out what I found for $90',
         image: '../../img/dress.jpg',
       },
       {
         text: 'This is only $100!',
         image: '../../img/dress.jpg',
       },
       {
         text: 'I want this but $200 is a lot',
         image: '../../img/dress2.jpg',
       },
       {
         text: 'Prom dress for $180',
         image: '../../img/dress3.jpg',
       },
       {
         text: '$110',
         image: '../../img/dress4.jpg',
       },
       {
         text: '$Check this out! $95',

         image: '../../img/dress5.jpg',
       },
       {
         text: 'Is this too sparkly? $125',
         image:'../../img/dress8.jpg',
       },
       {
         text: 'What do you think? $120',
         image: '../../img/dress1.jpg',
       },
       {
         text: 'I love this one! $147',
         image: '../../img/dress7.jpg',
       },
       {
         text: 'Can I pull this off? $230',
         image: '../../img/dress9.jpg',
       },
     ]
    //firebaseBackend.shared.on(message =>
    messageI = setMessages[Math.floor(Math.random()*setMessages.length)];
      this.setState((previousState) => {
        return {

          messages: GiftedChat.append(previousState.messages, {
            _id: Math.round(Math.random() * 1000000),
            text: messageI.text,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: opponents_arr[0],
              //avatar: '../../img/Rachel-Rouhana-Profile-Pic-Square.jpg',
            },
            image: messageI.image,
            //image: ('../../img/avatar.jpg')
          }),
        }
      }
    //)
    )
   }

   messageIdGenerator() {
       // generates uuid.
       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
           let r = (Math.random() * 16) | 0,
               v = c == "x" ? r : (r & 0x3) | 0x8;
           return v.toString(16);
       });
   }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0',
          }
        }}
      />
    );
  }

  endChallenge() {
    this.props.navigation.navigate('ChallengeComplete');
  }

  renderCustomActions(props) {
      if (Platform.OS === 'ios') {
        return (
          <CustomActions
            {...props}
          />
        );
      }
      const options = {
        'Choose Image from Library': (props) => {
          alert('option 1');
        },
        // 'Take Picture': (props) => {
        //   alert('option 2');
        // },
        'Cancel': () => {},
      };
      return (
        <Actions
          {...props}
          options={options}
        />
      );
    }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex:1}}>
        <CompeteStatusBar/>
        <View style={styles.countdown}>
          <CountDown
            until={global.hours * 60 * 60 + global.minutes * 60}
            size={30}
            onFinish={() => Alert.alert(
              'Challenge Over!',
              'Time has run out. You won this challenge!',
              [
                {text: 'OK', onPress: () => this.endChallenge()},
              ],
            )}
            digitBgColor={'#F8F8F8'}
            digitTxtColor={'#565656'}
            timeToShow={['H', 'M', 'S']}
            labelM={'minutes'}
            labelH={'hours'}
            labelS={'seconds'}
          />
          <TouchableOpacity onPress={() => Alert.alert(
              'End Challenge',
              'Are you sure you want to end this challenge?',
              [
                {text: 'End Challenge', onPress: () => this.endChallenge()},
                {text: 'Cancel', onPress: () => {}},
              ],
              { cancelable: true }
            )} style={styles.endChallengeButton}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'}}>End Challenge</Text>
          </TouchableOpacity>
        </View>
        <GiftedChat
          bottomOffset={56}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages, this.onReceive)}
          renderActions={this.renderCustomActions}
          user={{
            _id: 1, // sent messages should have same user._id
          }}
          forceRenderImage={true}
          renderBubble={this.renderBubble}
        />
          </View>
    )
  }

// componentDidMount() {
//   this._isMounted = true;
//     firebaseBackend.loadMessages((message) => {
//       this.setState((previousState) => {
//         return {
//           messages: GiftedChat.append(previousState.messages, message),
//         };
//       });
//     });
//   }

componentWillUnmount() {
    this._isMounted = false;
  }
}

const styles = StyleSheet.create({
  competeStatus: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight + 64,
    backgroundColor: '#F65854',
  },
  endChallengeButton: {
    height: 30,
    width: '50%',
    backgroundColor: '#F8F8F8',
    borderRadius: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  countdown: {
    marginTop: 20,
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = CompeteScreen;
