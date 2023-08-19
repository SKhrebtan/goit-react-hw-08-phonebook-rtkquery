import { useDispatch, useSelector } from 'react-redux';
import { getError, getPending} from 'redux/auth/selectors';
import { authAPI } from 'redux/auth';
import { Box, TextField, Button } from '@mui/material';
import { Navigate, useLocation } from 'react-router-dom';

export const LoginForm = () => {

  const dispatch = useDispatch();
  const isPending = useSelector(getPending);
  const error = useSelector(getError);
  const location = useLocation();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authAPI.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  
    form.reset();
    
      
          };

  return (
    <>  <form onSubmit={handleSubmit}>
      <Box sx={{padding: '20px', display: 'flex', gap: '20px', marginBottom: '20px'}}>
        <TextField id="outlined-basic" label="Email" variant="outlined" type="email" name="email" />
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password" />
        <Button sx={{width: '200px', height: '56px'}} variant="contained" type="submit" disabled={isPending}>Log In</Button>
      </Box>
    </form>
      {error && <Navigate to="/notfound" replace={true} state={{ from: location, error }} />}
    </>
  
  )
}

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label >
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label >
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//   );
// };
//  <Box
//         component="form"
//         sx={{
         
//       }}
//       onSubmit={handleSubmit}
//       autoComplete="off"
//     >
//       <Box
//         component="label"
//       >
//         Email
//         <Box
//           component="input"
//           type="email"
//           name="email" />
//       </Box>
//       <Box
//         component="label"
//       >
//         Password
//         <Box
//           component="input"
//           type="Password"
//           name="Password" />
//       </Box>
//       <Box
//         component="button"
//         type="submit"
//       >Log In</Box>
//       </Box>
