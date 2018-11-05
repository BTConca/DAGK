import * as types from '../constants/ActionTypes'

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      return [...state,{ displayName: action.displayName, uid: action.uid }]
    case types.USERS_LIST:
      return action.users
    default:
      return state
  }
}

export default usersReducer
