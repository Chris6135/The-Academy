import {fetchSingleLesson} from "../../actions/lessons/lesson_actions"
import React from 'react';
import lesson_showpage from './lesson_showpage'
import { connect } from 'react-redux';
import {fetchLessonSteps, fetchSingleStep, createStep} from "../../actions/lessons/step_actions"


const mapStateToProps = (state,ownProps) => {
  return {
    lesson : state.entities.lessons[ownProps.match.params.lessonId]

  };
};

const mapDispatchToProps = dispatch => {
    debugger
  return {
    requestLesson: (id => dispatch(fetchSingleLesson(id))),
    fetchLessonSteps: (lessonId => dispatch(fetchLessonSteps(lessonId))),
    fetchSingleStep: (id => dispatch(fetchSingleStep(id))),
    createStep: (step => dispatch(createStep(step)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(lesson_showpage);