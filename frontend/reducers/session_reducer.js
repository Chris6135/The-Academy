import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session/session_actions"

const _nullUser = {
    id : 2
}

const sessionReducer = (state = {id:1}, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return action.user.id;
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer