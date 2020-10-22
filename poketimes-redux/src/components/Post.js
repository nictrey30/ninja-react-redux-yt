import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

// we automatically get props in clased based components
class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    // redirect user to the home page after delete has benn done
    this.props.history.push('/');
  };
  render() {
    const post = this.props.post ? (
      <div className='post'>
        <h4 className='center'>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className='center'>
          <button className='btn grey' onClick={this.handleClick}>
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

const mapStateToProps = (state, ownProps) => {
  // ownProps refers to the props of this component before we attach the aditional props from the Redux store
  // it is called post_id because this is the way we named it in the App.js(/:post_id)
  let id = ownProps.match.params.post_id;
  return {
    // The find() method returns the value of the first element in the provided array that satisfies the provided testing function
    post: state.posts.find((post) => post.id === id)
  };
};

// map our dispatches to our props, so that we can call them from our component
// takes as a paramaeter the dispatch method from the redux store
const mapDispatchToProps = (dispatch) => {
  return {
    // we are dispatching the 'DELETE_POST' action whenever we call the deletePost function, and this function is going to be attached to our props, so we can use it inside the component
    deletePost: (id) => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
