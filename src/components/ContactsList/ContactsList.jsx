import PropTypes from 'prop-types';
//
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

export const ContactsList = props => {
  return (
    <div>
      <ul>
        {props.filteredContacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            removeContact={props.removeContact}
          />
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
};
