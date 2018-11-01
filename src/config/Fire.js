import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAzlLC0l-JJWNiSZ-Z-csObwbKLW_7gpsk",
    authDomain: "chit-chat-18b09.firebaseapp.com",
    databaseURL: "https://chit-chat-18b09.firebaseio.com",
    projectId: "chit-chat-18b09",
    storageBucket: "chit-chat-18b09.appspot.com",
    messagingSenderId: "726573927821"
  };

  const fire = firebase.initializeApp(config);
export default fire;
export const googleProvider = new firebase.auth.GoogleAuthProvider();
