import React, { Component } from 'react';
import s from './ContactsListItem.module.css';

class ContactsListItem extends Component {
  render() {
    // console.log(this.props.removeContact);
    // console.log(this.props.key);
    return (
      <li key={this.props.id}>
        {' '}
        {this.props.name}: {this.props.number}
        <button
          className={s.button}
          type="button"
          onClick={() => {
            this.props.removeContact(this.props.id);
          }}
        >
          delete
        </button>
      </li>
    );
  }
}
export default ContactsListItem;
