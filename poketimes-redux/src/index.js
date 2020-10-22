import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

// Provider - a component which is going to surround our App, then we are going to pass our store into the Provider, and this is going to provide our App with the store
// The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
