import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  async componentDidMount() {
    let response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    let { data } = response;
    this.setState({
      posts: data.slice(0, 10)
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className='post card' key={post.id}>
            <div className='card-content'>
              <Link to={`/${post.id}`}>
                <span className='card-title'>{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className='center'>No posts yet</div>
    );
    return (
      <div className='container'>
        <h4 className='center'>Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
