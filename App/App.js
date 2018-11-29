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

//var FBLoginButton = require('./FBLoginButton');

import { createBottomTabNavigator,  createStackNavigator, createAppContainer } from 'react-navigation';

// global variables
var opponents_arr = []; // makes sure user has chosen at least one opponent
var budget;

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
  '"Battleshop" Wants to Use "' + company + '" to Sign In',
  'This allows the app and website to share information about you.',
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
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'white'}}>Login with Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.login('Google.com')} style={[styles.button, {backgroundColor: '#ffffff', borderRadius: 2}]}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'black'}}>Login with Google</Text>
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
          <View style={{backgroundColor: '#F9564F', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.toChooseOpponents()} style={[styles.button, styles.buttonShadow, {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', height: '30%', backgroundColor: "#f3c677", borderRadius: 15, marginBottom: 25,}]}>
              <Text style={{fontSize: 60, color: 'black'}}>Group</Text>
              <Icon name='arrow-forward' size={40} />
              </TouchableOpacity>
            <TouchableOpacity onPress={() => this.toHuntOrSave()} style={[styles.button, styles.buttonShadow, {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', height: '30%', backgroundColor: '#f3c677', borderRadius: 15, marginTop: 25}]}>
              <Text style={{textAlign: 'center', fontSize: 60, color: 'black'}}>Solo</Text>
              <Icon name='arrow-forward' size={40} />
            </TouchableOpacity>
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
      <View style={{flex: 1, backgroundColor: '#F9564F', alignItems: 'center', padding: 15}}>
        <Text style={{marginTop: 30, fontSize: 36, color: "white", fontWeight: 'bold', textAlign: 'center'}}>Challenge Sent!</Text>
        <Text style={{marginTop: 20, fontSize: 30, color: 'white', textAlign: 'center'}}>We will inform you when you are ready to start the challenge.</Text>
      <TouchableOpacity onPress={() => this.backToCompete()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 40}]}>
      <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 20, color: 'white'}}>Back to Compete Page</Text>
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
      <View style={{flex: 1, backgroundColor: '#F9564F', alignItems: 'center'}}>
        <Text style={{fontSize: 36, color: "white", fontWeight: 'bold', marginTop: 30}}>Choose Time</Text>
        <Text style={{fontSize: 30, color: 'white', margin: 15}}>{selectedHours} hr : {selectedMinutes} min</Text>
        <View style={styles.yellowContainer}>
        <View style={{backgroundColor: 'white', padding: 15, display: 'flex', width: '93%', height: '93%'}}>
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
        </View>
        <TouchableOpacity onPress={() => this.toChallengeSent()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 25}]}>
          <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'white'}}>Send Challenge</Text>
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
      this.setState({
        text: text,
      });
      budget = text;
  }
  toChooseTime() {
    // Error prevention
    // Error prevention
    if (typeof(budget) === 'undefined' || (typeof(budget) === 'string' && budget.length == 0)) {
        Alert.alert(
        'Battleshop Says',
        'Your budget cannot be empty. Please choose a budget that is a positive number.',
        [
          {text: 'OK'},
        ],
        {cancelable: false}
        )
  } else if (budget[0] === '-') {
    Alert.alert(
    'Battleshop Says',
    'Budgets cannot be negative. Please choose a budget that is a positive number.',
    [
      {text: 'OK'},
    ],
    {cancelable: false}
    )
    // Checks if the budget only contains digits
  } else if (!/^\d+$/.test(budget)) {
        Alert.alert(
        'Battleshop Says',
        'Budgets cannot include letters. Please choose a budget that is a positive number.',
        [
          {text: 'OK'},
        ],
        {cancelable: false}
        )
    } else if (budget === '0') {
      Alert.alert(
      'Battleshop Says',
      'Zero is not a valid budget. Please choose a budget that is a positive number.',
      [
        {text: 'OK'},
      ],
      {cancelable: false}
      )
    }  else {
      this.props.navigation.navigate('ChooseTime');
    }
  }
  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#F9564F', alignItems: 'center'}}>
        <Text style={{marginTop: 30, marginBottom: 30, textAlign: 'center', fontSize: 36, color: "white", fontWeight: 'bold'}}>Choose Budget</Text>

          <View style={styles.textBoxSurroundings}>
            <TextInput
            style={styles.textBox}
            keyboardType='numeric'
            onChangeText={this.handleInputChange}
            value={this.state.text}
            />
          </View>

        <TouchableOpacity onPress={() => this.toChooseTime()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 25}]}>
          <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'white'}}>Continue</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

class ChooseItem extends React.Component {

  static navigationOptions = {
    headerTitle: <Header />
  }


  selectedItem() {
    this.props.navigation.navigate('ChooseBudget');
  }

  // toChooseBudget() {
  //   this.props.navigation.navigate('ChooseBudget');
  // }
  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#F9564F'}}>
        <Text style={{margin: 30, color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 36}}>Choose Your Item</Text>
        <View style={styles.itemsContainer}>
            <TouchableOpacity style={styles.itemButton} onPress={this.selectedItem.bind(this)}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Dress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton} onPress={this.selectedItem.bind(this)}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Shirt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton} onPress={this.selectedItem.bind(this)}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Jacket</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton} onPress={this.selectedItem.bind(this)}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Pants</Text>
            </TouchableOpacity>

        </View>

      </View>
    )
  }
}

// <TouchableOpacity style={{width: '80%', height: 70, marginTop:30, borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7B1E7A'}} onPress={() => this.toChooseBudget()}>
//   <Text style={{textAlign: 'center', fontSize: 24}}>Continue</Text>
// </TouchableOpacity>

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
      <View style={{backgroundColor: '#F9564F', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.toHunt()} style={[styles.button, styles.buttonShadow, {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', height: '30%', backgroundColor: "#f3c677", borderRadius: 15, marginBottom: 25,}]}>
          <Text style={{fontSize: 60, color: 'black'}}>Hunt</Text>
          <Icon name='arrow-forward' size={40} />
          </TouchableOpacity>
        <TouchableOpacity onPress={() => this.toSave()} style={[styles.button, styles.buttonShadow, {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', height: '30%', backgroundColor: '#f3c677', borderRadius: 15, marginTop: 25}]}>
          <Text style={{textAlign: 'center', fontSize: 60, color: 'black'}}>Save</Text>
          <Icon name='arrow-forward' size={40} />
        </TouchableOpacity>
      </View>
    )
  }
}

class Opponent extends React.Component {
  constructor() {
    super();
    this.state = {
      color: '#F2C57D',
      clicked: false
    };
  }

  press(item) {
    if (!this.state.clicked) {
      opponents_arr.push(this.item);
      this.setState({
        color: 'white',
        clicked: true
      })
    } else {
      // Find the index position of then opponent, then remove one element from that position
      opponents_arr.splice(opponents_arr.indexOf(this.item, 1));
      this.setState({
        color: '#F2C57D',
        clicked: false
      })
    }

  }

  render() {
    return (
      <View style={{backgroundColor: this.state.color}}>
        <TouchableOpacity onPress={this.press.bind(this, this.props.item)}>
        <Text style={styles.opponent}>{this.props.item}</Text>

         </TouchableOpacity>
      </View>
    )
  }
}

class ChooseOpponents extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />
  }

  constructor() {
    super();
    const ds = new ListView.DataSource({
       rowHasChanged: (r1, r2) => (r1 != r2)
    });

    const ds2 = new ListView.DataSource({
       rowHasChanged: (r1, r2) => (r1 != r2)
    });

    this.state = {
      color: '#F2C57D',
      dataSource: ds.cloneWithRows(['Xiajang Wang', 'Melinda Vandersteen',
      'John Klickman', 'Alice Vera', 'Jason Brown']),
      dataSource2: ds.cloneWithRows([ 'Alice Vera', 'Angela Luo', 'Barry Allen', 'Bruce Wayne',
      'Emily Hu', 'Francesca Colombo','Jason Brown', 'John Klickman','Kara Danvers',
      'Logan Pearce', 'Melinda Vandersteen',
      'Peter Parker', 'Tony Stark', 'Xiajang Wang', 'Yanyan Tong'
      ]),
    };
  }


  toHuntOrSave() {
    this.props.navigation.navigate('ChooseOpponents');
  }

  toChooseItem() {
    if (opponents_arr.length == 0) {
      Alert.alert(
      'Battleshop Says',
      'Please select at least one opponent.',
      [
        {text: 'OK'},
      ],
      {cancelable: false}
      )
    } else {
        this.props.navigation.navigate('ChooseItem');
    }
  }


  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#F9564F'}}>

        <Text style={[styles.header, {marginTop: 30, marginBottom: 30}]}>Choose Opponents</Text>
        <View style={{backgroundColor: '#F2C57D', width: '80%', height: '60%', borderColor: 'black', borderWidth: 1}}>
          <Text style={ styles.subheader}> Recent Opponents </Text>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(item) => (
                <Opponent item={item}/>
              )}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
            <View style={{marginTop: 10, borderColor: 'black', borderTopWidth: 1}}>
          <Text style={styles.subheader}> All Available Contacts </Text>
          </View>
          <ListView
              dataSource={this.state.dataSource2}
              renderRow={(item) => (
                <Opponent item={item}/>
              )}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
          </View>
          <TouchableOpacity onPress={() => this.toChooseItem()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 25}]}>
            <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'white'}}>Continue</Text>
          </TouchableOpacity>
      </View>
    );
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
  initialRouteName: "Login",
  headerMode: "none"
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
//  paddingVertical: '10%',
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
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.8,
  shadowRadius: 1,
  elevation: 1,
  shadowColor:'black',
  shadowRadius: 1,
  shadowOffset: {width: 4, height: 4},
  borderRadius: 15
 },
  button: {
//alignSelf: 'stretch',
    padding: 10,
    margin: 10
  },
  yellowContainer: {
    borderColor: "black",
    borderWidth: 1,
    width: '85%',
    height: '55%',
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
    width: '95%',
  },
  textBoxSurroundings: {
    flex: 0,
    backgroundColor: '#f3c677',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '80%',
    fontSize: 30,
  },
  buttonShadow: {
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
    shadowColor:'black',
    shadowRadius: 1,
    shadowOffset: {width: 4, height: 4},
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  },
  subheader: {
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#575757',
  },
  opponent: {
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 25,
    color: 'black'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black'
  }
});
