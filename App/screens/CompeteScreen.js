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
   this.renderCustomActions = this.renderCustomActions.bind(this);
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
        'Take Picture': (props) => {
          alert('option 2');
        },
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
            onFinish={() => Alert.alert('Challenge Over!', "You're out of time. X has won this challenge.")}
            digitBgColor={'#F8F8F8'}
            digitTxtColor={'#565656'}
            timeToShow={['H', 'M', 'S']}
            labelM={'minutes'}
            labelH={'hours'}
            labelS={'seconds'}
          />
          <TouchableOpacity onPress={() => this.endChallenge()} style={[styles.button, {backgroundColor: '#ffffff', borderRadius: 2, borderColor: 'black'}]}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'}}>End Challenge</Text>
          </TouchableOpacity>
        </View>
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
