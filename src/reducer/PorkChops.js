const defaultState = [
  {
    type: 'TypePicker',
    result: null,
    function: null
  }
];
import {ADD_CHOP, ADD_RESULT, CHANGE_FUNCTION, CHANGE_PORK_TYPE} from '../constants';

const porkchops = (state = defaultState, action) => {
  switch (action.type){
  case ADD_CHOP:
    state = [...state,   {
      type: 'TypePicker',
      result: null,
      function: null
    }];
    break;
  case ADD_RESULT:
    state[action.index].result = action.result;
    state[action.index] = Object.assign({}, state[action.index]);
    state = [...state];
    break;
  case CHANGE_FUNCTION:
    state[action.index].function = action.function;
    state[action.index] = Object.assign({}, state[action.index]);
    state = [...state];
    break;
  case CHANGE_PORK_TYPE:
    state[action.index].type = action.porkType;
    state[action.index] = Object.assign({}, state[action.index]);
    state = [...state];
    break;
  default:
    state = defaultState;
    break;
  }
  return state;
};

export default porkchops;
