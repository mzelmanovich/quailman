import { combineReducers} from 'redux';
import authentication from './authentication';
import porkchops from './PorkChops';
import lastResp from './lastResp';

export default combineReducers({authentication, porkchops, lastResp});
