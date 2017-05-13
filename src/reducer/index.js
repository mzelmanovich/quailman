import { combineReducers} from 'redux';
import authentication from './authentication';
import porkchops from './porkchops';

export default combineReducers({authentication, porkchops});
