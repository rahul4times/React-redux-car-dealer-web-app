import { UPDATE_FILTER } from '../actions/filter';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.filterData;
    default:
      return state;
  }
}
