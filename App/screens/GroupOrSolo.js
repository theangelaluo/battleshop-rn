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
