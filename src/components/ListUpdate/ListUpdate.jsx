import css from './ListUpdate.module.css';
import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsAPI } from 'redux/contactsThunk';
import { getContacts, getFilter } from 'redux/auth/selectors';

const ListUpdate = () => {
    const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter)
   useEffect(() => {
        dispatch(contactsAPI.fetchContactsThunk());
    }, [dispatch]);
  const normalizedFilter = filter.toLowerCase();
  
  const filteredContacts = useMemo(() => {
    if (items) { 
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }
},[normalizedFilter, items])
    
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
   <ul className={css.list}>
            {filteredContacts.map(({ name, number, id }) => {
                return (
                    <li key={id} className={css.item}>
                        <p className={css.text}>
                            {name}: {number}
                        </p>
                        <button
                            type="button"
                            onClick={() => dispatch(contactsAPI.deleteContactThunk(id))}
                            className={css.listBtn}                            >
                            Delete</button>
                    </li>
                )
            })}
            </ul>
            {error && <h1>Something went wrong: {error.message}</h1>}
        </div>
     
    )
};

export default ListUpdate;