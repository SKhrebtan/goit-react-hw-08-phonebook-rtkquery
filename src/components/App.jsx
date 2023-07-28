import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form'
import ListUpdate from './ListUpdate/ListUpdate'
import  Filter from './FilterName/FilterName'

class App extends Component {

  state = {
    contacts: [],
    filter: '',
   }
  
  addUser = ({ name, number }) => {

    if (this.state.contacts.find(contact => contact.name.includes(name))) {
      alert('Такий контакт вже існує');
      return
    }
      const contact = {
      name,
      number,
      id: nanoid(),
    }
    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }));
  }

   changeFilter = (event) => {
      this.setState({
        filter: event.currentTarget.value,
      })
  }

  getContactBySearch = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }

  deleteContact = id => {
    this.setState(({contacts}) => ({
    contacts: contacts.filter(contact => contact.id !== id)
        }))
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getContactBySearch();
    
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addUser} />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} value={filter} />
        <ListUpdate options={filteredContacts} onDeleteContacts={this.deleteContact} />
      </div>
    )       
               }
};

export default App;


{/* <Filter onChange={this.changeFilter} value={filter} /> */}