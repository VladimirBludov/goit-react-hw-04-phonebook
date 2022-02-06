import PropTypes from 'prop-types';
import { Container } from './Contacts.styles';
import ItemContact from './ItemContact';

export default function Contacts({ contacts, deleteContact }) {
  return (
    <Container>
      {contacts.map(({ id, name, number }, index) => {
        return (
          <ItemContact
            key={id}
            name={name}
            number={number}
            index={index}
            deleteContact={() => deleteContact(id)}
          />
        );
      })}
    </Container>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
