import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import styled from 'styled-components';
import s from './App.module.css';
import shortid from 'shortid';
import ContactForm from '../ContactForm';
import Contacts from '../Contacts';
import FindContacts from '../FindContacts';
import Section from '../Section';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (!contacts) return;

    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (prevContacts.length !== nextContacts.length) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = ({ name, number }) => {
    const isContact = this.checkContact(this.state.contacts, name);

    if (isContact) return;

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const optimizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(optimizedFilter)
    );
  };

  checkContact = (contacts, name) => {
    const normalizedName = name.toLowerCase();
    const notify = () => toast.error(`${name} is already in contacts.`);
    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isContact) {
      notify();
      return true;
    }
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <Section>
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <FindContacts filter={filter} onChange={this.getFilter} />
          <Contacts
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
        />
      </div>
    );
  }
}
