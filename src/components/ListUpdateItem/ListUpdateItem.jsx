import css from '../ListUpdate/ListUpdate.module.css';
import {  useDeleteContactMutation } from 'redux/rtkquerySlice';
import { toast } from 'react-hot-toast';

export const ListUpdateItem = ({ contact: { id, name, number } }) => {
    const [deleteContact, {  isLoading }] = useDeleteContactMutation();

    return (
        <li key={id} className={css.item}>
                        <p className={css.text}>
                            {name}: {number}
                        </p>
                        <button
                            type="button"
                onClick={() => { deleteContact(id); toast.success('Контакт видалено')}}
                            className={css.listBtn}
                            disabled={isLoading}>
                            {isLoading ? 'Deleting...' : 'Delete'}</button>
                    </li>
    )
}