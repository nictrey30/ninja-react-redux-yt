import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// redux - library to create the store
import { createStore, applyMiddleware } from 'redux';
// react-redux - library which helps connect redux store to the react components
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

import { createLogger } from 'redux-logger';
const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  // Provider provides our application with the store, so that the store can interact with it at a later point in time
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
