import { combineReducers } from 'redux';
import colorReducer from './color_reducer';

const rootReducer = combineReducers(
    {
        colors: colorReducer
    }
);

export default rootReducer;