import { combineReducers } from 'redux';
// Import all reducers 
import colorReducer from './color_reducer';

const rootReducer = combineReducers(
    {
        colors: colorReducer
    }
);

export default rootReducer;