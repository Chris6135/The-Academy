import {RECEIVE_LESSONS,RECEIVE_SINGLE_LESSON,DELETE_LESSON} from "../actions/lessons/lesson_actions"
import {RECEIVE_SINGLE_STEP, DELETE_STEP} from "../actions/lessons/step_actions"
import {RECEIVE_CURRENT_USER} from "../actions/session/session_actions"


const lessonsReducer = (state ={}, action) => {
    Object.freeze (state)
    let newState = Object.assign({},state)
    let stepIds =[]

    switch(action.type){
        case RECEIVE_LESSONS:
              return Object.assign({},state,action.lessons)
        case RECEIVE_SINGLE_LESSON:
            const lesson = action.payload.lesson
            return Object.assign({},state,{[lesson.id]: lesson})
        case RECEIVE_SINGLE_STEP:
            newState = Object.assign({},state, {[action.payload.lesson.id]: action.payload.lesson})
            let oldIds = state[action.payload.lesson.id].stepIds
            stepIds = newState[action.payload.lesson.id].stepIds
            let stepIdx = action.payload.step.id


           if(oldIds.includes(stepIdx)){
               console.log("edit")
            //    let idx = stepIds.indexOf(stepIdx)
            //    stepIds[idx] = action.payload.step
                return state
            }else{
                console.log("push")
                // stepIds.push(action.payload.step.id)
                return newState
            }
        
        case DELETE_STEP:
            newState = Object.assign({},state, {[action.payload.lesson.id]: action.payload.lesson})
            stepIds = newState[action.payload.lesson.id].stepIds
            const index = stepIds.indexOf(action.payload.step.id);     
            if (index > -1) {
                stepIds.splice(index, 1);
            }
            return newState;
        case DELETE_LESSON:
            delete newState[action.lesson.id]
            return newState;
        case RECEIVE_CURRENT_USER: 
            newState = Object.assign({},action.payload.lessons)
            return newState
        default:
            return state;
    }
}

export default lessonsReducer