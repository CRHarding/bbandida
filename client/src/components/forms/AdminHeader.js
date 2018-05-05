import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import logo from '../images/bbandida.jpeg';

export default class Header extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item name="create" active={activeItem === 'create'} onClick={this.handleItemClick}>
          <Link to="/post/create" className="blue-text">
            Create
          </Link>
        </Menu.Item>
        <Menu.Item name="edit" active={activeItem === 'edit'} onClick={this.handleItemClick}>
          <Link to="/post/edit" className="blue-text">
            Edit
          </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name="blog" active={activeItem === 'blog'} onClick={this.handleItemClick}>
            <Link to="/blog/new" className="blue-text">
              Write New Blog
            </Link>
          </Menu.Item>
          <Menu.Item name="contact" active={activeItem === 'contact'} onClick={this.handleItemClick}>
            <Link to="/contact/update" className="blue-text">
              Update Contact Info
            </Link>
          </Menu.Item>
          <Menu.Item name = "about" active={activeItem === 'about'} onClick={this.handleItemClick}>
            <Link to="/about/update" className="blue-text">
              Update About Me
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  };
}
