import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const IsLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      {IsLoggedIn && (<NavLink to="/contacts">
          Contacts
      </NavLink>)}
      
     
    </nav>
  );
};