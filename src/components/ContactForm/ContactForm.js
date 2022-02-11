import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Label,
  ButtonSubmit,
  InputName,
  InputNumber,
} from './ContactForm.styles';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => setName(e.target.value);

  const handleChangeNumber = e => setNumber(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <InputName value={name} onChange={handleChangeName} />
      </Label>
      <Label>
        Number
        <InputNumber value={number} onChange={handleChangeNumber} />
      </Label>
      <ButtonSubmit>Add contact</ButtonSubmit>
    </Form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
