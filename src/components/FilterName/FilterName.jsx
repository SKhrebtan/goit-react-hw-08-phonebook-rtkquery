import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/myFilterSlice/myFilterSlice';
import { getFilter } from 'redux/auth/selectors';
import { TextField } from '@mui/material';


const Filter = () => {
    const filterValue = useSelector(getFilter);
    const dispatch = useDispatch();
    const changeFilter = (event) => dispatch(filter(event.currentTarget.value));

       return  <TextField id="standard-basic" label="Find contacts by name" variant="standard" 
                     type="text"
                    name="filter"
                    value={filterValue}
                 onChange={changeFilter}
                     sx={{marginLeft: '20px'}}
                />
                
    
}

export default Filter;