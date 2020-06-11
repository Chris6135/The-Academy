import {createLesson} from "../../../actions/lessons/lesson_actions"
import React from 'react';
import modal_placeholder from './modal_placeholder'
import { connect } from 'react-redux';
import {closeModal} from '../../../actions/util/modal_actions'
import { withRouter } from "react-router-dom";



const mapStateToProps = (state) => {
  return {
      state,
      formType:'newLesson'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createLesson: (lesson) => dispatch(createLesson(lesson)),
    closeModal: ()=> dispatch(closeModal())

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(modal_placeholder))
