import { combineReducers} from 'redux';
import authentication from './authentication';
import porkchops from './PorkChops';

export default combineReducers({authentication, porkchops});
