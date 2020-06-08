import * as APIUtil from "../../util/lesson_api_util"
import {getCategories} from "../../util/category_api_util"

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"
export const RECEIVE_LESSONS = "RECEIVE_LESSONS" //changes state to all lessons
export const RECEIVE_SINGLE_LESSON = "RECEIVE_SINGLE_LESSON" //adds a full lesson lessons slice
export const DELETE_LESSON = "DELETE_LESSON" //removes a lesson from lesson slice


export const receiveAllCategories = (categories) => {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export const receiveLessons = (lessons) =>{
    return{
        type: RECEIVE_LESSONS,
        lessons
    }
}

export const receiveSingleLesson = (lesson) =>{
    return{
        type: RECEIVE_SINGLE_LESSON,
        lesson
    }
}

export const deleteLesson = (lesson) =>{
    return {
        type: DELETE_LESSON,
        lesson
    }
}



export const fetchCategories = () => dispatch => {
    return getCategories()
      .then(categories => dispatch(receiveAllCategories(categories)));
  }

export const fetchUserLessons = (user_id) => dispatch => {
    return APIUtil.getUserLessons(user_id)
      .then(lessons => dispatch(receiveLessons(lessons)));
  }

  export const fetchAllLessons = () => dispatch => {
    return APIUtil.getAllLessons()
      .then(lessons => dispatch(receiveLessons(lessons)));
  }

  export const fetchSingleLesson = (id) => dispatch => {
    return APIUtil.getSingleLesson(id)
      .then(lesson => dispatch(receiveSingleLesson(lesson)));
  }


  export const destroyLesson = (id) => dispatch => { //not sure if this will work
    return APIUtil.deleteLesson(id)
      .then(lesson => dispatch(deleteLesson(lesson)));
  }

  export const createLesson = (lesson) => dispatch => {
    return APIUtil.createLesson(lesson)
      .then(lesson => dispatch(receiveSingleLesson(lesson)));
  }

  export const updateLesson = (lesson) => dispatch => {
    return APIUtil.updateLesson(lesson)
      .then(lesson => dispatch(receiveSingleLesson(lesson)));
  }