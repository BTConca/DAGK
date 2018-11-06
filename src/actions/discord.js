import database, { firebase } from '../firebase/firebase';
import { history } from '../routers/AppRouter';
import moment from 'moment';
import * as path from 'path';
import * as types from '../constants/ActionTypes';

export const createDiscord = ({ id, name }) => ({
  type: 'CREATE_DISCORD',
  room: {
    id,
    name
  }
});

export const addUser = (uid,displayName,photoURL,isOnline) => ({
  type: types.ADD_USER,
  uid,
  displayName,
  photoURL,
  isOnline
});



export const startDiscord = (user = {}, showError) => {
  return (dispatch, getState) => {
    const users = [];
    const sUser =
    {
      uid : user.uid,
      displayName : user.displayName,
      photoURL : user.photoURL,
      isOnline : true
    }
    if(user === null)
    {
      return showCreateError('Room name not available!');
    }
    return database.ref('users').once('value',(snapshot) =>{
      const users = [];
      snapshot.forEach((child) =>{
        users.push({
          ...child.val()
        });
      });

      users.map((i) => {
        dispatch(addUser(i.uid,i.displayName,i.photoURL,i.isOnline));
      })

      if (!users.find((r) => r.uid === sUser.uid)) {
        return database.ref(`users/${sUser.uid}`).set(sUser).then(()=>{
          dispatch(addUser(sUser.uid,sUser.displayName,sUser.photoURL,sUser.isOnline));
        });
      }
    });
  };
};

export const goOnline = (user) => {
  return (dispatch, getState) => {
      return database.ref(`users/${user.uid}`).update({isOnline : true}).then(()=>
      {
        dispatch(online(user.uid));
      });
  }
};

export const userList = () => ({
  type: types.USERS_LIST
})

export const online = (uid) => ({
  type: types.USER_ONLINE,
  uid
});
