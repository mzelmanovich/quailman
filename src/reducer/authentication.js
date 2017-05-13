const defaultState = {token_type: '', access_token: ''};
import {SET_AUTHENTICATION} from '../constants';

const authentication = (state = defaultState, action) => {
  switch (action.type){
  case SET_AUTHENTICATION:
    state = action.authObj;
    break;
  default:
    state = defaultState;
    break;
  }
  return state;
};

export default authentication;
