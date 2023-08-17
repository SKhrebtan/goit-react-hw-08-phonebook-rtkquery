import { getUser } from 'redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { List, ListItem,  Box, Button  } from '@mui/material';


export const UserMenu = () => {
  const dispatch = useDispatch()
const {name, email} = useSelector(getUser)
  return (
    <Box sx={{ display: 'flex', gap: '20px'}}>
    <List sx={{ display: 'flex', gap: '20px'}}>
      <ListItem disablePadding>Welcome, {name}</ListItem>
      <ListItem disablePadding>{email}</ListItem>
      </List>
      <Button variant="contained" color="error" type="button" onClick={() => dispatch(logOut())}>Log out</Button>
      </Box>
  );
};

//   <div>
//       <p>Welcome, {name}</p>
//   <p>{email}</p>
//    <button type="button" onClick={() => dispatch(logOut())}>
//         Logout
//       </button>
// </div>