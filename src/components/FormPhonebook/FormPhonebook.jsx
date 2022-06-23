import React, { Component } from 'react';

class FormPhonebook extends Component {
  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmitFormPhonebook({
      name: e.target.name.value,
      number: e.target.number.value,
    });
    e.target.reset();
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>Phonebook</p>
        <label htmlFor="inputName">Name</label>
        <input
          type="text"
          id="inputName"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="inputNumber">Number</label>
        <input
          type="tel"
          id="inputNumber"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default FormPhonebook;
