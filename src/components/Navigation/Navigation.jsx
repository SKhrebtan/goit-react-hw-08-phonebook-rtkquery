import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { List, ListItem} from '@mui/material';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  color: white;
  
  &.active {
    color: orange;
  }
  &:hover{
   color: orange;
  }
`;

export const Navigation = () => {
  const IsLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <List disablePadding sx={{ display: 'flex', gap: '20px' }}>
        <ListItem disablePadding><StyledLink to="/" >Home</StyledLink></ListItem>
      <ListItem disablePadding> {IsLoggedIn && (<StyledLink to="/contacts">
          Contacts
      </StyledLink>)}</ListItem>
     
      </List>
     
    </nav>
  );
};