import { OPEN_MODAL, CLOSE_MODAL } from '../actions/util/modal_actions';

const defState = {info:{type: null, lock:false}}

export default function modalReducer(state = defState, action) {
    Object.freeze(state)
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return defState;
    default:
      return state;
  }
}
