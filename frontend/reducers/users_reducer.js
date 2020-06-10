import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session/session_actions"
import {RECEIVE_SINGLE_LESSON} from "../actions/lessons/lesson_actions"


const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({},state,{[action.payload.user.id]: action.payload.user})
        case LOGOUT_CURRENT_USER: 
            const newState = Object.assign({},state)
            delete newState[action.user.id]
            return newState;
        case RECEIVE_SINGLE_LESSON:
            const author = action.payload.author
            return Object.assign({},state,{[author.id]: author})
        default:
            return state;
    }
    
}

export default usersReducer