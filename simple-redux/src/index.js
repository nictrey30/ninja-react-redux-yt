import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import { createStore, applyMiddleware } from 'redux';
import { myreducer } from './reducers';

import { ADD_TODO, ADD_POST } from './constants';
import { todoAction } from './actions';

import { createLogger } from 'redux-logger';
const logger = createLogger();

// a reducer is just a function that interacts with the store
const store = createStore(myreducer, applyMiddleware(logger));

// the function parameter is gonna fire every time the state is changed
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(todoAction);
store.dispatch({ type: ADD_TODO, payload: 'sleep some more' });
store.dispatch({ type: ADD_POST, payload: 'Egg hunt with yoshi' });

ReactDOM.render(<App />, document.getElementById('root'));
