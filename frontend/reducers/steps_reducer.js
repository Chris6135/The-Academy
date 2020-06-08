import {RECEIVE_STEPS,RECEIVE_SINGLE_STEP,DELETE_STEP} from "../actions/lessons/step_actions"


const StepsReducer = (state ={}, action) => {
    Object.freeze (state)
    switch(action.type){
        case RECEIVE_STEPS:
              return Object.assign({},state,action.steps)
        case RECEIVE_SINGLE_STEP:
            return Object.assign({},state,{[action.step.id]: action.step})
        case DELETE_STEP:
            const newState = Object.assign({},state)
            delete newState[action.step.id]
            return newState;
        default:
            return state
    }
}

export default StepsReducer