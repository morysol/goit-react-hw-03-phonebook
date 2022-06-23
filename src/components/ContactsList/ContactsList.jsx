import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

class ContactsList extends Component {
  // console.log('contacts ------', contacts);
  state = {
    searchValue: '',
  };

  // idInputSearch = nanoid();

  onInputChange = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(this.state.searchValue);
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
    // console.log(this.state.searchValue);
  };

  render() {
    return (
      <div>
        <p>Statistics</p>
        <label htmlFor={this.idInputSearch}>Find contacts by name</label>
        <input
          onChange={this.onInputChange}
          // onChange={this.props.onSearchChange}
          id={this.idInputSearch}
          type="text"
          name="searchValue"
          value={this.state.searchValue}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ul>
          {this.props.contacts.map(
            contact =>
              contact.name
                .toLowerCase()
                .includes(this.state.searchValue.toLowerCase()) && (
                <li key={contact.id}>
                  {' '}
                  {contact.name}: {contact.number}
                </li>
              )
          )}
        </ul>
      </div>
    );
  }
}

export default ContactsList;
