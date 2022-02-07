import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  margin: auto;
  padding: 15px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const InputName = styled.input.attrs(() => ({
  type: 'text',
  name: 'name',
  autoComplete: 'off',
  required: true,
  pattern: `^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$`,
  title: `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`,
}))`
  display: block;
  margin-top: 5px;
`;

const InputNumber = styled.input.attrs(() => ({
  type: 'tel',
  name: 'number',
  autoComplete: 'off',
  required: true,
  pattern: `\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}`,
  title: `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`,
}))`
  display: block;
  margin-top: 5px;
`;

const ButtonSubmit = styled.button.attrs(() => ({
  type: 'submit',
}))`
  border: none;
  background-color: aqua;
  border-radius: 8px;
  padding: 5px 15px;
`;

export { Form, Label, InputName, InputNumber, ButtonSubmit };
