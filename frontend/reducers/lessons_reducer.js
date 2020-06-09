import {RECEIVE_LESSONS,RECEIVE_SINGLE_LESSON,DELETE_LESSON} from "../actions/lessons/lesson_actions"
import {RECEIVE_SINGLE_STEP} from "../actions/lessons/step_actions"


const lessonsReducer = (state ={}, action) => {
    Object.freeze (state)
    const newState = Object.assign({},state)

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
            newState[action.step.lesson_id].stepIds.push(action.step.id)
            return newState
        case DELETE_LESSON:
            delete newState[action.lesson.id]
            return newState;
        default:
            return state
    }
}

export default lessonsReducer