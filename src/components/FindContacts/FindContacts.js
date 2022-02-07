import PropTypes from 'prop-types';
import { Label, Filter } from './FindContacts.styles';

export default function FindContacts({ filter, onChange }) {
  return (
    <Label>
      Find contacts by name
      <Filter value={filter} onChange={onChange} />
    </Label>
  );
}

FindContacts.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
