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
} from 'react-native';

import { Icon } from 'react-native-elements';
import TimePicker from 'react-native-simple-time-picker';
import CountDown from 'react-native-countdown-component';
import {styles} from '../styles.js';

export default class ChallengeSent extends React.Component {
  static navigationOptions = {
    headerLeft: null
  }

  toCompete() {
    this.props.navigation.navigate('CompeteConfirmation');
  }

  backToRecentChallenges() {
    global.sent_challenge = true;
    this.props.navigation.navigate('RecentChallenges');
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F9564F', alignItems: 'center', padding: 35}}>
      <Text style={{marginTop: 20, marginBottom: 30, fontSize: 30, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
        Challenge Sent!
      </Text>

      <View style={{width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../../img/clock.png')} style={{marginRight: 20, resizeMode: 'contain'}}/>
        <Text style={{width: '80%', marginTop: 20, fontSize: 20, color: 'white', textAlign: 'center'}}>
          {global.opponents_arr[0]} has 5 minutes to accept the challenge, or it will be cancelled.
        </Text>
      </View>

      <View style={{width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../../img/bell.png')} style={{marginRight: 20, resizeMode: 'contain'}}/>
        <Text style={{width: '80%', marginTop: 20, fontSize: 20, color: 'white', textAlign: 'center'}}>
          We will let you know when {global.opponents_arr[0]} accepts the challenge.
        </Text>
        </View>
        <TouchableOpacity onPress={() => this.backToRecentChallenges()} style={[styles.button, {backgroundColor: '#7B1E7A', marginTop: 30}]}>
          <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'white'}}>Back to Home</Text>
        </TouchableOpacity>
        <View style={styles.countdown}>
          <CountDown
            // Fake opponent accepting the challenge
            until={5}
            timeToShow={[]}
            onFinish={() => Alert.alert(
              'Battleshop Says',
              global.opponents_arr[0] + ' accepted! Ready to start the challenge?',
              [
              {text: 'Cancel', style: 'cancel', onPress: () => this.backToRecentChallenges()},
              {text: 'OK', onPress: () => this.toCompete()},
              ],
              { cancelable: false }
            )}
          />
        </View>

      </View>
    )
  }
}

module.exports = ChallengeSent;
