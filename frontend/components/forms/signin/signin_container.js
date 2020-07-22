import { connect } from 'react-redux';
import { signIn, clearErrors } from '../../../actions/session/session_actions'
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
    fetchCategories : ()=> dispatch(fetchCategories()),
    processForm: (user) => dispatch(signIn(user)),
    clearErrors: ()=> {
     dispatch(clearErrors())}
  };
  
};

export default connect(mapStateToProps, mapDispatchToProps)(signinComponent);
