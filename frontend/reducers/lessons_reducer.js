import {RECEIVE_LESSONS,RECEIVE_SINGLE_LESSON,DELETE_LESSON} from "../actions/lessons/lesson_actions"


const lessonsReducer = (state ={}, action) => {
    Object.freeze (state)
    switch(action.type){
        case RECEIVE_LESSONS:
              return Object.assign({},state,action.lessons)
        case RECEIVE_SINGLE_LESSON:
            return Object.assign({},state,{[action.lesson.id]: action.lesson})
        case DELETE_LESSON:
            const newState = Object.assign({},state)
            delete newState[action.lesson.id]
            return newState;
        default:
            return state
    }
}

export default lessonsReducer