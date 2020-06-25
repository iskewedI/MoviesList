import { combineReducers } from 'redux';
import search from './search';

const rootReducer = combineReducers({
	search: search
});

export default rootReducer;