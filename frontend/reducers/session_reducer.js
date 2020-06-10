import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session/session_actions"

const _nullUser = {
    id : null
}

const sessionReducer = (state = _nullUser, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return { id : action.payload.user.id}
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer

//fetch the pokemon index.
//you grab form the poken is the pokemon their names nad hteir images
//when you grab a pokemon show
//you grab the pokemon, all of their info, and all of their items. 