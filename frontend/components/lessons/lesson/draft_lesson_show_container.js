import { connect } from 'react-redux';
import React from 'react';
import LessonShow from "./draft_lesson_show"
import {fetchSingleLesson} from "../../../actions/lessons/lesson_actions"

const mapStateToProps = (state,ownProps) => {

  const lesson = state.entities.lessons[ownProps.match.params.lessonId]
  let steps = []
  
  if(lesson){
    steps = lesson.stepIds.sort().map((stepId)=> {
         return state.entities.steps[stepId]
    })
    return {
      author: state.entities.users[lesson.author_id],
      lesson: lesson, 
      steps: steps
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestLesson: (id => dispatch(fetchSingleLesson(id))),


  };
};

export default connect(mapStateToProps,mapDispatchToProps)(LessonShow);
