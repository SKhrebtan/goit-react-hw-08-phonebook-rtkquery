import css from './ListUpdate.module.css';
import { useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  getFilter } from 'redux/auth/selectors';
import { useGetContactsQuery} from 'redux/rtkquerySlice';
import { ListUpdateItem } from 'components/ListUpdateItem/ListUpdateItem';

const ListUpdate = () => {
    const filter = useSelector(getFilter)    
    const { data, refetch, error, isLoading } = useGetContactsQuery();
    
     useEffect(() => {
    refetch();
  }, [refetch]);
  const normalizedFilter = filter.toLowerCase();
  
  const filteredContacts = useMemo(() => {
    if (data) { 
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }
},[normalizedFilter, data])
    
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
   <ul className={css.list}>
                {data && filteredContacts.map(contact => <ListUpdateItem key={contact.id} contact={contact} />)}
            </ul>
            {error && <h1>Something went wrong: {error.message}</h1>}
        </div>
     
    )
};

export default ListUpdate;