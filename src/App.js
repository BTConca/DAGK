import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

var config = {
  apiKey: "AIzaSyAzlLC0l-JJWNiSZ-Z-csObwbKLW_7gpsk",
  authDomain: "chit-chat-18b09.firebaseapp.com",
  databaseURL: "https://chit-chat-18b09.firebaseio.com",
  projectId: "chit-chat-18b09",
  storageBucket: "chit-chat-18b09.appspot.com",
  messagingSenderId: "726573927821"
};

firebase.initializeApp(config);

class App extends Component {
  state = { isSignedIn: false }

  uiConfig = {
    signInFlow : "popup",
    signInOptions :
    [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
    ,
    callbacks:
    {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn : !!user})
      if(user != null )
      
      console.log("user",user)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ?
          (<div>
            <div> Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign Out!</button>
            <h1>Wellcome {firebase.auth().currentUser.displayName}</h1>
            <img alt="profile picture" src={firebase.auth().currentUser.photoUrl} />
          </div>)
          :
          (<div>
            <StyledFirebaseAuth
            uiConfig = {this.uiConfig}
            firebaseAuth = {firebase.auth()}
            />
          </div>
          )}
      </div>
    );
  }
}

export default App;
