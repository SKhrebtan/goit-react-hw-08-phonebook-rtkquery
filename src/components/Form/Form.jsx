import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Box, TextField } from '@mui/material';
import { useAddContactMutation, useGetContactsQuery } from 'redux/rtkquerySlice';
import  { toast  } from 'react-hot-toast';
import PropTypes from 'prop-types';
import css from './Form.module.css';

function Form() {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();
    const nameFormId = nanoid();
    const numberFormId = nanoid();

    const handleInput = event => {
      const { name, value } = event.currentTarget;
      switch (name) {
        case 'name': setName(value);
          break;
        case 'number': setNumber(value);
          break;
        default:
          console.log('щось пішло не так')
          }
    }

  const  handleSubmit = async event => {
    event.preventDefault();
    const newContact = {
      name,
      number,
      id: await nanoid(),
    }
    if (data.find(contact => contact.name.includes(newContact.name))) {
      return alert('ay, такий контакт вже існує')
    }
    reset();
    try {
      await addContact(newContact);
     
    toast.success('Контакт додано', {
      duration: 4000,
      position: 'top-right',
    })
  
    } catch {
      toast.error('Щось пішло не так')
    }
  
    }
    
    const reset = () => {
      setName('');
      setNumber('');
    }    

    return (
      <form onSubmit={handleSubmit} className={css.form}>
         <Box sx={{ padding: '20px', display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          myid={nameFormId}
         onChange={handleInput}/>
        <TextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
         value={number}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            myid={numberFormId}
          onChange={handleInput}/>
        

          <button type="submit" className={css.btn}>Add contact</button>
        </Box>
                       </form>)
}
    
//       <label htmlFor={nameFormId} className={css.label}>
//         Name
//       <input
//       type="text"
//        name="name"
//       value={name}
//      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             className={css.input}
//         id={nameFormId}
//         onChange={handleInput}
// />
//       </label>
//       <label htmlFor={numberFormId} className={css.label}>
//         Number
//         <input
//         type="tel"
//          name="number"
//          value={number}
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             className={css.input}
//               id={numberFormId}
//           onChange={handleInput}
// />
//       </label>


Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number
}

export default Form;