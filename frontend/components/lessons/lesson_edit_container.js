import {fetchSingleLesson} from "../../actions/lessons/lesson_actions"
import React from 'react';
import lesson_showpage from './lesson_edit'
import { connect } from 'react-redux';
import {fetchLessonSteps, fetchSingleStep, createStep,destroyStep} from "../../actions/lessons/step_actions"


const mapStateToProps = (state,ownProps) => {
  return {
    lesson : state.entities.lessons[ownProps.match.params.lessonId],
    steps: state.entities.steps

  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestLesson: (id => dispatch(fetchSingleLesson(id))),
    fetchLessonSteps: (lessonId => dispatch(fetchLessonSteps(lessonId))),
    fetchSingleStep: (id => dispatch(fetchSingleStep(id))),
    createStep: (step => dispatch(createStep(step))),
    deleteStep: (step => dispatch(destroyStep(step)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(lesson_showpage);