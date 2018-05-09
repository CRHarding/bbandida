import React, { Component } from 'react';
import { Grid, Button, Menu } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import Services from '../services/Services';
import AdminHeader from './AdminHeader';
import PriceForm from '../forms/PriceForm';
import CreateForm from '../forms/CreateForm';
import RenderImages from './RenderImages';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: 9.99,
      fireRedirect: false,
      priceLoaded: false,
      activeItem: 'edit',
      contentSubmit: true,
    };
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.setPrice = this.setPrice.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  sendFormToDatabase() {
    const product = {
      title: this.state.title,
      description: this.state.description,
      tags: this.state.tags,
      contributors: [],
      images: this.state.productImages,
      mainImage: this.state.mainImage,
    };
    console.log(product);
    Services.addProducts(product)
      .then(product => {
        this.setState({
          fireRedirect: true,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleCreateSubmit(title, description) {
    this.setState({
      title: title,
      description: description,
      contentSubmit: !this.state.contentSubmit,
    });
  }

  editContent() {
    this.setState({
      contentSubmit: !this.state.contentSubmit,
      priceLoaded: false,
    });
  }

  editPrice(e) {
    this.setState({
      priceLoaded: !this.state.priceLoaded,
      contentSubmit: false,
    });
  }

  setPrice(price) {
    console.log(price);
    this.setState({
      price: price,
      priceLoaded: false,
    });
  }

  uploadWidget() {
    let _this = this;
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'bbandida',
        upload_preset: 'q0zswxx7',
        tags: 'photos',
      },
      function(error, result) {
        _this.setState({
          gallery: _this.state.gallery.concat(result),
          productImages: _this.state.productImages.concat(result[0].secure_url),
          url: result[0].secure_url,
          dataLoaded: true,
          tags: result[0].tags,
          contentSubmit: false,
          priceLoaded: false,
        });
      },
    );
  }

  renderProductInformation() {
    const { activeItem } = this.state;
    return (
      <Grid>
        <Grid.Column width={4}>
          <h1>{this.state.title ? this.state.title : ''}</h1>
          <h4>{this.state.description ? this.state.description : ''}</h4>
          <h4>{this.state.price ? `$${this.state.price}` : ''}</h4>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="edit"
              active={activeItem === 'edit'}
              onClick={this.handleItemClick}
            >
              <Button onClick={this.editContent.bind(this)}>
                Edit Content
              </Button>
            </Menu.Item>
            <Menu.Item
              name="price"
              active={activeItem === 'price'}
              onClick={this.handleItemClick}
            >
              <Button onClick={this.editPrice.bind(this)}>Add Price</Button>
            </Menu.Item>
            <Menu.Item
              name="add"
              active={activeItem === 'add'}
              onClick={this.handleItemClick}
            >
              <Button onClick={this.uploadWidget.bind(this)}>Add Image</Button>
            </Menu.Item>
            <Button onClick={this.sendFormToDatabase.bind(this)}>
              Add Item
            </Button>
          </Menu>
        </Grid.Column>
        {this.state.dataLoaded &&
        !this.state.contentSubmit &&
        !this.state.priceLoaded ? (
          <RenderImages
            gallery={this.state.gallery}
            dataLoaded={this.state.dataLoaded}
          />
        ) : (
          ''
        )}
        {this.state.priceLoaded ? (
          <PriceForm onClick={price => this.setPrice(price)} />
        ) : (
          ''
        )}
        {this.state.contentSubmit ? (
          <CreateForm
            handleCreateSubmit={(title, description) =>
              this.handleCreateSubmit(title, description)
            }
          />
        ) : (
          ''
        )}
      </Grid>
    );
  }

  render() {
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        {this.renderProductInformation()}
        {this.state.fireRedirect && <Redirect to={'/admin'} />}
      </div>
    );
  }
}

export default CreatePost;
