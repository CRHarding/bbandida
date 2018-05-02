import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/forms/admin';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Cart from './components/Cart';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/admin" component = {Admin} />
          <Route path = "/about" component = {About} />
          <Route path = "/contact" component = {Contact} />
          <Route path = "/cart" component = {Cart} />
          <Route path = "/blogs" component = {Blogs} />
        </div>
      </Router>
    );
  }
}
