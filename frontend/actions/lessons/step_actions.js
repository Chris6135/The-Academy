import * as APIUtil from "../../util/steps_api_util"

export const RECEIVE_STEPS = "RECEIVE_STEPS" //changes state to all STEPS
export const RECEIVE_SINGLE_STEP = "RECEIVE_SINGLE_STEP" //adds a full STEP STEPS slice
export const DELETE_STEP = "DELETE_STEP" //removes a STEP from STEP slice



export const receiveSteps = (steps) =>{
    return{
        type: RECEIVE_STEPS,
        steps
    }
}

export const receiveSingleStep = (step) =>{
    return{
        type: RECEIVE_SINGLE_STEP,
        step
    }
}

export const deleteStep = (step) =>{
    return {
        type: DELETE_STEP,
        step
    }
}




export const fetchLessonSteps = (lesson_id) => dispatch => {
    return APIUtil.getLessonSteps(lesson_id)
      .then(steps => dispatch(receiveSteps(steps)));
  }

  export const fetchSingleStep= (id) => dispatch => {
    return APIUtil.getSingleStep(id)
      .then(step => dispatch(receiveSingleStep(step)));
  }


  export const destroyStep = (step) => dispatch => { //not sure if this will work
    return APIUtil.deleteStep(step.id)
      .then(step => dispatch(deleteStep(step)));
  }

  export const createStep = (lessonId) => dispatch => {
    return APIUtil.createStep(lessonId)
      .then(step => dispatch(receiveSingleStep(step)));
  }

  export const updateStep = (step) => dispatch => {
    return APIUtil.updateStep(step)
      .then(step => dispatch(receiveSingleStep(step)));
  }