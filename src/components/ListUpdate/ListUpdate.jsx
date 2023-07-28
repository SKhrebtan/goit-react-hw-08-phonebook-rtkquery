
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

export default ListUpdate;