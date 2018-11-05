import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseLogout } from '../actions/auth';

const Header = ({logout}) => (
    <header>
        <h2>Ola la la</h2>
        <h4>Con ga</h4>
        <div className='header__nav'>
            <NavLink to='/dashboard' activeClassName='activeNav'>Dashboard</NavLink>
            <NavLink to='/help' activeClassName='activeNav'>Help</NavLink>
            <button onClick={logout}>Logout</button>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(firebaseLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
