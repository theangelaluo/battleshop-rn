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
  FlatList
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import axios from 'axios';
import NavigationBar from '.';

// *****MAKE ALL THE PAGES. todo: abstract this to their own pages somehow.******//
class Rewards extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Rewards Page</Text>
      </View>
    )
  }
}

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
      </View>
    )
  }
}

class ChallengeSent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Challenge sent!</Text>
      </View>
    )
  }
}

class ChooseTime extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Choose time</Text>
      </View>
    )
  }
}

class ChooseBudget extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Choose budget</Text>
      </View>
    )
  }
}

class ChooseItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Choose item</Text>
      </View>
    )
  }
}

class HuntOrSave extends React.Component {

  toHunt() {
    this.props.navigation.navigate('ChooseItem');
  }

  toSave() {
    //todo: save not implemented yet!
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{display: 'flex', flexDirection: 'column', marginTop: 10}}>
            <TouchableOpacity onPress={() => this.toHunt()} style={[styles.button, {backgroundColor: "#f3c677", borderRadius: 2}]}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 100, color: 'black'}}>Hunt</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.toSave()} style={[styles.button, {backgroundColor: '#f3c677', borderRadius: 2}]}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 100, color: 'black'}}>Save</Text>
              </TouchableOpacity>
          </View>
      </View>
    )
  }
}

class ChooseOpponents extends React.Component {

  toHuntOrSave() {
    this.props.navigation.navigate('ChooseOpponents');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Choose opponents</Text>
      </View>
    )
  }
}

class GroupOrSolo extends React.Component {

  toChooseOpponents() {
    this.props.navigation.navigate('ChooseOpponents');
  }

  toHuntOrSave() {
    this.props.navigation.navigate('HuntOrSave');
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={{display: 'flex', flexDirection: 'column', marginTop: 10}}>
            <TouchableOpacity onPress={() => this.toChooseOpponents()} style={[styles.button, {backgroundColor: "#f3c677", borderRadius: 2}]}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 100, color: 'black'}}>Group</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.toHuntOrSave()} style={[styles.button, {backgroundColor: '#f3c677', borderRadius: 2}]}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 100, color: 'black'}}>Solo</Text>
              </TouchableOpacity>
          </View>
      </View>
    )
  }
}


class Login extends React.Component {
  login() {
    this.props.navigation.navigate('Compete');
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={{ display:'flex', alignItems: 'center', width: '100%', height: 150, marginTop: 5, marginBottom: 0}}>
            <Image source={require('./img/battleshop-svg.png')} style={{flex: 1, width: '200%', height: '200%', resizeMode: 'contain'}}/>
          </View>
          <View style={{ display:'flex', alignItems: 'center', width: '100%', height: 150, marginTop: 0, marginBottom: 0}}>
            <Image source={require('./img/Battleshop-name.png')} style={{flex: 1, width: '50%', height: '50%', resizeMode: 'contain'}}/>
          </View>
          <Text></Text>
          <View style={{display: 'flex', flexDirection: 'column', marginTop: 10}}>
            <TouchableOpacity onPress={() => this.login()} style={[styles.button, {backgroundColor: "#2553B4", borderRadius: 2}]}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 16, color: 'white'}}>Login with Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.login()} style={[styles.button, {backgroundColor: '#ffffff', borderRadius: 2}]}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 16, color: 'black'}}>Login with Google</Text>
              </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Compete: {
    screen: GroupOrSolo
  },
  ChooseOpponents: {
    screen: ChooseOpponents
  },
  HuntOrSave: {
    screen: HuntOrSave
  },
  ChooseItem: {
    screen: ChooseItem
  },
  ChooseBudget: {
    screen: ChooseBudget
  },
  ChooseTime: {
    screen: ChooseTime
  },
  ChallengeSent: {
    screen: ChallengeSent
  },
  Profile: {
    screen: Profile
  },
  Rewards: {
    screen: Rewards
  }},
  {
    initialRouteName: "Login"
  }

);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9564F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5
  },
});
