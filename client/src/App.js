import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import Services from './components/services/Services';
import Home from './components/Home';
import Admin from './components/forms/admin';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Edit from './components/Edit';
import CreatePost from './components/forms/CreatePost';
import NewBlog from './components/forms/NewBlog';
import UpdateContact from './components/forms/UpdateContact';
import UpdateAbout from './components/forms/UpdateAbout';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      dataLoaded: false,
      cdataLoaded: false,
      data: null,
      contributors: null
    }
  }

  componentDidMount() {
    Services.getProducts()
      .then(responseProducts => {
        const images = responseProducts.data.images;
        const mainImages = responseProducts.data.mainImages;
        let products = responseProducts.data.products;
        for (let i = 0; i < products.length; i++) {
          products[i].images = images[i];
          products[i].mainImages = mainImages[i];
        }
        this.setState({
          dataLoaded: true,
          data: products,
        });
      })
      .catch(err => {
        console.log('error in getting all products --->', err);
      });

    Services.getContribs()
      .then(contribs => {
        this.setState({
          cdataLoaded: true,
          contributors: contribs.data.contributors,
        });
      })
      .catch(err => {
        console.log('error in getting contributors');
      });
  }
  
  render() {
    if (this.state.dataLoaded && this.state.cdataLoaded) {
      return (
        <Router>
          <div>
            <Route exact path = "/" component = {() => {
              return <Home data={this.state.data}
                           contributors={this.state.contributors} />
            }} />
            <Route path = "/admin" component = {Admin} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
            <Route path = "/cart" component = {Cart} />
            <Route path = "/blogs" component = {Blogs} />
            <Route path = "/post/create" component = {CreatePost} />
            <Route path = "/post/edit" component = {() => {
              return <Edit data={this.state.data}
                           contributors={this.state.contributors} />
            }} />
            <Route path = "/blog/new" component = {NewBlog} />
            <Route path = "/contact/update" component = {UpdateContact} />
            <Route path = "/about/update" component = {UpdateAbout} />
          </div>
        </Router>
      );
    } else {
      return (<Dimmer active inverted>
                <Loader inverted content='Loading' />
              </Dimmer>)
    }
  }
}
