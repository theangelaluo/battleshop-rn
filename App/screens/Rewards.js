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

class Rewards extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Rewards Page</Text>
      </View>
    )
  }
}
