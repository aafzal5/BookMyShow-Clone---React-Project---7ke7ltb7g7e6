import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src= "https://w7.pngwing.com/pngs/574/475/png-transparent-logo-xunit-random-org-randomness-computer-software-logo-github-blue-angle-text.png" alt="Company Logo" className='logo-img' />
      </Link>
      <SearchForm/>
      <div className="navbar-icons">
        <Link to="/WishList">
          <i className="fas fa-heart"></i>
        </Link>
        <Link to="/SignInForm">
          <i className="fas fa-user"></i>
          <span>Sign In</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
