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

import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';
import CountDown from 'react-native-countdown-component';

import { Icon } from 'react-native-elements';
import { Provider } from 'react-redux';

var CompeteStatusBar = require("../components/CompeteStatusBar");

// import firebaseBackend from '../config/firebase';

export default class CompeteScreen extends React.Component {
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

  endChallenge() {
    this.props.navigation.navigate('ChallengeComplete');
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex:1}}>
        <CompeteStatusBar/>
        <GiftedChat
          bottomOffset={56}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          renderActions={this.renderCustomActions}
          user={{
            _id: 1, // sent messages should have same user._id
          }}
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
  countdown: {
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

module.exports = CompeteScreen;
