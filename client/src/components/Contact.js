import React, { Component } from 'react';
import Header from './static/Header';
import { Message } from 'semantic-ui-react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Services from './services/Services';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      sent: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.emailSubmit = this.emailSubmit.bind(this);
  }

  emailSubmit(e) {
    e.preventDefault();
    Services.contactSubmit(this.state)
      .then(contact => {
        console.log('message sent', contact.data.msg);
        if (contact.data.msg === 'success')
          this.setState({
            sent: true,
          });
      })
      .catch(err => {
        console.log('error sending message', err);
      });
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
      <div>
        <Header />
        <br />
        <br />
        <Container>
          <h1 className="contact">Contact</h1>
          <br/>
          {this.state.sent ? (
            <Message
              success
              header="Form Sent"
              content="Reply will be sent in a timely manner, Thank You"
            />
          ) : (
            <Form onSubmit={this.emailSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input name="name"
                       onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input name="email"
                       type="email"
                       onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="subject">Subject</Label>
                <Input name="subject"
                       onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="text">Message</Label>
                <Input name="message"
                       type="textarea"
                       onChange={this.handleChange}
                />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>

            // <Form onSubmit={this.emailSubmit} success>
            //   <Form.Input
            //     label="Name"
            //     name="name"
            //     onChange={this.handleChange}
            //   />
            //   <Form.Input
            //     type="email"
            //     label="Email"
            //     name="email"
            //     onChange={this.handleChange}
            //   />
            //   <Form.Input
            //     label="Subject"
            //     name="subject"
            //     onChange={this.handleChange}
            //   />
            //   <Form.Input
            //     type="textarea"
            //     label="Message"
            //     name="message"
            //     onChange={this.handleChange}
            //   />
            //   <Form.Button primary>Send</Form.Button>
            // </Form>
          )}
        </Container>
      </div>
    );
  }
}
