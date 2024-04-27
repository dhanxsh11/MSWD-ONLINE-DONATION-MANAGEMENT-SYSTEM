import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box >
      <AppBar position="static" color="inherit">
        <Toolbar>
            <Link to="/R2">Login</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/B">Back</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}