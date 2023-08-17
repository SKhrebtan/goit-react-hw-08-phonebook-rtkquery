import { NavLink } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
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

export const AuthNav = () => {
  return (
    <List disablePadding sx={{ display: 'flex', gap: '20px' }}>
      <ListItem disablePadding><StyledLink  to="/register">
        Register
      </StyledLink></ListItem>
      <ListItem disablePadding>  <StyledLink  to="/login">
        Log In
      </StyledLink></ListItem>
      </List>
      
    
   
  );
};