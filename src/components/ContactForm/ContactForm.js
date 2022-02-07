import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Label,
  ButtonSubmit,
  InputName,
  InputNumber,
} from './ContactForm.styles';

export default class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addContact(this.state);
    this.resetForm();
  };

  resetForm = () => this.setState({ name: '', number: '' });

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <InputName value={name} onChange={this.handleChange} />
        </Label>
        <Label>
          Number
          <InputNumber value={number} onChange={this.handleChange} />
        </Label>
        <ButtonSubmit>Add contact</ButtonSubmit>
      </Form>
    );
  }
}
