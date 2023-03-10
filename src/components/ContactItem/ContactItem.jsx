import { Item } from './ContactItem.styled';
import PropTypes from 'prop-types';

function ContactItem({ deleteRec, name, number }) {
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => deleteRec(name)}>Delete</button>
    </Item>
  );
}
ContactItem.propTypes = {
  deleteRec: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
