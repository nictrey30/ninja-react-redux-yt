import { ADD_TODO } from './constants';
// an action has a type property and an optional payload, it is just an javascript object

const todoAction = { type: ADD_TODO, payload: 'buy milk' };

export { todoAction };
