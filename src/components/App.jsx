import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Form from './Form'
import ListUpdate from './ListUpdate/ListUpdate'
import  Filter from './FilterName/FilterName'

class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }
  
  LOCAL_DATA = 'contacts';

   componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem(this.LOCAL_DATA))
    if (parsedContacts) {
       this.setState({ contacts: parsedContacts })
    }   
  }
    componentDidUpdate(prevPropes, prevState) {
    const { contacts } = this.state
    if (prevState.contacts !== contacts) {
      localStorage.setItem(this.LOCAL_DATA, JSON.stringify(contacts))
    }
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

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array
}

export default App;