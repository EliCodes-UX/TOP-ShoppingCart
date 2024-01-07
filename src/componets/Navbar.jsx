// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navBar'>
      <div className='links'>
        <Link to='/'>Shop </Link>
        <Link to='/cart'>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
