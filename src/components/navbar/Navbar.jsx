import React from 'react';
import './navbar.css';
import logo from './logo/logo.png';
import Search from '../search/search';

const Navbar = ()=> {
  return (
    <nav className='navbar'>
        <img className='logo' src={logo} alt="BookMyShow Logo" />
        <Search />
    </nav>
  )
}

export default Navbar