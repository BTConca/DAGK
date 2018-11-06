import * as types from '../constants/ActionTypes'

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      return [...state,{ displayName: action.displayName, uid: action.uid, photoURL: action.photoURL, isOnline: action.isOnline }]
    case types.USERS_LIST:
      return state;
    case types.USER_OFFLINE:
    return state.map((user)=>
  {
    if(user.uid === action.uid)
    {
      return {
        ...user,
        isOnline: false
      }
    }else {
      return user;
    }
  });
    case types.USER_ONLINE:
      return state.map((user)=>
    {
      if(user.uid === action.uid)
      {
        return {
          ...user,
          isOnline: true
        }
      }else {
        return user;
      }
    });
    case types.CLEAR_STATE:
      return [];
    default:
      return state
  }
}

export default usersReducer
