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

export default class HuntOrSave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_text: ''
    };
  }
  toChooseItem() { //TODO:temporary navigation, delete before commit
    this.props.navigation.navigate('ChooseItem');
  }
  toHunt() {
    //todo: hunt not implemented yet!
  }

  handleInputChange = (text) => {
      this.setState({
        item_text: text,
      });
      global.item = text;
  }

  render() {
    return (
      <View style={{backgroundColor: '#F9564F', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.toHunt()} style={[styles.button, styles.buttonShadow, {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', height: '30%', backgroundColor: "#f3c677", borderRadius: 15, marginBottom: 25,}]}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 60, color: 'black'}}>Hunt </Text>
            <Icon name='arrow-forward' size={40} />
          </View>
          <Text>Get the items you need in the time you have</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => this.toChooseItem()} style={[styles.button, styles.buttonShadow, {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', height: '30%', backgroundColor: '#f3c677', borderRadius: 15, marginTop: 25}]}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text style={{textAlign: 'center', fontSize: 60, color: 'black'}}>Save </Text>
            <Icon name='arrow-forward' size={40} />
          </View>
          <Text>Shop within your budget</Text>
        </TouchableOpacity>
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

module.exports = HuntOrSave;
