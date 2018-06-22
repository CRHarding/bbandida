import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
<<<<<<< HEAD
import Services from '../components/services/Services';
import EditPost from './admin/EditPost';
import ProductEdit from './admin/ProductEdit';
import AdminHeader from './admin/AdminHeader';

export default class Edit extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loaded: false,
			data: null,
			currentProduct: null,
			show: false
		}
		this.click = this.click.bind(this)
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
          loaded: true,
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

	show() {
		return this.state.data.map(product => {
			return (<Grid.Column>
				      <ProductEdit product={product} />
				        <Button primary onClick={() => this.click(product)} >
				          edit
				        </Button><br/><br/>
				     </Grid.Column>)
		})
	}
=======
import EditPost from './forms/EditPost';
import ProductEdit from './forms/ProductEdit';
import AdminHeader from './admin/AdminHeader';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.data,
      currentProduct: null,
      show: false,
    };
    this.click = this.click.bind(this);
    this.disable = this.disable.bind(this);
  }

  disable(e) {
    e.stopPropagation();
  }

  show() {
    return this.state.products.map(product => {
      return (
        <Grid.Column>
          <ProductEdit product={product} />
          <Button primary onClick={() => this.click(product)}>
            edit
          </Button>
          <br />
          <br />
        </Grid.Column>
      );
    });
  }
>>>>>>> e5d3462b07f2520300ef400fe768cabb4f992fa8

  click(product) {
    this.setState({
      currentProduct: product,
      show: !this.state.show,
    });
  }

<<<<<<< HEAD
	render() {
		console.log('current product', this.state.currentProduct)
		return (
			<div>
			<AdminHeader />
			<br/>
			<h1> edit page </h1>
			{this.state.show ? 
				<EditPost product={this.state.currentProduct} 
					      contributors={this.props.contributors}
					  	  /> : ''}
				<Grid>
				  <Grid.Row columns={3}>
				  	{this.state.loaded ? this.show() : ''}
				  </Grid.Row>
				</Grid>
			</div>
		)
	}
}
=======
  render() {
    return (
      <div>
        <AdminHeader />
        <br />
        <h1> edit page </h1>
        {this.state.show ? (
          <EditPost
            product={this.state.currentProduct}
            contributors={this.props.contributors}
          />
        ) : (
          ''
        )}
        <Grid>
          <Grid.Row columns={3}>{this.show()}</Grid.Row>
        </Grid>
      </div>
    );
  }
}
>>>>>>> e5d3462b07f2520300ef400fe768cabb4f992fa8
