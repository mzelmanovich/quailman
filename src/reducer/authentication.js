const defaultState = {token_type: '', access_token: ''};
import {SET_AUTHENTICATION} from '../constants';

const authentication = (state = defaultState, action) => {
  switch (action.type){
  case SET_AUTHENTICATION:
    state = Object.assign({}, action.authObj);
    break;
  default:
    break;
  }
  return state;
};

export default authentication;
