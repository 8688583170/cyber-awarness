import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CyberSafe Schools
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/lessons">Lessons</Button>
        <Button color="inherit" component={Link} to="/quiz">Quiz</Button>
        <Button color="inherit" component={Link} to="/resources">Resources</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 