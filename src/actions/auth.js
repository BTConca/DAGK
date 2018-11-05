import { firebase, googleAuthProvider } from '../firebase/firebase';


export const login = (uid,displayName) => ({
    type: 'LOGIN',
    uid,
    displayName
});

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
    return () => {
        return firebase.auth().signOut();
    }
};
