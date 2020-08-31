import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ninjas: [
        { name: 'Ryu', age: 30, belt: 'black', id: 1 },
        { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
        { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
      ]
    };
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    this.setState({ ninjas: [...this.state.ninjas, ninja] });
  };
  deleteNinja = (id) => {
    this.setState({
      ninjas: [...this.state.ninjas.filter((ninja) => ninja.id !== id)]
    });
  };
  componentDidMount() {
    // fires when the component first mounts the dom
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    // fires when we get a change of states or props
    console.log('component updated');
    // this are the props and the state before the data was updated
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className='App'>
        <h1>My first React app</h1>
        <h2>Welcome</h2>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
