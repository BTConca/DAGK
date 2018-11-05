import React from 'react';
import ReactDOM from 'react-dom';
import getAppStore from './store/store';
import './styles/styles.scss';
import { Provider } from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';

const store = getAppStore();

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let isRendered = false;
const renderApp = () => {
    if (!isRendered) {
        ReactDOM.render(template, document.getElementById('app'));
        isRendered = true;
    }
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('login user id: ', user.uid);
        console.log('name: ', user.displayName);
        const name = user.displayName ? user.displayName : user.email;
        store.dispatch(login(user.uid,name));
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    } else {
        console.log('logout');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
