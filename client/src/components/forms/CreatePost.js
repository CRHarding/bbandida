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
    this.handleToggleMainClick = this.handleToggleMainClick.bind(this);
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
        tags: 'photos',
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

  handleToggleMainClick(image) {
    console.log(image);
    console.log(this.state.mainImage);
    let newMainImageState = [];
    if (this.state.mainImage.includes(image.secure_url)) {
      const index = this.state.mainImage.indexOf(image.secure_url);
      newMainImageState = this.state.mainImage;
      if (newMainImageState.length() === 1) {
        newMainImageState.pop();
      } else {
        newMainImageState.splice(1, index);
      }

      console.log(newMainImageState);
    } else {
      newMainImageState = this.state.mainImage;
      newMainImageState.push(image.secure_url);
    }

    this.setState({ mainImage: newMainImageState });
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
      priceLoaded: !this.state.priceLoaded,
    });
  }

  renderPriceForm() {
    return (
      <Input
        action={{
          color: 'teal',
          labelPosition: 'left',
          icon: 'cart',
          content: 'Price',
        }}
        actionPosition="left"
        placeholder="Price"
        defaultValue="9.99"
      />
    );
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
<<<<<<< HEAD
              onClick={this.handleItemClick} 
            >
            <Input action={{ color: 'teal', labelPosition: 'left', icon: 'cart', content: 'Price' }} actionPosition='left' placeHolder='Price' defaultValue='9.99'/>
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
=======
>>>>>>> b21181563a394464514c09b57b309fc6da0fd674
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
    return (
      <Grid.Column stretched width={12}>
        <Segment>
          {this.state.gallery.map(data => {
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
        {this.state.contentSubmit
          ? this.renderProductInformation()
          : this.renderCreateForm()}
        {this.state.fireRedirect && <Redirect to={'/admin'} />}
      </div>
    );
  }
}

export default CreatePost;
