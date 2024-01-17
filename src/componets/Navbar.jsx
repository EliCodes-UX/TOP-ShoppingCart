// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import ShopContext from '../context/shop-context';
import './Navbar.css';

const Navbar = () => {
  useContext(ShopContext);
  return (
    <div className='navBar'>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop </Link>
        <Link to='/cart'>
          <ShoppingCart size={32} />
        </Link>
        <p>numberOfItems()</p>
      </div>
    </div>
  );
};

export default Navbar;
