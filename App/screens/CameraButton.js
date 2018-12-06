import React from 'react'
import PropTypes from 'prop-types'
import ImagePicker from 'expo';
import { TouchableOpacity, Image, StyleSheet, PixelRatio, Text, View } from 'react-native'
//import ImagePicker from 'react-native-image-picker';

export default class CameraButton extends React.Component {
  state = {
      ImageSource: null,
    };

    selectPhotoTapped() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };

      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };

          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };

          this.setState({

            ImageSource: source

          });
        }
      });
    }

    render() {
      return (
        <View style={styles.container}>

          <TouchableOpacity onPress={Expo.ImagePicker.launchImageLibraryAsync()}>
              <Image source={require("../../img/Camera.png")} />

          </TouchableOpacity>

        </View>
      );
    }

  }

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    ImageContainer: {
      justifyContent: 'center',
      alignItems: 'center',

    },

  });
