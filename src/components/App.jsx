import React from 'react';
import { nanoid } from 'nanoid';

// import Input from './Input/Input';
// import AddButton from './AddButton/AddButton';
import ContactsList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import SearchFilter from './SearchFilter/SearchFilter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitedContacts = ({ name, number }) => {
    let isExists = false;
    this.state.contacts.forEach(el => {
      if (el.name === name) {
        isExists = true;
      }
    });

    if (isExists) {
      alert(` ${window.location.host} says: ${name}  is alredy in contacts.`);
      return;
    }

    this.setState({
      contacts: [...this.state.contacts, { id: nanoid(), name, number }],
    });
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  onDeleteContact = id => {
    // console.log('zzzzzzzzz');
    // this.state.contacts.filter(contact => contact.id === id);
    // console.log('id = ', id);

    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    // console.log(newContacts);
    this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          onSubmitContactForm={this.formSubmitedContacts}
        ></ContactForm>
        <h2>Contacts</h2>
        <SearchFilter
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}
        ></SearchFilter>
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
          removeContact={this.onDeleteContact}
        ></ContactsList>
      </div>
    );
  }
}

export default App;
