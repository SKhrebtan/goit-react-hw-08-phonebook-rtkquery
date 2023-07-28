import css from './FilterName.module.css'
import PropTypes from 'prop-types';

const Filter = ({onChange, value}) => {
    return (
         <label className={css.filter_label}>
          Find contacts by name 
            <input type="text"
                name="filter"
                value={value}
                onChange={onChange}
                className={css.input}
            />
        </label>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Filter;