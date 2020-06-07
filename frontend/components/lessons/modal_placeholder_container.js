import {createLesson} from "../../actions/lessons/lesson_actions"
import React from 'react';
import modal_placeholder from './modal_placeholder'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
      state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createLesson: (lesson) => dispatch(createLesson(lesson)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(modal_placeholder);
