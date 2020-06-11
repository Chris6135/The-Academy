import {RECEIVE_STEPS,DELETE_STEP, RECEIVE_SINGLE_STEP } from "../actions/lessons/step_actions"
import {RECEIVE_SINGLE_LESSON} from "../actions/lessons/lesson_actions"


const StepsReducer = (state ={}, action) => {
    Object.freeze (state)
    switch(action.type){
        case RECEIVE_STEPS:
              return Object.assign({},state,action.steps)
        case RECEIVE_SINGLE_LESSON:
            const steps = action.payload.steps
            return Object.assign({},state,steps)
        case RECEIVE_SINGLE_STEP:
    
            return Object.assign({},state,{[action.payload.step.id] : action.payload.step})
        case DELETE_STEP:
            const newState = Object.assign({},state)
            delete newState[action.payload.step.id]
            return newState;
        default:
            return state
    }
}

export default StepsReducer