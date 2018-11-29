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
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import axios from 'axios';
import NavigationBar from '.';

// *****MAKE ALL THE PAGES. todo: abstract this to their own pages somehow.******//

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
    const { navigation } = this.props;
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

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Compete: {
    screen: GroupOrSolo,
    screen: ChooseOpponents,
    screen: HuntOrSave,
    screen: ChooseItem,
    screen: ChooseBudget,
    screen: ChooseTime,
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

const TabNavigator = createBottomTabNavigator({
  Profile: Profile,
  Compete: GroupOrSolo,
  Rewards: Rewards
});
export default createAppContainer(TabNavigator);

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
