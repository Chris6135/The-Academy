import { connect } from 'react-redux';
import React from 'react';
import PublishLesson from "./publish_lesson"
import {updateLesson} from "../../../actions/lessons/lesson_actions"

const mapStateToProps = (state,ownProps) => {
  return{
  lesson: state.entities.lessons[ownProps.match.params.lessonId],
  categories: state.entities.categories
    }
}


const mapDispatchToProps = dispatch => {
  return {
    updateLesson: (lesson => dispatch(updateLesson(lesson))),


  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PublishLesson);