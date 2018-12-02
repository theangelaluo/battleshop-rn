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

var Header = require("./Header");

export default class ChooseItem extends React.Component {

  static navigationOptions = {
    headerTitle: <Header />
  }

  constructor(props) {
    super(props);
    this.state = {
      text: 'Custom'
    };
  }

  toChooseBudget() {
    this.props.navigation.navigate('ChooseBudget');
  }

  selectedDress() {
    global.item = 'a dress';
    this.props.navigation.navigate('ChooseBudget');
  }

  selectedShirt() {
    global.item = 'a shirt';
    this.props.navigation.navigate('ChooseBudget');
  }

  selectedJacket() {
    global.item = 'a jacket';
    this.props.navigation.navigate('ChooseBudget');
  }

  selectedPants() {
    global.item = 'pants';
    this.props.navigation.navigate('ChooseBudget');
  }


  handleInputChange = (text) => {
      this.setState({
        text: text,
      });
      global.item = text;
  }

  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#F9564F'}}>
        <Text style={{margin: 30, color: "white", fontWeight: 'bold', textAlign: 'center', fontSize: 36}}>Choose Your Item</Text>
        <View style={styles.itemsContainer}>
            <TouchableOpacity style={styles.itemButton} onPress={this.selectedDress.bind(this)}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Dress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton} onPress={this.selectedShirt.bind(this)}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Shirt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton} onPress={this.selectedJacket.bind(this)}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Jacket</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton} onPress={this.selectedPants.bind(this)}>
              <Text style={{textAlign: 'center', fontSize: 24}}>Pants</Text>
            </TouchableOpacity>
            <View style={styles.textBoxSurroundings}>
              <TextInput
              style={styles.textBox}
              onChangeText={this.handleInputChange}
              value={this.state.text}
              />
            </View>
            <TouchableOpacity onPress={() => this.toChooseBudget()} style={[styles.button, styles.shadow, {backgroundColor: '#7B1E7A', borderRadius: 15, marginTop: 25}]}>
              <Text style={{paddingRight: 15, paddingLeft: 15, textAlign: 'center', fontSize: 30, color: 'white'}}>Continue</Text>
            </TouchableOpacity>

        </View>


      </View>
    )
  }
}

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

module.exports = ChooseItem;
