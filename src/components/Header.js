import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseLogout } from '../actions/auth';

const Header = ({logout}) => (
    <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Discord</h1>
        </Link>
        <button className="button button--link" onClick={logout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(firebaseLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
