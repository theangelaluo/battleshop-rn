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

//var FBLoginButton = require('./FBLoginButton');

import { createBottomTabNavigator,  createStackNavigator, createAppContainer } from 'react-navigation';

class Header extends React.Component {
  render() {
    return (
      <Image source={require('../img/Battleshop-name-red.png')} style={{width: '50%', height: '50%', resizeMode: 'contain'}}/>
    )
  }
}

// *****MAKE ALL THE PAGES. todo: abstract this to their own pages somehow.******//
class Login extends React.Component {
  loginActual() {
    this.props.navigation.navigate('Compete');
  }

  login(company) {
    //this.props.navigation.navigate('Compete');
  //  createAppContainer(NavBar);
  Alert.alert(
  'Battleshop says:',
  'Battleshop would like to use ' + company + ' to login.',
  [
    {text: 'Cancel', style: 'cancel'},
    {text: 'OK', onPress: () => this.loginActual()},
  ],
  { cancelable: false }
  )

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
            <TouchableOpacity onPress={() => this.login('Facebook.com')} style={[styles.button, {backgroundColor: "#2553B4", borderRadius: 2}]}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 16, color: 'white'}}>Login with Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.login('Google.com')} style={[styles.button, {backgroundColor: '#ffffff', borderRadius: 2}]}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 16, color: 'black'}}>Login with Google</Text>
              </TouchableOpacity>
          </View>
        </View>
      );
    }
  }


class Profile extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
      </View>
    )
  }
}


class Rewards extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Rewards Page</Text>
      </View>
    )
  }
}

class GroupOrSolo extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />
  }

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
  static navigationOptions = {
    headerTitle: <Header />
  }

  backToCompete() {
    this.props.navigation.navigate('HuntOrSave');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 60, color: 'white'}}>Challenge Sent!</Text>
        <Text style={{fontSize: 30, color: 'white'}}>We will inform you when you are ready to start the challenge.</Text>
      <TouchableOpacity onPress={() => this.backToCompete()} style={[styles.button, {backgroundColor: '#f3c677', borderRadius: 2}]}>
      <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'black'}}>Back to Compete Page</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

class ChooseTime extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />
  }

  toChallengeSent() {
    this.props.navigation.navigate('ChallengeSent');
  }
  state = {
   selectedHours: 0,
   //initial Hours
   selectedMinutes: 0,
   //initial Minutes
  }
  render() {
    const { selectedHours, selectedMinutes } = this.state;
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 60, color: 'white'}}>Choose Time</Text>
        <Text style={{fontSize: 60, color: 'white'}}>{selectedHours} hr:{selectedMinutes} min</Text>
        <View style={styles.yellowContainer}>
          <TimePicker
            selectedHours={selectedHours}
            //initial Hours value
            selectedMinutes={selectedMinutes}
            //initial Minutes value
            onChange={(hours, minutes) => this.setState({
                 selectedHours: hours, selectedMinutes: minutes
           })}
          />
        </View>
        <TouchableOpacity onPress={() => this.toChallengeSent()} style={[styles.button, {backgroundColor: '#f3c677', borderRadius: 2}]}>
        <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'black'}}>Send Challenge</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ChooseBudget extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />
  }

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  handleInputChange = (text) => {
    if (/^\d+$/.test(text)) {
      this.setState({
        text: text
      });
    }else{
      this.setState({
        text: 0
      });
    }
  }
  toChooseTime() {
    this.props.navigation.navigate('ChooseTime');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 60, color: 'white'}}>Choose Budget</Text>
        <View style={styles.textBoxSurroundings}>
          <TextInput
          style={styles.textBox}
          keyboardType='numeric'
          onChangeText={this.handleInputChange}
          value={this.state.text}
          />
        </View>
        <TouchableOpacity onPress={() => this.toChooseTime()} style={[styles.button, {backgroundColor: '#f3c677', borderRadius: 2}]}>
        <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'black'}}>Continue</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

class ChooseItem extends React.Component {

  static navigationOptions = {
    headerTitle: <Header />
  }
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
  static navigationOptions = {
    headerTitle: <Header />
  }

  // toHunt() {
  //   this.props.navigation.navigate('ChooseItem');
  // }
  toHunt() { //TODO:temporary navigation, delete before commit
    this.props.navigation.navigate('ChooseBudget');
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
  static navigationOptions = {
    headerTitle: <Header />
  }

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
}, {
  // headerMode: "none"
});

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Compete: CompeteStack
//  CompeteStack: CompeteStack,
  // Compete: {
  //   screen: NavBar,
  // }
}, {
  initialRouteName: "Login"
  }
)

export default createAppContainer(AppNavigator);


const NavBar = createBottomTabNavigator({
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
			activeTintColor: 'white',
			showLabel: true,
			showIcon: true,
			pressColor: 'coral',
			allowFontScaling: true
		}
})


// export default createAppContainer(createBottomTabNavigator({
//   // Login: {
//   //   screen: Login,
//   //   navigationOptions: {
//   //
//   //   }
//   // },
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       tabBarLabel: 'Profile',
//       tabBarIcon: ({ tintColor }) => <Image source={require('../img/Profile.png')} />
//     },
//   },
//   Compete: {
//     screen: CompeteStack, // Replaced Feed with FeedStack
//     navigationOptions: {
//       tabBarLabel: 'Compete',
//       tabBarIcon: ({ tintColor }) => <Image source={require('../img/Compete.png')} />
//     },
//   },
//   Rewards: {
//     screen: Rewards,
//     navigationOptions: {
//       tabBarLabel: 'Rewards',
//       tabBarIcon: ({ tintColor }) => <Image source={require('../img/Rewards.png')} />
//     }
//   }
//
// }, {
//
//   initialRouteName: "Compete",
// 		swipeEnabled: true,
// 		animationEnabled: true,
// 		lazy: true,
// 		order: ["Profile", "Compete", "Rewards"],
// 		backBehavior: "Login",
// 		tabBarOptions: {
// 			activeTintColor: 'coral',
// 			showLabel: true,
// 			showIcon: true,
// 			pressColor: 'coral',
// 			allowFontScaling: true
// 		}
// }));

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
  yellowContainer: {
    flex: 0,
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
    width: 200,
  },
  textBoxSurroundings: {
    flex: 0,
    backgroundColor: '#f3c677',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 210,
    fontSize: 30,
  },
});
