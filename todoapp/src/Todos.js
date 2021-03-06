import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <div className='collection-item' key={todo.id}>
        <span
          className='todo'
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          {todo.content}
        </span>
      </div>
    ))
  ) : (
    // when empty, todoList is a react.element with type of 'p'
    <p className='center'> You have no todos left!!</p>
  );
  return <div className='todos collection'>{todoList}</div>;
};

export default Todos;
