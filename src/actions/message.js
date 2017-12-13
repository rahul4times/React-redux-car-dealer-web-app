import axios from 'axios'

export const SEND_MESSAGE_PENDING = 'SEND_MESSAGE_PENDING'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'

export const sendMessage = (privateMessage) => {
  return async (dispatch) => {
    dispatch({ type: SEND_MESSAGE_PENDING })
    let message = await axios.post('http://localhost:8000/messages', privateMessage)
    dispatch({
      type: SEND_MESSAGE_SUCCESS,
      payload: message
    })
  }
}
