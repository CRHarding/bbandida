import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/forms/admin';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Cart from './components/Cart';
import EditPost from './components/forms/EditPost';
import CreatePost from './components/forms/CreatePost';
import NewBlog from './components/forms/NewBlog';
import UpdateContact from './components/forms/UpdateContact';
import UpdateAbout from './components/forms/UpdateAbout';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component = {Home} />
          <Route path = "/admin" component = {Admin} />
          <Route path = "/about" component = {About} />
          <Route path = "/contact" component = {Contact} />
          <Route path = "/cart" component = {Cart} />
          <Route path = "/blogs" component = {Blogs} />
          <Route path = "/post/create" component = {CreatePost} />
          <Route path = "/post/edit" component = {EditPost} />
          <Route path = "/blog/new" component = {NewBlog} />
          <Route path = "/contact/update" component = {UpdateContact} />
          <Route path = "/about/update" component = {UpdateAbout} />
        </div>
      </Router>
    );
  }
}
