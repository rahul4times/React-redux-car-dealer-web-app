import cars from './cars'
import filter from './filter'
import { combineReducers } from 'redux';

  const rootReducer = combineReducers({

    filter,
    cars

  });

export default rootReducer;
