import React, { Component } from 'react';
import './ContactsListItem.module.css';

class ContactsListItem extends Component {
  render() {
    return (
      <li key={this.props.id}>
        {' '}
        {this.props.name}: {this.props.number}
      </li>
    );
  }
}
export default ContactsListItem;
