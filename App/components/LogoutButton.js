import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'


const LogoutButtonComponent = props =>
  <TouchableOpacity
    style={styles.container}
    onPress={props.logout}>

    <Image source={require('../../img/ic_exit_to_app.png')} />
  </TouchableOpacity>

LogoutButtonComponent.propTypes = {
  logout: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
    height: 40,
    alignItems: 'center',
    justifyContent:'center'
  }
});
export default LogoutButtonComponent
