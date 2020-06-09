import {RECEIVE_STEPS,DELETE_STEP} from "../actions/lessons/step_actions"
import {RECEIVE_SINGLE_LESSON} from "../actions/lessons/lesson_actions"


const StepsReducer = (state ={}, action) => {
    console.log(action)
    Object.freeze (state)
    switch(action.type){
        case RECEIVE_STEPS:
              return Object.assign({},state,action.steps)
        case RECEIVE_SINGLE_LESSON:
            const steps = action.payload.steps
            return Object.assign({},state,steps)
        case DELETE_STEP:
            const newState = Object.assign({},state)
            delete newState[action.step.id]
            return newState;
        default:
            return state
    }
}

export default StepsReducer