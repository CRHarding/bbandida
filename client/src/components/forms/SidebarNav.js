import React from 'react';
import { Link } from 'react-router-dom';


const SidebarNav = props => {
  return (
    <div>
      <ul>
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
  );
};

export default SidebarNav;
