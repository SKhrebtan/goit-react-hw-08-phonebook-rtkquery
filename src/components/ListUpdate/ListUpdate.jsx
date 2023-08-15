import css from './ListUpdate.module.css';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../redux/myContactsSlice/myContactsSlice';
import { getContacts } from '../../redux/myContactsSlice/myContactsSlice';
import { getFilter } from '../../redux/myFilterSlice/myFilterSlice';
import PropTypes from 'prop-types';

const ListUpdate = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter)
   
  const normalizedFilter = filter.toLowerCase();
  
  const filteredContacts = useMemo(() => {
    if (contacts) { 
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }
},[normalizedFilter, contacts])
    const dispatch = useDispatch();
    return (
        <ul className={css.list}>
            {filteredContacts.map(({ name, number, id }) => {
                return (
                    <li key={id} className={css.item}>
                        <p className={css.text}>
                            {name}: {number}
                        </p>
                        <button
                            type="button"
                            onClick={() => dispatch(remove(id))}
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