import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, content: 'buy some milk' },
        { id: 2, content: 'play mario kart' }
      ]
    };
  }
  deleteTodo = (id) => {
    console.log(id);
  };
  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-text'>Todos</h1>
        {/* we want to pass deleteTodo as a prop, so that we can call it from Todo component when we click on an individual todo*/}
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
