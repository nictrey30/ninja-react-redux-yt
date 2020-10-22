import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

// withRouter - higher order component - adds functionality to Navbar - add props to the props object, so that we can have router information
const Navbar = (props) => {
  // console.log(props);
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <h5 className='left brand-logo'>Poke'Times</h5>
        <ul className='right'>
          <li>
            {/* <a href='/'>Home</a> */}
            <Link to='/'>Home</Link>
          </li>
          <li>
            {/* NavLink add the class 'active' to the link */}
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
