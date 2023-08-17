import { useDispatch } from 'react-redux';
import { filter } from 'redux/myFilterSlice/myFilterSlice';
import { useMySelectors } from 'components/hooks';
import { TextField } from '@mui/material';


const Filter = () => {
    const {filterValue} = useMySelectors();
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