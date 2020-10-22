import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
// connect is a function that brings back a higher order component
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className='post card' key={post.id}>
            <img src={Pokeball} alt='' />
            <div className='card-content'>
              <Link to={`/${post.id}`}>
                <span className='card-title red-text'>{post.title}</span>
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
      <div className='container home'>
        <h4 className='center'>Home</h4>
        {postList}
      </div>
    );
  }
}

// inside mapStateToProps we get access to the state of our Redux store
const mapStateToProps = (state) => {
  // return an object that represents the different properties we want to add to the props
  return {
    posts: state.posts
  };
};

// if a component wants access to the Redux store, we take some data from the Redux store and we map that data to the props of our component
export default connect(mapStateToProps)(Home);
