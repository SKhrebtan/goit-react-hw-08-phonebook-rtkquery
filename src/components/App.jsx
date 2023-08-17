import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { PrivateRoute } from 'components/PrivateRoute'
import { RestrictedRoute } from './RestrictedRoute';
import { authAPI } from 'redux/auth';
import { getRefreshing } from 'redux/auth/selectors';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

function App() {
  const isRefreshing = useSelector(getRefreshing);
  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(authAPI.refreshUser());
    }, [dispatch]);
  
    return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
          <Route path="/register" element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          } />
          <Route path="/login" element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          } />
          <Route path="/contacts" element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          } />
        </Route>
     </Routes>
    )       
               };

export default App;
