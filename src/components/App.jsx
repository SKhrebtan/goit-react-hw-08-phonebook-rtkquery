import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';
import Form from './Form'
import ListUpdate from './ListUpdate/ListUpdate';
import Filter from './FilterName/FilterName';

// function useLocalStorage(key, defaultValue) {
//   const [state, setState] = useState(() => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue)
  
//   useEffect(() => {
//     return window.localStorage.setItem(key, JSON.stringify(state))
//   }, [state, key])
// return [state, setState]
// }

function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.value )
 
const normalizedFilter = filter.toLowerCase();
  
  const filteredContacts = useMemo(() => {
       return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
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