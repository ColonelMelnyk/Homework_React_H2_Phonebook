import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { DataContacts } from './ContactsData';
import { ListFilter } from './ListFilter';
import { Form } from './Form';

export class App extends Component {
  state = {
    contacts: [
      {
        id: 'id-1',
        name: 'John Miller',
        number: '123-45-67'
      },
      {
        id: 'id-2',
        name: 'Michael Brown',
        number: '987-65-43'
      },
      {
        id: 'id-3',
        name: 'William Smith',
        number: '456-78-90'
      },
      {
        id: 'id-4',
        name: 'Robert Taylor',
        number: '234-56-78'
      },
      {
        id: 'id-5',
        name: 'James Johnson',
        number: '789-01-23'
      }
    ],
    filter: '',
  };

  onHandleFilters = event => {
    this.setState({ filter: event.target.value });
  };

  addContactHandler = (name, number) => {
    const presentContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (presentContact) {
      return alert(`${name} Is already listed!`);
    }
    const addedContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, addedContact],
    }));
  };

   deleteHandler = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return { contacts: newContacts };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className="app">
        <h2>Phonebook</h2>
        <Form addContactHandler={this.addContactHandler} />

        <h2>Contacts</h2>
        <ListFilter
          onFilterChange={this.onHandleFilters}
          filter={this.state.filter}
        />
        <DataContacts
          contactDel={this.deleteHandler}
          contacts={filteredContacts}
        ></DataContacts>
      </div>
    );
  }
}