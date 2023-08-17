import css from './FilterName.module.css';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/myFilterSlice/myFilterSlice';
import { useMySelectors } from 'components/hooks';


const Filter = () => {
    const {filterValue} = useMySelectors();
    
    const dispatch = useDispatch();
    const changeFilter = (event) => dispatch(filter(event.currentTarget.value));

       return (
         <label className={css.filter_label}>
          Find contacts by name 
            <input type="text"
                name="filter"
                value={filterValue}
                onChange={changeFilter}
                className={css.input}
            />
        </label>
    )
}

export default Filter;