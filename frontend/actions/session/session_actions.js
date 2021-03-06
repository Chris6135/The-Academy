// login(user) (thunk action creator)
// logout() (thunk action creator)
// signup(user) (thunk action creator)
import * as APIUtil from "../../util/session_api_util"
import {getUserInfo} from "../../util/user_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (payload) => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload,
    }
}

export const logoutCurrentUser = (user) => {
    return {
        type: LOGOUT_CURRENT_USER,
        user
    }
}

export const receiveErrors =(errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const clearErrors= ()=>{
    return{
        type: CLEAR_ERRORS
    }
}

export const signIn = (user) => (dispatch) => {
   return ( APIUtil.signIn(user)
     .then(user => {
         return dispatch(receiveCurrentUser(user))
     }, (errors) =>{ 
        return dispatch(receiveErrors(errors))
    }))
} 

export const signUp = (user) => (dispatch) => {
    return ( APIUtil.signUp(user)
      .then(user => {
          return dispatch(receiveCurrentUser(user))
      }, (errors) =>{
          return dispatch(receiveErrors(errors))
      }))
 } ;

 export const logOut = (user) => (dispatch) => {
    return ( APIUtil.signOut(user)
      .then(user => {
          return dispatch(logoutCurrentUser(user))
      }, (errors) =>{
        return dispatch(receiveErrors(errors))
    }))
 } ;

 export const getInfo = (id) => (dispatch) =>{
     return( getUserInfo(id)
     .then(payload => {
         return dispatch(receiveCurrentUser(payload))
     }))
 };
