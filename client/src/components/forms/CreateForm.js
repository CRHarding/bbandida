import React, { Component } from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Grid.Column stretched width={12}>
        <Segment>
          <Form
            onSubmit={() =>
              this.props.handleCreateSubmit(
                this.state.title,
                this.state.description,
              )
            }
          >
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
}

export default CreateForm;
