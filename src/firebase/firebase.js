import * as firebase from 'firebase';



const config = {
  apiKey: "AIzaSyAzlLC0l-JJWNiSZ-Z-csObwbKLW_7gpsk",
  authDomain: "chit-chat-18b09.firebaseapp.com",
  databaseURL: "https://chit-chat-18b09.firebaseio.com",
  projectId: "chit-chat-18b09",
  storageBucket: "chit-chat-18b09.appspot.com",
  messagingSenderId: "726573927821"
};


firebase.initializeApp(config);

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
  
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
