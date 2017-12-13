import cars from './cars';
import filtered from './filter';
import messages from './message';
import { combineReducers } from 'redux';

  const rootReducer = combineReducers({

    filtered,
    cars,
    messages

  });

export default rootReducer;
