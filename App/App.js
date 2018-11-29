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

import { createBottomTabNavigator,  createStackNavigator, createAppContainer } from 'react-navigation';

// *****MAKE ALL THE PAGES. todo: abstract this to their own pages somehow.******//
class Login extends React.Component {
  login() {
    this.props.navigation.navigate('Compete');
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={{ display:'flex', alignItems: 'center', width: '100%', height: 150, marginTop: 5, marginBottom: 0}}>
            <Image source={require('../img/battleshop-svg.png')} style={{flex: 1, width: '200%', height: '200%', resizeMode: 'contain'}}/>
          </View>
          <View style={{ display:'flex', alignItems: 'center', width: '100%', height: 150, marginTop: 0, marginBottom: 0}}>
            <Image source={require('../img/Battleshop-name.png')} style={{flex: 1, width: '50%', height: '50%', resizeMode: 'contain'}}/>
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


class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
      </View>
    )
  }
}


class Rewards extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Rewards Page</Text>
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
  selectedItem(item) {
  }
  toChooseBudget() {
    this.props.navigation.navigate('ChooseBudget');
  }
  render() {
    return (
      <View style = {{backgroundColor: 'white', marginTop: '15%'}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 36}}>Choose Item:</Text>
        <View style={styles.itemsContainer}>
            <TouchableOpacity style={styles.itemButton} onPress={this.selectedItem('Dress')}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Dress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton} onPress={this.selectedItem('Shirt')}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Shirt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton} onPress={this.selectedItem('Jacket')}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Jacket</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton} onPress={this.selectedItem('Pants')}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Pants</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '80%', height: 70, marginTop:30, borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7B1E7A'}} onPress={() => this.toChooseBudget()}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Continue</Text>
            </TouchableOpacity>
        </View>

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

  toChooseItem() {
    this.props.navigation.navigate('ChooseItem');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Choose opponents</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.toChooseItem()}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const CompeteStack = createStackNavigator({
    GroupOrSolo: {
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
});

export default createAppContainer(createBottomTabNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Image source={require('../img/Profile.png')} />
    },
  },
  Compete: {
    screen: CompeteStack, // Replaced Feed with FeedStack
    navigationOptions: {
      tabBarLabel: 'Compete',
      tabBarIcon: ({ tintColor }) => <Image source={require('../img/Compete.png')} />
    },
  },
  Rewards: {
    screen: Rewards,
    navigationOptions: {
      tabBarLabel: 'Rewards',
      tabBarIcon: ({ tintColor }) => <Image source={require('../img/Rewards.png')} />
    }
  }

}, {

  initialRouteName: "Compete",
		swipeEnabled: true,
		animationEnabled: true,
		lazy: true,
		order: ["Profile", "Compete", "Rewards"],
		backBehavior: "Login",
		tabBarOptions: {
			activeTintColor: 'coral',
			showLabel: true,
			showIcon: true,
			pressColor: 'coral',
			allowFontScaling: true
		}
}));

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
  paddingVertical: '10%',
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
  shadowColor:'black',
  shadowRadius: 1,
  shadowOffset: {width: 4, height: 4},
  borderRadius: 15
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
