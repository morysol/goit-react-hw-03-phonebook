import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import { BtnDelete } from './ContactsListItem.styled';

class ContactsListItem extends Component {
  static propTypes = {
    removeContact: PropTypes.func.isRequired,
  };
  render() {
    // console.log(this.props.removeContact);
    // console.log(this.props.key);
    return (
      <li key={this.props.id}>
        {' '}
        {this.props.name}: {this.props.number}
        <BtnDelete
          type="button"
          onClick={() => {
            this.props.removeContact(this.props.id);
          }}
        >
          delete
        </BtnDelete>
      </li>
    );
  }
}
export default ContactsListItem;
