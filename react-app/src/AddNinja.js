import React, { Component } from 'react';

class AddNinja extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      age: null,
      belt: null
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
    e.target.reset();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name=''
            id='name'
            onChange={this.handleChange}
            required
          />
          <label htmlFor='age'>Age</label>
          <input
            type='number'
            name=''
            id='age'
            onChange={this.handleChange}
            required
          />
          <label htmlFor='belt'>Belt</label>
          <input
            type='text'
            name=''
            id='belt'
            onChange={this.handleChange}
            required
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
