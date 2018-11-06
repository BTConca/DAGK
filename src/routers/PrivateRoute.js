import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { connect } from 'react-redux';

import SideBar from '../components/SideBar';

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...otherProps
}) => (
  <Route {...otherProps} component={(props) => {
      if (isAuthenticated) {
        return (
          <div>
            <Header />
            <div className='container'>
              <SideBar />
              <Component {...props} />
            </div>
          </div>
        );
      } else {
        return (
          <Redirect to='/' />
        );
      }
    }} />
  );

  const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
  });

  export default connect(mapStateToProps)(PrivateRoute);
