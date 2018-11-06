import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import DashBoard from '../components/DashBoard';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Login from '../components/Login';
import RoomPage from '../components/RoomPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className='container'>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={DashBoard} />
                <PrivateRoute path="/users/:id" component={RoomPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
