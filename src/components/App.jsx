import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';
import Form from './Form'
import ListUpdate from './ListUpdate/ListUpdate';
import Filter from './FilterName/FilterName';
import { getContacts } from '../redux/myContactsSlice/myContactsSlice';
import { getFilter } from '../redux/myFilterSlice/myFilterSlice';

function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter)
   
  const normalizedFilter = filter.toLowerCase();
  
  const filteredContacts = useMemo(() => {
    if (contacts) { 
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }
},[normalizedFilter, contacts])
    
    
    return (
      <div>
        <h1>Phonebook</h1>
        <Form/>
        <h2>Contacts</h2>
        <Filter/>
        <ListUpdate options={filteredContacts}/>
      </div>
    )       
               };

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array
}

export default App;

  // <h1>Phonebook</h1>
  //       <Form onSubmit={addUser} />
  //       <h2>Contacts</h2>
  //       <Filter onChange={changeFilter} value={filter} />
  //       <ListUpdate options={filteredContacts} onDeleteContacts={deleteContact} />