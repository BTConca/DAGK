import React from 'react';
import { connect } from 'react-redux';
import { firebaseLogin } from '../actions/auth';
import GoogleButton from 'react-google-button';

const Login = ({ login }) => (
    <div className='container'>
      <GoogleButton
        onClick={login}
    />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(firebaseLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);
