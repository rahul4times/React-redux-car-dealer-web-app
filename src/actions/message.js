import axios from 'axios'

export const GET_MESSAGES_PENDING = 'GET_MESSAGES_PENDING'
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS'
export const SEND_MESSAGE_PENDING = 'SEND_MESSAGE_PENDING'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const REMOVE_MESSAGE_PENDING = 'REMOVE_MESSAGE_PENDING'
export const REMOVE_MESSAGE_SUCCESS = 'REMOVE_MESSAGE_SUCCESS'

export const getMessages = () => {
  return async (dispatch) => {
    dispatch({ type: GET_MESSAGES_PENDING })
    let messages = await axios.get('http://localhost:8000/messages')
    dispatch({
      type: GET_MESSAGES_SUCCESS,
      payload: messages
    })
  }
}

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

export const deleteMsg = (msgId) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_MESSAGE_PENDING })
    let deletemsg = await axios.delete(`http://localhost:8000/messages/${msgId}`)
    dispatch({
      type: REMOVE_MESSAGE_SUCCESS,
      payload: deletemsg
    })
  }
}
