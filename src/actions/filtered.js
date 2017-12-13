export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateFilter = (filterData) => {
  return function (dispatch){
    dispatch({
      type: UPDATE_FILTER,
      filterData
    })
  }
}
