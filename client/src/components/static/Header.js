import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/bbandida.jpeg';

const Header = () => {
  return (
    <div class="header">
      <nav className="white">
        <div className="nav-wrapper">
          <a href="/" class="brand-logo center">
            <img src={logo} height="96" width="80" alt="logo" />
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to="/about" className="blue-text">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="blue-text">
                Contact
              </Link>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/blogs" className="blue-text">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/cart" className="blue-text">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
