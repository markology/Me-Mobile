import { combineReducers } from 'redux';

import authReducers from './authReducers';
import todoReducers from './todoReducers';

export default combineReducers({
    ...authReducers,
    ...todoReducers
});