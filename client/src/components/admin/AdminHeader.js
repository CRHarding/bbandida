import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class Header extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item
          name="admin"
          active={activeItem === 'admin'}
          onClick={this.handleItemClick}
          as={Link} to="/admin"
        >
          Admin Home
        </Menu.Item>
        <Menu.Item
          name="create"
          active={activeItem === 'create'}
          onClick={this.handleItemClick}
          as={Link} to="/post/create"
        >
          Create
        </Menu.Item>
        <Menu.Item
          name="edit"
          active={activeItem === 'edit'}
          onClick={this.handleItemClick}
          as={Link} to="/post/edit"
        >
          Edit
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="blog"
            active={activeItem === 'blog'}
            onClick={this.handleItemClick}
            as={Link} to="/blog/new"
          >
            Write New Blog
          </Menu.Item>
          <Menu.Item
            name="contact"
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
            as={Link} to="/contact/update"
          >
            Update Contact Info
          </Menu.Item>
          <Menu.Item
            name="about"
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            as={Link} to="/about/update"
          >
            Update About Me
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
