import React, { Component } from 'react';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      content: ''
    };
  }
  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    e.target.reset();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='addTodo'>Add new todo:</label>
          <input type='text' id='addtodo' onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default AddTodo;
