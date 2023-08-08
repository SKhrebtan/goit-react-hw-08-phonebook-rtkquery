import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Form from './Form'
import ListUpdate from './ListUpdate/ListUpdate'
import  Filter from './FilterName/FilterName'

function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue)
  
  useEffect(() => {
    return window.localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])
return [state, setState]
}

function App () {
  const [contacts, setContacts] = useLocalStorage('contacts',[]);
  const [filter, setFilter] = useState('');
  
  const addUser = ( name, number ) => {

    if (contacts.find(contact => contact.name.includes(name))) {
      alert('Такий контакт вже існує');
      return
    }
      const contact = {
      name,
      number,
      id: nanoid(),
    }
    setContacts( contacts => [...contacts, contact])
    }

   const changeFilter = (event) => {
              setFilter(event.currentTarget.value)
    
  }
const normalizedFilter = filter.toLowerCase();
  
  const filteredContacts = useMemo(() => {
       return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
 },[normalizedFilter, contacts])
    
  const deleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id)
        )}  
    
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={addUser} />
        <h2>Contacts</h2>
        <Filter onChange={changeFilter} value={filter} />
        <ListUpdate options={filteredContacts} onDeleteContacts={deleteContact} />
      </div>
    )       
               };

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array
}

export default App;