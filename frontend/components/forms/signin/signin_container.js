import { connect } from 'react-redux';
import { signIn } from '../../../actions/session/session_actions'
import React from 'react';
import { Link } from 'react-router-dom';
import signinComponent from './signin'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signin',
    navLink: <Link to="/signup">sign up</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signIn(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(signinComponent);
