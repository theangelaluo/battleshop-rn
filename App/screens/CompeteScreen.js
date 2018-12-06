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
} from 'react-native';
import { Constants } from 'expo';

import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';
import CountDown from 'react-native-countdown-component';

import { Icon } from 'react-native-elements';
import { Provider } from 'react-redux';

var CompeteStatusBar = require("../components/CompeteStatusBar");

// import firebaseBackend from '../config/firebase';

//     setTimeout(() => {
//       if (this._isMounted === true) {
//         this.setState((previousState) => {
//           return {
//             messages: GiftedChat.prepend(previousState.messages, require('./data/old_messages.js')),
//             loadEarlier: false,
//             isLoadingEarlier: false,
//           };
//         });
//       }
//     }, 1000); // simulating network
//   }
//
//   answerDemo(messages) {
//     if (messages.length > 0) {
//       if ((messages[0].image || messages[0].location) || !this._isAlright) {
//         this.setState((previousState) => {
//           return {
//             typingText: 'React Native is typing'
//           };
//         });
//       }
//     }
//
//     setTimeout(() => {
//       if (this._isMounted === true) {
//         if (messages.length > 0) {
//           if (messages[0].image) {
//             this.onReceive('Nice picture!');
//           } else if (messages[0].location) {
//             this.onReceive('My favorite place');
//           } else {
//             if (!this._isAlright) {
//               this._isAlright = true;
//               this.onReceive('Alright');
//             }
//           }
//         }
//       }
//

//   render() {
//     return (
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={this.onSend}
//         loadEarlier={this.state.loadEarlier}
//         onLoadEarlier={this.onLoadEarlier}
//         isLoadingEarlier={this.state.isLoadingEarlier}
//
//         user={{
//           _id: 1, // sent messages should have same user._id
//         }}
//
//         renderActions={this.renderCustomActions}
//         renderBubble={this.renderBubble}
//         renderSystemMessage={this.renderSystemMessage}
//         renderCustomView={this.renderCustomView}
//         renderFooter={this.renderFooter}
//       />
//     );
//   }
// }

export default class CompeteScreen extends React.Component {
  // static navigationOptions = {
  //   tabBarVisible: false,
  // }

  constructor(props) {
   super(props);

   this.state = {
     messages: [],
     typingText: null,
     competeStatusText: global.opponents_arr[0] + " vs You",
   };

   this._isMounted = false;
   // this.onSend = this.onSend.bind(this);
   // this.onReceive = this.onReceive.bind(this);
   // //this.renderCustomActions = this.renderCustomActions.bind(this);
   this.renderBubble = this.renderBubble.bind(this);
   // //this.renderSystemMessage = this.renderSystemMessage.bind(this);
   //
   // this._isAlright = null;
 }

  // get user() {
  //   return {
  //     name: 'Me',
  //     _id: firebaseBackend.getUid(),
  //   };
  // }
  onSend(messages = []) {
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
     Keyboard.dismiss();
   }
  // onReceive(text) {
  //  //firebaseBackend.shared.on(message =>
  //    this.setState((previousState) => {
  //      return {
  //        messages: GiftedChat.append(previousState.messages, {
  //          _id: Math.round(Math.random() * 1000000),
  //          text: text,
  //          createdAt: new Date(),
  //          user: {
  //            _id: 2,
  //            name: global.oppponents_arr[0],
  //            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
  //          },
  //        }),
  //      }
  //    }
  //  //)
  //  )
  // }

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


  render() {
    const { navigation } = this.props;
    return (
<<<<<<< HEAD
      <View style={{flex:1}}>
        <View style={styles.competeStatus}>
          <Text style={{color: 'white', fontSize: 30}}>You are battleshopping</Text>
        </View>
=======
      <View>
        <CompeteStatusBar></CompeteStatusBar>
>>>>>>> 7064b0be81d08f9786ba379ebb4c857c9110efde
        <View style={styles.countdown}>
          <CountDown
            until={global.hours * 60 * 60 + global.minutes * 60}
            size={30}
            onFinish={() => Alert.alert('Challenge Over!', "You're out of time. X has won this challenge.")}
            digitBgColor={'#F8F8F8'}
            digitTxtColor={'#565656'}
            timeToShow={['H', 'M', 'S']}
            labelM={'minutes'}
            labelH={'hours'}
            labelS={'seconds'}
          />
        </View>
        <GiftedChat
          bottomOffset={56}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1, // sent messages should have same user._id
          }}
          renderBubble={this.renderBubble}
        />
      </View>
    )
  }

  // //  renderActions={this.renderCustomActions}
  //   //renderSystemMessage={this.renderSystemMessage}
  //   //renderCustomView={this.renderCustomView}
  //   //renderFooter={this.renderFooter}
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
    //Firebase.shared.off();
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
  countdown: {
    height: 100,
    //marginTop: 64,
    backgroundColor: 'white',
    //alignContent: 'center',
    justifyContent: 'center',
  },
});

module.exports = CompeteScreen;
