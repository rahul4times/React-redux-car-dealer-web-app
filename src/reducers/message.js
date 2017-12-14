import {
  GET_MESSAGES_PENDING,
  GET_MESSAGES_SUCCESS,
  SEND_MESSAGE_PENDING,
  SEND_MESSAGE_SUCCESS,
  REMOVE_MESSAGE_PENDING,
  REMOVE_MESSAGE_SUCCESS
} from '../actions/message';

export default (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES_PENDING:
      return state;
    case GET_MESSAGES_SUCCESS:
      return [...action.payload.data]
    case SEND_MESSAGE_PENDING:
      return state;
    case SEND_MESSAGE_SUCCESS:
      return [...action.payload.data]
    case REMOVE_MESSAGE_PENDING:
      return state;
    case REMOVE_MESSAGE_SUCCESS:
      return [...action.payload.data]
    default:
      return state;
  }
}
