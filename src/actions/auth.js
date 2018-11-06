import database, { firebase, googleAuthProvider } from '../firebase/firebase';
import * as types from '../constants/ActionTypes';

export const login = (uid,displayName) => ({
    type: types.LOGIN,
    uid,
    displayName
});

export const clearState = () => ({
  type: types.CLEAR_STATE
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})

export const logout = () => ({
    type: 'LOGOUT'
});

export const getchat = () => ({
  type: 'GETINFO'
});

export const firebaseLogin = () => {
    return () => {
       return firebase.auth().signInWithPopup(googleAuthProvider);
       var user = firebase.auth().currentUser;
       var name;
       if (user !== null) {
         name = user.displayName ? user.displayName : user.email;
         database.ref(`users/${user.uid}`).once((snapshot) => {
           if(!snapshot.val()) {
             database.ref(`users/${user.uid}`).set({
               name,
               uid: user.uid,
               email: user.email,
               photoUrl: user.photoURL,
               token
             });
           }
         });
       }
    };
};

export const firebaseLogout = () => {
  return (dispatch, getState) => {
    const user = getState().auth;
    if (user) {
      const userId = user.uid;
      const displayName = user.displayName;
      database.ref(`users/${userId}`).update({isOnline : false}).then(()=>
      {
          dispatch(offline(user));
          dispatch(clearState());
          dispatch(logout());
          return firebase.auth().signOut();
      });
    }
  };
};

export const offline = (uid) => ({
  type: types.USER_OFFLINE,
  uid,
});
