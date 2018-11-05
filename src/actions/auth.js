import { firebase, googleAuthProvider } from '../firebase/firebase';


export const login = (uid) => ({
    type: 'LOGIN',
    uid
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
    };
};

export const firebaseLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
};
