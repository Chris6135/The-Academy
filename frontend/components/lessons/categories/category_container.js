import {fetchCategoryLessons} from "../../../actions/lessons/lesson_actions"
import React from 'react';
import category from './category'
import { connect } from 'react-redux';

const mapStateToProps = (state,ownProps) => {

    const category = state.entities.categories[ownProps.match.params.categoryId];
    let lessons = []
    if(category){
      lessons = category.lessonIds.map((lessonId)=> {
           return state.entities.lessons[lessonId]
      })
    }
  
    return {
      category : category,
      lessons: lessons
  
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchCategoryLessons: (categoryId => dispatch(fetchCategoryLessons(categoryId))),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(category);