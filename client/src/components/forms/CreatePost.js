import React, { Component } from 'react';
import {
  Form,
  Grid,
  Button,
  Menu,
  Segment,
  Image,
  Input,
  Label,
} from 'semantic-ui-react';
import { Redirect } from 'react-router';
import Services from '../services/Services';
import AdminHeader from './AdminHeader';
import { CloudinaryContext, Transformation } from 'cloudinary-react';

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
      mainImage: '',
      price: 0,
      dataLoaded: false,
      titleSubmit: false,
      fireRedirect: false,
      uploadMain: false,
      priceLoaded: false,
      activeItem: 'edit',
    };
    this.renderSingleAdded = this.renderSingleAdded.bind(this);
    this.uploadWidget = this.uploadWidget.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleCreateSubmit() {
    const { title, description } = this.state;
    this.setState({
      contentSubmit: true,
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
        console.log('successfuly added product-->', product);
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
        tags: `${_this.state.title}`,
      },
      function(error, result) {
        _this.setState({
          gallery: _this.state.gallery.concat(result),
          productImages: _this.state.productImages.concat(result[0].secure_url),
          url: result[0].secure_url,
          dataLoaded: true,
          tags: result[0].tags,
        });
      },
    );
  }

  addMainUploadWidget(image) {
    let _this = this;
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'bbandida',
        upload_preset: 'q0zswxx7',
        tags: [`${_this.state.title}`, 'main'],
      },
      function(error, result) {
        console.log(result);
        _this.setState({
          gallery: _this.state.gallery.concat(result),
          mainImage: result[0].secure_url,
          url: result[0].secure_url,
          dataLoaded: true,
          uploadMain: true,
          tags: result[0].tags,
        });
      },
    );
  }

  renderSingleAdded() {
    return <Image publicId={this.state.url} />;
  }

  editContent() {
    this.setState({
      contentSubmit: false,
    });
  }

  editPrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  renderPriceForm() {
    this.setState({ priceLoaded: !this.state.priceLoaded });
  }

  renderProductInformation() {
    const { activeItem } = this.state;
    return (
      <Grid>
        <Grid.Column width={4}>
          <h1>{this.state.title}</h1>
          <h4>{this.state.description}</h4>
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
              <Input
                action={{
                  color: 'teal',
                  labelPosition: 'left',
                  icon: 'cart',
                  content: 'Price',
                }}
                actionPosition="left"
                placeHolder="Price"
                defaultValue="9.99"
              />
              <Button onClick={this.editPrice.bind(this)}>Add Price</Button>
            </Menu.Item>
            <Menu.Item
              name="add"
              active={activeItem === 'add'}
              onClick={this.handleItemClick}
            >
              <Button onClick={this.uploadWidget.bind(this)}>Add Image</Button>
            </Menu.Item>
            {this.state.uploadMain ? (
              ''
            ) : (
              <Menu.Item
                name="addMain"
                active={activeItem === 'addMain'}
                onClick={this.handleItemClick}
              >
                <Button onClick={this.addMainUploadWidget.bind(this)}>
                  Add Main Image
                </Button>
              </Menu.Item>
            )}
            <Button onClick={this.sendFormToDatabase.bind(this)}>Finish</Button>
          </Menu>
        </Grid.Column>
        {this.state.dataLoaded ? this.renderImages() : ''}
        {this.state.priceLoaded ? this.renderPriceForm() : ''}
      </Grid>
    );
  }

  renderCreateForm() {
    return (
      <div>
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
      </div>
    );
  }

  renderImages() {
    console.log(this.state.gallery);
    return (
      <Grid.Column stretched width={12}>
        <Segment>
          {this.state.gallery.map(data => {
            console.log(data.public_id, this.state.mainImage);
            return (
              <div>
                <Image
                  label={{
                    as: 'a',
                    corner: 'left',
                    icon: `${
                      data.secure_url === this.state.mainImage
                        ? 'toggle on'
                        : 'toggle off'
                    }`,
                  }}
                  src={data.secure_url}
                  size="medium"
                  bordered
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
        {this.state.contentSubmit
          ? this.renderProductInformation()
          : this.renderCreateForm()}
        {this.state.fireRedirect && <Redirect to={'/admin'} />}
      </div>
    );
  }
}

export default CreatePost;
