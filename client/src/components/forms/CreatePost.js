import React, { Component } from 'react';
import {
  Form,
  Grid,
  Button,
  Menu,
  Segment,
  Image,
  Input,
} from 'semantic-ui-react';
import { Redirect } from 'react-router';
import Services from '../services/Services';
import AdminHeader from './AdminHeader';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      productImages: [],
      tags: [],
      title: '',
      description: '',
      url: '',
      mainImage: [],
      price: 9.99,
      dataLoaded: false,
      titleSubmit: false,
      fireRedirect: false,
      uploadMain: false,
      priceLoaded: false,
      activeItem: 'edit',
      contentSubmit: true,
    };
    this.renderSingleAdded = this.renderSingleAdded.bind(this);
    this.uploadWidget = this.uploadWidget.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.handleToggleMainClick = this.handleToggleMainClick.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.setPrice = this.setPrice.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleCreateSubmit() {
    this.setState({
      title: this.state.title,
      description: this.state.description,
      contentSubmit: !this.state.contentSubmit,
    });
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

  handleToggleMainClick(image) {
    let newMainImageState = [];

    if (this.state.mainImage.includes(image.secure_url)) {
      const index = this.state.mainImage.indexOf(image.secure_url);
      newMainImageState = this.state.mainImage;
      console.log('before--->', newMainImageState);
      if (newMainImageState.length === 1) {
        newMainImageState.pop();
        console.log('.length === 1--->', newMainImageState);
      } else {
        newMainImageState.splice(1, index);
        console.log('.splice--->', newMainImageState);
      }
    } else {
      newMainImageState = this.state.mainImage;
      newMainImageState.push(image.secure_url);
    }

    console.log('after--->', newMainImageState);
    this.setState({ mainImage: newMainImageState });
  }

  renderSingleAdded() {
    return <Image publicId={this.state.url} />;
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
      price: this.state.price,
    });
  }

  updatePrice(e) {
    console.log(e.target.value);
    this.setState({
      price: e.target.value,
    });
  }

  setPrice(e) {
    console.log(e.target.value);
    this.setState({
      price: this.state.price,
      priceLoaded: false,
    });
  }

  renderPriceForm() {
    return (
      <Grid.Column stretched width={12}>
        <Segment>
          <Form>
            <Input
              type="number"
              defaultValue="9.99"
              onChange={this.updatePrice}
            />
          </Form>
          <Form.Button onClick={this.setPrice}>Edit Price</Form.Button>
        </Segment>
      </Grid.Column>
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
            <Button onClick={this.sendFormToDatabase.bind(this)}>Finish</Button>
          </Menu>
        </Grid.Column>
        {this.state.dataLoaded &&
        !this.state.contentSubmit &&
        !this.state.priceLoaded
          ? this.renderImages()
          : ''}
        {this.state.priceLoaded ? this.renderPriceForm() : ''}
        {this.state.contentSubmit ? this.renderCreateForm() : ''}
      </Grid>
    );
  }

  renderCreateForm() {
    return (
      <Grid.Column stretched width={12}>
        <Segment>
          <Form onSubmit={this.handleCreateSubmit}>
            <Form.Input
              fluid
              label="Please enter a name for this post..."
              name="title"
              placeholder="Name"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Form.TextArea
              label="About"
              name="description"
              value={this.state.description}
              placeholder="Tell us about this..."
              onChange={this.handleChange}
            />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Segment>
      </Grid.Column>
    );
  }

  renderImages() {
    return (
      <Grid.Column stretched width={12}>
        <Segment>
          {this.state.gallery.map(data => {
            console.log(data.secure_url, this.state.mainImage);
            return (
              <div>
                <Image
                  label={{
                    as: 'a',
                    corner: 'left',
                    icon: `${
                      this.state.mainImage.includes(data.secure_url)
                        ? 'toggle on'
                        : 'toggle off'
                    }`,
                  }}
                  src={data.secure_url}
                  size="medium"
                  bordered
                  onClick={() => this.handleToggleMainClick(data)}
                />
              </div>
            );
          })}
          {this.state.dataLoaded ? this.renderSingleAdded() : ''}
        </Segment>
      </Grid.Column>
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
