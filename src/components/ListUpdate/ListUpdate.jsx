import css from './ListUpdate.module.css';
import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk, deleteContactThunk } from 'redux/contactsThunk/contactsThunk';
import { getContacts } from 'redux/auth/selectors';
import { getFilter } from '../../redux/myFilterSlice/myFilterSlice';
import PropTypes from 'prop-types';

const ListUpdate = () => {
    const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter)
   useEffect(() => {
        dispatch(fetchContactsThunk());
    }, [dispatch]);
  const normalizedFilter = filter.toLowerCase();
  
  const filteredContacts = useMemo(() => {
    if (items) { 
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }
},[normalizedFilter, items])
    
    return (
        <ul className={css.list}>
            {items.map(({ name, number, id }) => {
                return (
                    <li key={id} className={css.item}>
                        <p className={css.text}>
                            {name}: {number}
                        </p>
                        <button
                            type="button"
                            onClick={() => dispatch(deleteContactThunk(id))}
                            className={css.listBtn}                            >
                            Delete</button>
                    </li>
                )
            })}
        </ul>
    )
};

ListUpdate.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    id: PropTypes.string
}

export default ListUpdate;