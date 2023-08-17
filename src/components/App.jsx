import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import  Register from 'pages/Register';
import  Login from 'pages/Login';
import  Contacts from 'pages/Contacts'
import PropTypes from 'prop-types';
import { refreshUser } from 'redux/auth/operations';


function App() {
  const dispatch = useDispatch();
       useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
     </Routes>
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