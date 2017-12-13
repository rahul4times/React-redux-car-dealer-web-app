import { UPDATE_FILTER } from '../actions/filtered';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
    console.log('objassign', {...action.filterData})
      return {...action.filterData};
    default:
      return state;
  }
}
