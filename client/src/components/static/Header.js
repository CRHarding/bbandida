import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse,
         Navbar,
         NavbarToggler,
         NavbarBrand,
         Nav,
         NavItem,
         NavLink,
         DropdownToggle,
         DropdownMenu,
         DropdownItem } from 'reactstrap';
import logo from '../images/bbandida.jpeg';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      /*<Navbar className="navbar navbar-dark navbar-expand-md bg-dark justify-content-between">
        <div className="container-fluid">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/about" className="nav-link text-primary" href="#">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link text-primary" href="#">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/blogs" className="nav-link text-primary" href="#">Blogs</Link>
                </li>
            </ul>
          </Collapse>
        <Link to="/" className="navbar-brand mx-auto d-block center"><img src={logo} height="96" width="80" alt="logo" /></Link>
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item"><Link to="/" className="nav-link text-primary"><i className="fab fa-twitter"></i></Link></li>
                <li className="nav-item"><Link to="/" className="nav-link text-primary"><i className="fab fa-github"></i></Link></li>
            </ul>
        </div>
      </Navbar>*/
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/" className="mx-auto">
          <img src={logo} height="96" width="100" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-item text-primary">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-item text-primary">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="nav-item text-primary">Contact</Link>
            </NavItem>
            <NavItem>
              <Link to="/blogs" className="nav-item text-primary">Blogs</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  };
}
