import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
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

// in mapStateToProps we get access to the state of the store, so now we can grab stuff from the state and attach them to props
const mapStateToProps = (state) => {
  // the object returned represent the different properties we want to add to the props
  return {
    posts: state.posts
  };
};

// if a component wants access to that store, then what we do is we take some data from the store and we map that data to the props of our component
export default connect(mapStateToProps)(Home);
