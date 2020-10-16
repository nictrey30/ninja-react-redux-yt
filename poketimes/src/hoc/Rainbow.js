// randomize the text color inside other component
import React from 'react';

// the higher order component will be the Rainbow function
// receives a component and returns it supercharged
const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const classNameColor = `${randomColor}-text`;

  // pass in the props from the WrappedComponent
  return (props) => {
    return (
      <div className={classNameColor}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
