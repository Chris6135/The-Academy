import * as APIUtil from "../../util/category_api_util"

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"
export const RECEIVE_LESSONS = "RECIEVE_LESSONS"
export const RECEIVE_SINGLE_LESSON = "RECEIVE_SINGLE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"


export const receiveAllCategories = (categories) => {
    debugger
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export const fetchCategories = () => dispatch => {
    debugger
    return APIUtil.getCategories()
      .then(categories => dispatch(receiveAllCategories(categories)));
  }