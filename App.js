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


class Compete extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Compete</Text>
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
        <View style={{ display:'flex', alignItems: 'center', width: '100%', height: 150, marginTop: 5 }}>
          <Image source={require('./img/battleshop-svg.png')} style={{flex: 1, width: '100%', height: '100%', resizeMode: 'contain'}}/>
        </View>
        <Text style={{fontFamily: "Baskerville", fontSize: 50}}>Battleshop</Text>
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
    screen: Compete
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
