import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDGeu_NZbWRtR0NPtU5zfDy58BacZrP7gk",
  authDomain: "battleshop-dba6e.firebaseapp.com",
  databaseURL: "https://battleshop-dba6e.firebaseio.com",
  storageBucket: "battleshop-dba6e.appspot.com",
  messagingSenderId: "914819415757",
}

class firebaseBackend {
  uid = '';
  messagesRef = [];
  // initialize Firebase Backend
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAiuvZgc9iLMezprc5zYLBw9PsrgRkXjrE',
      authDomain: 'meetupchat-dbce1.firebaseapp.com',
      databaseURL: 'https://meetupchat-dbce1.firebaseio.com',
      storageBucket: 'meetupchat-dbce1.appspot.com',
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });
  }
  setUid(value) {
    this.uid = value;
  }
  getUid() {
    return this.uid;
  }
  // retrieve the messages from the Backend
  loadMessages(callback) {
    this.messagesRef = firebase.database().ref('messages');
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }
  // send the message to the Backend
  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        image: message[i].image,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  // close the connection to the Backend
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new firebaseBackend();
