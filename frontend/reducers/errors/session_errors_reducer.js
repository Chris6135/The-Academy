import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS} from "../../actions/session/session_actions";

const defState = []

const sessionErrorsReducer = (state = defState, action)=>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ERRORS:
            return action.errors.responseJSON
        case RECEIVE_CURRENT_USER:
            return defState
        case CLEAR_ERRORS:
            return defState
        default:
            return state;
    }
}

export default sessionErrorsReducer;