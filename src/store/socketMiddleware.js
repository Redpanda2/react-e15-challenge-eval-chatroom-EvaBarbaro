import { WEBSOCKET_CONNECT, ADD_MESSAGE, receiveMessage } from 'src/store/reducer';

const socketMiddleware = store => next => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      const socket = window.io('http://localhost:3001');
      //   socket.on(ADD_MESSAGE, (message) => {
      //     store.dispatch(receiveMessage(message));
      //   });
      break;
    }
    // case ADD_MESSAGE: {
    //   const socket = window.io('http://localhost:3001');
    //   socket.emit(ADD_MESSAGE, store.state.messageValue);
    //   break;
    // }
    default:
      next(action);
  }
};

export default socketMiddleware;
