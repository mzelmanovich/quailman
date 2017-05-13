const defaultState = null;
import {SET_LAST_RESP} from '../constants';

const lastResp = (state = defaultState, action) => {
  switch (action.type){
  case SET_LAST_RESP:
    state = Object.assign({}, action.resp);
    break;
  default:
    break;
  }
  return state;
};

export default lastResp;
