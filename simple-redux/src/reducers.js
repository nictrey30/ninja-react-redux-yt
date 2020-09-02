import { ADD_TODO, ADD_POST } from './constants';

const initialState = {
  todos: [],
  posts: []
};
// a reducer takes 2 parameters - a state and an action
const myreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export { myreducer };
