import css from './ListUpdate.module.css';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/store';
import PropTypes from 'prop-types';

const ListUpdate = ({ options, onDeleteContacts }) => {
    const dispatch = useDispatch();
    return (
        <ul className={css.list}>
            {options.map(({ name, number, id }) => {
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