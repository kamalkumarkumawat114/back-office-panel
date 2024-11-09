import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

function Login({ onLogin }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === 'admin' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '20vh' }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        boxShadow={3}
        p={4}
        borderRadius={2}
      >
        <Typography variant="h5" color="primary" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            fullWidth
            label="User ID"
            margin="normal"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: '16px' }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
