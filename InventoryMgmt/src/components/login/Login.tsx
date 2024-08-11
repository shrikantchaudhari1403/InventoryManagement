import React, { FC } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';

const LoginFinal: FC = () => {
  const paperStyle: React.CSSProperties = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
  const avatarStyle: React.CSSProperties = { backgroundColor: '#1bbd7e' };
  const btnstyle: React.CSSProperties = { margin: '8px 0' };
  const navigate = useNavigate();
  
  const userLogin = () => {
    alert("Great Shot!");
    window.localStorage.setItem("isAuthenticated","true");
    navigate('/dashboard');
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid>
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required />
        <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required />
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Button type='submit' color='primary' variant="contained" onClick={userLogin}  style={btnstyle} fullWidth>Sign in</Button>
        <Typography>
          <Link href="#">
            Forgot password ?
          </Link>
        </Typography>
        <Typography> Do you have an account ?
          <Link href="#">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default LoginFinal;