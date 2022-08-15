import React from 'react';
import { nanoid } from 'nanoid';
//
import { ContactsList } from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import { SearchFilter } from './SearchFilter/SearchFilter';
//
import { load, save } from '../tools/storage/storage';
import { Container } from './App.styled';

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

  componentDidMount() {
    const localContacts = load('contacts');
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
    // console.dir(this.state.contacts);
    // console.log('prev  ', prevState.contacts);
    // console.log('curr  ', this.state.contacts);
    // console.log(prevState.contacts === this.state.contacts);

    if (prevState.contacts !== this.state.contacts) {
      save('contacts', this.state.contacts);
    }
  }

  isContactExists = (list, value) => {
    let state = false;
    list.forEach(item => {
      if (item.name === value) {
        state = true;
      }
    });
    return state;
  };

  formSubmitedContacts = ({ name, number }) => {
    const ifExist = this.isContactExists(this.state.contacts, name);

    if (ifExist) {
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
      <Container>
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
          // contacts={this.state.contacts}
          // filter={this.state.filter}
          filteredContacts={this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
          )}
          removeContact={this.onDeleteContact}
        ></ContactsList>
      </Container>
    );
  }
}

export default App;
