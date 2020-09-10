import React, { Component } from 'react';
import axios from 'axios';

// we automatically get props in clased based components
class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: null
    };
  }
  async componentDidMount() {
    // get the id from the props that the Router provides
    let id = this.props.match.params.post_id;
    let response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
    let { data } = response;
    this.setState({ post: data });
  }
  render() {
    const post = this.state.post ? (
      <div className='post'>
        <h4 className='center'>{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className='center'>Loading post...</div>
    );
    return <div className='container'>{post}</div>;
  }
}

export default Post;
