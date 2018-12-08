import PropTypes from 'prop-types';
import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewPropTypes,
  Text,
  Image,
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  Octicons
} from '@expo/vector-icons';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { Constants, Camera, Permissions } from 'expo';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import isIPhoneX from 'react-native-is-iphonex';

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

const flashIcons = {
  off: 'flash-off',
  on: 'flash-on',
  auto: 'flash-auto',
  torch: 'highlight'
};

export default class CustomActions extends React.Component {
  constructor(props) {
    super(props);
    this._images = [];
    this.state = {
      modalVisible: false,
      cameraVisible: false,
      flash: 'off',
      zoom: 0,
      autoFocus: 'on',
      type: 'back',
      permissionsGranted: false,
      path: null,
    };
    this.onActionsPress = this.onActionsPress.bind(this);
    this.selectImages = this.selectImages.bind(this);
  }

  toggleFlash = () => this.setState({ flash: flashModeOrder[this.state.flash] });

  setImages(images) {
    this._images = images;
  }

  getImages() {
    return this._images;
  }

  setModalVisible(visible = false) {
    this.setState({modalVisible: visible});
  }
  setCameraVisible(visible = false) {
    this.setState({cameraVisible: visible});
  }

  onActionsPress() {
    // const options = ['Choose From Library...', 'Take a Picture...', 'Cancel'];
    const options = ['Choose From Library...','Cancel'];
    const cancelButtonIndex = options.length - 1;
    this.context.actionSheet().showActionSheetWithOptions({
      options,
      cancelButtonIndex,
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 0:
          this.setModalVisible(true);
          break;
        // case 1:
        //   this.setCameraVisible(true);
        //   break;
        default:
      }
    });
  };

  selectImages(images) {
    this.setImages(images);
  }

  renderNavBar() {
    return (
      <NavBar style={{
          backgroundColor: '#FFF'
      }}>
      <NavButton onPress={() => {
        this.setModalVisible(false);
      }}>
        <NavButtonText style={{
          color: '#000'
        }}>
          {'Cancel'}
        </NavButtonText>
      </NavButton>
      <NavTitle style={{
        color: '#000'
      }}>
        {'Camera Roll'}
      </NavTitle>
        <NavButton onPress={() => {
          this.setModalVisible(false);
          const images = this.getImages().map((image) => {
            return {
              image: image.uri,
            };
          });
          this.props.onSend(images);
          this.setImages([]);
        }}>
        <NavButtonText style={{color: '#000'}}>
          {'Send'}
        </NavButtonText>
      </NavButton>
    </NavBar>

            );
  }
  toggleFacing = () => this.setState({ type: this.state.type === 'back' ? 'front' : 'back' });

  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      this.setState({ path: data.uri });
      // this.props.updateImage(data.uri);
      console.log('Path to image: ' + data.uri);
    } catch (err) {
      console.log('err: ', err);
    }
  };
    renderTopBar = () =>
      <View
        style={styles.topBar}>
        <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFacing}>
          <Ionicons name="ios-reverse-camera" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFlash}>
          <MaterialIcons name={flashIcons[this.state.flash]} size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButton}>
        </TouchableOpacity>
      </View>

    renderBottomBar = () =>
      <View
        style={styles.bottomBar}>
        <View style={{ flex: 0.4}}>
          <TouchableOpacity
            onPress={() => {
              this.takePicture()
                //const data = await this.camera.takePictureAsync();
    //             this.setState({ path: data.uri });
              }
            }>
            <Ionicons name="ios-radio-button-on" size={70} color="white" />

          </TouchableOpacity>
        </View>
      </View>

  renderIcon() {
    return (
      <View>
        <Image source={require("../../img/Camera.png")}/>
      </View>
    );
  }

  renderPreview = () =>
  (
  <View style={{flex:1}}>
    <Image
      source={{ uri: this.state.path }}
      //style={styles.preview}
    />
  </View>
);
  renderCamera = () =>
     (
       <View style={{flex:1}}>
         <Camera
           ref={ref => {
             this.camera = ref;
           }}
           style={styles.camera}
           type={this.state.type}
           flashMode={this.state.flash}
           autoFocus={this.state.autoFocus}
           >
           {this.renderTopBar()}
           {this.renderBottomBar()}
         </Camera>
       </View>
     );
  // renderCameraScreen() {
  //   if(this.state.path) {
  //       return {renderPreview()};
  //   } else {
  //     return {this.renderCamera()};
  //   }
  // }
  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.containerStyle]}
        onPress={this.onActionsPress}
      >
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          {this.renderNavBar()}
          <CameraRollPicker
            maximum={10}
            imagesPerRow={4}
            callback={this.selectImages}
            selected={[]}
          />
        </Modal>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.cameraVisible}
          onRequestClose={() => {
            this.setCameraVisible(false);
          }}
        >
        {this.state.path ? this.renderPreview() : this.renderCamera()}
        </Modal>
        {this.renderIcon()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  camera: {
  flex: 1,
  justifyContent: 'space-between',
},
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  topBar: {
   flex: 0.2,
   backgroundColor: 'transparent',
   flexDirection: 'row',
   justifyContent: 'space-around',
   paddingTop: Constants.statusBarHeight / 2,
 },
 bottomBar: {
   paddingBottom: isIPhoneX ? 25 : 5,
   backgroundColor: 'transparent',
   alignSelf: 'flex-end',
   justifyContent: 'space-between',
   flex: 0.12,
   flexDirection: 'row',
 },
 noPermissions: {
   flex: 1,
   alignItems:'center',
   justifyContent: 'center',
   padding: 10,
 },
 toggleButton: {
    flex: 0.25,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  autoFocusLabel: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bottomButton: {
    flex: 0.3,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newPhotosDot: {
    position: 'absolute',
    top: 0,
    right: -5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4630EB'
  },
  options: {
    position: 'absolute',
    bottom: 80,
    left: 30,
    width: 200,
    height: 160,
    backgroundColor: '#000000BA',
    borderRadius: 4,
    padding: 10,
  },
});

CustomActions.contextTypes = {
  actionSheet: PropTypes.func,
};

CustomActions.defaultProps = {
  onSend: () => {},
  options: {},
  icon: null,
  containerStyle: {},
  wrapperStyle: {},
  iconTextStyle: {},
};

CustomActions.propTypes = {
  onSend: PropTypes.func,
  options: PropTypes.object,
  icon: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  iconTextStyle: Text.propTypes.style,
};
