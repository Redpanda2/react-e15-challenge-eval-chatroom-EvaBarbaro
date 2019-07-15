// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer, { websocketConnect } from 'src/store/reducer';
import socketMiddleware from './socketMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(socketMiddleware),
);

const store = createStore(
  reducer,
  enhancers,
);

store.dispatch(websocketConnect());

// == Export
export default store;
