import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import Services from '../services/Services';
import Image from 'react-image-resizer';
import AdminHeader from './AdminHeader';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      dataLoaded: false,
      title: '',
      description: '',
      titleSubmit: false,
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
    Services.
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
        _this.setState({ gallery: _this.state.gallery.concat(result) });
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
        _this.setState({ gallery: _this.state.gallery.concat(result) });
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
            <Button onClick={this.addMainUploadWidget.bind(this)}>
              Add Main Image
            </Button>
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

  render() {
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        {this.state.contentSubmit
          ? this.renderProductInformation()
          : this.renderCreateForm()}
      </div>
    );
  }
}

export default CreatePost;
