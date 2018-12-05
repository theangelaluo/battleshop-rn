import { Alert, StatusBar } from 'react-native';
import React from 'react';

import { Button, Icon } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
import { createBottomTabNavigator,  createStackNavigator, createAppContainer } from 'react-navigation';

const Tutorial = () => (
  <Onboarding
    showDone={false}
    onSkip={() => this.props.navigation.navigate('Compete')}
    pages={[
      {
        title: 'Hey!',
        subtitle: 'Welcome to Battleshop! This is a tutorial to get you started.',
        backgroundColor: '#F9564F',
        image: (
          <Icon
            name="hand-peace-o"
            type="font-awesome"
            size={100}
            color="white"
          />
        ),
      },
      {
        title: 'Send Messages',
        subtitle: 'You can reach everybody with us',
        backgroundColor: '#F9564F',
        image: (
          <Icon
            name="paper-plane-o"
            type="font-awesome"
            size={100}
            color="white"
          />
        ),
      },
      {
        title: 'Get Notified',
        subtitle: 'We will send you notification as soon as something happened',
        backgroundColor: '#F9564F',
        image: (
          <Icon name="bell-o" type="font-awesome" size={100} color="white" />
        ),
      },
      {
        title: "That's Enough",
        subtitle: (
          <Button
            title={'Get Started'}
            containerViewStyle={{ marginTop: 20 }}
            backgroundColor={'white'}
            borderRadius={5}
            textStyle={{ color: '#003c8f' }}
            onPress={() => {
              Alert.alert('done');
              StatusBar.setBarStyle('default');
            }}
          />
        ),
        backgroundColor: '#F9564F',
        image: (
          <Icon name="rocket" type="font-awesome" size={100} color="white" />
        ),
      },
    ]}
  />
);

export default Tutorial;
