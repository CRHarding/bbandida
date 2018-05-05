import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import Services from '../services/Services';
import Image from 'react-image-resizer';
import AdminHeader from './AdminHeader';
import { CloudinaryContext, Transformation } from 'cloudinary-react';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      productImages: [],
      dataLoaded: false,
      title: '',
      description: '',
      titleSubmit: false,
      fireRedirect: false,
      url: '',
      uploadMain: false,
      mainImage: '',
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

  sendFormToDatabase() {
    const product = {
      title: this.state.title,
      description: this.state.description,
      contributors: [],
      images: this.state.productImages,
      mainImage: this.state.mainImage,
    };
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
          url: result.secure_url,
          dataLoaded: true,
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
        _this.setState({
          gallery: _this.state.gallery.concat(result),
          mainImage: result.public_id,
          url: result.secure_url,
          dataLoaded: true,
          uploadMain: true,
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

  renderProductInformation() {
    return (
      <Grid>
        <Grid.Column width={5}>
          <h1>{this.state.title}</h1>
          <h4>{this.state.description}</h4>
          <Button onClick={this.editContent.bind(this)}>Edit Content</Button>
        </Grid.Column>
        <Grid.Column width={6}>
          <h1>{this.state.title}</h1>
          <div className="upload">
            <Button onClick={this.uploadWidget.bind(this)}>Add Image</Button>
            {this.state.uploadMain ? (
              ''
            ) : (
              <Button onClick={this.addMainUploadWidget.bind(this)}>
                Add Main Image
              </Button>
            )}
          </div>
        </Grid.Column>
        <Button onClick={this.sendFormToDatabase.bind(this)}>Finish</Button>
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
      <div className="ui centered three column grid">
        {this.state.gallery.map(data => {
          return (
            <div className="column" key={data.public_id}>
              <a
                target="_blank"
                href={`https://res.cloudinary.com/bbandida/image/upload/${
                  data.public_id
                }.jpg`}
              >
                <Image src={data.secure_url} width={240} height={240} />
              </a>
              {data.tags.includes('main') ? <div>Main Image</div> : ''}
            </div>
          );
        })}
        {this.state.dataLoaded ? this.renderSingleAdded() : ''}
      </div>
    );
  }

  render() {
    console.log(this.state.dataLoaded);
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        {this.state.contentSubmit
          ? this.renderProductInformation()
          : this.renderCreateForm()}
        {this.state.dataLoaded ? this.renderImages() : ''}
        {this.state.fireRedirect && <Redirect to={'/admin'} />}
      </div>
    );
  }
}

export default CreatePost;
