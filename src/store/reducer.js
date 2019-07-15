// == Initial State
const initialState = {
  messages: [],
  messageValue: '',
  loginValue: 'anonymous',
  input: false,
};

// == Types
export const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_INPUT = 'CHANGE_MESSAGE_INPUT';
const CHANGE_LOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
const SHOW_INPUT = 'SHOW_INPUT';
const HIDE_INPUT = 'HIDE_INPUT';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MESSAGE_INPUT:
      return {
        ...state,
        messageValue: action.messageValue,
      };
    case CHANGE_LOGIN_INPUT:
      return {
        ...state,
        loginValue: action.loginValue,
      };
    case SHOW_INPUT:
      return {
        ...state,
        input: true,
      };
    case HIDE_INPUT:
      return {
        ...state,
        input: false,
      };
    case ADD_MESSAGE: {
      const { messageValue, loginValue } = state;
      const { messages: oldMessages } = state;
      const allIds = oldMessages.map(message => message.id);
      const id = allIds.length > 0 ? Math.max(...allIds) + 1 : 1;
      const newMessages = {
        id,
        labelMessage: messageValue,
        labelLogin: loginValue,
      };
      const messagesCopy = [
        ...oldMessages,
        newMessages,
      ];
      return {
        ...state,
        messages: messagesCopy,
        messageValue: '',
      };
    }
    default:
      return state;
  }
};

// == Action Creators
export const changeMessageInput = messageValue => ({
  type: CHANGE_MESSAGE_INPUT,
  messageValue,
});

export const changeLoginInput = loginValue => ({
  type: CHANGE_LOGIN_INPUT,
  loginValue,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const receiveMessage = messages => ({
  type: RECEIVE_MESSAGE,
  messages,
});

export const showInput = () => ({
  type: SHOW_INPUT,
});

export const hideInput = () => ({
  type: HIDE_INPUT,
});

export const websocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

// == Selectors

// == Export
export default reducer;
