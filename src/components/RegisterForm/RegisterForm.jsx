import { useDispatch,useSelector } from 'react-redux';
import { authAPI } from 'redux/auth';
import { Box, TextField, Button } from '@mui/material';
import { getError } from 'redux/auth/selectors';
import { Navigate, useLocation  } from 'react-router-dom';
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const location = useLocation();
 
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authAPI.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
       <form onSubmit={handleSubmit}>
      <Box sx={{ padding: '20px', display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <TextField id="outlined-basic" label="Name" variant="outlined" type="name" name="name" />
        <TextField id="outlined-basic" label="Email" variant="outlined" type="email" name="email" />
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password" />
        <Button sx={{width: '200px', height: '56px'}} variant="contained" type="submit">Register</Button>
      </Box>
      
      
    </form>
     {error && <Navigate to="/notfound" replace={true} state={{ from: location, error }}/>}
    </>
   
  );
};

// {/* <form  onSubmit={handleSubmit} autoComplete="off">
//       <label >
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label >
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label >
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form> */}
