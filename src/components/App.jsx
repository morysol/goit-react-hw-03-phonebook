import React from 'react';
import { nanoid } from 'nanoid';

// import Input from './Input/Input';
// import AddButton from './AddButton/AddButton';
import ContactsList from './ContactsList/ContactsList';
import FormPhonebook from './FormPhonebook/FormPhonebook';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  formSubmitedContacts = ({ name, number }) => {
    this.setState({
      name,
      contacts: [...this.state.contacts, { id: nanoid(), name, number }],
    });
  };

  onSearchChange = e => {
    this.setState({ filter: e.target.value });
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
        <FormPhonebook
          onSubmitFormPhonebook={this.formSubmitedContacts}
        ></FormPhonebook>
        <ContactsList
          contacts={this.state.contacts}
          onSearchChange={this.onSearchChange}
        ></ContactsList>
      </div>
    );
  }
}

export default App;
