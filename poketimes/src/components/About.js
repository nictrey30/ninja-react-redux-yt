import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className='container'>
      <h4 className='center'>About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus
        architecto alias reiciendis sit consequuntur, cupiditate non consequatur
        ad? Aperiam?
      </p>
    </div>
  );
};

export default Rainbow(About);
