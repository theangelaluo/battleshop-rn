import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ListView,
  Alert,
  Image,
  FlatList,
  Platform,
} from 'react-native';

import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';

var message = {text: '', image: ''}
setMessages = [
  {
    text: 'Looks good! Check out what I found for $90',
    image: '../img/dress.jpg',
  },
  {
    text: 'This is only $100!',
    image: '../img/dress.jpg',
  },
  {
    text: 'I want this but $200 is a lot',
    image: '../img/dress2.jpg',
  },
  {
    text: 'Prom dress for $180',
    image: '../img/dress3.jpg',
  },
  {
    text: '$110',
    image: '../img/dress4.jpg',
  },
  {
    text: '$Check this out! $95',

    image: '../img/dress5.jpg',
  },
  {
    text: 'Is this too sparkly? $125',
    image: '../img/dress8.jpg',
  },
  {
    text: 'What do you think? $120',
    image: '../img/dress6.jpg',
  },
  {
    text: 'I love this one! $147',
    image: '../img/dress7.jpg',
  },
  {
    text: 'Can I pull this off? $230',
    image: '../img/dress9.jpg',
  },
];
