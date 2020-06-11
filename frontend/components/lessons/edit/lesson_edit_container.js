import {fetchSingleLesson, destroyLesson} from "../../../actions/lessons/lesson_actions"
import React from 'react';
import lesson_showpage from './lesson_edit'
import { connect } from 'react-redux';
import {fetchLessonSteps, fetchSingleStep, createStep, destroyStep, updateStep} from "../../../actions/lessons/step_actions"


const mapStateToProps = (state,ownProps) => {

  const lesson = state.entities.lessons[ownProps.match.params.lessonId];
  let steps = []
  if(lesson){
    let sorted = lesson.stepIds.sort()
    steps = sorted.map((stepId)=> {
         return state.entities.steps[stepId]
    })
  }

  return {
    lesson : lesson,
    steps: steps

  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestLesson: (id => dispatch(fetchSingleLesson(id))),
    fetchLessonSteps: (lessonId => dispatch(fetchLessonSteps(lessonId))),
    destroyLesson:(id => dispatch(destroyLesson(id))),
    fetchSingleStep: (id => dispatch(fetchSingleStep(id))),
    createStep: (step => dispatch(createStep(step))),
    deleteStep: (step => dispatch(destroyStep(step))),
    updateStep: (step => dispatch(updateStep(step)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(lesson_showpage);