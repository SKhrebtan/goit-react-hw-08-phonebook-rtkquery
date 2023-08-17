import { getUser } from 'redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
export const UserMenu = () => {
  const dispatch = useDispatch()
const {name, email} = useSelector(getUser)
  return (
    <div>
      <p>Welcome, {name}</p>
  <p>{email}</p>
   <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
</div>
  );
};