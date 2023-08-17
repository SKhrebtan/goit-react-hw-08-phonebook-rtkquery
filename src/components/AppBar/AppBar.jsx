import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <header style={{ display: 'flex' }}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
           
    </header>
  );
};