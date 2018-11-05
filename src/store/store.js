import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';
import usersReducer from "../reducers/users"

const demoState = {
    auth: {
        uid : '123uid'
    }
};

export default () => {
    return createStore(
        combineReducers({
            auth: authReducer,
            users:usersReducer
        }),
        applyMiddleware(thunk));
};
