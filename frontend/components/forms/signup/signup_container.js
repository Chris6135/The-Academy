import { connect } from 'react-redux';
import { signUp, signIn } from '../../../actions/session/session_actions'
import React from 'react';
import { Link } from 'react-router-dom';
import signupComponent from './signup'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/signin">log in</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signUp(user)),
    demoForm: (user) => dispatch(signIn(user))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(signupComponent);
