import cars from './cars';
import filtered from './filter';
import messages from './message';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

  const rootReducer = combineReducers({

    filtered,
    cars,
    messages,
    form: formReducer

  });

export default rootReducer;
