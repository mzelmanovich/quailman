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
    state = [...state, action.chop];
    break;
  case ADD_RESULT:
    state[action.index].result = action.result;
    state = [...state];
  case CHANGE_FUNCTION:
    state[action.index].function = action.function;
    state = [...state];
  case CHANGE_PORK_TYPE:
    state[action.index].type = action.type;
    state = [...state];
  default:
    state = defaultState;
  }
  return state;
};

export default porkchops;
