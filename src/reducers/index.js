import cars from './cars';
import filtered from './filter';
import { combineReducers } from 'redux';

  const rootReducer = combineReducers({

    filtered,
    cars

  });

export default rootReducer;
