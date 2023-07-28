import css from './FilterName.module.css'

const Filter = ({onChange, value}) => {
    return (
         <label>
          Find contacts by name 
            <input type="text"
                name="filter"
                value={value}
                onChange={onChange} />
        </label>
    )
}

export default Filter;