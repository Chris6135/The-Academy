import {RECEIVE_LESSONS,RECEIVE_SINGLE_LESSON,DELETE_LESSON} from "../actions/lessons/lesson_actions"
import {RECEIVE_SINGLE_STEP} from "../actions/lessons/step_actions"


const lessonsReducer = (state ={}, action) => {
    Object.freeze (state)

    switch(action.type){
        case RECEIVE_LESSONS:
              return Object.assign({},state,action.lessons)
        case RECEIVE_SINGLE_LESSON:
            const lesson = action.payload.lesson
            return Object.assign({},state,{[lesson.id]: lesson})
        case RECEIVE_SINGLE_STEP:
            console.log("WITNESS ME")
            console.log(newState)
            console.log(newState[action.step.lesson_id])
            const newState = Object.assign({},state, {[action.payload.lesson.id]: action.payload.lesson})
            newState[action.payload.lesson.lesson_id].stepIds.push(action.payload.step.id)
            return newState
        case DELETE_LESSON:
            const newState = Object.assign({},state)
            delete newState[action.lesson.id]
            return newState;
        default:
            return state
    }
}

export default lessonsReducer