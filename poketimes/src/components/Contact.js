import React from 'react';
// for every component that the Router oads up, the Router attaches some extra information to th props object

const Contact = (props) => {
  console.log(props);
  // programmatic redirects
  // setTimeout(() => {
  //   props.history.push('/about');
  // }, 2000);
  return (
    <div className='container'>
      <h4 className='center'>Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus
        architecto alias reiciendis sit consequuntur, cupiditate non consequatur
        ad? Aperiam?
      </p>
    </div>
  );
};

export default Contact;
