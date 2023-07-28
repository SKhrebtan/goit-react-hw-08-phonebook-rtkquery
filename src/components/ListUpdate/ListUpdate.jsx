
import PropTypes from 'prop-types';

const ListUpdate = ({ options, onDeleteContacts }) => {
    return (
        <ul>
            {options.map(({ name, number, id }) => {
                return (
                    <li key={id}>
                        <p>
                            {name}: {number}
                        </p>
                        <button
                            type="button"
                            onClick={() => onDeleteContacts(id)}>
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