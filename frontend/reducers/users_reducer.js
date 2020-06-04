import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session/session_actions"

const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({},state,{[action.user.id]: action.user})
        case LOGOUT_CURRENT_USER: 
            const newState = Object.assign({},state)
            delete newState[action.user.id]
            return newState;
        default:
            return state;
    }
    
}

export default usersReducer