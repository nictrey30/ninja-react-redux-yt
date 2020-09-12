import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deletePost } from '../actions/postActions';

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };
  render() {
    const post = this.props.post ? (
      <div className='post'>
        <h4 className='center'>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className='center'>
          <button className='button gray' onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className='center'>Loading post...</div>
    );
    return <div className='container'>{post}</div>;
  }
}

// ownProps are the props of the component before we attach the additional props from the redux store
// our own props will contain information about the routes, then we can use that id to find the particular blog that we want to conect to from the state on the store
const mapStateToProps = (state, ownProps) => {
  // use own props to grab the id
  let id = ownProps.match.params.post_id;
  // we return what we want to apply as props to the component
  return {
    post: state.posts.find((post) => post.id === id)
  };
};

// map dispatches to props so that we can call them from our component
// dispatch is a method on the store
const mapDispatchToProps = (dispatch) => {
  // return what functions we gonna map to the component
  return {
    // takes the id of the post we want to delete
    // first deletePost -> the prop that is passed down to the component
    // second deletePost -> the action that get dispatched
    deletePost: (id) => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
