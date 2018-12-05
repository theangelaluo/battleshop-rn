import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  RefreshControl,
  TextInput,
  ListView,
  Alert,
  Button,
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
   // this.renderBubble = this.renderBubble.bind(this);
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
  // onSend(messages = []) {
  //   firebaseBackend.sendMessage
  //    this.setState((previousState) => {
  //      return {
  //        messages: GiftedChat.append(previousState.messages, messages),
  //      };
  //    });
  //  }
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
      <View>
        <CompeteStatusBar></CompeteStatusBar>
        <View style={styles.countdown}>
          <CountDown
            until={global.hours * 60 * 60 + global.minutes * 60}
            size={30}
            onFinish={() => Alert.alert('Challenge Over!', "You're out of time. X has won this challenge.")}
            digitBgColor={'#F8F8F8'}
            digitTxtColor={'#565656'}
            timeToShow={['H', 'M', 'S']}
            labelM={'MM'}
            labelH={'HH'}
            labelS={'SS'}
          />
        </View>
      </View>
    )
  }
  // <GiftedChat
  //         messages={this.state.messages}
  //         //onSend={firebaseBackend.sendMessage()}
  //         user={this.user}
  //       />
componentDidMount() {
  this._isMounted = true;
    // firebaseBackend.sendMessage(message =>
    //   this.setState(previousState => ({
    //     messages: GiftedChat.append(previousState.messages, message),
    //   }))
    // );
  }

componentWillUnmount() {
    //firebaseBackend.shared.off();
    this._isMounted = false;
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'white'
  },
  competeStatus: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    paddingTop: Constants.statusBarHeight + 64,
    backgroundColor: '#F65854',
  },
  countdown: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    marginTop: 64,
    backgroundColor: '#F8F8F8',
    //alignContent: 'center',
    justifyContent: 'center',
  },
});

module.exports = CompeteScreen;
