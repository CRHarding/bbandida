import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/bbandida.jpeg';

const Header = () => {
  return (
    <div className="header">
      <nav className="white">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">
            <img src={logo} height="96" width="80" alt="logo" />
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to="/post/create" className="blue-text">
                Create
              </Link>
            </li>
            <li>
              <Link to="/post/edit" className="blue-text">
                Edit
              </Link>
            </li>
            <li>
              <Link to="/blog/new" className="blue-text">
                Write New Blog
              </Link>
            </li>
            <li>
              <Link to="/contact/update" className="blue-text">
                Update Contact Info
              </Link>
            </li>
            <li>
              <Link to="/about/update" className="blue-text">
                Update About Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
