import { Outlet } from 'react-router-dom';
import { MyAppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import {Box} from '@mui/material';
import { Toaster } from 'react-hot-toast';
export const Layout = () => {
  return (
    <div >
      <MyAppBar />
      <Toaster/>
 <Suspense fallback={null}>
        <Box sx={{padding: '20px'}}>
          <Outlet />
        </Box>
      
</Suspense>
    </div>
  );
};