import {
  SEND_MESSAGE_PENDING,
  SEND_MESSAGE_SUCCESS
} from '../actions/message';

export default (state = [], action) => {
  switch (action.type) {
    case SEND_MESSAGE_PENDING:
      return state;
    case SEND_MESSAGE_SUCCESS:
      return [...action.payload.data]
    default:
      return state;
  }
}
